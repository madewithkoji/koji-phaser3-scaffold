import Phaser from "phaser";
import Koji from 'koji-tools';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-scaffold",
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", Koji.config.images.mouse);
}

function create() {
  this.cameras.main.setBackgroundColor(Koji.config.colors.backgroundColor);
  const logo = this.add.image((window.innerWidth / 2), 100, "logo");
  this.add.text(20, 20, Koji.config.strings.content, { color: Koji.config.colors.textColor });

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
