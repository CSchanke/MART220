class imageclass{
  constructor(x, y, w, h)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imageObjects = [];
    this.currentAnimation;
    this.createAnimation();
    this.currentFrameCount = 0;
    this.speed = 3;
  }
  getX() {
    return this.x;
}

setX(x) {
    this.x = x;
}

setCurrentFrameCount(currentFrameCount) {

    this.currentFrameCount = currentFrameCount;
}

createAnimation() {
    this.currentAnimation = createSprite(300, 250,'d');
    this.currentAnimation.overlaps(allSprites);
}
loadAnimation(animationType, fileNames) {

    this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
    this.currentAnimation.width = 300;
    this.currentAnimation.height = 150;


}
getCurrentAnimation()
    {
        return this.currentAnimation;
    }


drawAnimation(animationType) {
    this.currentAnimation.scale = .5;
    this.currentAnimation.changeAnimation(animationType);
    if (animationType == 'run' && this.direction == 'right') {
      this.currentAnimation.direction = 0;
      this.currentAnimation.mirror.x = false;
      this.currentAnimation.speed = this.speed;

    }
    else if (animationType == 'run' && this.direction == 'left') {

      this.currentAnimation.mirror.x = true;
      this.currentAnimation.direction = 180;
      this.currentAnimation.speed = this.speed;

    }
    else if (animationType == 'run' && this.direction == 'down') {

      this.currentAnimation.mirror.x = false;
      this.currentAnimation.direction = -270;
      this.currentAnimation.speed = this.speed;

    }
    else if (animationType == 'run' && this.direction == 'up') {

      this.currentAnimation.mirror.x = false;
      this.currentAnimation.direction = 270;
      this.currentAnimation.speed = this.speed;

    }
    else {
      this.currentAnimation.velocity.x = 0;
      this.currentAnimation.velocity.y = 0;
    }

}


updatePosition(direction) {
    this.direction = direction;
}

isColliding(myImage) {
  return this.currentAnimation.overlaps(myImage);
}


}