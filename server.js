require("dotenv").config();
const express = require("express");
const http = require("http");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing")
const app = express();
Sentry.init({
  dsn: "https://1e1a1785351e4bfa8c356a74f4d4cdf9@o1101436.ingest.sentry.io/6127410",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.use(Sentry.Handlers.errorHandler());
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server, {
	cors: "*",
});

const users = {};
const socketToRoom = {};
const roomCurrentEvent = {};

io.on("connection", async (socket) => {
	const room = socket.handshake.query.room;

	socket.on("join room", async (roomID) => {
		const users = await io.in(room).fetchSockets();
		if (users) {
			const length = users.length;
			if (length === 10) {
				socket.emit("room full");
				return;
			}
			socket.join(roomID);
			const usersInThisRoom = users.filter((user) => user.id !== socket.id);
			const usersInThisRoomIds = usersInThisRoom.map((u) => u.id);
			socket.emit("all users", usersInThisRoomIds);
			console.log(room, roomCurrentEvent[room]);
			socket.emit("currentRoomEvent", { event: roomCurrentEvent[room], id: socket.id });
		}
	});

	socket.on("sending signal", (payload) => {
		if (payload.callerID.trim() !== "share_screen") {
			io.to(payload.userToSignal).emit("user joined", {
				signal: payload.signal,
				callerID: payload.callerID,
			});
		}
	});

	socket.on("returning signal", (payload) => {
		io.to(payload.callerID).emit("receiving returned signal", {
			signal: payload.signal,
			id: socket.id,
		});
	});

	socket.on("me editor write", event => {
		event.push(socket.id);
		io.in(room).emit("peer editor write", event);
	});

	socket.on("write whiteboard", ({ drawing, color, size, roomID }) => {
		// console.log(drawing, color, size);
		io.in(roomID).emit("write whiteboard", [drawing, color, size]);
	});

	socket.on("clear whiteboard", (roomID) => {
		io.in(roomID).emit("delete whiteboard");
	});

	socket.on("disconnect", () => {
		socket.leave(room);
		io.in(room).emit("user left", socket.id);
	});

	socket.on("open whiteboard", (roomID) => {
		roomCurrentEvent[room] = 'whiteboard';
		io.in(roomID).emit("open whiteboard server", socket.id);
	});

	socket.on("close whiteboard", (roomID) => {
		roomCurrentEvent[room] = '';
		io.in(roomID).emit("close whiteboard server", socket.id);
	});

	socket.on("open share screen", async () => {
		roomCurrentEvent[room] = 'present';
		io.in(room).emit("open share screen server", socket.id);
	});

	socket.on("send data share screen", async (image) => {
		roomCurrentEvent[room] = 'present';
		// console.log(image);
		io.in(room).emit("send data share screen server", {id: socket.id, data: image });
	});

	socket.on("stop data share screen", async (image) => {
		roomCurrentEvent[room] = 'present';
		io.in(room).emit("stop data share screen server", socket.id);
	});

	socket.on("close share screen", async () => {
		roomCurrentEvent[room] = '';
		io.in(room).emit("close screen share server", socket.id);
	});

	socket.on("open editor", (roomID) => {
		roomCurrentEvent[room] = 'editor';
		io.in(roomID).emit("open editor server", socket.id);
	});

	socket.on("close editor", (roomID) => {
		roomCurrentEvent[room] = '';
		io.in(roomID).emit("close editor server", socket.id);
	});
});
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("server is running on port " + PORT));
