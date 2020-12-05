// WvPSSStepsContributions04Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Now you have vibrations from two paths arriving at a detector. Each makes a contribution. The contributions may be in or out of step, depending on the trip time for each. Remember that this trip time depends on the path length, set by the waypoints.","chattercommentL",70,10,306);
	pssguide(11,20,40,false);
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
