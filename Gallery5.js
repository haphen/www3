var Move;
var brush = 0;
var img;

function preload() {
  img = loadImage("ALOHA.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER);
}

function draw() {
  noFill();
  fill(img.get(mouseX, mouseY));
  if (Move) {
    translate(mouseX, mouseY);
    noStroke();
    ellipse(0, 0, 8, 2);
    Move = false;
  }
}

function mouseDragged() {
  Move = true;
}