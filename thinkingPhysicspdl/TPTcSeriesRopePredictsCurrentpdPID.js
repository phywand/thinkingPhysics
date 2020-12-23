// {TPTcSeriesRopePredictsCurrentpdPID}{880}{550}

var lastposition = (runtime = 0);

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(880, 550);
  sliderROne = new SliderDivider(287, 122, 80, 15, 0, [0.7], false);
  sliderRTwo = new SliderDivider(287, 338, 80, 15, 0, [0.3], false);
  sliderPD = new SliderDivider(138, 189, 120, 15, 0, [0.9], false);
  loopsbutton = new checkButton(
    width / 2 - 60,
    height - 50,
    "show loops",
    false
  );
}

function draw() {
  background(cWhite);
  loopsbutton.drawButton();

  if (loopsbutton.buttonisChecked) {
    push();
    translate(112, 290);
    loopOneStretched();
    pop();
    push();
    translate(width - 323, 290);
    loopOneStretched();
    pop();
  }

  sliderROne.draw();
  sliderRTwo.draw();
  sliderPD.draw();

  var R1 = (sliderROne.getValue() + 0.1) * 16; // 1-16
  var R2 = (sliderRTwo.getValue() + 0.1) * 16; // 1-16
  var V = sliderPD.getValue() * 8; // 0-8
  var I = V / (R1 + R2);
  // var powerbattery=I*V;
  // 	var powerR1=I*I*R1;
  // 	var powerR2=I*I*R2;
  let ropespeed = I * pixelscaling * 0.6;
  let displayspeed = ropespeed / 4;
  let V1 = I * R1;
  let V2 = I * R2;

  // ropeloop
  ropeloop(112, 504, 216, 428, cideaBlue, lastposition);
  push();
  translate(112, 310);
  push();
  translate(-60, 0);
  // 			power(powerbattery);
  translate(loopoffset + 120, -seriesoffset);
  // 			power(powerR1);
  translate(0, 2 * seriesoffset);
  // 			power(powerR2);
  pop();
  force(V, 0, cideaRed);
  translate(loopoffset + 1, -seriesoffset);
  force(V1, 0, cideaGreen);
  translate(0, 2 * seriesoffset);
  force(V2, 0, cideaGreen);
  translate(-loopoffset / 2 + (ropespeed * pixelscaling) / 2, 110);
  velocity(-ropespeed, 90, cideaGrey);
  pop();

  //electricloop
  push();
  translate(width - 323, 290);
  circuitSeries("bulb");
  translate(0, 0);
  // 		power(powerbattery);
  pd(V);
  current(I * pixelscaling);
  translate(loopoffset, -seriesoffset);
  // 		power(powerR1);
  pd(V1);
  current(I * pixelscaling);
  translate(0, 2 * seriesoffset);
  // 		power(powerR2);
  pd(V2);
  current(I * pixelscaling);
  pop();

  runtime++;
  if (ropespeed != 0) {
    lastposition = runtime * displayspeed;
  }

  words("pull", 168, 199);
  words("grab", 247, 132);
  words("grab", 247, 348);

  titleBold(
    "Reasoning with the rope loop: predictions about current and pd (series connections)"
  );
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
  loopsbutton.changeState();
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
