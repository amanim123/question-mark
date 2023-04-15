let message = '?????????????????????????????????????????',
  font,
  bounds, 
  fontsize = 200,
  x,
  y; 
function preload() {
  font = loadFont('Arial Bold.ttf');
}

function setup() {
  createCanvas(1000, 1000);

  
  textFont(font);
  textSize(fontsize);


  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(150,30,50);

 
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}





 






