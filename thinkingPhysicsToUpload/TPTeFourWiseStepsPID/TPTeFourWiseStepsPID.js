// {TPTeFourWiseStepsPID}{740}{600}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(740, 600);
  stepsbutton = new checkButton(18, height - 50, "step numbers", false);
  feedbackbutton = new checkButton(159, height - 50, "validity check", false);
  physicalconceptualbutton = new checkButton(
    300,
    height - 50,
    "physical and conceptual ",
    false
  );
  livedinbutton = new checkButton(
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

  if (physicalconceptualbutton.buttonisChecked) {
    advicedroid(
      421,
      341 - 290 / 2,
      "Separate tangible (green) \nand conceptual (blue)",

      170,
      90
    );
  }

  if (feedbackbutton.buttonisChecked) {
    linkBarRight(440, 430, 100, cWhite);
    linkBarUp(540, 430, 300, cWhite);
    linkArrowLeft(540, 130, 345, cWhite);
    advicedroid(
      668,
      340,
      "Relate step 04 to step01\nto check for insight",

      170,
      90
    );
  }

  //     lived in world

  if (livedinbutton.buttonisChecked) {
    linkArrowRight(45, 130, 45, cWhite);
    push();
    translate(35, 110);
    scale(0.2);
    drawGirl4();
    translate(-80, 0);
    drawBoy1();
    pop();
  }

  titleBold(
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
