
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var mango,mango2,mongo3,mango4,mango5;
var tree;

function setup() {
	createCanvas(900,750);
	background(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(250,200,10,10);
	tree=new Tree(900,200,200,200);
	mango=new Mango(700,200,20);
	mango2=new Mango(750,280,20);
	mango3=new Mango(600,350,20);
	mango4=new Mango(650,180,20);
	mango5=new Mango(800,380,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  stone.display();
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}



