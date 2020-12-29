// {TPKnWatchRanaGo2DxvaPID}{800}{600}

var stateof = 0;
var runtime = 0;
var masterTicker = 0;
var stepNumber = 0;
const controllers = [];
const scaleFactorDisplacement = 20;
const scaleFactorVelocity = 2;
const scaleFactorAcceleration = 1;
var ranaposition;
var ranavelocity;
var controlbutton;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
  ranaTop1 = loadImage("../__PDLgraphics/ranawalk/ranaTop1.svg");
  ranaTop2 = loadImage("../__PDLgraphics/ranawalk/ranaTop2.svg");
  ranaTop3 = loadImage("../__PDLgraphics/ranawalk/ranaTop3.svg");
  ranaTop4 = loadImage("../__PDLgraphics/ranawalk/ranaTop4.svg");
  ranaTop5 = loadImage("../__PDLgraphics/ranawalk/ranaTop5.svg");
  ranaTop6 = loadImage("../__PDLgraphics/ranawalk/ranaTop6.svg");
  ranaStopped = loadImage("../__PDLgraphics/ranawalk/ranaCurledTop.svg");
}

function setup() {
  createCanvas(800, 600);

  controlbutton = new CreateControlButton(20, 550, 60, 30);

  const xloc = 60;
  for (let i = 0; i < 3; i++) {
    controllers[i] = new CreateControlPuck();
    let yloc = 108 + 90 * i;
    controllers[i].create(xloc, yloc);
  }
}

function draw() {
  background(CWHITE);
  imageMode(CENTER);

  var initialdisplacement = createVector(
    controllers[0].getValues().xSet,
    -controllers[0].getValues().ySet
  ).mult(scaleFactorDisplacement);
  var initialvelocity = createVector(
    controllers[1].getValues().xSet,
    -controllers[1].getValues().ySet
  ).mult(scaleFactorVelocity);
  var ranaacceleration = createVector(
    controllers[2].getValues().xSet,
    -controllers[2].getValues().ySet
  ).mult(scaleFactorAcceleration);
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
      runtime = 0;
      placeWords("set\nwhere your\nhog starts", 112, 80);
      placeWords("set\nhedgehog\ninitial\nvelocity", 112, 170);
      ranaposition = initialdisplacement;
      ranavelocity = initialvelocity;
      break;
    case 1:
      //            running
      placeWords("pause", 28, height - 32);
      fill(CWHITE);
      noStroke();
      rect(14, 63, 90, 180);
      masterTicker++;

      if (masterTicker % 20 == 0) {
        runtime++;
        ranavelocity.add(ranaacceleration);
        ranaposition.add(ranavelocity.mult(2));
        stepNumber++;
      }

      stepNumber = stepNumber % 6;
      break;
    case 2:
      //            paused
      placeWords("reset", 28, height - 32);
      fill(CWHITE);
      noStroke();
      rect(14, 63, 90, 180);
      break;
  }
  push();
  translate(300, 300);
  rotate(ranaposition.heading());
  showDisplacement(ranaposition.mag(), 90, CPOVALICE);
  pop();

  push();
  translate(
    300 + ranaposition.x * PIXELSCALING,
    300 + ranaposition.y * PIXELSCALING
  );
  push();
  rotate(ranavelocity.heading());
  if (ranavelocity.mag() != 0) {
    switch (stepNumber) {
      case 0:
        image(ranaTop1, 0, 0);
        break;

      case 1:
        image(ranaTop2, 0, 0);
        break;

      case 2:
        image(ranaTop3, 0, 0);
        break;

      case 3:
        image(ranaTop4, 0, 0);
        break;

      case 4:
        image(ranaTop5, 0, 0);
        break;

      case 5:
        image(ranaTop6, 0, 0);
        break;
    }
  } else {
    image(ranaStopped, 0, 0);
  }
  pop();
  push();
  rotate(ranavelocity.heading());
  translate((-ranavelocity.mag() * PXSCALE * PXSCALE) / 2, -32);
  showVelocity(ranavelocity.mag() * PXSCALE, 90, CPOVALICE);
  pop();
  push();
  rotate(ranaacceleration.heading());
  translate((-ranaacceleration.mag() * PXSCALE * PXSCALE) / 2, -60);
  showAcceleration(ranaacceleration.mag() * PXSCALE, 90, CACCELERATION);
  pop();
  pop();

  push();
  translate(300, 300);
  rotate(ranaposition.heading());
  drawPoV("AliceRight");
  pop();

  placeWords("set\nhedgehog\nacceleration", 112, 260);
  placeTitleBold("take your hedhehog for a walk: watch Rana go");
}

function mouseReleased() {
  controlbutton.checkPressed();
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
