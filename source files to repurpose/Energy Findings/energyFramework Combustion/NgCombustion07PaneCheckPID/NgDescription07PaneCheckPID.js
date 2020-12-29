// filename: NgDescription07PaneCheckPID

var insightCommentary ="If the transfer of energy from the chemical system to the surrounding air is minimized then the energy transferred from the chemical store of the chemical system is approximately equal to the increase in the thermal store of the water in the copper beaker. This is equivalent to the energy that would otherwise have been transferred to the surrounding air. The increase in the thermal store of the water may then be calculated as mass of water x specific heat capacity of water x change in temperature." 


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


