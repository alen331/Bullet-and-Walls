/*const Engine= Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

  function setup() {

   createCanvas(400,400);

   engine=Engine.create();
   world=engine.world;

   var ground_options ={
      isStatic : true
     } 

  //   object=Bodies.rectangle(200,100,50,10,options);
   ground=Bodies.rectangle(200,300,200,10,ground_options);
   World.add(world,ground);
    }

     function draw() {

       background(0);
       Engine.update(engine);
        rectMode(CENTER);
        rect(ground.position.x,ground.position.y,50,10);

     //rect(200,200,50,50); 
    drawSprites(); 
  }

 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 
 var engine, world;
 var box1;
 
 function setup(){
     var canvas = createCanvas(800,800);
     engine = Engine.create();
     world = engine.world;
     box1 = new Box(400,400,50,50);
     box1.shapeColor = "white"
 }
 
 function draw(){
     background(0);
     Engine.update(engine);
     box1.display();
 }
 
  */

 var thickness, wall;
 var speed, weight, bullet;
 var bulletRightEdge, bulletLeftEdge;
 
   function setup() {
 canvas = createCanvas(1600, 400);
 
 speed = random(223, 321);
 weight = random(30, 52);
 thickness = random(22,83)
 
 bullet = createSprite(50, 200, 50, 50);
 bullet.velocityX = speed;
 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = (80,80,80);
   }
 
   function draw() {
 background(0);
 
 
 if( hasCollided(bullet, wall)){
   bullet.velocityX = 0;
 
  var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
 
  if(damage > 10){
    wall.shapeColor = "red";
  }
 
  if(damage < 10){
  wall.shapeColor = "green";
  }

 }

 console.log("speed"+speed);
 console.log("weight"+weight);
 console.log("damage"+damage);

 drawSprites();
   }

   function hasCollided(bullet, wall) {
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;

   if(bulletRightEdge >= wallLeftEdge){
     return true
   }
   return false;
   }
