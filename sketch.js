const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;

function setup(){
  var canvas=createCanvas(800,400);
engine = Engine.create();
world = engine.world;

console.log(ground);
box1 = new Box(400,100,70,50);
box2 = new Box(430,75,50,30);
Engine.run(engine);
ground = new Ground(400,380,800,20);

}
function draw()
{
  background(0);

  ground.display();
  
    box1.display();
    box2.display();
}