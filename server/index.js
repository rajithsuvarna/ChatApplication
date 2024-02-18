//initialising express
const express = require("express");
const app = express();
//initialising http,cors
const http = require("http");
const cors = require("cors");
//using socket.io
const { Server } = require("socket.io");
app.use(cors());

//setting up express server
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//setting up socket connection
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  //join room
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
  //send message
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  //disconnect
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

//running the server
server.listen(3001, () => {
  console.log("Server running on port:8000");
});
