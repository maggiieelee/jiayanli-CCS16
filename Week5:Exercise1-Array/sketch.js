var myGeometry=["Zoey", 240, 120, "#ff2323"];

function setup() {
  createCanvas(500,500);
  }

function draw() {
    background(255);
    fill(myGeometry[myGeometry.length-1]);
    ellipse(width/2, height/2, myGeometry[1], myGeometry[2]);
    textAlign(CENTER);
    text("My geometry name is " + myGeometry[0], width/2, height-100);
  }
 
  