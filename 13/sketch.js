function setup() {
  createCanvas(1000, 1000);
  background(102);
}

function draw() {
 
  variableQuestionMark(mouseX, mouseY, pmouseX, pmouseY);
}


function variableQuestionMark(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  textSize(speed);
  textAlign(CENTER, CENTER);
  fill(255);
  text("?", x, y);
}






 






