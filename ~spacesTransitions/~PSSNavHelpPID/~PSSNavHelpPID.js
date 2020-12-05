//  ~PSSNavHelpPID

function preload() {
  chatterFont = loadFont("../../__support/SF_Cartoonist_Hand_Bold.ttf");
  romanFont = loadFont("../../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(500, 420);
  noLoop();
}

function draw() {
  background(cWhite);
  justWords(
    "To change pane\n - swipe right or left\n\n- press right or left arrow keys\n\n- press spacebar  to step forward  SpacingParabreak  To show overview\n\n- swipe up or swipe down or tap top or bottom\n\n- press number keys 0-9 to jump straight to a pane(not a transition). SpacingParabreak Click off a pane on the background first if you seem to be 'stuck'.",
    "topcomiccommentL",
    80,
    100,
    406 - 29
  );

  pssguide(4, 80, 60, true);

  titleBold("Navigating");
}
function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
