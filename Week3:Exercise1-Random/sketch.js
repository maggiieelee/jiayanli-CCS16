function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  background('black');
}

function draw() {
  var x= random(255);
  var y= random(255);
  var z= random(255);
 
    fill(x,y,z);  
 
  if (mouseX<=windowWidth/2){
    
    ellipse(mouseX,mouseY,20,20);
  
    
  } else {
    
    rect(mouseX,mouseY,20,20);

  }
  
}