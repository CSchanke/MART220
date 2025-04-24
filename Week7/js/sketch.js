var objIdle=[];
var objRun=[];
var animRun = [];
var animIdle =[];
var i =0;
var animListIdle;
var animListRun;
var burger;
var burgerObj;
var dinoX = 100;
var dinoY = 100;
var faceLeft = false;
var score = 0;
var timer = 120;
var frames = 0;

//IMPORTANT: I had a lot of issues making this work that were ultimately due to a mismatch in the number of idle frames and
//movement frames. That is why the idle animation is a little wonky--I had to cut two frames from it.

function preload()
{
  animListIdle = loadStrings('assets/dino/dinoidle.txt');
  animListRun = loadStrings('assets/dino/dinorun.txt');
  burger = loadImage('images/burger.png');
}

function setup() {
  //4:3 aspect ratio for truly simplistic game design
  createCanvas(1600, 1200);
  for (var i = 0; i < animListIdle.length; i++) 
    {
      objIdle = new imageclass('assets/dino/idle/' + animListIdle[i], dinoX, dinoY);
      animIdle.push(objIdle);
    }
    for (var i = 0; i < animListRun.length; i++) 
    {
      objRun = new imageclass('assets/dino/run/' + animListRun[i], dinoX, dinoY);
      animRun.push(objRun);
    }
  setInterval(incrementIndex, 50);
  burgerObj = new imageclassfood(burger,1000,800);
  second=second();
}

function draw() {
  background(220);
  fill('black');
  burgerObj.draw();
  text('Score: '+score,100,125);
  text('Timer: '+timer,100,150);
  if(timer<=0){
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
    if(collision(animRun[i].x,animRun[i].y,200,300,burgerObj.x,burgerObj.y,256,256)==true)
      {
        burgerObj.jump(100,1200,100,800);
        score+=1;
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
function collision(x1,y1,w1,h1,x2,y2,w2,h2)
{
  if(x1<x2+w2&&x1+w1>x2&&y1<y2+h2&&y1+h1>y2)
  {
    return true;
  }
  else{
    return false;
  }
}