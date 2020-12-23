// {TPTCRepresentCircuitsLoopsPID}{810}{780}

var lastposition = (runtime = 0);
const ropespeed = 4;
const displayspeed = ropespeed / 4;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
  drawncircuit = loadImage(
    "../__PDLgraphics/catchingphysicsPDLgraphics/CgDrawnPhysicalCircuitTop.svg"
  );
}

function setup() {
  createCanvas(810, 780);
  advicebutton = new checkButton(663, 65, "tell me more", false);
}

function draw() {
  background(cWhite);
  advicebutton.drawButton();

  physicalPane(144, 150, 200, 140);
  conceptualPane(144, 372, 246, 244);
  conceptualPane(430, 372, 266, 244);
  conceptualPane(430, 646, 266, 244);
  transitionRedescribe(144, 235, 0);
  transitionRedescribe(282, 372, 0);
  transitionRedescribe(430, 509, 0);

  // pane01
  image(drawncircuit, 59, 90);

  // 	pane02
  push();
  translate(34, 372);
  loopOne();

  pop();

  // 	pane03
  push();
  translate(600 - 276, 371);
  circuitSimple("bulb");

  pop();

  // 	pane04
  ropeloop(
    235 + 89,
    476 + 244 + 34,
    216,
    214,
    cideaBlue,
    runtime * displayspeed
  );

  if (advicebutton.buttonisChecked) {
    advicedroid(
      740,
      120,
      "A physical circuit is re-imagined as a loop.\n\n\nThe loop is an electrical circuit.\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe electrical circuit is modelled using a rope loop.",
      200,
      420
    );
  }

  titleBold("Representing circuits as loops, to support reasoning");
  runtime++;
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}

function mouseReleased() {
  advicebutton.changeState();
}
