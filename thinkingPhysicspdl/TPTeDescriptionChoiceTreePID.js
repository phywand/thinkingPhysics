// {TPTeDescriptionChoiceTreePID}{800}{550}

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
  [0, "The lived in world: the everyday.", 190, 130, 120, 80],
  [
    1,
    "A physical description: noticing and quantifying.\nNecessary precursors to calculations of energy or power.",
    570,
    300,
    120,
    200,
  ],
  [
    2,
    "'By what mechanism?'\nA physical description: causal mechanisms.",
    730,
    300,
    100,
    140,
  ],
  [3, "'How much?'\nAn energy description.", 180, 470, 100, 100],
  [4, "'At what rate?'\nA power description.", 430, 470, 100, 100],
  [5, "level one", 70, 130, 100, 40],
  [6, "level two", 70, 300, 100, 40],
  [7, "level three", 70, 470, 100, 40],
];
var ideaLinks = [
  [0, 1, 24],
  [1, 3, 8],
  [1, 4, 8],
  [1, 2, 8],
];

function preload() {
  romanFont = loadFont("../__support/Jost-600-Semi.ttf");
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
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

  placeTitleBold("Choose the question you want to answer");
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
