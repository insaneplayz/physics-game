
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var apple1,apple2,apple3,apple4,apple5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	apple1=new Apple(1100,100,30);
	apple2=new Apple(1190,190,30);
	apple3=new Apple(1100,200,30);
	apple4=new Apple(1000,210,30);
	apple5=new Apple(1140,150,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneObj=new stone(258,450,30);
	
	launcherObject=new Launcher(stoneObj.body,{x:235,y:420});
	
	//Engine.run(engine);

}

function draw() {

  background("white");
  Engine.update(engine);
  image(boy ,200,340,200,300);

  treeObj.display();
 apple1.display();
 apple2.display();
 apple3.display();
 apple4.display();
 apple5.display();

  groundObject.display();

  stoneObj.display();
  launcherObject.display();

detectcollision(stoneObj,apple1);
detectcollision(stoneObj,apple2);
detectcollision(stoneObj,apple3);
detectcollision(stoneObj,apple4);
detectcollision(stoneObj,apple5);
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		
		launcherObject.attach(stoneObj.body);

	
	}
}

function detectcollision(stone,apple){


	appleBodyPosition=apple.body.position
	stoneBodyPosition=stone.body.position
	

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,appleBodyPosition.x,appleBodyPosition.y)
	
	if(distance<=apple.r+stone.r){
		Matter.Body.setStatic(apple.body,false);
	}

}

function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	launcherObject.fly();
}