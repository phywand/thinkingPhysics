// {TPTcSeriesPowerpdCurrentPID}{520}{520}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(520, 520);
  noLoop();
}

function draw() {
  background(CPANEBLUE);
  push();
  translate(120, 280);
  drawCircuitSeries("bulb");
  showPD(8);
  showCurrent(6);
  push();
  translate(120, 0);
  showPower(5);
  pop();
  push();
  translate(LOOPOFFSET, SERIESOFFSET);
  showPD(4);
  showCurrent(-6);
  push();
  translate(120, 0);
  showPower(2.5);
  pop();
  pop();
  push();
  translate(LOOPOFFSET, -SERIESOFFSET);
  showPD(4);
  showCurrent(-6);
  push();
  translate(120, 0);
  showPower(2.5);
  pop();
  pop();
  pop();

  placeTitleBold("power, p.d., current with series connections");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
