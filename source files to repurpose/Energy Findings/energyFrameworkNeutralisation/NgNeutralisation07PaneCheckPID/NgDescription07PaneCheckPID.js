// filename: NgDescription07PaneCheckPID

var insightCommentary ="The values of the chemical store and thermal store of a chemical system are not directly measurable. The temperature of the chemical system can be measured using a thermometer. This description helps to use this observational data to reason about the change in the thermal store and hence the chemical store before and after the reaction.";

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


