// filename: NgDescription06TransitionCT.js

var transitionConceptualTest = "The energy shifted from the one store is shared between the remaining stores. SpacingParabreak How much energy is shifted and how this quantity of energy is shared out determines what is possible or impossible."

function preload() {
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
}

function setup(){
    createCanvas(300, 300);
    noLoop();
    background(cSIDbg);
    justplaceWords(transitionConceptualTest,"comiccommentL",10, 0,width-40);
}

function draw() {
    placePSSDroid(5,50,166,true);
    push();
        scale(2.0);
        placeTransitionStep(width-170,height-170,0);
    pop();
}





