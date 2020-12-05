// WvPSSStepsContributions06Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Nearly there! There is a vibration at the source, imitated at the detector, after a delay set by the trip time for a path. The paths set the trip times, which set how much in or out of step the contributions are. Add the contributions to find the resultant displacement at the detector. SpacingParabreak The amplitude at the detector could be large, zero, or anything in between. It all depends on whether the contributions are in or out of step.","topcomiccommentL",60,70,316);
	pssguide(11,5,40,false);
	push();
		scale(2);
		transitionStep(180,180,0);
	pop();
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
