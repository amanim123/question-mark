

function setup () {
  createCanvas(1000,1000)
  background(255)
}


let angle = 0;



function draw() {
  background(255);



  translate(width / 5, height / 5); 
  rotate(angle);
  strokeWeight(2);
  stroke(0);
  noFill();
  textSize(200);
  textAlign(CENTER, CENTER);
  text("?", 0, 0); 
  angle += 0.05; 



 }






