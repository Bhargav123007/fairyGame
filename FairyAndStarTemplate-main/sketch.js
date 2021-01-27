var backgroundImage;
var starImage;
var fairyImage;
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

function preload()
{
   //preload the images here
   backgroundImage = loadImage("images/starnight.png");
   starImage = loadImage("images/star.png");
   fairyImage = loadImage("images/fairy1.png");
   fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  fairyVoice.play();

  fairy = createSprite(130,520);
  fairy.addAnimation("fairyflay",fairyImage);
  fairy.scale = 0.2;
  
  star = createSprite(650,30);
  star.addAnimation("star",starImage);
  star.scale = 0.2;

  engine =  Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
  World.add(world,starBody);

  Engine.run(engine);

}


function draw() {
  background(backgroundImage);

  star.x = starBody.position.x
  star.y = starBody.position.y

  console.log(star.y)

  if(star.y>470 && starBody.position.y>470){
    Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 20;
  }

  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 20;
  }

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }

}
