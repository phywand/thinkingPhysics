
// filename: LightConeOmnieyeRecorder

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
	
	PoVeyeball = loadModel('../__PDLGraphics/3Dobjects/OmniEye-Ball.obj', true);
	PoVIris = loadModel('../__PDLGraphics/3Dobjects/OmniEye-Iris.obj', true);
	PoVPupil = loadModel('../__PDLGraphics/3Dobjects/OmniEye-Pupil.obj', true);
	
	theRecorder = loadModel('../__PDLGraphics/3Dobjects/FatRecroder.obj', true);
	theRecorderRuler = loadModel('../__PDLGraphics/3Dobjects/TheRecorderRuler.obj', true);
	theRecorderClock  = loadModel('../__PDLGraphics/3Dobjects/TheRecorderClock.obj', true);

}
function setup(){
  createCanvas(600, 600, WEBGL);
justWords("Light cone with observer, paying attention to the past", "invertedtitle", 20, 10, width-60);




	

	showOmnieye = createCheckbox("show observer",false);
	showOmnieye.position(20, 60);
	showOmnieye.class("PDLbutton");
	
	showRecorder = createCheckbox("show observer",false);
	showRecorder.position(width-146, 60);
	showRecorder.class("PDLbutton");
	
	
}

function draw(){
  background(cWhite);
  orbitControl();
  
  lightcone(100,cpovAliceCone);
	
 
 if (showOmnieye.checked()){
 push();
 rotateZ(PI/6);
 scale(0.5);
	 OmniEye(cpovAlice);
	 pop();
 }

if (showRecorder.checked()){
aRecorder(cpovAlice);

}

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

scale(3);
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

function aRecorder(POVcolour){
push();
rotateZ(PI);
scale(0.2);
	noStroke();
	fill(POVcolour);
	model(theRecorder);
	fill(cdurationclockBlue);
	push();
		translate(60,0, 13);
		rotateX(PI/2);
		rotateZ(PI/6);
		cylinder(10,2);
	pop();
	push();
	fill(cdeviceGrey);
		translate(-55,0, 6);
		rotateY(PI/3);
		box(60,6,2);
	pop();
pop();
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
