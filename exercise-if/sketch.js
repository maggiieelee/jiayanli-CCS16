function setup() {
   createCanvas(800,600);
   noStroke();
}

function draw() {
  if(mouseX<=400 && mouseY<=400){
    rect(100,100,200,200);
    fill('blue');
  } else {
    ellipse(500,400,200,200);
    fill('red');
  }
}