const { Server } = require("socket.io");
const cors = require("cors");

const corsOptions = {
  origin: "*",
};

const io = new Server({
  cors: corsOptions,
});

io.on("connection", (socket) => {
  console.log(socket.id + " a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("sendMessage", (message) => {
    console.log("Message received:", message);
    io.emit("message", message);
  });
});

const PORT = 3000; // Choose the port you want your server to listen on

io.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
