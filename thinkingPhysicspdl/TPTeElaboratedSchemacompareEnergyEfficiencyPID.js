// {TPTeElaboratedSchemacompareEnergyEfficiencyPID}{800}{620}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(800, 620);
  stepsbutton = new CreateCheckButton(18, height - 50, "step numbers", false);
  feedbackbutton = new CreateCheckButton(
    159,
    height - 50,
    "relate insight to enquiry",
    false
  );
}

function draw() {
  background(cdeviceLightGrey);
  stepsbutton.drawButton();
  feedbackbutton.drawButton();
  placeAdviceDroid(
    668,
    196,
    "describe process and your interest in it\nwell enough to motivate calculations",

    170,
    90
  );

  placePhysicalPane(118, 130, 150, 110);
  placePhysicalPane(143, 310, 200, 110);
  placeConceptualPane(143, 490, 200, 110);
  placePhysicalPane(388, 490, 150, 110);

  placeTransitionStep(118, 220, 90);
  placeTransitionRedescribe(118, 400, 90);
  placeTransitionStep(278, 490, 0);

  //     step actions
  if (stepsbutton.buttonisChecked) {
    paneNumber("01", "P", 118, 130);
    paneNumber("02", "P", 118, 310);
    paneNumber("03", "C", 118, 490);
    paneNumber("04", "P", 388, 490);
  } else {
    placeWords("set context: find the\nefficiency of\nthis process", 53, 100);
    placeWords(
      "describe process,\ncharacterise snapshots\nand identify quantities\nto enable calculations",
      53,
      280
    );
    placeWords("calculate the change in\nenergy, twice", 53, 460);
    placeWords(
      "compare these two\nenergy changes\nto calculate\nthe efficiency",
      323,
      460
    );
    push();
    translate(75, 529);
    showEnergy(3);
    translate(138, 0);
    showEnergy(2);
    pop();
  }

  if (feedbackbutton.buttonisChecked && !stepsbutton.buttonisChecked) {
    placeLinkBarRight(460, 490, 80, CWHITE);
    placeLinkBarUp(540, 490, 360, CWHITE);
    placeLinkArrowLeft(540, 130, 345, CWHITE);
    placeAdviceDroid(
      668,
      390,
      "relate step04 to step01\nto check for insight",
      170,
      90
    );
    placeLinkArrowRight(95, 520, 99, CWHITE);
    placeWords("-> % ->?", 111, 524);
  }

  placeTitleBold(
    "Compare energies to calculate efficiency (elaborated schema for energy descriptions)"
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
}
