// {TPKnNavStreetsDisplacementTrackStepPID}{800}{800}

const numberVectors = 8;
const scaleFactor = 500;
const controllers = [];
const displacements = [];
var lastDisplacement;
var thisTrackstep;
var angleforStep;
var mouseDisplacement;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
  thebackground = loadImage("../__PDLgraphics/KinMap.png");
}
function setup() {
  createCanvas(800, 800);

  displacementsbutton = new checkButton(20, 750, "displacements", false);

  segmentsbutton = new checkButton(177, 750, "track segments", false);

  const xloc = width - 60;
  for (let i = 0; i < numberVectors; i++) {
    controllers[i] = new controlPuck();
    let yloc = 107 + 90 * i;
    controllers[i].create(xloc, yloc);
  }

  lastDisplacement = createVector(0, 0);
  mouseDisplacement = createVector(0, 0);
  thisTrackstep = createVector(0, 0);
}

function draw() {
  background(cWhite);
  imageMode(CENTER);
  image(thebackground, width / 2 - 30, height / 2);

  for (let i = 0; i < controllers.length; i++) {
    displacements[i] = createVector(
      controllers[i].getValues().xSet,
      controllers[i].getValues().ySet
    ).mult(scaleFactor);
  }

  displacementsbutton.drawButton();
  segmentsbutton.drawButton();

  push();
  translate(width / 2 - 30, height / 2);
  stroke(cideaRed);
  line(-8, 0, 8, 0); // origin marker
  line(0, -8, 0, 8);
  fill(cideaBlue);
  noStroke();
  for (let i = 0; i < controllers.length; i++) {
    if (i != 0) {
      lastDisplacement.set(displacements[i - 1].x, -displacements[i - 1].y);
      thisTrackstep.set(displacements[i].x, -displacements[i].y);
      thisTrackstep.sub(lastDisplacement).mult(-1);
      angleforStep = thisTrackstep.heading() + PI;
    } else {
      angleforStep = -displacements[i].heading();
      thisTrackstep.set(displacements[i].x, -displacements[i].y);
      lastDisplacement.set(displacements[i].x, -displacements[i].y);
    }
    if (segmentsbutton.buttonisChecked) {
      trackSegment(
        lastDisplacement.x,
        lastDisplacement.y,
        displacements[i].x,
        -displacements[i].y
      ); //draws the trackSegments showing track
    }
    if (displacementsbutton.buttonisChecked) {
      displacement(
        displacements[i].mag() * 0.1,
        degrees(-displacements[i].heading() + PI / 2),
        cpovAlice
      ); //draws displacements
    }
    ellipse(displacements[i].x, -displacements[i].y, 8, 8); // draws marker
  }
  pop();

  titleBold("Navigate the streets by setting the displacements");
}

function mouseReleased() {
  displacementsbutton.changeState();
  segmentsbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
