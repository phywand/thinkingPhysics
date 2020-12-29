// filename: NgDescription01PaneInsightPID

var insightQuestion = "Here is a situation about which I would like to know something: how much gas I need to use in order to get a hot cup of tea using a small gas camping stove to boil water SpacingParabreak The amount of gas used turns out to be very important when planning a multiple-day expedition. You do not want carry too much, but not having a hot cup of tea is a disaster of the first-order. SpacingParabreak What's the best I can do?";

function preload() {

	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");

    insight = loadImage("../__PDLgraphics/WildBrewInsight.png");
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



