var leftMargin = 100;
var topMargin = 100;

function setup() {
  createCanvas(500, 500);
  colorMode(RGB,255,255,255,1);
  background(0);
}

function draw() {
  noStroke();
  
  translate(leftMargin,topMargin);
  
  for(var i=0; i < 400; i+=100){
    for(var j=0; j < 400; j+=100){
      push();
      var colorFrom=color(134,1,28,0.6);
      var colorTo=color(2,66,101,0.6);
      var lerpAmt=map(i,0,500,0,1.0);
      var lerpedCol=lerpColor(colorFrom,colorTo,lerpAmt);
      fill(lerpedCol);
      translate(i, j);
      rotate(radians(frameCount));
      rect(0,0,20,20);
      pop();
    }
  }
}