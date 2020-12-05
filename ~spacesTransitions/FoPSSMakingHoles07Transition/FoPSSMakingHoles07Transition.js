// FoPSSMakingHoles07Transition

function setup(){
	createCanvas(400,400);
	noLoop();
}
function draw() {
	background(cWhite);
	justWords("As the pressure increases with depth, so the bombardment on any surface at that depth increases. Bombardments on the left and right sides of the boat will therefore be equal and opposite, but the bombardments on top and bottom will be different. Add the forces to get the buoyancy force: it'll be equal but opposite to the gravity force. The buoyancy force is your support force.","topcomiccommentL",95,70,281);
	pssguide(7,128,15,true);
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
