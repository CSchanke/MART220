class ellipseClass extends shape{

    constructor(x, y, width, height)
    {
        super(x,y);
        this.width = width;
        this.height = height;
    }

    draw()
    {
        push();
        super.moveShape();
        super.rotate('x');
        ellipsoid(this.width, this.height);
        pop();
    }
}