const { createServer } = require('http');
const { Server } = require('socket.io')

// Create a WebSocket server
// const wss = new WebSocket.Server({ port: 3005 });

const http = createServer();
const wss = new Server(http, {
  cors: {
    origin: '*'
  },
  maxHttpBufferSize: 1e6,

})

wss.setMaxListeners(50)

const calculateDistance = (p1, p2) => {
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  let c = p2.z - p1.z;

  return Math.sqrt(a * a + b * b + c * c);
}

// Store connected clients
const connectedClients = new Set();

var values = {
  'player_id': {
    brat_height: 'brat_height',
    chassis_position: 'chassis_position',
    chassis_direction: 'chassis_direction',
    chassis_quaternion: 'chassis_quaternion'
  }
}

const camera = {
  'host': undefined,
  'join': undefined
}

var cones = {}

// WebSocket server event handlers
wss.on('connection', (ws) => {
  // Add the client to the connected clients set
  connectedClients.add(ws);
  console.log(`Client connected. Total clients: ${connectedClients.size}`);
  if (connectedClients.size >= 50) { console.log('DA RESTART') }

  // WebSocket message event handler
  // ws.on('message', (message) => {
  //   let data = JSON.parse(message)

  //   console.log(`Received message from client: ${data}`);

  //   // Send the message to all connected clients
  //   connectedClients.forEach((client) => {
  //     // client.send(message);
  //     client.send(JSON.stringify(data))
  //   });
  // });

  ws.on('info', (message) => { console.log(`[CLIENT]: ${message}`) })

  ws.on('justConnect', (message) => {
    let data = {}
    data = JSON.parse(message)
    console.log(data)

    if (data.role == 'join')
      console.log('[SERVER]: A intrat un invitat')
    else
      console.log('[SERVER]: A intrat un host')

    camera[data.role] = data.player_id

    if (camera.host == camera.join) {
      camera.host = undefined
      camera.join = undefined
      camera[data.role] = data.player_id
    }
    console.log(camera)
  })

  ws.on('updateData', (message) => {
    let data = {}
    data = JSON.parse(message)
    // console.log(data)
    values[data.player_id] = {
      brat_height: data.brat_height,
      chassis_position: data.chassis_position,
      chassis_direction: data.chassis_direction,
      chassis_quaternion: data.chassis_quaternion
    }
    console.log(values[data.player_id])

    // values[data.player_id] = {
    //   brat_height: data.brat_height,
    //   brat_chassis: data.brat_chassis,
    //   body_chassis: data.body_chassis
    // }

    // console.log(values)

    wss.emit("dataReload", JSON.stringify({
      player_id: data.player_id,
      brat_height: data.brat_height,
      chassis_position: data.chassis_position,
      chassis_direction: data.chassis_direction,
      chassis_quaternion: data.chassis_quaternion
    }))
  })

  ws.on('updateCones', (message) => {
    let data = JSON.parse(message)
    // SET CONES DATA ON INIT
    if (Object.keys(cones).length == 0 && (camera.host == data.player_id)) {
      delete data.player_id
      delete data.event
      cones = { ...data }
    } else if (values[camera.host] != undefined && values[camera.join] != undefined) {
      let player = data.player_id
      delete data.player_id
      delete data.event

      let hostPostion = values[camera.host].chassis_position
      let joinPosition = values[camera.join].chassis_position

      Object.keys(data).forEach(key => {
        let con = data[key]
        let pozitie_con = con.position
        let dist_host = calculateDistance(pozitie_con, hostPostion)
        let dist_join = calculateDistance(pozitie_con, joinPosition)
        if (dist_host <= dist_join && camera.host == player)
          cones = {
            ...cones,
            [key]: data[key]
          }
        else if (dist_join <= dist_host && camera.join == player)
          cones = {
            ...cones,
            [key]: data[key]
          }
      })

      // console.log(cones)

      if (Object.keys(cones).length == Object.keys(data).length)
        wss.emit('conesReload', JSON.stringify({...cones, player_id: player}))

      // throw new Error("error")
    }

  })

  ws.on('fieldReset', (message) => {
    wss.emit('fieldReset', message)
  })

  // WebSocket close event handler
  ws.on('close', () => {
    // Remove the client from the connected clients set
    connectedClients.delete(ws);
    console.log(`[SERVER]Total clients: ${connectedClients.size}`);
  });
});

console.log('WebSocket server started on port 3005');
http.listen(3005)