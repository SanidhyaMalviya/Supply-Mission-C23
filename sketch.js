var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	  
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite = createSprite(400,650,200,20);
	bottomSprite.shapeColor=color("red")

	leftSprite = createSprite(300,610,20,100);
	leftSprite.shapeColor=color("red")

	rightSprite = createSprite(490,610,20,100);
	rightSprite.shapeColor=color("red")

        engine = Engine.create();
	world = engine.world;

	bottomBody = Bodies.rectangle(400,650,200,20,{isStatic:true} );
	World.add(world, bottomBody);

	leftBody = Bodies.rectangle(300,610,20,100,{isStatic:true} );
	World.add(world, leftBody);

	rightBody = Bodies.rectangle(490,610,20,100,{isStatic:true} );
	World.add(world, rightBody);

	packageBody = Bodies.circle(width/2 , 200 , 5, {isStatic:true, restitution : 0, friction : 1, density : 1});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  text(mouseX+" , "+mouseY,100,400)
  
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  bottomSprite.x = bottomBody.position.x 
  bottomSprite.y = bottomBody.position.y 

  leftSprite.x = leftBody.position.x 
  leftSprite.y = leftBody.position.y 

  rightSprite.x = rightBody.position.x 
  rightSprite.y = rightBody.position.y 

  keyPressed();

  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false)
  }
}
