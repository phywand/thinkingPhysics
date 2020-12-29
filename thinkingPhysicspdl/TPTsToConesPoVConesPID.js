
// filename: ToConesPoVCones

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");


}
function setup(){
  createCanvas(800, 600, WEBGL);
justplaceWords("Multiple histories and futures from three points of view", "invertedtitle", 20, 10, width-60);

justplaceWords("drag the mouse to spin the diagram", "passCommentL", 20, height-90, 150);

	justplaceWords("set duration for influence", "infoText", 465, 62, 180);


durationslider = createSlider(1,140,30);
durationslider.position(320, 54);

	ShowAlicebutton = createCheckbox("Alice",true);
	ShowAlicebutton.position(20, 60);
	ShowAlicebutton.class("PDLbutton");
	
	
	ShowBobbutton = createCheckbox("Bob",true);
	ShowBobbutton.position(120, 60);
	ShowBobbutton.class("PDLbutton");
	
	ShowCharliebutton = createCheckbox("Charlie",true);
	ShowCharliebutton.position(210,60);
	ShowCharliebutton.class("PDLbutton");
	
	ShowTimeAxisbutton = createCheckbox("Show time axis",false);
	ShowTimeAxisbutton.position(650, 60);
	ShowTimeAxisbutton.class("PDLbutton");

}

function draw(){
  background(CWHITE);
  orbitControl();
  rotateX(PI/2);
  
if (ShowAlicebutton.checked()){
	push();
		conepair(durationslider.value(),CPOVALICECone);
		if (ShowTimeAxisbutton.checked()){
		drawAxis3D(50);
	}
	pop();
 }
 
 
if (ShowBobbutton.checked()){
	push();
		translate(200, 0,0);
		conepair(durationslider.value(),cpovBobCone);
		if (ShowTimeAxisbutton.checked()){
		drawAxis3D(50);
	}
	pop();
 }
 
 if (ShowCharliebutton.checked()){
	push();
		 translate(200, 0,100);
		conepair(durationslider.value(),cpovCharlieCone);
		if (ShowTimeAxisbutton.checked()){
		drawAxis3D(50);
	}
	pop();
 }
 

}

function conepair(coneduration,ccolour){
	noStroke();
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
  
