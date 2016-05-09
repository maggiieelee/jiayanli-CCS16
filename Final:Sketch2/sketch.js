ar minion;
var banana;
var gravity=0.1;

function preload(){
  minion=loadImage("assets/minion.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(255);
  imageMode(CENTER);
  image(minion,width/2,height/2);

  textSize(15);
  fill(0);
  textStyle(ITALIC);
  text("Click and move mouse to throw bananas for fun!",100,50);

  fill(252, 229, 51);
  stroke(0);
  textSize(50);
  textStyle(BOLD);
  text("BA-NA-NA",width/2, height-30);

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



