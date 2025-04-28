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

//IMPORTANT: Working on a custom set of assests, used this version as a test-bed, so the dino changes between two completely different images

function preload()
{
  animListIdle = loadStrings('assets/sauropodlet/sauro_idle.txt');
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
  for (var i = 0; i < animListIdle.length; i++) 
    {
      objIdle = new imageclass('assets/sauropodlet/' + animListIdle[i], dinoX, dinoY);
      animIdle.push(objIdle);
    }
    for (var i = 0; i < animListRun.length; i++) 
    {
      objRun = new imageclass('assets/dino/run/' + animListRun[i], dinoX, dinoY);
      animRun.push(objRun);
    }
  //setInterval(incrementIndex, 50);
  burgerObj = new imageclassfood(burger,1000,800);
  burgerObjBad = new imageclassfood(burger2,800,600);
  second=second();
  bgMusic.loop();
}

function draw() {
  background(220);
  fill('black');
  burgerObj.draw();
  burgerObjBad.draw();
  text('Score: '+score,100,125);
  text('Timer: '+timer,100,150);
  text('Health: '+health,100,175);
  index++;
  if (index > 6) 
  {
    incrementIndex();
    index = 0;
  }
  if(timer<=0 || health<=0){
    fill('red');
    text("GAME OVER",500,500);
    fill('black');
    text('Your score was '+score,500,525);
  }
  if(frameCount%60==0)
  {
    timer--;
  }
  if (keyIsPressed) {
    animRun[i].draw();
    if (key == "a") {
        dinoX-=2;
       faceLeft = true;
    }
    if (key == "d") {
        dinoX+=2;
        faceLeft = false;
    }
    if (key == "w") {
        dinoY-=2;
    }
    if (key == "s") {
        dinoY+=2;
    }
    for (let i = 0; i < animListIdle.length; i++) {
        
        animIdle[i].flipX = faceLeft;
        animIdle[i].x = dinoX;
        animIdle[i].y = dinoY;
        animRun[i].flipX = faceLeft;
        animRun[i].x = dinoX;
        animRun[i].y = dinoY;
    }
    if(collideRectRect(animRun[i].x,animRun[i].y,200,300,burgerObj.x,burgerObj.y,256,256,300,300)==true)
      {
        burgerObj.jump(100,1200,100,800);
        score+=1;
        eatSound.play();
      } 
    if(collideRectRect(animRun[i].x,animRun[i].y,200,300,burgerObjBad.x,burgerObjBad.y,256,256,300,300)==true)
      {
        burgerObjBad.jump(100,1200,100,800);
        health-=1;
        grossSound.play();
      }   
  }
  else
  {
    animIdle[i].draw();
  }
}
function incrementIndex()
{
     i += 1;
     if (i >= animListIdle.length) {i = 0;}
}