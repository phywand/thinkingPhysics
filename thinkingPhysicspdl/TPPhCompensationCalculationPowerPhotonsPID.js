// {TPPhCompensationCalculationPowerPhotonsPID}{550}{500}

const magnitudes = [];
var values = [];
const scaleFactor = 200;
const locpucks = [108, 198];
const tradeOffOffset = 180;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(550, 500);

  magnitudes[0] = new CreateControlPuck();
  magnitudes[0].create(locpucks[0], locpucks[1]);

  boxesbutton = new CreateCheckButton(444, 374, "trade-off", false);
}

function draw() {
  background(CWHITE);

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  boxesbutton.drawButton();

  placeWords("set quantities", locpucks[0] - 40, locpucks[1] - 45);
  placeWords("photons / second", locpucks[0], locpucks[1] + 61);
  placeWords("energy / photon", locpucks[0] + 50, locpucks[1]);

  push();
  translate(350, 80);
  push();
  scale(1.2);
  drawPowerPathway("radiation");
  pop();

  push();
  translate(36, 130);
  scale(1.2);
  showPower((values[0].x * values[0].y) / 1500);
  pop();

  pop();

  if (boxesbutton.buttonisChecked) {
    drawTradeOff(
      locpucks[0],
      locpucks[1] + tradeOffOffset,
      values[0].x,
      values[0].y,
      CCURRENT,
      CPOTENTIALDIFFERENCE
    );
  }

  push();

  translate(20, 80);
  placeSubHead("qualitative", 0, 0);
  translate(0, 54);
  placeSubHead("quantitative", 0, 0);
  pop();

  push();
  translate(308, locpucks[1]);
  showQuantum(values[0].y / 30);
  translate(-64, 130);
  showQuantity(values[0].x / 12, CACTIVITY, "");
  pop();

  placeTitleBold("Calculating power with photons");
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
