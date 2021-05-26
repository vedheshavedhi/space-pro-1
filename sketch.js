var Background,bgImg;
var spaceship,spaceshipImg;
var edges
function preload(){
  bgImg = loadImage("bg.jpg");
  spaceshipImg = loadImage("ss.png");
}
function setup() {
  createCanvas(1200,1400);
 
  Background=createSprite(600,400);
  Background.addImage(bgImg);
  Background.velocityY = 4;

  spaceship = createSprite(600,1050);
  spaceship.addAnimation("space",spaceshipImg);
  spaceship.scale = 0.1;
}

function draw() {
  background(0);
  if(Background.y > 1200 ){
    Background.y = height/2;
  }
  if(keyDown("left")){
    spaceship.velocityX = -5;
  }
  if(keyDown("right")){
    spaceship.velocityX = 5;
  }
  edges= createEdgeSprites();
  spaceship.collide(edges);
  drawSprites();
}