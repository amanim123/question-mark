function setup() {
  createCanvas(1000, 1000);
  background(230);
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(237, 34, 93);
  }
  textSize(400);
  textAlign(CENTER, CENTER); 
  text("?", mouseX, mouseY); //movin movin
}




 






