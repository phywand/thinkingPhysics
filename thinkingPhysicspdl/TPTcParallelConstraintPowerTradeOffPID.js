// {TPTcParallelConstraintPowerTradeOffPID}{750}{660}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(750, 600);
  sliderROne = new SliderDivider(336, 334, 80, 15, 0, [0.1], false);
  sliderRTwo = new SliderDivider(552, 334, 80, 15, 0, [0.3], false);
  sliderPD = new SliderDivider(70, 160, 120, 15, 0, [0.9], false);
  boxesbutton = new checkButton(620, 80, "trade-offs", false);
}

function draw() {
  background(cWhite);
  boxesbutton.drawButton();
  push();
  translate(130, 200);
  circuitParallel("bulb");
  pop();

  sliderROne.draw();
  sliderRTwo.draw();
  sliderPD.draw();

  var R1 = (sliderROne.getValue() + 0.1) * 36; // 1-16
  var R2 = (sliderRTwo.getValue() + 0.1) * 36; // 1-16
  var V = sliderPD.getValue() * 4; // 0-8

  var I1 = V / R1;
  var I2 = V / R2;
  var I = I1 + I2;
  var powerbattery = I * V;
  var powerR1 = (V * V) / R1;
  var powerR2 = (V * V) / R2;

  if (boxesbutton.buttonisChecked) {
    tradeOff(130, 480, I * 50, V * 20, ccurrent, cpotentialdifference);
    tradeOff(
      130 + loopoffset,
      480,
      -I1 * 50,
      -V * 20,
      ccurrent,
      cpotentialdifference
    );
    tradeOff(
      130 + 2 * loopoffset,
      480,
      -I2 * 50,
      -V * 20,
      ccurrent,
      cpotentialdifference
    );
  }

  push();
  translate(210, 200);
  power(powerbattery);
  translate(loopoffset, 0);
  power(powerR1);
  translate(loopoffset, 0);
  power(powerR2);
  pop();

  words("set\npotential\ndifference", 70, 351);
  words("set\nresistance", 374, 351);
  words("set\nresistance", 590, 351);

  titleBold(
    "changing the circuit: constraints in altering the power dissipated"
  );
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
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
