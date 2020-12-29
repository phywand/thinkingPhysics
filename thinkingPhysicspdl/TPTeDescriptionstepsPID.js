// {TeDescriptionstepsPID}{800}{550}

// where to find things in the ideaBoxes array

var textIndex = 1;
var xlocIndex = 2;
var ylocIndex = 3;
var widthIndex = 4;
var heightIndex = 5;

//Where to find things in the ideasLinks array

var linkStartIndex = 0;
var linkEndIndex = 1;
var linkweightIndex = 2;

var cornerRound = 5;
var textOffset = 4;

var ideasBoxes = [
  [
    0,
    "lived in world: describe the process in everyday terms\n(step 1)",
    210,
    130,
    120,
    120,
  ],
  [
    1,
    "physical description: noticing and quantifying\n(step 2)",
    370,
    300,
    120,
    120,
  ],
  [
    2,
    "Identify insights: apply to process\nand to physical description\n(step 4)",
    720,
    215,
    120,
    290,
  ],
  [
    3,
    "energy description: use clues from the physical\n(step 3)",
    530,
    470,
    120,
    120,
  ],
  [4, "level one", 80, 130, 120, 40],
  [5, "level two", 80, 300, 120, 40],
  [6, "level three", 80, 470, 120, 40],
];
var ideaLinks = [
  [0, 1, 16],
  [1, 3, 16],
  [3, 2, 16],
  [0, 2, 8],
  [1, 2, 8],
];

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(800, 550);
  noStroke();
}

function draw() {
  background(CWHITE);

  for (var i = 0; i < ideaLinks.length; i = i + 1) {
    drawLink(
      ideasBoxes[ideaLinks[i][linkStartIndex]][xlocIndex],
      ideasBoxes[ideaLinks[i][linkStartIndex]][ylocIndex],
      ideasBoxes[ideaLinks[i][linkEndIndex]][xlocIndex],
      ideasBoxes[ideaLinks[i][linkEndIndex]][ylocIndex],
      ideaLinks[i][linkweightIndex]
    );
  }
  for (var i = 0; i < ideasBoxes.length; i = i + 1) {
    drawCoreIdeaBox(
      ideasBoxes[i][textIndex],
      ideasBoxes[i][xlocIndex],
      ideasBoxes[i][ylocIndex],
      ideasBoxes[i][widthIndex],
      ideasBoxes[i][heightIndex]
    );
  }

  placeTitleBold("four steps across three levels");
}

function drawCoreIdeaBox(boxText, xpos, ypos, boxWidth, boxHeight) {
  fill(CIDEAGREY);
  noStroke();
  rectMode(CENTER);
  rect(xpos, ypos, boxWidth, boxHeight, cornerRound);
  fill(cInvertedText);
  textFont(romanFont, 16);
  text(
    boxText,
    xpos + textOffset,
    ypos + textOffset,
    boxWidth - textOffset,
    boxHeight - textOffset
  );
}
function drawLink(
  xposstart,
  yposstart,
  xposfinish,
  yposfinish,
  connectorWeight
) {
  strokeWeight(connectorWeight * 2);
  stroke(cpathlinks);
  noFill();
  //     line(xposstart,yposstart,xposfinish,yposfinish); //to debug
  bezier(
    xposstart,
    yposstart,
    xposfinish,
    yposstart,
    xposstart,
    yposfinish,
    xposfinish,
    yposfinish
  );
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
