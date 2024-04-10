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

  socket.on("joinRoom", (roomId) => {
    console.log(`User joined room ${roomId}`);
    socket.join(roomId); // Join the specified room
  });

  socket.on("message", (data) => {
    // Send the message only to sockets in the specified room
    console.log(`Message received in room ${data.roomId}: ${data.message}`);
    io.to(data.roomId).emit("message", {
      roomId: data.roomId,
      message: data.message,
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = 3000; // Choose the port you want your server to listen on

io.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
