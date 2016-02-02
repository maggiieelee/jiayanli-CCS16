function setup() {
  createCanvas(1200,600);
  strokeWeight(18);
  strokeCap(SQUARE);
}

function draw() {
  //left square
  //basic lines
  stroke(0);
  rect(20,20,400,400);
  line(20,220,420,220);
  line(220,20,220,420);
  //up-left square
  line(60,20,60,220);
  line(100,20,100,220);
  line(140,20,140,220);
  line(180,20,180,220);
  //up-right square
  line(220,53,420,53);
  line(220,86,420,86);
  line(220,119,420,119);
  line(220,152,420,152);
  line(220,185,420,185);
  //down-left square
  line(20,420,220,220);
  line(70,420,220,270);
  line(120,420,220,320);
  line(170,420,220,370);
  line(20,370,170,220);
  line(20,320,120,220);
  line(20,270,70,220);
  //down-right square
  line(220,220,420,420);
  line(270,220,420,370);
  line(320,220,420,320);
  line(370,220,420,270);
  line(220,270,370,420);
  line(220,320,320,420);
  line(220,370,270,420);
  
  //right square
  //basic lines
  rect(520,20,400,400);
  //up-left square
  line(560,20,560,220);
  line(600,20,600,220);
  line(640,20,640,220);
  line(680,20,680,220);
  //up-right square
  stroke(255,234,21);
  line(720,53,920,53);
  line(720,86,920,86);
  line(720,119,920,119);
  line(720,152,920,152);
  line(720,185,920,185);
  //down-left square
  stroke(255,3,0);
  line(520,420,720,220);
  line(570,420,720,270);
  line(620,420,720,320);
  line(670,420,720,370);
  line(520,370,670,220);
  line(520,320,620,220);
  line(520,270,570,220);
  //down-right square
  stroke(20,129,204);
  line(720,220,920,420);
  line(770,220,920,370);
  line(820,220,920,320);
  line(870,220,920,270);
  line(720,270,870,420);
  line(720,320,820,420);
  line(720,370,770,420);
  //basic lines
  stroke(0);
  line(520,220,920,220);
  line(720,20,720,420);
  line(520,20,520,420);
  line(520,420,920,420);
  line(920,20,920,420);
  }