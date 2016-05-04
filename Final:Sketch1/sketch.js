var x,y,x1,x2,y1,y2;
var step;

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(250);
 smooth(8);
 noFill();
 stroke(20,15);
 strokeWeight(0.9);
 
 x1=y1=-3;
 x2=y2=3;
 y=y1;
 step=(x2-x1)/(2.321*width);
 
}

function draw() {
   for (var x=x1;x<=x2;x+=step){
     drawVariation(x,y);
   }
   y+=step;
}


function drawVariation(x,y){
  var v = createVector(x,y);
  var amount = 1.0;
  
  //sinusoidal
  s_x=amount*sin(v.x);
  s_y=amount*sin(v.y);
    
  //julia
  var r2=amount*sqrt(v.mag());
  var theta=0.5*atan2(v.x,v.y)+(int)(2.0 * random(0, 1)) * PI;
  var j_x = r2 * cos(theta);
  var j_y = r2 * sin(theta);
  
  
  v = new p5.Vector(j_x+s_x, j_y+s_y);
 
  var xx = map(v.x+0.003*randomGaussian(), x1, x2, 20, width-20);
  var yy = map(v.y+0.003*randomGaussian(), y1, y2, 20, height-20);
  point(xx, yy);
}
 







