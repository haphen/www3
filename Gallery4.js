var img;
var v = 0;

function preload() {
  img = loadImage('AngelDevil.jpg');
}

function setup() {
  createCanvas(500, 500);
  image(img, 0, 0);
}

function draw() {
  background(img);
}



function keyPressed() {
  v = random(100, 100);
  filter(POSTERIZE, 3);
  if(keyCode === DOWN_ARROW){
  tint(255, 0, 0, v);
  setup();}
  if(keyCode === UP_ARROW){
  tint(255, 255, 255, v);
  }
}