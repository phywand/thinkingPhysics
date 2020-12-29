// {TPTeFourWiseStepsPID}{740}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(740, 600);
  stepsbutton = new CreateCheckButton(18, height - 50, "step numbers", false);
  feedbackbutton = new CreateCheckButton(159, height - 50, "validity check", false);
  physicalconceptualbutton = new CreateCheckButton(
    300,
    height - 50,
    "physical and conceptual ",
    false
  );
  livedinbutton = new CreateCheckButton(
    502,
    height - 50,
    "show lived-in world",
    false
  );
}

function draw() {
  background(cdeviceLightGrey);
  stepsbutton.drawButton();
  feedbackbutton.drawButton();
  physicalconceptualbutton.drawButton();
  livedinbutton.drawButton();

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

  if (physicalconceptualbutton.buttonisChecked) {
    placeAdviceDroid(
      421,
      341 - 290 / 2,
      "Separate tangible (green) \nand conceptual (blue)",

      170,
      90
    );
  }

  if (feedbackbutton.buttonisChecked) {
    placeLinkBarRight(440, 430, 100, CWHITE);
    placeLinkBarUp(540, 430, 300, CWHITE);
    placeLinkArrowLeft(540, 130, 345, CWHITE);
    placeAdviceDroid(
      668,
      340,
      "Relate step 04 to step01\nto check for insight",

      170,
      90
    );
  }

  //     lived in world

  if (livedinbutton.buttonisChecked) {
    placeLinkArrowRight(45, 130, 45, CWHITE);
    push();
    translate(35, 110);
    scale(0.2);
    placeGirl4();
    translate(-80, 0);
    placeBoy1();
    pop();
  }

  placeTitleBold(
    "Creating an energy description: four steps to enlightenment/avoidance of pain"
  );
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}

function mouseReleased() {
  stepsbutton.changeState();
  feedbackbutton.changeState();
  physicalconceptualbutton.changeState();
  livedinbutton.changeState();
}
