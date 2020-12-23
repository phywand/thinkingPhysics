// NgCompensationCalculationsStoresPID

const magnitudes=[];
var values = [];
const scaleFactor=200;
const locpucks =[514,185];
const tradeOffOffset = 180;

var storesdata=[["chemical","molecules are being pulled apart","atoms or molecules are combining all by themselves","energy/mole","mole"],["gravity","something is being lifted away from a planet, just separating two masses","anything falling towards the surface of an astronomical object, just  allowing two masses to get closer","force (mg)","height"],["kinetic","something is speeding up,  any massive object gets faster","something is slowing down, any massive object gets slower","momentum","velocity"],["thermal","particles vibrating more (solid), or rushing around and vibrating more (fluid): the temperature increases, or the phase of matter changes","particles vibrating less (solid), or rushing around and vibrating less (fluid): the temperature decreases, or the phase of matter changes","energy/kilogram","kilogram"],["elastic","a spring is being squeezed or stretched, so that it is no longer at its natural length, fluid being compressed","a spring or rubber band relaxing back to its natural length. a volume of compressed air being allowed to expand","x","kx"],["vibration","something moving to and fro more and more, so vibrating more and more","something moving to and fro less and less, so vibrating less and less","A","kA"],["nuclear","making very high or very low mass nuclei (only possible in stars)","low mass nuclei joining to gether (so fusing, fusion): high mass nuclei splitting (so fissioning, fission)","energy/nucleon","nucleons"],["electric-magnetic","attracting magnets or charges are  pulled apart","attracting magnets or charges are allowed to come together","energy/distance","distance"]];


function preload() {
    	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup() {
    createCanvas(640,460);
    storeChoice=new IanSlider(20,105,200,15,6,[0.0],false);
    
    magnitudes[0]= new controlPuckpositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);
    
    boxesbutton = createCheckbox("trade-off",false);
    boxesbutton.position(474, 406);
    boxesbutton.class("PDLbutton");
    emptiedbutton = createCheckbox("emptied",false);
    emptiedbutton.position(20, 406);
    emptiedbutton.class("PDLbutton");
}


function draw() {
	background(cWhite);
	storeChoice.draw();
	var thechoice = int((storeChoice.getValue()+0.1)*7);
	for (i = 0; i < storesdata.length; i++) {
		words(storesdata[i][0], 44, 308-i*28);
				}
	if (storesdata[thechoice][0]!="electric-magnetic"){
		 var storeKind=storesdata[thechoice][0];
	 }else{
		 storeKind="electricmagnetic"
     }	
	subHead("for the "+storesdata[thechoice][0]+" store", 180, 80);
	
	push();
        translate(180,120);
		subHead('qualitative',0, 0);
		translate(150,0);
		subHead('quantitative',0, 0);
	pop();

	words("set quantities", locpucks[0]-40,locpucks[1]-45);

      values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);
    
	words(storesdata[thechoice][3], locpucks[0],locpucks[1]+61);
	words(storesdata[thechoice][4], locpucks[0]+50, locpucks[1]-28);

	push();
		translate(220, 350);
		if (emptiedbutton.checked()){
			storeEmptied(storeKind);
			wordsframe(storesdata[thechoice][0]+' store emptied if: ' + storesdata[thechoice][2], -40, 2,150,200);
			} else{
			storeFilled(storeKind);
			wordsframe(storesdata[thechoice][0]+' store filled if: ' + storesdata[thechoice][1], -40, 2,250,200);
			}
	pop();
        
	push();
		translate(351,238);
		energy(values[0].x*values[0].y/1500);
	pop();
        

	
	if (boxesbutton.checked()){
	
	if((storeKind=="kinetic")||(storeKind=="elastic")||(storeKind=="vibration")){	tradeOfftriangle(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,cconlightgreen,cconpink);
	}else{
		tradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,cconlightgreen,cconpink);	
}
}
	

 titleBold("Compensation calculations for energy shifted to or from a store");
}

function mousePressed(){
        storeChoice.mousePressed();
	}
function mouseReleased(){
        storeChoice.mouseReleased();
    }
