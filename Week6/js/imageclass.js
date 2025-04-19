class imageclass{
    
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    moveRight()
    {
        var x=this.getX();
        x+=40;
        return x;
    }
    moveLeft()
    {
        var x=this.getX();
        x-=40;
        return x;
    }
    moveUp()
    {
        var y=this.getY();
        y-=40;
        return y;
    }
    moveDown()
    {
        var y=this.getY();
        y+=40;
        return y;
    }
    updateX(x)
    {
        this.x = x;
    }
    updateY(y)
    {
        this.y=y;
    }
}