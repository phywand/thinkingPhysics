// filename: NgDescription05PaneConceptualPID

var energyStores = ["chemical","thermal"];

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup(){
    createCanvas(800,600);
    inputtoDivvy=new IanSlider(20,395,100,15,0,[0.7],false);
    twoWayDivvy=new IanSlider(770,395,150,15,0,[0.4],false);
    theeWayDivvy=new IanSlider(770,395,150,15,0,[0.4,0.6],false);
}

function draw() {
    placeSIDPane("C","3","F","Identifying the stores and quantifying how much energy is shifted")
    inputtoDivvy.draw();
   

switch(var energyStores = ["chemical","thermal"];.length) {
	case 2:
		drawDescribeEnergyOne(var energyStores = ["chemical","thermal"];[0],var energyStores = ["chemical","thermal"];[1]);
		break;
	case 3:
		twoWayDivvy.draw();
		var bottomslice = twoWayDivvy.getValue(0);
		var topslice = 1-twoWayDivvy.getValue(0);
		drawDescribeEnergyTwo(var energyStores = ["chemical","thermal"];[0],var energyStores = ["chemical","thermal"];[1],var energyStores = ["chemical","thermal"];[2],topslice,bottomslice);
		break;
	case 4:
		theeWayDivvy.draw();
		var topslice = 1-max(theeWayDivvy.getValue(0),theeWayDivvy.getValue(1));
		var midslice = max(theeWayDivvy.getValue(0),theeWayDivvy.getValue(1))-min(theeWayDivvy.getValue(0),theeWayDivvy.getValue(1));;
		var bottomslice = min(theeWayDivvy.getValue(0),theeWayDivvy.getValue(1)); drawDescribeEnergyThree(var energyStores = ["chemical","thermal"];[0],var energyStores = ["chemical","thermal"];[1],var energyStores = ["chemical","thermal"];[2],var energyStores = ["chemical","thermal"];[3],topslice,midslice,bottomslice);
		break;
	default:
}
    
}

function mousePressed(){
	switch(var energyStores = ["chemical","thermal"];.length) {
		case 3:
			twoWayDivvy.mousePressed();
			break;
		case 4:
			theeWayDivvy.mousePressed();
			break;
		default:
		}
	inputtoDivvy.mousePressed();
}
	
function mouseReleased(){
	switch(var energyStores = ["chemical","thermal"];.length) {
		case 3:
			twoWayDivvy.mouseReleased();
			break;
		case 4:
			theeWayDivvy.mouseReleased();
			break;
		default:
		}
	inputtoDivvy.mouseReleased();
}

