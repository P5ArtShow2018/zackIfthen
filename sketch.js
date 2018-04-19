function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0);
  strokeWeight(5);
  noFill();
  
  if(mouseX > 250) {
    fill(250,0,0);
  }
  if(mouseX > 500) {
    fill(0,255,0);
  }
  if(mouseX > 750) {
    fill(0,0,255);
  }  

  if(mouseY > 0) {
   strokeWeight(7.5);
  }
  if(mouseY > 250) {
    strokeWeight(10);
  }
  if(mouseY > 500) {
   strokeWeight(12.5);
  }
  if(mouseY > 750) {
    strokeWeight(15);
  }
  ellipse(mouseX,mouseY,100);
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}