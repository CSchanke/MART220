var counter = 0;
var tomX = 45;
var lettX = 50;
var cheX = 25;
var meatX = 25;
var flagColor = "yellow";
var colorOptions = ["yellow","blue","red","pink"];
var newFont;
var owl;
var burger;
var owlX = 450;
var timer = 0;
var owlDirection = 0;

function preload()
{
  burger = loadImage('images/burger.png');
  owl = loadImage('images/owl.png');
  newFont = loadFont('fonts/Long_Shot.ttf');
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  //Drawing a burger
  //Signing my name to this lovely artwork
  fill("black");
  textFont(newFont);
  textSize(20);
  text("Chase Schanke",250,390);
  //Give it a title
  text("Dancing Hamburger",25,25);
  text("Click to change flag color",25,50)
  
  if(counter > 500)
    {
      tomX = random(15,75);
      lettX = random(20,80);
      cheX = random(5,45);
      meatX = random(5,45);
    }
  counter++;
  
  fill("tan");
  rect(50,300,300,75);
  //stack other shapes on top of an ellipse to create
  //semi-circle shape for top bun
  ellipse(200,200,300,150);
  //Now meat
  fill("brown");
  rect(meatX,250,350,50);
  rect(200,50,5,100);
  //Cheese
  fill("yellow");
  rect(cheX,230,350,20);
  fill(flagColor);
  triangle(205,50,250,75,205,100);
  //lettuce
  fill("green"); 
  rect(lettX,215,300,15);
  //Tomato
  fill("red");
  rect(tomX,185,310,30);
  image(burger, 415,500);
  image(sushi,15,500);
  image(owl,owlX,40);
  text("Timer: " + timer, 500,500);
  moveOwl();
}

function moveOwl() {
  timer++;
  if (timer % 5 == 0) {
    if(owlDirection == 0){
      owlX += random(10,20);
      owlDirection += 1;
    }
    else{
      owlX -= random(10,20);
      owlDirection-=1;
    }
}
}

function mouseClicked()
{
  flagColor = random(colorOptions);
}