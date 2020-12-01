//filename: NgDescription03PanePhysicalPID

var describeprocess = "Start at the bottom > while running up, breathing rate speeds up and heart beats more quickly > arrive at the top, hot and sweaty > resting allows breathing to return to normal";

var describesnapshot1 = "Stationary at the bottom of the hill";

var describesnapshot2 = "Rested at the top of the hill. The surroundings are a bit warmer because of the air that was stirred up and by heating from the body.";
function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    snapShot1 =loadImage("../__PDLgraphics/Respirationsnapshot01.png");
    snapShot2 =loadImage("../__PDLgraphics/Respirationsnapshot02.png");
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
