class cubeClass extends shape{

    constructor(x, y, width, height, depth)
    {
        super(x,y);
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    draw()
    {
        push();
        super.moveShape();
        super.rotate('z');
        box(this.width, this.height, this.depth);
        pop();
    }
}