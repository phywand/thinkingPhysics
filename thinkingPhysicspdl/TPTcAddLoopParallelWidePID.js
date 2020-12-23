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
  smooshbutton = new controlButton(50 - 29, 346, 60 + 29, 30);
}

function draw() {
  background(cWhite);

  smooshbutton.drawButton();
  if (smooshbutton.buttonwasPressed) {
    combineLoop = !combineLoop;
    smooshbutton.buttonwasPressed = false;
  }

  if (combineLoop == true) {
    words("take apart", 28, height - 32);

    push();
    translate(360, 200);
    circuitParallel("bulb");
    translate(55, 30);
    power(3);
    translate(0, -30);
    power(3);
    translate(220, 0);
    power(3);
    translate(210, 30);
    power(3);
    pop();
  }

  if (!combineLoop) {
    words("put together", 28, height - 32);
    push();
    translate(30, 200);
    circuitSimple("bulb");
    translate(55, 0);
    power(3);
    translate(220, 0);
    power(3);
    pop();
    push();
    translate(360, 200);
    circuitSimpleStretched("bulb");
    translate(55, 30);
    power(3);
    translate(430, 0);
    power(3);
    pop();
  }
  titleBold("Combining and separating two complete loops");
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
