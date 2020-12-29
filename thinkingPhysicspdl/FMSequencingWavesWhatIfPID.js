// filename: MNTeachingWavesWhatIfPID
var mentonrep = new Scribble();
function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
}

function setup(){
    createCanvas(300	, 200);
    noLoop();
   }

function draw() {
    background(cWhite);
    
    push();
		mentondroid(cideaBlue,8,60,75,"What if...we took the theoretical idea of a wave seriously, but early on?",240,45,"R");
	pop();
	
	push();
		mentondroid(cideaGreen,7,230,132,"No conflating theory with phenomena? No 'light is a wave'.",200,45,"L");
	pop();
}

mentondr
