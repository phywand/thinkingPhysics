// WvPSSdelayedImitationPulsesPacketsWaves04Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Now for a source pattern where the delayed imitation by the mimics looks like sinusoidal (sine) waves.","topcomiccommentL",100,120,276);
	pssguide(8,120,40,true);
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
