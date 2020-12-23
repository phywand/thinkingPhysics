
// filename: ToConesPastDiscs

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");


}
function setup(){
  createCanvas(800, 600, WEBGL);
justWords("In a 2-dimensional world, circles of influence depend on time", "invertedtitle", 20, 10, width-60);

justWords("drag the mouse to spin the diagram", "passCommentL", 20, height-90, 150);

durationslider = createSlider(1,180,30);
durationslider.position(302, 54);

	ShowSlicesbutton = createCheckbox("Stack locations slices for selected times",false);
	ShowSlicesbutton.position(20, 60);
	ShowSlicesbutton.class("PDLbutton");
	
	ShowTimeAxisbutton = createCheckbox("Show time axis",false);
	ShowTimeAxisbutton.position(630, 60);
	ShowTimeAxisbutton.class("PDLbutton");
	
	justWords("set duration for influence", "infoText", 437, 62, 180);

}

function draw(){
  background(cWhite);
  orbitControl();
  rotateX(PI/2);
  noStroke();
  fill(cpovAlice);
  if (ShowSlicesbutton.checked()){
	push();
		// past slices
		for (i = 0; i < 6; i++) {
			cylinder(i*.2*durationslider.value(),2);
			translate(0,-durationslider.value()*.1,0);
		}
	pop();
	} else{
	cylinder(durationslider.value(),2);
	}

  if (ShowTimeAxisbutton.checked()){
		axis3D(50);
	}
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
  

