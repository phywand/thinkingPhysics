// {TPTcIVRUnconstrainedTradeOffPowerPID}{600}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(600, 600);
  exploreIV = new CreateExploreRelationshipGraph();
  exploreIV.create(60, 400, 200, 1, "current / A", "pd / V");
  exploreIV.setLabels();
  setV = new createSliderDivider(19, 460, 80, 15, 0, [0.3], false);
  boxesbutton = new CreateCheckButton(473, 257, "trade-off", false);
}
function draw() {
  background(CWHITE);
  exploreIV.draw();
  setV.draw();
  var V = setV.getValue();
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
  placeWords("set the\npd", 160 - 111, 390 + 80);

  if (boxesbutton.buttonisChecked) {
    drawTradeOff(
      580,
      280 - 63,
      -8 * I * 20,
      V * 50,
      CCURRENT,
      CPOTENTIALDIFFERENCE
    );
  }

  placeTitleBold("pd and current not constrained");
}

function mousePressed() {
  setV.mousePressed();
}
function mouseReleased() {
  setV.mouseReleased();
  boxesbutton.changeState();
}
function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
