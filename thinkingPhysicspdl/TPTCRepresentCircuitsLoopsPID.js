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
  advicebutton = new CreateCheckButton(663, 65, "tell me more", false);
}

function draw() {
  background(CWHITE);
  advicebutton.drawButton();

  placePhysicalPane(144, 150, 200, 140);
  placeConceptualPane(144, 372, 246, 244);
  placeConceptualPane(430, 372, 266, 244);
  placeConceptualPane(430, 646, 266, 244);
  placeTransitionRedescribe(144, 235, 0);
  placeTransitionRedescribe(282, 372, 0);
  placeTransitionRedescribe(430, 509, 0);

  // pane01
  image(drawncircuit, 59, 90);

  // 	pane02
  push();
  translate(34, 372);
  drawLoopOne();

  pop();

  // 	pane03
  push();
  translate(600 - 276, 371);
  drawCircuitSimple("bulb");

  pop();

  // 	pane04
  drawRopeLoop(
    235 + 89,
    476 + 244 + 34,
    216,
    214,
    CIDEABLUE,
    runtime * displayspeed
  );

  if (advicebutton.buttonisChecked) {
    placeAdviceDroid(
      740,
      120,
      "A physical circuit is re-imagined as a loop.\n\n\nThe loop is an electrical circuit.\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe electrical circuit is modelled using a rope loop.",
      200,
      420
    );
  }

  placeTitleBold("Representing circuits as loops, to support reasoning");
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
