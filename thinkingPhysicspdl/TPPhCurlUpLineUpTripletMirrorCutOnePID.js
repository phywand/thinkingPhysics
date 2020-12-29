// {TPPhCurlUpLineUpTripletMirrorCutOnePID}{800}{600}

const sourceLocX = 150;
const sourceLocY = 240;
const detectorLocX = 560;
const detectorLocY = 220;
const waypointLocX = 320;
const waypointoffset = 40;
const waypointLocY = 450;
const controllers = [];
const scaleFactorSurfaceExplore = 300;
const scaleFactorSourceDetector = 200;
const maxtime = 1000;

function preload() {
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
  createCanvas(800, 600);
  const yloc = 550;
  controllers[0] = new CreateControlPuck();
  controllers[0].create(sourceLocX, yloc);
  controllers[1] = new CreateControlStripHorizontal();
  controllers[1].create(waypointLocX, yloc);
  controllers[2] = new CreateControlPuck();
  controllers[2].create(detectorLocX, yloc);

  hidebutton = new CreateCheckButton(582 + 40, 60, "delete central path", false);
}

function draw() {
  background(CWHITE);
  push();
  translate(width / 2, waypointLocY);
  drawReflector("good", 90, 700);
  pop();

  hidebutton.drawButton();
  var sourcetodectector = createVector(0, 0); // not needed when there are waypoints
  var sourcetowaypoint = createVector(0, 0);
  var sourcetowaypointL = createVector(0, 0);
  var sourcetowaypointR = createVector(0, 0);
  var waypointtodetector = createVector(0, 0);
  var waypointtodetectorL = createVector(0, 0);
  var waypointtodetectorR = createVector(0, 0);

  var sourceOffset = createVector(
    controllers[0].getValues().xSet,
    -controllers[0].getValues().ySet
  ).mult(scaleFactorSourceDetector);
  var waypointOffset = createVector(
    -controllers[1].getValues().xSet,
    -controllers[1].getValues().ySet
  ).mult(scaleFactorSurfaceExplore);
  var dectectorOffset = createVector(
    controllers[2].getValues().xSet,
    -controllers[2].getValues().ySet
  ).mult(scaleFactorSourceDetector);

  var sourcelocation = createVector(sourceLocX, sourceLocY);
  var detectorlocation = createVector(detectorLocX, detectorLocY);
  var waypointlocation = createVector(waypointLocX, waypointLocY);
  var waypointlocationL = createVector(
    waypointLocX - waypointoffset,
    waypointLocY
  );
  var waypointlocationR = createVector(
    waypointLocX + waypointoffset,
    waypointLocY
  );

  sourcelocation.add(sourceOffset);
  waypointlocation.add(waypointOffset);
  waypointlocationL.add(waypointOffset);
  waypointlocationR.add(waypointOffset);
  detectorlocation.add(dectectorOffset);

  sourcetodectector.set(detectorlocation); // not needed when there are waypoints
  sourcetodectector.sub(sourcelocation); // not needed when there are waypoints

  sourcetowaypoint.set(waypointlocation);
  sourcetowaypoint.sub(sourcelocation);
  sourcetowaypointL.set(waypointlocationL);
  sourcetowaypointL.sub(sourcelocation);
  sourcetowaypointR.set(waypointlocationR);
  sourcetowaypointR.sub(sourcelocation);

  waypointtodetector.set(detectorlocation);
  waypointtodetector.sub(waypointlocation);
  waypointtodetectorL.set(detectorlocation);
  waypointtodetectorL.sub(waypointlocationL);
  waypointtodetectorR.set(detectorlocation);
  waypointtodetectorR.sub(waypointlocationR);

  push();
  translate(sourcelocation.x, sourcelocation.y);
  drawTransducer(CLIGHT, degrees(sourcetowaypoint.heading()));
  pop();

  push();
  translate(detectorlocation.x, detectorlocation.y);
  drawTransducer(CBLACK, degrees(waypointtodetector.heading()) - 180);
  pop();

  if (hidebutton.buttonisChecked == false) {
    showPathC(
      sourcelocation.x,
      sourcelocation.y,
      waypointlocation.x,
      waypointlocation.y,
      CCONCYAN
    );
    showPathC(
      detectorlocation.x,
      detectorlocation.y,
      waypointlocation.x,
      waypointlocation.y,
      CCONCYAN
    );
  }
  showPathC(
    sourcelocation.x,
    sourcelocation.y,
    waypointlocationL.x,
    waypointlocationL.y,
    CCONORANGE
  );
  showPathC(
    sourcelocation.x,
    sourcelocation.y,
    waypointlocationR.x,
    waypointlocationR.y,
    CCONPINK
  );
  showPathC(
    detectorlocation.x,
    detectorlocation.y,
    waypointlocationR.x,
    waypointlocationR.y,
    CCONPINK
  );
  showPathC(
    detectorlocation.x,
    detectorlocation.y,
    waypointlocationL.x,
    waypointlocationL.y,
    CCONORANGE
  );

  var triptime = sourcetowaypoint.mag() + waypointtodetector.mag();
  var triptimeL = sourcetowaypointL.mag() + waypointtodetectorR.mag();
  var triptimeR = sourcetowaypointL.mag() + waypointtodetectorR.mag();

  // the waypoints
  if (hidebutton.buttonisChecked == false) {
    push();
    translate(waypointlocation.x, waypointlocation.y);
    drawWaypoint(CCONCYAN);
    push();
    translate(0, 40);
    showDurationPoV(triptime, maxtime, CCONCYAN);
    pop();

    pop();
  }

  push();
  translate(waypointlocationL.x, waypointlocationL.y);
  drawWaypoint(CCONORANGE);
  push();
  translate(0, 40);
  showDurationPoV(triptimeL, maxtime, CCONORANGE);
  pop();

  pop();

  push();
  translate(waypointlocationR.x, waypointlocationR.y);
  drawWaypoint(CCONPINK);
  push();
  translate(0, 40);
  showDurationPoV(triptimeR, maxtime, CCONPINK);
  pop();

  pop();

  // the phasors
  push();
  translate(detectorlocation.x + 120, detectorlocation.y);
  if (hidebutton.buttonisChecked == false) {
    showPhasorMultiple(4, 0.24, [
      [triptimeL, CCONORANGE],
      [triptime, CCONCYAN],
      [triptimeR, CCONPINK],
    ]);
  } else {
    showPhasorMultiple(4, 0.24, [
      [triptimeL, CCONORANGE],
      [triptimeR, CCONPINK],
    ]);
  }
  pop();

  placeTitleBold("Exploring deleting paths via a mirror");
}

function mouseReleased() {
  hidebutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
