// filename: MNTeachingPhotonsWhatIfPID
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
		mentondroid(cideaBlue,4,80,80,"What if...we could unify optics using photons?",180,45,"R");
	pop();
	
	push();
		mentondroid(cideaGreen,3,230,130,"Surely that couldn't work, could it?",140,45,"L");
	pop();
}

