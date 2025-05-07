class shape{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;

    }

    moveShape()
    {
        translate(this.x, this.y); 
    }
    rotate(axis)
    {
        if(axis == 'x'){rotateX(frameCount/10);}
        else if(axis == 'y'){rotateY(frameCount/10);}
        else if(axis == 'z'){rotateZ(frameCount/10);}
    }
}