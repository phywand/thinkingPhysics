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
  background(cpaneBlue);
  push();
  translate(120, 280);
  circuitSeries("bulb");
  pd(8);
  current(6);
  push();
  translate(120, 0);
  power(5);
  pop();
  push();
  translate(loopoffset, seriesoffset);
  pd(4);
  current(-6);
  push();
  translate(120, 0);
  power(2.5);
  pop();
  pop();
  push();
  translate(loopoffset, -seriesoffset);
  pd(4);
  current(-6);
  push();
  translate(120, 0);
  power(2.5);
  pop();
  pop();
  pop();

  titleBold("power, p.d., current with series connections");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
