// filename: NgDescription07PaneCheckPID

var insightCommentary ="Energy is shifted from the nuclear store of the Sun to the chemical store of the glucose and oxygen produced by photosynthesis. Most of the energy is associated with the chemical store of glucose inside the plant. Some of the energy is associated with the chemical store of oxygen that moves out of the plant.Only energy from the nuclear store of the Sun that is absorbed by chloroplasts in a plant is available to be shifted to the chemical store of the glucose and oxygen produced by photosynthesis. Most of the energy from the nuclear store of the Sun is not used for photosynthesis. The process of photosynthesis does not increase the thermal store of a plant, but when a plant is lit up, the light that is not absorbed by the chlorophyll can be absorbed by other parts of the plant and increase its thermal store in this way – but this has nothing to do with photosynthesis! Enzymes that enable photosynthesis to take place are most efficient between about 10oC and 20oC. Increase the amount of water, carbon dioxide, or the intensity of light on a plant, and the quantity of energy shifted to the chemical store each second increases. Chloroplasts in some plants are better able to absorb energy when they are lit up, than the chloroplasts in other plants.";

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


