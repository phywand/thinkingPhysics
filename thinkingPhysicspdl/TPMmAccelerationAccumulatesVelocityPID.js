// {TPMmAccelerationAccumulatesVelocityPID}{800}{600}
// with factor to set accumulationfactor
//fluent for final value
// /fluxionfluent for intermediate(d/dt)
// fluxion for first accumulator (d2/dt2)

var stateof = 0;
var runtime = 0;
var locX = 80;
var locY = 220;
var fluent = 0;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 600);
  controlbutton = new CreateControlButton(20, 550, 60, 30);

  fluxionSet = new CreateControlStripVertical();
  fluxionSet.create(locX - 50, locY);

  fluxionfluentSet = new CreateControlStripVertical();
  fluxionfluentSet.create(locX - 50 + 140, locY + 80);
}

function draw() {
  background(CWHITE);

  fluxionvalue = fluxionSet.getValues().ySet * 2;
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
      var initialfluxionfluent = fluxionfluentSet.getValues().ySet * 2;
      runtime = 0;
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
  placeIndicator(fluxion(fluent, fluxionfluent) * 30, cindicator, "", "");
  placeAcumulator(7);
  PlaceAccumulateLink();
  placeIndicator(fluxionfluent, cindicator, "", "");
  pop();

  push();
  translate(400, 200);
  showAcceleration(fluxion(fluent, fluxionfluent) * 10, 90, CACCELERATION);
  translate(0, 50);
  showVelocity(fluxionfluent * 5, 90, CCONGREEN);
  pop();

  placeTitleBold("Accumulation, acceleration and velocity");
}

function fluxion(x, v) {
  return fluxionvalue;
}

function mouseReleased() {
  controlbutton.checkPressed();
}
