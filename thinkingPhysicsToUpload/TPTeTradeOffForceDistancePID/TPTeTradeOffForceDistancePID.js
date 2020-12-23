// {TPTeTradeOffForceDistancePID}{640}{400}

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

  sliderLifts = new SliderDivider(20, 80, 60, 15, 1, [0.5], false);

  boxesbutton = new checkButton(474, 340, "trade-off", false);
}

function draw() {
  background(cWhite);
  boxesbutton.drawButton();
  sliderLifts.draw();

  var liftdifficulty = int(sliderLifts.getValue() * 2);
  words("set quantities", locpucks[0] - 40, locpucks[1] - 45);

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  words("distance", locpucks[0], locpucks[1] + 61);
  words("force", locpucks[0] + 50, locpucks[1] - 28);
  push();
  translate(100, 373);
  displacement(values[0].x / 8, 0, cideaGreen);
  translate(40, (-values[0].x / 8) * pxscale);
  force(values[0].y / 8, 0, cideaBlue);
  // 			hydraulicsystem((values[0].y/30)+.3,(values[0].x*4));
  pop();

  push();
  translate(220, 373);
  energy(11 * ((values[0].y / 80) * (values[0].x / 80)));
  stroke(cdeviceGrey);
  for (i = 0; i < 11; i++) {
    line(25, -i * 20, 45, -i * 20);
  }
  leadLineshort("to get lift done", 55, -40 - liftdifficulty * 60);
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
  titleBold("Trade-offs in lifting: between force and distance");
}

function mousePressed() {
  sliderLifts.mousePressed();
}
function mouseReleased() {
  sliderLifts.mouseReleased();
  boxesbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
