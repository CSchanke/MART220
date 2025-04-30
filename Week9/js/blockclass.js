class blockclass{
    
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.block= new Sprite(x,y,'static');
    }
    jump(xMin,xMax,yMin,yMax)
    {
        this.x=random(xMin,xMax);
        this.y=random(yMin,yMax);
        this.burger.remove();
        this.burger= new Sprite(this.x,this.y,50);
    }
}