// filename: NgDescription07PaneCheckPID

var insightCommentary ="The energy shifted from the chemical store is shared across the three thermal stores. SpacingParabreak The more gas I burn, the more energy is shifted to be shared out. But to raise the temperature of the water, which is what is important to me, I want most of that energy to end up in the thermal store of the water and as little as possible in the thermal stores of a cup and other surroundings. This has implications for the cup that I choose and for minimising the energy shifted to the surroundings, for example by using a windshield. SpacingParabreak So for this process the energy description does provide some insights.";


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


