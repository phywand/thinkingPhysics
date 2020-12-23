//   {TPPhBoxOfSeeingPhotonQuantitiesPID}{850}{535}

var timeoclock = 0;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
}

function setup() {
  createCanvas(850, 535);
}

function draw() {
  background(cWhite);

  stroke(cideaGrey);
  strokeWeight(1);
  rect(90, 120, 566, 323);

  words("quite dim", 110, 105);
  words("very bright", 580, 105);
  words("very red", 670, 411);
  words("very blue", 670, 140);
  words("brightness increasing", 300, 105);
  words("colour\nchanging", 670, 280);

  push();
  translate(110, 500);
  quantity(1, cactivity, "");
  words("few photons\nevery second", 20, 0);
  pop();

  push();
  translate(636, 500);
  quantity(5, cactivity, "");
  words("many photons\nevery second", 20, 0);
  pop();

  push();
  translate(770, 411);
  phasorArrow(4, 0.1, timeoclock, ccongray);

  pop();

  push();
  translate(770, 140);
  phasorArrow(4, 0.2, timeoclock, ccongray);
  pop();

  titleBold("The box of seeing: a photon description");

  timeoclock++;
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
