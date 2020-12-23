// {EeIVRReallyUnconstrainedTradeOffPowerPID}{600}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(600, 600);
  exploreIV = new exploreUnconstrainedGraph();
  exploreIV.create(60, 400, 200, 1, "current / A", "pd / V");
  exploreIV.setLabels();
  boxesbutton = new checkButton(473, 257, "trade-off", false);
}
function draw() {
  background(cWhite);
  exploreIV.draw();
  var V = exploreIV.getValues().ySet * 2;
  var I = -exploreIV.getValues().xSet * 2;
  exploreIV.plotValues(I, V);

  boxesbutton.drawButton();

  push();
  translate(40, 180);
  circuitSimple("bulb");
  pd(V * 10);
  translate(loopoffset, 0);
  current(I * 10);
  translate(60, 0);
  power(I * V * 10);
  pop();
  words("set the\ncurrent\nand\npd", 49, 470);

  if (boxesbutton.buttonisChecked) {
    tradeOff(580, 217, -8 * I * 20, V * 50, ccurrent, cpotentialdifference);
  }

  titleBold("pd and current not constrained");
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
