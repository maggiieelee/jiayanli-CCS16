function Particle(Xpos,Ypos) {
  this.Xpos = Xpos;
  this.Ypos= Ypos;
  this.accX = random(-1,2);
  this.accY= random(-2,1);
  this.lifespan = 255;
}

Particle.prototype = {
  constructor: Particle,
  explode : function(){  
    this.Xpos += this.accX;
    this.Ypos += this.accY;
    this.lifespan -=2.0;
  },
  display : function(){
    noStroke();
    fill(252, 229, 51, this.lifespan);
    ellipse(this.Xpos, this.Ypos, 5, 5);
  }  
};

var particleHolder = [];

function setup(){
  createCanvas(400,400);
  background(0);
  for (var i=0; i< 100; i++){
    particleHolder[i] = new Particle(width/2, height/2);
  }
}

function draw(){
  for (var i=0; i < particleHolder.length; i++){
    particleHolder[i].explode();
    particleHolder[i].display();
  }
}