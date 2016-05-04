
function Particle(x,y) {
  this.x = x;
  this.y = y;
  this.xVel = tan(random(180));
  this.yVel = tan(random(180));
  this.lifespan = 255;
}

Particle.prototype = {
  constructor: Particle,
  explode : function(){  
    this.x += this.xVel;
    this.y += this.yVel;
    this.lifespan -=3.0;
  },
  display : function(){
    noStroke();
    fill(252, 229, 51, this.lifespan);
    ellipse(this.x, this.y, 10, 10);
  }  
};

var particleHolder = [];


function setup(){
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i< 500; i++){
    particleHolder[i] = new Particle(width/2, height/2);
  }
}

function draw(){
  background(0);
  for (var i=0; i < particleHolder.length; i++){
    particleHolder[i].explode();
    particleHolder[i].display();
  }

}