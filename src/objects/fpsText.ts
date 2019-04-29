export default class FpsText extends Phaser.GameObjects.Text {
  public constructor(scene: Phaser.Scene) {
    super(scene, 10, 10, "", { color: "green", fontSize: 18 });
    scene.add.existing(this);
    this.setOrigin(0);
  }

  public update(scene: Phaser.Scene): void {
    this.setText(`fps: ${Math.floor(scene.game.loop.actualFps)}`);
  }
}
