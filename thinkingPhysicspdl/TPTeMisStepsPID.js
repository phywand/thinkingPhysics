// {TPTeMisStepsPID}{800}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 600);
  stepsbutton = new CreateCheckButton(18, height - 50, "step numbers", false);
}

function draw() {
  background(cdeviceLightGrey);
  stepsbutton.drawButton();
  placePhysicalPane(143, 130, 100, 100);
  placePhysicalPane(193, 280, 200, 100);
  placeConceptualPane(193, 430, 200, 100);
  placePhysicalPane(393, 430, 100, 100);

  placeTransitionStep(143, 205, 90);
  placeTransitionRedescribe(143, 355, 90);
  placeTransitionStep(318, 280 + 150, 0);

  //     step actions
  if (stepsbutton.buttonisChecked) {
    paneNumber("01", "P", 143, 130);
    paneNumber("02", "P", 143, 280);
    paneNumber("03", "C", 143, 430);
    paneNumber("04", "P", 393, 430);
  } else {
    placeWords("describe\n  process\nindicate\n  purpose", 103, 100);
    placeWords("bound process\n  in space and time", 103, 250);
    placeWords(
      "identify stores\n\nestimate changes in energy\n  in each store",
      103,
      400
    );
    placeWords("insights\n  described\n& validate\n  purpose", 353, 400);
  }

  // feedback

  placeLinkBarRight(440, 430, 20, CWHITE);
  placeLinkBarUp(460, 430, 300, CWHITE);
  placeLinkArrowLeft(460, 130, 265, CWHITE);

  //     lived in world

  placeLinkArrowRight(45, 130, 45, CWHITE);
  push();
  translate(35, 110);
  scale(0.2);
  placeGirl4();
  translate(-80, 0);
  placeBoy1();
  pop();

  placeAdviceDroid(
    729,
    80,
    "jumping straight to an energy description (miss out step01 & step02)\n\nnot establishing a purpose (step01)\n\nnot describing the process (step01)\n\nnot establishing where the process starts and ends (step02)\n\nnot identifying changes in physical quantities that suggest changes in energy in particular stores (step02)\n\njumping straight to quantitative representations of energy (step03)\n\nnot relating the findings back to the original question or purpose (step04)",

    300,
    400
  );

  placeTitleBold("Creating an energy description: possible mis-steps");
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
