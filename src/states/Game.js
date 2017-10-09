import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {
    this.ducksMoved = 0
    this.stage.disableVisibilityChange = true
    let rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R)
    rKey.onDown.add(() => {
      this.state.start('Game')
    })
  }
  preload() {
    this.game.physics.startSystem(Phaser.Physics.P2JS)
    this.game.physics.p2.restitution = 0.4
    this.game.physics.p2.gravity.y = 250

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
  }

  checkDuckDistance() {
    if (this.duck.position.x > this.game.width - 200) {
      this.ducksMoved += 1
      this.resetDuck()
    }
  }

  resetDuck() {
    this.duck.body.x = 100
    this.duck.body.y = 100
    this.duck.body.mass += 20
    this.duck.body.velocity.x = 100
    this.duck.body.velocity.y = 0
  }

  create() {}

  render() {}

  update() {
    this.checkDuckDistance()
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
