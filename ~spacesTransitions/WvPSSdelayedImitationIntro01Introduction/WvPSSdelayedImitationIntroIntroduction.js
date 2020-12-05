//  WvPSSdelayedImitationIntroIntroduction

function preload() {
	titleFont = loadFont("../../__support/Jost-700-Bold.ttf");
	romanFont= loadFont("../../__support/Jost-300-Light.ttf");
}
function setup(){
	createCanvas(600, 600);
	noLoop();
}
function draw() {
	background(cWhite);
	justWords("A source vibrates  SymbolEndash  moving to-and-fro or up-and-down. In either case you can alter the vibration amplitude and frequency. SpacingParabreak At a short distance, these motions are imitated after a delay, which you can alter.  SpacingParabreak As a result  of each mimic copying its neighbour, with the first mimic copying the source, a pulse travels.","topcomiccommentL",60,150,400);
	push();
		scale(2);
		discoursedroid(11,20,40,false);
	pop();
	
	push();
	translate(160, 476);
	displacement(4, 0, cideaBlue);
	leadlinediagram("source\ndisplacement", 0, -20);
	translate(250, 0);
	displacement(4, 0, cideaGreen);
	leadlinediagram("mimic\ndisplacement", 0, -20);
	pop();

	titleBold("From delayed imitation to travelling pulses");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
