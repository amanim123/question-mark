let totalPts = 300;
let steps = totalPts + 1;

function setup() {
  createCanvas(1000, 1000);
  stroke(255);
  frameRate(5);
}

function draw() {
  background(0);
  let rand = 0;
  for (let i = 1; i < steps; i++) {
    let x = (width / steps) * i;
    let y = height / 2 + random(-rand, rand);
    rand += random(-5, 5);
    textSize(80);              
    textAlign(CENTER, CENTER); 
    text("?", x, y);           
  }
}





 






