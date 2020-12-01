// filename: EeDevicesWorkingTransformingSwitchingDevice

function preload() {
	
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");	
romanFont= loadFont("../__support/Jost-300-Light.ttf");	
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");	
titleFont = loadFont("../__support/Jost-700-Bold.ttf");


}
function setup(){
    createCanvas(900, 600);
//    noLoop();
    inputtoDivvy=new IanSlider(20,320,100,15,0,[0.7],false);
    twoWayDivvy=new IanSlider(750,320,150,15,0,[0.4],false);
}

function draw() {
    background(cWhite);
    twoWayDivvy.draw();
    inputtoDivvy.draw();
    var bottomslice = twoWayDivvy.getValue(0);
    var topslice = 1-twoWayDivvy.getValue(0);

     describePowerTwo("electrical","particles","electrical",topslice,bottomslice);


leadlinediagram("target pathway for device\n– design to switch as much power into this pathway as possible,\n which often has a different character", 347, 244);

     

    titleBold("Electrical transforming: switching from the electrical pathway to a new electrical pathway");
}

function mousePressed(){
        twoWayDivvy.mousePressed();
        inputtoDivvy.mousePressed();
	}
function mouseReleased(){
        inputtoDivvy.mouseReleased();
        twoWayDivvy.mouseReleased();
    }
    
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}