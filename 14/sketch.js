function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {

  
  let val = randomGaussian();

  let sd = 60;                  
  let mean = width/2;           
  let x = ( val * sd ) + mean;  

  noStroke();
  fill(255, 10);
  textSize(200);              
  textAlign(CENTER, CENTER);  
  text("?", x, height/2);   
}






 






