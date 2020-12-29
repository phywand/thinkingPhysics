//filename: NgDescription03PanePhysicalPID

var describeprocess = "The cool pack is squeezed so that the ammonium nitrate in one internal bag is able to mix with water in the other internal bag. It feels cool to the touch."

var describesnapshot1 = "The cool pack is at the same temperature as the surroundings."

var describesnapshot2 = "The temperature of the cool pack decreases."

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    snapShot1 =loadImage("../__PDLgraphics/CoolPacksnapshot01.png");
    snapShot2 =loadImage("../__PDLgraphics/CoolPacksnapshot02.png");
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
