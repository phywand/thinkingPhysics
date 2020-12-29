// {TPMmIVRExporedConstraintTradeOffPowerPID}{600}{600}

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
  setR = new createSliderDivider(130 - 111, 380 + 80, 80, 15, 0, [0.3], false);
  boxesbutton = new CreateCheckButton(473, 320 - 63, "trade-off", false);
}
function draw() {
  background(CWHITE);
  exploreIV.draw();
  // 	var R = .4;
  var R = (setR.getValue() + 1) * 8;
  var I = -exploreIV.getValues().xSet * 2;
  var V = I * R * 0.058;
  exploreIV.plotValues(I, V);
  setR.draw();
  boxesbutton.drawButton();

  push();
  translate(40, 180);
  drawCircuitSimple("bulb");
  showPD(V * 10);
  translate(LOOPOFFSET, 0);
  showCurrent(I * 10);
  showResistance(R * 0.7);
  translate(60, 0);
  showPower(I * V * 10);
  pop();
  placeWords("set the\nresistance", 160 - 111, 390 + 80);
  placeFractionCBAWrite(
    "current",
    "potential difference",
    "resistance",
    350 + 16,
    426
  );

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

  placeTitleBold("pd and current are constrained");
}

function mousePressed() {
  setR.mousePressed();
}
function mouseReleased() {
  setR.mouseReleased();
  boxesbutton.changeState();
}
function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
