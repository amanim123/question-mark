let questionMarks = [];

function setup() {
  createCanvas(1000,1000);
  for(let i = 0; i < 10; i++) {
    questionMarks.push(new QuestionMark(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for(let i = 0; i < questionMarks.length; i++) {
    questionMarks[i].move();
    questionMarks[i].colorChange();
    questionMarks[i].display();
  }
}

class QuestionMark {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 500;
    this.speed = random(1, 9);
    this.color = color(random(255), random(255), random(255));
    this.direction = 4;
  }
  
  move() {
    if(this.x >= width-this.size || this.x <= 0) {
      this.direction = -this.direction;
    }
    this.x += this.speed*this.direction;
    this.y += this.speed;
  }
  
  colorChange() {
    this.color = color(random(255), random(255), random(255));
  }
  
  display() {
    fill(this.color);
    textSize(this.size);
    text("?", this.x, this.y);
  }
}
