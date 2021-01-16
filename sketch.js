var canvas;
var music;
var movingRect;
var object1,object2,object3,object4;
var invisibleBox1,invisibleBox2,invisibleBox3,invisibleBox4;
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    createCanvas(800,600);
    movingRect = createSprite(random(20,750),100,40,40);
    movingRect.shapeColor = "white";
    //create 4 different surfaces
     object1 = createSprite(300,580,180,20);
     object2 = createSprite(100,580,180,20);
     object3 = createSprite(500,580,180,20);
     object4 = createSprite(700,580,180,20);
     invisibleBox1 = createSprite(400,595,800,15);
     invisibleBox2 = createSprite(795,300,15,600);
     invisibleBox3 = createSprite(5,300,15,600);
     invisibleBox4 = createSprite(400,5,800,15);
     invisibleBox1.visible = false;
     invisibleBox2.visible = false;
     invisibleBox3.visible = false;
     invisibleBox4.visible = false;
     object1.shapeColor = "red";
     object2.shapeColor = "yellow";
     object3.shapeColor = "blue";
     object4.shapeColor = "green";
    //create box sprite and give velocity
     //movingRect.velocityX = 3;
     movingRect.velocityY = 3;
}

function draw() {
    background(0);
    //create edgeSprite
     //createEdgeSprites()
     movingRect.bounceOff(invisibleBox1);
     movingRect.bounceOff(invisibleBox2);
     movingRect.bounceOff(invisibleBox3);
     movingRect.bounceOff(invisibleBox4);
     if (object1.isTouching(movingRect)&& movingRect.collide(object1)){
        movingRect.shapeColor = "red"
        movingRect.velocityX = 0;
        movingRect.velocityY = 0;
        music.stop();
    }
    if (object2.isTouching(movingRect)&& movingRect.bounceOff(object2)){
        movingRect.shapeColor = "yellow"
    }
    if (object3.isTouching(movingRect)&& movingRect.bounceOff(object3)){
        movingRect.shapeColor = "blue"
    }
    if (object4.isTouching(movingRect)&& movingRect.bounceOff(object4)){
        movingRect.shapeColor = "green"
        music.play();
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
