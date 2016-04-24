var table;
var calibri;
var week=[];
var coffeeAmount= [];
var rectLerpAmt = 0;

function preload(){
  table=loadTable("data/myData.csv", "csv", "header");
  calibri=loadFont("assests/Calibri.ttf");
}

function setup() {
  createCanvas(400,400);
  textAlign(CENTER);
  coffeeAmount=table.getColumn("Amount");
  week=table.getColumn("Day");
}


function draw() {
  
  //title
  clear();
  background("#B6BF6F");
  fill("#8C644D");
  noStroke();
  textSize(20);
  textFont(calibri);
  text("MY WEEK OF COFFEE",width/2,120);
  
  //coffeecup
   noStroke();
   fill("#729ECC");
   translate(60,150);
   for(var i=0; i<300; i+=60){
    rect(i,0,40,100);
 }
  
  //coffeefill
  translate(0,100)
  for(var i=0; i<coffeeAmount.length; i++){
    
    fill("#CD8A59");
    noStroke();
    
    var mappedData=map(coffeeAmount[i],210,474,10,90);
    var rectHeight = lerp(0,mappedData,rectLerpAmt);
    
    rect(i*60,0,40,-rectHeight);
    
    if(rectLerpAmt < 1) {
    rectLerpAmt += 0.01;
    }
  }
  
  //week
  translate(20,20);
  for (var i=0; i<week.length; i++){
    fill("#4D5D73");
    textFont(calibri);
    textSize(10);
    text(week[i],60*i,0);
  }
  
}

function mousePressed(){
  rectLerpAmt = 0;
}



