
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,roof1;
var bob2,bob3,bob4,bob5;

var string1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300,400);
	bob2 = new Bob(320,400);
	bob3 = new Bob(340,400);
	bob4 = new Bob(360,400);
	bob5 = new Bob(380,400);

	
	roof1 = new Roof();
	
	string1 = new Slingshot(bob1,roof1);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof1.display();

	string1.display();

  drawSprites();
}



