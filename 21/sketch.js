function setup() {
  createCanvas(1000,1000);
  background(0);

  
}

function draw(){

  background(0)
  for (let i = 2; i < width - 2; i += 4) {
    textSize(sin(frameCount/800 * i)*100)
    fill(255)
    text("?", 20 * i , 200 + 100 *  sin(i *frameCount/8000))
  }
}