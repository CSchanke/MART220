var timer = 0;
var dino;
var timerAnimation=0;
var timerRun=0;
var objIdle=[];
var objRun=[];
var animRun = [];
var animIdle =[];
var counter =0;
var counter2=0;


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
  image(animIdle[timerAnimation],objIdle[timerAnimation].getX(),objIdle[timerAnimation].getY());
}
function incrementIndex()
{
     // increment the index
     timerAnimation += 1;

     // if we reach the end of the array, start over
     if (timerAnimation >= animIdle.length) {
         timerAnimation = 0;
     }
}


