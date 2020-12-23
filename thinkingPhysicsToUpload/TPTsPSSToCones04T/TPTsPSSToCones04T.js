// FileName: TrPSSToCones04T

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
	justWords("Influence from all around, across a surface but not up and down. Still there is a speed limit and influence still covers a foot every nanosecond. What region of this two dimensional space lies in my past depends on how far back in time I look.","topchattercommentL",90,90,286);
	image(guide,10,20);
	scale(2);
	transitionStep(180,180,0);
}
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
