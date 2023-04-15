let num = 60;
let mx = [];
let my = [];

function setup() {
  createCanvas(1000, 1000);
  textSize(300);
  textAlign(CENTER, CENTER);
  fill(255, 153);
  noStroke();
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(237, 34, 93);

  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
   
    let index = (which + 1 + i) % num;
    text("?", mx[index], my[index]);
  }
}



  // ...




 






