function setup() {
  createCanvas(480,480);
  frameRate(5);
}

function draw() {
  
  fill(0);
  ellipse(240,240,60,60);
  
  var x=random(480);
  var y=random(480);
  var u=random(480);
  var v=random(480);
  
  strokeWeight(6);
  point(x,y);
  point(u,v);
  point(y,x);
  point(v,u);
  
  strokeWeight(random(2));
  noFill();
  beginShape();
  vertex(x,y);
  vertex(u,v);
  vertex(y,x);
  vertex(v,u);
  endShape(CLOSE);
  
}