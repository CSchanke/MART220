var objIdle=[];
var objRun=[];
var objActive;

var animRun = [];
var animIdle =[];
var animActive;

var counter =0;
var index = 0;

var animListIdle;
var animListRun;
var burger;
var burgerObj;

var interval1;
var counter = 0;

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
      objIdle.push(new imageclass('assets/dino/idle/' + animListIdle[i], 0, 700));
      animIdle[i] = objIdle[i].getImage();
    }
    for (var i = 0; i < animListRun.length; i++) 
    {
      objRun.push(new imageclass('assets/dino/run/' + animListRun[i], 0, 700));
      animRun[i] = objRun[i].getImage();  
    }
  objActive=objIdle;
  interval1 = setInterval(incrementIndex, 50);
  burgerObj = new imageclassfood(burger,0,0);
  burgerObj.jump(400,1000,800,800);
}

function draw() {
  background(220);

  if (keyIsPressed==true) 
    {
      clearInterval(interval1);
      interval1 = null;
      index++;
      if (index > 3) 
      {
        incrementIndex();
        index = 0;
      }
      if (key == "d") 
      {
        animActive = animRun;
        objActive = objRun;
        if (counter >= animActive.length) 
        {counter = 0;}
        objActive[counter].updateX(objActive[counter].getX() + 15);
        for (var i = 0; i < objRun.length; i++)
        {objRun[i].updateX(objActive[0].getX());}
        objRun = objActive;
      } 
      for (var i = 0; i < objIdle.length; i++)
      {  
        objIdle[i].updateX(objActive[0].getX());
      }
      if (key == "a") 
        {
          animActive = animRun;
          objActive = objRun;
          if (counter >= animActive.length) 
          {counter = 0;}
          objActive[counter].updateX(objActive[counter].getX() - 15);
          for (var i = 0; i < objRun.length; i++)
          {objRun[i].updateX(objActive[0].getX());}
          objRun = objActive;
        } 
        for (var i = 0; i < objIdle.length; i++)
        {  
          objIdle[i].updateX(objActive[0].getX());
        }
    } 
    else 
    {
      if (interval1 == null) 
      {
        interval1 = setInterval(incrementIndex, 50);
      }
      objActive = objIdle;
      animActive = animIdle;
    }
    image(animActive[counter], objActive[counter].getX(), objActive[counter].getY());
    image(burger,burgerObj.getX(),burgerObj.getY());
    //text(collision(burgerObj.getX(),20,objActive[counter].getX(),20));
    //text(objActive[counter].getX(),150,150);
    if(collision(burgerObj.getX(),100,objActive[counter].getX(),300))
    {
      text('WIN',50,50);
      burgerObj.jump(400,1000,800,800);
    }
}
function incrementIndex()
{
     counter += 1;
     if (counter >= objActive.length) {counter = 0;}
}
function collision(x1, w1, x2, w2) {
  return(x1 < x2 + w2 && x1 + w1 > x2);
}