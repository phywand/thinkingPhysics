// {TPTcMappingsRopeElectricLoopsPID}{880}{400}

var lastposition = (runtime = 0);
let ropespeed = 3;
let displayspeed = ropespeed / 4;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/Jost-300-Light.ttf");
  italicFont = loadFont("../__support/Jost-300-LightItalic.ttf");
  titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup() {
  createCanvas(880, 400);
  //     noLoop();
  justWords(
    "rope loop SymbolArrowright electrical loop SpacingParabreak force of QuoteThis{battery hand} SymbolArrowright potential difference or voltage SpacingParabreak grab of QuoteThis{resistor hand}  SymbolArrowright electrical resistance SpacingParabreakthe flow of rope SymbolArrowright electrical current SpacingParabreakFractionABC{flow}{pull}{grab} SymbolArrowright FractionABC{current}{voltage}{resistance}",
    "topthinkingL",
    20,
    100,
    400
  );
}

function draw() {
  background(cWhite);

  ropeloop(464, 314, 120, 213, cideaBlue, lastposition);

  push();
  translate(620, 207);
  circuitSimple("bulb");
  pop();

  titleBold(
    "Mapping physical quantities and relationships from rope loop to electrical loop"
  );
  runtime++;
  if (ropespeed != 0) {
    lastposition = runtime * displayspeed;
  }
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
