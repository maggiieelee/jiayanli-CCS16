var x, y, r;

function setup(){
  createCanvas(640,640);
  noStroke();
  background('#198CD8');
}

function draw(){
  x = random(20, 620);
  y = random(20, 620);
  if (random()>0.9){
    r =random(50, 80);
  } else {
    r = random(10, 30);
  }
  fill(252, 229, 51, random(10, 250));
  ellipse(x, y, r, r);
  
}