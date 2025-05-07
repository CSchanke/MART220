var tube;
var cube;
var shape3;
var shape4;
var shape5;
var color;
var img;
var img2;

function preload()
{
    img = loadImage("images/leaf-texture.jpg");
    img2 = loadImage("images/stone-texture.jpg");
}

function setup()
{
    createCanvas(1200,900, WEBGL);
    tube =new cylinderClass(-375, 0, 100, 300);
    cube =new cubeClass(-200,-200,100,100,100);
    shape3 =new coneClass(0,200,100,150);
    shape4 =new ellipseClass(350,200,100,200);
    shape5 =new planeClass(200,-200,100,150);
}

function draw()
{
    background(220);
    normalMaterial();
    stroke(0);
    tube.draw();
    cube.draw();
    push();
    emissiveMaterial('red');
    shape3.draw();
    pop();
    texture(img2);
    shape4.draw();
    texture(img);
    shape5.draw();
}
