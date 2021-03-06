// {TPTcMakeBreakChargeFlowPowerPID}{550}{450}

var completeloop = true;
var magnitudetheCurrent = 0;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(550, 450);
  controlbutton = new CreateControlButton(418, 143, 112, 30);
}

function draw() {
  background(CWHITE);
  controlbutton.drawButton();
  if (controlbutton.buttonwasPressed) {
    completeloop = !completeloop;
    controlbutton.buttonwasPressed = false;
  }

  if (completeloop == true) {
    placeWords("break loop", 426, 165);
    var magnitudetheCurrent = 5;
  }

  if (completeloop == false) {
    placeWords("complete loop", 408 + 18, 192 + 30 - 57);
    var magnitudetheCurrent = 0;
  }

  push();
  translate(100, 250);
  drawCircuitSimple("bulb");
  if (completeloop == true) {
    push();
    translate(70, 0);
    showPower(magnitudetheCurrent);
    translate(210, 0);
    showPower(magnitudetheCurrent);
    pop();
  }

  // charge flow top
  translate(40, -160);
  fill(cboxLightGrey);
  noStroke();
  rect(0, 0, 40, 40);
  translate(10, 10);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 90, CBLACK);
  scale(2);
  translate(24, 7);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 90, CBLACK);
  scale(2);
  translate(-18, 9);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 90, CBLACK);
  scale(2);

  // charge flow bottom
  translate(0, 260);
  fill(cboxLightGrey);
  noStroke();
  rect(0, 0, 40, 40);
  translate(18, 6);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, -90, CBLACK);
  scale(2);
  translate(-12, 14);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, -90, CBLACK);
  scale(2);
  translate(17, 16);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, -90, CBLACK);
  scale(2);

  // charge flow left
  translate(-130, -260);
  fill(cboxLightGrey);
  noStroke();
  rect(0, 0, 40, 40);
  translate(18, 6);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 0, CBLACK);
  scale(2);
  translate(-12, 14);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 0, CBLACK);
  scale(2);
  translate(17, 16);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 0, CBLACK);
  scale(2);

  // charge flow right
  translate(260, 120);
  fill(cboxLightGrey);
  noStroke();
  rect(0, 0, 40, 40);
  translate(18, 6);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 180, CBLACK);
  scale(2);
  translate(-12, 14);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 180, CBLACK);
  scale(2);
  translate(17, 16);
  fill(0);
  ellipse(0, 0, 5, 5);
  scale(0.5);
  showVelocity(-magnitudetheCurrent, 180, CBLACK);
  scale(2);
  pop();

  if (completeloop == false) {
    push();
    translate(200, 352);
    fill(CWHITE);
    rect(0, 0, 40, 10);
    stroke(CCIRCUITRED);
    strokeWeight(1);
    line(0, 5, 40, -10);
    pop();
  }

  placeTitleBold("Charges flow and power switched only in a complete loop");
}

function mouseReleased() {
  controlbutton.checkPressed();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
