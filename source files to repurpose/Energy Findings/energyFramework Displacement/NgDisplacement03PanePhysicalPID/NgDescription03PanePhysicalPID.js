//filename: NgDescription03PanePhysicalPID

var describeprocess = "The maximum temperature rise of a chemical reaction between copper sulfate solution and magnesium is measured. Room temperature is also measured. The temperature of the chemical system (the products and the water) and room are measured again a day later."

var describesnapshot1 = "The maximum temperature of the chemical system is 24°C. The temperature of the room is 19°C."

var describesnapshot2 = "The temperature a day later is 19 °C (the same as the room)."

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    snapShot1 =loadImage("../__PDLgraphics/Displacementsnapshot01.png");
    snapShot2 =loadImage("../__PDLgraphics/Displacementsnapshot02.png");
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
