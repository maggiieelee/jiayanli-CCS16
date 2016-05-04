var minion;
var banana;
var gravity=0.1;

function preload(){
  minion=loadImage("assets/minion.jpg")
}
function setup() {
   createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(minion);
  
  for(var i=0; i<allSprites.length; i++)
    {
    var mySprite = allSprites[i];
  
    mySprite.addSpeed(gravity, 90);
    mySprite.attractionPoint(0.5, mouseX, mouseY);
    
    if(mySprite.position.y > height + 100)
      mySprite.remove();
    }

  drawSprites();
}

function mousePressed() {
    banana = createSprite(mouseX, mouseY);
    banana.addAnimation("normal", "assets/banana001.png", "assets/banana002.ipg", "assets/banana003.png");
  
    banana.animation.stop();
    var f = round(random(0, banana.animation.getLastFrame()));
    banana.animation.changeFrame(f);
}



