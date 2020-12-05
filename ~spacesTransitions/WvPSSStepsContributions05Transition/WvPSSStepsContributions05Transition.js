// WvPSSStepsContributions05Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("The contributions add, tip to tail, to give a resultant. This is the displacement at the detector as a result of the contributions from both paths. SpacingParabreak If the contributions are in step the displacement is large: if they are completely out of step the displacement is zero, so the amplitude could also be zero.","topcomiccommentL",80,70,296);
	pssguide(6,20,40,false);
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
