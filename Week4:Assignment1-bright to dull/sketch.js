function setup() {
  createCanvas(960,480);
  noStroke();
}

function draw() {
  var colorFrom=color('#DA322B');
  var colorTo=color('#3E4589');
  
  for(var x=0; x<960; x+=20){
    var lerpAmt=map(x,0,960,0,1.0);
    var lerpedCol=lerpColor(colorFrom,colorTo,lerpAmt);
    fill(lerpedCol);
    rect(x,0,20,480);
  }
}