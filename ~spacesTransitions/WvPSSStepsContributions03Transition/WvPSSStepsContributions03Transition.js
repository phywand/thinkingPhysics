// WvPSSStepsContributions03Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Alter the paths from source to detector by dragging the way points. As you drag notice the varying trip times. You can also alter the locations of the source and detector. SpacingParabreak To keep things simple, the speed  at which the path is covered is constant.","topcomiccommentL",90,100,286);
	pssguide(5,80,40,true);
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
