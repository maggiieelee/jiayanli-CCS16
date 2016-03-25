var angle= 0.0;
var xamplitude=100;
var xangle=0.0
var yangle=0.0
var yamplitude=100;
var xspeed=0.1;
var yspeed=0.13;

function setup() {
  createCanvas(400,400);
  background(0);
  noStroke();
}

function draw() {
  var from=color(134,1,28);
  var to=color(2,66,101);
  var lerpAmt=random(0,1);
  var lerpedCol=lerpColor(from, to, lerpAmt);
  
  fill(lerpedCol);
  var x=sin(xangle)*xamplitude
  var y=cos(yangle)*yamplitude
  translate(width/2, height/2);
  ellipse(x,y,5,5);

  xangle += xspeed
  yangle += yspeed
  
}