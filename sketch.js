
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=createSprite(600, 500,140,10);
	rect2=createSprite(665,480,10,70);
	rect3=createSprite(530,480,10,70);
	rect1.shapeColor=color(250,10,120);
	rect2.shapeColor=color(250,10,120);
	rect3.shapeColor=color(250,10,120);

	ground=createSprite(400,510,800,10);
	ground.shapeColor=color(100,0,100);

ball=createSprite(100,490,10,10);

	Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  background(250);
  
  ball=ellipse(100,490,20,20);
  
  drawSprites();}
 
  function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.bdy.position,{x:85,y:-85});

	 }}
 