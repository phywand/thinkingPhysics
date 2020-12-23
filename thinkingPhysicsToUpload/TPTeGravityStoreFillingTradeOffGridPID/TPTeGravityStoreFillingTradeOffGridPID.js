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

  magnitudes[0] = new controlPuckpositive();
  magnitudes[0].create(locpucks[0], locpucks[1]);
  boxesbutton = new checkButton(474, 372, "trade-off", false);
}

function draw() {
  background(cWhite);
  boxesbutton.drawButton();

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  words("set quantities", locpucks[0] - 40, locpucks[1] - 45);
  words("force (mg)", locpucks[0] - 5, locpucks[1] + 61);
  words("height", locpucks[0] + 50, locpucks[1] - 28);

  push();
  translate(150, 100);
  push();
  storeEmptier("gravity");
  translate(330, 0);
  storeFuller("gravity");
  pop();

  push();
  translate(205, 250);
  energy((values[0].x * values[0].y) / 1500);
  stroke(cdeviceGrey);
  for (i = 0; i < 5; i++) {
    line(25, -i * 15, 45, -i * 15);
  }
  pop();

  pop();

  if (boxesbutton.buttonisChecked) {
    tradeOff(
      locpucks[0],
      locpucks[1] + tradeOffOffset,
      values[0].x,
      values[0].y,
      cconlightgreen,
      cconpink
    );
  }

  push();

  translate(20, 80);
  subHead("qualitative", 0, 0);
  translate(0, 134);
  subHead("quantitative", 0, 0);
  pop();

  titleBold("Filling a gravity store: a trade-off");
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