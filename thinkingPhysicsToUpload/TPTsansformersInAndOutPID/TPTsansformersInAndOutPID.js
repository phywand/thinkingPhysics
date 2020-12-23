// filename: TransformersInAndOutPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");
	
}
function setup(){
  createCanvas(600, 600, WEBGL);
justWords("A transformer: linked magentic and electrical loops", "invertedtitle", 20, 10, width-60);


}

function draw(){
 background(cWhite);
   orbitControl();
   
   var omegatee = frameCount/200;
   

	noStroke();
// 	magnetic loop
	push();
		fill(cmagnetgrey3D);
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
	
	fill(ccircuitloopGrey3D);
	
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
			force3D(abs(Bfield), 90, cBfield);
			translate(0, 160,0);
			force3D(abs(Bfield), -90, cBfield);
		pop();
		push();
			rotateZ(-PI/2);
			translate(0, -120,0);
			force3D(abs(Bfield), 90, cBfield);
			translate(0, 240,0);
			force3D(abs(Bfield), -90, cBfield);
		pop();
		
	}else{
		push();
			translate(0, -80,0);
			force3D(abs(Bfield), -90, cBfield);
			translate(0, 160,0);
			force3D(abs(Bfield), 90, cBfield);
		pop();
		push();
			rotateZ(-PI/2);
			translate(0, -120,0);
			force3D(abs(Bfield), -90, cBfield);
			translate(0, 240,0);
			force3D(abs(Bfield), 90, cBfield);
		pop();
	}
	pop();
	
	push();
	translate(-120, 0,-80);
	current3D(4*sin(omegatee));
	translate(0, 0,160);
	current3D(-4*sin(omegatee));
	pop();
	
	push();
	translate(120, 0,-80);
	current3D(4*cos(omegatee));
	translate(0, 0,160);
	current3D(-4*cos(omegatee));
	pop();
}



function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
