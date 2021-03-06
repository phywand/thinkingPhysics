// {TpTexvtConstrainExplainDIP}{800}{500}

//constraint A=BC, A constant

var quantityB = 2;
var quantityBOld;
var quantityA = 10; //constant
var quantityC = 5;
var quantityCOld;
var nochange = 0.5;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 500);
  changeOne = new createSliderDivider(40, 280, 100, 15, 3, [0.5], false);
  changeTwo = new createSliderDivider(240, 280, 100, 15, 3, [0.5], false);
  startOverbutton = new CreateControlButton(448, 281, 80, 30);

  justplaceWords(
    "comparing snapshots before or after a change: SpacingLinebreak EqualityAssertion{QuantitySymbol{x}}{QuantitySymbol{v} SymbolMultipliedby QuantitySymbol{t}} SpacingLinebreak as duration or velocity are varied: ",
    "thinkingL",
    546 + 22,
    283,
    190
  );
}

function draw() {
  background(CWHITE);
  startOverbutton.drawButton();
  placeWords("start again", 452, 301);
  changeOne.draw();
  changeTwo.draw();

  if (changeOne.getValue() != 0.5 && mouseX < 180) {
    changeTwo.setValue(nochange);
  }
  if (changeTwo.getValue() != 0.5 && mouseX > 180) {
    changeOne.setValue(nochange);
  }

  quantityB += (changeOne.getValue() - 0.5) / 100;

  if (quantityB <= 1) {
    quantityB = 1; //maybe other special conditions
  }

  quantityC += (changeTwo.getValue() - 0.5) / 100;

  if (quantityBOld != quantityB) {
    quantityC = quantityA / quantityB;
  } else if (quantityCOld != quantityC) {
    quantityB = quantityA / quantityC;
  } else {
    //            carry on
  }

  if (startOverbutton.buttonwasPressed) {
    quantityB = 2;
    quantityBOld;
    quantityC = 5;
    quantityCOld;
    changeOne.setValue(nochange);
    changeTwo.setValue(nochange);
  }

  // set the display here

  placeTitleBold("displacement, velocity and duration are constrained");

  placeWords("increase\nvelocity", 70, 290);
  placeWords("decrease\nvelocity", 70, 360);

  placeWords("increase\nduration", 270, 290);
  placeWords("decrease\nduration	", 270, 360);
  push();
  translate(300, 80);
  showVelocity(quantityB * 3, 90, CCONGRAY);
  translate(0, 50);
  showDisplacement(quantityA * 2, 90, CIDEABLUE);
  translate(0, 50);
  showDuration(quantityC * 8, 90);
  pop();

  push();
  translate(546, 430);
  placeGirl3();
  pop();

  //    do not change below here
  quantityBOld = quantityB;
  quantityCOld = quantityC;
}

function mousePressed() {
  changeOne.mousePressed();
  changeTwo.mousePressed();
}

function mouseReleased() {
  changeOne.mouseReleased();
  changeTwo.mouseReleased();
  startOverbutton.checkPressed();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
