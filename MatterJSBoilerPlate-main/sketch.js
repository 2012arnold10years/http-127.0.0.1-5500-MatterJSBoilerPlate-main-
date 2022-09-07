
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1500);
	var ball_options={
	isStatic:false
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


groundObj.display()

groundObj=new ground(width/2,670,width,20)
leftSide=new ground(1100,600,20,120)

function keyPressed(){
if (keyCode===UP_ARROW){

  //Matter.Body.applyForce

}
}
