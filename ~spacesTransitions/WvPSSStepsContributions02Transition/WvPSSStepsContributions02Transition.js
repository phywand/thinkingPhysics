// WvPSSStepsContributions02Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("By altering the delay between a source and its imitator, you can make the two be out of step. SpacingParabreak That is true whatever the amplitude or frequency.","topcomiccommentL",60,110,316);
	pssguide(0,80,40,true);
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
