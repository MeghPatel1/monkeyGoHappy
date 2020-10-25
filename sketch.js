var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0



function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup (){
  createCanvas(500, 500)
  
  ground=createSprite(500,470,1000,10)
  ground.velocityX=-4
  
  monkey=createSprite(50,420,50,50)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.15
  
  FoodGroup=createGroup()
  obstacleGroup=createGroup()

}


function draw (){
  background('lightgreen')
  
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ survivalTime,100,50)

  if(keyDown("space")&&monkey.y>400){
    monkey.velocityY=(-12);
  }
  
  if(ground.x>width/2){
    ground.x=500
    }
  
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground);
  
  bananas();
  rocks();
  
  drawSprites();
}




function bananas(){
  if(frameCount%100===0){
  banana=createSprite(500,Math.round(random(120,300)),50,50);
  banana.addImage("foodman",bananaImage)
  banana.velocityX=(-5)
  banana.lifetime=100
  banana.scale=0.1
  FoodGroup.add(banana)
}
}



function rocks(){
  if(frameCount%200===0){
    obstacle=createSprite(500,435,50,50)
    obstacle.addImage("obstacles",obstacleImage)
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle)
    obstacle.velocityX=(-6)
    obstacle.lifetime=85
    
  }
}