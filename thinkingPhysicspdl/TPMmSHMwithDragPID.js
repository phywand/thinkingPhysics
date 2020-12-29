// {TPMmSHMwithDragPID}{900}{700}

const locX = 450;
const locY = 350;
var stateof = 0;
var runtime = 0;
var springconstant = 0;
var dragconstant = 0;
var massmagnitude = 0;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(900, 700);
  controlbutton = new CreateControlButton(20, 650, 60, 30);

  springconstantSet = new CreateControlStripVertical();
  springconstantSet.create(locX - 400, locY - 240);

  dragconstantSet = new CreateControlStripVertical();
  dragconstantSet.create(locX - 400, locY - 80);

  massmagnitudeSet = new CreateControlStripVertical();
  massmagnitudeSet.create(locX - 400 + 240, locY + 80);

  initialdisplacementSet = new CreateControlStripVertical();
  initialdisplacementSet.create(locX + 120 + 80 + 40, locY + 80 * 2);

  initialvelocitySet = new CreateControlStripVertical();
  initialvelocitySet.create(locX + 80 + 20, locY + 80);

  avSet = new CreateControlStripVertical();
  avSet.create(locX + 50, locY - 70);

  vxSet = new CreateControlStripVertical();
  vxSet.create(locX + 50 + 140, locY - 70 + 80);
}

function draw() {
  background(CWHITE);

  var av = avSet.getValues().ySet * 30;
  var vx = vxSet.getValues().ySet * 30;

  springconstant = springconstantSet.getValues().ySet * 20;
  dragconstant = dragconstantSet.getValues().ySet * 20;
  massmagnitude = massmagnitudeSet.getValues().ySet * 20;

  controlbutton.drawButton();

  if (controlbutton.buttonwasPressed) {
    stateof++;
    stateof = stateof % 3;
    controlbutton.buttonwasPressed = false;
  }

  switch (stateof) {
    case 0:
      //            ready to go
      placeWords("go", 28, height - 32);
      var initialfluent = initialdisplacementSet.getValues().ySet * 2;
      var initialfluxionfluent = initialvelocitySet.getValues().ySet * 2;
      runtime = 0;
      fluent = initialfluent;
      fluxionfluent = initialfluxionfluent;
      break;
    case 1:
      //            running
      placeWords("pause", 28, height - 32);
      runtime++;
      predictfluxionfluentFluent();
      break;
    case 2:
      //            paused
      placeWords("reset", 28, height - 32);
      break;
  }

  push();
  translate(locX, locY);

  placeIndicator(
    fluent * springconstant - (fluxionfluent * dragconstant) / massmagnitude,
    cindicator,
    "acceleration",
    "÷"
  );
  placeContributionLinkBackUp();
  placeIndicator(
    fluent * springconstant - fluxionfluent * dragconstant,
    cindicator,
    "resultant force",
    "-"
  );
  push(); //new branch
  placeContributionLinkBackUp();
  placeIndicator((springconstant / 5) * fluent, cindicator, "spring force", "×");
  push(); //new branch
  placeContributionLinkBackUp();
  placeIndicator(springconstant, cindicator, "spring constant", "");
  pop();
  placeContributionLinkBackDown();
  placeIndicator(fluxionfluent * dragconstant, cindicator, "drag force", "×");
  push(); //new branch
  placeContributionLinkBackUp();
  placeIndicator(dragconstant, cindicator, "drag constant", "");
  pop();
  pop();
  placeContributionLinkBackDown();
  placeIndicator(massmagnitude, cindicator, "mass", "");
  translate(120, -80);
  placeAcumulator(av, false);
  PlaceAccumulateLink();
  placeIndicator(fluxionfluent, cindicator, "velocity", "");
  placeFeedbackLinkshowVelocity();
  placeAcumulator(vx, false);
  PlaceAccumulateLink();
  placeIndicator(fluent, cindicator, "displacement", "");
  placeFeedbackLinkdiplacement();
  pop();

  push();
  translate(650, 150);
  showAcceleration(fluxion(fluent, fluxionfluent) * 10, 90, CACCELERATION);
  translate(0, 50);
  showVelocity(fluxionfluent * 5, 90, CCONGREEN);
  translate(0, 50);
  showDisplacement(fluent, 90, CCONORANGE);
  pop();

  placeTitleBold("A simple harmonic oscillator, with drag");
}

function fluxion(x, v) {
  return (-springconstant * x - dragconstant * v) / massmagnitude;
}

function mouseReleased() {
  controlbutton.checkPressed();
}

function placeFeedbackLinkdiplacement() {
  stroke(CIDEAGREY);
  strokeWeight(2);
  line(20, 0, 102, 0);
  line(102, 0, 102, 60);
  line(102, 60, -710, 60);
  line(-710, 60, -710, -300);
  line(-710, -300, -710 + 170, -300);
  line(-710 + 170, -300, -710 + 170, -315);
}
function placeFeedbackLinkshowVelocity() {
  stroke(CIDEAGREY);
  strokeWeight(2);
  line(20, 0, 30, 0);
  line(30, 0, 30, 60);
  line(30, 60, -400, 60);
  line(-400, 60, -400, -75);
}
