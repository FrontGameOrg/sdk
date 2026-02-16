const matchmaking = require("../systems/matchmaking");
const combatSystem = require("../systems/combatSystem");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Player connected:", socket.id);

    matchmaking.addPlayer(socket);

    socket.on("attack", (data) => {
      combatSystem.handleAttack(io, socket, data);
    });

    socket.on("disconnect", () => {
      console.log("Player disconnected:", socket.id);
      matchmaking.removePlayer(socket.id);
    });
  });
};
