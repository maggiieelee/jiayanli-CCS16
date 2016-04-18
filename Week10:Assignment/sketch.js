var slider1;
var button;
var inputButton;
var slider;
var bgColor='black';
var angle = 0.0;

function setup(){
 
 //main canvas
 var picCanvas=createCanvas(400,400);
 picCanvas.position(50,50);
 
 //button:change background
 button=createButton("Change Background");
 button.position(500,440);
 button.mousePressed(
   function(){
    bgColor=color(random(255),random(255),random(255),random(10,30));
   }
   )
   
   //slider1:change speed
   slider1=createSlider(0,10,3);
   slider1.position(500,70);
   slider1In=createElement('h5','Change Speed');
   slider1In.position(500,30);
     
   //slider2:change size
   slider2=createSlider(0,20,10);
   slider2.position(500,275);
   var slider2In=createElement('h5','Change Size');
   slider2In.position(500,235);
   

}
function draw() {
  background(bgColor);
  noStroke();
  
  //shape drawing
 
  translate(width/2,height/2);
  var speed=map(slider1.value(),0,10,0,1);
  angle += speed;
  rotate(angle);
  frameRate(30);
  
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    fill(255);
    var size = slider2.value();
    ellipse(frameCount % (width/2),0,size,size);
    pop();
  }
  
}