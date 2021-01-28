
function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    tomImage = loadAnimation("images/tomOne.png",)
    tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png",)
    tomImage4 = loadAnimation("images/tomFour.png")
    jerryImage = loadAnimation("images/jerryOne.png")
    jerryImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    jerryImage4 = loadAnimation("images/jerryFour.png")
}  

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom =  createSprite(850,700,40,40);
    tom.addAnimation("sleeping",tomImage)
tom.scale = 0.2


    jerry =  createSprite(150,700,40,40);
    jerry.addAnimation("cheese",jerryImage);
    jerry.scale = 0.2
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if( tom.x - jerry.x <40){

        tom.addAnimation("stop", tomImage4);
        tom.changeAnimation("stop",tomImage4);
        jerry.addAnimation("laugh", jerryImage4);
        jerry.changeAnimation("laugh" ,jerryImage4)
        tom.velocityX = 0
      }
    

    drawSprites();
}

 //For moving and changing animation write code here
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("walking", tomImage2);
        tom.changeAnimation("walking",tomImage2);
        jerry.addAnimation("tease", jerryImage2);
        jerry.changeAnimation("tease" , jerryImage2)
    }
}





