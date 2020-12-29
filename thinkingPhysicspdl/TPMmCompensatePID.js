// {TPMmCompensatePID}{500}{450}

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

  value1Set = new CreateControlStripVertical();
  value1Set.create(locX - 50 - 120, locY - 80);

  value2Set = new CreateControlStripVertical();
  value2Set.create(locX - 50 - 120, locY + 80);
}

function draw() {
  background(CWHITE);

  var value1 = value1Set.getValues().ySet * 20;
  var value2 = value2Set.getValues().ySet * 20;

  push();
  translate(locX, locY);
  placeIndicator((value1 / 5) * (value2 / 5), cindicator, "power", "×");
  push();
  placeContributionLinkBackUp();
  placeIndicator(value1, cindicator, "current", "");
  placeContributionLinkBackDown();
  placeIndicator(value2, cindicator, "potential difference", "");
  pop();
  pop();

  placeTitleBold("Compensation relationships show trade-offs");
}
