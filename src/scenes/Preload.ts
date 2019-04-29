import loadAssets from "../utils/loadAssets";

export default class Preloader extends Phaser.Scene {
  private readonly BAR_HEIGHT: number = 10;
  private bar: any; // eslint-disable-line 

  private constructor() {
    super({
      key: "Preloader",
    });
  }

  protected preload(): void {
    loadAssets(this, {
      image: {
        logo: "logo.png",
      },
    });

    // Display loading progress
    const { width } = this.game.config;
    this.bar = this.add.graphics({
      x: this.centerX() - this.centerX(),
      y: this.centerY(),
    });
    this.bar.fillStyle(0xaeaeae, 1).fillRect(0, -(this.BAR_HEIGHT / 2), width, this.BAR_HEIGHT);

    this.load.on("progress", this.updateProgressDisplay, this);
  }

  protected create(): void {
    this.load.off("progress", this.updateProgressDisplay, this);

    this.tweens.add({
      targets: this.bar,
      scaleY: 0,
      duration: 200,
      ease: "EaseQuadOut",
      onComplete(): void {
        this.scene.switch("Main");
      },
      callbackScope: this,
    } as any); // eslint-disable-line 
  }

  private updateProgressDisplay(pct: number): void {
    this.bar
      .clear()
      .fillStyle(0x50576b, 1)
      .fillRect(0, -(this.BAR_HEIGHT / 2), this.game.config.width, this.BAR_HEIGHT)
      .fillStyle(0xffffff, 1)
      .fillRect(
        0,
        -(this.BAR_HEIGHT / 2),
        Math.round(+this.game.config.height * pct),
        this.BAR_HEIGHT,
      );
  }

  private centerX(): number {
    return +this.game.config.width / 2;
  }

  private centerY(): number {
    return +this.game.config.height / 2;
  }
}
