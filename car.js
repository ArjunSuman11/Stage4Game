class Car{
    constructor(x, y){
        this.car = createSprite(x, y, 50 , 50);
        this.health = 100;
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

    destroy(){

        //Destroying obstacles
        for(var i = 0; i<obstaclesgroup.length; i++){
            if(obstaclesgroup.get(i).isTouching(this.car)){
                this.health = this.health - 20
                obstaclesgroup.get(i).destroy();
            }
        }
        if(this.health<=0){
            this.car.destroy();
            gameState = END;
        }

        //Destroying coins
        for(var i = 0; i<coinGroup.length; i++){
            if(coinGroup.get(i).isTouching(this.car)){
                coinGroup.get(i).destroy();
                //Score increases by 20
                score = score + 20;
            }
        }
        
        //Destroying power ups
        for(var i = 0; i<powerGroup.length; i++){

            if(powerGroup.get(i).shapeColor === "red"){
                /* if(score<=80){
                    coinGroup.x = this.car.x - 20;
                } */
                 for(var i = 0; i<coinGroup; i++){

                    var distance = dist(this.car.x, this.car.y, coinGroup.get(i).x, coinGroup.get(i).y );     
                    console.log(distance);

                } 
                   


            }

            if(powerGroup.get(i).isTouching(this.car)){
                powerGroup.get(i).destroy();
                //Health Kit
                if(powerGroup.get(i).shapeColor === "blue"){
                    if(this.health<=50)
                        this.health = this.health + 50;
                    else 
                        this.health = 100;
                }
                //Coin Magnet
                else if(powerGroup.get(i).shapeColor === "red"){
                        /* if(score<=80){
                            coinGroup.x = this.car.x - 20;
                        } */
                        var distance = dist(this.car.x, this.car.y, powerGroup.get(i).x, powerGroup.get(i).y );     
                        console.log(distance);
        

                }
                //GetAway
                else{(powerGroup.get(i).shapeColor === "lightgreen")
                        this.car.velocityY +=  - 5
            
            
                }

                
            }
        }



    }

}