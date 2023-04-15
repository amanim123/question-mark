let message = '????????????!';
let messageX;
const xSpeed = 2;
const ySpeed = 0.05;
const amplitude = 100;
const verticalLetterSpacing = 10;
let font;

function preload() {
  font = loadFont('Arial Bold.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font);

  messageX = width;
}

function draw() {
  background(32);
  fill(255, 100, 25);

  textSize(200);

  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;

    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }

  textSize(24);
  fill(200);
  text("Arial Bold.ttf", 25, height - 25);
}





 






