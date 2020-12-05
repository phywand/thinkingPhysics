// WvPSSdelayedImitationIntro02Transition

function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("A source vibrates – moving up and down. At a short distance, this up-and-down motion is imitated after a delay. There is a mimic: a copy-cat. You can alter the amplitude or frequency of the vibrating source and the mimic will imitate the motion, after a delay. You can also set the delay.","topcomiccommentL",80,110,296);

	pssguide(8,90,30,true);
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
