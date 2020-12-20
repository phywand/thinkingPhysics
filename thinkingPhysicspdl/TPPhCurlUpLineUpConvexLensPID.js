// {TPPhCurlUpLineUpConvexLensPID}{900}{700}

const numberWaypoints = 7;
const verticalspacingWaypoints = 80;
const sourceLocX = 130;
const diagramcentreLocY = 380;
const detectorLocX = 740;
const waypointLocX = 400;
const controllers = [];
const waypointlocations = [];
const waypointlocationsL = [];
const waypointlocationsR = [];
var waypointoffsets = [];
var waypointoffsetsStet = [];
const betweenwaypoints = [];
const sourcetowaypoints = [];
const waypointstodetector = [];
var triptimes = [];
var sourcelocation = "";
var detectorlocation = "";
const scaleFactorLens = 150;
const maxtime = 1000;
const contribcolours = [
  ccongreen,
  cconpink,
  cconorange,
  cconlightgreen,
  ccongray,
  cconpurple,
  cconcyan,
];
const refractiveIndex = 2.0;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(900, 700);
  for (let i = 0; i < numberWaypoints; i++) {
    controllers[i] = new controlStripHorizontalPositive();
    let yloc =
      diagramcentreLocY -
      3 * verticalspacingWaypoints +
      i * verticalspacingWaypoints; //3 above, 3 below, one on centre line
    controllers[i].create(810, yloc);
    waypointlocations[i] = createVector(waypointLocX, yloc);
    waypointlocationsL[i] = createVector(waypointLocX, yloc);
    waypointlocationsR[i] = createVector(waypointLocX, yloc);
    waypointoffsetsStet[i] = createVector(0, 0);
    betweenwaypoints[i] = createVector(0, 0);
    sourcetowaypoints[i] = createVector(0, 0);
    waypointstodetector[i] = createVector(0, 0);
  }

  detectorlocation = createVector(detectorLocX, diagramcentreLocY);
  sourcelocation = createVector(sourceLocX, diagramcentreLocY);
}

function draw() {
  background(cWhite);

  for (let i = 0; i < numberWaypoints; i++) {
    waypointoffsets[i] = createVector(
      -controllers[i].getValues().xSet,
      -controllers[i].getValues().ySet
    ).mult(scaleFactorLens);
    waypointoffsetsStet[i].set(waypointoffsets[i]); // not to be changed during the iteration
    waypointlocationsL[i].set(
      waypointoffsets[i].mult(-1).add(waypointlocations[i])
    );
    waypointoffsets[i].set(waypointoffsetsStet[i]); // reset the offset value
    waypointlocationsR[i].set(waypointoffsets[i].add(waypointlocations[i]));
    push();
    translate(waypointlocationsL[i].x, waypointlocationsL[i].y);
    waypoint(contribcolours[i]);
    pop();
    push();
    translate(waypointlocationsR[i].x, waypointlocationsR[i].y);
    waypoint(contribcolours[i]);
    pop();
    pathC(
      sourcelocation.x,
      sourcelocation.y,
      waypointlocationsL[i].x,
      waypointlocationsL[i].y,
      contribcolours[i]
    );
    pathC(
      waypointlocationsL[i].x,
      waypointlocationsL[i].y,
      waypointlocationsR[i].x,
      waypointlocationsR[i].y,
      contribcolours[i]
    );
    pathC(
      detectorlocation.x,
      detectorlocation.y,
      waypointlocationsR[i].x,
      waypointlocationsR[i].y,
      contribcolours[i]
    );
    if (i != 6) {
      noStroke();
      fill("rgba(120,120,120, 0.15)");
      beginShape();
      vertex(waypointlocationsL[i].x, waypointlocationsL[i].y);
      vertex(waypointlocationsL[i + 1].x, waypointlocationsL[i + 1].y);
      vertex(waypointlocationsR[i + 1].x, waypointlocationsR[i + 1].y);
      vertex(waypointlocationsR[i].x, waypointlocationsR[i].y);
      endShape(CLOSE);
      stroke(cBlack);
      // line(waypointlocationsL[i].x, waypointlocationsL[i].y, waypointlocationsL[i+1].x, waypointlocationsL[i+1].y);
      // 	line(waypointlocationsR[i].x, waypointlocationsR[i].y, waypointlocationsR[i+1].x, waypointlocationsR[i+1].y);
    }
    waypointstodetector[i].set(detectorlocation).sub(waypointlocationsR[i]);
    sourcetowaypoints[i].set(sourcelocation).sub(waypointlocationsL[i]);
    betweenwaypoints[i].set(waypointlocationsL[i]).sub(waypointlocationsR[i]);
    triptimes[i] =
      sourcetowaypoints[i].mag() +
      waypointstodetector[i].mag() +
      refractiveIndex * betweenwaypoints[i].mag();
    // durations
    push();
    translate(48, waypointlocations[i].y);
    durationpov(triptimes[i], maxtime, contribcolours[i]);
    stroke(contribcolours[i]);
    strokeWeight(4);
    strokeCap(SQUARE);
    line(
      -16 - abs(i - 3) * 4,
      0,
      -16 - abs(i - 3) * 4,
      -((triptimes[i] - triptimes[3]) / 2)
    ); // compare to centre one
    pop();
  }

  push();
  translate(detectorlocation.x, detectorlocation.y);
  transducer(cBlack, 180);
  pop();

  push();
  translate(sourcelocation.x, sourcelocation.y);
  transducer(clight, 0);
  pop();

  push();
  translate(detectorlocation.x, detectorlocation.y);
  phasormultiple(3, 0.08, [
    [triptimes[0], contribcolours[0]],
    [triptimes[1], contribcolours[1]],
    [triptimes[2], contribcolours[2]],
    [triptimes[3], contribcolours[3]],
    [triptimes[4], contribcolours[4]],
    [triptimes[5], contribcolours[5]],
    [triptimes[6], contribcolours[6]],
  ]);
  pop();

  titleBold("Engineering a lens using curling up and lining up");
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
