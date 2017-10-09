import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.State {
  init() {
    this.ducksMoved = 0
    this.stage.disableVisibilityChange = true
    let escKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC)
    escKey.onDown.add(() => {
      this.endGame()
    })
  }
  preload() {
    this.game.physics.startSystem(Phaser.Physics.P2JS)
    this.game.physics.p2.restitution = 0.4
    this.game.physics.p2.gravity.y = 250

    this.goalArea = this.game.add.graphics()
    this.goalArea.beginFill(0xffffff, 0.5)
    this.goalArea.drawRect(this.game.width - 200, 0, 200, this.game.height)
    this.goalArea.endFill()

    this.fluid = this.game.add.group()

    this.game.time.events.loop(10, () => {
      this.addDrop(0)
    }, this)

    this.game.time.events.loop(20, () => {
      this.addDrop(-10)
      this.addDrop(10)
    }, this)

    this.game.time.events.loop(18, () => {
      this.addDrop(-5)
    }, this)

    this.game.time.events.loop(15, () => {
      this.addDrop(5)
    }, this)

    this.addShadersToFluid()

    this.duck = this.game.add.sprite(100, 100, 'duck')
    this.game.physics.p2.enable(this.duck)
    this.duck.body.collideWorldBounds = true

    this.duck.body.setCircle(this.duck.width * 0.5)
    this.duck.body.mass = 200
    this.duck.body.velocity.x = 100

    this.game.time.events.loop(1000, () => {
      this.duck.body.mass += 5
    })

    this.score = this.add.text(this.world.width - 20, 0, '0', config.defaultTextStyle)
    this.score.fontSize = 100
    this.score.fill = '#ffff00'
    this.score.stroke = '#000000'
    this.score.strokeThickness = 10
    this.score.anchor.setTo(1, 0)

    this.pipe = this.game.add.sprite(this.game.input.mousePointer.clientX, this.game.height, 'pipe')
    this.pipe.scale.set(0.5)
    this.pipe.anchor.set(0.5, 1)
  }

  endGame() {
    let highscore = parseInt(localStorage.getItem(config.localStorageName + 'highscore'))

    if (!highscore || highscore < this.ducksMoved) {
      localStorage.setItem(config.localStorageName + 'highscore', this.ducksMoved)
    }

    localStorage.setItem(config.localStorageName + 'last', this.ducksMoved)

    this.state.start('Menu')
  }

  checkDuckDistance() {
    if (this.duck.position.x > this.game.width - 200) {
      this.ducksMoved += 1
      this.score.text = this.ducksMoved
      this.resetDuck()
    }
    if (this.duck.position.y > this.game.height - 50) {
      this.endGame()
    }
  }

  resetDuck() {
    this.duck.body.x = 100
    this.duck.body.y = 100
    this.duck.body.velocity.x = 100
    this.duck.body.velocity.y = 0
  }

  create() {}

  render() {}

  update() {
    this.checkDuckDistance()
    this.pipe.position.x = this.game.input.mousePointer.clientX
  }

  addDrop(xDif) {
    let droplet = this.fluid.getFirstDead()
    if (droplet) {
      droplet.reset(this.game.input.mousePointer.clientX + xDif, 700)
    } else {
      droplet = this.game.add.sprite(this.game.input.mousePointer.clientX + xDif, 700, 'drop')
      droplet.scale.set(0.3)

      // Add the droplet to the fluid group
      this.fluid.add(droplet)
    }
    droplet.lifespan = 3000
    // Enable physics for the droplet
    this.game.physics.p2.enable(droplet)
    droplet.body.collideWorldBounds = true

    // Add a force that slows down the droplet over time
    droplet.body.damping = 0.3

    // This makes the collision body smaller so that the droplets can get
    // really up close and goopy
    droplet.body.setCircle(droplet.width * 0.3)

    droplet.body.velocity.y = -1000
    // droplet.body.velocity.x = this.game.rnd.between(-40, 40)
  }

  addShadersToFluid() {
    let blurX = this.game.add.filter('BlurX')
    let blurY = this.game.add.filter('BlurY')
    blurX.blur = 12
    blurY.blur = 18
    let thresholdShader = new Phaser.Filter(this.game, null, this.game.cache.getShader('threshold'))
    this.fluid.filters = [blurY, blurX, thresholdShader]
    this.fluid.filterArea = this.game.camera.view
  }
}
