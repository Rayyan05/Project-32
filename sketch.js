const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;
var score  = 0
var winner

function preload(){
  backgroundImg = loadImage("jungle.jpg")
  winner1 = loadImage("Winner.png")
}

function setup() {
  createCanvas(1500,2000);

  engine = Engine.create();
    world = engine.world;
   
    var winner = createSprite(750,1000,1500,2000)
    winner.addImage(winner1)
    winner.visible = false;

    ball1 = new Ball(200,1850,50,50)
    ground1 = new Ground(200,1900,200,20)
    ground2 = new Ground(600,1800,200,20)
    ground3 = new Ground(1000,1700,200,20)
    ground4 = new Ground(1400,1600,200,20)
   // ground5 = new Ground(1000,1500,200,20)
    ground6 = new Ground(800,1300,200,20)
    ground7 = new Ground(400,1100,200,20)
    ground8 = new Ground(100,900,200,20)
    ground9 = new Ground(500,800,200,20)
    ground10 = new Ground(700,600,200,20)
    ground11 = new Ground(900,450,200,20)
    ground12 = new Ground(1200,350,200,20)
    ground13 = new Ground(900,200,200,20)
    ground14 = new Ground(400,200,600,20)
    banana1 = new Banana(800,1250,100,100)
    banana2 = new Banana(900,425,100,100)
    platform = new Ground(50,100,50,200)

    
    

   
   
    //platform.visible = false
    

  }

function draw() {
  background(backgroundImg);  



  Engine.update(engine)


  detectollision(ball1,banana1)
  
  

console.log(ball1.body.position.x)
  
 
 
  ball1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
 // ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();
  ground11.display();
  ground12.display();
  ground13.display();
  ground14.display();
  banana1.display();
  banana2.display();
  platform.display();

  
    if(ball1.body.position.y<100){
      noStroke();
        textSize(35)
        fill("white")
        text("YOU WIN  " , 750, 1000)

    }

    if(ball1.body.position.y>height){
      noStroke();
        textSize(35)
        fill("white")
        text("YOU LOSE  " , 750, 1000)
  }

 


 drawSprites();



 
}


function keyPressed(){
	if (keyCode === 39){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:-40})



  
}

if (keyCode === 37){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-20,y:-40})

  


}

if (keyCode ===65){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-20,y:0})

  


}

if (keyCode ===68){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:0})

  


}
}

function detectollision(){
 banana1pos = banana1.body.position
 ball1pos = ball1.body.position

 var distance = dist(banana1pos.x,banana1pos.y,ball1pos.x,ball1pos.y)

 if(distance<=banana1.r+ball1.r)
 {
   Matter.Body.setStatic(banana1.body,false)
 }

 


}
