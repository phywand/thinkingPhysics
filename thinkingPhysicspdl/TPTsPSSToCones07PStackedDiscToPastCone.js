// filename: TrPSSToCones07PStackedDiscToPastCone

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup(){
  createCanvas(600, 600, WEBGL);
justplaceWords("Towards a cone of influence: my past, so history for me", "invertedtitle", 20, 10, width-60);

justplaceWords("drag the mouse to spin the diagram", "passCommentL", 20, height-90, 150);

durationslider = createSlider(5,180,30);
durationslider.position(302, 54);

	ShowSlicesbutton = createCheckbox("Show locations slices for selected times",false);
	ShowSlicesbutton.position(20, 60);
	ShowSlicesbutton.class("PDLbutton");
	
	ShowTimeAxisbutton = createCheckbox("Show time axis",false);
	ShowTimeAxisbutton.position(630, 60);
	ShowTimeAxisbutton.class("PDLbutton");
	
	justplaceWords("set duration for influence", "infoText", 437, 62, 180);

}

function draw(){
  background(CWHITE);
  orbitControl();
  noStroke();
  fill(CPOVALICE);
  if (ShowSlicesbutton.checked()){
	push();
		// past slices
		for (i = 0; i < 6; i++) {
			cylinder(i*.2*durationslider.value(),2);
			translate(0,durationslider.value()*.1,0);
		}
	pop();
}

push();
	// the past
	 fill(CPOVALICECone);
	translate(0, durationslider.value()/4,0);
	 cone(durationslider.value(), -durationslider.value()/2);
 pop();
 
 if (ShowTimeAxisbutton.checked()){
 rotateZ(PI);
		drawAxis3D(50);
	}
	
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
