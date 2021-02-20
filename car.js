class Car{
    constructor(x, y){
        this.car = createSprite(x, y, 50 , 50);
        
    }
    
    movement(){
        if(keyDown (UP_ARROW)){
            this.car.velocityY = -3;
        }
        if(keyDown (DOWN_ARROW)){
            this.car.velocityY = 3;
        }
        if(keyDown (LEFT_ARROW)){
            this.car.x -= 3;
        }
        if(keyDown (RIGHT_ARROW)){
            this.car.x += 3;
        }
    }
    stop(){
        //stopping in forward direction
        if(this.car.velocityY<0){
            this.car.velocityY += 0.2;

        }//stopping in backward direction
        else if(this.car.velocityY>0){
            this.car.velocityY -= 0.15;
        }
        
    }
    policemove(){
        //Player's velocity = 3
        if(player.car.velocityY === -3){
            this.car.y = player.car.y + 200;
        }
        else if(player.car.velocityY>-3 && player.car.velocityY < -2){
            this.car.y = player.car.y + 50;
        }
        //Police is at the level of the player
        else{
            //this.car.y = player.car.y ;
        }
    }

}