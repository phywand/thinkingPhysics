// {TPTeElaboratedSchemacompareEnergyEfficiencyPID}{800}{620}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(800, 620);
  stepsbutton = new checkButton(18, height - 50, "step numbers", false);
  feedbackbutton = new checkButton(
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
  advicedroid(
    668,
    196,
    "describe process and your interest in it\nwell enough to motivate calculations",

    170,
    90
  );

  physicalPane(118, 130, 150, 110);
  physicalPane(143, 310, 200, 110);
  conceptualPane(143, 490, 200, 110);
  physicalPane(388, 490, 150, 110);

  transitionStep(118, 220, 90);
  transitionRedescribe(118, 400, 90);
  transitionStep(278, 490, 0);

  //     step actions
  if (stepsbutton.buttonisChecked) {
    paneNumber("01", "P", 118, 130);
    paneNumber("02", "P", 118, 310);
    paneNumber("03", "C", 118, 490);
    paneNumber("04", "P", 388, 490);
  } else {
    words("set context: find the\nefficiency of\nthis process", 53, 100);
    words(
      "describe process,\ncharacterise snapshots\nand identify quantities\nto enable calculations",
      53,
      280
    );
    words("calculate the change in\nenergy, twice", 53, 460);
    words(
      "compare these two\nenergy changes\nto calculate\nthe efficiency",
      323,
      460
    );
    push();
    translate(75, 529);
    energy(3);
    translate(138, 0);
    energy(2);
    pop();
  }

  if (feedbackbutton.buttonisChecked && !stepsbutton.buttonisChecked) {
    linkBarRight(460, 490, 80, cWhite);
    linkBarUp(540, 490, 360, cWhite);
    linkArrowLeft(540, 130, 345, cWhite);
    advicedroid(
      668,
      390,
      "relate step04 to step01\nto check for insight",
      170,
      90
    );
    linkArrowRight(95, 520, 99, cWhite);
    words("-> % ->?", 111, 524);
  }

  titleBold(
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
