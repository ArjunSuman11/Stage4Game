var player, playerimg;
var police1, police2, policecarimg;
var bg;
var roadY = 3;
var dustbin1;
var ob1, ob2, ob3, ob4, ob5, ob6;
var obstaclesgroup;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var coinGroup, powerGroup;
var score = 0;
var coinImg, magnetImg, healthImg; 
function preload(){
 playerimg = loadImage("images/car3.png");
 policecar = loadImage("images/policeCar.png");
 bg = loadImage("images/road.png");
 ob1 = loadImage("images/dustbin.png");
 ob2 = loadImage("images/bench.png");
 ob3 = loadImage("images/tree1.png");
 ob4 = loadImage("images/tree2.png");
 ob5 = loadImage("images/bush1.png");
 ob6 = loadImage("images/bush2.png");

 coinImg = loadImage("images/goldencoin.png");
 magnetImg = loadImage ("images/magnet.png");
 healthImg = loadImage ("images/health.png");
 

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Car(width/2, height - 60);
  player.car.addImage(playerimg);
  player.car.scale = 0.8;

  police1 = new Car(width/2-100, height);
  police1.car.addImage(policecar);
  police1.car.scale = 0.12;

  police2 = new Car(width/2+100, height);
  police2.car.addImage(policecar);
  police2.car.scale = 0.12;

  obstaclesgroup = new Group();
  coinGroup = new Group();
  powerGroup = new Group();
}

function draw() {
  background(200);
  imageMode(CENTER);
  //if(player.car.y > roadY*windowHeight-200){
    image(bg, windowWidth/2, player.car.y, windowWidth/1.2, 3*windowHeight);
  //}
  //else{
    //image(bg, windowWidth/2, -(roadY*windowHeight-200), windowWidth/1.2, 3*windowHeight);
    //roadY++;
  //}
  text("Score : "+ score, 10, player.car.y - 470);
  
  if(gameState === PLAY){
    if(player.health>0){
      fill("green");
      rect(10, player.car.y - 500, player.health, 10);
    }
  
    //Camera follows the player
    camera.position.y = player.car.y - 200;

    player.movement(); 
    player.stop();
    police1.policemove();
    police2.policemove();
   // spawnObstacles();
    spawnObstacles();
    spawnCoins();
    spawnPowerup();
    player.destroy();

  }else{
    fill("red");
    textSize(30);
    stroke("white");
    strokeWeight(4);
    textFont("Georgia");
    text("GAME OVER", width/2-50, player.car.y - 200);

  }

   
  drawSprites();
}


