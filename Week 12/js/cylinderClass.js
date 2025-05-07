class cylinderClass extends shape{

    constructor(x, y, radius, height)
    {
        super(x,y);
        this.radius = radius;
        this.height = height;

    }

    draw()
    {
        push();
        super.moveShape();
        super.rotate('x');
        cylinder(this.radius, this.height);
        pop();
    }
}