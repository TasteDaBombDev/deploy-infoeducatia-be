
// IMPORT LA SOCKET.IO-CLIENT DIN CND CA NU POT ACCESA NODE_MODULES
importScripts("https://cdn.socket.io/4.6.0/socket.io.min.js")

const socket = io("ws://localhost:3005")

onmessage = (event) => {

    const obj = event.data
    // const jsonString = JSON.stringify(obj)
    // self.postMessage(obj.event)

    let type = obj.event;
    // postMessage(Object.keys(data)[1])

    try {
        socket.emit(type, JSON.stringify(obj))
        // socket.close()
    } catch (e) {
        postMessage(e)
    }

}

