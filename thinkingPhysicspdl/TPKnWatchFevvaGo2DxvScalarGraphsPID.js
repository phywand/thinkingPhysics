// {TPKnWatchFevvaGo2DxvScalarGraphsPID}{900}{800}

var stateof = 0;
var runtime = 0;
var masterTicker = 0;
var stepNumber = 0;
const controllers = [];
const scaleFactorDisplacement = 20;
const scaleFactorVelocity = 2;
var Fevvaposition; // you need to create any accumulated vectors here

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");

  FevvaTop1 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop1.svg");
  FevvaTop2 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop2.svg");
  FevvaTop3 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop3.svg");
  FevvaTop4 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop4.svg");
  FevvaTop5 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop5.svg");
  FevvaTop6 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop6.svg");
  FevvaTop7 = loadImage("../__PDLgraphics/FevvaFlight/FevvaTop7.svg");
}
function setup() {
  createCanvas(900, 800);

  controlbutton = new controlButton(20, height - 50, 60, 30);

  speedSparker = new SparkLineGraph();
  speedSparker.create(20, 610, 800, 40, "speed", "PO", 0);
  distanceSparker = new SparkLineGraph();
  distanceSparker.create(20, 700, 800, 40, "distance", "PO", 0);

  const xloc = 60;
  for (let i = 0; i < 2; i++) {
    controllers[i] = new controlPuck();
    let yloc = 108 + 90 * i;
    controllers[i].create(xloc, yloc);
  }
}

function draw() {
  background(cWhite);
  imageMode(CENTER);
  controlbutton.drawButton();

  var initialdisplacement = createVector(
    controllers[0].getValues().xSet,
    -controllers[0].getValues().ySet
  ).mult(scaleFactorDisplacement);
  var Fevvavelocity = createVector(
    controllers[1].getValues().xSet,
    -controllers[1].getValues().ySet
  ).mult(scaleFactorVelocity);

  var Fspeed = Fevvavelocity.mag();

  if (controlbutton.buttonwasPressed) {
    stateof++;
    stateof = stateof % 3;
    controlbutton.buttonwasPressed = false;
  }

  switch (stateof) {
    case 0:
      //            ready to go
      words("go", 28, height - 32);

      words("set\nwhere your\ncrow starts", 112, 80);
      resetVariables();
      Fevvaposition = initialdisplacement;
      break;
    case 1:
      //            running
      words("pause", 28, height - 32);
      fill(cWhite);
      noStroke();
      rect(14, 63, 90, 90);
      masterTicker++;

      if (masterTicker % 20 == 0) {
        runtime++;
        Fevvaposition.add(Fevvavelocity);
        speedSparker.acquire(Fevvavelocity.mag() * 10);
        distanceSparker.acquire(Fevvaposition.mag() * 10);
        stepNumber++;
      }

      stepNumber = stepNumber % 7;
      distanceSparker.plot();
      speedSparker.plot();
      console.log(speedSparker.slValues);
      break;
    case 2:
      //            paused
      words("reset", 28, height - 32);
      fill(cWhite);
      noStroke();
      rect(14, 63, 90, 90);
      distanceSparker.plot();
      speedSparker.plot();
      break;
  }

  push();
  translate(300, 300);
  rotate(Fevvaposition.heading());
  displacement(Fevvaposition.mag(), 90, cpovCharlie);
  pop();

  push();
  translate(
    300 + Fevvaposition.x * pixelscaling,
    300 + Fevvaposition.y * pixelscaling
  );

  push();
  rotate(Fevvavelocity.heading());

  switch (stepNumber) {
    case 0:
      image(FevvaTop1, 0, 0);
      break;

    case 1:
      image(FevvaTop2, 0, 0);
      break;

    case 2:
      image(FevvaTop3, 0, 0);
      break;

    case 3:
      image(FevvaTop4, 0, 0);
      break;

    case 4:
      image(FevvaTop5, 0, 0);
      break;

    case 5:
      image(FevvaTop6, 0, 0);
      break;

    case 6:
      image(FevvaTop7, 0, 0);
      break;
  }

  pop();
  push();
  rotate(Fevvavelocity.heading());
  translate((-Fspeed * pxscale * pxscale) / 2, -32);
  velocity(Fspeed * pxscale, 90, cpovCharlie);
  pop();
  pop();

  push();
  translate(300, 300);
  rotate(Fevvaposition.heading());
  PoV("CharlieRight");
  pop();

  if (runtime >= 400) {
    stateof = 2;
  }

  words("set\nbird\nvelocity", 112, 170);
  titleBold("take your crow for a flight: watch Fevva go");
}

function mouseReleased() {
  controlbutton.checkPressed();
}

function resetVariables() {
  runtime = 0;
  speedSparker.slValues = [];
  distanceSparker.slValues = [];
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
