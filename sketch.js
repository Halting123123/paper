
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world
var paper1
var ground
var box,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(1600,700)
	rectMode(CENTER)
	engine=Engine.create
     world=engine.world
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    
paper1=new Paper(200,450,40)
ground= new Ground(700,500,2000,200)
box=new Box(700,367,10,70)
box2=new Box(900,367,10,70)
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
	
})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  box.display();
  box2.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65})
	}
}



