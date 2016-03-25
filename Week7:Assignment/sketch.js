var waveOne = 120.0;
var waveTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 150;

function setup(){
  createCanvas(400,400);
  background(0);
}

function draw(){
  if(pointCount > 1000){
    noLoop();
  }
  
  translate(width/2, height/2);
  noStroke();
  
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveOne * TWO_PI;
  var y = sin(angle)* amplitude;
  angle = i / waveTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  fill(242,233,102,random(20));
  ellipse(x,y,4,4);
  fill(65,124,242,random(20));
  ellipse(y,x,4,4);
  }
endShape();

beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveTwo * TWO_PI;
  var y = cos(angle)* amplitude;
  angle = i / waveOne * TWO_PI;
  var x = cos(angle)* amplitude;
  fill(12,242,177,random(20));
  ellipse(x,y,4,4);
  fill(242,120,109,random(20));
  ellipse(y,x,4,4);
  }
endShape();

pointCount++;

  
}