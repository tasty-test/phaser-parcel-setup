export default class Boot extends Phaser.Scene {
  private constructor() {
    super({ key: "Boot" });
  }

  protected create(): void {
    // Initialize things here

    // Loading screen
    this.scene.switch("Preloader");
  }
}
