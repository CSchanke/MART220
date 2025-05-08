class shape{
    //didn't really need this parent class, but this project was based off week 12, soo it was simpler to keep it in
    constructor(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    moveShape()
    {
        translate(this.x, this.y, this.z); 
    }
    spin(axis,speed)
    {
        if(axis == 'x'){rotateX(speed);}
        else if(axis == 'y'){rotateY(speed);}
        else if(axis == 'z'){rotateZ(speed);}
    }
}