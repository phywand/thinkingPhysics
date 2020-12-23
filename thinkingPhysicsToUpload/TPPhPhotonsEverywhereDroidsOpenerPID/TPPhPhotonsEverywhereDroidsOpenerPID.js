// {TPPhPhotonsEverywhereDroidsOpenerPID}{600}{400}

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(cWhite);

  saydroid(
    1,
    100,
    160,
    "Perhaps we could teach everything about light, starting with photons",
    200,
    50,
    "R"
  );

  saydroid(
    3,
    500,
    200,
    "Going on to radiations of all kinds – sounds interesting...",
    200,
    50,
    "L"
  );

  thinkdroid(
    6,
    350,
    320,
    "What?\nNo more ray optics?\nNo more 'light is a wave'",
    120,
    100,
    "L"
  );

  titleBold("Craziness");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
