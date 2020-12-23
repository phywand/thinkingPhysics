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
  controlbutton = new controlButton(20, 650, 60, 30);

  springconstantSet = new controlStripVertical();
  springconstantSet.create(locX - 400, locY - 240);

  dragconstantSet = new controlStripVertical();
  dragconstantSet.create(locX - 400, locY - 80);

  massmagnitudeSet = new controlStripVertical();
  massmagnitudeSet.create(locX - 400 + 240, locY + 80);

  initialdisplacementSet = new controlStripVertical();
  initialdisplacementSet.create(locX + 120 + 80 + 40, locY + 80 * 2);

  initialvelocitySet = new controlStripVertical();
  initialvelocitySet.create(locX + 80 + 20, locY + 80);

  avSet = new controlStripVertical();
  avSet.create(locX + 50, locY - 70);

  vxSet = new controlStripVertical();
  vxSet.create(locX + 50 + 140, locY - 70 + 80);
}

function draw() {
  background(cWhite);

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
      words("go", 28, height - 32);
      var initialfluent = initialdisplacementSet.getValues().ySet * 2;
      var initialfluxionfluent = initialvelocitySet.getValues().ySet * 2;
      runtime = 0;
      fluent = initialfluent;
      fluxionfluent = initialfluxionfluent;
      break;
    case 1:
      //            running
      words("pause", 28, height - 32);
      runtime++;
      predictfluxionfluentFluent();
      break;
    case 2:
      //            paused
      words("reset", 28, height - 32);
      break;
  }

  push();
  translate(locX, locY);

  indicator(
    fluent * springconstant - (fluxionfluent * dragconstant) / massmagnitude,
    cindicator,
    "acceleration",
    "÷"
  );
  contributionlinkbackup();
  indicator(
    fluent * springconstant - fluxionfluent * dragconstant,
    cindicator,
    "resultant force",
    "-"
  );
  push(); //new branch
  contributionlinkbackup();
  indicator((springconstant / 5) * fluent, cindicator, "spring force", "×");
  push(); //new branch
  contributionlinkbackup();
  indicator(springconstant, cindicator, "spring constant", "");
  pop();
  contributionlinkbackdown();
  indicator(fluxionfluent * dragconstant, cindicator, "drag force", "×");
  push(); //new branch
  contributionlinkbackup();
  indicator(dragconstant, cindicator, "drag constant", "");
  pop();
  pop();
  contributionlinkbackdown();
  indicator(massmagnitude, cindicator, "mass", "");
  translate(120, -80);
  accumulator(av, false);
  accumulatelink();
  indicator(fluxionfluent, cindicator, "velocity", "");
  feedbacklinkvelocity();
  accumulator(vx, false);
  accumulatelink();
  indicator(fluent, cindicator, "displacement", "");
  feedbacklinkdiplacement();
  pop();

  push();
  translate(650, 150);
  acceleration(fluxion(fluent, fluxionfluent) * 10, 90, cacceleration);
  translate(0, 50);
  velocity(fluxionfluent * 5, 90, ccongreen);
  translate(0, 50);
  displacement(fluent, 90, cconorange);
  pop();

  titleBold("A simple harmonic oscillator, with drag");
}

function fluxion(x, v) {
  return (-springconstant * x - dragconstant * v) / massmagnitude;
}

function mouseReleased() {
  controlbutton.checkPressed();
}

function feedbacklinkdiplacement() {
  stroke(cideaGrey);
  strokeWeight(2);
  line(20, 0, 102, 0);
  line(102, 0, 102, 60);
  line(102, 60, -710, 60);
  line(-710, 60, -710, -300);
  line(-710, -300, -710 + 170, -300);
  line(-710 + 170, -300, -710 + 170, -315);
}
function feedbacklinkvelocity() {
  stroke(cideaGrey);
  strokeWeight(2);
  line(20, 0, 30, 0);
  line(30, 0, 30, 60);
  line(30, 60, -400, 60);
  line(-400, 60, -400, -75);
}
