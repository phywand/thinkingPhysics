// {FMSequencingKinematicsWhatIfPID}{300}{200}
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
		placeMentonDroid(CBOD2,0,60,75,"What if...we used 2D maps of journeys and vectors to improve kinematics teaching?",240,45,"R");
	pop();

	push();
		placeMentonDroid(CBOD1,5,240,132,"Sounds hard...maybe not: vectors are 'arrows that can be added'. ",215,45,"L");
	pop();
}


