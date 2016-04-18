var poem = [];
var lexicon;

function setup(){
  createCanvas(400,500);
  
  textSize(16);
  textFont("Times");
  
  lexicon = new RiLexicon();
  
  poem = RiTa.tokenize("When you are old and grey and full of sleep, \nAnd nodding by the fire, take down this book, \nAnd slowly read, and dream of the soft look Your eyes had once, \nand of their shadows deep; \nHow many loved your moments of glad grace, \nAnd loved your beauty with love false or true, \nBut one man loved the pilgrim soul in you, \nAnd loved the sorrows of your changing face; \nAnd bending down beside the glowing bars, \nMurmur, a little sadly, how Love fled And paced upon the mountains overhead \nAnd hid his face amid a crowd of stars.");

  frameRate(0.5);
}

function draw(){
       
  background(20);
  fill(255);
  
   //replace all nouns with random nouns
      for(var i=0; i < poem.length; i++){
        if (lexicon.isNoun(poem[i])){
          poem[i]=lexicon.randomWord('nn');
        }
        
  //replace all adjectives with random adjectives
        else if (lexicon.isAdjective(poem[i])){
          poem[i]=lexicon.randomWord('jj');
        }
        }
          
        text(poem.join(' '), 50, 50, 300, height); 
}




