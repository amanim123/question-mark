let img;
function preload() {
  img = loadImage('question.png');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  textureWrap(MIRROR);
  describe('an image of multiple question marks');
}

function draw() {
  background(0);

  let dX = mouseX;
  let dY = mouseY;

  let u = lerp(1.0, 2.0, dX);
  let v = lerp(1.0, 2.0, dY);

  scale(width / 2);

  texture(img);

  beginShape(TRIANGLES);
  vertex(-1, -1, 0, 0, 0);
  vertex(1, -1, 0, u, 0);
  vertex(1, 1, 0, u, v);

  vertex(1, 1, 0, u, v);
  vertex(-1, 1, 0, 0, v);
  vertex(-1, -1, 0, 0, 0);
  endShape();
}


