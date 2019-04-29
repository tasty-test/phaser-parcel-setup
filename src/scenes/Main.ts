import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";

export default class Main extends Phaser.Scene {
  private fpsText!: Phaser.GameObjects.Text;
  private constructor() {
    super({
      key: "Main",
    });
  }

  protected create(): void {
    this.fpsText = new FpsText(this);
    new PhaserLogo(this, this.cameras.main.width / 2, 0);
    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 10, 10, `Phaser v${Phaser.VERSION}`, {
        color: "#fff",
        fontSize: 18,
      })
      .setOrigin(1, 0);
  }

  public update(): void {
    this.fpsText.update(this);
  }
}
