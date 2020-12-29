// {TPPhthreeArrowsCurlUpLineUpPID}{750}{550}

var timeoclock = 0;
const scaleAmplitude = 8;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(750, 550);
  aheadornot = new createSliderDivider(200, 200, 200, 15, 0, [0.5], false);
}

function draw() {
  background(CWHITE);
  const Afreq = 0.01;
  aheadornot.draw();
  var phaseAngle = (aheadornot.getValue(0) - 0.5) * 2 * PI * 80;
  push();
  translate(100, 300);
  showPhasorArrow(scaleAmplitude, Afreq, timeoclock, CCONCYAN);
  showPhasorArrow(scaleAmplitude, Afreq, timeoclock + phaseAngle, CCONPINK);
  showPhasorArrow(scaleAmplitude, Afreq, timeoclock - phaseAngle, CCONORANGE);
  pop();

  push();
  translate(500, 300);
  showPhasorMultipleResultant(scaleAmplitude, Afreq, [
    [timeoclock, CCONCYAN],
    [timeoclock + phaseAngle, CCONPINK],
    [timeoclock - phaseAngle, CCONORANGE],
  ]);
  pop();

  placeWords("arrows curl up", 230, 219);
  placeWords("arrows curl up", 230, 387);
  placeWords("arrows line up", 230, 302);

  placeTitleBold("Lining up and Curling up: three spinning arrows");
  timeoclock++;
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}

function mousePressed() {
  aheadornot.mousePressed();
}

function mouseReleased() {
  aheadornot.mouseReleased();
}
