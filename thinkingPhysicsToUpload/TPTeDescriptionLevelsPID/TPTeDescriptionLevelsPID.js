// {TPTeDescriptionLevelsPID}{800}{550}

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
  [0, "lived in world: the everyday", 220, 130, 120, 120],
  [1, "physical description: noticing and quantifying", 390, 300, 120, 120],
  [2, "physical description: causal mechanisms", 560 + 170, 300, 120, 120],
  [3, "energy description", 560, 470, 120, 120],
  [4, "level one", 80, 130, 120, 40],
  [5, "level two", 80, 300, 120, 40],
  [6, "level three", 80, 470, 120, 40],
];
var ideaLinks = [
  [0, 1, 16],
  [1, 3, 16],
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
  background(cWhite);

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

  titleBold("Three levels of description");
}

function drawCoreIdeaBox(boxText, xpos, ypos, boxWidth, boxHeight) {
  fill(cideaGrey);
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
