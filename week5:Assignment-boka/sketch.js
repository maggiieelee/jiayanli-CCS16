function setup() {
  createCanvas(480,480);
}

function draw() {
 boka(30,170,random(120,170),50,100);
 boka(180,270,250,200,200);
}

function boka(r,l,y,x,z){
  strokeWeight(3);
  //body
  rect(x,z,100,120);
  //patern
  rect(x+10,z+60,20,20);
  rect(x+30,z+60,40,20);
  rect(x+70,z+60,20,20);
  //head
  ellipse(x+50,z,100,90);
  line(x+50,z-45,x+50,z-65);
  line(x+50,z-65,x+60,z-75);
  line(x+50,z-65,x+40,z-75);
  //face
  ellipse(x+30,z,20,20);
  point(x+30,z);
  ellipse(x+70,z,20,20);
  point(x+70,z);
  line(x+40,z+20,x+60,z+20);
  //feet
  ellipse(x+20,z+120,20,20);
  ellipse(x+80,z+120,20,20);
  //hand
  line(x,z+50,r,y);
  ellipse(r,y,20,20);
  line(x+100,z+50,l,y);
  ellipse(l,y,20,20);
}