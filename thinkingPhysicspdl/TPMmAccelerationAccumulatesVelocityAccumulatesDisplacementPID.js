// {TPMmAccelerationAccumulatesVelocityAccumulatesDisplacementPID}{800}{600}
// with factor to set accumulationfactor
//fluent for final value
// /fluxionfluent for intermediate(d/dt)
// fluxion for first accumulator (d2/dt2)

var stateof = 0;
var runtime = 0;
var locX = 80;
var locY = 220;
var fluxionvalue = 0;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 600);
  controlbutton = new controlButton(20, 550, 60, 30);
  fluentSet = new controlStripVertical();
  fluentSet.create(locX - 50 + 140 * 2, locY + 80 * 2);
  fluxionSet = new controlStripVertical();
  fluxionSet.create(locX - 50, locY);
  fluxionfluentSet = new controlStripVertical();
  fluxionfluentSet.create(locX - 50 + 140, locY + 80);
}

function draw() {
  background(cWhite);

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
      words("go", 28, height - 32);
      var initialfluent = fluentSet.getValues().ySet * 20;
      var initialfluxionfluent = fluxionfluentSet.getValues().ySet * 2;
      runtime = 0;
      fluent = initialfluent;
      fluxionfluent = initialfluxionfluent;
      break;
    case 1:
      //            running
      words("pause", 28, height - 32);
      runtime++;
      predictfluxionfluentFluent();
      // fluxionfluent+=(accumulation2Factor/15)*(fluxion/5);
      //             fluent+=(accumulation1Factor/15)*(fluxionfluent/5);
      break;
    case 2:
      //            paused
      words("reset", 28, height - 32);
      break;
  }

  push();
  translate(locX, locY);
  indicator(fluxion(fluent, fluxionfluent) * 30, cindicator, "", "");
  accumulator(7);
  accumulatelink();
  indicator(fluxionfluent, cindicator, "", "");
  accumulator(7);
  accumulatelink();
  indicator(fluent, cindicator, "", "");
  pop();

  push();
  translate(400, 200);
  acceleration(fluxion(fluent, fluxionfluent) * 10, 90, cacceleration);
  translate(0, 50);
  velocity(fluxionfluent * 5, 90, ccongreen);
  translate(0, 50);
  displacement(fluent, 90, cconorange);
  pop();

  titleBold("Accumulation, acceleration, velocity and displacement");
}

function fluxion(x, v) {
  return fluxionvalue;
}

function mouseReleased() {
  controlbutton.checkPressed();
}
