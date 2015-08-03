var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", this);
    }
    Game.prototype.preload = function () {
        console.log("preload");
    };
    Game.prototype.create = function () {
        console.log("create");
        this.text = this.game.add.text(400, 300, "HEY", { fill: "white" });
        this.text.anchor.setTo(0.5, 0.5);
    };
    Game.prototype.update = function () {
        this.text.rotation += 0.01;
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.text.rotation += 0.02;
        }
    };
    return Game;
})(Phaser.State);
window.onload = function () {
    var game = new Game();
};
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.call(this);
    }
    return Menu;
})(Phaser.State);
