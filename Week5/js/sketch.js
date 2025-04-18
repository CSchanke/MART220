var timer = 0;
var dino;
var timerAnimationIdle=0;
var timerAnimationRun=0;
var timerRun=0;
var objIdle=[];
var objRun=[];
var animRun = [];
var animIdle =[];
var counter =0;
var counter2=0;
var counter3=0;
var bufferX=0;

function preload()
{
  for(var counter = 0;counter<=9;counter++){
    counter2 = counter+1;
    dino = new imageclass('/assets/dino/idle/Idle ('+counter2+').png',0,0);
    objIdle[counter]=dino;
  }
  for(counter=0;counter<objIdle.length;counter++)
  {
    animIdle[counter]=objIdle[counter].getImage();
  }
  for(var counter = 0;counter<=7;counter++){
    counter2 = counter+1;
    dino = new imageclass('/assets/dino/run/Run ('+counter2+').png',0,0);
    objRun[counter]=dino;
  }
  for(counter=0;counter<objIdle.length;counter++)
    {
      animRun[counter]=objRun[counter].getImage();
    }
}

function setup() {
  //4:3 aspect ratio for truly simplistic game design
  createCanvas(1600, 1200);
  setInterval(incrementIndex, 50);
}

function draw() {
  background(220);
  //timer function as a simple debug so I know if it has frozen
  text("Timer: " + timer, 20,40);
  timer++;
  if(keyIsPressed)
    {
        if(key == "d")
        {
            bufferX=objRun[timerAnimationRun].moveRight();
            image(animRun[timerAnimationRun], bufferX, objRun[timerAnimationRun].getY());
            objRun[timerAnimationRun].updateLocation(bufferX);
            counter3++;
            if(counter3 > 3)
            {
                incrementRunIndex();
                counter3 = 0;
            }   
        }
    }
  else{
    if(objIdle[timerAnimationIdle].getX()!=objRun[timerAnimationRun].getX())
    {
      objIdle[timerAnimationIdle].updateLocation(objRun[timerAnimationRun].getX());
    }
    image(animIdle[timerAnimationIdle],objIdle[timerAnimationIdle].getX(),objIdle[timerAnimationIdle].getY());
  }
  
}
function incrementIndex()
{
     // increment the index
     timerAnimationIdle += 1;

     // if we reach the end of the array, start over
     if (timerAnimationIdle >= animIdle.length) {
         timerAnimationIdle = 0;
     }
}
function incrementRunIndex()
{
  timerAnimationRun += 1;
     if (timerAnimationRun >= animRun.length) {
      timerAnimationRun = 0;
     }
}


