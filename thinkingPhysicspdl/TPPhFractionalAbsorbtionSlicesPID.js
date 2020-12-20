// {TPPhFractionalAbsorbtionSlicesPID}{800}{520}

const absorberQuality = [
  ["poor", 0.95],
  ["good", 0.85],
  ["better", 0.65],
];

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 520);
  activitySet = new SliderDivider(40, 400, 100, 15, 0, [0.7], false);
  numberSet = new SliderDivider(200, 400, 100, 15, 6, [0.14], false);
  qualitySet = new SliderDivider(500, 400, 100, 15, 1, [0.5], false);
}

function draw() {
  background(cWhite);

  numberSet.draw();
  words("set number of absorbers in beam", 230, 410);
  activitySet.draw();
  words("set activity", 70, 410);
  qualitySet.draw();
  words("set absorber quality", 530, 410);

  var numberofabsorbers = (numberSet.getValue() * 7).toFixed(0);
  var activity = activitySet.getValue() * 12;
  var quality = absorberQuality[qualitySet.getValue() * 2][0];
  var fracabs = absorberQuality[qualitySet.getValue() * 2][1];
  console.log(fracabs);

  push();
  translate(80, 200);
  transducer(clight, 0);
  translate(600, 0);
  transducer(cBlack, 180);
  pop();

  push();
  translate(180, 200);
  for (i = 1; i <= numberofabsorbers; i++) {
    absorber(quality, 30, 80);
    translate(60, 0);
  }
  translate(0, -80);
  for (i = 0; i < 7 - numberofabsorbers; i++) {
    absorber(quality, 30, 80);
    translate(60, 0);
  }
  pop();

  push();
  translate(80, 370);
  quantity(activity, cactivity, "");
  translate(600, 0);
  quantity(activity * pow(fracabs, numberofabsorbers), cactivity, "");
  pop();

  titleBold("Fractional absorption: vary number of slices of absorber");
}

function mousePressed() {
  numberSet.mousePressed();
  activitySet.mousePressed();
  qualitySet.mousePressed();
}
function mouseReleased() {
  numberSet.mouseReleased();
  activitySet.mouseReleased();
  qualitySet.mouseReleased();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
