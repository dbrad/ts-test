var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        this.sprites = [];
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", this);
    }
    Game.prototype.preload = function () {
        console.log("preload");
    };
    Game.prototype.create = function () {
        console.log("create");
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var graphics = this.game.add.graphics(0, 0);
        graphics.beginFill(0xFFFFFF);
        graphics.drawRect(0, 0, 16, 16);
        graphics.endFill();
        graphics.visible = false;
        var texture = graphics.generateTexture();
        var counter = 0;
        while (counter < 10) {
            this.sprites.push(this.game.add.sprite(32 * counter, 32 * counter, texture));
            var sprite = this.sprites[counter];
            sprite.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
            sprite.body.velocity.setTo(200, 200);
            sprite.body.collideWorldBounds = true;
            sprite.body.bounce.set(1);
            counter++;
        }
        this.game.physics.arcade.gravity.y = 225;
    };
    Game.prototype.update = function () {
        // this.game.physics.arcade.velocityFromAngle(
        //   this.sprite.angle, 400, this.sprite.body.velocity);
    };
    return Game;
})(Phaser.State);
window.onload = function () {
    var game = new Game();
};
