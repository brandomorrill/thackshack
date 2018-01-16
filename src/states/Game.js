/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

export default class Game extends Phaser.State {

  create() {
    //  TODO: Replace this content with really cool game code here :)
    const {centerX: x, centerY: y} = this.world;
    this.showLevel();
    this.showBilly();
  }

  showLevel() {
    this.level = this.add.sprite(0, 0, 'level1');
    this.level.scale.setTo(2, 2);
  }

  showBilly() {
    this.billy = this.add.sprite(200, 200, 'billy-walk');
    this.billy.anchor.setTo(1, 1);
    this.billy.scale.setTo(2, 2);
    this.billy.animations.add('run');
  }

  update() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.billy.animations.play('run', 10);
      if (this.billy.x <= 32) {
        this.billy.x = 32;
        return;
      }
      this.billy.x -= 4;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.billy.animations.play('run', 10);
      if (this.billy.x >= 640) {
        this.billy.x = 640;
        return;
      }
      this.billy.x += 4;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.billy.animations.play('run', 10);
      if (this.billy.y <= 280) {
        this.billy.y = 280;
        return;
      }
      this.billy.y -= 4;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.billy.animations.play('run', 10);
      if (this.billy.y >= 386) {
        this.billy.y = 386;
        return;
      }
      this.billy.y += 4;
    }
  }

  render() {
    this.game.debug.spriteInfo(this.billy, 20, 32);
  }

}
