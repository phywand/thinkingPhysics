// {TPPhFractionalAbsorbtionSlicesStepsPID}{800}{620}

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
  createCanvas(800, 620);
  activitySet = new SliderDivider(40, 500, 100, 15, 0, [0.7], false);
  numberSet = new SliderDivider(200, 500, 100, 15, 4, [0.2], false);
  qualitySet = new SliderDivider(500, 500, 100, 15, 1, [0.5], false);
}

function draw() {
  background(cWhite);

  numberSet.draw();
  words("set number of absorbers in beam", 230, 510);
  activitySet.draw();
  words("set activity", 70, 510);
  qualitySet.draw();
  words("set absorber quality", 530, 510);

  var numberofabsorbers = (numberSet.getValue() * 5).toFixed(0);
  var activity = activitySet.getValue() * 12;
  var quality = absorberQuality[qualitySet.getValue() * 2][0];
  var fracabs = absorberQuality[qualitySet.getValue() * 2][1];
  console.log(fracabs);

  push();
  translate(80, 200);
  transducer(clight, 0);
  // translate(641,0);
  // 		transducer(cBlack, 180);
  pop();

  push();
  translate(150, 200);
  for (i = 1; i <= numberofabsorbers; i++) {
    absorber(quality, 60, 80);
    translate(120, 0);
    push();
    translate(-30, 180);
    power(activity * pow(fracabs, i));
    push();
    translate(0, 100);
    quantity(activity * pow(fracabs, i) * 0.8, cactivity, "");
    pop();

    var dissipatedpower =
      activity * pow(fracabs, i - 1) - activity * pow(fracabs, i);
    var nowpower = activity * pow(fracabs, i);
    translate(-60, -activity * pow(fracabs, i) * pxscale);
    power(dissipatedpower);
    pop();
  }
  translate(0, -80);
  for (i = 0; i < 5 - numberofabsorbers; i++) {
    absorber(quality, 60, 80);
    translate(120, 0);
    push();
    translate(-30, 260);
    power(nowpower);
    push();
    translate(0, 100);
    quantity(nowpower * 0.8, cactivity, "");
    pop();
    pop();
  }
  pop();

  if (numberofabsorbers == 0) {
    push();
    translate(120, 380);
    for (i = 0; i < 5; i++) {
      translate(120, 0);
      power(activity);
      push();
      translate(0, 100);
      quantity(activity * 0.8, cactivity, "");
      pop();
    }
    pop();
  }

  push();
  translate(122, 380);
  power(activity);
  translate(0, 100);
  quantity(activity * 0.8, cactivity, "");
  pop();

  titleBold("Power and number of photons detectable in a beam");
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
