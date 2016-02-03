  //colorpick
  var lightGrey='#6A7179';
  var darkGrey='#404141';
  var Blue='#647AA8';
  var Green='#779772';
  var Red='#B95D62';
  var Canvas='#F8F1E7';
  var Black='#1F201B';
  var Yellow='#E1D259';

function setup() {
  createCanvas(360,460);
  background(Canvas);
  strokeWeight(2);
  
}

function draw() {
  //redline
  stroke(Red);
  line(50,130,90,130);
  line(70,110,70,150);
  line(120,260,170,260);
  line(150,240,150,280);
  noFill();
  ellipse(280,140,30,30);
  
  //blueline
  stroke(Blue);
  line(230,125,270,125);
  line(250,100,250,145);
  
 
 //greenboxes
 fill(Green);
 noStroke();
 rect(260,240,10,90);
 rect(270,270,40,10);
 quad(200,250,260,270,260,280,200,260);
 
  //greyline
  stroke(darkGrey);
  noFill();
  quad(240,150,265,150,290,200,265,200);
  line(290,220,290,320);
  line(250,250,310,250);
  
  //lightgreyboxes
  noStroke();
  fill(lightGrey);
  rect(50,80,260,20);
  rect(50,350,260,30);
  
  
  //blueboxes
  fill(Blue);
  rect(180,100,20,250);
  rect(120,200,190,20);
  quad(90,185,120,200,120,220,80,200);
  
  //darkgreyboxes
  fill(darkGrey);
  rect(50,220,70,130);
  quad(105,100,130,100,90,185,70,174);
  
  //yellowline
  stroke(Yellow);
  noFill();
  line(80,260,120,260);
  ellipse(150,160,50,50);
  
  //yellowbox
  fill(Yellow);
  quad(121,290,146,290,179,350,154,350);
  
  //whitebox
  stroke('white');
  noFill();
  quad(90,250,110,250,80,320,60,320);
  
  
  
 

  
}