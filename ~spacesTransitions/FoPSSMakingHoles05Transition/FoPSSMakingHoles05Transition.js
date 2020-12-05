// FoPSSMakingHoles05Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("Focus on a surface, and vary the pressure on either side. Increasing the pressure increases the bombardment. A difference in bombardment results in a force. Note that there are both the bottom surface and the two surfaces that make up the sides of the boat to think about.","topcomiccommentL",60,160,316);
	pssguide(9,15,20,false);
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
