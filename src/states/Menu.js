import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.State {
  init() {}

  preload() {}

  create() {
    const bannerText = config.title

    const defaultTextStyle = {
      font: 'Modak',
      padding: new Phaser.Point(10, 16),
      fontSize: 60,
      fill: '#000000',
      smoothed: false
    }

    this.banner = this.add.text(this.world.centerX, this.game.height * 0.2, bannerText, defaultTextStyle)
    this.banner.fontSize = 100
    this.banner.fill = '#ffff00'
    this.banner.stroke = '#000000'
    this.banner.strokeThickness = 10
    this.banner.anchor.setTo(0.5)

    this.playButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'button', () => {
      this.state.start('Game')
    })
    this.playButton.anchor.set(0.5)

    this.playText = this.add.text(this.game.world.centerX, this.game.world.centerY, 'Play', defaultTextStyle)
    this.playText.anchor.setTo(0.5)
  }

  render() {}

  update() {}
}
