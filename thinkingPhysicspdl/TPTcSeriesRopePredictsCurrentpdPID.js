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
  sliderROne = new createSliderDivider(287, 122, 80, 15, 0, [0.7], false);
  sliderRTwo = new createSliderDivider(287, 338, 80, 15, 0, [0.3], false);
  sliderPD = new createSliderDivider(138, 189, 120, 15, 0, [0.9], false);
  loopsbutton = new CreateCheckButton(
    width / 2 - 60,
    height - 50,
    "show loops",
    false
  );
}

function draw() {
  background(CWHITE);
  loopsbutton.drawButton();

  if (loopsbutton.buttonisChecked) {
    push();
    translate(112, 290);
    drawLoopOneStretched();
    pop();
    push();
    translate(width - 323, 290);
    drawLoopOneStretched();
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
  let ropespeed = I * PIXELSCALING * 0.6;
  let displayspeed = ropespeed / 4;
  let V1 = I * R1;
  let V2 = I * R2;

  // ropeloop
  drawRopeLoop(112, 504, 216, 428, CIDEABLUE, lastposition);
  push();
  translate(112, 310);
  push();
  translate(-60, 0);
  // 			showPower(powerbattery);
  translate(LOOPOFFSET + 120, -SERIESOFFSET);
  // 			showPower(powerR1);
  translate(0, 2 * SERIESOFFSET);
  // 			showPower(powerR2);
  pop();
  showForce(V, 0, CIDEARED);
  translate(LOOPOFFSET + 1, -SERIESOFFSET);
  showForce(V1, 0, CIDEAGREEN);
  translate(0, 2 * SERIESOFFSET);
  showForce(V2, 0, CIDEAGREEN);
  translate(-LOOPOFFSET / 2 + (ropespeed * PIXELSCALING) / 2, 110);
  showVelocity(-ropespeed, 90, CIDEAGREY);
  pop();

  //electricloop
  push();
  translate(width - 323, 290);
  drawCircuitSeries("bulb");
  translate(0, 0);
  // 		showPower(powerbattery);
  showPD(V);
  showCurrent(I * PIXELSCALING);
  translate(LOOPOFFSET, -SERIESOFFSET);
  // 		showPower(powerR1);
  showPD(V1);
  showCurrent(I * PIXELSCALING);
  translate(0, 2 * SERIESOFFSET);
  // 		showPower(powerR2);
  showPD(V2);
  showCurrent(I * PIXELSCALING);
  pop();

  runtime++;
  if (ropespeed != 0) {
    lastposition = runtime * displayspeed;
  }

  placeWords("pull", 168, 199);
  placeWords("grab", 247, 132);
  placeWords("grab", 247, 348);

  placeTitleBold(
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
