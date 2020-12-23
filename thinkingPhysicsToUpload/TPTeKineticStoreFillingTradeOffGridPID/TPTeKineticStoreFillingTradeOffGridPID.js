// {TPTeKineticStoreFillingTradeOffGridPID}{600}{500}

const magnitudes = [];
var values = [];
const scaleFactor = 200;
const locpucks = [108, 288];
const tradeOffOffset = 180;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(600, 500);

  magnitudes[0] = new controlPuckpositive();
  magnitudes[0].create(locpucks[0], locpucks[1]);

  boxesbutton = createCheckbox("trade-off", false);
  boxesbutton.position(494, 372);
  boxesbutton.class("PDLbutton");
}

function draw() {
  background(cWhite);

  values[0] = createVector(
    magnitudes[0].getValues().xSet,
    magnitudes[0].getValues().ySet
  ).mult(scaleFactor);

  words("set quantities", locpucks[0] - 40, locpucks[1] - 45);
  words("momentum", locpucks[0] - 5, locpucks[1] + 61);
  words("velocity", locpucks[0] + 48, locpucks[1] - 28);

  push();
  translate(150, 100);
  push();
  storeEmptier("kinetic");
  translate(330, 0);
  storeFuller("kinetic");
  pop();

  push();
  translate(205, 250);
  energy((values[0].x * values[0].y) / 1500);
  stroke(cdeviceGrey);
  for (i = 0; i < 5; i++) {
    line(25, -i * 15, 45, -i * 15);
  }
  pop();

  pop();

  if (boxesbutton.checked()) {
    tradeOfftriangle(
      locpucks[0],
      locpucks[1] + tradeOffOffset,
      values[0].x,
      values[0].y,
      cconlightgreen,
      cconpink
    );
  }

  push();

  translate(20, 80);
  subHead("qualitative", 0, 0);
  translate(0, 134);
  subHead("quantitative", 0, 0);
  pop();

  titleBold("Filling a kinetic store: a trade-off");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}

function tradeOfftriangle(
  xloc,
  yloc,
  hquantity,
  vquantity,
  hqcolour,
  vqcolour
) {
  fill(ccongray);
  noStroke();
  triangle(
    xloc,
    yloc,
    xloc + hquantity,
    yloc,
    xloc + hquantity,
    yloc - vquantity
  );
  strokeWeight(2);
  stroke(vqcolour);
  line(xloc + hquantity, yloc, xloc + hquantity, yloc - vquantity);
  stroke(hqcolour);
  line(xloc, yloc, xloc + hquantity, yloc);
}