// AliceFixedClock


var stateof=0;
var runtime=0;
var pulseLocationAlice=-30;
var mirrorSeparationAlice=120;
var lightSpeed =3;
var bounceAlice=-1;
const clockoffset=200;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(600,300);
    
    controlbutton = createButton("run");
    controlbutton.position(20, height-50);
    controlbutton.mousePressed(whatshappening);
    controlbutton.class("PDLbutton");
    

}


function draw() {
    background(cWhite);
    

     
    
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
            if (pulseLocationAlice>=0){
            bounceAlice=-bounceAlice;
            }
            if (pulseLocationAlice<=-(mirrorSeparationAlice-10)){
            bounceAlice=-bounceAlice;
            }
            break;
        case 2:
//            paused
            controlbutton.html("reset");
            break;
                      }
    
    push();
    translate(200,170);
    PoV("AliceRight");
		push();
		translate(50, 60);
			fill(cpovAlice);
			noStroke();
			rect(0, 0, 100, 10);
			rect(0, -mirrorSeparationAlice, 100, 10);
			ellipse(50, pulseLocationAlice, 5, 5);
		pop();
    pop();
    
   

  titleBold("Alice and her light clock");  
}


function whatshappening(){
    stateof++;
    stateof=stateof%3;
}

function resetVariables(){
    pulseLocationAlice=-30;
    bounceAlice=-1;
}
