// WvPSSdelayedImitationPulsesPacketsWaves03Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("A source vibrates SymbolEndash moving to and fro. At a short distance, this to-and-fro motion is imitated after a delay. There is a mimic: a copy-cat. You can alter the amplitude or frequency of the vibrating source and the mimic will imitate the motion, after a delay. You can also set the delay. You can also chose to either see the displacements, or only a bar as a simplified representation of a displacement.","topcomiccommentL",60,90,316);
	pssguide(2,90,16,true);
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
