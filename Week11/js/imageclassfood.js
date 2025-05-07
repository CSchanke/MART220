class imageclassfood{
    
    constructor(x, y, bad)
    {
        this.x = x;
        this.y = y;
        this.burger= new Sprite(x,y,50,'s');
        this.bad = bad;
    }
    draw()
    {
        if(this.bad)
            {
            this.burger.color = "red"
            }
            else
            {
                this.burger.color = "green"
            }
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    jump(xMin,xMax,yMin,yMax)
    {
        this.x=random(xMin,xMax);
        this.y=random(yMin,yMax);
        this.burger.remove();
        this.burger= new Sprite(this.x,this.y,50);
    }
}