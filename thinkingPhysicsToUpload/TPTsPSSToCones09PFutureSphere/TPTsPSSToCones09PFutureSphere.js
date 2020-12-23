// filename: TrPSSToCones09PFutureSphere

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup(){
  createCanvas(900, 600, WEBGL);
justWords("The sphere of influence :events I can affect depends on duration: time for the information to arrive", "invertedtitle", 20, 10, width-60);

justWords("drag the mouse to spin the diagram", "passCommentL", 20, height-90, 150);

durationslider = createSlider(10,180,50);
durationslider.position(330, 54);

	ShowSlicesbutton = createCheckbox("Show spheres for selected times up to limit",false);
	ShowSlicesbutton.position(20, 60);
	ShowSlicesbutton.class("PDLbutton");
	
	ShowAxesbutton = createCheckbox("Show axes",false);
	ShowAxesbutton.position(655, 60);
	ShowAxesbutton.class("PDLbutton");
	
	
	justWords("set duration for influence", "infoText", 465, 62, 180);

}

function draw(){
  background(cWhite);
  orbitControl();
  noStroke();
  if (ShowSlicesbutton.checked()){
	fill(cpovSomebodySphere);
	push();
		// past spheres
		for (i = 0; i < 6; i++) {
			sphere(i*.2*durationslider.value());
		}
	pop();
  }else{
  fill(cpovSomebodyCone);
  sphere(durationslider.value());
 }

 if (ShowAxesbutton.checked()){
	 push();
	 rotateX(PI);
	 axis3D(50);
	 rotateZ(-PI/2);
	 axis3D(50);
	 rotateX(PI/2);
	 axis3D(50);
	 pop();
}
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}