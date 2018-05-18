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
    this.load.script('BlurX', 'https://raw.githubusercontent.com/photonstorm/phaser-ce/master/filters/BlurX.js')
    this.load.script('BlurY', 'https://raw.githubusercontent.com/photonstorm/phaser-ce/master/filters/BlurY.js')
    this.load.shader('threshold', './assets/shaders/threshold.frag')
    this.load.image('drop', './assets/images/drop.png')
    this.load.image('duck', './assets/images/duck_yellow.png')
    this.load.image('button', './assets/images/button.png')
    this.load.image('pipe', './assets/images/pipe.png')
  }

  create() {
    this.state.start('Menu')
  }
}
