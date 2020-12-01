// filename: TrPSSToCones01PIntroduction

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
	guide = loadImage("../__PDLgraphics/Sue09.svg");
}
function setup(){
	createCanvas(600, 600);
	noLoop()
}
function draw() {
	background(cWhite);
	
	justWords("The speed of light is the universal speed. No influence from an event can be a apart of my past unless it could have reached me. Similarly I can only affect locations in the future where enough time has passed for the influence to reach that space. This universal speed has consequences for the structure of space-time: it is made of cones.","topchattercommentL",90,150,466);
	image(guide,20,100);




	title("Cones show possible influences");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
