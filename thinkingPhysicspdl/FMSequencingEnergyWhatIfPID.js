// {FMSequencingEnergyWhatIfPID}{300}{200}
var mentonrep = new Scribble();
function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
}

function setup() {
  createCanvas(300, 200);
  noLoop();
}

function draw() {
  background(CWHITE);

  push();
  placeMentonDroid(
    CBOD1,
    0,
    60,
    75,
    "What if...we put in place a sequence that led naturally to the idea of energy?",
    240,
    45,
    "R"
  );
  pop();

  push();
  placeMentonDroid(
    CBOD2,
    5,
    240,
    132,
    "So: constraint relationships; accounts of impossibilities; trade-offs. Sounds worth a try.",
    215,
    45,
    "L"
  );
  pop();
}
