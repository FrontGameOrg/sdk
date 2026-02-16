const { LOOT_SPAWN_INTERVAL, MAP_SIZE } = require("../config/gameConfig");

function startLootSpawning(io) {
  setInterval(() => {
    const loot = {
      id: Date.now(),
      x: Math.random() * MAP_SIZE,
      y: Math.random() * MAP_SIZE,
      type: "weapon"
    };

    io.emit("loot_spawned", loot);
  }, LOOT_SPAWN_INTERVAL);
}

module.exports = {
  startLootSpawning
};
