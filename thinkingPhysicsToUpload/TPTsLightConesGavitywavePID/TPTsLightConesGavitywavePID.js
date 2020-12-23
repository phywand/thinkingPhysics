// filename: LightConesGavitywave

var stateof=0;
var runtime=0;
const thedelay=200;
const mimicoffset=40;
const theamplitude=0.3;
const thefrequency=0.008;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

	PoVeyeball = loadModel('../__PDLGraphics/3Dobjects/OmniEye-Ball.obj', true);
	PoVIris = loadModel('../__PDLGraphics/3Dobjects/OmniEye-Iris.obj', true);
	PoVPupil = loadModel('../__PDLGraphics/3Dobjects/OmniEye-Pupil.obj', true);
	
}
function setup(){
  createCanvas(800, 700, WEBGL);
justWords("Light cones as a gravitational wave passes", "invertedtitle", 20, 10, width-60);

	controlbutton = createButton("gravitational wave");
    controlbutton.position(20, height-50);
    controlbutton.mousePressed(whatshappening);
    controlbutton.class("PDLbutton");

}

function draw(){
 background(cWhite);
   orbitControl();
   
   if (focused){
    
    
    switch(stateof){
        case 0:
//            ready to go
            controlbutton.html("gravitational wave");
            resetVariables();

            break;
        case 1:
//            running
            controlbutton.html("no wave");
            runtime++;
            break;
                      }
    
    
    
    
    if (runtime!=0){
		for (k = 0; k < 4; k++) {
			for (i = -2; i <2; i++) {
				for (j = 0; j < 8; j++) {
					push();
						translate((j-4)*120,i*120,-120*k);
// 		rotateZ(theamplitude*exp(-0.25*pow(thefrequency*runtime,2))*cos(degrees(0.04*thefrequency*(runtime-j*thedelay)))*PI/32);
		rotateZ(theamplitude*cos(degrees(0.04*thefrequency*runtime-j*thedelay)));
						lightcone(60,cpovAliceCone);
					pop();

				}
			}	
		}
	}

	if (runtime==0){
		for (k = 0; k < 4; k++) {
			for (i = -2; i <2; i++) {
				for (j = -4; j < 4; j++) {	
					push();
						translate(j*120,i*120,-120*k);
						lightcone(60,cpovAliceCone);
					pop();
				}
			}	
		}
    }

   
   
	push();
		translate(-300, 260,0);
		rotateZ(-2*PI/3);
		OmniEye(cpovAlice);
	pop();
 }
	
	
	
	 



function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
function OmniEye(POVcolour){
push();
scale(0.2);
	noStroke();
	ambientMaterial(cdeviceLightGrey);
	model(PoVeyeball);
	translate(0,100,0);
	push();
	scale(0.6);
	ambientMaterial(POVcolour);
	model(PoVIris);
	pop();
	translate(0,8,0);
	scale(0.3);
	ambientMaterial(cBlack);
	model(PoVPupil);
pop();
}

function lightcone(coneduration,ccolour){
// scale(3); //temp
	noStroke();
	fill(cplotaxes);
	cylinder(2, coneduration+20, 10, 10, true, true);
	push();
		translate(0, -10-coneduration/2,0);
		cone(5, -4, 10, 10, true);
	pop();
	box(3, 1, coneduration+20, 10, 10);
	box(coneduration+20, 1,3 , 10, 10);
	fill(ccolour);
	push();
	// the past
		translate(0, coneduration/4,0);
		cone(coneduration/2, -coneduration/2);
	pop();

	push();
	// the future
		translate(0, -coneduration/4,0);
		cone(coneduration/2, coneduration/2);
	pop();
 }

 }
 
 function whatshappening(){
    stateof++;
    stateof=stateof%2;
}

function resetVariables(){
    runtime=0;
}
