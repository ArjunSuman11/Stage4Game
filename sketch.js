var player, playerimg;
var police1, police2, policecarimg;
var bg;

function preload(){
 playerimg = loadImage("images/car3.png");
 policecar = loadImage("images/policeCar.png");
 //bg = loadImage("images/road.png");


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
  
}

function draw() {
  background(0);
  
  //Camera follows the player
  camera.position.y = player.car.y - 200;
  player.movement(); 
  player.stop();
  police1.policemove();
  police2.policemove();
  drawSprites();
}


