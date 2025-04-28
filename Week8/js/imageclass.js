class imageclass{
  constructor(path, x, y)
  {
    this.path = path;
    this.myImage = loadImage(this.path);
    this.x = x;
    this.y = y;
    this.imageWidth = 300;
    this.imageHeight = 300;
    this.flipX = false;
  }
  draw() {
    push();
    if (this.flipX) {
      translate(this.imageWidth, 0);
      scale(-1.0, 1.0);
      image(this.myImage, -this.x, this.y, 300, 300);
    }
    else {
      image(this.myImage, this.x, this.y, 300, 300);
    }
    pop();
  }
}