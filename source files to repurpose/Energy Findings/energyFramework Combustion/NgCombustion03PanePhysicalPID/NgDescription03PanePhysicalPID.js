//filename: NgDescription03PanePhysicalPID

var describeprocess = "A volume of fuel is burned and used to heat water (of known volume) in a copper beaker.The increase in temperature of the water is measured."

var describesnapshot1 = "The temperature of the water at the start is the same as room temperature."

var describesnapshot2 = "All the fuel has reacted. The temperature of the water has increased by 25°C."

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    snapShot1 =loadImage("../__PDLgraphics/Combustionsnapshot01.png");
    snapShot2 =loadImage("../__PDLgraphics/Combustionsnapshot02.png");
}
function setup(){
    createCanvas(900, 700);
    noLoop();
    justplaceWords("first snapshot","passComment",20, 130,150);
    justplaceWords("second snapshot","passComment",width-190, 130,150);
    justplaceWords(describesnapshot1,"passCommentL",20, 550,380);
    justplaceWords(describesnapshot2,"passCommentR",width-420, 550,380);
    justplaceWords(describeprocess,"passComment",20, 60,840);

}

function draw() {
    placeSIDPane("P","2","F","Describing the process: noticing physical changes and selecting snapshots")
    image(snapShot1,20,130);
    image(snapShot2,width-420,130);
}
