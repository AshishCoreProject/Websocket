// Paste on the console and connect with the websocket server and send message. See the server how its responding
// You can see in the network tab and see how the connection is formed up
const socket = new WebSocket("ws://localhost:8000");


socket.onopen = () => {
    console.log("Connected with the server");
    socket.send("Hi Server")
}
socket.onmessage = (event) => {
    console.log(`server: ${event.data}`)
}

socket.onerror = (error) => {
    console.log(error)
}

socket.onclose = () => {
    console.log("connection is closed");
}