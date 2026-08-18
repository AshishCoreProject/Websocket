import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8000});

wss.on("connection", (ws)=> {
    console.log("Websocket connection is open on server")

    ws.on("message", (data)=> {
        console.log(data.toString());
    })
    ws.on("error", ()=> {
        console.log("something is not right")
    })
    ws.on("close", ()=> {
        console.log("Connection is closed!")
    })

    ws.send("Hi from the websocket server!")

})

