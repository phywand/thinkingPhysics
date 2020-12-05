// WvPSSdelayedImitationPatterns04Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Finally, a continuous set of vibrations at the source, travelling because of delayed imitation.","topcomiccommentL",120,90,256);
	pssguide(4,120,40,true);
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
