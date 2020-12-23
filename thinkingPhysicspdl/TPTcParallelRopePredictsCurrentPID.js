// {TPTcParallelRopePredictsCurrentPID}{830}{550}

var lastposition1 = (lastposition2 = runtime = 0);

// add offsetting and display buttons for inner or outer ropes

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(830, 580);
  sliderROne = new SliderDivider(288, 140, 60, 15, 0, [0.1], false);
  sliderRTwo = new SliderDivider(
    288 + loopoffset,
    140,
    60,
    15,
    0,
    [0.3],
    false
  );
  sliderPD = new SliderDivider(138, 120, 80, 15, 0, [0.6], false);
  loopsbutton = new checkButton(
    width - 140,
    height / 2 + 20,
    "show loops",
    false
  );
}

function draw() {
  background(cWhite);

  loopsbutton.drawButton();

  if (loopsbutton.buttonisChecked) {
    push();
    translate(110, 202);
    loopOne();
    loopTwo();
    pop();
    push();
    translate(110, height - 120);
    loopOne();
    loopTwo();
    pop();
  }

  sliderROne.draw();
  sliderRTwo.draw();
  sliderPD.draw();
  var R1 = (sliderROne.getValue() + 0.1) * 36; // 1-16
  var R2 = (sliderRTwo.getValue() + 0.1) * 36; // 1-16
  var V = sliderPD.getValue() * 4; // 0-8
  var I1 = V / R1;
  var I2 = V / R2;
  let ropespeed1 = I1 * pixelscaling * 0.6;
  let displayspeed1 = ropespeed1 / 4;
  let ropespeed2 = I2 * pixelscaling * 0.6;
  let displayspeed2 = ropespeed2 / 4;
  var I = I1 + I2;
  let ropespeed = I * pixelscaling * 0.6;
  let displayspeed = ropespeed / 4;
  // var powerbattery=I*V;
  // 	var powerR1=(V*V)/R1;
  // 	var powerR2=(V*V)/R2;

  //ropeloops

  // 	outerloop
  ropeloop(110, 307, 216 * 2, 214, cideaBlue, lastposition2);
  // 	innerloop
  ropeloop(118, 301, 208, 200, cideaRed, lastposition1);
  push();
  translate(110, 200);
  push();
  translate(-60, 0);
  // 			power(powerbattery);
  translate(loopoffset + 120, 0);
  // 			power(powerR1);
  translate(loopoffset, 0);
  // 			power(powerR2);
  pop();
  push();
  translate(
    loopoffset / 3 + (ropespeed * pixelscaling) / 2,
    -loopoffset / 2 + 30
  );
  velocity(ropespeed, 90, cideaGrey);
  pop();
  push();
  translate(
    loopoffset / 3 + (ropespeed * pixelscaling) / 2,
    loopoffset / 2 - 30
  );
  velocity(ropespeed, 270, cideaGrey);
  pop();
  push();
  translate(loopoffset + 30, -loopoffset / 3 + (ropespeed1 * pixelscaling) / 2);
  velocity(ropespeed1, 180, cideaGrey);
  pop();
  push();
  translate(
    2 * loopoffset + 30,
    -loopoffset / 3 + (ropespeed2 * pixelscaling) / 2
  );
  velocity(ropespeed2, 180, cideaGrey);
  pop();
  push();
  translate(4, 0);
  force(V, 0, cideaGreen);
  translate(loopoffset - 3, 0);
  force(V, 0, cideaGreen);
  translate(loopoffset + 1, 0);
  force(V, 0, cideaGreen);
  pop();

  pop();

  //electricloop

  push();
  translate(110, height - 120);
  circuitParallel("bulb");
  translate(0, 0);
  pd(V);
  current(I * pixelscaling);
  // 		power(powerbattery);
  translate(loopoffset, 0);
  pd(V);
  current(-I1 * pixelscaling);
  // 		power(powerR1);
  translate(loopoffset, 0);
  pd(V);
  current(-I2 * pixelscaling);
  // 		power(powerR2);
  pop();

  words("pull", 138 + 20, 120 + 10);
  words("grab", 288 - 40, 140 + 10);
  words("grab", 288 - 40 + loopoffset, 140 + 10);

  runtime++;
  if (ropespeed1 != 0) {
    lastposition1 = runtime * displayspeed1;
  }
  if (ropespeed2 != 0) {
    lastposition2 = runtime * displayspeed2;
  }

  titleBold(
    "Reasoning with the rope loop: predictions about power (parallel connections)"
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
  loopsbutton.changeState();
}
