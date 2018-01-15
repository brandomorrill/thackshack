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
    this.showBilly();
  }

  showBilly() {
    this.billy = this.add.sprite(200, 200, 'billy-walk');
    this.billy.anchor.setTo(1,1);
    this.billy.scale.setTo(1.5,1.5);
    this.billy.animations.add('run');
  }

  update() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.billy.x -= 4;
        this.billy.animations.play('run', 10);
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.billy.x += 4;
        this.billy.animations.play('run', 10);
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.billy.y -= 4;
        this.billy.animations.play('run', 10);
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        this.billy.y += 4;
        this.billy.animations.play('run', 10);
    }
  }

  render() {
    this.game.debug.spriteInfo(this.billy, 20, 32);
  }

}
