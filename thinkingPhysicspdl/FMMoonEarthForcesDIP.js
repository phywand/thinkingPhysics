// FMMoonEarthForcesDIP


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
	toDiscuss=loadImage("../__PDLgraphics/MoonEarthForces.png");
}

function setup() {
    createCanvas(600,600);
    background('rgba(83, 136, 165, 0.4)');
 noLoop();

}


function draw() {
    image(toDiscuss,80,80);

 push();
 translate(20, 135);
 placeGirl1();
 placeTalkBubbleTR("My teacher said\n\n'the moon pulls on the earth just as much as the earth pulls on the moon'",40,0, 200,80);
 pop();

 push();
 translate(140,245);
 placeGirl2();
 placeTalkBubbleTR("I can feel the gravity force of Earth.\n\nSurely the moon can't: it doesn't fall.",40,0,220,60);
 pop();



 push();
 translate(448, 124);
 placeGirl4();
 placeTalkBubbleBL("I think he's crazy. The Moon is very small, so it only exerts a small force.",80,70,200,50);
 pop();

 push();
 translate(30,405);
 placeBoy1();
 placeTalkBubbleTR("But you're pulled down and the fields push back. The moon must fall: it's got no supporting fields.",50,20,284,50);
 pop();


 push();
 translate(460, 420);
 placeTiFoThinking();
 placeTalkBubbleBL("Perhaps we should draw some arrows.",0,20,110,50);
 pop();


}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }


