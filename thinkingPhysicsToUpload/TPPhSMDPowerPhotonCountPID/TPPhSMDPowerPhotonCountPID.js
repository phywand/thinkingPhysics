// {TPPhSMDPowerPhotonCountPID}{900}{450}

var powershow;
var countshow;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(900, 450);
  powershow = new checkButton(710, 251, "power in beam", true);
  countshow = new checkButton(710, 370, "photon count", true);
}

function draw() {
  background(cWhite);

  powershow.drawButton();
  countshow.drawButton();

  push();
  translate(130, 120);
  beamC(0, 0, 480, 0, clight);
  transducer(clight, 0);
  translate(480, 0);
  transducer(cBlack, 180);
  translate(-170 - 108, 0);
  absorber("good", 60, 80);
  pop();

  if (countshow.buttonisChecked) {
    push();
    translate(140, 400);
    quantity(6, cactivity, "");
    words("many photons\neach second", 20, -20);
    translate(425, 0);
    quantity(2, cactivity, "");
    words("few photons\neach second", 20, -20);
    pop();
  }

  if (powershow.buttonisChecked) {
    push();
    translate(161, 280);
    power(6);
    translate(151, 0);
    power(6);
    translate(109, 0);
    power(2);
    translate(165, 0);
    power(2);
    pop();
  }

  titleBold("Brightness of beam set by number of photons");
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}

function mouseReleased() {
  powershow.changeState();
  countshow.changeState();
}
