//NgQuestionsCompareEnergySchema4StepsPID


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(800, 500);
   
    stepsbutton = createCheckbox("step numbers",false);
    stepsbutton.position(18, height-50);
    stepsbutton.class("PDLbutton");
    
    
    feedbackbutton = createCheckbox("relate insight to enquiry",false);
    feedbackbutton.position(220+80-5-150, height-50);
    feedbackbutton.class("PDLbutton");
    
justWords("describe process and your interest in it\nwell enough to motivate calculations", "thinkingL", 588, 80, 170);
justWords("Relate step04 to step01\n to check for insight against the original declared interest", "thinkingR", 588, 344, 170);
}

function draw() {
    background(cdeviceGrey);
    
    physicalPane(143-25, 130, 150, 100);
    physicalPane(343, 130, 200, 100);
    conceptualPane(343, 280, 200, 100);
    physicalPane(543+25, 280, 150, 100);
    
    transitionStep(218, 130, 0);
    transitionRedescribe(343, 205, 90);
    transitionStep(468, 280, 0);
 
//     step actions
	if (stepsbutton.checked()){
		panenumber("01","P",143-25,130);
		panenumber("02","P",343,130);
		panenumber("03","C",343,280);
		panenumber("04","P",543+25,280);
	}else{
		words("set context: is the\nprocess described\npossible or not?", 103-50, 100);
		words("describe process,\ncharacterise snapshots\nand identify quantities\nto enable calculations", 253, 100);
		words("calculate the change in\nenergy, twice", 253, 250);
		words("compare these two\nenergy changes\nto decide if the\nprocess is possible", 503, 250);
		push();
		translate(275, 314);
		energy(3);
		translate(138, 0);
		energy(2);
	pop();
	}
    
    
    
    
    
if (feedbackbutton.checked()){
    linkArrowUp(143, 400, 220);
    linkBarRight(143, 400, 400);
    linkBarUp(543, 400, 80);
}
if (feedbackbutton.checked() && !stepsbutton.checked()){
    linkArrowUp(143, 400, 220);
    linkBarRight(143, 400, 400);
    linkBarUp(543, 400, 80);
    linkArrowRight(45+250, 130+175, 45+54);
	words(">=?", 45+250+36, 130+175+4);
}
	
    
   titleBold("Schema for energy questions: Compare energies for a purpose – 4 essential steps");
}

function panenumber(paneNumber,paneKind,xloc,yloc) {
	 fill(cWhite);
	ellipse(xloc, yloc, 30, 30);
	if (paneKind=="C") {
        fill(cideaBlue);
    }
    if (paneKind=="P") {
        fill(cideaGreen);
    }
	textFont(titleFont, 18);
	text(paneNumber, xloc-textWidth(paneNumber)/2,yloc+6); 
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
