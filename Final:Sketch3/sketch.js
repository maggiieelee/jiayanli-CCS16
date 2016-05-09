
function Particle(x,y) {
  this.x = x;
  this.y = y;
  this.speed = random(5);
  this.angle = random(-1*PI,PI); 
  this.xVel = cos(this.angle);
  this.yVel = sin(this.angle);
  this.lifespan=255;
}

Particle.prototype = {
  constructor: Particle,
  explode : function(){  
    this.x += this.xVel*this.speed;
    this.y += this.yVel*this.speed;
    this.lifespan-=2.0;
  },
  display : function(){
    noStroke();
    fill(random(250),random(250), frameCount%255,this.lifespan);
    ellipse(this.x, this.y, random(10), random(10));
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

  textSize(20);
  textAlign(CENTER);
  stroke(255);
  text("Click for More...", width/2,50);

  for (var i=0; i < particleHolder.length; i++){
    if(particleHolder[i].lifespan <= 0){
      particleHolder.splice(i,1);
    }
    else {
      particleHolder[i].explode();
      particleHolder[i].display();
    }
  }
}

function mouseClicked() {
  for (var i = 0; i<500; i++){
    particleHolder.splice(particleHolder.length,0, new Particle(mouseX,mouseY));
  }
}
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }