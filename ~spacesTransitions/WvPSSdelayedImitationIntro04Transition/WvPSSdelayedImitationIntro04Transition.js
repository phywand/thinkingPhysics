// WvPSSdelayedImitationIntro04Transition

function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("Return to up-and-down motions, but now with a whole set of mimics. You can again alter the amplitude and frequency of the source and the new motion will be imitated. The delay until a mimic imitates the source is set by the distance from the source (you could think of this as each mimic imitating its neighbour after a short delay). You can alter the delay. In this case the source produces a burst of vibrations.","topcomiccommentL",70,90,306);
	
	pssguide(4,80,10,true);
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
