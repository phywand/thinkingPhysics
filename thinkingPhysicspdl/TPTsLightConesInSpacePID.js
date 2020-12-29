// filename: LightConesInSpace

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
  createCanvas(800, 800, WEBGL);
justplaceWords("Light cones in a small region  of remote space", "invertedtitle", 20, 10, width-60);


}

function draw(){
 background(CWHITE);
   orbitControl();

   
   
	push();
		translate(-300, -300,0);
		rotateZ(-PI/3);
		OmniEye(CPOVALICE);
	pop();
 
	
	
	
	 for (k = 0; k < 8; k++) {
	for (j = -4; j < 4; j++) {
	

	for (i = -4; i <4; i++) {
	
		push();
			translate(j*120,i*120,-120*k);
			lightcone(60,CPOVALICECone);
		pop();

	}
	}	
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
	ambientMaterial(CBLACK);
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
