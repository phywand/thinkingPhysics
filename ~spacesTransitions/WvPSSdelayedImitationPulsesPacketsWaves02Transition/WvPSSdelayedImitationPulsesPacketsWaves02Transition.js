// WvPSSdelayedImitationPulsesPacketsWaves02Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("A source vibrates SymbolEndash moving up and down. At a short distance, this up-and-down motion is imitated after a delay. There is a mimic: a copy-cat. You can alter the amplitude or frequency of the vibrating source and the mimic will imitate the motion, after a delay. You can also set the delay.","comiccommentL",60,10,316);	push();
	pssguide(4,80,184,true);
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
