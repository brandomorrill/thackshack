/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

//  -- Splash screen assets used by the Preloader.
export const preloaderAssets = [{
  key: 'splash-screen',
  type: 'image'
}, {
  key: 'progress-bar',
  type: 'image'
}];

//  -- General assets used throughout the game.
export const gameAssets = [{
  key: 'phaser',
  type: 'image'
}, {
  key: 'billy-walk',
  type: 'spritesheet',
  frameWidth: 16,
  frameHeight: 39,
  margin: 0,
  skipFrames: 0
}, {
  key: 'level1',
  type: 'image'
}];
