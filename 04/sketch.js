let x = 5;
let y = 5;
let speed = 2;
let size = 50;
let color;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
    background(0);

translate (x, 400);
  textSize(300);
  fill("white");
  text("?", 0 ,0 ,50);

  translate (x, 100);
  textSize(300);
  fill("white");
  text("?", 0 ,0 ,50);
  
  // Move the "?" horizontally

  x = x+ 5;

  if (x > width) {
    x = 0;
  }
}