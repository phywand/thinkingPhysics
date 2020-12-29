// MultiClocksNearMass


var stateof=0;
var runtime=0;
var pulseLocationAlice=-30;
var pulseLocationBob=-30;
var pulseLocationCharlie=-30;
var mirrorSeparation=120;
var lightSpeed =3;
var bounceAlice=-1;
var bounceBob=-1;
var bounceCharlie=-1;
const clockoffset=200;
const gSlowing = 0.8;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(600,650);
    
    controlbutton = createButton("run");
    controlbutton.position(20, height-50);
    controlbutton.mousePressed(whatshappening);
    controlbutton.class("PDLbutton");
    

}


function draw() {
    background(CWHITE);
    
    placeWords("furthest from the mass", 400, 170);
    placeWords("closest to the mass", 400, 570);
    

     
    
     switch(stateof){
        case 0:
//            ready to go
            controlbutton.html("run");
            resetVariables();
            break;
        case 1:
//            running
            controlbutton.html("pause");
            runtime++;
            pulseLocationAlice+=lightSpeed*bounceAlice;
            pulseLocationBob+=lightSpeed*bounceBob*gSlowing;
            pulseLocationCharlie+=lightSpeed*bounceCharlie*gSlowing*gSlowing;
            if (pulseLocationAlice>=0){
            bounceAlice=-bounceAlice;
            }
            if (pulseLocationAlice<=-(mirrorSeparation-10)){
            bounceAlice=-bounceAlice;
            }
            if (pulseLocationBob>=0){
            bounceBob=-bounceBob;
            }
            if (pulseLocationBob<=-(mirrorSeparation-10)){
            bounceBob=-bounceBob;
            }
            if (pulseLocationCharlie>=0){
            bounceCharlie=-bounceCharlie;
            }
            if (pulseLocationCharlie<=-(mirrorSeparation-10)){
            bounceCharlie=-bounceCharlie;
            }
            break;
        case 2:
//            paused
            controlbutton.html("reset");
            break;
                      }
    
    push();
    translate(160,170);
    drawPoV("AliceRight");
		push();
		translate(50, 60);
			fill(CPOVALICE);
			noStroke();
			rect(0, 0, 100, 10);
			rect(0, -mirrorSeparation, 100, 10);
			ellipse(50, pulseLocationAlice, 5, 5);
		pop();
    translate(0,clockoffset);
    drawPoV("BobRight");
		push();
		translate(50, 60);
			fill(CPOVBOB);
			noStroke();
			rect(0, 0, 100, 10);
			rect(0, -mirrorSeparation, 100, 10);
			ellipse(50, pulseLocationBob, 5, 5);
		pop();
	translate(0,clockoffset);
    drawPoV("CharlieRight");
		push();
		translate(50, 60);
			fill(CPOVCHARLIE);
			noStroke();
			rect(0, 0, 100, 10);
			rect(0, -mirrorSeparation, 100, 10);
			ellipse(50, pulseLocationCharlie, 5, 5);
		pop();    pop();
    
   

  placeTitleBold("Three light clocks, closer and closer to a gravitating mass");  
}


function whatshappening(){
    stateof++;
    stateof=stateof%3;
}

function resetVariables(){
	pulseLocationAlice=-30;
	pulseLocationBob=-30;
	pulseLocationCharlie=-30;
	bounceAlice=-1;
	bounceBob=-1;
	bounceCharlie=-1;
}
