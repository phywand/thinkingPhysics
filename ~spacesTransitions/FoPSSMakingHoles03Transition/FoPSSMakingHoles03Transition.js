// FoPSSMakingHoles03Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("In a fluid, pressure increases with depth. So the sides of the boat will be at the same pressure, but the top and bottom will be a different pressures. ","topcomiccommentL",80,120,296);
	pssguide(2,90,40,true);
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
