// filename: NgDescription01PaneInsightPID

var insightQuestion = "How do the temperature of the chemical system and the surrounding air change after an exothermic displacement reaction has finished?"

function preload() {

	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    insight = loadImage("../__PDLgraphics/DisplacementInsight.png");
}
function setup() {
    createCanvas(600, 600);
    noLoop();
    justWords(insightQuestion, "thinkingL", 40, 60, width - 80);

}

function draw() {
    SIDPane("P","1","S","A process about which I'd like to know more")
    image(insight, 0, height - 417);
}



