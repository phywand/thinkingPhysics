//filename: NgDescription03PanePhysicalPID

var describeprocess = "The Sun gives out light and over time, a plant takes in water through its roots and carbon dioxide mainly through its leaves SymbolArrowright when it is lit up, a plant can make glucose (food), and oxygen gas that it releases.";

var describesnapshot1 = "The Sun gives out light because nuclear reactions in its core make it very hot.";

var describesnapshot2 = "Over time, a plant takes in water through its roots and carbon dioxide from the air. Oxygen moves from the plant into the air and the plant grows bigger.";

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    snapShot1 =loadImage("../__PDLgraphics/Photosynthesissnapshot01.png");
    snapShot2 =loadImage("../__PDLgraphics/Photosynthesissnapshot02.png");
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
