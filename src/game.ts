class Game extends Phaser.State {
  constructor() {
    super();
    this.game = new Phaser.Game(800,600,Phaser.AUTO, "content", this);
  }
  game: Phaser.Game;
  sprites: Phaser.Sprite[] = [];


  preload() {
    console.log("preload");

  }

  create() {
    console.log("create");
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    var graphics = this.game.add.graphics(0,0);
    graphics.beginFill(0xFFFFFF);
    graphics.drawRect(0,0,16,16);
    graphics.endFill();
    graphics.visible = false;
    var texture = graphics.generateTexture();

    var counter:number = 0;

    while(counter < 10) {
      this.sprites.push(this.game.add.sprite(32*counter,32*counter,texture));
      var sprite = this.sprites[counter];

      sprite.anchor.setTo(0.5,0.5);
      this.game.physics.enable(sprite, Phaser.Physics.ARCADE);

      sprite.body.velocity.setTo(200,200);
      sprite.body.collideWorldBounds = true;

      sprite.body.bounce.set(1);
      counter++;
    }

    this.game.physics.arcade.gravity.y = 225;
  }

  update() {
    // this.game.physics.arcade.velocityFromAngle(
    //   this.sprite.angle, 400, this.sprite.body.velocity);

  }
}



window.onload = () => {

    var game = new Game();

};
