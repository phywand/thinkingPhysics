// {TPTcSeriesLoopsConstraintPowerTradeOffPID}{760}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(760, 600);
  sliderROne = new createSliderDivider(580, 160, 80, 15, 0, [0.7], false);
  sliderRTwo = new createSliderDivider(580, 375, 80, 15, 0, [0.3], false);
  sliderPD = new createSliderDivider(160, 260, 120, 15, 0, [0.9], false);
  boxesbutton = new CreateCheckButton(630, 80, "trade-offs", false);
}

function draw() {
  background(CWHITE);
  boxesbutton.drawButton();
  push();
  translate(220, 300);
  drawCircuitSeries("bulb");
  pop();

  sliderROne.draw();
  sliderRTwo.draw();
  sliderPD.draw();

  var R1 = (sliderROne.getValue() + 0.1) * 16; // 1-16
  var R2 = (sliderRTwo.getValue() + 0.1) * 16; // 1-16
  var V = sliderPD.getValue() * 8; // 0-8
  var I = V / (R1 + R2);
  var powerbattery = I * V;
  var powerR1 = I * I * R1;
  var powerR2 = I * I * R2;

  if (boxesbutton.buttonisChecked) {
    drawTradeOff(740, 192, -I * 50, -I * R1 * 20, CCURRENT, CPOTENTIALDIFFERENCE);
    drawTradeOff(
      740,
      192 + 2 * SERIESOFFSET,
      -I * 50,
      -I * R2 * 20,
      CCURRENT,
      CPOTENTIALDIFFERENCE
    );

    drawTradeOff(
      20,
      192 + SERIESOFFSET,
      I * 50,
      V * 20,
      CCURRENT,
      CPOTENTIALDIFFERENCE
    );
  }

  push();
  translate(300, 300);
  showPower(powerbattery);
  translate(LOOPOFFSET, -SERIESOFFSET);
  showPower(powerR1);
  translate(0, 2 * SERIESOFFSET);
  showPower(powerR2);
  pop();

  placeWords("set\npotential difference", 40, 560);
  placeWords("set\nresistances", 460, 560);
  placeTitleBold("constraints and trade-offs in altering the power dissipated");
}

function mousePressed() {
  sliderROne.mousePressed();
  sliderRTwo.mousePressed();
  sliderPD.mousePressed();
}

function mouseReleased() {
  sliderROne.mouseReleased();
  sliderRTwo.mouseReleased();
  sliderPD.mouseReleased();
  boxesbutton.changeState();
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
