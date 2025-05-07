var animListIdle = [];
var animIdle;
//var animRun;
var animListRun = [];
var animListAttack = [];
var enemy
var particles = [];

var objIdle=[];
var objRun=[];
var animRun = [];
var animIdle =[];
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
var foodList = [];

function preload() {
    animListIdle = loadStrings("assets/dino/dinoidle.txt");
    animListRun = loadStrings("assets/dino/dinorun.txt");
    animListAttack = loadStrings("assets/dino/dinojump.txt");
    //using jump anim since my dino has no attack frames
    //kinda loooks like he's head-butting the enemies anyway
    bgMusic = loadSound('assets/sound/music.wav');
    eatSound = loadSound('assets/sound/crunch.wav');
    grossSound = loadSound('assets/sound/cough.wav');
}

function setup() {
    createCanvas(1200, 900);
    animIdle = new imageclass(200, 200, 150, 150);
    animIdle.loadAnimation('idle', animListIdle);
    animIdle.loadAnimation('run', animListRun);
    animIdle.loadAnimation('attack', animListAttack);

    //compact way to add an image
    enemy = createSprite(500, 200, 100, 100, 'static');
    //borrowing an asset I made for another class for the enemies
    enemy.img = "assets/images/pin_final.png";
    enemy.scale = 0.05;
    enemy.diameter = 150;
    bgMusic.loop();

    for (let i = 0; i < 5; i++) {
        food = new imageclassfood(random(300, 900), random(300, 850), false);
        foodList.push(food);
    }

}

// display all the frames using the draw function as a loop
function draw() {

    background(220);

    fill('black');
    text('Score: '+score,100,125);
    text('Timer: '+timer,100,150);
    if(timer<=0){
    fill('red');
    text("GAME OVER",500,500);
    fill('black');
    text('Your score was '+score,500,525);
  }
  if(score>=5)
  {
    fill('green');
    text('WIN!!',500,500)
  }
  if(frameCount%60==0)
  {
    timer--;
  }

    if (kb.pressing('d')) {
        animIdle.updatePosition('right');
        animIdle.drawAnimation('run');
        if (enemy != null) {
            if (animIdle.isColliding(enemy)) {
                animIdle.drawAnimation('idle');
                animIdle.updatePosition('idle');
            }
        }
    }
    else if (kb.pressing('a')) {
        animIdle.updatePosition('left');
        animIdle.drawAnimation('run');
    
    }
    else if (kb.pressing('w')) {
        animIdle.updatePosition('up');
        animIdle.drawAnimation('run');}
    else if (kb.pressing('s')) {
        animIdle.updatePosition('down');
        animIdle.drawAnimation('run');}
    else if (kb.pressing('x')) {
        animIdle.drawAnimation('attack');
        if (enemy != null) {
            if (dist(animIdle.getCurrentAnimation().position.x, animIdle.getCurrentAnimation().position.y, enemy.position.x, enemy.position.y) < 100) {
                createParticles(enemy.position.x, enemy.position.y);
                health -= 1;
                if(health <= 0)
                {
                    enemy.remove();
                    enemy = null;
                }    
            }

        }
    }
    else {
        animIdle.drawAnimation('idle');
    }
    for(let i = 0; i <  foodList.length; i++)
        {
            foodList[i].draw();
        
          if(animIdle.isColliding(foodList[i].burger))
             {
                score++;
                foodList[i].burger.remove();
                eatSound.play();
            }}
}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

