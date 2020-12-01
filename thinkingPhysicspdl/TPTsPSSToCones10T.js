// FileName: TrPSSToCones10T

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	guide = loadImage("../__PDLgraphics/Sue08.svg");
}
function setup() {
	createCanvas(400,400);
	background(cWhite);
	noLoop();
}
function draw() {
	justWords("Influencing what’s all around, across a surface but not up and down. Still there is a speed limit and influence still covers a foot every nanosecond. The region of this two dimensional space that lies in my future depends on how far forward in time I project.","topchattercommentL",70,90,306);
	image(guide,20,20);
	scale(2);
	transitionStep(180,180,0);
}
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
