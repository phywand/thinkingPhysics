// filename: FoMoonEarthForcesDIP


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
 drawGirl1();
 speechbubble("My teacher said\n'the moon pulls on the earth\n just as much\n as the earth pulls on the moon'",5,-90, "BL");
 pop();

 push();
 translate(140,245);
 drawGirl2();
 speechbubble("I can feel the gravity force of Earth.\nSurely the moon can't be: it doesn't fall.",-35,80, "TL");
 pop();



 push();
 translate(448, 124);
 drawGirl4();
 speechbubble("I think he's crazy.\nThe Moon is very small,\n so it only exerts a small force.",-100,-70, "BR");
 pop();

 push();
 translate(30,405);
 drawBoy1();
 speechbubble("But you're pulled down\nand the fields push back..\nThe moon must fall: it's got no supporting fields.",-25,60, "TL");
 pop();


 push();
 translate(460, 420);
 drawTiFoThinking();
 speechbubble("Perhaps we should\ndraw some arrows.",-35,40, "TL");
 pop();


}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
  }


