var img;
var img2;
var img3;
var half;

function preload() {
  img = loadImage('Kiss.jpg');
  img2 = loadImage('heart.gif');
  img3 = loadImage('light.png');

}
function setup() {
  createCanvas(500, 550);
  image(img, 0, 0); 
  half = 300;

}

function draw() {
  background(img);
  image(img2, 240, 65, 50, 50, half);
      if(half === 0){
    image(img3, 0, 0, 500, 500);
  }

}

function mousePressed() {
   half = half - 10;
}