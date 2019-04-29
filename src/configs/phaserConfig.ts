import * as scenes from "../scenes/index";

const gameConfig: GameConfig = {
  type: Phaser.AUTO,
  width: 540,
  height: 960,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "xx-game-container",
  backgroundColor: "#000",
  dom: {
    createContainer: true,
  },
  plugins: {
    global: [],
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 400 },
    },
  },
  scene: Object.values(scenes),
};

export default gameConfig;
