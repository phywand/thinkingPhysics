// FileName: TrPSSToCones14T

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	guide = loadImage("../__PDLgraphics/Sue03.svg");
}
function setup() {
	createCanvas(400,400);
	background(CWHITE);
	noLoop();
}
function draw() {
	justplaceWords("My present is where my past and my future connect: my here and now. Alice, Bob or Charlie may have different here and now. ","chattercommentL",60,10,316);
	image(guide,20,100);
	scale(2);
	placeTransitionStep(180,180,90);
}
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
