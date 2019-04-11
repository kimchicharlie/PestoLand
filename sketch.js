
var sardineImage;
var penguinImage;
var backgroundImage;
var penguinX = 220;
var penguinY = 220;

var level = 0;
var score = 0;
var sardines = [];

function preload() {
  sardineImage = loadImage('sardine.png');
  penguinImage = loadImage('penguin.png');
  backgroundImage = loadImage('floe.jpg');
}

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(backgroundImage);
  textSize(18);
  text("SCORE : " + score, 10, 20);
  textSize(18);
  text("LEVEL : " + level, 400, 20);

  if (sardines.length === 0) {
    level++;
    var counter = 0;
    while (counter < level) {
      var sardineX = Math.round(Math.random() * 450);
      var sardineY = Math.round(Math.random() * 450);
      sardines.push(new Sardine(sardineX, sardineY));
      counter++;
    }
  }

  for (let index = 0; index < sardines.length; index++) {
    if (sardines[index]) {
      var d = dist(penguinX, penguinY, sardines[index].x, sardines[index].y);
      if (d <= 40) {
        sardines.splice(index, 1);
        score++;
      } else {
        sardines[index].show();
      }
    }
  }

  if (keyIsDown(LEFT_ARROW) && penguinX > 0) {
    penguinX = penguinX - 3;
  }
  if (keyIsDown(RIGHT_ARROW) && penguinX < 450) {
    penguinX = penguinX + 3;
  }
  if (keyIsDown(UP_ARROW) && penguinY > 0) {
    penguinY = penguinY - 3;
  }
  if (keyIsDown(DOWN_ARROW) && penguinY < 450) {
    penguinY = penguinY + 3;
  }
  image(penguinImage, penguinX, penguinY);
}