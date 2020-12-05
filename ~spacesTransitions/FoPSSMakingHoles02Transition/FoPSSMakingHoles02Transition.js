// FoPSSMakingHoles02Transition

function setup(){
	createCanvas(400,400);
noLoop();
}
function draw() {
	background(cWhite);
	justWords("To think about bombardment on surfaces, we'll choose to make a simple boat. You'll be concentrating on the surfaces at the sides and the bottom.","topcomiccommentL",100,80,276);
	pssguide(4,90,40,true);
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
