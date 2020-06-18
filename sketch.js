const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var bird;
var pig,pig2;
var log,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,390,50,50);
    box2 = new Box(900,390,50,50);
    ground = new Ground(600,height,1200,20)
    bird = new Bird(10,20);
    pig = new Pig(800,390);
    log = new Log(800,370,300,PI/2);

    box3 = new Box(700,340,50,50);
    box4 = new Box(900,340,50,50);
    pig2 = new Pig(800,340);
    log2 = new Log(800,330,300,PI/2);

    box5 = new Box(800,320,50,50);
    log3 = new Log(750,320,150,PI/6);
    log4 = new Log(850,320,150,-PI/6);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    bird.display();
    pig.display();
    pig2.display()
    log.display();
    log2.display();
    log3.display();
    log4.display();

}