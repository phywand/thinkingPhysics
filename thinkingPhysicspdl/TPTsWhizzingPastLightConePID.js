
// filename: WhizzingPastLightCone


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
  createCanvas(600, 500, WEBGL);
justplaceWords("Alice whizzes past Bob: notice the rotation of Bob's light cone", "invertedtitle", 20, 10, width-60);


	justplaceWords("set Alice's speed", "infoBlock", 20, 190, 110);
	


	AliceSpeedslider = createSlider(0,8,5);
	AliceSpeedslider.position(20, 140);

	

	showSpeed = createCheckbox("show speed",false);
	showSpeed.position(20, 60);
	showSpeed.class("PDLbutton");
	

}

function draw(){
  background(CWHITE);
  orbitControl();
  
  var AliceSpeed=AliceSpeedslider.value();
  

	push();
		translate(0, -100,0);
		lightcone(120,CPOVALICECone);
	pop();
	
	push();
		translate(0, 100,0);
		push();
			rotate(sqrt(AliceSpeed)*PI/50);
			lightcone(120,cpovBobCone);
		pop();
	pop();


if (showSpeed.checked()){
push();
		translate(0, 10,0);
		showVelocity3D(AliceSpeed, 90, CPOVALICE);
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
  
