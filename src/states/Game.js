import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {
    this.stage.disableVisibilityChange = true
  }
  preload() {
    this.game.physics.startSystem(Phaser.Physics.P2JS)
    this.game.physics.p2.restitution = 0.4
    // this.game.physics.p2.gravity.x = 100
    this.game.physics.p2.gravity.y = 250

    this.fluid = this.game.add.group()

    this.game.time.events.loop(10, this.addDrop, this)

    this.addShaders()
  }

  create() {}

  render() {}

  update() {}

  addDrop() {
    let droplet = this.fluid.getFirstDead()
    if (droplet) {
      droplet.reset(700, 700)
    } else {
      droplet = this.game.add.sprite(700, 700, 'drop')
      droplet.scale.set(0.5)

      // Add the droplet to the fluid group
      this.fluid.add(droplet)
    }
    droplet.lifespan = 10000
    // Enable physics for the droplet
    this.game.physics.p2.enable(droplet)
    droplet.body.collideWorldBounds = true

    // Add a force that slows down the droplet over time
    droplet.body.damping = 0.3

    // This makes the collision body smaller so that the droplets can get
    // really up close and goopy
    droplet.body.setCircle(droplet.width * 0.3)

    droplet.body.velocity.y = -800
    droplet.body.velocity.x = this.game.rnd.between(-40, 40)
  }

  addShaders() {
    let blurX = this.game.add.filter('BlurX')
    let blurY = this.game.add.filter('BlurY')
    blurX.blur = 20
    blurY.blur = 20
    let thresholdShader = new Phaser.Filter(this.game, null, this.game.cache.getShader('threshold'))
    this.fluid.filters = [blurY, blurX, thresholdShader]
    this.fluid.filterArea = this.game.camera.view
  }
}
