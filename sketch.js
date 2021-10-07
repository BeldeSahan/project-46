const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var world,ball1,ground,backgroundImg,paper;

function preload(){
backgroundImg=loadImage("Images/background.jpg");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create();
  world=engine.world;
 //paper1=createSprite(400, 200, 50, 50);
 //paper1.addImage(paperImg);
 ball1=new Ball(200,400,100);
 ball2=new Ball(300,400,100);
 ball3=new Ball(400,400,100);
 ball4=new Ball(500,400,100);
 ball5=new Ball(600,400,100);
 ball6=new Ball(700,400,100);
 ball7=new Ball(800,400,100);
 ball8=new Ball(900,400,100);

 ground=new Ground(630,displayHeight,displayWidth,20);
 Engine.run(engine);
}

function draw() {
  background(backgroundImg);
 ground.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ball7.display();
 ball8.display();

  drawSprites();
}