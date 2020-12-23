// FileName: TrPSSToCones08T

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	guide = loadImage("../__PDLgraphics/Sue03.svg");
}
function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("Vary the sphere of influence - look further ahead. Project further into the future to figure out your influence by a larger volume. Waiting longer means waiting 1 nanosecond per foot ( 1foot is about 30 cm). This delay is universal as light travels at 300 000 000 metres per second.","chattercommentL",60,10,316);
	image(guide,20,100);
	scale(2);
	transitionStep(180,180,90);
}
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
