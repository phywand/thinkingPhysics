// FileName: TrPSSToCones06T

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	guide = loadImage("../__PDLgraphics/Sue04.svg");
}
function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("Stacked slices of time give a cone of locations lying in my past. Events within this cone can influence me.","chattercommentL",60,10,316);
	image(guide,20,100);
	scale(2);
	transitionStep(180,180,0);
}
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
