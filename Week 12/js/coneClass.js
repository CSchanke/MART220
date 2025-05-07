class coneClass extends shape{

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
        super.rotate('y');
        cone(this.radius, this.height);
        pop();
    }
}