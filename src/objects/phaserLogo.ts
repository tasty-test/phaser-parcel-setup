export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  public constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "logo");
    this.setOrigin(0.5);
    // this.setSize(this.displayWidth / 2, this.displayHeight / 2);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setInteractive()
      .on(
        "pointerdown",
        (): void => {
          this.setVelocityY(-400);
        },
      );
  }
}
