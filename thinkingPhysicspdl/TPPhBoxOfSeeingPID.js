// {TPPhBoxOfSeeingPID}{900}{500}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(900, 500);
  noLoop();
}

function draw() {
  background(cWhite);

  stroke(cideaGrey);
  rect(90, 120, 666, 323);
  strokeWeight(4);
  line(220, 470, 320, 470);
  line(50, 360, 50, 260);
  fill(cideaGrey);
  noStroke();
  quad(320, 470, 310, 460, 350, 470, 310, 480);
  quad(50, 260, 40, 270, 50, 230, 60, 270);

  words("quite dim", 110, 105);
  words("very bright", 680, 105);
  words("very red", 770, 411);
  words("very blue", 770, 140);
  words("brightness\nincreasing", 128, 464);
  words("colour\nchanging", 10, 388);

  titleBold("The box of seeing");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
