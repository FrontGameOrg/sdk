const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const gameSocket = require("./socket/gameSocket");
const { startLootSpawning } = require("./systems/lootSystem");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🔥 Front Battle Server Running");
});

gameSocket(io);
startLootSpawning(io);

server.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
