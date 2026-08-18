// Paste on the console and connect with the websocket server and send message. See the server how its responding
// You can see in the network tab and see how the connection is formed up
const socket = new WebSocket("ws://localhost:8000");
socket.send("Hi this side is client! Hi Server")
