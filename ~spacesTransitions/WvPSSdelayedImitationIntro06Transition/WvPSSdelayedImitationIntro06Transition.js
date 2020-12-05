// WvPSSdelayedImitationIntro06Transition


function setup(){
	createCanvas(400,400);
}
function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("Back to a bit more complexity: a pulse with to-and-fro vibrations. Again notice how the delayed imitation results in the pulse travelling.","topcomiccommentL",60,110,316);
	pssguide(1,80,20,true);
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
