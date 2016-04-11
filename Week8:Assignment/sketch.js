var lines = [];

function preload(){
  lines=loadStrings('Poems of Passion.txt');
}

function setup(){
  createCanvas(400,400);
  text(lines,0,0,width,height);
}
