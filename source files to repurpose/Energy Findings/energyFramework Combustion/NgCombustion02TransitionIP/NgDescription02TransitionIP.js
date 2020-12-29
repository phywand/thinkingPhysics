// filename: NgDescription02TransitionIP

var transitionInsightPhysical ="To get started, you need to describe what happens physically. SpacingLinebreak Decide on a pair of snapshots during the process (choose cunningly and describe carefully so you can calculate or reason about the energy shifted between the snapshots).";

function preload() {
	romanFont= loadFont("../__support/Jost-300-Light.ttf");

}
function setup(){
    createCanvas(300, 300);
    noLoop();
    background(cSIDbg);
    STPlink = createButton("energy descriptions");
    STPlink.position(width-230, height-80);
    STPlink.mousePressed(showguide);
    STPlink.class("PDLbutton");
}

function draw() {
    placePSSDroid(11,10,190,false);
    justplaceWords(transitionInsightPhysical,"comiccommentL",10, 0,width-40);
    push();
        scale(2.0);
        placeTransitionStep(width-170,height-170,0);
    pop();
}

function showguide(){
    window.open('https://slowthinkingphysics.net/NgFourWiseStepsPID', '_blank')
}
