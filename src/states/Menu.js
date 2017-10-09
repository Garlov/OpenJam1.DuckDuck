import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.State {
  init() {}

  preload() {}

  create() {
    const bannerText = config.title

    this.banner = this.add.text(this.world.centerX, this.game.height * 0.2, bannerText, config.defaultTextStyle)
    this.banner.fontSize = 100
    this.banner.fill = '#ffff00'
    this.banner.stroke = '#000000'
    this.banner.strokeThickness = 10
    this.banner.anchor.setTo(0.5)

    this.info = this.add.text(this.world.centerX, this.game.height * 0.35, 'Use the water jet to move the duck from one side to the other. The duck accumulates more and more mass as time goes. How many can you get across before the jet gets insufficient?', config.defaultTextStyle)
    this.info.fontSize = 30
    this.info.fill = '#ffff00'
    this.info.stroke = '#000000'
    this.info.strokeThickness = 6
    this.info.wordWrap = true
    this.info.wordWrapWidth = 800
    this.info.anchor.setTo(0.5, 0)

    this.playButton = this.game.add.button(this.game.world.centerX, this.game.height * 0.7, 'button', () => {
      this.state.start('Game')
    })
    this.playButton.anchor.set(0.5)

    this.playText = this.add.text(this.game.world.centerX, this.game.height * 0.7, 'Play', config.defaultTextStyle)
    this.playText.anchor.setTo(0.5)

    let highscore = parseInt(localStorage.getItem(config.localStorageName + 'highscore'))
    if (Number.isNaN(highscore)) {
      highscore = 0
    }
    this.highscoreText = this.add.text(this.game.world.centerX, this.game.height * 0.85, `Highscore: ${highscore}`, config.defaultTextStyle)
    this.highscoreText.fontSize = 40
    this.highscoreText.fill = '#ffff00'
    this.highscoreText.stroke = '#000000'
    this.highscoreText.strokeThickness = 10
    this.highscoreText.anchor.setTo(0.5)

    let lastscore = parseInt(localStorage.getItem(config.localStorageName + 'last'))
    if (Number.isNaN(lastscore)) {
      lastscore = 0
    }
    this.lastscoreText = this.add.text(this.game.world.centerX, this.game.height * 0.92, `Last score: ${lastscore}`, config.defaultTextStyle)
    this.lastscoreText.fontSize = 40
    this.lastscoreText.fill = '#ffff00'
    this.lastscoreText.stroke = '#000000'
    this.lastscoreText.strokeThickness = 10
    this.lastscoreText.anchor.setTo(0.5)
  }

  render() {}

  update() {}
}
