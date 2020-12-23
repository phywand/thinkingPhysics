// AliceVariableClock


var stateof=0;
var runtime=0;
var pulseLocationAlice=-30;
var lightSpeed =3;
var bounceAlice=-1;


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(600,400);
    

    
    controlbutton = createButton("run");
    controlbutton.position(20, height-50);
    controlbutton.mousePressed(whatshappening);
    controlbutton.class("PDLbutton");
    spacingSet=new IanSlider(400,138,100,15,0,[0.7],false);
    
    

}


function draw() {
    background(cWhite);
    
    
    var mirrorSeparationAlice = 60+spacingSet.getValue()*100;
    
     
    
     switch(stateof){
        case 0:
//            ready to go
            controlbutton.html("run");
            spacingSet.draw();
            words("set\nmirror\nspacing\nfor this\nclock",430,148);
            resetVariables();
            break;
        case 1:
//            running
            controlbutton.html("pause");
            runtime++;
            pulseLocationAlice+=lightSpeed*bounceAlice;
            if (pulseLocationAlice>=0){
            bounceAlice=-bounceAlice;
            }
            if (pulseLocationAlice<=-(mirrorSeparationAlice-10)){
            bounceAlice=-bounceAlice;
            }
            break;
        case 2:
//            paused
            controlbutton.html("reset");
            break;
                      }
    
    push();
    translate(100,170);
    PoV("AliceRight");
		push();
		translate(50, 60);
			fill(cpovAlice);
			noStroke();
			rect(0, 0, 100, 10);
			rect(0, -mirrorSeparationAlice, 100, 10);
			ellipse(50, pulseLocationAlice, 5, 5);
		pop();
    pop();
    
    
  titleBold("A light clock with variable tick rate for Alice");  
}

function mousePressed(){
        spacingSet.mousePressed();

	}
function mouseReleased(){
        spacingSet.mouseReleased();

    }

function whatshappening(){
    stateof++;
    stateof=stateof%3;
}

function resetVariables(){
    pulseLocationAlice=-30;
    runtime=0;
    bounceAlice=-1;
}
