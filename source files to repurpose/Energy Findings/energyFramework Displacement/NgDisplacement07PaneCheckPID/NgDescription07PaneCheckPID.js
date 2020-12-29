// filename: NgDescription07PaneCheckPID

var insightCommentary ="Over time the temperature of the chemical system decreases because the thermal store has decreased. Energy has transferred to the surrounding air so the thermal store of these surroundings increases. However, because the surroundings are so large a small change in thermal energy will not result in a noticeable change to the temperature of the surroundings."

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


