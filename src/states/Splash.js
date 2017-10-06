import Phaser from 'phaser'
import {
  centerGameObjects
} from '../utils'

export default class extends Phaser.State {
  init() {}

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.script('BlurX', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/BlurX.js');
    this.load.script('BlurY', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/BlurY.js');
    this.load.shader('threshold', './assets/shaders/threshold.frag')
    this.load.image('drop', './assets/images/drop.png')
  }

  create() {
    this.state.start('Game')
  }
}
