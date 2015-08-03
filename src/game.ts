class Game extends Phaser.State {
  constructor() {
    super();
    this.game = new Phaser.Game(800,600,Phaser.AUTO, "content", this);
  }
  game: Phaser.Game;
  text: Phaser.Text;

  preload() {
    console.log("preload");
  }

  create() {
    console.log("create");
    this.text = this.game.add.text(400, 300, "HEY", {fill: "white"});
    this.text.anchor.setTo(0.5, 0.5);
  }

  update() {
    this.text.rotation += 0.01;
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.text.rotation += 0.02;
    }
  }
}

window.onload = () => {

    var game = new Game();

};

class Menu extends Phaser.State {
  constructor() {
    super();
  }

}
