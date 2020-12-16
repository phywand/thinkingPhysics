// {TPTeMisStepsPID}{800}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 600);
  stepsbutton = new checkButton(18, height - 50, "step numbers", false);
}

function draw() {
  background(cdeviceLightGrey);
  stepsbutton.drawButton();
  physicalPane(143, 130, 100, 100);
  physicalPane(193, 280, 200, 100);
  conceptualPane(193, 430, 200, 100);
  physicalPane(393, 430, 100, 100);

  transitionStep(143, 205, 90);
  transitionRedescribe(143, 355, 90);
  transitionStep(318, 280 + 150, 0);

  //     step actions
  if (stepsbutton.buttonisChecked) {
    paneNumber("01", "P", 143, 130);
    paneNumber("02", "P", 143, 280);
    paneNumber("03", "C", 143, 430);
    paneNumber("04", "P", 393, 430);
  } else {
    words("describe\n  process\nindicate\n  purpose", 103, 100);
    words("bound process\n  in space and time", 103, 250);
    words(
      "identify stores\n\nestimate changes in energy\n  in each store",
      103,
      400
    );
    words("insights\n  described\n& validate\n  purpose", 353, 400);
  }

  // feedback

  linkBarRight(440, 430, 20, cWhite);
  linkBarUp(460, 430, 300, cWhite);
  linkArrowLeft(460, 130, 265, cWhite);

  //     lived in world

  linkArrowRight(45, 130, 45, cWhite);
  push();
  translate(35, 110);
  scale(0.2);
  drawGirl4();
  translate(-80, 0);
  drawBoy1();
  pop();

  advicedroid(
    729,
    80,
    "jumping straight to an energy description (miss out step01 & step02)\n\nnot establishing a purpose (step01)\n\nnot describing the process (step01)\n\nnot establishing where the process starts and ends (step02)\n\nnot identifying changes in physical quantities that suggest changes in energy in particular stores (step02)\n\njumping straight to quantitative representations of energy (step03)\n\nnot relating the findings back to the original question or purpose (step04)",

    300,
    400
  );

  titleBold("Creating an energy description: possible mis-steps");
}

function mouseReleased() {
  stepsbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
