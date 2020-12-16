// {TPTeTradeOffsHydraulics}{640}{640}

const magnitudes = [];
let values = [];
const scaleFactor = 200;
const locpucks = [514, 137];
const tradeOffOffset = 180;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(640, 400);

  magnitudes[0] = new controlPuckpositive();
  magnitudes[0].create(locpucks[0], locpucks[1]);

  boxesbutton = new checkButton(474, 340, "trade-off", false);
}

function draw() {
  background(cWhite);
  boxesbutton.drawButton();

  words("set quantities", locpucks[0] - 40, locpucks[1] - 45);

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  words("distance", locpucks[0], locpucks[1] + 61);
  words("force", locpucks[0] + 50, locpucks[1] - 28);
  console.log(values[0].y);
  push();
  translate(100, 300);
  hydraulicsystem(values[0].y / 30 + 0.3, values[0].x * 4);
  pop();

  push();
  translate(391, 301);
  energy((values[0].y / 10 + 0.3 * (values[0].x * 2)) / 4);
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
  titleBold("Trade-offs for a hydraulic system");
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
