// {TPKnMotionDiagramGeneratorArrayDragonflyPondPID}{800}{800}

const motionlocations = [
  [100, 200],
  [150, 200],
  [70, 270],
  [70, 100],
  [150, -20],
  [130, -50],
  [0, -50],
  [-80, -140],
  [-200, -180],
  [-160, -120],
  [-140, -20],
  [-180, 60],
];

// can be <=+-300

const displacements = [];
var lastDisplacement;
var thisTrackstep;
var angleforStep;
var mouseDisplacement;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
  thedisplaced = loadImage("../__PDLgraphics/dragonflysmall.png");
  thebackground = loadImage("../__PDLgraphics/pond.png");
}
function setup() {
  createCanvas(800, 800);

  valuesbutton = new checkButton(100, 750, "values", false);

  displacementsbutton = new checkButton(203, 750, "displacements", false);

  segmentsbutton = new checkButton(350, 750, "track segments", false);

  backgroundbutton = new checkButton(511, 750, "background", true);

  animatebutton = new checkButton(646, 750, "step through", false);

  setStep = new SliderDivider(
    745,
    102,
    600,
    15,
    motionlocations.length - 1,
    [1],
    false
  );

  lastDisplacement = createVector(0, 0);
  mouseDisplacement = createVector(0, 0);
  thisTrackstep = createVector(0, 0);
  // for (var i=0; i<locationStrings.length; i++) {
  //     motionlocations[i]=JSON.parse("[" + locationStrings[i] + "]");
  //     }
  for (let i = 0; i < motionlocations.length; i++) {
    displacements[i] = createVector(
      motionlocations[i][0],
      motionlocations[i][1]
    );
  }

  //     noLoop();
}

function draw() {
  background(cWhite);
  if (backgroundbutton.buttonisChecked) {
    imageMode(CENTER);
    image(thebackground, width / 2, height / 2);
  }

  displacementsbutton.drawButton();
  animatebutton.drawButton();
  segmentsbutton.drawButton();
  backgroundbutton.drawButton();
  valuesbutton.drawButton();

  if (animatebutton.buttonisChecked) {
    setStep.draw();
  }

  if (valuesbutton.buttonisChecked) {
    if (
      (-300 < mouseX - width / 2) &
      (mouseX - width / 2 < 300) &
      (mouseY - width / 2 < 300) &
      (-300 < mouseY - width / 2)
    ) {
      mouseDisplacement.set(mouseX - width / 2, -mouseY + width / 2);
      meterinteger(mouseDisplacement.mag(), "", 20, 730);
      meterinteger(degrees(mouseDisplacement.heading()), "", 20, 765);
      push();
      translate(width / 2, height / 2);
      displacement(
        mouseDisplacement.mag() * 0.1,
        -degrees(mouseDisplacement.heading() - PI / 2),
        cideaGreen
      );
      pop();
    }
    words(
      "an image appears every 60 seconds; one unit on the screen represents 1 metre",
      100,
      740
    );
  }

  push();
  translate(width / 2, height / 2);
  // 	ellipse(0,0,5,5); origin marker
  fill(cideaBlue);
  for (let i = 0; i < motionlocations.length * setStep.getValue(); i++) {
    if (i != 0) {
      lastDisplacement.set(displacements[i - 1].x, -displacements[i - 1].y);
      thisTrackstep.set(displacements[i].x, -displacements[i].y);
      thisTrackstep.sub(lastDisplacement).mult(-1);
      angleforStep = thisTrackstep.heading() - PI / 2;
    } else {
      angleforStep = -displacements[i].heading() + PI / 2;
      thisTrackstep.set(displacements[i].x, -displacements[i].y);
      lastDisplacement.set(0, 0);
    }
    if (segmentsbutton.buttonisChecked) {
      trackSegment(
        lastDisplacement.x,
        lastDisplacement.y,
        displacements[i].x,
        -displacements[i].y
      ); //draws the trackSegments showing track
    }
    if (displacementsbutton.buttonisChecked) {
      displacement(
        displacements[i].mag() * 0.1,
        degrees(-displacements[i].heading() + PI / 2),
        cpovAlice
      ); //draws displacements
    }
    // 			ellipse(displacements[i].x,-displacements[i].y,8,8);// draws marker
    push();
    translate(displacements[i].x, -displacements[i].y);
    rotate(angleforStep);
    scale(0.5);
    imageMode(CENTER);
    image(thedisplaced, 0, 0);
    pop();
  }
  pop();

  titleBold("A motion diagram: a dragonfly over a pond");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}

function mousePressed() {
  setStep.mousePressed();
}

function mouseReleased() {
  setStep.mouseReleased();
  displacementsbutton.changeState();
  animatebutton.changeState();
  segmentsbutton.changeState();
  backgroundbutton.changeState();
  valuesbutton.changeState();
}
