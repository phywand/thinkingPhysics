// {TPTcSeriesLoopsConstraintPowerTradeOffPID}{760}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(760, 600);
  sliderROne = new SliderDivider(580, 160, 80, 15, 0, [0.7], false);
  sliderRTwo = new SliderDivider(580, 375, 80, 15, 0, [0.3], false);
  sliderPD = new SliderDivider(160, 260, 120, 15, 0, [0.9], false);
  boxesbutton = new checkButton(630, 80, "trade-offs", false);
}

function draw() {
  background(cWhite);
  boxesbutton.drawButton();
  push();
  translate(220, 300);
  circuitSeries("bulb");
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
    tradeOff(740, 192, -I * 50, -I * R1 * 20, ccurrent, cpotentialdifference);
    tradeOff(
      740,
      192 + 2 * seriesoffset,
      -I * 50,
      -I * R2 * 20,
      ccurrent,
      cpotentialdifference
    );

    tradeOff(
      20,
      192 + seriesoffset,
      I * 50,
      V * 20,
      ccurrent,
      cpotentialdifference
    );
  }

  push();
  translate(300, 300);
  power(powerbattery);
  translate(loopoffset, -seriesoffset);
  power(powerR1);
  translate(0, 2 * seriesoffset);
  power(powerR2);
  pop();

  words("set\npotential difference", 40, 560);
  words("set\nresistances", 460, 560);
  titleBold("constraints and trade-offs in altering the power dissipated");
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
