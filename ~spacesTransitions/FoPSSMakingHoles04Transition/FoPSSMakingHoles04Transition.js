// FoPSSMakingHoles04Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("As the pressure increases with depth, so the bombardment gets more intense. Therefore you might expect different surfaces of the boat, at different depths, to experience different bombardments on each piece of exposed area.","topcomiccommentL",90,110,286);
	pssguide(1,20,40,false);
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
