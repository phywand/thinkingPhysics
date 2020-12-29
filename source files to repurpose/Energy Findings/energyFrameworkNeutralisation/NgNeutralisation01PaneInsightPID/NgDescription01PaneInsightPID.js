// filename: NgDescription01PaneInsightPID

var insightQuestion = "How should a neutralisation reaction be represented on a reaction profile (energy level diagram)?";


function preload() {

	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    insight = loadImage("../__PDLgraphics/NeutralisationInsight.png");
}
function setup() {
    createCanvas(600, 600);
    noLoop();
    justplaceWords(insightQuestion, "thinkingL", 40, 60, width - 80);

}

function draw() {
    placeSIDPane("P","1","S","A process about which I'd like to know more")
    image(insight, 0, height - 417);
}
