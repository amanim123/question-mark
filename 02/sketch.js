
let c;

function setup () {
  createCanvas(1000,1000)
  background(0)
}

function draw () {

  textSize(mouseX)
  fill(100, 102, 153, 51);
  text ("?", mouseX,mouseY);
    
}

function mousePressed(){
  saveCanvas (c, "them", "PNG")
}


