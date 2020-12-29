// {TPTcRopeLoopSimpleVaryPID}{672}{360}

var lastposition = (runtime = 0);

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(672, 360);
  setForce = new CreateControlStripVerticalPositive();
  setForce.create(64, 130);
  setGrab = new CreateControlStripVerticalPositive();
  setGrab.create(384, 130);
  advicebutton = new CreateCheckButton(525, 65, "tell me more", false);
}

function draw() {
  background(CWHITE);
  advicebutton.drawButton();

  let theforce = createVector(
    setForce.getValues().xSet,
    setForce.getValues().ySet
  );
  let thegrab = createVector(
    setGrab.getValues().xSet,
    setGrab.getValues().ySet
  );
  let forces = theforce.y * PIXELSCALING;
  let grab = 2 + thegrab.y * PIXELSCALING;
  let ropespeed = (forces / grab) * PIXELSCALING * 0.6;
  let displayspeed = ropespeed / 4;
  let powers = ropespeed * forces * 0.1;

  drawRopeLoop(64, 300, 320, 150, CIDEABLUE, lastposition);

  push();
  translate(64, 250);
  showForce(forces, 0, CIDEABLUE);
  translate(320, 0);
  showForce(forces, 0, CIDEARED);
  translate(-160 + (ropespeed * PIXELSCALING) / 2, 80);
  showVelocity(-ropespeed, 90, CIDEAGREY);
  pop();

  if (advicebutton.buttonisChecked) {
    placeAdviceDroid(
      600,
      100,
      "Current determined by p.d. and resistance. Rope moves at constant speed, as resultant force is zero.",
      160,
      90
    );
    if (ropespeed != 0) {
      leadlinediagramnegative("you pulling, modelling p.d.", 64, 250);
      leadlinediagramnegative(
        "friend grabbing\nmodelling resistance",
        384,
        250
      );
    }
  }

  placeWordsFrame("increase how much you pull", 84, 65, 80, 100);
  placeWordsFrame("increase how much your friend grabs", 404, 65, 120, 100);

  placeTitleBold("A rope loop: pulling and grabbing to predict current");
  runtime++;
  if (ropespeed != 0) {
    lastposition = runtime * displayspeed;
  }
}

function mouseReleased() {
  advicebutton.changeState();
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
