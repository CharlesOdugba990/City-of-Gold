var hero, alien, City_of_gold,hero_Image,alien_Image,ground,alien_group,play,end,PLAY,END;




function preload(){
  hero_Image = loadAnimation("Images/Hero/Hero.jpg","Images/Hero/Hero1.jpg","Images/Hero/Hero2.jpg","Images/Hero/Hero3.jpg","Images/Hero/Hero4.jpg","Images/Hero/Hero5.jpg","Images/Hero/Hero6.jpg","Images/Hero/Hero7.jpg")
  alien_Image = loadImage("Images/Allien1.jpg")
  bg = loadImage("Images/City-of-Gold.jpg")
}


function setup() {
  createCanvas(800,400);
  City_of_gold = createSprite(400,200,10,10)
  City_of_gold.addImage(bg)
  City_of_gold.scale = 2
  hero = createSprite(100,350,50,50);
  hero.addAnimation("time",hero_Image);
  ground = createSprite(400,390,800,10);
  
  
  alien_group = createGroup()
  gameState = PLAY
  
}

function draw() {
  background(220);
  
 if(gameState === PLAY){
  ground.visible = false
  hero.collide(ground)
 }
 

if(gameState === END){
  ground.visible = false
  
}

  spawnAlien();
  drawSprites();
}

function spawnAlien(){
  
  if (frameCount % 180 === 0  ){
    alien = createSprite(800,330,50,50);
    alien.velocityX = -1;
    alien.addImage(alien_Image);
    alien.scale = 0.2;
    alien_group.add(alien)
  }
}
