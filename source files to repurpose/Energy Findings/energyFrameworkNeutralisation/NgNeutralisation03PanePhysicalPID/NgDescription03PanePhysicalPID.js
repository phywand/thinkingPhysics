//filename: NgDescription03PanePhysicalPID

var describeprocess = "When hydrochloric acid reacts with sodium hydroxide the temperature increases to a maximum value.";

var describesnapshot1 = "The temperature of the sodium hydroxide solution at the start is 22°C.";

var describesnapshot2 = "The maximum temperature of the products of the neutralisation reaction is 27.5°C.";

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    snapShot1 =loadImage("../__PDLgraphics/Neutralisationsnapshot01.png");
    snapShot2 =loadImage("../__PDLgraphics/Neutralisationsnapshot02.png");
}
function setup(){
    createCanvas(900, 700);
    noLoop();
    justWords("first snapshot","passComment",20, 130,150);
    justWords("second snapshot","passComment",width-190, 130,150);
    justWords(describesnapshot1,"passCommentL",20, 550,380);
    justWords(describesnapshot2,"passCommentR",width-420, 550,380);
    justWords(describeprocess,"passComment",20, 60,840);

}

function draw() {
    SIDPane("P","2","F","Describing the process: noticing physical changes and selecting snapshots")
    image(snapShot1,20,130);
    image(snapShot2,width-420,130);
}
