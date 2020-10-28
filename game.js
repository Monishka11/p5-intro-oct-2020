class Game {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.circleX = 300;
    this.circleY = 300;
  }

  preLoadGame() {
    console.log("preload this game");
    this.playerImage = loadImage(
      "https://images-na.ssl-images-amazon.com/images/I/61YaBv8XdcL._AC_SX425_.jpg"
    );
  }

  setupGame() {
    console.log("set up game");
    this.player = new Player();
    this.player.image = this.playerImage;
  }

  drawGame() {
    clear();
    fill("cyan");
    rect(this.x, this.y, 55, 55);
    fill("red");
    circle(this.circleX, this.circleY, 50);
    this.player.drawPlayer();
  }
}
