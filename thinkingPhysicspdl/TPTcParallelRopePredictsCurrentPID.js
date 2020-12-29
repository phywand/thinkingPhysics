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
  sliderROne = new createSliderDivider(288, 140, 60, 15, 0, [0.1], false);
  sliderRTwo = new createSliderDivider(
    288 + LOOPOFFSET,
    140,
    60,
    15,
    0,
    [0.3],
    false
  );
  sliderPD = new createSliderDivider(138, 120, 80, 15, 0, [0.6], false);
  loopsbutton = new CreateCheckButton(
    width - 140,
    height / 2 + 20,
    "show loops",
    false
  );
}

function draw() {
  background(CWHITE);

  loopsbutton.drawButton();

  if (loopsbutton.buttonisChecked) {
    push();
    translate(110, 202);
    drawLoopOne();
    drawLoopTwo();
    pop();
    push();
    translate(110, height - 120);
    drawLoopOne();
    drawLoopTwo();
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
  let ropespeed1 = I1 * PIXELSCALING * 0.6;
  let displayspeed1 = ropespeed1 / 4;
  let ropespeed2 = I2 * PIXELSCALING * 0.6;
  let displayspeed2 = ropespeed2 / 4;
  var I = I1 + I2;
  let ropespeed = I * PIXELSCALING * 0.6;
  let displayspeed = ropespeed / 4;
  // var powerbattery=I*V;
  // 	var powerR1=(V*V)/R1;
  // 	var powerR2=(V*V)/R2;

  //ropeloops

  // 	outerloop
  drawRopeLoop(110, 307, 216 * 2, 214, CIDEABLUE, lastposition2);
  // 	innerloop
  drawRopeLoop(118, 301, 208, 200, CIDEARED, lastposition1);
  push();
  translate(110, 200);
  push();
  translate(-60, 0);
  // 			showPower(powerbattery);
  translate(LOOPOFFSET + 120, 0);
  // 			showPower(powerR1);
  translate(LOOPOFFSET, 0);
  // 			showPower(powerR2);
  pop();
  push();
  translate(
    LOOPOFFSET / 3 + (ropespeed * PIXELSCALING) / 2,
    -LOOPOFFSET / 2 + 30
  );
  showVelocity(ropespeed, 90, CIDEAGREY);
  pop();
  push();
  translate(
    LOOPOFFSET / 3 + (ropespeed * PIXELSCALING) / 2,
    LOOPOFFSET / 2 - 30
  );
  showVelocity(ropespeed, 270, CIDEAGREY);
  pop();
  push();
  translate(LOOPOFFSET + 30, -LOOPOFFSET / 3 + (ropespeed1 * PIXELSCALING) / 2);
  showVelocity(ropespeed1, 180, CIDEAGREY);
  pop();
  push();
  translate(
    2 * LOOPOFFSET + 30,
    -LOOPOFFSET / 3 + (ropespeed2 * PIXELSCALING) / 2
  );
  showVelocity(ropespeed2, 180, CIDEAGREY);
  pop();
  push();
  translate(4, 0);
  showForce(V, 0, CIDEAGREEN);
  translate(LOOPOFFSET - 3, 0);
  showForce(V, 0, CIDEAGREEN);
  translate(LOOPOFFSET + 1, 0);
  showForce(V, 0, CIDEAGREEN);
  pop();

  pop();

  //electricloop

  push();
  translate(110, height - 120);
  drawCircuitParallel("bulb");
  translate(0, 0);
  showPD(V);
  showCurrent(I * PIXELSCALING);
  // 		showPower(powerbattery);
  translate(LOOPOFFSET, 0);
  showPD(V);
  showCurrent(-I1 * PIXELSCALING);
  // 		showPower(powerR1);
  translate(LOOPOFFSET, 0);
  showPD(V);
  showCurrent(-I2 * PIXELSCALING);
  // 		showPower(powerR2);
  pop();

  placeWords("pull", 138 + 20, 120 + 10);
  placeWords("grab", 288 - 40, 140 + 10);
  placeWords("grab", 288 - 40 + LOOPOFFSET, 140 + 10);

  runtime++;
  if (ropespeed1 != 0) {
    lastposition1 = runtime * displayspeed1;
  }
  if (ropespeed2 != 0) {
    lastposition2 = runtime * displayspeed2;
  }

  placeTitleBold(
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
