//  WvPSSdelayedImitationPatternsIntroduction

function preload() {
	
	chatterFont= 	
titleFont = loadFont("../../__support/Jost-700-Bold.ttf");
}
function setup(){
createCanvas(600,600);
}
function draw() {
	background(cWhite);
	justWords("The patterns of vibration in the source – how it moves up and down or to and fro are imitated with a delay that depends on the distance from the source. SpacingParabreak    Here you can alter the patterns of motion of the source and then see what the resulting 'waveforms' look like.","topcomiccommentL",60,160,400);

	push();
	scale(2);
	discoursedroid(11,20,40,false);
pop();




	titleBold("Patterns of motion and waveforms");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
