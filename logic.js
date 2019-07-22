"use strict";

var Game = {
    canvas : undefined,
    canvasContext : undefined,
    backgroundSprite : undefined,
    balloonSprite : undefined,
    balloonPosition : { x : 0, y : 0 },
    backgroundMusic: undefined,
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.balloonSprite = new Image();
    Game.backgroundSprite = new Image();
    Game.balloonSprite.src = "spr_balloon.png";
    Game.backgroundSprite.src = "spr_background.jpg";
    Game.backgroundMusic = new Audio();
    Game.backgroundMusic.src = "snd_music.mp3";
    Game.backgroundMusic.volume = 0.4;
    Game.backgroundMusic.play();
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener('DOMContentLoaded', Game.start);
document.onmousemove = handleMouseMove;

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function () {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {

};

Game.draw = function () {
    Game.drawImage(Game.backgroundSprite, { x : 0, y : 0 });
    Game.drawImage(Game.balloonSprite, Game.balloonPosition);
};

Game.drawImage = function (sprite, position) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0, 0, sprite.width, sprite.height);
    Game.canvasContext.restore();
};

function handleMouseMove(evt) {
    Game.balloonPosition = { x : evt.pageX, y : evt.pageY };
}