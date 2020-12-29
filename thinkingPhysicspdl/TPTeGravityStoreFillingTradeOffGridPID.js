// {TPTeGravityStoreFillingTradeOffGridPID}{600}{500}

const magnitudes = [];
var values = [];
const scaleFactor = 200;
const locpucks = [108, 288];
const tradeOffOffset = 180;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(600, 500);

  magnitudes[0] = new CreateControlPuckPositive();
  magnitudes[0].create(locpucks[0], locpucks[1]);
  boxesbutton = new CreateCheckButton(474, 372, "trade-off", false);
}

function draw() {
  background(CWHITE);
  boxesbutton.drawButton();

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  placeWords("set quantities", locpucks[0] - 40, locpucks[1] - 45);
  placeWords("force (mg)", locpucks[0] - 5, locpucks[1] + 61);
  placeWords("height", locpucks[0] + 50, locpucks[1] - 28);

  push();
  translate(150, 100);
  push();
  drawStoreEmptier("gravity");
  translate(330, 0);
  drawStoreFuller("gravity");
  pop();

  push();
  translate(205, 250);
  showEnergy((values[0].x * values[0].y) / 1500);
  stroke(cdeviceGrey);
  for (i = 0; i < 5; i++) {
    line(25, -i * 15, 45, -i * 15);
  }
  pop();

  pop();

  if (boxesbutton.buttonisChecked) {
    drawTradeOff(
      locpucks[0],
      locpucks[1] + tradeOffOffset,
      values[0].x,
      values[0].y,
      CCONLIGHTGREEN,
      CCONPINK
    );
  }

  push();

  translate(20, 80);
  placeSubHead("qualitative", 0, 0);
  translate(0, 134);
  placeSubHead("quantitative", 0, 0);
  pop();

  placeTitleBold("Filling a gravity store: a trade-off");
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
