
// filename: FallingPastLightCones

const snapshotOffset=405;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
  createCanvas(800, 800, WEBGL);
justWords("Alice falls past two stationary Bobs: notice the rotation of Bob's light cones", "invertedtitle", 20, 10, width-60);


	justWords("set Alice's speed", "infoBlock", 20, 190, 110);
	justWords("set the increase in speed", "infoBlock", 20, 190+snapshotOffset, 110);


	startSpeedslider = createSlider(0,8,5);
	startSpeedslider.position(20, 140);

	incrementSpeedslider = createSlider(0,6,2);
	incrementSpeedslider.position(20, 140+snapshotOffset);

	showSpeed = createCheckbox("show speed",false);
	showSpeed.position(20, 60);
	showSpeed.class("PDLbutton");
	

	showAcceleration = createCheckbox("show acceleration",false);
	showAcceleration.position(20, 100);
	showAcceleration.class("PDLbutton");
	
	
	
	


}

function draw(){
  background(cWhite);
  orbitControl();
  
  var startSpeed=startSpeedslider.value();
  var incrementSpeed=incrementSpeedslider.value();
  

	push();
		translate(-80, -238,0);
		lightcone(120,cpovAliceCone);
		translate(0, snapshotOffset,0);
		lightcone(120,cpovAliceCone);
	pop();
	
	push();
		translate(200, -238,0);
		push();
			rotate(sqrt(startSpeed)*PI/50);
			lightcone(120,cpovBobCone);
		pop();
		translate(0, snapshotOffset,0);
		push();
			rotate(sqrt(startSpeed+incrementSpeed)*PI/50);
			lightcone(120,cpovBobCone);
		pop();
	pop();



  
if (showSpeed.checked()){
push();
		translate(-180, -238,0);
		velocity3D(startSpeed, 180, cpovAlice);
		translate(0,snapshotOffset,0);
		velocity3D(startSpeed+incrementSpeed, 180, cpovAlice);
	pop();
 }
 
 if (showAcceleration.checked()){
push();
		translate(-180, -238+snapshotOffset/2,0);
		acceleration3D(incrementSpeed, 180, cacceleration);
		
	pop();
 }


}



function lightcone(coneduration,ccolour){
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

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
