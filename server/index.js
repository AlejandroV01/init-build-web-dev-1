const { Server } = require("socket.io");
const cors = require("cors");

const corsOptions = {
  origin: "*",
};

const io = new Server({
  cors: corsOptions,
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", (data) => {
    let roomId = JSON.parse(data).roomId;
    let userName = JSON.parse(data).userName;

    console.log(`${userName} joined room ${roomId}`);
    socket.join(roomId); // Join the specified room
  });

  socket.on("send-message", (data) => {
    let dataParsed = JSON.parse(data);
    console.log("data: ");
    console.log(dataParsed);
    io.to(dataParsed.roomId).emit("messaging-room", dataParsed.message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = 3000; // Choose the port you want your server to listen on

io.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
