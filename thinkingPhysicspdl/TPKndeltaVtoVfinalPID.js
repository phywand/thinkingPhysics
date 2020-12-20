// {TPKndeltaVtoVfinalPID}{700}{700}

const scaleFactoracceleration = 12;
const scaleFactorvelocity = 15;
const scaleFactorlocation = 250;

const accelerationheight = 150;
const durationheight = 250;
const accumulatedvelocityheight = (accelerationheight + durationheight) / 2;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(700, 700);

  accelerationsetter = new controlPuck();
  accelerationsetter.create(70, accelerationheight);
  deltasetter = new controlStripHorizontalPositive();
  deltasetter.create(40, durationheight);

  initialvelocitysetter = new controlPuck();
  initialvelocitysetter.create(70, 530);

  deltalocationsetter = new controlPuck();
  deltalocationsetter.create(520, 530);
}

function draw() {
  background(cWhite);
  conceptualPane(width / 2, 200, width - 40, 250);
  conceptualPane(width / 2, 530, width - 40, 350);
  transitionStep(width / 2, 340, 90);

  var accumulateacceleration = createVector(
    accelerationsetter.getValues().xSet,
    -accelerationsetter.getValues().ySet
  ).mult(scaleFactoracceleration);
  var durationaccumulation = createVector(
    -deltasetter.getValues().xSet,
    deltasetter.getValues().ySet
  );
  var accumulatedvelocity = createVector(
    accelerationsetter.getValues().xSet,
    -accelerationsetter.getValues().ySet
  ).mult(scaleFactorvelocity * durationaccumulation.x);
  var initialvelocity = createVector(
    initialvelocitysetter.getValues().xSet,
    -initialvelocitysetter.getValues().ySet
  ).mult(scaleFactorvelocity);
  var deltavelocitylocationoffset = createVector(
    deltalocationsetter.getValues().xSet,
    -deltalocationsetter.getValues().ySet
  ).mult(scaleFactorlocation);
  var finalvelocity = createVector(initialvelocity.x, initialvelocity.y);
  finalvelocity.add(accumulatedvelocity);

  //top pane display
  push();
  translate(220, accelerationheight);
  acceleration(
    accumulateacceleration.mag(),
    degrees(accumulateacceleration.heading()) + 90,
    cacceleration
  );
  pop();
  push();
  translate(220, durationheight);
  durationpov(durationaccumulation.x, 1, cideaGreen);
  pop();
  push();
  translate(320, accumulatedvelocityheight);
  velocity(
    accumulatedvelocity.mag(),
    degrees(accumulatedvelocity.heading()) + 90,
    cideaGreen
  );
  pop();
  words("set acceleration", 30, 100);
  words("set duration", 30, 280);

  //bottom pane display
  push();
  translate(250, 530);
  velocity(
    initialvelocity.mag(),
    degrees(initialvelocity.heading()) + 90,
    cideaRed
  );
  push();
  translate(80, 0);
  translate(deltavelocitylocationoffset.x, deltavelocitylocationoffset.y);
  velocity(
    accumulatedvelocity.mag(),
    degrees(accumulatedvelocity.heading()) + 90,
    cideaGreen
  );
  pop();
  if (
    abs(deltavelocitylocationoffset.y - initialvelocity.y * pxscale) < 5 &&
    abs(deltavelocitylocationoffset.x - initialvelocity.x * pxscale) - 80 < 5 &&
    deltavelocitylocationoffset.y != 0 &&
    deltavelocitylocationoffset.x != 0
  ) {
    velocity(
      finalvelocity.mag(),
      degrees(finalvelocity.heading()) + 90,
      cideaBlue
    );
  }
  pop();
  words("set\ninitial\nvelocity", 120, 510);
  words("place\ntail to tip", 570, 510);

  titleBold(
    "Calculating an accumulation in velocity, then a resultant velocity"
  );
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
