class Obstacles {
    constructor(x, y){
        this.obstacle = createSprite(x , y, 50 ,50);
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