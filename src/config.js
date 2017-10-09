import Phaser from 'phaser'

export default {
  gameWidth: 1366,
  gameHeight: 768,
  localStorageName: 'duckduck',
  title: 'DUCK DUCK!',
  defaultTextStyle: {
    font: 'Modak',
    padding: new Phaser.Point(10, 16),
    fontSize: 60,
    fill: '#000000',
    smoothed: false
  }
}
