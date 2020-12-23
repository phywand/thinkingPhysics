// {TPMmConstraintPID}{500}{450}

var locX = 230;
var locY = 220;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(500, 450);

  value1Set = new controlStripVertical();
  value1Set.create(locX - 50 - 120, locY - 80);

  value2Set = new controlStripVerticalPositive();
  value2Set.create(locX - 50 - 120, locY + 80);
}

function draw() {
  background(cWhite);

  var value1 = value1Set.getValues().ySet * 20;
  var value2 = value2Set.getValues().ySet * 20 + 1;

  push();
  translate(locX, locY);
  indicator(value1 / 5 / (value2 / 5), cindicator, "current", "÷");
  push();
  contributionlinkbackup();
  indicator(value1, cindicator, "potential difference", "");
  contributionlinkbackdown();
  indicator(value2, cindicator, "resistance", "");
  pop();
  pop();

  titleBold("Constraint relationships set possibilities");
}
