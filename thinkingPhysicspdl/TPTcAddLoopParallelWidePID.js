// {TPTcAddLoopParallelWidePID}{900}{400}

var combineLoop = false;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(900, 400);
  smooshbutton = new CreateControlButton(50 - 29, 346, 60 + 29, 30);
}

function draw() {
  background(CWHITE);

  smooshbutton.drawButton();
  if (smooshbutton.buttonwasPressed) {
    combineLoop = !combineLoop;
    smooshbutton.buttonwasPressed = false;
  }

  if (combineLoop == true) {
    placeWords("take apart", 28, height - 32);

    push();
    translate(360, 200);
    drawCircuitParallel("bulb");
    translate(55, 30);
    showPower(3);
    translate(0, -30);
    showPower(3);
    translate(220, 0);
    showPower(3);
    translate(210, 30);
    showPower(3);
    pop();
  }

  if (!combineLoop) {
    placeWords("put together", 28, height - 32);
    push();
    translate(30, 200);
    drawCircuitSimple("bulb");
    translate(55, 0);
    showPower(3);
    translate(220, 0);
    showPower(3);
    pop();
    push();
    translate(360, 200);
    drawCircuitSimpleStretched("bulb");
    translate(55, 30);
    showPower(3);
    translate(430, 0);
    showPower(3);
    pop();
  }
  placeTitleBold("Combining and separating two complete loops");
}

function mouseReleased() {
  smooshbutton.checkPressed();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
