function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(.5);
  stroke(48,25,52);
  frameRate(1); //x frames/sec
}

function draw() {
  clear()
  background(254,216,200)
  var margin = 30;
  var width = innerWidth - 2*margin;
  var height = innerWidth - 2*margin;
  
  var shift = random(0,5);
  var space = random(1,15);
  
  var numSquares = 10;
  var sidelen = width/numSquares;
  
  translate (margin,margin);
  for(var y=0; y < height; y=y+sidelen){
  for(var x=0; x < width; x=x+sidelen){
  fill(random(0,250),150,140)
    
    quad(x + space + random(-shift, shift),y + space + random(-shift, shift), x+sidelen - space + random(-shift, shift),y + space + random(-shift, shift), x+sidelen - space + random(-shift, shift),y+sidelen - space + random(-shift, shift), x + space + random(-shift, shift),y+sidelen - space + random(-shift, shift));
  }
  }
  
  // noLoop();
}