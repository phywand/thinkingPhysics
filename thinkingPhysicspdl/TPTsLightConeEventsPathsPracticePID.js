
// filename: LightConeEventsPathsPractice

// path angle to fix
function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
  createCanvas(800, 800, WEBGL);
justWords("Events and light cones: practice interpreting these representations", "invertedtitle", 20, 10, width-60);


justWords("set t", "infoBlock", 150, 110, 40);
justWords("set x", "infoBlock", 150, 150, 30);
justWords("set y", "infoBlock", 150, 190, 30);

justWords("set t", "infoBlock", 600, 110, 30);
justWords("set x", "infoBlock", 600, 150, 30);
justWords("set y", "infoBlock", 600, 190, 30);

	timeStartslider = createSlider(-60,60,20);
	timeStartslider.position(20, 100);

	eventxStartslider = createSlider(-20,20,10);
	eventxStartslider.position(20, 140);

	eventyStartslider = createSlider(-30,30,-15);
	eventyStartslider.position(20, 180);

	showStartevent = createCheckbox("show the start event",false);
	showStartevent.position(20, 60);
	showStartevent.class("PDLbutton");
	
	timeEndslider = createSlider(-60,60,50);
	timeEndslider.position(650, 100);

	eventxEndslider = createSlider(-20,20,20);
	eventxEndslider.position(650, 140);

	eventyEndslider = createSlider(-30,30,20);
	eventyEndslider.position(650, 180);

	showEndevent = createCheckbox("show the end event",false);
	showEndevent.position(628, 60);
	showEndevent.class("PDLbutton");
	
	showPath = createCheckbox("show linking path",false);
	showPath.position(333, height-40);
	showPath.class("PDLbutton");
	
	


}

function draw(){
  background(cWhite);
  orbitControl();
  
  var eventStarttime=timeStartslider.value();
  var eventStarty=eventyStartslider.value();
  var eventStartx=eventxStartslider.value();
  
  var eventEndtime=timeEndslider.value();
  var eventEndy=eventyEndslider.value();
  var eventEndx=eventxEndslider.value();


lightcone(120,cpovAliceCone);

if (showPath.checked()){
push();
		translate((eventStarty+eventEndy)/2, -(eventStarttime+eventEndtime)/2,(eventStartx+eventEndx)/2)
		fill(cideaGrey);
		var pathLength =sqrt(sq(eventStarty-eventEndy)+sq(eventStarttime-eventEndtime)+sq(eventStartx-eventEndx))
		push();
		rotateY(PI/2+atan2(eventStarty-eventEndy,eventStartx-eventEndx));
		rotateZ(PI/2+atan2(eventStarty-eventEndy,eventStarttime-eventEndtime));
		box(pathLength, 0.5, 0.5);
	pop();
	pop();
}
  
if (showStartevent.checked()){
	eventmarker(eventStarty,eventStarttime,eventStartx,cideaGreen);
 }
 
 if (showEndevent.checked()){
	eventmarker(eventEndy,eventEndtime,eventEndx,cideaRed);
 }


}

function eventmarker(xspot, yspot,tspot,eventcolour){
push();
translate(xspot, -yspot,tspot);
fill(eventcolour);
sphere(1);
pop();
}

function lightcone(coneduration,ccolour){
scale(3); //temp
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
  
