function setup() {
  createCanvas(800,800);
  noStroke();
  background('black');
}

function draw() {
  
  for(var x=0; x < 40; x++){
    for (var y=0; y< 40; y++){
    rect(x*20,y*20,15,15);
    fill(random(255),random(255),random(255));
    }
  }
}