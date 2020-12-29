// {EeIVRReallyUnconstrainedTradeOffPowerPID}{600}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(600, 600);
  exploreIV = new CreateExploreUnconstrainedGraph();
  exploreIV.create(60, 400, 200, 1, "current / A", "pd / V");
  exploreIV.setLabels();
  boxesbutton = new CreateCheckButton(473, 257, "trade-off", false);
}
function draw() {
  background(CWHITE);
  exploreIV.draw();
  var V = exploreIV.getValues().ySet * 2;
  var I = -exploreIV.getValues().xSet * 2;
  exploreIV.plotValues(I, V);

  boxesbutton.drawButton();

  push();
  translate(40, 180);
  drawCircuitSimple("bulb");
  showPD(V * 10);
  translate(LOOPOFFSET, 0);
  showCurrent(I * 10);
  translate(60, 0);
  showPower(I * V * 10);
  pop();
  placeWords("set the\ncurrent\nand\npd", 49, 470);

  if (boxesbutton.buttonisChecked) {
    drawTradeOff(580, 217, -8 * I * 20, V * 50, CCURRENT, CPOTENTIALDIFFERENCE);
  }

  placeTitleBold("pd and current not constrained");
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
