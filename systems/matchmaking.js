const { MAX_PLAYERS, START_HEALTH, MAP_SIZE } = require("../config/gameConfig");

let players = {};

function addPlayer(socket) {
  if (Object.keys(players).length >= MAX_PLAYERS) {
    socket.emit("server_full");
    socket.disconnect();
    return;
  }

  players[socket.id] = {
    id: socket.id,
    health: START_HEALTH,
    x: Math.random() * MAP_SIZE,
    y: Math.random() * MAP_SIZE
  };

  socket.emit("joined", players[socket.id]);
}

function removePlayer(id) {
  delete players[id];
}

function getPlayers() {
  return players;
}

module.exports = {
  addPlayer,
  removePlayer,
  getPlayers
};
