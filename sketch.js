var PLAY = 1
var END  = 0
var gameState = PLAY

var blueastroid,fireAstroid,space,spaceship,rockAstroid

function preload() {
    
blueastroid = loadImage("blue astroid.png.png");
fireAstroid = loadImage("fire astroid.png.jpeg");
rockAstroid = loadImage("rock astroid.png.jpeg");
space = loadImage("space.png.jpeg");
spaceShip = loadImage("space ship.png.jpeg");
gameOver = loadImage("gameOver.jpeg");
}
function setup() {
blueastroid.addImage("blue astroid.png.png");
fireAstroid.addImage("fire astroid.png.jpeg");
rockAstroid.addImage("rock astroid.png.jpeg");
space.addImage("space.png.jpeg");
spaceShip.addImage("space ship.png.jpeg");
gameOver.addImage("gameOver.jpeg");
}
function draw() {
        

fireAstroid.velocityY = -3
blueastroid.velocityY = -3
rockAstroid.velocityY = -3
 
if(gameState=== PLAY){
createCanvas(400,400)
space = createSprite(400,400,400,400);
space.addImage("space",space);
space.y = ground.width /2;
space.velocityY = -3

spaceShip = createSprite(200,400,35,40)

Astroid.newGroup()

AstroidGroup(blueastroid,fireAstroid,rockAstroid)

if ( keyDown("leftArrow"))
{
spaceShip.velocityX = 3
};

if(keyDown("rightArrow"))
{
    spaceShip.velocityX = -3
}

var rand = Math.round(random(1,3));
switch(rand) {
  case 1: Astroid.addImage(fireAstroid);
          break;
  case 2: Astroid.addImage(rockAstroid);
          break;
  case 3: Astroid.addImage(blueastroid);
          break;
  default: break;
}
}
function Astroids() {
if (frameCount % 60 === 0) {
var Astroid = createSprite(600,120,40,10);
 Astroid.y = Math.round(random(70,140));
 Astroid.addImage();
 Astroid.scale = 0.5;
 Astroid.velocityY = -3;
}
AstroidGroup.add(Astroid)

if(AstroidGroup.isTouching("spaceship",spaceShip))
{
    spaceShip.destroy()
    gameState = END
}

if(gameState===END){

  gameOver.visible = true
}
 
        
}
}