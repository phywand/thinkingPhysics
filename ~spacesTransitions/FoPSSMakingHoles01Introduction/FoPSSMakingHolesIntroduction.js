//  FoPSSMakingHolesIntroduction

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand_Bold.ttf");	
	romanFont= loadFont("../../__support/Jost-300-Light.ttf");	
	italicFont= loadFont("../../__support/Jost-300-LightItalic.ttf");	
	titleFont = loadFont("../../__support/Jost-700-Bold.ttf");
	boat = loadImage("../../__PDLgraphics/CoraclePaddler.svg");
}

function setup(){
	createCanvas(600,600);
		noLoop();
}

function draw() {
	background(cWhite);
	justWords("You're going to think about making holes in water, using boats. Making these holes results in a buoyancy force on the boat, which supports the boat and its cargo. Buoyancy forces only occur in fluids, so you'll be thinking about pressure and the particles of the fluid bombarding the surfaces of the boat.","topcomiccommentL",80,100,506-29);
	
	push();
		translate(200,240);
		noStroke();
		fill(cWater);
		rect(-20,100,220,100);
		image(boat,0,0);
    pop();
	
	pssguide(11,20,60,false);




	titleBold("Making holes in water and buoyancy: particle bombardment");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
