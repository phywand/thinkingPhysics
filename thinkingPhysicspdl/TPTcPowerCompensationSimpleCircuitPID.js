// {TPTcPowerCompensationSimpleCircuitPID}{600}{340}

const magnitudes = [];
var values = [];
const scaleFactor = 200;
const locpucks = [135, 186];
const tradeOffOffset = 340;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(600, 340);
  magnitudes[0] = new controlPuck();
  magnitudes[0].create(locpucks[0], locpucks[1]);
  boxesbutton = new checkButton(
    locpucks[0] + tradeOffOffset,
    374 - 81,
    "trade-off",
    false
  );
}

function draw() {
  background(cWhite);

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  words("set quantities", locpucks[0] - 40, locpucks[1] - 45);
  words("current", locpucks[0], locpucks[1] + 61);
  words("pd", locpucks[0] + 50, locpucks[1]);
  boxesbutton.drawButton();

  push();
  translate(100 - 65, 250 - 65);
  circuitSimple("bulb");
  pop();

  push();
  translate(350 + 36 - 62, 130 + 80 - 24);
  scale(1.2);
  power((values[0].x * values[0].y) / 1500);
  pop();

  if (boxesbutton.buttonisChecked) {
    tradeOff(
      locpucks[0] + tradeOffOffset,
      locpucks[1],
      values[0].x,
      values[0].y,
      ccurrent,
      cpotentialdifference
    );
  }

  titleBold("Calculating the power: compensation in action");
}

function mouseReleased() {
  boxesbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
