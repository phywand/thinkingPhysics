// WvPSSdelayedImitationPatterns03Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Still on a roll with lots of mimics, but now with a burst of vibrations at the source. Notice the burst travelling as a result of delayed imitation.","topcomiccommentL",90,180,286);
	pssguide(1,20,40,false);
	push();
		scale(2);
		transitionStep(180,180,90);
	pop();
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

