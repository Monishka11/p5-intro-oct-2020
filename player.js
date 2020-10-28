class Player {
  constructor(color) {
    this.x = 100;
    this.y = 100;
    this.image;
  }

  drawPlayer() {
    fill("blue");
    image(this.image, this.x, this.y, 100, 100);
  }
}
