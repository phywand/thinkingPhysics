//  WvPSSdelayedImitationPulsesPacketsWavesIntroduction

function preload() {
	
chatterFont= loadFont("../../__support/SF_Cartoonist_Hand_Bold.ttf");	
romanFont= loadFont("../../__support/Jost-300-Light.ttf");	
italicFont= loadFont("../../__support/Jost-300-LightItalic.ttf");	
titleFont = loadFont("../../__support/Jost-700-Bold.ttf");
}
function setup(){
	createCanvas(600, 600);
	
}
function draw() {
	background(cWhite);
	justWords("A source vibrates SymbolEndash moving up-and-down. A short distance away a mimic copies this motion. SpacingParabreak A pulse of up-and-down motion can travel away from the source as a result of a set of such mimics, each copying the motion  of its neighbour after a short delay. SpacingParabreak A burst of vibrations at the source can also travel in the same way. SpacingParabreak Finally continuous vibrations at the source travel, also as a result of delayed imitation. SpacingParabreak This is a continuous wave.","topcomiccommentL",108,170,450);




	push();
		scale(2);
		discoursedroid(11,20,40,false);
	pop();




	titleBold("Linking delayed imitation to continuous waves");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
