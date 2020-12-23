// {TPTcOrientationCircuitSpinningPID}{600}{600}

var runtime = 0;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(600, 600);
  spinbutton = new checkButton(418 + 70, 143 + 40 - 114, "rotate", true);
}

function draw() {
  background(cWhite);
  spinbutton.drawButton();

  console.log(spinbutton.buttonisChecked);
  if (spinbutton.buttonisChecked) {
    runtime++;
  }

  push();
  translate(300, 300);
  rotate(runtime * 0.01);
  circuitSimple("bulb");
  pop();

  titleBold("Circuit orientation: does it matter?");
}

function mouseReleased() {
  spinbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
