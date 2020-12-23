// BobMovingClock


var stateof=0;
var runtime=0;
var pulseLocationBob=-80;
var lightSpeed =3;
var bounceBob=-1;
var BobSpeed=2;
var BobLocation =0;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(800, 400);
    
    
    
    controlbutton = createButton("run");
    controlbutton.position(20, height-50);
    controlbutton.mousePressed(whatshappening);
    controlbutton.class("PDLbutton");
    
    
    BobspeedSet=new IanSlider(96,484,100,15,0,[0.5],false);

}


function draw() {
    background(cWhite);
    
    
	var mirrorSeparationBob = 60+0.7*100;
    
    var BobSpeed = BobspeedSet.getValue()*2;
     
    
     switch(stateof){
        case 0:
//            ready to go
            controlbutton.html("run");
            BobspeedSet.draw();
            words("set\nBob's\nvelocity\nas seen\nby Alice",126,494);
            resetVariables();
            break;
        case 1:
//            running
            controlbutton.html("pause");
            runtime++;
            pulseLocationBob+=sqrt(pow(lightSpeed,2)-pow(BobSpeed,2))*bounceBob;
            
            if (pulseLocationBob>=0){
            bounceBob=-bounceBob;
            }
            if (pulseLocationBob<=-(mirrorSeparationBob-10)){
            bounceBob=-bounceBob;
            }
            BobLocation+=BobSpeed;
            if (BobLocation>=500){
            stateof=2;
            }
            break;
        case 2:
//            paused
            controlbutton.html("reset");
            break;
                      }
    
    push();
    translate(45,170);
    PoV("AliceRight");
		
    pop();
    
    push();
    translate(145+BobLocation,170);
    PoV("BobRight");
		push();
		translate(50, 60);
			fill(cpovBob);
			noStroke();
			rect(0, 0, 100, 10);
			rect(0, -mirrorSeparationBob, 100, 10);
			ellipse(50, pulseLocationBob, 5, 5);
		pop();
    pop();



  titleBold("Alice notices Bob moving with his light clock");  
}

function mousePressed(){
        BobspeedSet.mousePressed();

	}
function mouseReleased(){
        BobspeedSet.mouseReleased();

    }

function whatshappening(){
    stateof++;
    stateof=stateof%3;
}

function resetVariables(){
     pulseLocationBob=-80;
     BobLocation =0;
    runtime=0;
	bounceBob=-1;
}
