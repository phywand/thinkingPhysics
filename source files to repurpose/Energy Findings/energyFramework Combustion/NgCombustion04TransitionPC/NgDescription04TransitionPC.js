// filename: NgDescription04TransitionPC

var transitionPhysicalConceptual ="Use clues from the physical descriptions to identify the stores. SpacingParabreak Do not include stores where there is no change in energy.";

function preload() {
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
}
function setup(){
    createCanvas(300, 300);
    noLoop();
    background(cSIDbg);
    STPlink = createButton("a guide to stores");
    STPlink.position(width-200, height-112);
    STPlink.mousePressed(showguide);
    STPlink.class("PDLbutton");
    justplaceWords(transitionPhysicalConceptual,"comiccommentL",10, 0,width-40);
}

function draw() {
    placePSSDroid(2,90,140,true);
    push();
        scale(2.0);
        placeTransitionRedescribe(width-170,height-170,90);
    pop();
}

function showguide(){
    window.open('https://slowthinkingphysics.net/NgEightStoresIdentifyPID', '_blank')
}



