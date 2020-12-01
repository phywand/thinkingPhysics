// filename: NgDescription01PaneInsightPID

var insightQuestion = "I am running up my favourite hill. How will training help me run up more quickly?";


function preload() {

	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    insight = loadImage("../__PDLgraphics/RespirationInsight.png");
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



