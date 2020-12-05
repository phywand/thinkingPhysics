// WvPSSdelayedImitationIntro05Transition

function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("Now a simple up-and-down shake, to make things simpler again. SpacingParabreak Now it may be easier to follow what is going on.","topcomiccommentL",80,100,296);
	pssguide(1,100,20,true);
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
