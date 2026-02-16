const matchmaking = require("./matchmaking");
const { DAMAGE } = require("../config/gameConfig");

function handleAttack(io, attackerSocket, data) {
  const players = matchmaking.getPlayers();
  const target = players[data.targetId];

  if (!target) return;

  target.health -= DAMAGE;

  if (target.health <= 0) {
    io.to(target.id).emit("eliminated");
    delete players[target.id];
    io.emit("player_eliminated", target.id);
  } else {
    io.to(target.id).emit("damaged", target.health);
  }
}

module.exports = {
  handleAttack
};
