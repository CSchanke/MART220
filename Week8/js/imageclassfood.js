class imageclassfood{
    
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }
    draw()
    {
        image(this.path,this.x,this.y);
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
    updateLocation(x)
    {
        this.x = x;
    }
    jump(xMin,xMax,yMin,yMax)
    {
        this.x=random(xMin,xMax);
        this.y=random(yMin,yMax);
    }
}