var angle=0.0;

function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
  translate(width/2, height/2);
  rotate(angle);
  rect(frameCount%width/2,0,10,5);
  angle += 10;
}