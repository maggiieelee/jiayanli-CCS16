function setup() {
  createCanvas(windowWidth,windowHeight);
  background('#FFE4BF');
  noStroke();
}

function draw() {
  //background
  for(y=21;y<windowHeight;y+=90){
  fill('#FB7B0D');
  rect(0,y,windowWidth,14);
  }
  
  //circle
  for(x=0;x<windowWidth/3;x+=10){
    for(y=28;y<windowHeight;y+=90){
    fill('#FFE3BE');
    ellipse(x,y,5,5);
    }
  }
  
  for(x=windowWidth/3+60;x<windowWidth;x+=10){
    for(y=28;y<windowHeight;y+=90){
    fill('#FFE3BE');
    ellipse(x,y,5,5);
    }
  }

  //line
  for(y=16;y<windowHeight;y+=90){
  fill('#6F3328');
  rect(0,y,windowWidth,5);
  }
  
  //triangleupleft
  for(x=0;x<windowWidth;x+=80){
    for(y=37;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    fill('#FB7B0D');
    triangle(x,y,x+30,y,x+15,y+30);
    }
  }
  
  //triangleupright
  for(x=40;x<windowWidth;x+=80){
    for(y=37;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    fill('#FB7B0D');
    triangle(x,y,x+30,y,x+15,y+30);
    }
  }

  //triangledownleft
  for(x=15;x<windowWidth;x+=80){
    for(y=67;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    fill('#FB7B0D');
    triangle(x,y,x+15,y+30,x-15,y+30);
    }
  }
  
  //triangledownright
  for(x=55;x<windowWidth;x+=80){
    for(y=67;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    fill('#FB7B0D');
    triangle(x,y,x+15,y+30,x-15,y+30);
    }
  }
  
  //point
  for(x=15;x<windowWidth;x+=80){
    for(y=47;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    point(x,y);
    }
  }
  
  for(x=55;x<windowWidth;x+=80){
    for(y=47;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    point(x,y);
    }
  }
  
  for(x=55;x<windowWidth;x+=80){
    for(y=87;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    point(x,y);
    }
  }
  
  for(x=15;x<windowWidth;x+=80){
    for(y=87;y<windowHeight;y+=90){
    stroke('#6F3426');
    strokeWeight(5);
    point(x,y);
    }
  }
  
  //diamond
  for(x=15;x<windowWidth;x+=80){
    for(y=67;y<windowHeight;y+=90){
    beginShape();
    noFill();
    stroke('#6F3426');
    strokeWeight(4);
    vertex(x,y);
    vertex(x+20,y-18);
    vertex(x+40,y);
    vertex(x+20,y+18);
    endShape(CLOSE); 
    }
  }
  
  for(x=25;x<windowWidth;x+=80){
    for(y=67;y<windowHeight;y+=90){
    beginShape();
    noStroke();
    fill('#FB7B0D');
    vertex(x,y);
    vertex(x+10,y-10);
    vertex(x+20,y);
    vertex(x+10,y+10);
    endShape(CLOSE); 
    }
  }

}