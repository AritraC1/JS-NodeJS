const express = require("express");
const http = require('http');
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const { Server } = require("socket.io");

dotenv.config();

// Declarations
const app = express();
const server = http.createServer(app);
const PORT_NUMBER = process.env.PORT;
const io = new Server(server); // Instance of io (input output)

// SSR
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
// app.use("/", allRoutes);
app.get("/", async (req, res) => {
  return res.render("chatApp");
});

// Socket.io
io.on('connection', (socket) => {
  console.log('A new user connected', socket.id);

  socket.on("chat message", (msg) => {
    console.log("Message:", msg);
    io.emit("chat message", msg); // send to ALL clients
  });
});

// Start Server
server.listen(PORT_NUMBER, () => {
  console.log(`The server is running on localhost:${PORT_NUMBER}`);
});
