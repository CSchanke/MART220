class planetClass extends shape{

    constructor(x, y, z, radius, index, rotation, axis)
    {
        super(x,y,z);
        this.radius = radius;
        this.index = index;
        this.rotation = rotation;
        this.axis = axis;
    }

    draw()
    {
        //Getting this rotation to work was a nightmare
        //but I did it!
        var rotSpd = [0.04,0.41,-0.004,1,.98,2.4,2.23,1.14,1.5];
        this.rotation += rotSpd[this.index]/100;
        push();
        super.moveShape();
        super.spin(this.axis,this.rotation);
        sphere(this.radius);
        pop();
    }

    updatePosition(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}