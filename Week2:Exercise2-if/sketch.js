function setup() {
   createCanvas(windowWidth,windowHeight);
   noStroke();
   rectMode(CENTER);
}

function draw() {
  if(mouseX<=width/2){
    rect(mouseX,mouseY,20,20);
    fill('blue');
  } else {
    ellipse(mouseX,mouseY,20,20);
    fill('red');
  }
}