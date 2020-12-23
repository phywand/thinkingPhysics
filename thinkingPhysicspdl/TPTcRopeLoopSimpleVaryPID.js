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
  setForce = new controlStripVerticalPositive();
  setForce.create(64, 130);
  setGrab = new controlStripVerticalPositive();
  setGrab.create(384, 130);
  advicebutton = new checkButton(525, 65, "tell me more", false);
}

function draw() {
  background(cWhite);
  advicebutton.drawButton();

  let theforce = createVector(
    setForce.getValues().xSet,
    setForce.getValues().ySet
  );
  let thegrab = createVector(
    setGrab.getValues().xSet,
    setGrab.getValues().ySet
  );
  let forces = theforce.y * pixelscaling;
  let grab = 2 + thegrab.y * pixelscaling;
  let ropespeed = (forces / grab) * pixelscaling * 0.6;
  let displayspeed = ropespeed / 4;
  let powers = ropespeed * forces * 0.1;

  ropeloop(64, 300, 320, 150, cideaBlue, lastposition);

  push();
  translate(64, 250);
  force(forces, 0, cideaBlue);
  translate(320, 0);
  force(forces, 0, cideaRed);
  translate(-160 + (ropespeed * pixelscaling) / 2, 80);
  velocity(-ropespeed, 90, cideaGrey);
  pop();

  if (advicebutton.buttonisChecked) {
    advicedroid(
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

  wordsframe("increase how much you pull", 84, 65, 80, 100);
  wordsframe("increase how much your friend grabs", 404, 65, 120, 100);

  titleBold("A rope loop: pulling and grabbing to predict current");
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
