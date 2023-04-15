
let c;

let questionMarks = [];

function setup() {
  createCanvas(1000,1000);
  for(let i = 0; i < 10; i++) {
    questionMarks.push(new QuestionMark(random(width), random(height)));
  }
}

function draw() {
  background(255);
  for(let i = 0; i < questionMarks.length; i++) {
    questionMarks[i].move();
    questionMarks[i].display();
  }
}

class QuestionMark {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 90;
    this.speed = random(1, 5);
  }
  
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
  
  display() {
    textSize(this.size);
    text("?", this.x, this.y);
  }
}
function mousePressed(){
  saveCanvas (c, "them", "PNG")
}
