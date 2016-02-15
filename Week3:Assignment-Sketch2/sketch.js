function setup() {
  createCanvas(1600,1200);
  noStroke();
  background(0);
}

function draw() {
    
    var x=mouseX;
    var y=mouseY;
    
    beginShape();
    vertex(x,y);
    vertex(x+10,y+35);
    vertex(x+50,y+50);
    vertex(x+10,y+65);
    vertex(x,y+100);
    vertex(x-10,y+65);
    vertex(x-50,y+50);
    vertex(x-10,y+35);
    endShape(CLOSE);
    fill(random(255),random(255),random(255));
}