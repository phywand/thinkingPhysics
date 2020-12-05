// WvPSSdelayedImitationPatterns02Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
		justWords("A source vibrates SymbolEndash moving up and down. At a short distance, this up-and-down motion is imitated after a delay. There is a mimic: a copy-cat. You can alter the amplitude or frequency of the vibrating source and the mimic will imitate the motion, after a delay. You can also set the delay. Now try for lots of mimics, but with a simple up and down shake for the source SymbolEndash this is what will get imitated.","topcomiccommentL",80,80,296);
	pssguide(5,75,40,true);
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
