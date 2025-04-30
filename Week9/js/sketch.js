var objIdle=[];
var objRun=[];
var animRun = [];
var animIdle =[];
var i =0;
var animListIdle;
var animListRun;
var burger;
var burger2;
var burgerObj;
var burgerObjBad;
var dinoX = 100;
var dinoY = 100;
var faceLeft = false;
var score = 0;
var timer = 120;
var frames = 0;
var index = 0;
var health = 5;
var bgMusic;
var eatSound;
var grossSound;
var dino;
var block1;
var block2;
var block3;

//IMPORTANT: Working on a custom set of assests, used this version as a test-bed, so the dino changes between two completely different images

function preload()
{
  animListIdle = loadStrings('assets/dino/dinoidle.txt');
  animListRun = loadStrings('assets/dino/dinorun.txt');
  burger = loadImage('images/burger.png');
  burger2 = loadImage('images/burger2.png');
  bgMusic = loadSound('assets/sound/music.wav');
  eatSound = loadSound('assets/sound/crunch.wav');
  grossSound = loadSound('assets/sound/cough.wav');
}

function setup() {
  //4:3 aspect ratio for truly simplistic game design
  createCanvas(1600, 1200);
  burgerObj = new imageclassfood(1000,800,);
  burgerObjBad = new imageclassfood(800,600,true);
  second=second();
  bgMusic.loop();
  dino = new imageclass(300, 300, 150, 150);
  dino.loadAnimation('idle',animListIdle);
  dino.loadAnimation('run',animListRun);
  block1=new blockclass(random(500,1000),random(500,1000))
  block2=new blockclass(random(500,1000),random(500,1000))
  block3=new blockclass(random(500,1000),random(500,1000))
  dino.frameDelay = 8;
  //cannot get frame delay to work for some reason
}

function draw() {
  background(220);
  fill('black');
  burgerObj.draw();
  burgerObjBad.draw();
  text('Score: '+score,100,125);
  text('Timer: '+timer,100,150);
  text('Health: '+health,100,175);
  if(timer<=0 || health<=0){
    fill('red');
    text("GAME OVER",500,500);
    fill('black');
    text('Your score was '+score,500,525);
  }
  if(score>=10)
  {
    fill('green');
    text('WIN!!',500,500)
  }
  if(frameCount%60==0)
  {
    timer--;
  }
  if (keyIsPressed) {
    if (key == 'd') {
      dino.updatePosition('right');
      dino.drawAnimation('run');
    }
    if (key == 'a') {
      dino.updatePosition('left');
      dino.drawAnimation('run');
    }
    if (key == 's') {
      dino.updatePosition('down');
      dino.drawAnimation('run');
    }
    if (key == 'w') {
      dino.updatePosition('up');
      dino.drawAnimation('run');
    }
  }
  else {
    dino.drawAnimation('idle');
  }
  if(dino.isColliding(burgerObj.burger))
  {
    burgerObj.jump(500,1000,500,1000);
    score++;
    eatSound.play();
  }
  if(dino.isColliding(burgerObjBad.burger))
    {
      burgerObjBad.jump(500,1000,500,1000);
      health--;
      grossSound.play();
    }
 /* if(dino.isColliding(block1.block)||dino.isColliding(block2.block)||dino.isColliding(block3.block))
  {
    score--;
  }*/
}