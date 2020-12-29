// {FMSequencingWavesWhatIfPID}{300}{200}
var mentonrep = new Scribble();
function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
}

function setup(){
    createCanvas(300	, 200);
    noLoop();
   }

function draw() {
    background(CWHITE);

    push();
		placeMentonDroid(CBOD3,8,60,75,"What if...we took the theoretical idea of a wave seriously, but early on?",240,45,"R");
	pop();

	push();
		placeMentonDroid(CBOD4,7,230,132,"No conflating theory with phenomena? No 'light is a wave'.",200,45,"L");
	pop();
}

