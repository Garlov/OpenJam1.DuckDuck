import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {}
  preload() {
    this.game.physics.startSystem(Phaser.Physics.P2JS)
    this.game.physics.p2.restitution = 0.4
    this.game.physics.p2.gravity.x = 40

    this.fluid = this.game.add.group()
    for (var i = 0; i < 220; i++) {
      let randomX = this.game.rnd.between(0, this.game.width / 3)
      let randomY = this.game.rnd.between(0, this.game.height)

      let droplet = this.game.add.sprite(randomX, randomY, 'drop')
      droplet.scale.set(2)

      // Enable physics for the droplet
      this.game.physics.p2.enable(droplet)
      droplet.body.collideWorldBounds = true

      // Add a force that slows down the droplet over time
      droplet.body.damping = 0.3

      // This makes the collision body smaller so that the droplets can get
      // really up close and goopy
      droplet.body.setCircle(droplet.width * 0.3)

      // Add the droplet to the fluid group
      this.fluid.add(droplet)
    }

    this.addShaders()
  }

  create() {}

  render() {}

  addShaders() {
    let blurX = this.game.add.filter('BlurX')
    let blurY = this.game.add.filter('BlurY')
    blurX.blur = 32
    blurY.blur = 32
    let thresholdShader = new Phaser.Filter(this.game, null, this.game.cache.getShader('threshold'))
    this.fluid.filters = [blurY, blurX, thresholdShader]
    this.fluid.filterArea = this.game.camera.view
  }
}
