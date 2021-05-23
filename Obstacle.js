class Obstacles {
    constructor(x, y){
        this.obstacle = createSprite(x , y, 50 ,50);
        obstaclesgroup.add(this.obstacle);
        //dustbin.obstacle1.addImage(dustbinimg);
        //dustbin.obstacle1.scale = 0.5;
    }

    display(){
        
    }

    animation(){
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: this.obstacle.addImage(ob1);
                  this.obstacle.scale = 0.4;
                  break;
          case 2: this.obstacle.addImage(ob2);
                  this.obstacle.scale = 0.2;
                  break;
          case 3: this.obstacle.addImage(ob3);
                  this.obstacle.scale = 0.4;
                  break;
          case 4: this.obstacle.addImage(ob4);
                  this.obstacle.scale = 0.4;
                  break;
          case 5: this.obstacle.addImage(ob5);
                  this.obstacle.scale = 0.5;
                  break;
          case 6: this.obstacle.addImage(ob6);
                  this.obstacle.scale = 0.5;
                  break;
          default: break;

        }
    }
}

function spawnObstacles(){
    if(frameCount % Math.round(random(80, 140)) === 0){
        
        //To decide the side - left or right
        var randomX = Math.round(random(1,2));
        var x;
        if(randomX === 1){
            x = width/2 - 200
        }
        else{
            x = width/2 + 200
        }

        var obstacle = new Obstacles (x, player.car.y - 400);
        obstacle.animation();
    }
}

function spawnCoins(){
    if(frameCount % 20 === 0){
        var coin = createSprite(random(550, 820), player.car.y-600, 30, 20);
        coin.shapeColor = "yellow";
        coinGroup.add(coin);
        coin.addImage(coinImg);
        coin.lifetime = 300;
        coin.scale = 0.04;
        //console.log(coin.x);
    }
}

function spawnPowerup(){
    if(frameCount %  20=== 0){
        var power = createSprite(random(550, 820), player.car.y-600, 20, 20);
        powerGroup.add(power);
        power.lifetime = 300;

        var rand = Math.round(random(1,3));
        switch(rand){
            //Coin Magnet - RED
            case 1 : power.shapeColor = "red";
                     power.addImage (magnetImg);
                     power.scale = 0.09;

                     break;
            //GetAway - GREEN
            case 2 : power.shapeColor = "lightgreen";
                     break;
            //Health Kit - BLUE
            case 3 : power.shapeColor = "blue";
                     power.addImage(healthImg);
                     power.scale = 0.09;
                     
                     break;
            default: break;
        }
    }
}