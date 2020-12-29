// {TPPhTwoArowPathWaypointContributionsBrightnessFreezePID}{800}{650}

const numberWaypoints = 2; // can usefully be 2-4, without screen getting too congested
var timeoclock = 0;

const sourceinitialLoc = [70, 250];
const detectorinitialLoc = [650, 320];

const SDcontrollers = [];
const WPcontrollers = [];
const scaleFactorWPExplore = 500;
const scaleFactorSDExplore = 300;
const triptimes = [];
const waypointlocations = [];
const waypointoffsets = [];
const waypointlocationsadjusted = [];
const sourcetowaypoints = [];
const waypointstodetector = [];

var sourcelocation = "";
var sourcelocationadjusted = "";
var detectorlocation = "";
var detectorlocationadjusted = "";

const maxtime = 1000;
const yloc = 500;
const contribcolours = [
  CCONGREEN,
  CCONPINK,
  CCONORANGE,
  CCONLIGHTGREEN,
  CCONGRAY,
  CCONPURPLE,
  CCONCYAN,
];
const sfTriptimes = 40;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 650);

  SDcontrollers[0] = new CreateControlPuck();
  SDcontrollers[0].create(sourceinitialLoc[0], yloc);
  SDcontrollers[1] = new CreateControlPuck();
  SDcontrollers[1].create(detectorinitialLoc[0], yloc);

  sourcelocation = createVector(sourceinitialLoc[0], sourceinitialLoc[1]);
  detectorlocation = createVector(detectorinitialLoc[0], detectorinitialLoc[1]);
  sourcelocationadjusted = createVector(
    sourceinitialLoc[0],
    sourceinitialLoc[1]
  );
  detectorlocationadjusted = createVector(
    detectorinitialLoc[0],
    detectorinitialLoc[1]
  );

  for (let i = 0; i < numberWaypoints; i++) {
    WPcontrollers[i] = new CreateControlPuck();
    const WPinitialLocx = 300 + i * 150;
    const WPinitialLocy = 300;
    WPcontrollers[i].create(WPinitialLocx, yloc);
    waypointlocations[i] = createVector(WPinitialLocx, WPinitialLocy);
    waypointlocationsadjusted[i] = createVector(WPinitialLocx, WPinitialLocy);
    waypointoffsets[i] = createVector(0, 0);
    sourcetowaypoints[i] = createVector(0, 0);
    waypointstodetector[i] = createVector(0, 0);
  }
  spinbutton = new CreateCheckButton(592 + 46, 60, "freeze spinning", false);
}

function draw() {
  background(CWHITE);

  var sourceangle = 0;
  var detectorangle = 0;
  spinbutton.drawButton();

  var sourceOffset = createVector(
    SDcontrollers[0].getValues().xSet,
    -SDcontrollers[0].getValues().ySet
  ).mult(scaleFactorSDExplore);
  var detectorOffset = createVector(
    SDcontrollers[1].getValues().xSet,
    -SDcontrollers[1].getValues().ySet
  ).mult(scaleFactorSDExplore);

  sourcelocation.set(sourceOffset).add(sourcelocationadjusted);
  detectorlocation.set(detectorOffset).add(detectorlocationadjusted);

  for (let i = 0; i < numberWaypoints; i++) {
    waypointoffsets[i] = createVector(
      WPcontrollers[i].getValues().xSet,
      -WPcontrollers[i].getValues().ySet
    ).mult(scaleFactorWPExplore);
    waypointlocations[i].set(
      waypointoffsets[i].add(waypointlocationsadjusted[i])
    );

    push();
    translate(waypointlocations[i].x, waypointlocations[i].y);
    drawWaypoint(contribcolours[i]);
    pop();

    showPathC(
      sourcelocation.x,
      sourcelocation.y,
      waypointlocations[i].x,
      waypointlocations[i].y,
      contribcolours[i]
    );
    showPathC(
      detectorlocation.x,
      detectorlocation.y,
      waypointlocations[i].x,
      waypointlocations[i].y,
      contribcolours[i]
    );

    waypointstodetector[i].set(detectorlocation).sub(waypointlocations[i]);
    sourcetowaypoints[i].set(sourcelocation).sub(waypointlocations[i]);
    triptimes[i] = sourcetowaypoints[i].mag() + waypointstodetector[i].mag();
    push();
    translate(300 + i * 150, 620);
    showDurationPoV(triptimes[i], maxtime, contribcolours[i]);
    pop();
    sourcetowaypoints[i].mult(-1);
    sourceangle += sourcetowaypoints[i].heading();
    sourceangle = sourceangle / numberWaypoints;
    detectorangle += waypointstodetector[i].heading();
    detectorangle = detectorangle / numberWaypoints;
  }
  push();
  translate(sourcelocation.x, sourcelocation.y);
  showPhasorArrow(4, 0.08, timeoclock, cdeviceGrey);
  push();
  rotate(PI);
  drawTransducer(CLIGHT, degrees(sourceangle - PI));
  translate(abs(10 * sin(degrees(sourceangle - PI))), 0);
  pop();
  pop();

  push();
  translate(detectorlocation.x, detectorlocation.y);
  drawTransducer(CIDEAGREY, degrees(detectorangle - PI));
  pop();

  placeWords("source\nlocation", sourceinitialLoc[0] - 38, yloc + 60);
  placeWords("detector\nlocation", detectorinitialLoc[0] - 38, yloc + 60);
  placeWords("green\nwaypoint", 260, yloc + 60);
  placeWords("pink\nwaypoint", 260 + 150, yloc + 60);

  push();
  translate(detectorlocation.x, detectorlocation.y);
  showPhasorMultipleResultantBrightness(4, 0.08, [
    [timeoclock - triptimes[0], contribcolours[0]],
    [timeoclock - triptimes[1], contribcolours[1]],
  ]);
  pop();

  if (spinbutton.buttonisChecked == false) {
    timeoclock++;
  }

  placeTitleBold(
    "Two paths, defined by two waypoints, contributions, resultant and brightness"
  );
}

function mouseReleased() {
  spinbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
