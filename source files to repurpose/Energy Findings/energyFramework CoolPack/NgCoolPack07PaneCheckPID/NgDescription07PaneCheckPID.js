// filename: NgDescription07PaneCheckPID

var insightCommentary ="The temperature of the cool pack decreases. This means that the thermal store of the chemical system in the cool pack has decreased. Energy is always conserved so this means that the chemical store of the chemical system must have increased."

function preload() {

   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(600, 600);
    noLoop();
    justplaceWords(insightCommentary,"thinkingL",40, 100,width-80);
}


function draw() {
    placeSIDPane("P","4","F","Now check that you could gain the intended insights")

}


