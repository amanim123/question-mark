
let inconsolata;
function preload() {
  inconsolata = loadFont('Arial Bold.ttf');
}
function setup() {
  createCanvas(1000, 1000, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(0);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('?????', 0, 0);
}


 






