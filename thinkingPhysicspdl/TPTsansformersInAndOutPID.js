// filename: TransformersInAndOutPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");
	
}
function setup(){
  createCanvas(600, 600, WEBGL);
justplaceWords("A transformer: linked magentic and electrical loops", "invertedtitle", 20, 10, width-60);


}

function draw(){
 background(CWHITE);
   orbitControl();
   
   var omegatee = frameCount/200;
   

	noStroke();
// 	magnetic loop
	push();
		fill(CMAGNETGREY3D);
		push();
			translate(0, -80,0);
			box(200, 40, 40);
			translate(0, 160,0);
			box(200, 40, 40);
		pop();
		push();
			translate(-120, 0,0);
			box(40, 200, 40);
			translate(240, 0,0);
			box(40, 200, 40);
		pop();
		push();
			translate(0, -80,0);
			box(200, 40, 40);
			translate(0, 160,0);
			box(200, 40, 40);
		pop();
		push();
			translate(-120, 0,0);
			box(40, 200, 40);
			translate(240, 0,0);
			box(40, 200, 40);
		pop();
	pop();
	
	//electrical loops
	
	fill(CCIRCUITLOOPGREY3D);
	
	push();
		rotateX(PI/2);
		translate(-120, 0,0);
		torus(80,10);
	pop();
	
	push();
		rotateX(PI/2);
		translate(120, 0,0);
		torus(80,10);
	pop();

// where to put these arrows on the diagram?
	push();
	
	var Bfield =6*sin(omegatee);
	if (Bfield>0){
		push();
			translate(0, -80,0);
			showForce3D(abs(Bfield), 90, CBFIELD);
			translate(0, 160,0);
			showForce3D(abs(Bfield), -90, CBFIELD);
		pop();
		push();
			rotateZ(-PI/2);
			translate(0, -120,0);
			showForce3D(abs(Bfield), 90, CBFIELD);
			translate(0, 240,0);
			showForce3D(abs(Bfield), -90, CBFIELD);
		pop();
		
	}else{
		push();
			translate(0, -80,0);
			showForce3D(abs(Bfield), -90, CBFIELD);
			translate(0, 160,0);
			showForce3D(abs(Bfield), 90, CBFIELD);
		pop();
		push();
			rotateZ(-PI/2);
			translate(0, -120,0);
			showForce3D(abs(Bfield), -90, CBFIELD);
			translate(0, 240,0);
			showForce3D(abs(Bfield), 90, CBFIELD);
		pop();
	}
	pop();
	
	push();
	translate(-120, 0,-80);
	showCurrent3D(4*sin(omegatee));
	translate(0, 0,160);
	showCurrent3D(-4*sin(omegatee));
	pop();
	
	push();
	translate(120, 0,-80);
	showCurrent3D(4*cos(omegatee));
	translate(0, 0,160);
	showCurrent3D(-4*cos(omegatee));
	pop();
}



function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
