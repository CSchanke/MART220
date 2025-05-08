//tried the 'loadStrings' trick, but that didn't work here for some reason, so I just enetered it here
//doesn't really make things any harder to do it like this anyhow
var imageStrings = ['images/sun-texture.png','images/mercury-texture.png','images/venus-texture.png','images/earth-texture.png','images/mars-texture.png','images/jupiter-texture.png','images/saturn-texture.png','images/uranus-texture.png','images/neptune-texture.png'];
var imageList = [];
var planetRadius = [300, 15, 25, 30, 15, 100, 75, 50, 40];
var planetX = [0, 350, 400, 465, 520, 650, 850, 975, 1095];
var planets = [];
var axis = ['y','y','y','y','y','y','y','z','y'];
var orbitX;
var orbitZ;
var index = [0,1,2,3,4,5,6,7,8]
var planet;
var img;
var angle = [0,0,0,0,0,0,0,0,0];
var orbitSpd = [0,0.0107,0.0078,0.0066,0.0054,0.0029,0.0022,0.0015,0.0012];
var bg1;
var bg2;
var bg3;

//most planets (& the sun) have been shrunk due to size and screen space limitations, and they are much closer together than they otherwise would be
//for the same reason
//Venus is actually rotating backwards compared to the other planets, as it should
//however it rotates so slowly that it is difficult to see
//change the third entry in the array rotSpd under the planet class to test it if you want
//Uranus is also rotating vertically, as it does in real space
//I learned that the sun does actually rotate, albeit very slowly
//Bodies rotate at the correct speeds relative to each other, and orbit at the correct speeds relative to each other, within .001
//you also have mouse control over the camera

//!!!!!! PLEASE READ THE README !!!!!!!!

function preload()
{
    //load planet textures into array
    for(i=0;i<9;i++)
    {
        img = loadImage(imageStrings[i]);
        imageList.push(img);
    }
    //load background images
    //They were all made in Photoshop by changing the size of an image I found online ('space-ref2') and using the 'generative extend' tool
    //I tried making my own backgrounds first (bg1 - bg3 in /images/) but they looked bad
    bg1 = loadImage('IMAGES/bg4.png');
    bg2 = loadImage('IMAGES/bg5.png');
    bg3 = loadImage('IMAGES/bg6.png');
}

function setup()
{
    createCanvas(2500,1200, WEBGL);
    //create planet objects
    for(i=0;i<9;i++)
    {
        planet = new planetClass(planetX[i],0,0,planetRadius[i],index[i], 0, axis[i]);
        planets.push(planet);
    }
}

function draw()
{
    background(0);
    //give user control of camera
    orbitControl();
    //ensure the planets do not have black grids on them
    noStroke();

    //create a makeshift skybox
    push();
    texture(bg1);
    translate(0,0,-2500);
    plane(7500,3600);
    translate(0,0,5000);
    plane(7500,3600);
    texture(bg2);
    translate(0,1200,-2500);
    rotateX(1.6);
    plane(7500,5000);
    translate(0,0,2500);
    plane(7500,5000);
    texture(bg3);
    rotateX(-1.6);
    rotateY(1.6);
    translate(0,1200,-3600)
    plane(5000,3600);
    translate(-200,0,7200)
    plane(5000,3600);
    pop();

    //create lighting
    //sun is dim because I could not actually get it to be brighter without messing up the lighting on the other planets
    //which I think looks really good
    //tried emissive material, but that won't display a texture, only color
    //tried all manner of lights in p5.js, and I'm stumped and out of time
    //so just pretend that if it was any brighter ytou'd burn your eyes lookiing at it :)
    lightFalloff(.5,0,0);
    ambientLight(100);
    pointLight(255,255,255,0,0,0);

    //Draw planets
    for(i=0;i<9;i++)
    {
        //generate orbiting pattern for each planet individually, since they all behave differently
        angle[i] = angle[i] + orbitSpd[i];
        orbitX = planetX[i]*cos(angle[i]);
        orbitZ = planetX[i]*sin(angle[i]);
        //Had hoped I was done with this kind of math in high school
        planets[i].updatePosition(orbitX,0,orbitZ);
        //set texture for each planet
        texture(imageList[i]);
        planets[i].draw();
    }
}
