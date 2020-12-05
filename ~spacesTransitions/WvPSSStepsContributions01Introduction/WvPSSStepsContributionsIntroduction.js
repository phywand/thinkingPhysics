//  WvPSSStepsContributionsIntroduction

function preload() {
	
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand_Bold.ttf");	
romanFont= loadFont("../../__support/Jost-300-Light.ttf");	
italicFont= loadFont("../../__support/Jost-300-LightItalic.ttf");	
titleFont = loadFont("../../__support/Jost-700-Bold.ttf");
}
function setup(){
	createCanvas(600, 600);
	noLoop();
}
function draw() {
	background(cWhite);
	
	justWords("By altering the delay between a source and its imitator, you can make them out of step, by altering the trip time from source to imitator (set by speed at which the path is covered and the length of the path). SpacingParabreak The imitator could be at a detector. If there is more than one path from source to detector,  then contributions from those paths might end up in or out of step, as a result of the trip times for those paths. Add the contributions to find the resultant displacement at the detector. SpacingParabreak The amplitude at the detector could be large, zero, or anything in between. It all depends on whether the contributions are in or out of step.","topchattercommentR",20,230,420);
	

	
	push();
		translate(60,100);
		transducer(clight, 20);
		translate(150,-10);
		waypoint(cconcyan);
		translate(-20, 120);
		waypoint(cconorange);
		translate(150, -30);
		transducer(cideaGrey, 210);
	pop();
	pathC(60, 100, 210, 90, cconcyan);
	pathC(210, 90,340,180, cconcyan);
	pathC(60, 100, 190, 210, cconorange);
	pathC(190, 210,340,180, cconorange);

	push();
		scale(2);
		discoursedroid(11,250,40,true);
	pop();
	titleBold("Contributions in and out of step: superposition");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
