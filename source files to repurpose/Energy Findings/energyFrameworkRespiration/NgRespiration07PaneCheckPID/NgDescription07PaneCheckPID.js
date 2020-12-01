// filename: NgDescription07PaneCheckPID

var insightCommentary ="Energy is shifted from the chemical store associated with glucose and oxygen to the gravitational store and thermal store by the process of respiration. Respiration is largely equivalent to a slow combustion reaction, taking place inside a living cell. Respiration causes heating and the formation of a chemical called ATP, which enables energy to reach other parts of the cell, as a result of chemical reactions. Aerobic respiration takes place in the mitochondria of a cell and requires sufficient oxygen and glucose. The whole process can be simplified with the chemical equation: glucose + oxygen → carbon-dioxide + water (+ energy)Athletic training strengthens the heart muscle and the muscles that inflate the lungs, to enable a quicker uptake of oxygen from the air and faster transport of glucose and oxygen in the blood.";

function preload() {

   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
romanFont= loadFont("../__support/Jost-300-Light.ttf");
italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
titleFont = loadFont("../__support/Jost-700-Bold.ttf");

}
function setup(){
    createCanvas(600, 600);
    noLoop();
    justWords(insightCommentary,"thinkingL",40, 100,width-80);
}


function draw() {
    SIDPane("P","4","F","Now check that you could gain the intended insights")

}


