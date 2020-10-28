console.log("this is working");

let game = new Game();

function preload() {
  game.preLoadGame();
}

function setup() {
  frameRate(60);
  createCanvas(700, 700);
  game.setupGame();
}

function draw() {
  game.drawGame();
  if (keyIsDown(LEFT_ARROW)) {
    // game.x -= 5;
    game.player.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    // game.x += 5;
    game.player.x += 5;
  }
}

function keyPressed() {
  console.log("any key has been pressed");
  if (keyCode === 40) {
    console.log("this is the down key");
    game.y += 10;
  }

  if (keyCode === 38) {
    console.log("this is the up key");
    game.y -= 10;
  }
}

function mouseClicked() {
  console.log("this is the mouse", mouseX, mouseY);
  game.player.x = mouseX;
  game.circleX = mouseX;
  game.player.y = mouseY;
}
