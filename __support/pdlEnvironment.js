// PDLenvironmentcombo 2020-11-30

// catching physics overviews
function drawcatchingPhysicsIdeaBox(boxText,xpos,ypos,boxWidth,boxHeight) {
    fill(cWhite);
    strokeWeight(1);
	stroke(clabeltext)
    rectMode(CENTER);
    rect(xpos,ypos, boxWidth, boxHeight, cornerRound);
    fill(clabeltext);
	noStroke();
    textFont(romanFont,18);
    text(boxText,xpos+textOffset,ypos+textOffset, boxWidth-textOffset, boxHeight-textOffset);
		rectMode(CORNER);
}

function drawcatchingPhysicsFlowLink(xposstart,yposstart,xposfinish,yposfinish,connectorWeight){
    strokeWeight(connectorWeight*2);
    stroke(cPlinkblue);
    noFill();
    bezier(xposstart, yposstart, xposfinish, yposstart, xposstart, yposfinish, xposfinish, yposfinish);
 }

function drawcatchingPhysicsCrossLink(xposstart,yposstart,xposfinish,yposfinish,connectorWeight){
    strokeWeight(connectorWeight*2);
    stroke(cPlinkorange);
    noFill();
    bezier(xposstart, yposstart, xposfinish, yposstart, xposstart, yposfinish, xposfinish, yposfinish);
 }

// VnR reboot Dev: graphical mathematics

function predictfluxionfluentFluent(){
	nextfluent = rungekutta4(fluent, fluxionfluent, fluxion)[0];
	nextfluxionfluent = rungekutta4(fluent, fluxionfluent, fluxion)[1];
	fluent=nextfluent;
	fluxionfluent=nextfluxionfluent;
}

function rungekutta4(fluent, fluxionfluent, fluxion){
  // Returns (nextfluent, nextfluxionfluent) array after time dt has passed.
  //        x: initial fluent
  //        v: initial va
  //        fluxion: "acceleration" function fluxion(x,v), which is where you specify the force
  //        dt: timestep
  var dt=0.1;
  var x = fluent;
  var v = fluxionfluent;
  var x1 = fluent;
  var v1 = fluxionfluent;
  var a1 = fluxion(x1, v1);

  var x2 = x + 0.5*v1*dt;
  var v2 = v + 0.5*a1*dt;
  var a2 = fluxion(x2, v2);

  var x3 = x + 0.5*v2*dt;
  var v3 = v + 0.5*a2*dt;
  var a3 = fluxion(x3, v3);

  var x4 = x + v3*dt;
  var v4 = v + a3*dt;
  var a4 = fluxion(x4, v4);

  var xf = x + (dt/6)*(v1 + 2*v2 + 2*v3 + v4);
  var vf = v + (dt/6)*(a1 + 2*a2 + 2*a3 + a4);

  return [xf, vf];
}

function accumulator(thefactor){
	translate(50,0);
    noFill();
	strokeWeight(1);
    stroke(cdeviceLightGrey);
    quad(-10, 0, 0, -15, 10, 0,0,15);
    noStroke();
    fill(cideaBlue);
    triangle(-10, 0, 0, -thefactor, 10, 0);
}

function indicator(value,icolor,label,combine){
    var iwidth=12;
    noFill();
	strokeWeight(1);
    stroke(cdeviceLightGrey);
    line(-iwidth/2-1, -20, -iwidth/2-1, 20);
    line(iwidth/2+1, -20, iwidth/2+1, 20);
    fill(icolor);
    noStroke();
    var iheight = value*pixelscaling;
    rect(-iwidth/2,-iheight,iwidth,iheight);
    textFont(romanFont,16);
    fill(clabeltext);
    text(label,iwidth-2,-12);
    stroke(cideaBlue);
    fill(cideaBlue);
    strokeWeight(2);
    line(-iwidth, 0, iwidth, 0);
//     input
    beginShape();
		vertex(-iwidth,-5);
		vertex(-iwidth-14,-5);
		vertex(-iwidth-12,0);
		vertex(-iwidth-14,5);
		vertex(-iwidth,5);
		vertex(-iwidth,-5);
    endShape();
    textFont(romanFont,18);
    noStroke();
    fill(cWhite);
    text(combine,-iwidth-12,4);
    fill(cideaBlue);
//     output
    beginShape();
		vertex(iwidth,-5);
		vertex(iwidth+10,-5);
		vertex(iwidth+14,0);
		vertex(iwidth+10,5);
		vertex(iwidth,5);
		vertex(iwidth,-5);
    endShape();

}

function contributionlinkbackdown(){
	stroke(cideaRed);
	strokeWeight(2);
	translate(120,80);
	line(-20, 7, -20, 80);
	line(-20, 80,-102,80);
	translate(-120,80);
    }

function contributionlinkbackup(){
	stroke(cideaRed);
	strokeWeight(2);
	line(-20, -7, -20, -80);
	line(-20, -80,-102,-80);
	translate(-120,-80);
}

function contributionlinkdown(){
	stroke(cideaRed);
	strokeWeight(2);
	line(20, 0, 122, 0);
	line(122, 0,122,75);
	translate(140,80);
    }

function accumulatelink(){
	stroke(cideaGreen);
	strokeWeight(2);
	line(-24, 0, 74, 0);
	line(74, 0,74,74);
    translate(90,80);
}

function feedbacklink1(){
	stroke(cideaGrey);
	strokeWeight(2);
	line(20, 0, 102, 0);
	line(102, 0,102,140);
	line(102,140,-160,140);
	line(-160,140,-160,85-158);
}

function feedbacklink2(){
	stroke(cideaGrey);
	strokeWeight(2);
	line(26, 0, 102, 0);
	line(102, 0,102,80);
	line(102,80,-298,80);
	line(-298,80,-298,-153);
}


//physics qualitative

function absorber(quality, awidth, aheight){
     push();
    noStroke();
    if(quality=="poor")
    {
      fill(cabsorbpoor);
      rect(0,-aheight/2,awidth,aheight);

    }
    if(quality=="good")
    {
      fill(cabsorbgood);
      rect(0,-aheight/2,awidth,aheight);
    }
    if(quality=="better")
    {
      fill(cabsorbbetter);
      rect(0,-aheight/2,awidth,aheight);
    }
     if(quality=="perfect"||quality=="absorb")
    {
      fill(cabsorbperfect);
      rect(0,-aheight/2,awidth,aheight);
    }
    pop();
   }

function bulb(label){
    push();
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,-21,0,-63);
    noFill();
    stroke(ccircuitBlack);
    ellipse(0,0,42,42);
    stroke(ccircuitRed);
    line(0,21,0,63);
    stroke(ccircuitBlack);
    line(-15,-15,15,15);
    stroke(ccircuitBlack);
    line(15,-15,-15,15);
    fill(clabeltext);
    words(label,21,-21);
    pop();
   }

function battery(label){
    push();
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,-5,0,-68);
    strokeWeight(2);
    stroke(ccircuitBlack);
    line(-21,-5,21,-5);
    strokeWeight(3);
    stroke(ccircuitBlack);
    line(-10,5,10,5);
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,5,0,68);
    fill(clabeltext);
    words(label,21,-21);
    pop();
   }

function resistor(label){
    push();
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,-21,0,-63);
    noFill();
    stroke(ccircuitBlack);
    rect(-10,-21,20,42);
    stroke(ccircuitRed);
    line(0,21,0,63);
    fill(clabeltext);
    words(label,21,-21);
    pop();
   }

function componentCell1(symbol,subscript,xloc,yloc){
	push();
		translate(xloc,yloc);
		strokeWeight(1);
		stroke(ccircuitRed);
		line(0,-5,0,-60);
		line(0,5,0,60);
		stroke(ccircuitBlack);
		strokeWeight(2);
		line(-21,-5,21,-5);
		strokeWeight(3);
		line(-10,5,10,5);
		strokeWeight(1);
		noStroke();
		symbolSub(symbol, subscript, 21, 18);
	pop();
}

function componentCell2(symbol,subscript,xloc,yloc){
	push();
		translate(xloc,yloc);
		strokeWeight(1);
		stroke(ccircuitRed);
		line(0,-15,0,-60);
		line(0,15,0,60);
		stroke(ccircuitBlack);
		strokeWeight(2);
		line(-21,-15,21,-15);
		line(-21,5,21,5);
		strokeWeight(3);
		line(-10,-5,10,-5);
		line(-10,15,10,15);
		strokeWeight(1);
		noStroke();
		symbolSub(symbol, subscript, 21, 29);
	pop();
}

function componentCell3(symbol,subscript,xloc,yloc){
	push();
		translate(xloc,yloc);
		strokeWeight(1);
		stroke(ccircuitRed);
		line(0,-25,0,-60);
		line(0,25,0,60);
		stroke(ccircuitBlack);
		strokeWeight(2);
		line(-21,-25,21,-25);
		line(-21,-5,21,-5);
		line(-21,15,21,15);
		strokeWeight(3);
		line(-10,-15,10,-15);
		line(-10,5,10,5);
		line(-10,25,10,25);
		strokeWeight(1);
		noStroke();
		symbolSub(symbol, subscript, 21, 36);
	pop();
}



function componentResistor(symbol,subscript,xloc,yloc){
	push();
		translate(xloc,yloc);
		strokeWeight(1);
		stroke(ccircuitRed);
		line(0,-21,0,-60);
		line(0,21,0,60);
		noFill();
		stroke(ccircuitBlack);
		rect(-10,-21,20,42);
		noStroke();
		symbolSub(symbol, subscript, 18, -15);
	pop();
	}

function componentBulb(symbol,subscript,xloc,yloc){
    push();
		translate(xloc,yloc);
		strokeWeight(1);
		stroke(ccircuitRed);
		line(0,-21,0,-60);
		line(0,21,0,60);
		noFill();
		stroke(ccircuitBlack);
		ellipse(0,0,42,42);
		line(-15,-15,15,15);
		line(15,-15,-15,15);
		noStroke();
		symbolSub(symbol, subscript, 18, -15);
    pop();
}

function circuitSimple(kind){

    push();
    noFill();
    createBattery(0,0,seriesoffset-4,seriesoffset-4);
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,-seriesoffset,loopoffset,-seriesoffset);
    line(0,seriesoffset,loopoffset,seriesoffset);
    if(kind=="bulb")
    {
    createBulb(loopoffset,0,seriesoffset-21,seriesoffset-21);
    }
    else if(kind=="resistor")
    {
    createResistor(loopoffset,0,seriesoffset-21,seriesoffset-21);
    }
    pop();
   }

function circuitSimpleStretched(kind){

    push();
    noFill();
    createBattery(0,0,seriesoffset-4,seriesoffset-4);
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,-seriesoffset,loopoffset,-seriesoffset);
    line(0,seriesoffset,loopoffset,seriesoffset);
    line(loopoffset,-seriesoffset,loopoffset*2,-seriesoffset);
    line(loopoffset,seriesoffset,loopoffset*2,seriesoffset);
    if(kind=="bulb"){
        createBulb(loopoffset*2,0,seriesoffset-21,seriesoffset-21);
    }
    else if(kind=="resistor"){
        createResistor(loopoffset*2,0,seriesoffset-21,seriesoffset-21);
    }
    pop();
  }

function circuitParallel(kind){

    push();
    noFill();
    createBattery(0,0,seriesoffset-4,seriesoffset-4);
    strokeWeight(1);
    stroke(ccircuitRed);

    line(0,-seriesoffset,loopoffset,-seriesoffset);
    line(0,seriesoffset,loopoffset,seriesoffset);
    line(loopoffset,-seriesoffset,loopoffset*2,-seriesoffset);
    line(loopoffset,seriesoffset,loopoffset*2,seriesoffset);
    if(kind=="bulb"){
        createBulb(loopoffset,0,seriesoffset-21,seriesoffset-21);
        createBulb(loopoffset*2,0,seriesoffset-21,seriesoffset-21);
    }
    else if(kind=="resistor"){
        createResistor(loopoffset,0,seriesoffset-21,seriesoffset-21);
        createResistor(loopoffset*2,0,seriesoffset-21,seriesoffset-21);
    }
    pop();
}

function circuitSeries(kind){

    push();
    noFill();
    createBattery(0,0,seriesoffset*2-4,seriesoffset*2-4);
    strokeWeight(1);
    stroke(ccircuitRed);
    line(0,-214,215,-214);
    line(0,214,215,214);

    if(kind=="bulb"){
        createBulb(215,-107,86,86);
        createBulb(215,107,86,86);
    }
    else if(kind=="resistor"){
        createResistor(215,-107,86,86);
        createResistor(215,107,86,86);
    }
    pop();
}

function loopOne(){
    push();
    noStroke();
    fill(ccircuitloopGrey);
    rect(-7,-115,229,15);
    beginShape();
    vertex(-7,-100);
    vertex(7.5,-100);
    vertex(7.5,100);
    vertex(207.5,100);
    vertex(207.5,-100);
    vertex(222.5,-100);
    vertex(222.5,115);
    vertex(-7,115);
    endShape();
    pop();
}

function loopTwo(){
    push();
    noStroke();
    fill(ccircuitloopGrey);
    rect(-7,-115,444,15);
    beginShape();
    vertex(-7,-100);
    vertex(7.5,-100);
    vertex(7.5,100);
    vertex(207.5,100);
    vertex(207.5,-100);
    vertex(222.5,-100);
    vertex(222.5,100);
    vertex(422.5,100);
    vertex(422.5,-100);
    vertex(437.5,-100);
    vertex(437.5,115);
    vertex(-7,115);
    endShape();
    pop();
}

function loopOneStretched(){
    push();
    noStroke();
    fill(ccircuitloopGrey);
    rect(-7,-222.5,229,15);
    beginShape();
    vertex(-7,-222.5);
    vertex(7.5,-222.5);
    vertex(7.5,207.5);
    vertex(207.5,207.5);
    vertex(207.5,-222.5);
    vertex(222.5,-222.5);
    vertex(222.5,222.5);
    vertex(-7,222.5);
    endShape();
    pop();
}

function createBattery(xpos,ypos,upperline,lowerline){ // used to create circuits, not called directly
     push();
     strokeWeight(1);
     stroke(ccircuitRed);
     line(xpos,ypos-5,0,ypos-(upperline+5));
     strokeWeight(2);
     stroke(ccircuitBlack);
     line(xpos-21,ypos-5,xpos+21,ypos-5);
     strokeWeight(3);
     stroke(ccircuitBlack);
     line(xpos-10,ypos+5,xpos+10,ypos+5);
     strokeWeight(1);
     stroke(ccircuitRed);
     line(xpos,ypos+5,xpos,ypos+lowerline+5);
     pop();
   }

function createResistor(xpos,ypos,upperline,lowerline){ // used to create circuits, not called directly
    push();
    strokeWeight(1);
    stroke(ccircuitRed);
    line(xpos,ypos-21,xpos,ypos-(upperline+21));
    noFill();
    stroke(ccircuitBlack);
    rect(xpos-10,ypos-21,20,42);
    stroke(ccircuitRed);
    line(xpos,ypos+21,xpos,ypos+lowerline+21);
    pop();
   }

function createBulb(xpos,ypos,upperline,lowerline){ // used to create circuits, not called directly
    push();
    strokeWeight(1);
    stroke(ccircuitRed);
    line(xpos,ypos-21,xpos,ypos-(upperline+21));
    noFill();
    stroke(ccircuitBlack);
    ellipse(xpos,ypos,42,42);
    stroke(ccircuitRed);
    line(xpos,ypos+21,xpos,ypos+lowerline+21);
    stroke(ccircuitBlack);
    line(xpos-15,ypos-15,xpos+15,ypos+15);
    stroke(ccircuitBlack);
    line(xpos+15,ypos-15,xpos-15,ypos+15);
    pop();
   }

function prism(pheight, pbase, angle){
    push();
    rotate(radians(angle));
    noStroke();
    fill(ctransparent);
    triangle(0,-pheight,-pbase/2,0,pbase/2,0);
    pop();
}

function reflector(quality,angle,length){
    push();
    rotate(radians(angle));
    noStroke();
    if(quality=="poor"){
      fill(cmirrorfront);
      rect(0,-length/2,2,length);
      fill(cmirrorbacking);
      rect(2,-length/2,4,length);
    }
    if(quality=="good"){
      fill(cmirrorfront);
      rect(0,-length/2,3,length);
      fill(cmirrorbacking);
      rect(3,-length/2,3,length);
    }
    if(quality=="better"){
      fill(cmirrorfront);
      rect(0,-length/2,4,length);
      fill(cmirrorbacking);
      rect(4,-length/2,2,length);
    }
     if(quality=="perfect"){
      fill(cmirrorfront);
      rect(0,-length/2,5,length);
      fill(cmirrorbacking);
      rect(5,-length/2,1,length);
    }
    pop();
}

function convexLens(lheight, thickness, lines){
    push();
    noStroke();
    fill(ctransparent);
    bezier(0,-lheight/2,-thickness/2,0,-thickness/2,0,0,lheight/2);
    bezier(0,lheight/2,thickness/2,0,thickness/2,0,0,-lheight/2);
     if(lines)
    {
      stroke(copitcallines);
      strokeWeight(1);
      line(-178,0,178,0);
      line(-76,-9,-76,9);
      line(76,-9,76,9);
      line(0,-lheight/2,0,lheight/2);

    }
    pop();
}

function concaveLens(lheight, thickness, lines){
    push();
    noStroke();
    fill(ctransparent);
    beginShape();
    vertex(-thickness/2,-lheight/2);
    vertex(thickness/2,-lheight/2);
    bezierVertex(0,0,0,0,thickness/2,lheight/2);
    vertex(-thickness/2,lheight/2);
    bezierVertex(0,0,0,0,-thickness/2,-lheight/2);
    endShape();
     if(lines)
    {
      stroke(copitcallines);
      strokeWeight(1);
      line(-178,0,178,0);
      line(-76,-9,-76,9);
      line(76,-9,76,9);
      line(0,-lheight/2,0,lheight/2);

    }
    pop();
}

function transducer(tcolor,angle){
     push();
     rotate(radians(angle));
     noStroke();

     fill(tcolor);

     beginShape();
     vertex(0,0);
     bezierVertex(0,-19,3,-25,9,-37);
     bezierVertex(1,-36,-7,-31,-9,-10);
     vertex(-49,-10);
     bezierVertex(-55,-10,-59,-5,-59,0);
     bezierVertex(-59,5,-55,10,-49,10);
     vertex(-9,10);
     bezierVertex(-7,33,0,38,9,39);
     bezierVertex(3,27,0,21,0,0);
     endShape();

    pop();
   }

function eye(angle){
    push();
    translate(22,0);
    rotate(radians(angle));
    fill(CeyeGrey);
    noStroke();
    ellipse(-15.8,-1.30,15.10,28.30);
    noFill();
    stroke(cBlack);
    strokeWeight(2);
    strokeCap(SQUARE);
    beginShape();
    vertex(-20.45,-28.05);
    bezierVertex(6.6,2.9,32.5,-3,23.30,-1);
    endShape();
    beginShape();
    vertex(15.2,-3);
    bezierVertex(9.95,6,-9,14,0,10);
    bezierVertex(-17.5,15.5,-22,40,-19,28);
    endShape();
    strokeWeight(1);
    arc(4,-2,52,52,PI*0.72,PI*1.25);
    fill(cWhite);
    noStroke();
    ellipse(-14.35,-8,7.8,7.8);
    ellipse(-19.85,-1.15,4.4,11.75);
    fill(cBlack);
    ellipse(-19.55,-1.15,3.67,8.5);
    pop();
}

function waypoint(wcolour){
    var wcolouralpha=wcolour.replace("rgb","rgba");
    wcolouralpha=wcolouralpha.replace(")",",0.4)");
    push();
    smooth();
    stroke(wcolour);
    strokeWeight(1);
    line(0,0,2,-18);
    strokeWeight(1);
    fill(wcolouralpha);
    beginShape();
    vertex(2,-18);
    bezierVertex(3,-22,3,-25,2,-30);
    bezierVertex(10,-35,23,-24,28,-30);
    bezierVertex(26,-23,26,-25,28,-18);
    bezierVertex(10,-12,23,-23,2,-18);
    endShape();
    pop();
}

function magnet(angle, hidelabels){

    var mlength=104;
    var mbreadth=20;
    push();
    noStroke();
    rotate(radians(angle));
    fill(cmagnetpermananet);
    rect(-mbreadth/2,-mlength/2,mbreadth,mlength);
    if(!hidelabels){
      fill(cInvertedText);
      textFont(romanFont,14);
      text("N",-5,-mlength/2+12);
      text("S",-5,mlength/2-5);
    }
      pop();
}

function coil(angle){
      var i=0;
      push();
      rotate(radians(angle));
      noFill();
      stroke(ccoilred);
      strokeWeight(1);
      for(i=-7;i<=7;i++){
        bezier(i*3,22,i*3-3,22-3,i*3+1,-22+3,i*3+4,-22);
      }
      var shift=3;
      for(i=-7;i<=7;i++){
        bezier(i*3+shift,22,i*3+shift+3,22-3,i*3+shift+3,-22+3,i*3+shift+1,-22);
      }
      pop();
}

function fatcoil(){
    stroke(ccoilred);
    noFill();
    beginShape();
    vertex(2.23, 45);
    bezierVertex(-0.73, 45, 2.23, 1, 5.19, 1);
    bezierVertex(8.15, 1, 8.15, 45, 5.19, 45);
    bezierVertex(2.23, 45, 5.19, 1, 8.15, 1);
    bezierVertex(11.11, 1, 11.11, 45, 8.15, 45);
    bezierVertex(5.19, 45, 8.15, 1, 11.11, 1);
    bezierVertex(14.07, 1, 14.07, 45, 11.11, 45);
    bezierVertex(8.15, 45, 11.11, 1, 14.07, 1);
    bezierVertex(17.03, 1, 17.03, 45, 14.07, 45);
    bezierVertex(11.11, 45, 14.07, 1, 17.03, 1);
    bezierVertex(20, 1, 20, 45, 17.03, 45);
    bezierVertex(14.07, 45, 17.03, 1, 20, 1);
    bezierVertex(22.95, 1, 22.95, 45, 20, 45);
    bezierVertex(17.03, 45, 20, 1, 22.95, 1);
    bezierVertex(25.92, 1, 25.92, 45, 22.95, 45);
    bezierVertex(20, 45, 22.95, 1, 25.92, 1);
    bezierVertex(28.88, 1, 28.88, 45, 25.92, 45);
    bezierVertex(22.95, 45, 25.92, 1, 28.88, 1);
    bezierVertex(31.84, 1, 31.84, 45, 28.88, 45);
    bezierVertex(25.92, 45, 28.88, 1, 31.84, 1);
    bezierVertex(34.8, 1, 34.8, 45, 31.84, 45);
    bezierVertex(28.88, 45, 31.84, 1, 34.8, 1);
    bezierVertex(37.76, 1, 37.76, 45, 34.8, 45);
    bezierVertex(31.84, 45, 34.8, 1, 37.76, 1);
    bezierVertex(40.72, 1, 40.72, 45, 37.76, 45);
    bezierVertex(34.8, 45, 37.76, 1, 40.72, 1);
    bezierVertex(43.68, 1, 43.68, 45, 40.72, 45);
    bezierVertex(37.76, 45, 40.72, 1, 43.68, 1);
    bezierVertex(46.64, 1, 46.64, 45, 43.68, 45);
    endShape();
}

function thincoil(){
    stroke(ccoilred);
    noFill();
    beginShape();
    vertex(19.72, 51.69);
    bezierVertex(15.98, 51.69, 15.98, 51.69, 15.98, 47.95);
    bezierVertex(15.98, 44.21, 1, 44.21, 1, 47.95);
    bezierVertex(1, 51.69, 15.98, 47.95, 15.98, 44.21);
    bezierVertex(15.98, 40.46, 1, 40.46, 1, 44.21);
    bezierVertex(1, 47.95, 15.98, 44.21, 15.98, 40.46);
    bezierVertex(15.98, 36.72, 1, 36.72, 1, 40.46);
    bezierVertex(1, 44.21, 15.98, 40.46, 15.98, 36.72);
    bezierVertex(15.98, 32.97, 1, 32.97, 1, 36.72);
    bezierVertex(1, 40.46, 15.98, 36.72, 15.98, 32.97);
    bezierVertex(15.98, 29.23, 1, 29.23, 1, 32.97);
    bezierVertex(1, 36.72, 15.98, 32.97, 15.98, 29.23);
    bezierVertex(15.98, 25.49, 1, 25.49, 1, 29.23);
    bezierVertex(1, 32.97, 15.98, 29.23, 15.98, 25.49);
    bezierVertex(15.98, 21.74, 1, 21.74, 1, 25.49);
    bezierVertex(1, 29.23, 15.98, 25.49, 15.98, 21.74);
    bezierVertex(15.98, 18, 1, 18, 1, 21.74);
    bezierVertex(1, 25.49, 15.98, 21.74, 15.98, 18);
    bezierVertex(15.98, 14.25, 1, 14.25, 1, 18);
    bezierVertex(1, 21.74, 15.98, 18, 15.98, 14.25);
    bezierVertex(15.98, 10.51, 1, 10.51, 1, 14.25);
    bezierVertex(1, 18, 15.98, 14.25, 15.98, 10.51);
    bezierVertex(15.98, 3.02, 1, 7.61, 1, 10.51);
    bezierVertex(1, 14.25, 15.98, 10.51, 15.98, 6.76);
    vertex(15.98, 1.84);
    bezierVertex(15.98, 1.84, 15.18, 0.64, 14.15, 1.11);
    endShape();
}

function compass(angle){
    push();
    rotate(radians(angle));
    noFill();
    stroke(cmagnetcompassouter);
    strokeWeight(1);
    ellipse(0,0,64,64);
    noStroke();
    fill(cmagnetcompassRed);
    triangle(0,-26,-8,0,8,0);
    fill(cmagnetcompassBlue);
    triangle(0,26,-8,0,8,0);
    pop();
}

function PoV(name){
    var povscale = 1;
    var povcolor;
    switch(name){
      case "AliceLeft":
      povcolor = cpovAlice;
      break;
     case "AliceRight":
      povscale = -1;
      povcolor = cpovAlice;
      break;
     case "BobLeft":
      povcolor = cpovBob;
      break;
     case "BobRight":
      povscale = -1;
      povcolor = cpovBob;
      break;
     case "CharlieLeft":
      povcolor = cpovCharlie;
      break;
     case "CharlieRight":
      povscale = -1;
      povcolor = cpovCharlie;
      break;
    }
    push();
    scale(povscale,1);
    fill(povcolor);
    noStroke();
    ellipse(-15.8,-1.30,15.10,28.30);
    noFill();
    stroke(cBlack);
    strokeWeight(2);
    strokeCap(SQUARE);
    beginShape();
    vertex(-20.45,-28.05);
    bezierVertex(6.6,2.9,32.5,-3,23.30,-1);
    endShape();
    beginShape();
    vertex(15.2,-3);
    bezierVertex(9.95,6,-9,14,0,10);
    bezierVertex(-17.5,15.5,-22,40,-19,28);
    endShape();
    strokeWeight(1);
    arc(4,-2,52,52,PI*0.72,PI*1.25);
    fill(cWhite);
    noStroke();
    ellipse(-14.35,-8,7.8,7.8);
    ellipse(-19.85,-1.15,4.4,11.75);
    fill(cBlack);
    ellipse(-19.55,-1.15,3.67,8.5);

    fill(povcolor);
    noStroke();
    ellipse(0,32,35.3,35.3);
    pop();
 }

function PoVEye(name){
    var povscale = 1;
    var povcolor;
    switch(name){
      case "AliceLeft":
      povcolor = cpovAlice;
      break;
     case "AliceRight":
      povscale = -1;
      povcolor = cpovAlice;
      break;
     case "BobLeft":
      povcolor = cpovBob;
      break;
     case "BobRight":
      povscale = -1;
      povcolor = cpovBob;
      break;
     case "CharlieLeft":
      povcolor = cpovCharlie;
      break;
     case "CharlieRight":
      povscale = -1;
      povcolor = cpovCharlie;
      break;
    }
    push();
    scale(povscale,1);
    fill(povcolor);
    noStroke();
    ellipse(-15.8,-1.30,15.10,28.30);
    noFill();
    stroke(0,0,0);
    strokeWeight(2);
    strokeCap(SQUARE);
    beginShape();
    vertex(-20.45,-28.05);
    bezierVertex(6.6,2.9,32.5,-3,23.30,-1);
    endShape();
    beginShape();
    vertex(15.2,-3);
    bezierVertex(9.95,6,-9,14,0,10);
    bezierVertex(-17.5,15.5,-22,40,-19,28);
    endShape();
    strokeWeight(1);
    arc(4,-2,52,52,PI*0.72,PI*1.25);
    fill(255,255,255);
    noStroke();
    ellipse(-14.35,-8,7.8,7.8);
    ellipse(-19.85,-1.15,4.4,11.75);
    fill(0,0,0);
    ellipse(-19.55,-1.15,3.67,8.5);
    pop();
 }

function PoVObject(name){
    var povcolor;
    switch(name){
      case "Alice":
      povcolor = cpovAlice;
      break;
     case "Bob":
      povcolor = cpovBob;
      break;
     case "Charlie":
      povcolor = cpovCharlie;
      break;
    }
    push();
    fill(povcolor);
    noStroke();
    ellipse(0,0,35.3,35.3);
    pop();
  }

function device(number){
    var dwidth = 57;
    var dheight = 75;
    push();
    stroke(cdeviceBlue);
    strokeWeight(0.75);
    fill(cdeviceLightGrey);
    var doffSetX = -dwidth/2;
    var doffSetY = -dheight/2;
    rect(doffSetX,doffSetY,dwidth,dheight);
    stroke(cdeviceGrey);
    noFill();
    strokeWeight(6);
    strokeCap(SQUARE);
    bezier(-28,-27,9,-28,-8,27,28,27);
    if(number=="two"){
      bezier(-6,-16,-4,-10,5,4,28,4);
    }else if(number=="three"){
      bezier(-6,-16,-4,-10,5,4,28,4);
      bezier(-6,-16,6,-1,7,-23,28,-23);
    }
    pop();
 }

function powerPathway(kind){
    var cpathwayBluealpha=cpathwayBlue.replace("rgb","rgba");
    var cpathwayBluepale=cpathwayBluealpha.replace(")",",0.5)");
    var cpathwayBlueStronger=cpathwayBluealpha.replace(")",",0.75)");
    fill(cenergy);
    strokeWeight(1);
    stroke(cpathwayBlue);
    beginShape();
    vertex(1,1);
    bezierVertex(0,-1,36,12,54,12);
    vertex(54,33);
    bezierVertex(54,37,17,23,1,23);
    endShape(CLOSE);

    if(kind == "electrical"){
      strokeWeight(0.5);
      stroke(cpathwayBlue);
      line(6,4,6,8);
      line(8,6,4,6);
      line(10,7,10,12);
      line(12,10,8,10);
      line(6,11,6,15);
      line(8,13,4,13);
      line(10,16,10,20);
      line(12,18,8,18);
      fill(cpathwayBlue);
      ellipse(22,13,2,2);
      line(21,13,32,13);
      line(29,14,31,13);
      line(31,13,29,12);
      line(21,13,31,13);
      ellipse(25,18,2,2);
      line(24,18,35,18);
      line(31,19,34,18);
      line(34,18,31,17);
      line(24,18,34,18);
      ellipse(21,21,2,2);
      line(20,21,30,21);
      line(27,23,30,21);
      line(30,21,27,20);
      line(20,21,30,21);
      line(50,15,46,15);
      line(47,19,42,19);
      line(50,24,46,24);
      line(47,27,42,27);
    }
    else if(kind=="particles"){
      noStroke();
      fill(cpathwayBlue);
      ellipse(5,9,3,3);
      fill(cpathwayBlueStronger);
      ellipse(6,10,3,3);
      fill(cpathwayBluepale);
      ellipse(8,12,3,3);

      fill(cpathwayBlue);
      ellipse(52,16,3,3);
      fill(cpathwayBlueStronger);
      ellipse(51,19,3,3);
      fill(cpathwayBluepale);
      ellipse(50,19,3,3);

      fill(cpathwayBlue);
      ellipse(13,12,3,3);
      fill(cpathwayBlueStronger);
      ellipse(15,11,3,3);
      fill(cpathwayBluepale);
      ellipse(18,10,3,3);

      fill(cpathwayBlue);
      ellipse(8,17,3,3);
      fill(cpathwayBlueStronger);
      ellipse(9,19,3,3);
      fill(cpathwayBluepale);
      ellipse(10,22,3,3);

      fill(cpathwayBlue);
      ellipse(15,17,3,3);
      fill(cpathwayBlueStronger);
      ellipse(17,19,3,3);
      fill(cpathwayBluepale);
      ellipse(20,22,3,3);

      fill(cpathwayBlue);
      ellipse(45,17,3,3);
      fill(cpathwayBlueStronger);
      ellipse(46,20,3,3);
      fill(cpathwayBluepale);
      ellipse(46,21,3,3);

      fill(cpathwayBlue);
      ellipse(51,28,3,3);
      fill(cpathwayBlueStronger);
      ellipse(48,27,3,3);
      fill(cpathwayBluepale);
      ellipse(48,26,3,3);

      fill(cpathwayBlue);
      ellipse(41,30,3,3);
      fill(cpathwayBlueStronger);
      ellipse(41,27,3,3);
      fill(cpathwayBluepale);
      ellipse(41,26,3,3);
    }
    else if(kind == "mechanical"){
      strokeWeight(1);
      stroke(cpathwayBlue);
      line(46,27,49,23);
      line(49,23,46,19);
      line(46,19,44,19);
      line(44,19,48,22);
      line(48,22,30,23);
      line(30,23,30,23);
      line(30,23,48,23);
      line(48,23,44,27);
      line(44,27,46,27);
      fill(cpathwayBlue);
      beginShape();
      vertex(28,13);
      vertex(5,13);
      vertex(5,14);
      vertex(24,14);
      vertex(24,14);
      vertex(28,14);
      vertex(26,16);
      vertex(31,14);
      vertex(26,11);
      endShape();
    }
    else if(kind == "radiation"){
      fill(cpathwayBluepale);
      noStroke();
      ellipse(6,13,3,3);
      ellipse(6,12,3,3);
      ellipse(6,7,3,3);
      ellipse(6,7,3,3);
      ellipse(6,9,3,3);
      ellipse(7,11,3,3);

      ellipse(50,24,3,3);
      ellipse(50,24,3,3);
      ellipse(50,18,3,3);
      ellipse(50,19,3,3);
      ellipse(50,21,3,3);
      ellipse(50,23,3,3);
      strokeWeight(1);
      stroke(cpathwayBlue);
      bezier(14,12,15,11,16,10,18,10);
      bezier(18,10,20,11,18,17,21,18);
      bezier(21,18,23,18,26,13,28,14);
      bezier(28,14,30,15,30,21,32,21);
      bezier(32,21,33,22,37,17,39,18);
      bezier(39,18,41,19,41,22,41,25);
    }
}

function storeEmptier(type){
    var sblackalpha5=cBlack.replace("rgb","rgba");
    sblackalpha5=sblackalpha5.replace(")",",0.3)");

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(20,61,0,78);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(20,61,20,62);
    line(20,62,82,62);
    line(82,62,82,0);
    line(82,0,20,0);
    line(20,0,20,61);

    fill(cstoresOrange);
    noStroke();
    beginShape();
    vertex(83,61);
    vertex(83,33);
    vertex(61,50);
    vertex(61,79);
    endShape(CLOSE);

    fill(cstoreslightOrange);
    noStroke();
    beginShape();
    vertex(61,79);
    vertex(61,50);
    vertex(0,50);
    vertex(0,79);
    endShape(CLOSE);

    fill(cstoreslighterOrange);
    noStroke();
    beginShape();
    vertex(82,33);
    vertex(20,33);
    vertex(0,50);
    vertex(61,50);
    endShape(CLOSE);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(20,0,0,17);
    line(0,17,0,78);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(82,62,82,0);
    line(82,0,61,17);
    line(61,17,61,79);
    line(61,79,82,62);

    fill(sblackalpha5);
    noStroke();
    rect(0,17,61,62);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(0,17,0,79);
    line(0,79,61,79);
    line(61,79,61,17);
    line(61,17,0,17);

    if(type=="elastic"){

      fill(cstorespaleBlue);
      strokeWeight(0.7);
      stroke(cstoresdarkBlue);
      beginShape();
      vertex(10,67);
      bezierVertex(9,63,8,57,7,50);
      bezierVertex(6,43,5,38,3,35);
      vertex(9,33);
      bezierVertex(11,36,12,41,13,48);
      bezierVertex(13,55,14,61,15,65);
      endShape(CLOSE);
      beginShape();
      vertex(23,67);
      bezierVertex(22,63,21,57,21,50);
      bezierVertex(20,43,19,38,17,35);
      vertex(23,33);
      bezierVertex(25,38,26,43,26,48);
      bezierVertex(27,55,28,61,29,65);
      endShape(CLOSE);

      beginShape();
      vertex(40,48);
      bezierVertex(41,55,42,61,43,65);
      vertex(37,67);
      bezierVertex(36,63,35,57,34,50);
      bezierVertex(34,46,33,42,32,39);
      bezierVertex(32,37,31,36,31,35);
      vertex(37,33);
      bezierVertex(38,36,39,41,40,48);
      endShape(CLOSE);

      beginShape();
      vertex(50,33);
      bezierVertex(52,36,53,41,54,48);
      bezierVertex(54,55,55,61,56,65);
      vertex(50,67);
      bezierVertex(49,63,49,57,48,50);
      bezierVertex(47,46,47,42,46,39);
      bezierVertex(45,37,45,36,44,35);
      vertex(50,33);
      endShape(CLOSE);

      fill(183,227,234);
      strokeWeight(0.5);
      stroke(cstoresdarkBlue);
      ellipse(53,66,6,6);
      ellipse(6,34,6,6);

      fill(183,227,234);
      strokeWeight(0.7);
      stroke(cstoresdarkBlue);
      beginShape();
      vertex(43,67);
      bezierVertex(42,69,41,70,40,70);
      bezierVertex(39,70,38,69,37,69);
      bezierVertex(37,68,37,67,37,67);
      bezierVertex(37,66,37,66,37,65);
      bezierVertex(37,61,38,56,39,49);
      bezierVertex(41,42,42,37,44,33);
      bezierVertex(45,31,46,31,47,31);
      bezierVertex(48,31,49,31,50,31);
      bezierVertex(50,32,50,33,50,34);
      bezierVertex(50,34,50,34,50,35);
      bezierVertex(48,38,47,44,45,51);
      bezierVertex(44,58,43,63,43,67);
      endShape();

      beginShape();
      vertex(32,51);
      bezierVertex(29,63,29,67);
      bezierVertex(29,69,28,70,26,70);
      bezierVertex(25,70,25,69,24,69);
      bezierVertex(23,68,23,67,23,67);
      vertex(23,67,23,65);
      bezierVertex(23,61,24,56,26,49);
      bezierVertex(28,40,30,34,31,33);
      bezierVertex(31,31,32,31,34,31);
      bezierVertex(34,31,35,31,36,31);
      bezierVertex(36,32,37,33,37,34);
      bezierVertex(37,34,37,34,37,35);
      bezierVertex(35,39,33,44,32,51);
      endShape();

      beginShape();
      vertex(18,51);
      bezierVertex(17,58,16,63,15,67);
      bezierVertex(15,69,14,70,12,70);
      bezierVertex(12,70,11,69,10,69);
      bezierVertex(10,68,9,67,9,67);
      bezierVertex(9,66,10,66,10,65);
      bezierVertex(10,61,11,56,12,49);
      bezierVertex(14,40,16,35,17,33);
      bezierVertex(18,31,19,31,20,31);
      bezierVertex(21,31,22,31,22,31);
      bezierVertex(23,32,23,33,23,34);
      bezierVertex(23,34,23,34,23,35);
      bezierVertex(21,38,19,44,18,51);
      endShape();

    }
    else if(type=="chemical"){


      fill(cstoresdarkRed);
      stroke(cstoresdarkBlue);
      strokeWeight(0.7);
      ellipse(16,31,10,10);
      fill(cstoresmidBlue);
      ellipse(20,38,10,10);
      fill(cstoresdarkRed);
      ellipse(12,39,10,10);

      fill(cstoresmidBlue);
      ellipse(40,32,10,10);
      fill(cstoresdarkRed);
      ellipse(35,37,10,10);
      fill(cstoresdarkRed);
      ellipse(44,37,10,10);

      fill(cstoresdarkRed);
      ellipse(20,55,10,10);
      fill(cstoresmidBlue);
      ellipse(20,64,10,10);
      fill(cstoresdarkRed);
      ellipse(14,59,10,10);

      fill(cstoresdarkRed);
      ellipse(40,55,10,10);
      fill(cstoresdarkRed);
      ellipse(45,64,10,10);
      fill(cstoresmidBlue);
      ellipse(47,55,10,10);
    }
    else if(type=="vibration"){
        var svibrationlight = cstoresvibrationlightgreyBlue;
        var svibrationlightalpha=cstoresvibrationlightgreyBlue.replace("rgb","rgba");
        var svibrationlightalpha2 =svibrationlightalpha.replace(")",",0.2)");
        var svibrationlightalpha4 =svibrationlightalpha.replace(")",",0.4)");
        var svibrationlightalpha6 =svibrationlightalpha.replace(")",",0.6)");

        var svibrationdark=cstoresvibrationdarkgreyBlue;
        var svibrationdarkalpha=cstoresvibrationdarkgreyBlue.replace("rgb","rgba");
        var svibrationdarkalpha2 =svibrationdarkalpha.replace(")",",0.2)");
        var svibrationdarkalpha4 =svibrationdarkalpha.replace(")",",0.4)");
        var svibrationdarkalpha6 =svibrationdarkalpha.replace(")",",0.6)");

      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(9,31,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(9,37,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(9,44,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(9,51,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(9,56,7.5,7.5);
      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(9,61,7.5,7.5);

      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(23,42,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(23,48,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(23,53,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(23,60,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(23,68,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(23,72,7.5,7.5);

      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(38,28,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(38,34,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(38,40,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(38,47,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(38,55,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(38,59,7.5,7.5);
      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(38,63,7.5,7.5);

      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(53,26,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(53,32,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(53,39,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(53,44,7.5,7.5);
      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(53,48,7.5,7.5);
    }
    else if(type=="gravity"){

      fill(cstoresdarkGrey);
      noStroke();
      ellipse(30.3,42,12.4,12.4);
      beginShape();
      vertex(61,79);
      vertex(61,69);
      bezierVertex(35,44,0,67,0,67);
      vertex(0,79);
      endShape(CLOSE);
    }
    else if(type=="kinetic"){

        var skinetic = cstoreskineticGrey;
        var skineticalpha=cstoreskineticGrey.replace("rgb","rgba");
        var skineticalpha4 =skineticalpha.replace(")",",0.4)");
        var skineticalpha6 =skineticalpha.replace(")",",0.6)");

      fill(skineticalpha4);
      noStroke();
      beginShape();
      vertex(12,34);
      vertex(12,64);
      vertex(42,64);
      vertex(42,34);
      endShape(CLOSE);

      fill(skineticalpha6);
      beginShape();
      vertex(16,34);
      vertex(16,64);
      vertex(46,64);
      vertex(46,34);
      endShape(CLOSE);

      fill(skinetic);
      beginShape();
      vertex(20,34);
      vertex(20,64);
      vertex(50,64);
      vertex(50,34);
      endShape(CLOSE);

    }
    else if(type=="thermal"){

      thermalParticles(7,29,16,3,3);
      thermalParticles(46,30,168,3,3);
      thermalParticles(28,45,127,3,3);
      thermalParticles(52,40,138,3,3);
      thermalParticles(52,70,-127,3,3);
      thermalParticles(9,59,44,3,3);
      thermalParticles(27,74,-43,3,3);
    }
    else if(type=="nuclear"){
      noStroke();
      fill(cstoresnuclearYellow);
      ellipse(20,36,21,21);
      fill(cstoresnuclearOrange);
      ellipse(20,36,15.3,15.3);
      fill(cstoresnuclearGrey);
      ellipse(20,36,9,9);

      fill(cstoresnuclearYellow);
      ellipse(45,39,14,14);
      fill(cstoresnuclearOrange);
      ellipse(45,39,10,10);
      fill(cstoresnuclearGrey);
      ellipse(45,39,5,5);

      fill(cstoresnuclearBlue);
      ellipse(30,62,12,12);
      fill(cstoresnuclearGrey);
      ellipse(30,62,5,5);

    }
    else if(type=="electricmagnetic"){
      fill(cstoresmidGrey);
      noStroke();
      beginShape();
      vertex(49,38);
      vertex(51,36);
      vertex(51,26);
      vertex(49,28);
      endShape(CLOSE);

      fill(cstoresdarkerRed);
      beginShape();
      vertex(51,36);
      vertex(49,38);
      vertex(49,48);
      vertex(51,45);
      endShape(CLOSE);

      fill(cstoreslightGrey);
      beginShape();
      vertex(49,38);
      vertex(49,28);
      vertex(9,28);
      vertex(9,38);
      endShape(CLOSE);

      fill(cstoresdarkerGrey);
      beginShape();
      vertex(49,28);
      vertex(51,26);
      vertex(12,26);
      vertex(9,28);
      endShape(CLOSE);

      fill(cstoreslightRed);
      beginShape();
      vertex(49,48);
      vertex(49,38);
      vertex(9,38);
      vertex(9,48);
      endShape(CLOSE);

      fill(cstoreslightBlue);
      beginShape();
      vertex(49,52);
      vertex(51,49);
      vertex(12,49);
      vertex(9,52);
      endShape(CLOSE);

      fill(cstoresmiddlingBlue);
      beginShape();
      vertex(49,62);
      vertex(49,52);
      vertex(9,52);
      vertex(9,62);
      endShape(CLOSE);

      fill(cstoresgreyBlue);
      beginShape();
      vertex(51,59);
      vertex(51,49);
      vertex(49,52);
      vertex(49,62);
      endShape(CLOSE);

      fill(cstoresmidGrey);
      beginShape();
      vertex(51,59);
      vertex(49,62);
      vertex(49,71);
      vertex(51,69);
      endShape(CLOSE);

      fill(cstoreslightGrey);
      beginShape();
      vertex(49,71);
      vertex(49,62);
      vertex(9,62);
      vertex(9,71);
      endShape(CLOSE);
    }
}

function storeFuller(type){
    var sblackalpha5=cBlack.replace("rgb","rgba");
    sblackalpha5=sblackalpha5.replace(")",",0.3)");

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(20,61,0,78);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(20,61,20,62);
    line(20,62,82,62);
    line(82,62,82,0);
    line(82,0,20,0);
    line(20,0,20,61);

    fill(cstoresOrange);
    noStroke();
    beginShape();
    vertex(83,62);
    vertex(83,8);
    vertex(62,25);
    vertex(62,80);
    endShape(CLOSE);

    fill(cstoreslightOrange);
    noStroke();
    beginShape();
    vertex(62,80);
    vertex(62,25);
    vertex(0,25);
    vertex(0,80);
    endShape(CLOSE);

    fill(cstoreslighterOrange);
    noStroke();
    beginShape();
    vertex(83,8);
    vertex(21,8);
    vertex(0,25);
    vertex(62,25);
    endShape(CLOSE);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(20,0,0,17);
    line(0,17,0,78);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(82,62,82,0);
    line(82,0,61,17);
    line(61,17,61,79);
    line(61,79,82,62);

    fill(sblackalpha5);
    noStroke();
    rect(0,17,61,62);

    strokeWeight(0.7);
    stroke(cstoresdarkBlue);
    line(0,17,0,79);
    line(0,79,61,79);
    line(61,79,61,17);
    line(61,17,0,17);

    if(type=="elastic"){

      fill(cstorespaleBlue);
      strokeWeight(0.7);
      stroke(cstoresdarkBlue);
      beginShape();
      vertex(10,67);
      bezierVertex(9,63,8,57,7,50);
      bezierVertex(6,43,5,38,3,35);
      vertex(9,33);
      bezierVertex(11,36,12,41,13,48);
      bezierVertex(13,55,14,61,15,65);
      endShape(CLOSE);
      beginShape();
      vertex(23,67);
      bezierVertex(22,63,21,57,21,50);
      bezierVertex(20,43,19,38,17,35);
      vertex(23,33);
      bezierVertex(25,38,26,43,26,48);
      bezierVertex(27,55,28,61,29,65);
      endShape(CLOSE);

      beginShape();
      vertex(40,48);
      bezierVertex(41,55,42,61,43,65);
      vertex(37,67);
      bezierVertex(36,63,35,57,34,50);
      bezierVertex(34,46,33,42,32,39);
      bezierVertex(32,37,31,36,31,35);
      vertex(37,33);
      bezierVertex(38,36,39,41,40,48);
      endShape(CLOSE);

      beginShape();
      vertex(50,33);
      bezierVertex(52,36,53,41,54,48);
      bezierVertex(54,55,55,61,56,65);
      vertex(50,67);
      bezierVertex(49,63,49,57,48,50);
      bezierVertex(47,46,47,42,46,39);
      bezierVertex(45,37,45,36,44,35);
      vertex(50,33);
      endShape(CLOSE);

      fill(183,227,234);
      strokeWeight(0.5);
      stroke(cstoresdarkBlue);
      ellipse(53,66,6,6);
      ellipse(6,34,6,6);

      fill(183,227,234);
      strokeWeight(0.7);
      stroke(cstoresdarkBlue);
      beginShape();
      vertex(43,67);
      bezierVertex(42,69,41,70,40,70);
      bezierVertex(39,70,38,69,37,69);
      bezierVertex(37,68,37,67,37,67);
      bezierVertex(37,66,37,66,37,65);
      bezierVertex(37,61,38,56,39,49);
      bezierVertex(41,42,42,37,44,33);
      bezierVertex(45,31,46,31,47,31);
      bezierVertex(48,31,49,31,50,31);
      bezierVertex(50,32,50,33,50,34);
      bezierVertex(50,34,50,34,50,35);
      bezierVertex(48,38,47,44,45,51);
      bezierVertex(44,58,43,63,43,67);
      endShape();

      beginShape();
      vertex(32,51);
      bezierVertex(29,63,29,67);
      bezierVertex(29,69,28,70,26,70);
      bezierVertex(25,70,25,69,24,69);
      bezierVertex(23,68,23,67,23,67);
      vertex(23,67,23,65);
      bezierVertex(23,61,24,56,26,49);
      bezierVertex(28,40,30,34,31,33);
      bezierVertex(31,31,32,31,34,31);
      bezierVertex(34,31,35,31,36,31);
      bezierVertex(36,32,37,33,37,34);
      bezierVertex(37,34,37,34,37,35);
      bezierVertex(35,39,33,44,32,51);
      endShape();

      beginShape();
      vertex(18,51);
      bezierVertex(17,58,16,63,15,67);
      bezierVertex(15,69,14,70,12,70);
      bezierVertex(12,70,11,69,10,69);
      bezierVertex(10,68,9,67,9,67);
      bezierVertex(9,66,10,66,10,65);
      bezierVertex(10,61,11,56,12,49);
      bezierVertex(14,40,16,35,17,33);
      bezierVertex(18,31,19,31,20,31);
      bezierVertex(21,31,22,31,22,31);
      bezierVertex(23,32,23,33,23,34);
      bezierVertex(23,34,23,34,23,35);
      bezierVertex(21,38,19,44,18,51);
      endShape();

    }
    else if(type=="chemical"){


      fill(cstoresdarkRed);
      stroke(cstoresdarkBlue);
      strokeWeight(0.7);
      ellipse(16,31,10,10);
      fill(cstoresmidBlue);
      ellipse(20,38,10,10);
      fill(cstoresdarkRed);
      ellipse(12,39,10,10);

      fill(cstoresmidBlue);
      ellipse(40,32,10,10);
      fill(cstoresdarkRed);
      ellipse(35,37,10,10);
      fill(cstoresdarkRed);
      ellipse(44,37,10,10);

      fill(cstoresdarkRed);
      ellipse(20,55,10,10);
      fill(cstoresmidBlue);
      ellipse(20,64,10,10);
      fill(cstoresdarkRed);
      ellipse(14,59,10,10);

      fill(cstoresdarkRed);
      ellipse(40,55,10,10);
      fill(cstoresdarkRed);
      ellipse(45,64,10,10);
      fill(cstoresmidBlue);
      ellipse(47,55,10,10);
    }
    else if(type=="vibration"){
        var svibrationlight = cstoresvibrationlightgreyBlue;
        var svibrationlightalpha=cstoresvibrationlightgreyBlue.replace("rgb","rgba");
        var svibrationlightalpha2 =svibrationlightalpha.replace(")",",0.2)");
        var svibrationlightalpha4 =svibrationlightalpha.replace(")",",0.4)");
        var svibrationlightalpha6 =svibrationlightalpha.replace(")",",0.6)");

        var svibrationdark=cstoresvibrationdarkgreyBlue;
        var svibrationdarkalpha=cstoresvibrationdarkgreyBlue.replace("rgb","rgba");
        var svibrationdarkalpha2 =svibrationdarkalpha.replace(")",",0.2)");
        var svibrationdarkalpha4 =svibrationdarkalpha.replace(")",",0.4)");
        var svibrationdarkalpha6 =svibrationdarkalpha.replace(")",",0.6)");

      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(9,31,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(9,37,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(9,44,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(9,51,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(9,56,7.5,7.5);
      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(9,61,7.5,7.5);

      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(23,42,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(23,48,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(23,53,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(23,60,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(23,68,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(23,72,7.5,7.5);

      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(38,28,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(38,34,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(38,40,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(38,47,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(38,55,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(38,59,7.5,7.5);
      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(38,63,7.5,7.5);

      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(53,26,7.5,7.5);
      fill(svibrationlight);
      stroke(svibrationdark);
      strokeWeight(0.7);
      ellipse(53,32,7.5,7.5);
      fill(svibrationlightalpha6);
      stroke(svibrationdarkalpha6);
      strokeWeight(0.7);
      ellipse(53,39,7.5,7.5);
      fill(svibrationlightalpha4);
      stroke(svibrationdarkalpha4);
      strokeWeight(0.7);
      ellipse(53,44,7.5,7.5);
      fill(svibrationlightalpha2);
      stroke(svibrationdarkalpha2);
      strokeWeight(0.7);
      ellipse(53,48,7.5,7.5);
    }
    else if(type=="gravity"){

      fill(cstoresdarkGrey);
      noStroke();
      ellipse(30.3,42,12.4,12.4);
      beginShape();
      vertex(61,79);
      vertex(61,69);
      bezierVertex(35,44,0,67,0,67);
      vertex(0,79);
      endShape(CLOSE);
    }
    else if(type=="kinetic"){

        var skinetic = cstoreskineticGrey;
        var skineticalpha=cstoreskineticGrey.replace("rgb","rgba");
        var skineticalpha4 =skineticalpha.replace(")",",0.4)");
        var skineticalpha6 =skineticalpha.replace(")",",0.6)");

      fill(skineticalpha4);
      noStroke();
      beginShape();
      vertex(12,34);
      vertex(12,64);
      vertex(42,64);
      vertex(42,34);
      endShape(CLOSE);

      fill(skineticalpha6);
      beginShape();
      vertex(16,34);
      vertex(16,64);
      vertex(46,64);
      vertex(46,34);
      endShape(CLOSE);

      fill(skinetic);
      beginShape();
      vertex(20,34);
      vertex(20,64);
      vertex(50,64);
      vertex(50,34);
      endShape(CLOSE);

    }
    else if(type=="thermal"){

      thermalParticles(7,29,16,3,3);
      thermalParticles(46,30,168,3,3);
      thermalParticles(28,45,127,3,3);
      thermalParticles(52,40,138,3,3);
      thermalParticles(52,70,-127,3,3);
      thermalParticles(9,59,44,3,3);
      thermalParticles(27,74,-43,3,3);
    }
    else if(type=="nuclear"){
      noStroke();
      fill(cstoresnuclearYellow);
      ellipse(20,36,21,21);
      fill(cstoresnuclearOrange);
      ellipse(20,36,15.3,15.3);
      fill(cstoresnuclearGrey);
      ellipse(20,36,9,9);

      fill(cstoresnuclearYellow);
      ellipse(45,39,14,14);
      fill(cstoresnuclearOrange);
      ellipse(45,39,10,10);
      fill(cstoresnuclearGrey);
      ellipse(45,39,5,5);

      fill(cstoresnuclearBlue);
      ellipse(30,62,12,12);
      fill(cstoresnuclearGrey);
      ellipse(30,62,5,5);

    }
    else if(type=="electricmagnetic"){
      fill(cstoresmidGrey);
      noStroke();
      beginShape();
      vertex(49,38);
      vertex(51,36);
      vertex(51,26);
      vertex(49,28);
      endShape(CLOSE);

      fill(cstoresdarkerRed);
      beginShape();
      vertex(51,36);
      vertex(49,38);
      vertex(49,48);
      vertex(51,45);
      endShape(CLOSE);

      fill(cstoreslightGrey);
      beginShape();
      vertex(49,38);
      vertex(49,28);
      vertex(9,28);
      vertex(9,38);
      endShape(CLOSE);

      fill(cstoresdarkerGrey);
      beginShape();
      vertex(49,28);
      vertex(51,26);
      vertex(12,26);
      vertex(9,28);
      endShape(CLOSE);

      fill(cstoreslightRed);
      beginShape();
      vertex(49,48);
      vertex(49,38);
      vertex(9,38);
      vertex(9,48);
      endShape(CLOSE);

      fill(cstoreslightBlue);
      beginShape();
      vertex(49,52);
      vertex(51,49);
      vertex(12,49);
      vertex(9,52);
      endShape(CLOSE);

      fill(cstoresmiddlingBlue);
      beginShape();
      vertex(49,62);
      vertex(49,52);
      vertex(9,52);
      vertex(9,62);
      endShape(CLOSE);

      fill(cstoresgreyBlue);
      beginShape();
      vertex(51,59);
      vertex(51,49);
      vertex(49,52);
      vertex(49,62);
      endShape(CLOSE);

      fill(cstoresmidGrey);
      beginShape();
      vertex(51,59);
      vertex(49,62);
      vertex(49,71);
      vertex(51,69);
      endShape(CLOSE);

      fill(cstoreslightGrey);
      beginShape();
      vertex(49,71);
      vertex(49,62);
      vertex(9,62);
      vertex(9,71);
      endShape(CLOSE);
    }
}

function thermalParticles(startX, startY, angle,noOfParticles,gap){ //Function to create thermal particles. Used while creating thermal store.
    var initialOpacity = 1-noOfParticles*0.2;
    var sthermaldarkalpha=cstorethermaldarkBlue.replace("rgb","rgba");
    var sthermallightalpha=cstorethermallightBlue.replace("rgb","rgba");
    for(var i=0;i<noOfParticles;i++){
        var alphaNow = ","+str(initialOpacity*(i+1))+")";
        var strokeNow = sthermaldarkalpha.replace(")",alphaNow);
        var fillNow = sthermallightalpha.replace(")",alphaNow);
      stroke(strokeNow);
      fill(fillNow);
      var xPos = startX + cos(radians(angle))*gap*i;
      var yPos = startY + sin(radians(angle))*gap*i;
      ellipse(xPos,yPos,7,7);
    }
}


//physics quantitative

function quantity(value,qcolor,label){
    var qwidth=20;
    push();
    fill(qcolor);
    noStroke();
    var qheight = value*pixelscaling;
    rect(-qwidth/2,-qheight,qwidth,qheight);
    textFont(italicFont,14);
    fill(clabeltext);
    text(label,qwidth-5,0);
    pop();
}

function energy(value){
    push();
    fill(cenergy);
    noStroke();
    var ewidth = 40;
    eheight = value*pixelscaling;
    eoffSetX = -ewidth*0.5;
    eoffSetY = -eheight;
    rect(eoffSetX,eoffSetY,ewidth,eheight);
    pop();
}

function power(value){
    push();
    stroke(cpathwayBlue);
    strokeWeight(1);
    fill(cenergy);

    var pwidth = 60;
    var widthOfArrow = 10;
    var pheight = value * pixelscaling;
    var poffSetX = -pwidth/2;
    var poffSetY = -pheight;
	if(value>0){
		beginShape();
		vertex(poffSetX,poffSetY);
		vertex(pwidth/2-widthOfArrow,-pheight);
		vertex(pwidth/2,-pheight/2);
		vertex(pwidth/2-widthOfArrow,0);
		vertex(poffSetX,0);
		endShape(CLOSE);
	} else if(value<0) {
		beginShape();
		vertex(-poffSetX,poffSetY);
		vertex(-pwidth/2+widthOfArrow,-pheight);
		vertex(-pwidth/2,-pheight/2);
		vertex(-pwidth/2+widthOfArrow,0);
		vertex(-poffSetX,0);
		endShape(CLOSE);
	} else{
// 		do not draw
	}
    pop();

}

function quantum(value){
    push();
    fill(cenergy);
    noStroke();
    var quantumdiameter = value * pixelscaling;
    ellipse(0,0,quantumdiameter,quantumdiameter);
    pop();
}

function resistance(value){
    var rwidth=20;
    push();
    fill(cresistance);
    noStroke();
    var resistanceheight = value * pixelscaling;
    rect(100,-resistanceheight,rwidth,resistanceheight);
    textFont(italicFont,14);
    fill(clabeltext);
    text("R",100+rwidth+5,0);
    pop();
}

function current(value){
    var arrowHeadSize=30;
    var currentInPixels = value * pixelscaling;
    var cheight = abs(currentInPixels);
    //this value is used to change the direction of arrow
    var arrowlength=currentInPixels;
    var coffSetX = -(60+arrowHeadSize);
    var coffSetY=  -cheight/2;
    push();
    if(arrowlength>=0){
        fill(ccurrent);
        noStroke();
        beginShape();
        vertex(coffSetX+arrowHeadSize/2,coffSetY);
        vertex(coffSetX,coffSetY+arrowHeadSize);
        vertex(coffSetX+3,coffSetY+arrowHeadSize);
        vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY+10);
        vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY+cheight);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY+cheight);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY+10);
        vertex(coffSetX+arrowHeadSize-3,coffSetY+arrowHeadSize);
        vertex(coffSetX+arrowHeadSize,coffSetY+arrowHeadSize);
        endShape();
    }else{
        fill(ccurrent);
        noStroke();
        beginShape();
        vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY+cheight-10);
        vertex(coffSetX+arrowHeadSize-3,coffSetY+cheight-arrowHeadSize);
        vertex(coffSetX+arrowHeadSize,coffSetY+cheight-arrowHeadSize);
        vertex(coffSetX+arrowHeadSize/2,coffSetY+cheight);
        vertex(coffSetX,coffSetY+cheight-arrowHeadSize);
        vertex(coffSetX+3,coffSetY+cheight-arrowHeadSize);
         vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY+cheight-10);
        endShape();
        }
    textFont(italicFont,14);
    fill(clabeltext);
    text("I",coffSetX-15,0);
    pop();
}

function currentArrow(value, angle){
if (value!=0){
    var arrowHeadSize=30;
    var currentInPixels = value * pixelscaling;
    var cheight = abs(currentInPixels);
    //this value is used to change the direction of arrow
    var arrowlength=currentInPixels;
    var coffSetX = -(60+arrowHeadSize);
    var coffSetY=  -cheight/2;
    push();
    rotate(radians(angle));
    if(arrowlength>=0){
        fill(ccurrent);
        noStroke();
        beginShape();
        vertex(coffSetX+arrowHeadSize/2,coffSetY);
        vertex(coffSetX,coffSetY+arrowHeadSize);
        vertex(coffSetX+3,coffSetY+arrowHeadSize);
        vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY+10);
        vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY+cheight);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY+cheight);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY+10);
        vertex(coffSetX+arrowHeadSize-3,coffSetY+arrowHeadSize);
        vertex(coffSetX+arrowHeadSize,coffSetY+arrowHeadSize);
        endShape();
    }else{
        fill(ccurrent);
        noStroke();
        beginShape();
        vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY);
        vertex(coffSetX+arrowHeadSize/2+1.5,coffSetY+cheight-10);
        vertex(coffSetX+arrowHeadSize-3,coffSetY+cheight-arrowHeadSize);
        vertex(coffSetX+arrowHeadSize,coffSetY+cheight-arrowHeadSize);
        vertex(coffSetX+arrowHeadSize/2,coffSetY+cheight);
        vertex(coffSetX,coffSetY+cheight-arrowHeadSize);
        vertex(coffSetX+3,coffSetY+cheight-arrowHeadSize);
         vertex(coffSetX+arrowHeadSize/2-1.5,coffSetY+cheight-10);
        endShape();
        }
    pop();
    }
}

function pd(value){
    var pdwidth=35;
    push();
    var pdInPixels = value * pixelscaling;
    var pdheight = abs(pdInPixels);
    var pdoffSetX = 38;
    var pdoffSetY = -(pdheight/2+3);
    if(pdheight>20){
        fill(cpotentialdifference);
        noStroke();
        beginShape();
        vertex(pdoffSetX,pdoffSetY);
        vertex(pdoffSetX+pdwidth,pdoffSetY);
        vertex(pdoffSetX+pdwidth,pdoffSetY+pdheight/2-10);
        vertex(pdoffSetX+pdwidth-3,pdoffSetY+pdheight/2-10);
        vertex(pdoffSetX+pdwidth-3,pdoffSetY+3);
        vertex(pdoffSetX,pdoffSetY+3);
        endShape();
        fill(cpotentialdifference);
        noStroke();
        beginShape();
        vertex(pdoffSetX,pdoffSetY+pdheight+3);
        vertex(pdoffSetX+pdwidth,pdoffSetY+pdheight+3);
        vertex(pdoffSetX+pdwidth,pdoffSetY+pdheight/2+10);
        vertex(pdoffSetX+pdwidth-3,pdoffSetY+pdheight/2+10);
        vertex(pdoffSetX+pdwidth-3,pdoffSetY+pdheight);
        vertex(pdoffSetX,pdoffSetY+pdheight);
        endShape();
        if(value>0){
            beginShape();
            vertex(pdoffSetX,pdoffSetY+5);
            vertex(pdoffSetX-1.5,pdoffSetY+5);
            vertex(pdoffSetX-1.5,pdoffSetY+9);
            vertex(pdoffSetX-5.5,pdoffSetY+9);
            vertex(pdoffSetX-5.5,pdoffSetY+12);
            vertex(pdoffSetX-1.5,pdoffSetY+12);
            vertex(pdoffSetX-1.5,pdoffSetY+16);
            vertex(pdoffSetX+1.5,pdoffSetY+16);
            vertex(pdoffSetX+1.5,pdoffSetY+12);
            vertex(pdoffSetX+5.5,pdoffSetY+12);
            vertex(pdoffSetX+5.5,pdoffSetY+9);
            vertex(pdoffSetX+1.5,pdoffSetY+9);
            vertex(pdoffSetX+1.5,pdoffSetY+5);
            endShape();
            beginShape();
            rect(pdoffSetX-5.5,pdoffSetY+pdheight-5,11,3);
            endShape();
        }else{
        beginShape();
        vertex(pdoffSetX,pdoffSetY+pdheight-5+3);
        vertex(pdoffSetX-1.5,pdoffSetY+pdheight-5+3);
        vertex(pdoffSetX-1.5,pdoffSetY+pdheight-9+3);
        vertex(pdoffSetX-5.5,pdoffSetY+pdheight-9+3);
        vertex(pdoffSetX-5.5,pdoffSetY+pdheight-12+3);
        vertex(pdoffSetX-1.5,pdoffSetY+pdheight-12+3);
        vertex(pdoffSetX-1.5,pdoffSetY+pdheight-16+3);
        vertex(pdoffSetX+1.5,pdoffSetY+pdheight-16+3);
        vertex(pdoffSetX+1.5,pdoffSetY+pdheight-12+3);
        vertex(pdoffSetX+5.5,pdoffSetY+pdheight-12+3);
        vertex(pdoffSetX+5.5,pdoffSetY+pdheight-9+3);
        vertex(pdoffSetX+1.5,pdoffSetY+pdheight-9+3);
        vertex(pdoffSetX+1.5,pdoffSetY+pdheight-5+3);
        endShape();
        beginShape();
        rect(pdoffSetX-5.5,pdoffSetY+5,11,3);
        endShape();
        }
    }else{
        fill(cpotentialdifference);
        noStroke();
        beginShape();
        vertex(pdoffSetX,pdoffSetY);
        vertex(pdoffSetX+pdwidth,pdoffSetY);
        vertex(pdoffSetX+pdwidth,pdoffSetY+3);
        vertex(pdoffSetX,pdoffSetY+3);
        endShape();
        fill(cpotentialdifference);
        noStroke();
        beginShape();
        vertex(pdoffSetX,pdoffSetY+pdheight+3);
        vertex(pdoffSetX+pdwidth,pdoffSetY+pdheight+3);
        vertex(pdoffSetX+pdwidth,pdoffSetY+pdheight);
        vertex(pdoffSetX,pdoffSetY+pdheight);
        endShape();
    }
    textFont(italicFont,14);
    fill(clabeltext);
    text("V",pdoffSetX+pdwidth-5,3);
    pop();
}

function ray(fromx,fromy,magnitude,angle){
     push();
     translate(fromx,fromy);
     rotate(radians(angle));
     strokeCap(SQUARE);
     strokeWeight(1);
     stroke(cBlack);
     var magnitudevalue=magnitude*pixelscaling;
     if(magnitudevalue<-1||magnitudevalue>0){
         line(0,0,0,-magnitudevalue);
         line(-20,-magnitudevalue/2+20,0,-magnitudevalue/2);
         line(20,-magnitudevalue/2+20,0,-magnitudevalue/2);
     }
    pop();
}

function rayC(fromx,fromy,tox,toy){
    push();
    var magnitudevalue=sqrt((tox-fromx)*(tox-fromx)+(toy-fromy)*(toy-fromy));
    var angle=atan2(toy-fromy,tox-fromx)+HALF_PI;
    translate(fromx,fromy);
    rotate(angle);
    strokeCap(SQUARE);
    strokeWeight(1);
    stroke(cBlack);
    if(magnitudevalue<-1||magnitudevalue>0){
        line(0,0,0,-magnitudevalue);
        line(-20,-magnitudevalue/2+20,0,-magnitudevalue/2);
        line(20,-magnitudevalue/2+20,0,-magnitudevalue/2);
    }
    pop();
}

function path(fromx,fromy,magnitude,angle,pcolor){
     push();
     translate(fromx,fromy);
     rotate(radians(angle));
      strokeCap(SQUARE);
     strokeWeight(1);
     var magnitudevalue=magnitude*pixelscaling;
     stroke(pcolor);
     var dashes=magnitudevalue/10;
     for(var i=0;i<dashes;i++)
     {
       line(0,-i*10,0,-i*10-5);
     }
    pop();
}

function pathC(fromx,fromy,tox,toy,pcolor){
    push();
    var magnitudevalue=sqrt((tox-fromx)*(tox-fromx)+(toy-fromy)*(toy-fromy));
    var angle=atan2(toy-fromy,tox-fromx)+HALF_PI;
    translate(fromx,fromy);
    rotate(angle);
    strokeCap(SQUARE);
    strokeWeight(1);
    stroke(pcolor);
    var dashes=magnitudevalue/10;
    for(var i=0;i<dashes;i++)
    {
    line(0,-i*10,0,-i*10-5);
    }
    pop();
}

function beam(fromx,fromy,magnitude,angle,bcolor){
     push();
     translate(fromx,fromy);
     rotate(radians(angle));
     noStroke();
     var magnitudevalue=magnitude*pixelscaling;
     fill(bcolor);
     rect(-6,-magnitudevalue,12,magnitudevalue);
     strokeCap(SQUARE);
     strokeWeight(1);
     stroke(cBlack);
     line(0,-4,0,-magnitudevalue+4);
     noStroke();
     fill(cBlack);
     triangle(-3,-magnitudevalue/2+4,3,-magnitudevalue/2+4,0,-magnitudevalue/2-4);
    pop();
}

function beamC(fromx,fromy,tox,toy,bcolor){
    push();
    var magnitudevalue=sqrt((tox-fromx)*(tox-fromx)+(toy-fromy)*(toy-fromy));
    var angle=atan2(toy-fromy,tox-fromx)+HALF_PI;
    translate(fromx,fromy);
    rotate(angle);
    noStroke();
    fill(bcolor);
    rect(-6,-magnitudevalue,12,magnitudevalue);
    strokeCap(SQUARE);
    strokeWeight(1);
    stroke(cBlack);
    line(0,-4,0,-magnitudevalue+4);
    noStroke();
    fill(cBlack);
    triangle(-3,-magnitudevalue/2+4,3,-magnitudevalue/2+4,0,-magnitudevalue/2-4);
    pop();
}

function amplitude(magnitude,angle,acolour){
    push();
    rotate(radians(angle));
    strokeCap(SQUARE);
    strokeWeight(4);
    stroke(acolour);
    var magnitudevalue=magnitude*pixelscaling;
//    line(-6,0,6,0);
    line(0,0,0,-magnitudevalue);
    line(-6,-magnitudevalue,6,-magnitudevalue);
    pop();
}

function contribution(magnitude,angle,ccolor){
    push();
    rotate(radians(angle));
    strokeCap(SQUARE);
    strokeWeight(2);
    stroke(ccolor);
    var magnitudevalue=magnitude*pixelscaling;
//    line(-3,0,3,0);
    line(0,0,0,-magnitudevalue);
    line(-3,-magnitudevalue,3,-magnitudevalue);
    pop();
}

function phasorArrow(amplitude,angularfrequency,pathtime,phasorcolour){
strokeWeight(4);
stroke(phasorcolour);
fill(phasorcolour);
push();
	rotate(angularfrequency*pathtime);
	line(0, 0, pxscale*amplitude, 0);
	quad(pxscale*amplitude,0,pxscale*amplitude-8,5,pxscale*amplitude-6,0,pxscale*amplitude-8,-5);
pop();
}

function phasorResultant(amplitude,angle,phasorcolour){
strokeWeight(4);
stroke(phasorcolour);
fill(phasorcolour);
push();
	rotate(angle);
	line(0, 0, amplitude, 0);
	quad(amplitude,0,amplitude-8,5,amplitude-6,0,amplitude-8,-5);
pop();
}

function phasormultiple(amplitude,angularfrequency,phasordata){
// phasor data is an array of trip time,colour pairs, of the for [[12,cconcyan],[8,ccongreen],[6,cconpink],[4,cconpurple]]

	push();
		var xcomponent;
		var ycomponent;
		var xresultant=0;
		var yresultant=0;
		for (i = 0; i < phasordata.length; i++) {
			phasorArrow(amplitude,angularfrequency,phasordata[i][0],phasordata[i][1]);
			xcomponent=amplitude*pxscale*cos(angularfrequency*phasordata[i][0]);
			ycomponent	=amplitude*pxscale*sin(angularfrequency*phasordata[i][0]);
			translate(xcomponent, ycomponent);
		}
	pop();
}

function phasormultipleresultant(amplitude,angularfrequency,phasordata){
// phasor data is an array of trip time,colour pairs, of the for [[12,cconcyan],[8,ccongreen],[6,cconpink],[4,cconpurple]]

	push();
		var xcomponent;
		var ycomponent;
		var xresultant=0;
		var yresultant=0;
		for (i = 0; i < phasordata.length; i++) {
			phasorArrow(amplitude,angularfrequency,phasordata[i][0],phasordata[i][1]);
			xcomponent=amplitude*pxscale*cos(angularfrequency*phasordata[i][0]);
			ycomponent	=amplitude*pxscale*sin(angularfrequency*phasordata[i][0]);
			translate(xcomponent, ycomponent);
			xresultant+=xcomponent;
			yresultant+=ycomponent;
		}
	pop();
phasorResultant(sqrt(xresultant*xresultant+yresultant*yresultant),atan2(yresultant,xresultant),cideaRed);
}

function phasormultipleresultantbrightness(amplitude,angularfrequency,phasordata){
// phasor data is an array of trip time,colour pairs, of the for [[12,cconcyan],[8,ccongreen],[6,cconpink],[4,cconpurple]]

	push();
		var xcomponent;
		var ycomponent;
		var xresultant=0;
		var yresultant=0;
		for (i = 0; i < phasordata.length; i++) {
			phasorArrow(amplitude,angularfrequency,phasordata[i][0],phasordata[i][1]);
			xcomponent=amplitude*pxscale*cos(angularfrequency*phasordata[i][0]);
			ycomponent	=amplitude*pxscale*sin(angularfrequency*phasordata[i][0]);
			translate(xcomponent, ycomponent);
			xresultant+=xcomponent;
			yresultant+=ycomponent;
		}
	pop();
phasorResultant(sqrt(xresultant*xresultant+yresultant*yresultant),atan2(yresultant,xresultant),cideaRed);
push();
		translate(50, 0);
		quantity((xresultant*xresultant+yresultant*yresultant)/1000, cideaRed, "");
		words("brightness", 10, 0);

	pop();
}

function phasormultiplebrightness(amplitude,angularfrequency,phasordata){
// phasor data is an array of trip time,colour pairs, of the for [[12,cconcyan],[8,ccongreen],[6,cconpink],[4,cconpurple]]

	push();
		var xcomponent;
		var ycomponent;
		var xresultant=0;
		var yresultant=0;
		for (i = 0; i < phasordata.length; i++) {
			phasorArrow(amplitude,angularfrequency,phasordata[i][0],phasordata[i][1]);
			xcomponent=amplitude*pxscale*cos(angularfrequency*phasordata[i][0]);
			ycomponent	=amplitude*pxscale*sin(angularfrequency*phasordata[i][0]);
			translate(xcomponent, ycomponent);
			xresultant+=xcomponent;
			yresultant+=ycomponent;
		}
	pop();
push();
		translate(50, 0);
		quantity((xresultant*xresultant+yresultant*yresultant)/1000, cideaRed, "");
	pop();
}


function longitudinalwavedisplacement(magnitude,lcolour){
	const longitudinalwavedisplacementheight=12;
	strokeWeight(4);
	stroke(lcolour);
	line(magnitude*pxscale, -longitudinalwavedisplacementheight, magnitude*pxscale, longitudinalwavedisplacementheight);
}

function mass(value,mcolour){
    push();
    noStroke();
    fill(mcolour);
    var massdimension = value*pixelscaling;
    rect(-massdimension/2,-massdimension/2,massdimension,massdimension);
    pop();
}

function duration(value,maxValue){
     if(value>maxValue)value = maxValue;
     var time = value/maxValue;
     var durationsize = 30;
     var angle = time * 2*PI;

      noStroke();
      fill(cdurationclockBlue);
      ellipse(0,0,durationsize,durationsize);
      fill(cdurationclockYellow);
      if(value!=0){
		if(value!=maxValue){
		  arc(0,0,durationsize,durationsize,-HALF_PI, -HALF_PI+angle);
		}else{
		 ellipse(0,0,durationsize,durationsize)
		}
	}
   }

function durationpov(value,maxValue,durationpovcolour){
     if(value>maxValue)value = maxValue;
     var time = value/maxValue;
     var durationsize = 30;
     var angle = time * 2*PI;

      noStroke();
      fill(durationpovcolour);
      ellipse(0,0,durationsize,durationsize);
      fill(cdurationclockYellow);
      if(value!=0){
		if(value!=maxValue){
		  arc(0,0,durationsize,durationsize,-HALF_PI, -HALF_PI+angle);
		}else{
		 ellipse(0,0,durationsize,durationsize)
		}
	}
   }

function timepovclock(value,maxValue,timepovcolour){
     if(value>maxValue)value = maxValue;
     var time = value/maxValue;
     var timesize = 30;
     var angle = time * 2*PI;

      noStroke();
      fill(timepovcolour);
      ellipse(0,0,timesize,timesize);
      stroke(cdurationclockYellow);
      strokeWeight(2);
      push();
      rotate(-HALF_PI+angle);
      line(0,0,timesize/2,0);
      pop();
   }

function timeclock(value,maxValue){
     if(value>maxValue)value = maxValue;
     var time = value/maxValue;
     var timesize = 30;
     var angle = time * 2*PI;

      noStroke();
      fill(cdurationclockBlue);
      ellipse(0,0,timesize,timesize);
      stroke(cdurationclockYellow);
      strokeWeight(2);
      push();
      rotate(-HALF_PI+angle);
      line(0,0,timesize/2,0);
      pop();
   }

function displacement(magnitude,rotation,dcolour){
    var displaymagnitude = magnitude * pixelscaling;
    var baseWidth = 30;
    var strokeWidth = 4;
    push();
    rotate(radians(rotation));
    stroke(dcolour);
    strokeCap(SQUARE);
    strokeWeight(strokeWidth);
    line(0,0,0,-displaymagnitude);
    if (magnitude!=0){
line(-baseWidth/2,-displaymagnitude,baseWidth/2,-displaymagnitude);
    }

    pop();
}

function velocity(magnitude,rotation,vcolour){
      var widthOfArrow = 4;
      var widthOfArrowHead = 24;
      var innerWidthOfArrowHead = 24;
      var strokeOfArrow = 5;
      var heightOfArrowHead = 16;
      var arrowHeadIntersection = 9;
      var heightOfArrow = abs(magnitude) * pixelscaling;

      push();
      rotate(radians(rotation));
      var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
      var minimum=0;
      if(arrowBodyHeight<0){
        minimum=arrowBodyHeight;
      }
      if(magnitude!=0){
        if(magnitude>0){
           beginShape();
           noStroke();
           fill(vcolour);
           vertex(-widthOfArrow/2,0);
           vertex(-widthOfArrow/2,-arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(-widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(0,-heightOfArrow);
           vertex(widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(widthOfArrow/2, -arrowBodyHeight);
           vertex(widthOfArrow/2,0);
           endShape(CLOSE);
         }else{
           beginShape();
           noStroke();
           fill(vcolour);
           vertex(-widthOfArrow/2,0);
           vertex(-widthOfArrow/2,arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(-widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(0,heightOfArrow);
           vertex(widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(widthOfArrow/2, arrowBodyHeight);
           vertex(widthOfArrow/2,0);
           endShape(CLOSE);
         }

      }
      pop();
}

function acceleration(magnitude,rotation,acolour){

      var widthOfArrow = 5;
      var widthOfArrowHead = 40;
      var heightOfArrowHead = 21;
      var arrowHeadIntersection = 5;
      var heightOfArrow = abs(magnitude) * pixelscaling;
      push();
      rotate(radians(rotation));
      var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
      var minimum=0;
      if(arrowBodyHeight<0)
      {
        minimum=arrowBodyHeight;
      }

      if(magnitude!=0){
        if(magnitude>0){
             beginShape();
             noStroke();
             fill(acolour);
             vertex(-widthOfArrow/2,0);
             vertex(-widthOfArrow/2,-arrowBodyHeight);
             vertex(widthOfArrow/2, -arrowBodyHeight);
             vertex(widthOfArrow/2,0);
             endShape(CLOSE);
             beginShape();
             vertex(-widthOfArrow/2,-arrowBodyHeight+5);
             bezierVertex(-widthOfArrow/2,-arrowBodyHeight+1,-widthOfArrowHead/2+2,-arrowBodyHeight+1,-widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
             bezierVertex(-widthOfArrow/2,-arrowBodyHeight-10,-widthOfArrow/2,-arrowBodyHeight-15,0,-heightOfArrow);
             vertex(widthOfArrow/2,-arrowBodyHeight);
             endShape(CLOSE);
             beginShape();
             vertex(widthOfArrow/2,-arrowBodyHeight+5);
             bezierVertex(widthOfArrow/2,-arrowBodyHeight+1,widthOfArrowHead/2-2,-arrowBodyHeight+1,widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
             bezierVertex(widthOfArrow/2,-arrowBodyHeight-10,widthOfArrow/2,-arrowBodyHeight-15,0,-heightOfArrow);
             vertex(-widthOfArrow/2,-arrowBodyHeight);
             endShape(CLOSE);
         }else{
             beginShape();
             noStroke();
             fill(acolour);
             vertex(-widthOfArrow/2,0);
             vertex(-widthOfArrow/2,arrowBodyHeight);
             vertex(widthOfArrow/2, arrowBodyHeight);
             vertex(widthOfArrow/2,0);
             endShape(CLOSE);
             beginShape();
             vertex(-widthOfArrow/2,arrowBodyHeight-5);
             bezierVertex(-widthOfArrow/2,arrowBodyHeight-1,-widthOfArrowHead/2+2,arrowBodyHeight-1,-widthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
             bezierVertex(-widthOfArrow/2,arrowBodyHeight+10,-widthOfArrow/2,arrowBodyHeight+15,0,heightOfArrow);
             vertex(this.widthOfArrow/2,arrowBodyHeight);
             endShape(CLOSE);
             beginShape();
             vertex(widthOfArrow/2,arrowBodyHeight-5);
             bezierVertex(widthOfArrow/2,arrowBodyHeight-1,widthOfArrowHead/2-2,arrowBodyHeight-1,widthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
             bezierVertex(widthOfArrow/2,arrowBodyHeight+10,widthOfArrow/2,arrowBodyHeight+15,0,heightOfArrow);
             vertex(-widthOfArrow/2,arrowBodyHeight);
             endShape(CLOSE);
         }
       }
       pop();
}

function momentum(magnitude,rotation,momcolour){
      var widthOfArrow = 12;
      var widthOfArrowHead = 28;
      var innerWidthOfArrowHead = 26;
      var strokeOfArrow = 8;
      var heightOfArrowHead = 22;
      var arrowHeadIntersection = 8;
      var heightOfArrow = abs(magnitude) * pixelscaling;
      push();
      rotate(radians(rotation));

      var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
      var minimum=0;
      if(arrowBodyHeight<0)
      {
        minimum=arrowBodyHeight;
      }

      if(magnitude!=0){
        if(magnitude>0){
           beginShape();
           noStroke();
           fill(momcolour);
           vertex(-widthOfArrow/2,-minimum);
           vertex(-widthOfArrow/2,-arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(-widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(0,-heightOfArrow);
           vertex(widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(widthOfArrow/2, -arrowBodyHeight);
           vertex(widthOfArrow/2,-minimum);
           endShape(CLOSE);
         }
         else{
           beginShape();
           noStroke();
           fill(momcolour);
           vertex(-widthOfArrow/2,minimum);
           vertex(-widthOfArrow/2,arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(-widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(0,heightOfArrow);
           vertex(widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(widthOfArrow/2, arrowBodyHeight);
           vertex(widthOfArrow/2,minimum);
           endShape(CLOSE);
         }
      }
      pop();
   }

function force(magnitude, rotation, fcolour){
    var heightOfArrow = abs(magnitude) * pixelscaling;
    var widthOfArrow = 10;
    var widthOfArrowHead = 32;
    var heightOfArrowHead = 35;
    var arrowHeadIntersection = 12;
    var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
    var minimum=0;
    if(arrowBodyHeight<0)
    {
      minimum=arrowBodyHeight;
    }
    push();
    rotate(radians(rotation));
    if(magnitude!=0){
      if(magnitude>=0){
        beginShape();
        noStroke();
        fill(fcolour);
        vertex(-widthOfArrow/2,-minimum);
        vertex(-widthOfArrow/2,-arrowBodyHeight);
        vertex(-widthOfArrowHead/2,-arrowBodyHeight+arrowHeadIntersection);
        vertex(0,-arrowBodyHeight-(heightOfArrowHead-arrowHeadIntersection));
        vertex(widthOfArrowHead/2,-arrowBodyHeight+arrowHeadIntersection);
        vertex(widthOfArrow/2,-arrowBodyHeight);
        vertex(widthOfArrow/2,-minimum);
        endShape(CLOSE);
      }
      else{
        beginShape();
        noStroke();
        fill(fcolour);
        vertex(-widthOfArrow/2,minimum);
        vertex(-widthOfArrow/2,arrowBodyHeight);
        vertex(-widthOfArrowHead/2,arrowBodyHeight-arrowHeadIntersection);
        vertex(0,arrowBodyHeight+(heightOfArrowHead-arrowHeadIntersection));
        vertex(widthOfArrowHead/2,arrowBodyHeight-arrowHeadIntersection);
        vertex(widthOfArrow/2,arrowBodyHeight);
        vertex(widthOfArrow/2,minimum);
        endShape(CLOSE);
      }
    }
    pop();
}

function trackSegment(fromx,fromy,tox,toy){
	fill(cideaGrey);
	noStroke();
	ellipseMode(CENTER);
	ellipse(fromx, fromy, 8, 8);
	ellipse(tox, toy, 8, 8);
	strokeWeight(3);
	stroke(cideaGrey);
	line(fromx,fromy,tox,toy);
}

function componentMarker(location,widthOfArrow){
		fill(cWhite);
		noStroke();
        ellipseMode(CENTER);
        ellipse(0, location, widthOfArrow-2, widthOfArrow);
	}

function forceComponent(magnitude, rotation, fcolour){
    var heightOfArrow = abs(magnitude) * pixelscaling;
    var widthOfArrow = 10;
    var widthOfArrowHead = 32;
    var heightOfArrowHead = 35;
    var arrowHeadIntersection = 12;
    var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
    var minimum=0;
    if(arrowBodyHeight<0)
    {
      minimum=arrowBodyHeight;
    }
    push();
    rotate(radians(rotation));
    if(magnitude!=0){
      if(magnitude>=0){
        beginShape();
        noStroke();
        fill(fcolour);
        vertex(-widthOfArrow/2,-minimum);
        vertex(-widthOfArrow/2,-arrowBodyHeight);
        vertex(-widthOfArrowHead/2,-arrowBodyHeight+arrowHeadIntersection);
        vertex(0,-arrowBodyHeight-(heightOfArrowHead-arrowHeadIntersection));
        vertex(widthOfArrowHead/2,-arrowBodyHeight+arrowHeadIntersection);
        vertex(widthOfArrow/2,-arrowBodyHeight);
        vertex(widthOfArrow/2,-minimum);
        endShape(CLOSE);
        componentMarker(-arrowBodyHeight-heightOfArrowHead/5,widthOfArrow);
      }
      else{
        beginShape();
        noStroke();
        fill(fcolour);
        vertex(-widthOfArrow/2,minimum);
        vertex(-widthOfArrow/2,arrowBodyHeight);
        vertex(-widthOfArrowHead/2,arrowBodyHeight-arrowHeadIntersection);
        vertex(0,arrowBodyHeight+(heightOfArrowHead-arrowHeadIntersection));
        vertex(widthOfArrowHead/2,arrowBodyHeight-arrowHeadIntersection);
        vertex(widthOfArrow/2,arrowBodyHeight);
        vertex(widthOfArrow/2,minimum);
        endShape(CLOSE);
        componentMarker(arrowBodyHeight+heightOfArrowHead/5,widthOfArrow);

      }
    }
    pop();
}

function displacementComponent(magnitude,rotation,dcolour){
    var displaymagnitude = magnitude * pixelscaling;
    var baseWidth = 30;
    var strokeWidth = 4;
    push();
    rotate(radians(rotation));
    stroke(dcolour);
    strokeCap(SQUARE);
    strokeWeight(strokeWidth);
    line(0,0,0,-displaymagnitude);
    if (magnitude!=0){
		line(-baseWidth/2,-displaymagnitude,baseWidth/2,-displaymagnitude);
    }
	componentMarker(-displaymagnitude+4,strokeWidth-0.5);
    pop();
}

function velocityComponent(magnitude,rotation,vcolour){
      var widthOfArrow = 4;
      var widthOfArrowHead = 24;
      var innerWidthOfArrowHead = 24;
      var strokeOfArrow = 5;
      var heightOfArrowHead = 16;
      var arrowHeadIntersection = 9;
      var heightOfArrow = abs(magnitude) * pixelscaling;

      push();
      rotate(radians(rotation));
      var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
      var minimum=0;
      if(arrowBodyHeight<0){
        minimum=arrowBodyHeight;
      }
      if(magnitude!=0){
        if(magnitude>0){
           beginShape();
           noStroke();
           fill(vcolour);
           vertex(-widthOfArrow/2,0);
           vertex(-widthOfArrow/2,-arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(-widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(0,-heightOfArrow);
           vertex(widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(widthOfArrow/2, -arrowBodyHeight);
           vertex(widthOfArrow/2,0);
           endShape(CLOSE);
           componentMarker(-arrowBodyHeight-heightOfArrowHead/5,widthOfArrow);
         }else{
           beginShape();
           noStroke();
           fill(vcolour);
           vertex(-widthOfArrow/2,0);
           vertex(-widthOfArrow/2,arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(-widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(0,heightOfArrow);
           vertex(widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(widthOfArrow/2, arrowBodyHeight);
           vertex(widthOfArrow/2,0);
           endShape(CLOSE);
           componentMarker(arrowBodyHeight+heightOfArrowHead/5,widthOfArrow);
         }

      }
      pop();
}

function accelerationComponent(magnitude,rotation,acolour){

      var widthOfArrow = 5;
      var widthOfArrowHead = 40;
      var heightOfArrowHead = 21;
      var arrowHeadIntersection = 5;
      var heightOfArrow = abs(magnitude) * pixelscaling;
      push();
      rotate(radians(rotation));
      var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
      var minimum=0;
      if(arrowBodyHeight<0)
      {
        minimum=arrowBodyHeight;
      }

      if(magnitude!=0){
        if(magnitude>0){
             beginShape();
             noStroke();
             fill(acolour);
             vertex(-widthOfArrow/2,0);
             vertex(-widthOfArrow/2,-arrowBodyHeight);
             vertex(widthOfArrow/2, -arrowBodyHeight);
             vertex(widthOfArrow/2,0);
             endShape(CLOSE);
             beginShape();
             vertex(-widthOfArrow/2,-arrowBodyHeight+5);
             bezierVertex(-widthOfArrow/2,-arrowBodyHeight+1,-widthOfArrowHead/2+2,-arrowBodyHeight+1,-widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
             bezierVertex(-widthOfArrow/2,-arrowBodyHeight-10,-widthOfArrow/2,-arrowBodyHeight-15,0,-heightOfArrow);
             vertex(widthOfArrow/2,-arrowBodyHeight);
             endShape(CLOSE);
             beginShape();
             vertex(widthOfArrow/2,-arrowBodyHeight+5);
             bezierVertex(widthOfArrow/2,-arrowBodyHeight+1,widthOfArrowHead/2-2,-arrowBodyHeight+1,widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
             bezierVertex(widthOfArrow/2,-arrowBodyHeight-10,widthOfArrow/2,-arrowBodyHeight-15,0,-heightOfArrow);
             vertex(-widthOfArrow/2,-arrowBodyHeight);
             endShape(CLOSE);
			componentMarker(-arrowBodyHeight-heightOfArrowHead/5,widthOfArrow);

         }else{
             beginShape();
             noStroke();
             fill(acolour);
             vertex(-widthOfArrow/2,0);
             vertex(-widthOfArrow/2,arrowBodyHeight);
             vertex(widthOfArrow/2, arrowBodyHeight);
             vertex(widthOfArrow/2,0);
             endShape(CLOSE);
             beginShape();
             vertex(-widthOfArrow/2,arrowBodyHeight-5);
             bezierVertex(-widthOfArrow/2,arrowBodyHeight-1,-widthOfArrowHead/2+2,arrowBodyHeight-1,-widthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
             bezierVertex(-widthOfArrow/2,arrowBodyHeight+10,-widthOfArrow/2,arrowBodyHeight+15,0,heightOfArrow);
             vertex(this.widthOfArrow/2,arrowBodyHeight);
             endShape(CLOSE);
             beginShape();
             vertex(widthOfArrow/2,arrowBodyHeight-5);
             bezierVertex(widthOfArrow/2,arrowBodyHeight-1,widthOfArrowHead/2-2,arrowBodyHeight-1,widthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
             bezierVertex(widthOfArrow/2,arrowBodyHeight+10,widthOfArrow/2,arrowBodyHeight+15,0,heightOfArrow);
             vertex(-widthOfArrow/2,arrowBodyHeight);
             endShape(CLOSE);
			 componentMarker(arrowBodyHeight+heightOfArrowHead/5,widthOfArrow);

         }
       }
       pop();
}

function momentumComponent(magnitude,rotation,momcolour){
      var widthOfArrow = 12;
      var widthOfArrowHead = 28;
      var innerWidthOfArrowHead = 26;
      var strokeOfArrow = 8;
      var heightOfArrowHead = 22;
      var arrowHeadIntersection = 8;
      var heightOfArrow = abs(magnitude) * pixelscaling;
      push();
      rotate(radians(rotation));

      var arrowBodyHeight = heightOfArrow-(heightOfArrowHead-arrowHeadIntersection);
      var minimum=0;
      if(arrowBodyHeight<0)
      {
        minimum=arrowBodyHeight;
      }

      if(magnitude!=0){
        if(magnitude>0){
           beginShape();
           noStroke();
           fill(momcolour);
           vertex(-widthOfArrow/2,-minimum);
           vertex(-widthOfArrow/2,-arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(-widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(0,-heightOfArrow);
           vertex(widthOfArrowHead/2,-heightOfArrow+heightOfArrowHead-strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,-heightOfArrow+heightOfArrowHead);
           vertex(widthOfArrow/2, -arrowBodyHeight);
           vertex(widthOfArrow/2,-minimum);
           endShape(CLOSE);
           componentMarker(-arrowBodyHeight-heightOfArrowHead/5,widthOfArrow);
         }
         else{
           beginShape();
           noStroke();
           fill(momcolour);
           vertex(-widthOfArrow/2,minimum);
           vertex(-widthOfArrow/2,arrowBodyHeight);
           vertex(-innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(-widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(0,heightOfArrow);
           vertex(widthOfArrowHead/2,heightOfArrow-heightOfArrowHead+strokeOfArrow);
           vertex(innerWidthOfArrowHead/2,heightOfArrow-heightOfArrowHead);
           vertex(widthOfArrow/2, arrowBodyHeight);
           vertex(widthOfArrow/2,minimum);
           endShape(CLOSE);
           componentMarker(arrowBodyHeight+heightOfArrowHead/5,widthOfArrow);
         }
      }
      pop();
   }

// 3D for vectors in a plane


function force3D(magnitude, rotation, fcolour){
	if (magnitude!=0){
	var stemlength = magnitude*pxscale-10;
	if (stemlength<0){
	stemlength=0;
	}
	push();
		rotate(radians(rotation)-PI);
		noStroke();
		fill(fcolour);
		translate(0,stemlength/2,0);
		cylinder(2,stemlength);
		translate(0,stemlength/2,0);
		cone(5,10,24,1,false);
		fill(cWhite);
		cone(4,8,24,1,true);
	pop();
	}
}

function acceleration3D(magnitude, rotation,acolour){
if (magnitude!=0){
	var stemlength = magnitude*pxscale-10;
	if (stemlength<0){
	stemlength=0;
	}
	push();
		rotate(radians(rotation)-PI);
		noStroke();
		fill(acolour);
		translate(0,stemlength/2,0);
		cylinder(2,stemlength);
		translate(0,stemlength/2,0);
		cone(5,10,24,1,true);
	pop();
	}
}

function velocity3D(magnitude, rotation,vcolour){
if (magnitude!=0){
	var stemlength = magnitude*pxscale-8;
	if (stemlength<0){
	stemlength=0;
	}
	push();
		rotate(radians(rotation)-PI);
		noStroke();
		fill(vcolour);
		translate(0,stemlength/2,0);
		cylinder(2,stemlength);
		translate(0,stemlength/2,0);
		cone(5,8,4,1,true);
	pop();
	}
}

function displacement3D(magnitude, rotation,dcolour){
if (magnitude!=0){
	var stemlength = magnitude*pxscale-1;
	if (stemlength<0){
	stemlength=0;
	}
	push();
		rotate(radians(rotation)-PI);
		noStroke();
		fill(dcolour);
		translate(0,stemlength/2,0);
		cylinder(2,stemlength);
		translate(0,stemlength/2,0);
		cylinder(5,1);
	pop();
	}
}

function trackSegment3D(fromx,fromy,tox,toy){
	fill(cideaGrey);
	var thetsangle = -atan((toy-fromy)/(tox-fromx))-PI/2;
	var thetslength = sqrt(pow((toy-fromy),2)+pow((tox-fromx),2));
	push();
		translate(fromx,-fromy,0);
		sphere(3);
		rotate(thetsangle);
		translate(0,thetslength/2,0);
		cylinder(1,thetslength);
		translate(0,thetslength/2,0);
		sphere(3);
	pop();
}

function pathC3D(fromx,fromy,tox,toy,pcolour){
	var thepathangle = -atan((toy-fromy)/(tox-fromx))-PI/2;
	var thepathlength = sqrt(pow((toy-fromy),2)+pow((tox-fromx),2));
	noStroke();
	fill(pcolour);
	push();
		translate(fromx,-fromy,0);
		rotate(thepathangle);
		for (i = 0; i < thepathlength; i=i+10) {
			cylinder(1,5);
			translate(0,10,0);
		}
	pop();

}

function current3D(value){
	fill(ccurrent);
	noStroke();
	push();
		if (value!=0){
			var stemlength = value*pxscale-8;
			if(value>0){
			rotateZ(-PI/2);
				translate(0,stemlength/2,0);
				cylinder(2,stemlength);
				translate(0,stemlength/2,0);
				cone(5,8,6,1,true);
			}
			if(value<0){
			rotateZ(-PI/2);
				translate(0,stemlength/2,0);
				cylinder(2,stemlength);
				translate(0,stemlength/2,0);
				rotateZ(PI);
				cone(5,8,6,1,true);
			}
		}
	pop();
}

function coil3D(radius,turns,wirethickness,coilcolour,connectionlength,LR){

	noStroke();
	fill(coilcolour);
	push();
		translate(0, -(turns*20-10)/2,0);
		if (LR=="left"){
		rotateY(-PI/2);
		}
		if (LR=="right"){
		rotateY(PI/2);
		}

		push();
			rotateX(-PI/2);
			translate(radius, -connectionlength/2,0);
			cylinder(wirethickness, connectionlength, 24, 1, false, false);
		pop();

		push();
		for (i = 0; i < turns*200-100; i++) {
			push();
			translate(radius,0,0);
			rotateX(PI/2);
			cylinder(wirethickness, radius*PI/100, 24, 1, false, false);
			pop();
			rotateY(PI/100);
			translate(0,0.1,0);
			}
			push();
			translate(radius,0,0);
			rotateX(PI/2);
			cylinder(wirethickness, radius*PI/100, 24, 1, false, false);
			pop();
			pop();
		push();
			rotateX(-PI/2);
			translate(-radius, -connectionlength/2,turns*20-10);
			cylinder(wirethickness, connectionlength, 24, 1, false, false);
		pop();
	pop();

}

function axis3D(axislength){
	push();
		noStroke();
		fill(cideaGrey);
		translate(0,axislength/2,0);
		cylinder(2,axislength);
		translate(0,axislength/2,0);
		cone(5,10,24,1,true);
	pop();
}

//physics compound

function pulleyset(numberofpulleys, heightlifted){

   const closestapproach=80;
   var pulleyradius = 30;
   var pulleyincrement=8;
   var pulleysep =50;
   var ropethickness=2;
   var separation=heightlifted+closestapproach;
   var pulleygap=separation;
   var oldpulleystep=0;
   var totalropelength=50+2*numberofpulleys*separation;

   var ropepulled=2*numberofpulleys*heightlifted;
   words('height\nlifted:\n'+str(heightlifted),-150, -20);
//    words('rope length:\n'+str(totalropelength),-150, -100);
   words('rope pulled:\n'+str(ropetaillength),-150, -180);

   push();
   scale(-1,-1);
   for (var i = 0; i < numberofpulleys; i = i+1){
      pulleyradius= 15+i*pulleyincrement;
      var pulleystep=pulleysep+i*pulleyradius*.6;

      fill(cpulleyropeRed);
      if (i==0){
         push();
         translate(-pulleyradius,0);
         rotate(atan((pulleyradius)/(separation-pulleyradius-5)));
         rect(0,0,ropethickness,-sqrt(sq(separation-pulleyradius-5)+sq(pulleyradius)));

         pop();
         rect(pulleyradius-ropethickness,0,ropethickness,-(separation));
      }
      else{
         push();
         translate(-pulleyradius,0);
         rotate(atan((pulleyincrement)/(pulleygap-pulleystep)));
         rect(0,0,ropethickness,-sqrt(sq(pulleyincrement)+sq(pulleygap-oldpulleystep)));
         pop();
         rect(pulleyradius-ropethickness,0,ropethickness,-(pulleygap));
      }
      if (i==(numberofpulleys-1)){
          push();
          translate(0,-(pulleygap+pulleyradius-ropethickness));
          push();
          rotate(-5*PI/8);
          rect(0,0,ropethickness,-ropetaillength);
          pop();
          scale(-1,-1);
//           comment('length of rope tail: '+str(ropetaillength),100, -20);
          pop();
      }
      pulley(pulleyradius*2,"D");
      oldpulleystep=pulleysep+i*pulleyradius*.6;
      pulleygap+=2*pulleystep;
      translate(0,pulleystep);
   }
   pop();

   translate(0,separation);

   push();
   rotate(0);
   for (var i = 0; i < numberofpulleys; i = i+1){
      pulleyradius= 15+i*pulleyincrement;
      pulley(pulleyradius*2,"D");

      translate(0,pulleysep+i*pulleyradius*.6);
   }
   pop();



}

function pulley(diameter,strapdirection){
   push();
   noStroke();
   fill(cpulleydarkGrey);
   ellipse(0,0,diameter,diameter);
   fill(cpulleylightGrey);
   ellipse(0,0,20,20);
   fill(cpulleydarkGrey);
   ellipse(0,0,8,8);
   push();

   if (strapdirection == "D"){
      rect(-2,-diameter/2-10,4,diameter+50);
   }
   if (strapdirection == "U"){
      rotate(-PI)
      rect(-2,-diameter/2-10,4,diameter+50);
   }
   if (strapdirection == "L"){
      rotate(PI/2)
      rect(-2,-diameter/2-10,4,diameter+50);
   }
   if (strapdirection == "R"){
      rotate(-PI/2)
      rect(-2,-diameter/2-10,4,diameter+50);
   }
   pop();
   pop();

}

function hydraulicsystem(ratio,volumeshiftedLR){

  var jointubeheight = 20;
  var jointubewidth=160;
  var areaLH=20;
  var areaRH=areaLH*ratio;
  var systemtubeheight=200;
  var fillabletubeheight=systemtubeheight-jointubeheight;



  var fluidheightLH=(fillabletubeheight/2)+volumeshiftedLR/areaLH;
  var fluidheightRH=(fillabletubeheight/2)-volumeshiftedLR/areaRH;

  noStroke();
  fill(cpulleylightGrey);
  rectMode(CORNERS);
 rect(-areaLH,0,jointubewidth+areaRH,-jointubeheight);
  rect(-areaLH,-jointubeheight,0,-fluidheightLH);
  rect(jointubewidth,-jointubeheight,jointubewidth+areaRH,-fluidheightRH);


  stroke(cpulleylightGrey);
  strokeWeight(2);
  line(-areaLH,0,jointubewidth+areaRH,0);
  line(0,-jointubeheight,jointubewidth,-jointubeheight);
  line(-areaLH,0,-areaLH,-systemtubeheight);
  line(0,-jointubeheight,0,-systemtubeheight);
  line(jointubewidth+areaRH,0,jointubewidth+areaRH,-systemtubeheight);
  line(jointubewidth,-jointubeheight,jointubewidth,-systemtubeheight);
}

function leversystem(multiplier, leftDisplacement){
    fill(cpulleylightGrey);
    var lengthL = 120;
    var ForceL = 20;
    var ForceR =ForceL/multiplier;
    var lengthR = lengthL*multiplier;

    strokeWeight(4);
    stroke(cpulleylightGrey);
    triangle(0, 0, -20, 20,20, 20);
    push();
    rotate(atan(leftDisplacement/lengthL));
    line(0,0,-lengthL,0);
    line(0,0,lengthR,0);
    push();
    translate(-lengthL,0);
    rotate(-atan(leftDisplacement/lengthL));
    force(ForceL,0, ccompression);
    pop();
    push();
    translate(lengthR,0);
    rotate(-atan(leftDisplacement/lengthL));
    force(ForceR,0, ccompression);
    pop();

    pop();
}

function pressureparticles(pressure){
    var pressurefill;
    noStroke();
    switch(pressure) {
        case 0:
            pressurefill=cpressure0;
            break;
        case 1:
            pressurefill=cpressure1;
            break;
        case 2:
            pressurefill=cpressure2;
            break;
        case 3:
            pressurefill=cpressure3;
            break;

        case 4:
            pressurefill=cpressure4;
            break;
    }
    fill(pressurefill);
    for(var i=0;i<pressure*15+5;i++){
    ellipse(random(80),random(80),3,3)
    }
}

function pressuregauge(pressure){
    push();
    noStroke();
    fill(cpulleydarkGrey);
    rect(-15,-6,30,12,5);
    ellipse(20,0,32,32);
   translate(20,0);
    rotate(pressure*(PI/3));
    strokeWeight(3);
    stroke(cpulleylightGrey);
    line(0,0,0,-12);
    rotate(pressure*(PI/3));
    noStroke();
    pop();
}

function temperaturegauge(temperature){
    push();
    noStroke();
    fill(cpulleydarkGrey);
    rect(-4,-42,8,60,5);
    ellipse(0,25,20,20);
    stroke(cpulleylightGrey);
    fill(cpulleylightGrey);
    ellipse(0,25,12,12);
    strokeWeight(3);
    line(0,25,0,-temperature*5);
    noStroke();
    pop();
}

function soundSource(amplitude,frequency){
     push();
     noStroke();
     fill(csoundsource);
     beginShape();
     vertex(0,-28);
     vertex(28,-28);
     vertex(28,-21);
     vertex(14,-21);
     vertex(14,-7);
     vertex(28,-7);
     vertex(28,7);
     vertex(14,7);
     vertex(14,21);
     vertex(28,21);
     vertex(28,28);
     vertex(0,28);
     endShape();
     var count=millis()/60000;
     var xpos=amplitude*sin(frequency*count);
     stroke(cBlack);
     strokeCap(SQUARE);
     var coneOffset = amplitude-4;
     strokeWeight(5);
     line(coneOffset+xpos+42,-28,coneOffset+xpos+42,28);
     line(coneOffset+xpos+21,-14,coneOffset+xpos+42,-14);
     line(coneOffset+xpos+21,14,coneOffset+xpos+42,14);
    pop();
}

function doLikeMe(kind,frequency,amplitude,delay){
     push();
     var n=32;
     var i=0;
     var gap=8;
     var w=6;
     var h=21;
     var count=millis()/60000;
     if(kind=="T"){
        strokeWeight(1);
        stroke(cdolikeme);
        for(var i=0;i<n;i++){
        line(i*gap-w/2,0,i*gap+w/2,0);
        line(i*gap-w/2,amplitude*sin(frequency*count+i*delay),i*gap+w/2,amplitude*sin(frequency*count+i*delay));
        line(i*gap,0,i*gap,amplitude*sin(frequency*count+i*delay));
        }
     }
     if(kind=="L"){
         stroke(cdolikeme);
         noStroke();
         fill(cdolikeme);
        for(var i=0;i<n;i++)
        {
          rect(i*10+amplitude*sin(frequency*count+i*delay),-21,5,42);
        }
     }
    pop();
   }

function storesShiftingBlank(){
    noStroke();
    fill(cstoreframeGrey);
    triangle(0, 0, -70, -20, 70, -20);
    rect(-67, -20, 134, -281);
    fill(cstoreframelightGrey);
    rect(-60, -24, 120, -120);
    rect(-60, -176, 120, -120);
    transitionEvolve(0, -159, 90);
}

function storesAccumulatedBlank(){
    noStroke();
    fill(cstoreframeGrey);
    triangle(0, 0, -70, -20, 70, -20);
    rect(-67, -20, 134, -281);
    fill(cstoreframelightGrey);
    rect(-60, -24, 120, -120);
    rect(-60, -176, 120, -120);
    transitionIntervene(0, -159, 90);
}

function storeFilled(storekind){
    noStroke();
    fill(cstoreframeGrey);
    triangle(0, 0, -41, -20, 41, -20);
    rect(-41, -20, 82, -186);
    fill(cstoreframelightGrey);
    rect(-37, -24, 74, -74);
    rect(-37, -128, 74, -74);
    transitionIntervene(0, -113, 90);
    push();
        translate(-33,-200);
        push();
            scale(0.8);
            storeEmptier(storekind); //topstore
        pop();
        translate(0,108);
        push();
            scale(0.8);
            storeFuller(storekind); //topstore
        pop();
    pop();
}

function storeEmptied(storekind){
    noStroke();
    fill(cstoreframeGrey);
    triangle(0, 0, -41, -20, 41, -20);
    rect(-41, -20, 82, -186);
    fill(cstoreframelightGrey);
    rect(-37, -24, 74, -74);
    rect(-37, -128, 74, -74);
    transitionIntervene(0, -113, 90);
    push();
        translate(-33,-200);
        push();
            scale(0.8);
            storeFuller(storekind); //topstore
        pop();
        translate(0,108);
        push();
            scale(0.8);
            storeEmptier(storekind); //topstore
        pop();
    pop();
}

function storeFilling(storekind, pathwayKind){
    noStroke();
    fill(cstoreframeGrey);
    triangle(0, 0, -41, -20, 41, -20);
    rect(-41, -20, 82, -186);
    transitionEvolve(0, -113, 90);
    push();
        translate(-33,-200);
        push();
            scale(0.8);
            storeEmptier(storekind); //topstore
        pop();
        translate(0,108);
        push();
            scale(0.8);
            storeFuller(storekind); //topstore
        pop();
        push();
        translate(-62,-44);
        powerPathway(pathwayKind);
        pop();
    pop();
}

function storeEmptying(storekind, pathwayKind){
    noStroke();
    fill(cstoreframeGrey);
    triangle(0, 0, -41, -20, 41, -20);
    rect(-41, -20, 82, -186);
    transitionEvolve(0, -113, 90);
    push();
        translate(-33,-200);
        push();
            scale(0.8);
            storeFuller(storekind); //topstore
        pop();
        translate(0,108);
        push();
            scale(0.8);
            storeEmptier(storekind); //topstore
        pop();
        if (pathwayKind!=""){//allows to select no pathway
			push();
				translate(73,-34);
				powerPathway(pathwayKind);
			pop();
		}

    pop();
}

function describeEnergyOne(energyIn,energy1Out){

// qualitative
push();
		translate(600, 132);
		noFill();
		stroke(cpaneBadgehands);
		strokeWeight(1);
		line(-557, -8, 133, -8);
		line(-557, 68, 133, 68);
		words("snapshot\nbefore", 80, 14);
		paneBadgeSnapshot();
		translate(0, 105);
		noFill();
		stroke(cpaneBadgehands);
		strokeWeight(1);
		line(-557, -8, 133, -8);
		line(-557, 68, 133, 68);
		words("snapshot\nafter", 80, 14);
		paneBadgeSnapshot();
	pop();
    push();
        translate(20,100);
        subHead('qualitative, identifying stores filling and emptying',0, 0);
        push();
            translate(70,228);
            storeEmptied(energyIn);

            translate(200,0);
             storeFilled(energy1Out);


        pop();
    pop();

//quantitative
    var pxscale=20;
    push();
        translate(20,364);
        subHead('qualitative, identifying stores filling and emptying',0, 0);
    push();
    translate(80,216);
    if(inputtoDivvy.getValue()!=0){
    energy(inputtoDivvy.getValue()*pxscale);
    words('energy\nshifted\nfrom '+energyIn+' store',-80,-20);
    }
    pop();
    push();
        translate(272,216);
        if(inputtoDivvy.getValue()!=0){
            energy(inputtoDivvy.getValue()*pxscale);
            words('energy shifted to '+energy1Out+' store',25, 0);
        }

    pop();
    pop();
}

function describeEnergyTwo(energyIn,energy1Out,energy2Out,topslice,bottomslice){

// qualitative
push();
		translate(600, 132);
		noFill();
		stroke(cpaneBadgehands);
		strokeWeight(1);
		line(-557, -8, 133, -8);
		line(-557, 68, 133, 68);
		words("snapshot\nbefore", 80, 14);
		paneBadgeSnapshot();
		translate(0, 105);
		noFill();
		stroke(cpaneBadgehands);
		strokeWeight(1);
		line(-557, -8, 133, -8);
		line(-557, 68, 133, 68);
		words("snapshot\nafter", 80, 14);
		paneBadgeSnapshot();
	pop();
    push();
        translate(20,100);
        subHead('qualitative, identifying stores filling and emptying',0, 0);

        push();
            translate(70,228);
            storeEmptied(energyIn);

            translate(200,0);
             storeFilled(energy1Out);

            translate(100,0);
             storeFilled(energy2Out);
        pop();
    pop();

// quantitative
    var pxscale=20;
    push();
        translate(20,364);
        subHead('qualitative, identifying stores filling and emptying',0, 0);
    push();
    translate(80,216);
    if(inputtoDivvy.getValue()!=0){
    energy(inputtoDivvy.getValue()*pxscale);
    words('energy\nshifted\nfrom '+energyIn+' store',-80,-20);
    }
    pop();
    push();
        translate(272,216);
        if(inputtoDivvy.getValue()!=0 && bottomslice!=0){
            energy(inputtoDivvy.getValue()*pxscale*bottomslice);
            words('energy shifted to '+energy1Out+' store',25, -bottomslice*inputtoDivvy.getValue()*pxscale/2);
            translate(100,-bottomslice*inputtoDivvy.getValue()*pxscale*10);
        }
        if(topslice!=0 && inputtoDivvy.getValue()!=0){
            energy(inputtoDivvy.getValue()*pxscale*topslice);
            words('energy shifted to '+energy2Out+' store',25, -topslice*inputtoDivvy.getValue()*pxscale/2);
        }
    pop();
    pop();
}

function  describeEnergyThree(energyIn,energy1Out,energy2Out,energy3Out,topslice,midslice,bottomslice){
// qualitative
push();
		translate(600, 132);
		noFill();
		stroke(cpaneBadgehands);
		strokeWeight(1);
		line(-557, -8, 133, -8);
		line(-557, 68, 133, 68);
		words("snapshot\nbefore", 80, 14);
		paneBadgeSnapshot();
		translate(0, 105);
		noFill();
		stroke(cpaneBadgehands);
		strokeWeight(1);
		line(-557, -8, 133, -8);
		line(-557, 68, 133, 68);
		words("snapshot\nafter", 80, 14);
		paneBadgeSnapshot();
	pop();
    push();
        translate(20,100);
        subHead('qualitative, identifying stores filling and emptying',0, 0);
        push();
            translate(60,228);
            storeEmptied(energyIn);

            translate(200,0);
             storeFilled(energy1Out);

            translate(100,0);
             storeFilled(energy2Out);

    translate(100,0);
             storeFilled(energy3Out);
        pop();
    pop();

// quantitative

    var pxscale=20;
    push();
        translate(20,364);
		subHead('semi-quantitative, changes in energy in the stores between the snapshots',0, 0);
    push();
    translate(80,216);
    if(inputtoDivvy.getValue()!=0){
    energy(inputtoDivvy.getValue()*pxscale);
    words('energy\nshifted\nfrom '+energyIn+' store',-80,-20);
    }
    pop();
    push();
        translate(262,216);
        if(bottomslice!=0 && inputtoDivvy.getValue()!=0){
            energy(inputtoDivvy.getValue()*pxscale*bottomslice);
            words('energy shifted to '+energy1Out+' store',25, -bottomslice*inputtoDivvy.getValue()*pxscale/2);
            translate(100,-bottomslice*inputtoDivvy.getValue()*pxscale*10);
        }
        if(midslice!=0 && inputtoDivvy.getValue()!=0){
         energy(inputtoDivvy.getValue()*pxscale*midslice);
            words('energy shifted to '+energy2Out+' store',25, -midslice*inputtoDivvy.getValue()*pxscale/2);
            translate(100,-midslice*inputtoDivvy.getValue()*pxscale*10);
        }
        if(topslice!=0 && inputtoDivvy.getValue()!=0){
            energy(inputtoDivvy.getValue()*pxscale*topslice);
            words('energy shifted to '+energy3Out+' store',25, -topslice*inputtoDivvy.getValue()*pxscale/2);
        }
    pop();
    pop();
}

function describePowerOne(pathwayIn,pathway1Out){
 // qualitative
    push();
        translate(20,100);
        subHead('qualitative',0, 0);
        push();
            translate(230,100);
            scale(1.20);
            device("one");

            push();
                translate(-83,-50);
                powerPathway(pathwayIn);
            pop();

            push();
                translate(28,15);
                powerPathway(pathway1Out);
            pop();


        pop();
    pop();

// quantitative
 var pxscale=20;
    pathwayIn=pathwayIn.replace("electrical", "power in\nelectrical\nworking\npathway");
    pathwayIn=pathwayIn.replace("mechanical", "power in\nmechanical\nworking\npathway");
    pathwayIn=pathwayIn.replace("particles", "power in\nheating by\nparticles\npathway");
    pathwayIn=pathwayIn.replace("radiation", "power in\nheating by\nradiation\npathway");
    pathway1Out=pathway1Out.replace("electrical", "power in\nelectrical\nworking\npathway");
    pathway1Out=pathway1Out.replace("mechanical", "power in\nmechanical\nworking\npathway");
    pathway1Out=pathway1Out.replace("particles", "power in\nheating by\nparticles\npathway");
    pathway1Out=pathway1Out.replace("radiation", "power in\nheating by\nradiation\npathway");
    push();
        translate(20,300);
		subHead('semi-quantitative',0, 0);
        push();
            translate(160,250);
            scale(1.2);
            if(inputtoDivvy.getValue()!=0){
                power(inputtoDivvy.getValue()*pxscale);
                words(pathwayIn,-110,-inputtoDivvy.getValue()*pxscale*5-20);
            }
        pop();
        push();
            translate(302,250);
            scale(1.2);
            if(inputtoDivvy.getValue()!=0){
                 power(inputtoDivvy.getValue()*pxscale);;
                words(pathway1Out,40,-inputtoDivvy.getValue()*pxscale*5-20);
            }
        pop();
    pop();

}


function describePowerTwo(pathwayIn,pathway1Out,pathway2Out,topslice,bottomslice){
//  qualitativepowertwo(pathwayIn,pathway1Out,pathway2Out,20,100);
  // qualitative
   push();
        translate(20,100);
		subHead('qualitative',0, 0);

        push();
            translate(230,100);
            scale(1.20);
            device("two");

            push();
                translate(-83,-50);
                powerPathway(pathwayIn);
            pop();

            push();
                translate(28,-10);
                powerPathway(pathway1Out);
            pop();

            push();
                translate(28,15);
                powerPathway(pathway2Out);
            pop();


        pop();
    pop();

// quantitative
 var pxscale=20;
    pathwayIn=pathwayIn.replace("electrical", "power in\nelectrical\nworking\npathway");
    pathwayIn=pathwayIn.replace("mechanical", "power in\nmechanical\nworking\npathway");
    pathwayIn=pathwayIn.replace("particles", "power in\nheating by\nparticles\npathway");
    pathwayIn=pathwayIn.replace("radiation", "power in\nheating by\nradiation\npathway");
    pathway1Out=pathway1Out.replace("electrical", "power in electrical working pathway");
    pathway1Out=pathway1Out.replace("mechanical", "power in mechanical working pathway");
    pathway1Out=pathway1Out.replace("particles", "power in heating by particles pathway");
    pathway1Out=pathway1Out.replace("radiation", "power in heating by radiation pathway");
    pathway2Out=pathway2Out.replace("electrical", "power in electrical working pathway");
    pathway2Out=pathway2Out.replace("mechanical", "power in mechanical working pathway");
    pathway2Out=pathway2Out.replace("particles", "power in heating by particles pathway");
    pathway2Out=pathway2Out.replace("radiation", "power in heating by radiation pathway");
    push();
        translate(20,300);
		subHead('semi-quantitative',0, 0);
        push();
            translate(160,250);
            scale(1.2);
            if(inputtoDivvy.getValue()!=0){
                power(inputtoDivvy.getValue()*pxscale);
                words(pathwayIn,-110,-inputtoDivvy.getValue()*pxscale*5-20);
            }
        pop();
        push();
            translate(302,250);
            scale(1.2);
            if(inputtoDivvy.getValue()!=0 && bottomslice!=0){
                power(inputtoDivvy.getValue()*pxscale*bottomslice);
                words(pathway2Out,40, -bottomslice*pxscale*inputtoDivvy.getValue()*5);
            }
            translate(0,-bottomslice*inputtoDivvy.getValue()*pxscale*10);
            if(topslice!=0 && inputtoDivvy.getValue()!=0){
                power(inputtoDivvy.getValue()*pxscale*topslice);
                words(pathway1Out,40, -topslice*pxscale*inputtoDivvy.getValue()*5);
            }
        pop();
    pop();
}

function describePowerThree(pathwayIn,pathway1Out,pathway2Out,pathway3Out,topslice,midslice,bottomslice){

//qualitative
 push();
        translate(20,100);
		subHead('qualitative',0, 0);

        push();
            translate(230,100);
            scale(1.20);
            device("three");

            push();
                translate(-83,-50);
                powerPathway(pathwayIn);
            pop();

            push();
                translate(28,-35);
                powerPathway(pathway1Out);
            pop();

            push();
                translate(28,-10);
                powerPathway(pathway2Out);
            pop();

            push();
                translate(28,15);
                powerPathway(pathway3Out);
            pop();


        pop();
    pop();
//  qualitativepowerthree(pathwayIn,pathway1Out,pathway2Out,pathway3Out,20,100);
   //quantitative
var pxscale=20;
    pathwayIn=pathwayIn.replace("electrical", "power in\nelectrical\nworking\npathway");
    pathwayIn=pathwayIn.replace("mechanical", "power in\nmechanical\nworking\npathway");
    pathwayIn=pathwayIn.replace("particles", "power in\nheating by\nparticles\npathway");
    pathwayIn=pathwayIn.replace("radiation", "power in\nheating by\nradiation\npathway");
    pathway1Out=pathway1Out.replace("electrical", "power in electrical working pathway");
    pathway1Out=pathway1Out.replace("mechanical", "power in mechanical working pathway");
    pathway1Out=pathway1Out.replace("particles", "power in heating by particles pathway");
    pathway1Out=pathway1Out.replace("radiation", "power in heating by radiation pathway");
    pathway2Out=pathway2Out.replace("electrical", "power in electrical working pathway");
    pathway2Out=pathway2Out.replace("mechanical", "power in mechanical working pathway");
    pathway2Out=pathway2Out.replace("particles", "power in heating by particles pathway");
    pathway2Out=pathway2Out.replace("radiation", "power in heating by radiation pathway");
    pathway3Out=pathway3Out.replace("electrical", "power in electrical working pathway");
    pathway3Out=pathway3Out.replace("mechanical", "power in mechanical working pathway");
    pathway3Out=pathway3Out.replace("particles", "power in heating by particles pathway");
    pathway3Out=pathway3Out.replace("radiation", "power in heating by radiation pathway");
    push();
        translate(20,300);
		subHead('semi-quantitative',0, 0);
    push();
    translate(160,260);
    scale(1.2);
    if(inputtoDivvy.getValue()!=0){
    power(inputtoDivvy.getValue()*pxscale);
    words(pathwayIn,-100,-inputtoDivvy.getValue()*pxscale*5-20);
    }
    pop();
    push();
        translate(302,260);
    scale(1.2);
        if(bottomslice!=0 && inputtoDivvy.getValue()!=0){
            power(inputtoDivvy.getValue()*pxscale*bottomslice);
            words(pathway1Out,40, -bottomslice*pxscale*inputtoDivvy.getValue()*5);
        }
        translate(0,-bottomslice*inputtoDivvy.getValue()*pxscale*10);
        if(midslice!=0 && inputtoDivvy.getValue()!=0){
            power(inputtoDivvy.getValue()*pxscale*midslice);
            words(pathway2Out,40, -midslice*pxscale*inputtoDivvy.getValue()*5);
        }
        translate(0,-midslice*inputtoDivvy.getValue()*pxscale*10);
        if(topslice!=0 && inputtoDivvy.getValue()!=0){
            power(inputtoDivvy.getValue()*pxscale*topslice);
            words(pathway3Out,40, -topslice*pxscale*inputtoDivvy.getValue()*5);
        }
    pop();
    pop();  //quantitativepowerthree(pathwayIn,pathway1Out,pathway2Out,pathway3Out,20,300,topslice,midslice,bottomslice);
}

function DeviceProcess(storeemptying,pathwayemptying,pathwayfilling,storefilling,powerInPathway){
 // qualitative
    push();
        translate(20,100);
        subHead('qualitative',0, 0);

        push();
            translate(267,154);
            scale(1.20);
            device("one");

            push();
                translate(-83,-50);
                powerPathway(pathwayemptying);
            pop();

            push();
                translate(28,15);
                powerPathway(pathwayfilling);
            pop();


        pop();
    pop();

    push();
		translate(150, 320);
		noStroke();
		fill(cstoreframeGrey);
		triangle(0, 0, -41, -20, 41, -20);
		rect(-41, -20, 82, -186);
		fill(cstoreframelightGrey);
		rect(-37, -24, 74, -74);
		rect(-37, -128, 74, -74);
		transitionEvolve(0, -113, 90);
		push();
			translate(-33,-200);
			push();
				scale(0.8);
				storeFuller(storeemptying); //topstore
			pop();
			translate(0,108);
			push();
				scale(0.8);
				storeEmptier(storeemptying); //topstore
			pop();
		pop();
	pop();

	push();
		translate(427, 413);
		noStroke();
		fill(cstoreframeGrey);
		triangle(0, 0, -41, -20, 41, -20);
		rect(-41, -20, 82, -186);
		fill(cstoreframelightGrey);
		rect(-37, -24, 74, -74);
		rect(-37, -128, 74, -74);
		transitionEvolve(0, -113, 90);
		push();
			translate(-33,-200);
			push();
				scale(0.8);
				storeEmptier(storefilling); //topstore
			pop();
			translate(0,108);
			push();
				scale(0.8);
				storeFuller(storefilling); //topstore
			pop();
		pop();
	pop();

// quantitative
    pathwayemptying=pathwayemptying.replace("electrical", "power in\nelectrical\nworking\npathway");
    pathwayemptying=pathwayemptying.replace("mechanical", "power in\nmechanical\nworking\npathway");
    pathwayemptying=pathwayemptying.replace("particles", "power in\nheating by\nparticles\npathway");
    pathwayemptying=pathwayemptying.replace("radiation", "power in\nheating by\nradiation\npathway");
    pathwayfilling=pathwayfilling.replace("electrical", "power in\nelectrical\nworking\npathway");
    pathwayfilling=pathwayfilling.replace("mechanical", "power in\nmechanical\nworking\npathway");
    pathwayfilling=pathwayfilling.replace("particles", "power in\nheating by\nparticles\npathway");
    pathwayfilling=pathwayfilling.replace("radiation", "power in\nheating by\nradiation\npathway");

    subHead('semi-quantitative',20, 440);
    push();

        push();
            translate(229,560);
			words(pathwayemptying,-110,-powerInPathway*5-20);
			scale(1.2);
			power(powerInPathway);
        pop();
        push();
            translate(359,560);
			words(pathwayfilling,40,-powerInPathway*5-20);
			scale(1.2);
			power(powerInPathway);
        pop();
    pop();

}

function tradeOff(xloc,yloc,hquantity,vquantity,hqcolour,vqcolour){
	fill(ccongray);
	noStroke();
	rect(xloc, yloc, hquantity, -vquantity);
	strokeWeight(2);
	stroke(vqcolour);
	line(xloc+hquantity, yloc, xloc+hquantity, yloc-vquantity);
	stroke(hqcolour);
	line(xloc, yloc, xloc+hquantity, yloc);
}

function tradeOfftriangle(xloc,yloc,hquantity,vquantity,hqcolour,vqcolour){
	fill(ccongray);
	noStroke();
	triangle(xloc, yloc, xloc+hquantity, yloc,xloc+hquantity, yloc-vquantity);
	strokeWeight(2);
	stroke(vqcolour);
	line(xloc+hquantity, yloc, xloc+hquantity, yloc-vquantity);
	stroke(hqcolour);
	line(xloc, yloc, xloc+hquantity, yloc);
}

function ropeloop(xloc,yloc,loopwidth,loopheight,bandcolour,startmove){
  push();
  startmove=startmove%(2*loopheight+2*loopwidth);
//   console.log(startmove);
  translate(xloc, yloc);
  noFill();
   strokeWeight(8);
    stroke(cdeviceGrey);
    rect(0, 0, loopwidth, -loopheight);
	drawingContext.setLineDash([15, 15]);
    strokeCap(SQUARE);
    stroke(bandcolour);
	if (startmove<loopheight && startmove>0){
		beginShape();
		vertex(0, -startmove);

		vertex(0, -loopheight);
		vertex(loopwidth, -loopheight);
		vertex(loopwidth, 0);
		vertex(0, 0);
		endShape(CLOSE);
	}
	if (startmove>loopheight && startmove<loopheight+loopwidth){
		beginShape();
		vertex(startmove-loopheight, -loopheight);
		vertex(loopwidth, -loopheight);
		vertex(loopwidth, 0);
		vertex(0, 0);
		vertex(0, -loopheight);
		endShape(CLOSE);
	}
	if (startmove>loopheight+loopwidth && startmove<2*loopheight+loopwidth){
		beginShape();
		vertex(loopwidth,-loopheight+startmove-(loopheight+loopwidth));
		vertex(loopwidth, 0);
		vertex(0, 0);
		vertex(0, -loopheight);
		vertex(loopwidth, -loopheight);
		endShape(CLOSE);
	}
	if (startmove>2*loopheight+loopwidth && startmove<2*loopheight+2*loopwidth){
		beginShape();
		vertex(loopwidth-(startmove-(2*loopheight+loopwidth)),0);
		vertex(0, 0);
		vertex(0, -loopheight);
		vertex(loopwidth, -loopheight);
		vertex(loopwidth, 0);
		endShape(CLOSE);
	}
  drawingContext.setLineDash([]);
  pop();
  }

//graphs and charts

function pspace2D(p2Dheight,p2Dwidth,plotlabelX,plotlabelY,valueNowX,valueNowY){
    fill(cplotBG);
    rect(-p2Dwidth, -p2Dheight, 2*p2Dwidth, 2* p2Dheight, 20, 20, 20, 20);
    stroke(cplotaxes);
    line(-15-p2Dwidth, 0, p2Dwidth+15, 0);
    line(0, -15-p2Dheight, 0, p2Dheight+15);
    words(plotlabelX, 0, p2Dheight+20);
    words(plotlabelY, p2Dwidth+20, 0);
    exploredvaluesX.push(valueNowX);
    exploredvaluesY.push(valueNowY);
    noStroke();
    for (var i = 1; i < exploredvaluesX.length; i = i+1) {
      stroke(cexploreplot);
      ellipse(exploredvaluesX[i]*2, -exploredvaluesY[i]*2, 5, 5);
    }
    if (exploredvaluesX.length>100) {
      exploredvaluesX.length= 0; //clears the array
      exploredvaluesY.length= 0; //clears the array
    }
}



// controllers and inputs


class controlButton{
constructor(xloc,yloc,buttonwidth,buttonheight){
	this.xloc=xloc;
	this.yloc =yloc;
	this.buttonwidth = buttonwidth;
	this.buttonheight= buttonheight;
	this.buttonwasPressed=false;
	}

	checkPressed(){
	if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight)
		{
		this.buttonwasPressed=true;
		return this.buttonwasPressed;
		}
		}

	drawButton(){
	stroke(csliderdarkGrey);
	strokeWeight(1);
	if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight)
		{
		cursor(HAND);
		fill(91,173,58);
		} else {
		fill(csliderlightGrey);
		cursor(ARROW);
		this.buttonwasPressed=false;
		}
  rectMode(CORNER);
  	rect(this.xloc, this.yloc, this.buttonwidth, this.buttonheight,5);
  	}
	}

class labelButton{
constructor(xloc,yloc,textLabel){
	this.xloc=xloc;
	this.yloc =yloc;
	this.textLabel=textLabel;
	this.buttonwidth = textWidth(this.textLabel)*1.4;
	this.buttonheight= 30;
	this.buttonwasPressed=false;
	}

	checkPressed(){
	if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight)
		{
		this.buttonwasPressed=true;
		return this.buttonwasPressed;
		}
		}
	drawButton(){
	stroke(csliderdarkGrey);
	strokeWeight(1);
	if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight)
		{
		cursor(HAND);
		fill(91,173,58);
		} else {
		fill(csliderlightGrey);
		cursor(ARROW);
		this.buttonwasPressed=false;
		}
  rectMode(CORNER);
  	rect(this.xloc, this.yloc, this.buttonwidth, this.buttonheight,5);
  	words(this.textLabel, this.xloc+5, this.yloc+this.buttonheight/2+5)
  	}
	}

class checkButton{
constructor(xloc,yloc,textLabel,state){
	this.xloc=xloc;
	this.yloc =yloc;
	this.textLabel=textLabel;
// 	textFont(romanFont);
	this.buttonwidth = textWidth(this.textLabel)+60;
	this.buttonheight= 30;
// 	this.buttonwasPressed=false;
	this.buttonisChecked=state;
	}

	changeState(){
	if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight){
		this.buttonisChecked=!this.buttonisChecked;
		return this.buttonisChecked;
		}
	}

	drawButton(){
	stroke(csliderdarkGrey);
	strokeWeight(1);
	if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight)
		{
		cursor(HAND);
		fill(91,173,58);
			if (mouseIsPressed) {

			}
		} else {
		fill(csliderlightGrey);
		cursor(ARROW);
		}
  rectMode(CORNER);
  	rect(this.xloc, this.yloc, this.buttonwidth, this.buttonheight,5);
  	noFill();
//   	rectMode(CENTER);
	rect(this.xloc+10, this.yloc+this.buttonheight/2-5, 10, 10);

  	//checkmark
  	if (this.buttonisChecked==true){
		strokeWeight(3);
		line(this.xloc+8, this.yloc+this.buttonheight/2-6, this.xloc+15, this.yloc+this.buttonheight/2+2);
		line(this.xloc+30, this.yloc+this.buttonheight/2-12, this.xloc+15, this.yloc+this.buttonheight/2+2);
		}
		words(this.textLabel, this.xloc+30, this.yloc+this.buttonheight/2+5)
  	}

	}



class radioButtons{
  constructor(xloc,yloc,textLabels){
    this.xloc=xloc;
    this.yloc =yloc;
    this.textLabels=textLabels;
    this.currentchoice=0;
    // find longest label and set button width
    this.buttonwidth = textWidth(textLabels.reduce(function (a, b) { return a.length > b.length ? a : b; }))+60;
    const linespacing =22;
    this.buttonheight= linespacing*this.textLabels.length;
    }

    makeChoice(){
    const linespacing=22;
    stroke(csliderdarkGrey);
    noFill();
    rectMode(CORNER);
    // draw outline
    rect(this.xloc, this.yloc, this.buttonwidth, this.buttonheight,5);
    for (let k = 0; k < this.textLabels.length; k++) {
      words(this.textLabels[k], this.xloc+28, this.yloc+.8*linespacing+linespacing*k);
      noFill();
      strokeWeight(1);
      stroke(csliderdarkGrey);
      ellipse(this.xloc+15, this.yloc+12+linespacing*k, 15, 15);
    strokeWeight(1);
  }
    if (mouseX >= this.xloc && mouseX <= this.xloc+this.buttonwidth && mouseY >= this.yloc && mouseY <= this.yloc+this.buttonheight)
      {
      cursor(HAND);
      fill(91,173,58);
      rect(this.xloc, this.yloc, this.buttonwidth, this.buttonheight,5);
      noFill();
        rectMode(CORNER);
        // draw outline
        rect(this.xloc, this.yloc, this.buttonwidth, this.buttonheight,5);
        for (let k = 0; k < this.textLabels.length; k++) {
          words(this.textLabels[k], this.xloc+28, this.yloc+.8*linespacing+linespacing*k);
          noFill();
          strokeWeight(1);
          stroke(csliderdarkGrey);
          ellipse(this.xloc+15, this.yloc+12+linespacing*k, 15, 15);
        strokeWeight(1);
      }
        if (mouseIsPressed) {
          let choosethis=abs(int((mouseY-this.yloc)/linespacing));
          this.currentchoice=choosethis;
                  }
      } else {
      fill(csliderlightGrey);
      cursor(ARROW);
      }
    fill(csliderdarkGrey)
    ellipse(this.xloc+15,this.yloc+12+linespacing*this.currentchoice, 15, 15);
    return this.textLabels[this.currentchoice];
            }
    }

class controlPuck{
	constructor(){

	this.pucksize = 20;
	this.controlBarrier=30;
	}

	create(xloc,yloc){
	this.SetterX=xloc;
	this.PuckX = xloc;
	this.SetterY = yloc;
	this.PuckY= yloc;

	}

	getValues(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.controlBarrier-this.pucksize/2, this.SetterY-this.controlBarrier-this.pucksize/2, 2*this.controlBarrier+this.pucksize, 2*this.controlBarrier+this.pucksize,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			// print(dist(this.PuckX, this.PuckY, mouseX, mouseY));
	// 		print(this.PuckX-mouseX);
			this.PuckX = mouseX;
			this.PuckY = mouseY;
		}
		this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
		this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY+this.controlBarrier);
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);
// 		print([(this.PuckX-this.SetterX)/(this.controlBarrier*2),(this.SetterY-this.PuckY)/(this.controlBarrier*2)]);
		return {
        xSet: (this.PuckX-this.SetterX)/(this.controlBarrier*2),
        ySet: (this.SetterY-this.PuckY)/(this.controlBarrier*2)
		};

	}
}

class controlPuckpositive{
	constructor(){

	this.pucksize = 20;
	this.controlBarrier=30;
	}

	create(xloc,yloc){
	this.SetterX=xloc;
	this.PuckX = xloc;
	this.SetterY = yloc;
	this.PuckY= yloc;

	}

	getValues(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		noFill();
		rect(this.SetterX-this.controlBarrier-this.pucksize/2, this.SetterY-this.controlBarrier-this.pucksize/2, 2*this.controlBarrier+this.pucksize, 2*this.controlBarrier+this.pucksize,5);
		fill(csliderlightGrey);
		noStroke();
		rect(this.SetterX, this.SetterY-this.controlBarrier-this.pucksize/2, this.controlBarrier+this.pucksize/2,this.controlBarrier+this.pucksize/2,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			// print(dist(this.PuckX, this.PuckY, mouseX, mouseY));
	// 		print(this.PuckX-mouseX);
			this.PuckX = mouseX;
			this.PuckY = mouseY;
		}
		this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
		this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY);
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);
// 		print([(this.PuckX-this.SetterX)/(this.controlBarrier*2),(this.SetterY-this.PuckY)/(this.controlBarrier*2)]);
		return {
        xSet: (this.PuckX-this.SetterX)/(this.controlBarrier*2),
        ySet: (this.SetterY-this.PuckY)/(this.controlBarrier*2)
		};

	}
}

class controlStripVerticalPositive{
	constructor(){

	this.pucksize = 20;
	this.controlBarrier=60;
	}

	create(xloc,yloc){
	this.SetterX=xloc;
	this.PuckX = xloc;
	this.SetterY = yloc;
	this.PuckY= yloc;

	}

	getValues(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.pucksize/2, this.SetterY-this.controlBarrier, this.pucksize,this.controlBarrier,5,5,0,0);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			this.PuckY = mouseY;
		}
		this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY);
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);
		return {
        xSet: 0,
        ySet: (this.SetterY-this.PuckY)/(this.controlBarrier)
		};

	}
}

class controlStripHorizontalPositive{
	constructor(){

	this.pucksize = 20;
	this.controlBarrier=60;
	}

	create(xloc,yloc){
	this.SetterX=xloc;
	this.PuckX = xloc;
	this.SetterY = yloc;
	this.PuckY= yloc;

	}

	getValues(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX, this.SetterY-this.pucksize/2, this.controlBarrier+this.pucksize/2, this.pucksize,0,5,5,0);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			this.PuckX = mouseX;
		}
		this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);
		return {
        xSet: (this.SetterX-this.PuckX)/(this.controlBarrier),
        ySet: 0
		};

	}
}

class controlStripHorizontal{
	constructor(){

	this.pucksize = 20;
	this.controlBarrier=30;
	}

	create(xloc,yloc){
	this.SetterX=xloc;
	this.PuckX = xloc;
	this.SetterY = yloc;
	this.PuckY= yloc;

	}

	getValues(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.controlBarrier-this.pucksize/2, this.SetterY-this.pucksize/2, 2*this.controlBarrier+this.pucksize, this.pucksize,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			this.PuckX = mouseX;
		}
		this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);
		return {
        xSet: (this.SetterX-this.PuckX)/(this.controlBarrier*2),
        ySet: 0
		};

	}
}

class controlStripVertical{
	constructor(){

	this.pucksize = 20;
	this.controlBarrier=30;
	}

	create(xloc,yloc){
	this.SetterX=xloc;
	this.PuckX = xloc;
	this.SetterY = yloc;
	this.PuckY= yloc;

	}

	getValues(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.pucksize/2, this.SetterY-this.controlBarrier-this.pucksize/2, this.pucksize, 2*this.controlBarrier+this.pucksize,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			this.PuckY = mouseY;
		}
		this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY+this.controlBarrier);
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);
		return {
        xSet: 0,
        ySet: (this.SetterY-this.PuckY)/(this.controlBarrier*2)
		};

	}

}

// compound graphs and controllers

class graphExploreBoxArea{

	constructor(){
	this.pucksize = 20;
	this.controlBarrier=30;
// 	this.graphOffsetX= 160;
	this.graphOffsetY= 250;
	}

	create(xloc,yloc,graphSize,quadrants,plotlabelX,plotlabelY){
		this.SetterX=xloc;
		this.PuckX = xloc+this.controlBarrier/3;
		this.SetterY = yloc;
		this.PuckY= yloc-this.controlBarrier/3;
		switch(quadrants){
		case 4:
			this.graphOffsetX= graphSize+100;
			break;
		case 3:
			this.graphOffsetX= graphSize+100;
			break;
		case 2:
			this.graphOffsetX= 100;
			break;
		case 1:
			this.graphOffsetX= 100;
			break;
		}
		this.graphLocX= xloc+this.graphOffsetX;
		this.graphLocY= yloc+this.graphOffsetY;
		this.quadrants=quadrants;
		this.graphSize=graphSize;
		this.xlabeltext=plotlabelX;
		this.ylabeltext=plotlabelY;
	}

	setLabels(){
	this.xlabel=createDiv(this.xlabeltext);
    this.xlabel.class("infoBlock");
    this.xlabel.size(170);
    this.xlabel.html(pmlparse(this.xlabel.html()));
    this.ylabel=createDiv(this.ylabeltext);
    this.ylabel.class("infoBlock");
    this.ylabel.size(150);
    this.ylabel.html(pmlparse(this.ylabel.html()));
	this.xlabel.position(this.graphLocX+this.graphSize+20, this.graphLocY);
	this.ylabel.position(this.graphLocX, this.graphLocY-this.graphSize-40);
    }

	draw(){
		stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.controlBarrier-this.pucksize/2, this.SetterY-this.controlBarrier-this.pucksize/2, 2*this.controlBarrier+this.pucksize, 2*this.controlBarrier+this.pucksize,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			this.PuckX = mouseX;
			this.PuckY = mouseY;
		}
		switch(this.quadrants){
		case 4:
			this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
			this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY+this.controlBarrier);
		break;
		case 3:
			this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
			this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY);
		break;
		case 2:
			this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
			this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY+this.controlBarrier);
		break;
		case 1:
		this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
		this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY);
		}
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.SetterY);
		line(this.SetterX, this.SetterY, this.SetterX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);

		this.boxX=(this.PuckX-this.SetterX)/(this.controlBarrier*2);
		this.boxY=-(this.SetterY-this.PuckY)/(this.controlBarrier*2);


		push();
			translate(this.graphLocX,this.graphLocY);

			switch(this.quadrants){
				case 4:
					fill(cplotBG);
					noStroke();
					rect(-this.graphSize, -this.graphSize, 2*this.graphSize, 2* this.graphSize, 10, 10, 10, 10);
					fill(cdeviceLightGrey);
					rect(0,0,this.boxX*this.graphSize*1.5,this.boxY*this.graphSize*1.5);
					stroke(cplotaxes);
					line(-15-this.graphSize, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, this.graphSize+15);
				break;
				case 3:
					fill(cplotBG);
					noStroke();
					rect(-this.graphSize, -this.graphSize, 2*this.graphSize, this.graphSize, 10, 10, 0, 0);
					fill(cdeviceLightGrey);
					rect(0,0,this.boxX*this.graphSize*1.5,this.boxY*this.graphSize*1.5);
					stroke(cplotaxes);
					line(-15-this.graphSize, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 0);
				break;
				case 2:
					fill(cplotBG);
					noStroke();
					rect(0,-this.graphSize, this.graphSize, 2*this.graphSize, 0, 10, 0, 0);					fill(cdeviceLightGrey);
					rect(0,0,this.boxX*this.graphSize*1.5,this.boxY*this.graphSize*1.5);
					stroke(cplotaxes);
					line(-15, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 15+this.graphSize);
				break;
				case 1:
					fill(cplotBG);
					noStroke();
					rect(0,-this.graphSize,this.graphSize,this.graphSize, 0, 10, 0, 0);					fill(cdeviceLightGrey);
					rect(0,0,this.boxX*this.graphSize*1.5,this.boxY*this.graphSize*1.5);
					stroke(cplotaxes);
					line(-15, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 15);
				break;
			}
		pop();

	}

	getValues(){
	return {
			boxWidth: this.boxX,
			boxHeight: -this.boxY
		};
		}
}


class exploreRelationshipGraph{
	constructor(){
	this.pucksize = 20;
	this.controlBarrier=30;
	}

	create(xloc,yloc,graphSize,quadrants,plotlabelX,plotlabelY){
	this.SetterX=xloc;
	switch(quadrants){
		case 4:
			this.graphOffsetX= graphSize+100;
			break;
		case 3:
			this.graphOffsetX= graphSize+100;
			break;
		case 2:
			this.graphOffsetX= 100;
			break;
		case 1:
			this.graphOffsetX= 100;
			break;
		}

	this.graphOffsetY=graphSize-this.controlBarrier-10;
	this.PuckX = xloc+this.controlBarrier/3;
	this.SetterY = yloc;
	this.PuckY= yloc;
	this.graphLocX= xloc+this.graphOffsetX;
	this.graphLocY= yloc+this.graphOffsetY;
	this.quadrants=quadrants;
	this.graphSize=graphSize;
	this.xlabeltext=plotlabelX;
	this.ylabeltext=plotlabelY;
	this.exploredgraphvaluesX=[];
	this.exploredgraphvaluesY=[];

	}

	setLabels(){
	this.xlabel=createDiv(this.xlabeltext);
    this.xlabel.class("infoBlock");
    this.xlabel.size(170);
    this.xlabel.html(pmlparse(this.xlabel.html()));
    this.ylabel=createDiv(this.ylabeltext);
    this.ylabel.class("infoBlock");
    this.ylabel.size(150);
    this.ylabel.html(pmlparse(this.ylabel.html()));
	this.xlabel.position(this.graphLocX+this.graphSize+20, this.graphLocY);
	this.ylabel.position(this.graphLocX, this.graphLocY-this.graphSize-40);
    }

    draw(){
    	stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.controlBarrier-this.pucksize/2, this.SetterY-this.controlBarrier-this.pucksize/2, 2*this.controlBarrier+this.pucksize, 2*this.controlBarrier+this.pucksize,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			// print(dist(this.PuckX, this.PuckY, mouseX, mouseY));
	// 		print(this.PuckX-mouseX);
			this.PuckX = mouseX;
			this.PuckY = mouseY;
		}
		this.PuckY=constrain(this.PuckY,this.SetterY,this.SetterY);

		switch(this.quadrants){
		case 4:
			this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
		break;
		case 3:
			this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
		break;
		case 2:
			this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
		break;
		case 1:
			this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
		break;
		}
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.SetterY);
		line(this.SetterX, this.SetterY, this.SetterX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);

		this.boxX=(this.PuckX-this.SetterX)/(this.controlBarrier*2);
		this.boxY=-(this.SetterY-this.PuckY)/(this.controlBarrier*2);


		push();
			translate(this.graphLocX,this.graphLocY);
			fill(cplotBG);
			noStroke();
			switch(this.quadrants){
				case 4:
					rect(-this.graphSize, -this.graphSize, 2*this.graphSize, 2* this.graphSize, 20, 20, 20, 20);
					fill(cdeviceLightGrey);
					stroke(cplotaxes);
					line(-15-this.graphSize, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, this.graphSize+15);
				break;
				case 3:
					rect(-this.graphSize, -this.graphSize, 2*this.graphSize, this.graphSize, 20, 20, 20, 20);
					fill(cdeviceLightGrey);
					stroke(cplotaxes);
					line(-15-this.graphSize, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 0);
				break;
				case 2:
					rect(0,-this.graphSize, this.graphSize, 2*this.graphSize, 0, 20, 0, 0);					fill(cdeviceLightGrey);
					stroke(cplotaxes);
					line(-15, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 15+this.graphSize);
				break;
				case 1:
					rect(0,-this.graphSize,this.graphSize,this.graphSize, 0, 20, 0, 0);					fill(cdeviceLightGrey);
					noStroke();
					rect(0,0,this.boxX*this.graphSize*1.5,this.boxY*this.graphSize*1.5);
					stroke(cplotaxes);
					line(-15, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 15);
				break;
			}
		pop();

	}

	getValues(){
	return {
			xSet: -this.boxX,
			ySet: -this.boxY
		};

	}

	plotValues(valueNowX,valueNowY){
		this.valueNowX=valueNowX*this.graphSize;
		this.valueNowY=valueNowY*this.graphSize;

		this.exploredgraphvaluesX.push(this.valueNowX);
		this.exploredgraphvaluesY.push(this.valueNowY);
		noStroke();
		for (var i = 1; i < this.exploredgraphvaluesX.length; i = i+1) {
		  stroke(cexploreplot);
		  line(this.graphLocX+this.exploredgraphvaluesX[i], this.graphLocY-this.exploredgraphvaluesY[i]-2, this.graphLocX+this.exploredgraphvaluesX[i], this.graphLocY-this.exploredgraphvaluesY[i]+2);
		  line(this.graphLocX+this.exploredgraphvaluesX[i]-2, this.graphLocY-this.exploredgraphvaluesY[i], this.graphLocX+this.exploredgraphvaluesX[i]+2, this.graphLocY-this.exploredgraphvaluesY[i]);
		}
    if (this.exploredgraphvaluesX.length>200) {
      this.exploredgraphvaluesX.length= 0; //clears the array
      this.exploredgraphvaluesY.length= 0; //clears the array
    }
    }

}

class exploreUnconstrainedGraph{
	constructor(){
	this.pucksize = 20;
	this.controlBarrier=30;
	}

	create(xloc,yloc,graphSize,quadrants,plotlabelX,plotlabelY){
	this.SetterX=xloc;
	switch(quadrants){
		case 4:
			this.graphOffsetX= graphSize+100;
			break;
		case 3:
			this.graphOffsetX= graphSize+100;
			break;
		case 2:
			this.graphOffsetX= 100;
			break;
		case 1:
			this.graphOffsetX= 100;
			break;
		}

	this.graphOffsetY=graphSize-this.controlBarrier-10;
	this.PuckX = xloc+this.controlBarrier/3;
	this.SetterY = yloc;
	this.PuckY= yloc;
	this.graphLocX= xloc+this.graphOffsetX;
	this.graphLocY= yloc+this.graphOffsetY;
	this.quadrants=quadrants;
	this.graphSize=graphSize;
	this.xlabeltext=plotlabelX;
	this.ylabeltext=plotlabelY;
	this.exploredgraphvaluesX=[];
	this.exploredgraphvaluesY=[];

	}

	setLabels(){
	this.xlabel=createDiv(this.xlabeltext);
    this.xlabel.class("infoBlock");
    this.xlabel.size(170);
    this.xlabel.html(pmlparse(this.xlabel.html()));
    this.ylabel=createDiv(this.ylabeltext);
    this.ylabel.class("infoBlock");
    this.ylabel.size(150);
    this.ylabel.html(pmlparse(this.ylabel.html()));
	this.xlabel.position(this.graphLocX+this.graphSize+20, this.graphLocY);
	this.ylabel.position(this.graphLocX, this.graphLocY-this.graphSize-40);
    }

    draw(){
    	stroke(csliderdarkGrey);
		strokeWeight(1);
		fill(csliderlightGrey);
		rect(this.SetterX-this.controlBarrier-this.pucksize/2, this.SetterY-this.controlBarrier-this.pucksize/2, 2*this.controlBarrier+this.pucksize, 2*this.controlBarrier+this.pucksize,5);
		fill(cWhite);
		if(dist(this.PuckX, this.PuckY, mouseX, mouseY)< this.pucksize/2 && mouseIsPressed)  {
			fill(csliderdarkGrey);
			// print(dist(this.PuckX, this.PuckY, mouseX, mouseY));
	// 		print(this.PuckX-mouseX);
			this.PuckX = mouseX;
			this.PuckY = mouseY;
		}
// 		this.PuckY=constrain(this.PuckY,this.SetterY,this.SetterY);

		switch(this.quadrants){
		case 4:
			this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
									this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY+this.controlBarrier);

		break;
		case 3:
			this.PuckX=constrain(this.PuckX,this.SetterX-this.controlBarrier,this.SetterX+this.controlBarrier);
						this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY);

		break;
		case 2:
			this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
						this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY+this.controlBarrier);

		break;
		case 1:
			this.PuckX=constrain(this.PuckX,this.SetterX,this.SetterX+this.controlBarrier);
			this.PuckY=constrain(this.PuckY,this.SetterY-this.controlBarrier,this.SetterY);

		break;
		}
		rect(this.PuckX-this.pucksize/2, this.PuckY-this.pucksize/2, this.pucksize, this.pucksize,5)
		stroke(csliderdarkGrey);
		strokeWeight(2);
		fill(csliderdarkGrey);
		line(this.SetterX, this.SetterY, this.PuckX, this.SetterY);
		line(this.SetterX, this.SetterY, this.SetterX, this.PuckY);
		ellipse(this.PuckX, this.PuckY, 2, 2);

		this.boxX=(this.PuckX-this.SetterX)/(this.controlBarrier*2);
		this.boxY=-(this.SetterY-this.PuckY)/(this.controlBarrier*2);


		push();
			translate(this.graphLocX,this.graphLocY);
			fill(cplotBG);
			noStroke();
			switch(this.quadrants){
				case 4:
					rect(-this.graphSize, -this.graphSize, 2*this.graphSize, 2* this.graphSize, 20, 20, 20, 20);
					fill(cdeviceLightGrey);
					stroke(cplotaxes);
					line(-15-this.graphSize, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, this.graphSize+15);
				break;
				case 3:
					rect(-this.graphSize, -this.graphSize, 2*this.graphSize, this.graphSize, 20, 20, 20, 20);
					fill(cdeviceLightGrey);
					stroke(cplotaxes);
					line(-15-this.graphSize, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 0);
				break;
				case 2:
					rect(0,-this.graphSize, this.graphSize, 2*this.graphSize, 0, 20, 0, 0);					fill(cdeviceLightGrey);
					stroke(cplotaxes);
					line(-15, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 15+this.graphSize);
				break;
				case 1:
					rect(0,-this.graphSize,this.graphSize,this.graphSize, 0, 20, 0, 0);					// fill(cdeviceLightGrey);
// 					noStroke();
// 					rect(0,0,this.boxX*this.graphSize*1.5,this.boxY*this.graphSize*1.5);
					stroke(cplotaxes);
					line(-15, 0, this.graphSize+15, 0);
					line(0, -15-this.graphSize, 0, 15);
				break;
			}
		pop();

	}

	getValues(){
	return {
			xSet: -this.boxX,
			ySet: -this.boxY
		};

	}

	plotValues(valueNowX,valueNowY){
		this.valueNowX=valueNowX*this.graphSize;
		this.valueNowY=valueNowY*this.graphSize;

		this.exploredgraphvaluesX.push(this.valueNowX);
		this.exploredgraphvaluesY.push(this.valueNowY);
		noStroke();
		for (var i = 1; i < this.exploredgraphvaluesX.length; i = i+1) {
		  stroke(cexploreplot);
		  line(this.graphLocX+this.exploredgraphvaluesX[i], this.graphLocY-this.exploredgraphvaluesY[i]-2, this.graphLocX+this.exploredgraphvaluesX[i], this.graphLocY-this.exploredgraphvaluesY[i]+2);
		  line(this.graphLocX+this.exploredgraphvaluesX[i]-2, this.graphLocY-this.exploredgraphvaluesY[i], this.graphLocX+this.exploredgraphvaluesX[i]+2, this.graphLocY-this.exploredgraphvaluesY[i]);
		}
    if (this.exploredgraphvaluesX.length>200) {
      this.exploredgraphvaluesX.length= 0; //clears the array
      this.exploredgraphvaluesY.length= 0; //clears the array
    }
    }

}
// accumulation engines

function predictMotionAccumulate(){
	nextposition = rk4(currentposition, currentspeed, calculatedacceleration)[0];
	nextspeed = rk4(currentposition, currentspeed, calculatedacceleration)[1];
	currentposition=nextposition;
	currentspeed=nextspeed;
}

function rk4(currentposition, currentspeed, calculatedacceleration) {
  // Returns (nextposition, nextspeed) array after time dt has passed.
  //        x: initial position
  //        v: initial velocity
  //        calculatedacceleration: acceleration function calculatedacceleration(x,v), which is where you specify the force
  //        dt: timestep
  var x = currentposition;
  var v = currentspeed;
  var x1 = currentposition;
  var v1 = currentspeed;
  var a1 = calculatedacceleration(x1, v1);

  var x2 = x + 0.5*v1*dt;
  var v2 = v + 0.5*a1*dt;
  var a2 = calculatedacceleration(x2, v2);

  var x3 = x + 0.5*v2*dt;
  var v3 = v + 0.5*a2*dt;
  var a3 = calculatedacceleration(x3, v3);

  var x4 = x + v3*dt;
  var v4 = v + a3*dt;
  var a4 = calculatedacceleration(x4, v4);

  var xf = x + (dt/6)*(v1 + 2*v2 + 2*v3 + v4);
  var vf = v + (dt/6)*(a1 + 2*a2 + 2*a3 + a4);

  return [xf, vf];
}




// word annotations

//named text blocks, styled by css

function justWords(textSet,classSet,xloc,yloc,widthSet){
    var blockName = 'justWords'+random(10000); // don't care what it is, but should be unique
    blockName = createDiv(textSet);
    blockName.class(classSet);
    blockName.position(xloc,yloc);
    blockName.size(widthSet);
    blockName.html(pmlparse(blockName.html()));
 }


//words on page

function words(thisLabel, xloc, yloc){
    fill(clabeltext);
    noStroke();
    textFont(romanFont,16);
    text(thisLabel,xloc,yloc);
}

function wordsframe(thisLabel, xloc, yloc,twidth,theight){
    fill(clabeltext);
    noStroke();
    textFont(romanFont,16);
    text(thisLabel,xloc,yloc,twidth,theight);
}

function subHead(thisLabel, xloc, yloc){
    fill(clabeltext);
    noStroke();
    textFont(titleFont,18);
    text(thisLabel,xloc,yloc);
}

function codeWords(thisLabel, xloc, yloc){
    fill(cideaGrey);
    noStroke();
    textFont(codeFont,20);
    text(thisLabel,xloc,yloc);
}

function wordSuper(thisLabel,thisSuperScript, xloc, yloc){
    fill(clabeltext);
    textFont(romanFont,12);
    text(thisLabel,xloc,yloc);
    var labelwidth = textWidth(thisLabel);
    textFont(romanFont,10);
    text(thisSuperScript,xloc+labelwidth,yloc-6);
}

function wordSub(thisLabel,thisSuperScript, xloc, yloc){
    fill(clabeltext);
    textFont(romanFont,16);
    text(thisLabel,xloc,yloc);
    var pqwidth = textWidth(thisLabel);
    textFont(romanFont,14);
    text(thisSuperScript,xloc+pqwidth+2,yloc+6);
}

function symbolSub(thisSymbol,thisSubScript, xloc, yloc){
    fill(clabeltext);
    textFont(italicFont,16);
    text(thisSymbol,xloc,yloc);
    var pqwidth = textWidth(thisSymbol);
    textFont(romanFont,14);
    text(thisSubScript,xloc+pqwidth+2,yloc+6);
}

function symbolUnit(thisSymbol,thisUnit, xloc, yloc){
    fill(clabeltext);
    textFont(italicFont,16);
    text(thisSymbol,xloc,yloc);
    textFont(romanFont,16);
    var symbolWidth = textWidth(thisSymbol);
    text(" / "+thisUnit,xloc+symbolWidth,yloc);
}

function symbolSuper(thisSymbol,thisSuperScript, xloc, yloc){
    fill(clabeltext);
    textFont(italicFont,16);
    text(thisSymbol,xloc,yloc);
    var pqwidth = textWidth(thisSymbol);
    textFont(romanFont,10);
    text(thisSuperScript,xloc+pqwidth+4,yloc-6);
}

function wordFraction(topFraction, bottomFraction, xloc, yloc){
    fill(clabeltext);
    textFont(romanFont,16);
    var maxFraction = max(textWidth(topFraction), textWidth(bottomFraction));
    push();
    translate(xloc, yloc);
    stroke(clabeltext);
    strokeWeight(2);
    line(0,0,maxFraction,0);
    noStroke();
    text(topFraction,(maxFraction-textWidth(topFraction))/2,-8);
    text(bottomFraction,(maxFraction-textWidth(bottomFraction))/2,14);
    pop();
}

function fractionABCWrite(theAnswer, topFraction, bottomFraction, xloc, yloc){
    fill(clabeltext);
    textFont(romanFont,16);
    var maxFraction = max(textWidth(topFraction), textWidth(bottomFraction));
    push();
    translate(xloc+20, yloc);
    stroke(clabeltext);
    strokeWeight(2);
    line(0,0,maxFraction,0);
    noStroke();
    text(topFraction,(maxFraction-textWidth(topFraction))/2,-8);
    text(bottomFraction,(maxFraction-textWidth(bottomFraction))/2,14);
    text(theAnswer+" = ",-textWidth(theAnswer+" = "),4);
    pop();

}

function fractionCBAWrite(theAnswer, topFraction, bottomFraction, xloc, yloc){
    fill(clabeltext);
    textFont(romanFont,16);
    var maxFraction = max(textWidth(topFraction), textWidth(bottomFraction));
    push();
    translate(xloc+20, yloc);
    stroke(clabeltext);
    strokeWeight(2);
    line(0,0,maxFraction,0);
    noStroke();
    text(topFraction,(maxFraction-textWidth(topFraction))/2,-8);
    text(bottomFraction,(maxFraction-textWidth(bottomFraction))/2,14);
    text(" = "+theAnswer,maxFraction+2,4);
    pop();

}

function titleBold(titleText){
  fill(cInvertedTextBG);
  noStroke();
  rectMode(CORNER);
  rect(20, 10, width-40, 45, 10, 10, 10, 10);
    fill(cInvertedText);
    textFont(titleFont,18);
    text(titleText,35,35);
}

function meter(value,precision,unit,xloc, yloc){
  var meterDisplay=str(value.toPrecision(precision))+" "+unit;
  push();
  translate(xloc, yloc);
  fill(cInvertedTextBG);
  noStroke();
  rect(0,0,meterDisplay.length*8+17,30,10);
  fill(cInvertedText);
  textFont(romanFont,16);
  text(meterDisplay,10, 20);
  pop();
}

function meterinteger(value, unit, xloc, yloc){
  var meterDisplay=str(value.toFixed(0))+" "+unit;
  push();
  translate(xloc, yloc);
  fill(cInvertedTextBG);
  noStroke();
  rect(0,0,meterDisplay.length*8+17,30,10);
  fill(cInvertedText);
  textFont(romanFont,16);
  text(meterDisplay,10, 20);
  pop();
}

function leadLine(thecomment, xloc, yloc){
    var yoffset=yloc-30;
    var xoffset=xloc+25;
    var leadlinelength =40;
    strokeWeight(1);
    stroke(cleadline);
    line(xloc,yloc,xoffset,yoffset);
    line(xoffset,yoffset,xoffset+leadlinelength,yoffset);
    words(thecomment,xoffset+45,yoffset+5);
}

function leadLinedeep(thecomment, xloc, yloc){
    var yoffset=yloc-90;
    var xoffset=xloc+75;
    var leadlinelength =40;
    strokeWeight(1);
    stroke(cleadline);
    line(xloc,yloc,xoffset,yoffset);
    line(xoffset,yoffset,xoffset+leadlinelength,yoffset);
    words(thecomment,xoffset+45,yoffset+5);
}

function leadLineshort(thecomment, xloc, yloc){
    var yoffset=yloc-15;
    var xoffset=xloc+12;
    var leadlinelength =40;
    strokeWeight(1);
    stroke(cleadline);
    line(xloc,yloc,xoffset,yoffset);
    line(xoffset,yoffset,xoffset+leadlinelength,yoffset);
    words(thecomment,xoffset+45,yoffset+5);
}

function leadLinenegative(thecomment, xloc, yloc){
    var yoffset=yloc+30;
    var xoffset=xloc+25;
    var leadlinelength =40;
    strokeWeight(1);
    stroke(cleadline);
    line(xloc,yloc,xoffset,yoffset);
    line(xoffset,yoffset,xoffset+leadlinelength,yoffset);
    words(thecomment,xoffset+45,yoffset+5);
}

function leadLinenegativedeep(thecomment, xloc, yloc){
    var yoffset=yloc+60;
    var xoffset=xloc+50;
    var leadlinelength =40;
    strokeWeight(1);
    stroke(cleadline);
    line(xloc,yloc,xoffset,yoffset);
    line(xoffset,yoffset,xoffset+leadlinelength,yoffset);
    words(thecomment,xoffset+45,yoffset+5);
}

function speechbubble(speakThis, xloc, yloc, tailLoc){
    var flexxoffset;
    var flexlinelengths= new Array(1);
    var flexbubblerows =0;
    var flexbubblewidth =0;
    var flexspeakMultiRows = new Array(1);
    textFont(chatterFont,18);
    var s= match(speakThis,"\n");
    if (s != null) {
        flexspeakMultiRows = split(speakThis, '\n');
        flexbubblerows = flexspeakMultiRows.length;
        for (var i=0;i<flexbubblerows; i= i+1){flexlinelengths[i] = textWidth(flexspeakMultiRows[i]);}
        flexbubblewidth = 1.05*max(flexlinelengths);
    } else {
        flexbubblewidth = 1.05*textWidth(speakThis);
        flexbubblerows =1;
        flexspeakMultiRows[0]=speakThis;
    }

    flexbubblewidth=constrain(flexbubblewidth, 80, 600);

    var flexrowheight=20;
    var flexbubbleheight = flexbubblerows * flexrowheight*1.1;
    var flexbubbleoffset = 10;
    var flextailoffset = 10;
    var top=0;

    switch (tailLoc){
        case "TR":
        flexxoffset = 0.6;
        top=0;
        break;
        case "TL":
        flexxoffset = 0.2;
        top=0;
        break;
        case "BR":
        flexxoffset = 0.6;
        top=1;
        break;
        case "BL":
        flexxoffset = 0.2;
        top=1;
        break;
        default:
        flexxoffset = 0.5;
    }

    noStroke();
    fill(cspeechBubbleBG);
    rect(xloc, yloc, flexbubblewidth, flexbubbleheight, flexbubbleoffset, flexbubbleoffset, flexbubbleoffset, flexbubbleoffset);

    beginShape();
    noStroke();
    vertex(xloc+flexbubblewidth*flexxoffset,    yloc+top*flexbubbleheight);
    if (top==0) {vertex(xloc+flexbubblewidth*flexxoffset+flextailoffset,    yloc+top*flexbubbleheight-2*flextailoffset);}
    if (top==1) {vertex(xloc+flexbubblewidth*flexxoffset+flextailoffset,    yloc+top*flexbubbleheight+2*flextailoffset);}
    vertex(xloc+flexbubblewidth*flexxoffset+2*flextailoffset,   yloc+top*flexbubbleheight);
    vertex(xloc+flexbubblewidth*flexxoffset,    yloc+top*flexbubbleheight);
    endShape();

    fill(clabeltext);
    for (var i=0;i<flexbubblerows; i= i+1){text(flexspeakMultiRows[i],xloc+flexbubbleoffset/2,yloc+5+.75*flexrowheight+i*flexrowheight);}
}

function talkbubbleBL(sayThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =10;
	fill(ctalkbubbleBG);
	noStroke();
	triangle(xloc, yloc, xloc-tailparameter, yloc+2*tailparameter, xloc+tailparameter, yloc+2*tailparameter);
	rect(xloc-bubblewidth+4*tailparameter, yloc+2*tailparameter, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(sayThis, xloc-bubblewidth+4*tailparameter+saymargin, yloc+2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight-2*saymargin);
}

function talkbubbleBR(sayThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =10;
	fill(ctalkbubbleBG);
	noStroke();
	triangle(xloc, yloc, xloc-tailparameter, yloc+2*tailparameter, xloc+tailparameter, yloc+2*tailparameter);
	rect(xloc-4*tailparameter, yloc+2*tailparameter, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(sayThis, xloc-4*tailparameter+saymargin, yloc+2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight-2*saymargin);
}

function talkbubbleTR(sayThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =10;
	fill(ctalkbubbleBG);
	noStroke();
	triangle(xloc, yloc, xloc-tailparameter, yloc-2*tailparameter, xloc+tailparameter, yloc-2*tailparameter);
	rect(xloc-4*tailparameter, yloc-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(sayThis, xloc-4*tailparameter+saymargin, yloc-bubbleheight-2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight);
}

function talkbubbleTL(sayThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =10;
	fill(ctalkbubbleBG);
	noStroke();
	triangle(xloc, yloc, xloc-tailparameter, yloc-2*tailparameter, xloc+tailparameter, yloc-2*tailparameter);
	rect(xloc-bubblewidth+4*tailparameter, yloc-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(sayThis, xloc-bubblewidth+4*tailparameter+saymargin, yloc-bubbleheight-2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight);
}

function thoughtbubbleTL(thinkThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =15;
	fill(ctalkbubbleBG);
	noStroke();
	ellipseMode(CENTER);
	ellipse(xloc,yloc,12,9);
	ellipse(xloc-6,yloc-14,16,12);
	ellipse(xloc-12,yloc-34,32,24);
	rect(xloc-bubblewidth+4*tailparameter, yloc-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(thinkThis, xloc-bubblewidth+4*tailparameter+saymargin, yloc-bubbleheight-2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight);
}

function thoughtbubbleTR(thinkThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =15;
	fill(ctalkbubbleBG);
	noStroke();
	ellipseMode(CENTER);
	ellipse(xloc,yloc,12,9);
	ellipse(xloc+6,yloc-14,16,12);
	ellipse(xloc+12,yloc-34,32,24);	rect(xloc-4*tailparameter, yloc-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(thinkThis, xloc-4*tailparameter+saymargin, yloc-bubbleheight-2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight);
}



function DIPFheadL(speakThis, xloc, yloc,bubblewidth, bubbleheight){
    push();
    translate(xloc+10,yloc-40);
    fill(cdrawChildren);
    noStroke();
    beginShape();
    vertex(36.4, 57.7);
    bezierVertex(34.64, 57.9, 32.83, 58, 31, 58);
    bezierVertex(23.7, 58, 16.85, 56.4, 10.92, 53.58);
    bezierVertex(11.29, 53.24, 11.56, 52.97, 11.7, 52.83);
    bezierVertex(12.46, 52.04, 14.21, 49.47, 14.21, 49.47);
    bezierVertex(14.21, 49.47, 15.8, 46.68, 14.53, 44.53);
    bezierVertex(13.23, 42.4, 6.94, 41.86, 5.83, 41.74);
    bezierVertex(4.73, 41.62, 3.8, 40.44, 3.55, 39);
    bezierVertex(3.3, 37.53, 3.16, 36.6, 3.16, 36.6);
    bezierVertex(3.16, 36.6, 1.78, 36.06, 1.81, 35.4);
    bezierVertex(1.83, 34.76, 2.37, 34.1, 2.37, 34.1);
    bezierVertex(2.37, 34.1, 0.26, 32.54, 0.77, 31.53);
    bezierVertex(1.31, 30.51, 2.15, 28.94, 2.15, 28.94);
    bezierVertex(2.15, 28.94, 0.73, 28.01, 0.7, 27.4);
    bezierVertex(0.68, 26.79, 0.85, 25.98, 2.1, 25.05);
    bezierVertex(3.33, 24.12, 4.14, 21.01, 4.14, 21.01);
    bezierVertex(4.14, 21.01, 2.27, 17.78, 2.86, 14.84);
    bezierVertex(3.48, 11.9, 5, 9.26, 5, 9.26);
    vertex(4.29, 9.7);
    bezierVertex(4.29, 9.7, 3.67, 8.92, 5.37, 7.38);
    bezierVertex(7.09, 5.86, 4.36, 7.62, 4.36, 7.62);
    bezierVertex(4.36, 7.62, 7.31, 3.83, 11.83, 1.99);
    bezierVertex(16.34, 0.18, 23.64, -0.65, 29.83, 0.6);
    bezierVertex(36.04, 1.89, 44.54, 8.01, 46.82, 19.1);
    bezierVertex(49.13, 30.16, 50.31, 33.15, 47.75, 38.31);
    vertex(45.22, 43.48);
    vertex(46.08, 40.17);
    bezierVertex(46.08, 40.17, 44.95, 43.18, 44.61, 43.62);
    vertex(44.24, 44.02);
    vertex(44.36, 43.04);
    bezierVertex(44.36, 43.04, 44.49, 43.65, 43.23, 44.43);
    vertex(41.96, 45.19);
    vertex(42.4, 43.97);
    bezierVertex(42.4, 43.97, 42.38, 44.8, 40.9, 45.9);
    vertex(39.45, 47);
    vertex(40.46, 45.44);
    bezierVertex(40.46, 45.44, 38.81, 47.08, 37.49, 47.64);
    bezierVertex(36.14, 48.2, 35.03, 48.42, 35.03, 48.42);
    vertex(35.67, 47.37);
    vertex(34.22, 48.89);
    bezierVertex(34.22, 48.89, 35.5, 52.82, 36.4, 57.7);
    endShape();
    pop();
	talkbubbleBL(speakThis,xloc,yloc, bubblewidth,bubbleheight);
}

function DIPMheadL(speakThis, xloc, yloc,bubblewidth,bubbleheight){
    push();
    translate(xloc,yloc-40);
    fill(cdrawChildren);
    noStroke();
    beginShape();
    vertex(23.1, 55.19);
    bezierVertex(23.57, 52.57, 23.84, 50.07, 23.84, 50.07);
    vertex(23.74, 48.63);
    vertex(25.22, 47.65);
    vertex(24.19, 47.16);
    bezierVertex(24.19, 47.16, 20.36, 47.87, 18.86, 48.51);
    bezierVertex(17.33, 49.17, 16.06, 49.93, 15.15, 49.56);
    bezierVertex(14.24, 49.17, 12.64, 47.16, 12.64, 47.16);
    bezierVertex(12.64, 47.16, 11.91, 46.79, 11.39, 46.5);
    bezierVertex(10.88, 46.2, 10.38, 45.86, 10.7, 44.83);
    bezierVertex(11, 43.83, 11.05, 43.24, 11.05, 43.24);
    bezierVertex(11.05, 43.24, 9.67, 42.85, 9.3, 42.34);
    bezierVertex(8.94, 41.8, 8.69, 41.7, 8.62, 40.8);
    bezierVertex(8.57, 39.89, 8.2, 39.03, 8.2, 39.03);
    bezierVertex(8.2, 39.03, 6.14, 38.59, 5.72, 37.88);
    bezierVertex(5.3, 37.17, 6.14, 36.19, 6.5, 34.8);
    bezierVertex(6.87, 33.4, 5.89, 31.18, 5.65, 30.66);
    bezierVertex(5.4, 30.15, 3.26, 26.89, 3.09, 26.11);
    bezierVertex(2.89, 25.33, 1.69, 25.69, 1.4, 25.69);
    bezierVertex(1.1, 25.67, 1.4, 25.03, 1.4, 24.1);
    bezierVertex(1.42, 23.2, 0.83, 24.05, 0.68, 23.78);
    bezierVertex(0.54, 23.49, -0.08, 23.64, 0.61, 21.09);
    bezierVertex(1.32, 18.55, -0, 22.51, 0.02, 22.61);
    bezierVertex(0.02, 22.73, -0.25, 20.6, 0.64, 18.3);
    bezierVertex(1.52, 16, 0.56, 16.54, 0.56, 16.54);
    bezierVertex(0.56, 16.54, -0.42, 15.02, 1.91, 11.96);
    bezierVertex(4.25, 8.9, 9.45, 3.62, 16.48, 1.02);
    bezierVertex(23.5, -1.57, 30.45, 1.49, 34.06, 2.37);
    bezierVertex(37.64, 3.22, 37.32, 3.96, 38.75, 4.77);
    bezierVertex(40.17, 5.57, 44, 12.79, 44.15, 14.43);
    bezierVertex(44.32, 16.1, 44.89, 17.89, 45.21, 19.43);
    bezierVertex(45.53, 20.99, 46.02, 25.23, 45.9, 26.01);
    bezierVertex(45.8, 26.82, 44.13, 28.66, 44.1, 28.8);
    bezierVertex(44.05, 28.92, 44.25, 27.26, 44.25, 27.26);
    bezierVertex(44.25, 27.26, 42.88, 29.76, 42.48, 30.61);
    bezierVertex(42.06, 31.47, 41.77, 30.15, 41.77, 30.15);
    bezierVertex(41.77, 30.15, 41.3, 32.45, 40.32, 34.24);
    bezierVertex(39.31, 36.05, 39.41, 34.63, 39.41, 34.63);
    bezierVertex(39.41, 34.63, 39.34, 35.9, 39.44, 36.22);
    bezierVertex(39.56, 36.54, 39.98, 37.2, 39.98, 37.2);
    vertex(38.58, 36.81);
    bezierVertex(38.58, 36.81, 37.84, 37.71, 39.51, 38.45);
    bezierVertex(41.18, 39.16, 44.64, 41.75, 45.45, 43.81);
    bezierVertex(46.26, 45.86, 49.41, 48.02, 50.02, 49.26);
    bezierVertex(50.23, 49.67, 50.7, 50.71, 51.3, 51.94);
    bezierVertex(45.55, 54.53, 38.98, 56, 32, 56);
    bezierVertex(28.94, 56, 25.97, 55.72, 23.1, 55.19);
    endShape();
    pop();

	talkbubbleBL(speakThis,xloc,yloc, bubblewidth,bubbleheight);
}

function DIPFheadR(speakThis, xloc, yloc,bubblewidth,bubbleheight){
    push();
    translate(xloc-60,yloc-60);
    fill(cdrawChildren);
    noStroke();
    beginShape();
    vertex(49.74, 64.98);
    bezierVertex(49.33, 64.64, 48.87, 64.39, 48.35, 64.2);
    bezierVertex(46.21, 63.45, 41.3, 61.41, 40.32, 60.8);
    bezierVertex(39.36, 60.17, 38.38, 59.68, 38.38, 59.68);
    bezierVertex(38.38, 59.68, 42.48, 55.98, 43, 55.29);
    bezierVertex(43.49, 54.61, 44.94, 50.28, 44.74, 49.03);
    bezierVertex(44.52, 47.78, 45.58, 47.22, 45.65, 48.34);
    bezierVertex(45.7, 49.44, 44.94, 50.42, 44.94, 51.26);
    bezierVertex(44.94, 52.09, 45.13, 53.07, 45.13, 53.07);
    bezierVertex(45.13, 53.07, 45.65, 51.06, 46.07, 50.15);
    bezierVertex(46.48, 49.25, 47.17, 46.31, 47.03, 44.43);
    bezierVertex(46.9, 42.57, 49.06, 36.99, 49.06, 34.98);
    bezierVertex(49.06, 32.95, 46.95, 19.95, 45.85, 17.87);
    bezierVertex(44.74, 15.77, 42.85, 14.1, 40.62, 13.07);
    bezierVertex(38.38, 12.02, 31.11, 11.19, 30.01, 11.46);
    vertex(28.88, 11.73);
    bezierVertex(28.88, 11.73, 28.75, 10.7, 28.31, 10.48);
    vertex(27.92, 10.28);
    bezierVertex(27.92, 10.28, 25.95, 7.84, 27.13, 6.93);
    bezierVertex(28.31, 6.02, 29.1, 7.76, 28.88, 8.47);
    vertex(28.68, 9.16);
    bezierVertex(28.68, 9.16, 29.64, 5.75, 28.46, 5);
    bezierVertex(27.28, 4.21, 30.77, 4.85, 30.77, 6.39);
    vertex(30.77, 7.91);
    bezierVertex(30.77, 7.91, 31.68, 4.43, 30.77, 3.11);
    bezierVertex(29.86, 1.79, 27.85, 1.45, 27.85, 1.45);
    vertex(31.6, 1.08);
    bezierVertex(31.6, 1.08, 29.35, 0.33, 27.7, 0.08);
    bezierVertex(27.14, 0.11, 26.58, 0.15, 26.02, 0.2);
    bezierVertex(25.09, 0.77, 23.57, 1.79, 23.57, 1.79);
    bezierVertex(23.57, 1.79, 23.08, 1.23, 21.9, 0.81);
    bezierVertex(21.87, 0.8, 21.84, 0.79, 21.81, 0.78);
    bezierVertex(21.31, 0.87, 20.81, 0.97, 20.32, 1.07);
    bezierVertex(20.48, 1.65, 20.7, 2.41, 20.92, 3.04);
    bezierVertex(21.34, 4.21, 21.41, 6.1, 21.41, 6.1);
    bezierVertex(21.41, 6.1, 20.09, 4.16, 18.56, 3.33);
    bezierVertex(17.76, 2.89, 16.39, 2.62, 15.24, 2.47);
    bezierVertex(14.96, 2.56, 14.69, 2.66, 14.41, 2.76);
    bezierVertex(15.92, 3.43, 18.49, 4.6, 18.83, 5);
    bezierVertex(19.32, 5.53, 14.29, 5.95, 13.65, 7.49);
    bezierVertex(13.04, 9.03, 12.47, 10.77, 12.47, 10.77);
    bezierVertex(12.47, 10.77, 14.51, 7.98, 14.85, 7.76);
    bezierVertex(15.2, 7.57, 13.72, 10.21, 13.72, 11.19);
    bezierVertex(13.72, 12.14, 13.95, 12.71, 13.95, 12.71);
    bezierVertex(13.95, 12.71, 14.29, 9.99, 14.93, 9.52);
    bezierVertex(15.54, 9.03, 15.84, 8.81, 15.84, 8.81);
    bezierVertex(15.84, 8.81, 15.69, 10.21, 15.76, 10.89);
    vertex(15.84, 11.6);
    bezierVertex(15.84, 11.6, 16.03, 9.84, 16.52, 9.45);
    bezierVertex(17.02, 9.03, 21.07, 10.06, 21.9, 10.55);
    bezierVertex(22.74, 11.04, 23.01, 11.53, 23.01, 11.53);
    bezierVertex(23.01, 11.53, 21.98, 11.68, 23.15, 12.36);
    vertex(24.33, 13.07);
    bezierVertex(24.33, 13.07, 22.81, 13.61, 22.1, 14.1);
    bezierVertex(21.41, 14.59, 16.75, 21.27, 16.11, 24.53);
    bezierVertex(15.49, 27.81, 15.49, 32.04, 15.84, 33.66);
    bezierVertex(16.18, 35.25, 14.09, 34.56, 13.95, 35.66);
    bezierVertex(13.8, 36.79, 13.38, 39.36, 13.8, 41.03);
    bezierVertex(14.22, 42.71, 15.27, 44.72, 15.69, 44.99);
    bezierVertex(16.11, 45.28, 17.51, 45.63, 17.51, 45.63);
    bezierVertex(17.51, 45.63, 18.19, 51.67, 18.12, 52.09);
    bezierVertex(18.07, 52.53, 14.93, 52.92, 13.38, 53.36);
    bezierVertex(11.86, 53.78, 9.48, 54.32, 7.09, 55.03);
    bezierVertex(5.38, 55.53, 2.6, 56.8, 0.77, 58.25);
    bezierVertex(8.24, 64.87, 18.8, 69, 30.51, 69);
    bezierVertex(37.46, 69, 44, 67.54, 49.74, 64.98);
    endShape();
    pop();

	talkbubbleBR(speakThis,xloc,yloc, bubblewidth,bubbleheight);
}

function saydroid(personid,xloc,yloc,speakThis,bubblewidth,bubbleheight,bubbleloc){
if (bubbleloc=="L"){
talkbubbleTL(speakThis,xloc,yloc, bubblewidth,bubbleheight);
const flipdroid =true;
}
if (bubbleloc=="R"){
talkbubbleTR(speakThis,xloc,yloc, bubblewidth,bubbleheight);
const flipdroid =false;
}


	stroke(cdrawGuides);
	strokeWeight(1);
	noFill();
	discoursedroid(personid,xloc,yloc,bubbleloc=="R",false,cdrawGuides,1);

}

function thinkdroid(personid,xloc,yloc,thinkThis,bubblewidth,bubbleheight,bubbleloc){
if (bubbleloc=="L"){
thoughtbubbleTL(thinkThis,xloc,yloc, bubblewidth,bubbleheight);
const flipdroid =true;
}
if (bubbleloc=="R"){
thoughtbubbleTR(thinkThis,xloc,yloc, bubblewidth,bubbleheight);
const flipdroid =false;
}


	stroke(cdrawGuides);
	strokeWeight(1);
	noFill();
	discoursedroid(personid,xloc,yloc,bubbleloc=="R",false,cdrawGuides,1);

}

// menton bubbles are not to be called directly

function mentonbubbleTL(thinkThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =15;
	fill(ctalkbubbleBG);
	noStroke();
	ellipseMode(CENTER);
	ellipse(xloc,yloc,12,9);
	ellipse(xloc-6,yloc-14,16,12);
	ellipse(xloc-12,yloc-34,32,24);
	rect(xloc-bubblewidth+4*tailparameter, yloc-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	stroke(ctalkbubbleBG);
	mentonrep.scribbleRoundedRect(xloc+bubblewidth/2-bubblewidth+4*tailparameter, yloc+bubbleheight/2-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(thinkThis, xloc-bubblewidth+4*tailparameter+saymargin, yloc-bubbleheight-2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight);
	translate(xloc-bubblewidth+4*tailparameter, yloc-bubbleheight-2*tailparameter);
}

function mentonbubbleTR(thinkThis,xloc,yloc, bubblewidth,bubbleheight){
const saymargin=5;
const tailparameter =15;
	fill(ctalkbubbleBG);
	noStroke();
	ellipseMode(CENTER);
	ellipse(xloc,yloc,12,9);
	ellipse(xloc+6,yloc-14,16,12);
	ellipse(xloc+12,yloc-34,32,24);
	rect(xloc-4*tailparameter, yloc-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	stroke(ctalkbubbleBG);
	mentonrep.scribbleRoundedRect(xloc+bubblewidth/2-4*tailparameter, yloc+bubbleheight/2-2*tailparameter-bubbleheight, bubblewidth, bubbleheight,5);
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(thinkThis, xloc-4*tailparameter+saymargin, yloc-bubbleheight-2*tailparameter+saymargin, bubblewidth-2*saymargin, bubbleheight);
	translate(xloc-4*tailparameter, yloc-bubbleheight-2*tailparameter);
}


// menton representations

function mentondroid(droidid,droidpose,xloc,yloc,thinkThis,bubblewidth,bubbleheight,bubbleloc){
	stroke(droidid);
// 	strokeWeight(5);
	noFill();

	discoursedroid(droidpose,xloc,yloc,bubbleloc=="R",false,droidid,2);

	if (bubbleloc=="L"){
	mentonbubbleTL(thinkThis,xloc,yloc, bubblewidth,bubbleheight);
	const flipdroid =true;
	}
	if (bubbleloc=="R"){
	mentonbubbleTR(thinkThis,xloc,yloc, bubblewidth,bubbleheight);
	const flipdroid =false;
	}

}

function mentonxtra(parentwidth, parentheight,mentontext,bubblewidth,bubbleheight,transitiontype){
	const saymargin=5;
	fill(ctalkbubbleBG);
	noStroke();
	const xtraoffset=30;
	rect(parentwidth+xtraoffset, -xtraoffset, bubblewidth, bubbleheight,5);
	stroke(ctalkbubbleBG);
	mentonrep.scribbleRoundedRect(parentwidth+xtraoffset+bubblewidth/2, -xtraoffset+bubbleheight/2, bubblewidth, bubbleheight,5);
	if(transitiontype=="evolve"){
		mentonTransitionEvolve(parentwidth+xtraoffset/2,+xtraoffset,0);
	}
	if(transitiontype=="redescribe"){
		mentonTransitionRedescribe(parentwidth+xtraoffset/2,+xtraoffset,0);
	}
	if(transitiontype=="intervene"){
		mentonTransitionIntervene(parentwidth+xtraoffset/2,+xtraoffset,0);
	}
	fill(clabeltext);
	textFont(chatterFont);
	noStroke();
	textSize(16);
	text(mentontext, parentwidth+xtraoffset+saymargin, -xtraoffset+saymargin, bubblewidth-2*saymargin, bubbleheight);
	translate(parentwidth+xtraoffset, -xtraoffset);
}

function mentonarrow(magnitude,rotation,mcolour,xloc,yloc,thickness){
      var widthOfArrowHead = 12;
      var heightOfArrowHead = 16;
      var heightOfArrow = abs(magnitude) * pixelscaling;

		strokeWeight(thickness);
		stroke(mcolour);
      push();
      translate(xloc,yloc);
      rotate(radians(rotation));

      if(magnitude!=0){
        if(magnitude>0){
        mentonrep.scribbleLine(0,0,0,-heightOfArrow);
        mentonrep.scribbleLine(0,-heightOfArrow,-widthOfArrowHead,-heightOfArrow+heightOfArrowHead);
        mentonrep.scribbleLine(0,-heightOfArrow,widthOfArrowHead,-heightOfArrow+heightOfArrowHead);

         }else{
           mentonrep.scribbleLine(0,0,0,heightOfArrow);
        mentonrep.scribbleLine(0,heightOfArrow,-widthOfArrowHead,heightOfArrow-heightOfArrowHead);
        mentonrep.scribbleLine(0,heightOfArrow,widthOfArrowHead,heightOfArrow-heightOfArrowHead);
         }

      }
      pop();
}

function mentonline(magnitude,rotation,mcolour,xloc,yloc,thickness){

      var linelength = abs(magnitude) * pixelscaling;

		strokeWeight(thickness);
		stroke(mcolour);
      push();
      translate(xloc,yloc);
      rotate(radians(rotation));

      if(magnitude!=0){
        mentonrep.scribbleLine(0,0,0,-linelength);
         }
      pop();
}

function mentonbox(magnitude,rotation,mcolour,xloc,yloc, thickness,isfilled){

	var boxWidth = abs(magnitude)/2 * pixelscaling;
	strokeWeight(thickness);
	stroke(mcolour);
	push();
		translate(xloc,yloc);
		rotate(radians(rotation));
		if(magnitude!=0){
		mentonrep.scribbleRoundedRect( 0, 0, boxWidth, boxWidth, 3);
		}
		if (isfilled){
				mentonrep.scribbleFilling( [-boxWidth/2,-boxWidth/2,boxWidth/2,boxWidth/2], [boxWidth/2,-boxWidth/2,-boxWidth/2,boxWidth/2], 6, 30 );
				}
	pop();
}

function mentonrect(thewidth,theheight,rotation,mcolour,xloc,yloc, thickness,isfilled){

	var boxWidth = abs(thewidth)/2 * pixelscaling;
	var boxHeight = abs(theheight)/2 * pixelscaling;
	strokeWeight(thickness);
	stroke(mcolour);
	push();
		translate(xloc,yloc);
		rotate(radians(rotation));
		if(thewidth!=0 && theheight!=0){
		mentonrep.scribbleRoundedRect( 0, 0, boxWidth, boxHeight, 3);
		}
		if (isfilled){
				mentonrep.scribbleFilling( [-boxWidth/2,-boxWidth/2,boxWidth/2,boxWidth/2], [boxHeight/2,-boxHeight/2,-boxHeight/2,boxHeight/2], 6, 30 );
				}
	pop();
}

function mentonwords(thisLabel, xloc, yloc,thewidth){
    fill(clabeltext);
    noStroke();
    textFont(chatterFont,16);
    text(thisLabel,xloc,yloc,thewidth);
}

function mentonTransitionEvolve(xloc,yloc, rotation) {

 push();
     translate(xloc+24,yloc);
     rotate(PI/2+radians(rotation));
     scale(0.5);
fill(ctransitionBadgesBlueBG);
noStroke();
beginShape();
        vertex(44.44, 95.3);
        bezierVertex(27.72, 95.26, 18.68, 95.22, 17.3, 95.16);
        bezierVertex(15.92, 95.09, 14.88, 95.03, 14.18, 94.95);
        bezierVertex(13.48, 94.87, 12.9, 94.8, 12.44, 94.72);
        bezierVertex(11.98, 94.64, 11.57, 94.56, 11.19, 94.48);
        bezierVertex(10.81, 94.39, 10.47, 94.31, 10.17, 94.23);
        bezierVertex(9.88, 94.14, 9.6, 94.06, 9.34, 93.97);
        bezierVertex(9.08, 93.88, 8.76, 93.76, 8.37, 93.61);
        bezierVertex(7.99, 93.45, 7.5, 93.21, 6.92, 92.9);
        bezierVertex(6.34, 92.59, 5.97, 92.38, 5.8, 92.28);
        bezierVertex(5.63, 92.17, 5.46, 92.05, 5.28, 91.93);
        bezierVertex(5.1, 91.81, 4.9, 91.66, 4.69, 91.51);
        bezierVertex(4.48, 91.35, 4.26, 91.17, 4.02, 90.98);
        bezierVertex(3.77, 90.67, 3.55, 90.38, 3.37, 90.13);
        bezierVertex(3.19, 89.88, 3.03, 89.65, 2.9, 89.43);
        bezierVertex(2.75, 89.21, 2.51, 88.77, 2.17, 88.11);
        bezierVertex(1.83, 87.44, 1.6, 86.96, 1.48, 86.64);
        bezierVertex(1.36, 86.33, 1.24, 85.98, 1.13, 85.6);
        bezierVertex(1.01, 85.22, 0.9, 84.78, 0.79, 84.29);
        bezierVertex(0.68, 83.8, 0.58, 83.25, 0.49, 82.66);
        bezierVertex(0.4, 82.06, 0.32, 81.41, 0.26, 80.69);
        bezierVertex(0.2, 79.98, 0.14, 77.96, 0.08, 74.63);
        bezierVertex(0.02, 71.31, -0, 61.74, 0, 45.92);
        bezierVertex(0, 30.1, 0.02, 21.49, 0.05, 20.09);
        bezierVertex(0.07, 18.69, 0.11, 17.58, 0.15, 16.77);
        bezierVertex(0.2, 15.97, 0.24, 15.36, 0.27, 14.96);
        bezierVertex(0.31, 14.56, 0.35, 14.17, 0.4, 13.78);
        bezierVertex(0.44, 13.4, 0.49, 13.03, 0.55, 12.67);
        bezierVertex(0.61, 12.32, 0.67, 11.97, 0.73, 11.64);
        bezierVertex(0.79, 11.31, 0.86, 10.99, 0.94, 10.68);
        bezierVertex(1.01, 10.37, 1.09, 10.06, 1.17, 9.77);
        bezierVertex(1.25, 9.48, 1.34, 9.2, 1.42, 8.94);
        bezierVertex(1.51, 8.68, 1.72, 8.15, 2.08, 7.35);
        bezierVertex(2.43, 6.54, 2.72, 5.95, 2.95, 5.58);
        bezierVertex(3.18, 5.2, 3.41, 4.84, 3.66, 4.5);
        bezierVertex(3.91, 4.16, 4.17, 3.83, 4.45, 3.52);
        bezierVertex(4.67, 3.36, 4.9, 3.19, 5.15, 3.03);
        bezierVertex(5.4, 2.87, 5.66, 2.72, 5.93, 2.57);
        bezierVertex(6.2, 2.42, 6.49, 2.28, 6.78, 2.15);
        bezierVertex(7.07, 2.02, 7.57, 1.82, 8.29, 1.57);
        bezierVertex(9.01, 1.32, 9.53, 1.16, 9.87, 1.07);
        bezierVertex(10.21, 0.99, 10.64, 0.89, 11.17, 0.79);
        bezierVertex(11.69, 0.69, 12.26, 0.6, 12.89, 0.51);
        bezierVertex(13.51, 0.43, 14.15, 0.36, 14.81, 0.3);
        bezierVertex(15.48, 0.24, 16.2, 0.19, 17, 0.15);
        bezierVertex(17.8, 0.12, 20.91, 0.06, 26.34, 0);
        bezierVertex(56.35, 0, 72.42, 0.02, 74.54, 0.04);
        bezierVertex(76.66, 0.07, 78.3, 0.11, 79.46, 0.16);
        bezierVertex(80.62, 0.21, 81.43, 0.26, 81.9, 0.29);
        bezierVertex(82.37, 0.33, 82.8, 0.36, 83.18, 0.4);
        bezierVertex(83.56, 0.44, 83.97, 0.49, 84.41, 0.54);
        bezierVertex(84.85, 0.6, 85.25, 0.65, 85.62, 0.71);
        bezierVertex(85.98, 0.76, 86.38, 0.83, 86.81, 0.91);
        bezierVertex(87.24, 0.99, 87.78, 1.1, 88.43, 1.26);
        bezierVertex(89.07, 1.41, 89.72, 1.59, 90.38, 1.79);
        bezierVertex(91.04, 1.99, 91.6, 2.19, 92.08, 2.38);
        bezierVertex(92.56, 2.57, 93.04, 2.8, 93.54, 3.06);
        bezierVertex(94.04, 3.33, 94.55, 3.64, 95.08, 4);
        bezierVertex(95.37, 4.35, 95.65, 4.71, 95.92, 5.08);
        bezierVertex(96.18, 5.45, 96.4, 5.78, 96.58, 6.08);
        bezierVertex(96.76, 6.37, 96.93, 6.69, 97.11, 7.03);
        bezierVertex(97.28, 7.37, 97.57, 8.02, 97.97, 8.99);
        bezierVertex(98.37, 9.96, 98.64, 10.63, 98.76, 11);
        bezierVertex(98.88, 11.37, 99, 11.77, 99.13, 12.19);
        bezierVertex(99.25, 12.61, 99.37, 13.06, 99.48, 13.54);
        bezierVertex(99.59, 14.01, 99.7, 14.52, 99.8, 15.05);
        bezierVertex(99.91, 15.59, 99.99, 16.12, 100.07, 16.64);
        bezierVertex(100.14, 17.16, 100.21, 17.68, 100.26, 18.19);
        bezierVertex(100.31, 18.7, 100.37, 19.43, 100.43, 20.37);
        bezierVertex(100.49, 21.32, 100.53, 22.31, 100.56, 23.34);
        bezierVertex(100.59, 24.38, 100.61, 31.3, 100.62, 44.1);
        bezierVertex(100.63, 56.9, 100.64, 64.13, 100.63, 65.78);
        bezierVertex(100.62, 67.43, 100.61, 68.61, 100.6, 69.33);
        bezierVertex(100.58, 70.04, 100.56, 70.79, 100.54, 71.58);
        bezierVertex(100.51, 72.37, 100.48, 73.08, 100.44, 73.72);
        bezierVertex(100.4, 74.36, 100.36, 74.94, 100.31, 75.47);
        bezierVertex(100.26, 76, 100.2, 76.58, 100.11, 77.22);
        bezierVertex(100.02, 77.85, 99.94, 78.41, 99.85, 78.9);
        bezierVertex(99.76, 79.38, 99.67, 79.83, 99.57, 80.25);
        bezierVertex(99.48, 80.67, 99.38, 81.05, 99.28, 81.4);
        bezierVertex(99.18, 81.75, 99.07, 82.12, 98.95, 82.5);
        bezierVertex(98.83, 82.88, 98.7, 83.27, 98.55, 83.67);
        bezierVertex(98.4, 84.07, 98.14, 84.69, 97.77, 85.53);
        bezierVertex(97.39, 86.36, 97.04, 87.07, 96.72, 87.64);
        bezierVertex(96.4, 88.21, 96.12, 88.66, 95.89, 89.01);
        bezierVertex(95.66, 89.35, 95.33, 89.79, 94.9, 90.32);
        bezierVertex(94.56, 90.57, 94.27, 90.78, 94.01, 90.94);
        bezierVertex(93.76, 91.11, 93.41, 91.32, 92.97, 91.56);
        bezierVertex(92.53, 91.8, 92.11, 92.02, 91.72, 92.2);
        bezierVertex(91.32, 92.39, 90.87, 92.59, 90.35, 92.79);
        bezierVertex(89.84, 93, 89.34, 93.19, 88.85, 93.35);
        bezierVertex(88.36, 93.52, 87.87, 93.67, 87.39, 93.8);
        bezierVertex(86.91, 93.94, 86.44, 94.06, 85.98, 94.16);
        bezierVertex(85.51, 94.27, 85.06, 94.36, 84.62, 94.44);
        bezierVertex(84.18, 94.53, 83.76, 94.6, 83.37, 94.65);
        bezierVertex(82.98, 94.71, 82.52, 94.77, 82, 94.83);
        bezierVertex(81.47, 94.89, 80.98, 94.94, 80.53, 94.98);
        bezierVertex(80.08, 95.02, 79.29, 95.06, 78.18, 95.12);
        bezierVertex(77.06, 95.17, 75.59, 95.21, 73.78, 95.24);
        bezierVertex(71.96, 95.27, 58.41, 95.29, 33.14, 95.3);
endShape();
 fill(ctransitionBadgesWhite);

beginShape();
        vertex(51.77, 56.43);
        bezierVertex(51.64, 56.43, 51.47, 56.44, 51.28, 56.47);
        bezierVertex(51.09, 56.5, 50.89, 56.55, 50.68, 56.62);
        bezierVertex(50.48, 56.69, 50.28, 56.77, 50.08, 56.86);
        bezierVertex(49.88, 56.96, 49.57, 57.15, 49.14, 57.44);
        bezierVertex(48.7, 57.73, 48.34, 58, 48.06, 58.25);
        bezierVertex(47.78, 58.5, 47.51, 58.76, 47.25, 59.02);
        bezierVertex(46.99, 59.28, 46.74, 59.54, 46.51, 59.79);
        bezierVertex(46.28, 60.03, 45.72, 60.66, 44.83, 61.68);
        bezierVertex(43.94, 62.7, 43.28, 63.46, 42.85, 63.96);
        bezierVertex(42.42, 64.46, 42.1, 64.84, 41.88, 65.09);
        bezierVertex(41.66, 65.34, 41.46, 65.56, 41.28, 65.75);
        bezierVertex(41.11, 65.95, 40.76, 66.32, 40.24, 66.86);
        bezierVertex(39.72, 67.41, 39.36, 67.78, 39.15, 67.99);
        bezierVertex(38.95, 68.19, 38.62, 68.5, 38.17, 68.91);
        bezierVertex(37.72, 69.31, 37.26, 69.71, 36.78, 70.1);
        bezierVertex(36.31, 70.5, 35.87, 70.84, 35.48, 71.12);
        bezierVertex(35.08, 71.41, 34.79, 71.62, 34.58, 71.75);
        bezierVertex(34.38, 71.88, 34.04, 72.08, 33.58, 72.34);
        bezierVertex(33.11, 72.6, 32.77, 72.78, 32.58, 72.88);
        bezierVertex(32.38, 72.97, 32.04, 73.11, 31.58, 73.3);
        bezierVertex(31.11, 73.49, 30.49, 73.68, 29.71, 73.88);
        bezierVertex(28.94, 74.09, 28.35, 74.21, 27.96, 74.27);
        bezierVertex(27.57, 74.32, 26.98, 74.34, 26.2, 74.34);
        bezierVertex(25.42, 74.34, 24.85, 74.31, 24.49, 74.26);
        bezierVertex(24.14, 74.21, 23.72, 74.13, 23.24, 74.01);
        bezierVertex(22.76, 73.88, 22.38, 73.77, 22.1, 73.66);
        bezierVertex(21.82, 73.55, 21.59, 73.46, 21.44, 73.39);
        bezierVertex(21.28, 73.31, 21.09, 73.22, 20.89, 73.11);
        bezierVertex(20.69, 73, 20.46, 72.85, 20.19, 72.67);
        bezierVertex(19.93, 72.49, 19.6, 72.22, 19.2, 71.87);
        bezierVertex(18.81, 71.52, 18.5, 71.21, 18.27, 70.94);
        bezierVertex(18.05, 70.67, 17.81, 70.35, 17.57, 69.97);
        bezierVertex(17.33, 69.6, 17.09, 69.13, 16.84, 68.57);
        bezierVertex(16.59, 68, 16.42, 67.56, 16.33, 67.25);
        bezierVertex(16.24, 66.94, 16.16, 66.58, 16.08, 66.17);
        bezierVertex(16.01, 65.75, 15.96, 65.32, 15.93, 64.87);
        bezierVertex(15.9, 64.42, 15.89, 64.06, 15.9, 63.8);
        bezierVertex(15.91, 63.53, 15.93, 63.23, 15.97, 62.9);
        bezierVertex(16.01, 62.57, 16.07, 62.18, 16.16, 61.75);
        bezierVertex(16.24, 61.32, 16.35, 60.87, 16.48, 60.41);
        bezierVertex(16.61, 59.94, 16.75, 59.51, 16.89, 59.09);
        bezierVertex(17.04, 58.68, 17.21, 58.25, 17.4, 57.81);
        bezierVertex(17.59, 57.36, 17.77, 56.96, 17.94, 56.61);
        bezierVertex(18.11, 56.25, 18.48, 55.58, 19.03, 54.59);
        bezierVertex(19.58, 53.6, 19.92, 53.01, 20.03, 52.83);
        bezierVertex(20.14, 52.65, 20.43, 52.21, 20.89, 51.52);
        bezierVertex(21.35, 50.82, 21.66, 50.38, 21.8, 50.18);
        bezierVertex(21.94, 49.98, 22.21, 49.61, 22.61, 49.08);
        bezierVertex(23, 48.55, 23.3, 48.15, 23.5, 47.89);
        bezierVertex(23.7, 47.64, 23.9, 47.39, 24.08, 47.17);
        bezierVertex(24.26, 46.94, 24.51, 46.62, 24.84, 46.21);
        bezierVertex(25.18, 45.8, 25.63, 45.24, 26.2, 44.53);
        bezierVertex(26.77, 43.82, 27.24, 43.25, 27.59, 42.81);
        bezierVertex(27.94, 42.38, 28.25, 42, 28.51, 41.67);
        bezierVertex(28.77, 41.34, 29.1, 40.9, 29.51, 40.36);
        bezierVertex(29.92, 39.82, 30.27, 39.35, 30.55, 38.96);
        bezierVertex(30.83, 38.58, 31.06, 38.26, 31.24, 38.01);
        bezierVertex(31.42, 37.77, 31.74, 37.33, 32.19, 36.69);
        bezierVertex(32.64, 36.05, 33.18, 35.29, 33.81, 34.41);
        bezierVertex(34.43, 33.53, 34.88, 32.9, 35.17, 32.51);
        bezierVertex(35.45, 32.11, 35.81, 31.61, 36.26, 31.01);
        bezierVertex(36.7, 30.41, 37.39, 29.51, 38.33, 28.32);
        bezierVertex(39.28, 27.13, 40.1, 26.15, 40.82, 25.37);
        bezierVertex(41.53, 24.59, 42.19, 23.93, 42.8, 23.4);
        bezierVertex(43.41, 22.86, 43.95, 22.44, 44.41, 22.12);
        bezierVertex(44.87, 21.8, 45.24, 21.57, 45.5, 21.42);
        bezierVertex(45.77, 21.27, 46.05, 21.13, 46.34, 21);
        bezierVertex(46.62, 20.87, 46.84, 20.78, 46.99, 20.73);
        bezierVertex(47.13, 20.67, 47.29, 20.62, 47.47, 20.56);
        bezierVertex(47.65, 20.51, 48.06, 20.42, 48.7, 20.29);
        bezierVertex(49.34, 20.17, 50.13, 20.12, 51.08, 20.13);
        bezierVertex(52.03, 20.14, 52.69, 20.18, 53.08, 20.25);
        bezierVertex(53.47, 20.33, 53.86, 20.42, 54.25, 20.54);
        bezierVertex(54.64, 20.66, 55.09, 20.83, 55.6, 21.05);
        bezierVertex(56.11, 21.28, 56.48, 21.45, 56.71, 21.58);
        bezierVertex(56.94, 21.71, 57.18, 21.85, 57.43, 22.01);
        bezierVertex(57.69, 22.18, 57.93, 22.34, 58.17, 22.52);
        bezierVertex(58.41, 22.7, 58.82, 23.05, 59.4, 23.59);
        bezierVertex(59.99, 24.13, 60.37, 24.49, 60.54, 24.67);
        bezierVertex(60.71, 24.86, 60.94, 25.12, 61.22, 25.45);
        bezierVertex(61.5, 25.79, 61.98, 26.41, 62.66, 27.32);
        bezierVertex(63.33, 28.23, 64.03, 29.23, 64.75, 30.33);
        bezierVertex(65.47, 31.42, 66.04, 32.3, 66.47, 32.96);
        bezierVertex(66.9, 33.62, 67.19, 34.06, 67.35, 34.29);
        bezierVertex(67.5, 34.52, 67.81, 34.99, 68.3, 35.69);
        bezierVertex(68.79, 36.4, 69.13, 36.9, 69.34, 37.19);
        bezierVertex(69.55, 37.48, 69.92, 38.01, 70.47, 38.76);
        bezierVertex(71.02, 39.51, 71.47, 40.12, 71.83, 40.59);
        bezierVertex(72.18, 41.05, 72.67, 41.67, 73.28, 42.44);
        bezierVertex(73.9, 43.21, 74.5, 43.96, 75.08, 44.67);
        bezierVertex(75.67, 45.38, 76.34, 46.2, 77.09, 47.11);
        bezierVertex(77.85, 48.03, 78.37, 48.68, 78.67, 49.06);
        bezierVertex(78.97, 49.43, 79.32, 49.88, 79.72, 50.39);
        bezierVertex(80.12, 50.9, 80.66, 51.65, 81.33, 52.63);
        bezierVertex(82, 53.61, 82.48, 54.36, 82.77, 54.86);
        bezierVertex(83.05, 55.37, 83.3, 55.83, 83.5, 56.25);
        bezierVertex(83.7, 56.68, 83.88, 57.08, 84.03, 57.45);
        bezierVertex(84.18, 57.83, 84.33, 58.3, 84.49, 58.85);
        bezierVertex(84.65, 59.4, 84.77, 59.89, 84.85, 60.31);
        bezierVertex(84.92, 60.73, 84.97, 61.04, 85, 61.25);
        bezierVertex(85.02, 61.46, 85.04, 61.83, 85.05, 62.36);
        bezierVertex(85.07, 62.9, 85.04, 63.5, 84.97, 64.18);
        bezierVertex(84.9, 64.86, 84.79, 65.51, 84.63, 66.13);
        bezierVertex(84.48, 66.76, 84.33, 67.26, 84.18, 67.64);
        bezierVertex(84.03, 68.03, 83.72, 68.63, 83.24, 69.45);
        bezierVertex(82.76, 70.27, 82.36, 70.86, 82.05, 71.23);
        bezierVertex(81.74, 71.59, 81.44, 71.91, 81.16, 72.17);
        bezierVertex(80.88, 72.43, 80.57, 72.68, 80.23, 72.94);
        bezierVertex(79.88, 73.19, 79.53, 73.41, 79.17, 73.61);
        bezierVertex(78.81, 73.81, 78.41, 73.99, 77.96, 74.17);
        bezierVertex(77.51, 74.34, 77.13, 74.46, 76.81, 74.55);
        bezierVertex(76.49, 74.63, 76.18, 74.69, 75.9, 74.73);
        bezierVertex(75.61, 74.78, 75.25, 74.81, 74.82, 74.83);
        bezierVertex(74.38, 74.84, 73.98, 74.83, 73.6, 74.8);
        bezierVertex(73.23, 74.76, 72.93, 74.72, 72.7, 74.68);
        bezierVertex(72.46, 74.63, 72.19, 74.57, 71.88, 74.47);
        bezierVertex(71.57, 74.38, 71.32, 74.3, 71.12, 74.23);
        bezierVertex(70.93, 74.16, 70.76, 74.08, 70.6, 74.01);
        bezierVertex(70.45, 73.94, 70.28, 73.85, 70.08, 73.75);
        bezierVertex(69.88, 73.64, 69.6, 73.46, 69.23, 73.22);
        bezierVertex(68.86, 72.97, 68.42, 72.64, 67.92, 72.22);
        bezierVertex(67.42, 71.8, 66.91, 71.33, 66.38, 70.8);
        bezierVertex(65.86, 70.28, 65.41, 69.81, 65.04, 69.39);
        bezierVertex(64.67, 68.98, 64.27, 68.52, 63.83, 68);
        bezierVertex(63.39, 67.48, 62.92, 66.92, 62.42, 66.31);
        bezierVertex(61.91, 65.7, 61.43, 65.11, 60.96, 64.54);
        bezierVertex(60.49, 63.97, 59.97, 63.35, 59.4, 62.68);
        bezierVertex(58.83, 62.01, 58.35, 61.44, 57.94, 60.99);
        bezierVertex(57.54, 60.53, 57.22, 60.17, 56.99, 59.92);
        bezierVertex(56.75, 59.66, 56.51, 59.41, 56.25, 59.15);
        bezierVertex(56, 58.9, 55.74, 58.65, 55.47, 58.41);
        bezierVertex(55.21, 58.18, 55.01, 58, 54.88, 57.9);
        bezierVertex(54.75, 57.79, 54.58, 57.66, 54.38, 57.51);
        bezierVertex(54.17, 57.36, 54, 57.23, 53.86, 57.14);
        bezierVertex(53.72, 57.06, 53.46, 56.93, 53.08, 56.77);
        bezierVertex(52.7, 56.61, 52.38, 56.5, 52.14, 56.45);
        bezierVertex(52.03, 56.44, 51.91, 56.43, 51.77, 56.43);
endShape();
	strokeWeight(2);
	noFill();
     stroke(ctransitionBadgesBluedetail);
     mentonrep.scribbleEllipse( 50, 50, 40, 40);
     stroke(cideaBlue);
     mentonrep.scribbleLine(50, 50, 32, 50);
     mentonrep.scribbleLine(50, 50, 50, 38);
pop();
}

function mentonTransitionIntervene(xloc,yloc, rotation) {

 push();
     translate(xloc+24,yloc);
     rotate(PI/2+radians(rotation));
     scale(0.5);
fill(ctransitionBadgesBlueBG);
noStroke();
beginShape();
        vertex(44.44, 95.3);
        bezierVertex(27.72, 95.26, 18.68, 95.22, 17.3, 95.16);
        bezierVertex(15.92, 95.09, 14.88, 95.03, 14.18, 94.95);
        bezierVertex(13.48, 94.87, 12.9, 94.8, 12.44, 94.72);
        bezierVertex(11.98, 94.64, 11.57, 94.56, 11.19, 94.48);
        bezierVertex(10.81, 94.39, 10.47, 94.31, 10.17, 94.23);
        bezierVertex(9.87, 94.14, 9.6, 94.06, 9.34, 93.97);
        bezierVertex(9.08, 93.88, 8.76, 93.76, 8.37, 93.61);
        bezierVertex(7.99, 93.45, 7.5, 93.21, 6.92, 92.9);
        bezierVertex(6.34, 92.59, 5.97, 92.38, 5.8, 92.28);
        bezierVertex(5.63, 92.17, 5.46, 92.05, 5.28, 91.93);
        bezierVertex(5.1, 91.81, 4.9, 91.66, 4.69, 91.51);
        bezierVertex(4.48, 91.35, 4.26, 91.17, 4.02, 90.98);
        bezierVertex(3.77, 90.67, 3.55, 90.38, 3.37, 90.13);
        bezierVertex(3.2, 89.88, 3.04, 89.65, 2.89, 89.43);
        bezierVertex(2.76, 89.21, 2.51, 88.77, 2.17, 88.11);
        bezierVertex(1.83, 87.44, 1.6, 86.96, 1.48, 86.64);
        bezierVertex(1.36, 86.33, 1.24, 85.98, 1.13, 85.6);
        bezierVertex(1.01, 85.22, 0.9, 84.78, 0.79, 84.29);
        bezierVertex(0.68, 83.8, 0.58, 83.25, 0.49, 82.66);
        bezierVertex(0.4, 82.06, 0.32, 81.41, 0.26, 80.69);
        bezierVertex(0.2, 79.98, 0.14, 77.96, 0.08, 74.63);
        bezierVertex(0.02, 71.31, -0, 61.74, 0, 45.92);
        bezierVertex(0, 30.1, 0.02, 21.49, 0.05, 20.09);
        bezierVertex(0.07, 18.69, 0.11, 17.58, 0.15, 16.77);
        bezierVertex(0.2, 15.96, 0.24, 15.36, 0.27, 14.96);
        bezierVertex(0.31, 14.56, 0.35, 14.17, 0.4, 13.78);
        bezierVertex(0.44, 13.4, 0.49, 13.03, 0.55, 12.67);
        bezierVertex(0.61, 12.32, 0.67, 11.97, 0.73, 11.64);
        bezierVertex(0.79, 11.31, 0.86, 10.99, 0.94, 10.68);
        bezierVertex(1.01, 10.37, 1.09, 10.06, 1.17, 9.77);
        bezierVertex(1.25, 9.48, 1.34, 9.2, 1.42, 8.94);
        bezierVertex(1.51, 8.68, 1.73, 8.15, 2.08, 7.35);
        bezierVertex(2.43, 6.54, 2.72, 5.95, 2.95, 5.58);
        bezierVertex(3.17, 5.2, 3.41, 4.84, 3.66, 4.5);
        bezierVertex(3.91, 4.16, 4.17, 3.83, 4.45, 3.52);
        bezierVertex(4.67, 3.36, 4.9, 3.19, 5.15, 3.03);
        bezierVertex(5.4, 2.87, 5.66, 2.72, 5.93, 2.57);
        bezierVertex(6.2, 2.42, 6.49, 2.28, 6.78, 2.15);
        bezierVertex(7.07, 2.02, 7.57, 1.82, 8.29, 1.57);
        bezierVertex(9.01, 1.32, 9.53, 1.16, 9.87, 1.07);
        bezierVertex(10.21, 0.99, 10.64, 0.89, 11.17, 0.79);
        bezierVertex(11.69, 0.69, 12.26, 0.6, 12.89, 0.51);
        bezierVertex(13.51, 0.43, 14.15, 0.36, 14.81, 0.3);
        bezierVertex(15.48, 0.24, 16.21, 0.19, 17, 0.15);
        bezierVertex(17.8, 0.12, 20.91, 0.06, 26.34, 0);
        bezierVertex(56.35, 0, 72.42, 0.02, 74.54, 0.04);
        bezierVertex(76.67, 0.07, 78.31, 0.11, 79.46, 0.16);
        bezierVertex(80.62, 0.21, 81.43, 0.26, 81.9, 0.29);
        bezierVertex(82.37, 0.33, 82.8, 0.36, 83.18, 0.4);
        bezierVertex(83.57, 0.44, 83.98, 0.49, 84.41, 0.54);
        bezierVertex(84.85, 0.6, 85.25, 0.65, 85.62, 0.71);
        bezierVertex(85.98, 0.76, 86.38, 0.83, 86.81, 0.91);
        bezierVertex(87.24, 0.99, 87.78, 1.1, 88.43, 1.26);
        bezierVertex(89.07, 1.41, 89.72, 1.59, 90.38, 1.79);
        bezierVertex(91.04, 1.99, 91.6, 2.19, 92.08, 2.38);
        bezierVertex(92.56, 2.57, 93.04, 2.8, 93.54, 3.06);
        bezierVertex(94.04, 3.33, 94.55, 3.64, 95.08, 4);
        bezierVertex(95.37, 4.35, 95.65, 4.71, 95.92, 5.08);
        bezierVertex(96.18, 5.45, 96.4, 5.78, 96.58, 6.08);
        bezierVertex(96.76, 6.37, 96.93, 6.69, 97.11, 7.03);
        bezierVertex(97.29, 7.37, 97.57, 8.02, 97.97, 8.99);
        bezierVertex(98.37, 9.96, 98.64, 10.63, 98.76, 11);
        bezierVertex(98.88, 11.37, 99.01, 11.77, 99.13, 12.19);
        bezierVertex(99.25, 12.61, 99.37, 13.06, 99.48, 13.54);
        bezierVertex(99.59, 14.01, 99.7, 14.52, 99.8, 15.05);
        bezierVertex(99.91, 15.59, 99.99, 16.12, 100.07, 16.64);
        bezierVertex(100.14, 17.16, 100.21, 17.68, 100.26, 18.19);
        bezierVertex(100.31, 18.7, 100.37, 19.43, 100.43, 20.37);
        bezierVertex(100.49, 21.32, 100.53, 22.31, 100.56, 23.34);
        bezierVertex(100.59, 24.38, 100.61, 31.3, 100.62, 44.1);
        bezierVertex(100.63, 56.9, 100.64, 64.13, 100.63, 65.78);
        bezierVertex(100.62, 67.43, 100.61, 68.61, 100.6, 69.33);
        bezierVertex(100.58, 70.04, 100.56, 70.79, 100.54, 71.58);
        bezierVertex(100.51, 72.37, 100.48, 73.08, 100.44, 73.72);
        bezierVertex(100.4, 74.36, 100.36, 74.94, 100.31, 75.47);
        bezierVertex(100.26, 76, 100.2, 76.58, 100.11, 77.22);
        bezierVertex(100.03, 77.85, 99.94, 78.41, 99.85, 78.9);
        bezierVertex(99.76, 79.38, 99.67, 79.83, 99.57, 80.25);
        bezierVertex(99.47, 80.67, 99.38, 81.05, 99.28, 81.4);
        bezierVertex(99.18, 81.75, 99.08, 82.12, 98.95, 82.5);
        bezierVertex(98.83, 82.88, 98.7, 83.27, 98.55, 83.67);
        bezierVertex(98.4, 84.07, 98.14, 84.69, 97.77, 85.53);
        bezierVertex(97.39, 86.36, 97.04, 87.07, 96.72, 87.64);
        bezierVertex(96.4, 88.21, 96.12, 88.66, 95.89, 89.01);
        bezierVertex(95.66, 89.35, 95.33, 89.79, 94.9, 90.32);
        bezierVertex(94.56, 90.57, 94.27, 90.78, 94.01, 90.94);
        bezierVertex(93.76, 91.11, 93.41, 91.32, 92.97, 91.56);
        bezierVertex(92.53, 91.8, 92.11, 92.02, 91.72, 92.2);
        bezierVertex(91.32, 92.39, 90.87, 92.59, 90.35, 92.79);
        bezierVertex(89.84, 93, 89.34, 93.19, 88.85, 93.35);
        bezierVertex(88.36, 93.52, 87.87, 93.67, 87.39, 93.8);
        bezierVertex(86.91, 93.94, 86.44, 94.06, 85.98, 94.16);
        bezierVertex(85.51, 94.27, 85.06, 94.36, 84.62, 94.44);
        bezierVertex(84.18, 94.53, 83.76, 94.6, 83.37, 94.65);
        bezierVertex(82.98, 94.71, 82.52, 94.77, 82, 94.83);
        bezierVertex(81.47, 94.89, 80.98, 94.94, 80.53, 94.98);
        bezierVertex(80.08, 95.02, 79.29, 95.06, 78.18, 95.12);
        bezierVertex(77.06, 95.17, 75.59, 95.21, 73.78, 95.24);
        bezierVertex(71.96, 95.27, 58.41, 95.29, 33.14, 95.3);
endShape();
fill(ctransitionBadgesWhite);
beginShape();
        vertex(51.17, 68.76);
        bezierVertex(51.04, 68.76, 50.88, 68.77, 50.68, 68.81);
        bezierVertex(50.49, 68.84, 50.29, 68.89, 50.09, 68.95);
        bezierVertex(49.88, 69.02, 49.68, 69.1, 49.48, 69.2);
        bezierVertex(49.29, 69.29, 48.97, 69.49, 48.54, 69.78);
        bezierVertex(48.11, 70.07, 47.75, 70.34, 47.47, 70.59);
        bezierVertex(47.18, 70.83, 46.91, 71.09, 46.65, 71.35);
        bezierVertex(46.39, 71.62, 46.14, 71.87, 45.91, 72.12);
        bezierVertex(45.69, 72.37, 45.13, 73, 44.23, 74.02);
        bezierVertex(43.34, 75.04, 42.68, 75.79, 42.25, 76.3);
        bezierVertex(41.82, 76.8, 41.5, 77.17, 41.28, 77.42);
        bezierVertex(41.06, 77.67, 40.86, 77.89, 40.69, 78.09);
        bezierVertex(40.51, 78.28, 40.16, 78.65, 39.64, 79.2);
        bezierVertex(39.12, 79.74, 38.76, 80.12, 38.56, 80.32);
        bezierVertex(38.35, 80.53, 38.02, 80.83, 37.57, 81.24);
        bezierVertex(37.12, 81.65, 36.66, 82.05, 36.18, 82.44);
        bezierVertex(35.71, 82.83, 35.28, 83.17, 34.88, 83.46);
        bezierVertex(34.49, 83.75, 34.19, 83.95, 33.99, 84.09);
        bezierVertex(33.78, 84.22, 33.45, 84.41, 32.98, 84.68);
        bezierVertex(32.51, 84.94, 32.18, 85.12, 31.98, 85.21);
        bezierVertex(31.78, 85.31, 31.45, 85.45, 30.98, 85.64);
        bezierVertex(30.51, 85.82, 29.89, 86.02, 29.11, 86.22);
        bezierVertex(28.34, 86.42, 27.76, 86.55, 27.36, 86.6);
        bezierVertex(26.97, 86.65, 26.38, 86.68, 25.6, 86.67);
        bezierVertex(24.82, 86.67, 24.26, 86.65, 23.9, 86.6);
        bezierVertex(23.54, 86.55, 23.12, 86.46, 22.65, 86.34);
        bezierVertex(22.17, 86.22, 21.79, 86.1, 21.5, 85.99);
        bezierVertex(21.22, 85.89, 21, 85.8, 20.84, 85.72);
        bezierVertex(20.68, 85.65, 20.5, 85.55, 20.3, 85.44);
        bezierVertex(20.1, 85.33, 19.86, 85.19, 19.59, 85.01);
        bezierVertex(19.33, 84.82, 19, 84.56, 18.61, 84.21);
        bezierVertex(18.21, 83.86, 17.91, 83.55, 17.68, 83.27);
        bezierVertex(17.45, 83, 17.22, 82.68, 16.98, 82.31);
        bezierVertex(16.74, 81.93, 16.49, 81.46, 16.24, 80.9);
        bezierVertex(15.99, 80.34, 15.82, 79.9, 15.73, 79.59);
        bezierVertex(15.64, 79.28, 15.56, 78.92, 15.49, 78.5);
        bezierVertex(15.41, 78.08, 15.36, 77.65, 15.33, 77.2);
        bezierVertex(15.31, 76.75, 15.3, 76.39, 15.31, 76.13);
        bezierVertex(15.31, 75.87, 15.34, 75.57, 15.38, 75.23);
        bezierVertex(15.41, 74.9, 15.48, 74.52, 15.56, 74.09);
        bezierVertex(15.65, 73.65, 15.75, 73.21, 15.88, 72.74);
        bezierVertex(16.01, 72.28, 16.15, 71.84, 16.3, 71.43);
        bezierVertex(16.44, 71.01, 16.61, 70.58, 16.8, 70.14);
        bezierVertex(16.99, 69.7, 17.17, 69.3, 17.35, 68.94);
        bezierVertex(17.52, 68.59, 17.88, 67.91, 18.43, 66.92);
        bezierVertex(18.99, 65.93, 19.32, 65.34, 19.43, 65.17);
        bezierVertex(19.54, 64.99, 19.83, 64.55, 20.29, 63.85);
        bezierVertex(20.76, 63.16, 21.06, 62.71, 21.2, 62.51);
        bezierVertex(21.34, 62.31, 21.61, 61.95, 22.01, 61.41);
        bezierVertex(22.41, 60.88, 22.71, 60.49, 22.91, 60.23);
        bezierVertex(23.11, 59.97, 23.3, 59.73, 23.48, 59.5);
        bezierVertex(23.66, 59.28, 23.92, 58.96, 24.25, 58.55);
        bezierVertex(24.58, 58.14, 25.03, 57.58, 25.6, 56.87);
        bezierVertex(26.18, 56.16, 26.64, 55.58, 26.99, 55.15);
        bezierVertex(27.34, 54.71, 27.65, 54.33, 27.91, 54);
        bezierVertex(28.17, 53.67, 28.5, 53.24, 28.91, 52.69);
        bezierVertex(29.32, 52.15, 29.67, 51.69, 29.95, 51.3);
        bezierVertex(30.24, 50.91, 30.47, 50.59, 30.65, 50.35);
        bezierVertex(30.82, 50.1, 31.14, 49.66, 31.59, 49.02);
        bezierVertex(32.05, 48.39, 32.59, 47.63, 33.21, 46.75);
        bezierVertex(33.83, 45.87, 34.29, 45.23, 34.57, 44.84);
        bezierVertex(34.85, 44.45, 35.22, 43.95, 35.66, 43.35);
        bezierVertex(36.1, 42.74, 36.79, 41.85, 37.74, 40.66);
        bezierVertex(38.68, 39.47, 39.51, 38.48, 40.22, 37.7);
        bezierVertex(40.93, 36.92, 41.59, 36.27, 42.21, 35.73);
        bezierVertex(42.82, 35.2, 43.35, 34.77, 43.81, 34.45);
        bezierVertex(44.28, 34.13, 44.64, 33.9, 44.91, 33.75);
        bezierVertex(45.17, 33.61, 45.45, 33.47, 45.74, 33.34);
        bezierVertex(46.03, 33.21, 46.25, 33.12, 46.39, 33.06);
        bezierVertex(46.53, 33.01, 46.7, 32.95, 46.88, 32.9);
        bezierVertex(47.06, 32.84, 47.47, 32.75, 48.11, 32.63);
        bezierVertex(48.74, 32.51, 49.54, 32.45, 50.48, 32.46);
        bezierVertex(51.43, 32.47, 52.1, 32.52, 52.48, 32.59);
        bezierVertex(52.87, 32.66, 53.26, 32.76, 53.65, 32.87);
        bezierVertex(54.04, 32.99, 54.49, 33.16, 55, 33.39);
        bezierVertex(55.51, 33.61, 55.88, 33.79, 56.11, 33.91);
        bezierVertex(56.34, 34.04, 56.59, 34.19, 56.84, 34.35);
        bezierVertex(57.09, 34.51, 57.34, 34.68, 57.57, 34.85);
        bezierVertex(57.81, 35.03, 58.22, 35.39, 58.81, 35.92);
        bezierVertex(59.39, 36.46, 59.77, 36.82, 59.94, 37.01);
        bezierVertex(60.11, 37.19, 60.34, 37.45, 60.63, 37.79);
        bezierVertex(60.91, 38.12, 61.39, 38.74, 62.06, 39.65);
        bezierVertex(62.73, 40.56, 63.43, 41.57, 64.15, 42.66);
        bezierVertex(64.87, 43.75, 65.45, 44.63, 65.88, 45.29);
        bezierVertex(66.31, 45.95, 66.6, 46.4, 66.75, 46.63);
        bezierVertex(66.9, 46.85, 67.22, 47.32, 67.7, 48.03);
        bezierVertex(68.19, 48.73, 68.54, 49.23, 68.74, 49.53);
        bezierVertex(68.95, 49.82, 69.33, 50.34, 69.87, 51.09);
        bezierVertex(70.42, 51.85, 70.87, 52.46, 71.23, 52.92);
        bezierVertex(71.58, 53.39, 72.07, 54, 72.69, 54.78);
        bezierVertex(73.3, 55.55, 73.9, 56.29, 74.49, 57);
        bezierVertex(75.07, 57.71, 75.74, 58.53, 76.5, 59.45);
        bezierVertex(77.25, 60.37, 77.78, 61.01, 78.08, 61.39);
        bezierVertex(78.38, 61.77, 78.73, 62.21, 79.13, 62.72);
        bezierVertex(79.52, 63.24, 80.06, 63.98, 80.73, 64.97);
        bezierVertex(81.41, 65.95, 81.89, 66.69, 82.17, 67.2);
        bezierVertex(82.46, 67.7, 82.7, 68.17, 82.91, 68.59);
        bezierVertex(83.11, 69.01, 83.28, 69.41, 83.43, 69.79);
        bezierVertex(83.58, 70.17, 83.74, 70.63, 83.9, 71.18);
        bezierVertex(84.05, 71.73, 84.17, 72.22, 84.25, 72.64);
        bezierVertex(84.33, 73.06, 84.38, 73.37, 84.4, 73.58);
        bezierVertex(84.42, 73.79, 84.44, 74.16, 84.46, 74.7);
        bezierVertex(84.47, 75.23, 84.45, 75.84, 84.37, 76.51);
        bezierVertex(84.3, 77.19, 84.19, 77.84, 84.04, 78.47);
        bezierVertex(83.88, 79.09, 83.73, 79.59, 83.58, 79.98);
        bezierVertex(83.44, 80.36, 83.12, 80.96, 82.64, 81.78);
        bezierVertex(82.16, 82.6, 81.76, 83.2, 81.45, 83.56);
        bezierVertex(81.14, 83.93, 80.85, 84.24, 80.57, 84.5);
        bezierVertex(80.29, 84.76, 79.97, 85.02, 79.63, 85.27);
        bezierVertex(79.28, 85.52, 78.93, 85.75, 78.57, 85.95);
        bezierVertex(78.21, 86.14, 77.81, 86.33, 77.36, 86.5);
        bezierVertex(76.91, 86.67, 76.53, 86.8, 76.21, 86.88);
        bezierVertex(75.89, 86.96, 75.59, 87.03, 75.3, 87.07);
        bezierVertex(75.02, 87.11, 74.66, 87.14, 74.22, 87.16);
        bezierVertex(73.78, 87.17, 73.38, 87.17, 73.01, 87.13);
        bezierVertex(72.64, 87.1, 72.34, 87.06, 72.1, 87.01);
        bezierVertex(71.86, 86.97, 71.59, 86.9, 71.28, 86.81);
        bezierVertex(70.97, 86.72, 70.72, 86.64, 70.53, 86.56);
        bezierVertex(70.33, 86.49, 70.16, 86.42, 70.01, 86.35);
        bezierVertex(69.85, 86.28, 69.68, 86.19, 69.48, 86.08);
        bezierVertex(69.28, 85.97, 69, 85.8, 68.63, 85.55);
        bezierVertex(68.26, 85.31, 67.82, 84.98, 67.32, 84.56);
        bezierVertex(66.82, 84.14, 66.31, 83.66, 65.79, 83.14);
        bezierVertex(65.26, 82.61, 64.81, 82.14, 64.44, 81.73);
        bezierVertex(64.07, 81.32, 63.67, 80.85, 63.23, 80.33);
        bezierVertex(62.8, 79.82, 62.33, 79.25, 61.82, 78.64);
        bezierVertex(61.32, 78.03, 60.83, 77.44, 60.36, 76.87);
        bezierVertex(59.89, 76.31, 59.37, 75.69, 58.8, 75.01);
        bezierVertex(58.24, 74.34, 57.75, 73.78, 57.35, 73.32);
        bezierVertex(56.95, 72.86, 56.63, 72.5, 56.39, 72.25);
        bezierVertex(56.16, 72, 55.91, 71.74, 55.65, 71.49);
        bezierVertex(55.4, 71.23, 55.14, 70.99, 54.88, 70.75);
        bezierVertex(54.61, 70.51, 54.41, 70.34, 54.28, 70.23);
        bezierVertex(54.15, 70.13, 53.98, 70, 53.78, 69.84);
        bezierVertex(53.57, 69.69, 53.4, 69.57, 53.26, 69.48);
        bezierVertex(53.12, 69.39, 52.86, 69.26, 52.48, 69.1);
        bezierVertex(52.1, 68.94, 51.78, 68.83, 51.54, 68.78);
        bezierVertex(51.43, 68.77, 51.31, 68.77, 51.17, 68.76);
endShape();

beginShape();
        vertex(51.44, 25.07);
        bezierVertex(51.38, 25.07, 51.31, 25.07, 51.22, 25.09);
        bezierVertex(51.14, 25.1, 51.05, 25.12, 50.97, 25.15);
        bezierVertex(50.88, 25.17, 50.79, 25.21, 50.7, 25.25);
        bezierVertex(50.62, 25.28, 50.48, 25.36, 50.29, 25.48);
        bezierVertex(50.11, 25.6, 49.95, 25.71, 49.83, 25.81);
        bezierVertex(49.71, 25.91, 49.59, 26.02, 49.48, 26.13);
        bezierVertex(49.36, 26.23, 49.26, 26.34, 49.16, 26.44);
        bezierVertex(49.06, 26.54, 48.81, 26.8, 48.43, 27.21);
        bezierVertex(48.04, 27.63, 47.75, 27.94, 47.57, 28.14);
        bezierVertex(47.38, 28.35, 47.24, 28.5, 47.15, 28.6);
        bezierVertex(47.05, 28.7, 46.97, 28.79, 46.89, 28.87);
        bezierVertex(46.81, 28.95, 46.66, 29.1, 46.44, 29.32);
        bezierVertex(46.21, 29.55, 46.06, 29.7, 45.97, 29.78);
        bezierVertex(45.88, 29.87, 45.73, 29.99, 45.54, 30.16);
        bezierVertex(45.34, 30.32, 45.14, 30.49, 44.94, 30.65);
        bezierVertex(44.73, 30.81, 44.54, 30.94, 44.37, 31.06);
        bezierVertex(44.2, 31.18, 44.07, 31.26, 43.98, 31.32);
        bezierVertex(43.9, 31.37, 43.75, 31.45, 43.55, 31.56);
        bezierVertex(43.34, 31.67, 43.2, 31.74, 43.11, 31.78);
        bezierVertex(43.03, 31.82, 42.88, 31.87, 42.68, 31.95);
        bezierVertex(42.48, 32.03, 42.21, 32.11, 41.87, 32.19);
        bezierVertex(41.54, 32.27, 41.28, 32.32, 41.11, 32.34);
        bezierVertex(40.94, 32.36, 40.69, 32.37, 40.35, 32.37);
        bezierVertex(40.01, 32.37, 39.77, 32.36, 39.61, 32.34);
        bezierVertex(39.45, 32.32, 39.27, 32.29, 39.07, 32.24);
        bezierVertex(38.86, 32.19, 38.69, 32.14, 38.57, 32.1);
        bezierVertex(38.45, 32.05, 38.35, 32.02, 38.28, 31.99);
        bezierVertex(38.21, 31.95, 38.14, 31.92, 38.05, 31.87);
        bezierVertex(37.96, 31.83, 37.86, 31.77, 37.74, 31.69);
        bezierVertex(37.63, 31.62, 37.49, 31.51, 37.31, 31.37);
        bezierVertex(37.15, 31.22, 37.01, 31.1, 36.91, 30.99);
        bezierVertex(36.81, 30.88, 36.71, 30.75, 36.61, 30.59);
        bezierVertex(36.5, 30.44, 36.4, 30.25, 36.29, 30.02);
        bezierVertex(36.18, 29.79, 36.11, 29.61, 36.07, 29.48);
        bezierVertex(36.03, 29.36, 35.99, 29.21, 35.96, 29.04);
        bezierVertex(35.93, 28.87, 35.91, 28.69, 35.9, 28.51);
        bezierVertex(35.88, 28.33, 35.88, 28.18, 35.88, 28.07);
        bezierVertex(35.89, 27.97, 35.9, 27.84, 35.91, 27.71);
        bezierVertex(35.93, 27.57, 35.96, 27.42, 35.99, 27.24);
        bezierVertex(36.03, 27.06, 36.08, 26.88, 36.13, 26.69);
        bezierVertex(36.19, 26.5, 36.25, 26.32, 36.31, 26.15);
        bezierVertex(36.38, 25.99, 36.45, 25.81, 36.53, 25.63);
        bezierVertex(36.62, 25.45, 36.69, 25.29, 36.77, 25.14);
        bezierVertex(36.84, 25, 37, 24.72, 37.24, 24.32);
        bezierVertex(37.48, 23.91, 37.62, 23.67, 37.67, 23.6);
        bezierVertex(37.72, 23.53, 37.85, 23.35, 38.05, 23.07);
        bezierVertex(38.25, 22.78, 38.38, 22.6, 38.44, 22.52);
        bezierVertex(38.5, 22.44, 38.62, 22.29, 38.79, 22.07);
        bezierVertex(38.96, 21.85, 39.09, 21.69, 39.18, 21.59);
        bezierVertex(39.27, 21.48, 39.35, 21.38, 39.43, 21.29);
        bezierVertex(39.51, 21.2, 39.62, 21.07, 39.76, 20.9);
        bezierVertex(39.9, 20.74, 40.1, 20.51, 40.35, 20.22);
        bezierVertex(40.6, 19.93, 40.8, 19.69, 40.95, 19.52);
        bezierVertex(41.1, 19.34, 41.24, 19.18, 41.35, 19.05);
        bezierVertex(41.46, 18.91, 41.61, 18.74, 41.78, 18.51);
        bezierVertex(41.96, 18.29, 42.11, 18.1, 42.23, 17.95);
        bezierVertex(42.36, 17.79, 42.46, 17.66, 42.53, 17.56);
        bezierVertex(42.61, 17.46, 42.75, 17.28, 42.95, 17.02);
        bezierVertex(43.14, 16.76, 43.38, 16.45, 43.65, 16.09);
        bezierVertex(43.92, 15.73, 44.11, 15.47, 44.24, 15.31);
        bezierVertex(44.36, 15.15, 44.52, 14.95, 44.71, 14.7);
        bezierVertex(44.9, 14.46, 45.2, 14.09, 45.61, 13.61);
        bezierVertex(46.02, 13.12, 46.38, 12.72, 46.69, 12.4);
        bezierVertex(47, 12.08, 47.28, 11.82, 47.55, 11.6);
        bezierVertex(47.81, 11.38, 48.04, 11.2, 48.25, 11.07);
        bezierVertex(48.45, 10.94, 48.6, 10.85, 48.72, 10.79);
        bezierVertex(48.83, 10.73, 48.95, 10.67, 49.08, 10.62);
        bezierVertex(49.21, 10.57, 49.3, 10.53, 49.36, 10.51);
        bezierVertex(49.43, 10.49, 49.5, 10.46, 49.57, 10.44);
        bezierVertex(49.65, 10.42, 49.83, 10.38, 50.11, 10.33);
        bezierVertex(50.38, 10.28, 50.73, 10.26, 51.14, 10.26);
        bezierVertex(51.55, 10.27, 51.84, 10.29, 52, 10.31);
        bezierVertex(52.17, 10.34, 52.34, 10.38, 52.51, 10.43);
        bezierVertex(52.68, 10.48, 52.88, 10.55, 53.1, 10.64);
        bezierVertex(53.32, 10.73, 53.48, 10.8, 53.58, 10.85);
        bezierVertex(53.68, 10.91, 53.78, 10.97, 53.89, 11.03);
        bezierVertex(54, 11.1, 54.11, 11.17, 54.21, 11.24);
        bezierVertex(54.32, 11.31, 54.49, 11.46, 54.75, 11.67);
        bezierVertex(55, 11.89, 55.16, 12.04, 55.24, 12.12);
        bezierVertex(55.31, 12.19, 55.41, 12.3, 55.53, 12.43);
        bezierVertex(55.66, 12.57, 55.87, 12.82, 56.16, 13.2);
        bezierVertex(56.45, 13.57, 56.75, 13.98, 57.06, 14.42);
        bezierVertex(57.38, 14.87, 57.63, 15.23, 57.81, 15.5);
        bezierVertex(58, 15.77, 58.13, 15.95, 58.19, 16.04);
        bezierVertex(58.26, 16.13, 58.39, 16.32, 58.6, 16.61);
        bezierVertex(58.81, 16.9, 58.97, 17.1, 59.06, 17.22);
        bezierVertex(59.15, 17.34, 59.31, 17.56, 59.55, 17.86);
        bezierVertex(59.78, 18.17, 59.98, 18.42, 60.13, 18.61);
        bezierVertex(60.29, 18.8, 60.5, 19.05, 60.76, 19.36);
        bezierVertex(61.03, 19.68, 61.29, 19.98, 61.55, 20.27);
        bezierVertex(61.8, 20.56, 62.09, 20.9, 62.42, 21.27);
        bezierVertex(62.74, 21.64, 62.97, 21.91, 63.1, 22.06);
        bezierVertex(63.23, 22.21, 63.39, 22.4, 63.56, 22.61);
        bezierVertex(63.73, 22.81, 63.96, 23.12, 64.25, 23.52);
        bezierVertex(64.55, 23.92, 64.75, 24.22, 64.88, 24.43);
        bezierVertex(65, 24.64, 65.11, 24.83, 65.2, 25);
        bezierVertex(65.28, 25.17, 65.36, 25.33, 65.43, 25.49);
        bezierVertex(65.49, 25.64, 65.56, 25.83, 65.63, 26.06);
        bezierVertex(65.69, 26.28, 65.75, 26.48, 65.78, 26.65);
        bezierVertex(65.81, 26.82, 65.83, 26.95, 65.84, 27.03);
        bezierVertex(65.85, 27.12, 65.86, 27.27, 65.87, 27.49);
        bezierVertex(65.88, 27.71, 65.86, 27.95, 65.83, 28.23);
        bezierVertex(65.8, 28.51, 65.75, 28.77, 65.69, 29.03);
        bezierVertex(65.62, 29.28, 65.55, 29.49, 65.49, 29.64);
        bezierVertex(65.43, 29.8, 65.29, 30.04, 65.08, 30.38);
        bezierVertex(64.87, 30.71, 64.7, 30.95, 64.57, 31.1);
        bezierVertex(64.43, 31.25, 64.3, 31.38, 64.18, 31.49);
        bezierVertex(64.06, 31.59, 63.93, 31.7, 63.78, 31.8);
        bezierVertex(63.63, 31.9, 63.47, 32, 63.32, 32.08);
        bezierVertex(63.16, 32.16, 62.99, 32.23, 62.79, 32.3);
        bezierVertex(62.6, 32.37, 62.43, 32.42, 62.29, 32.46);
        bezierVertex(62.15, 32.49, 62.02, 32.52, 61.9, 32.53);
        bezierVertex(61.78, 32.55, 61.62, 32.56, 61.43, 32.57);
        bezierVertex(61.24, 32.58, 61.07, 32.57, 60.91, 32.56);
        bezierVertex(60.74, 32.55, 60.61, 32.53, 60.51, 32.51);
        bezierVertex(60.41, 32.49, 60.29, 32.47, 60.16, 32.43);
        bezierVertex(60.02, 32.39, 59.91, 32.36, 59.83, 32.33);
        bezierVertex(59.75, 32.3, 59.67, 32.27, 59.6, 32.24);
        bezierVertex(59.54, 32.21, 59.46, 32.17, 59.38, 32.13);
        bezierVertex(59.29, 32.09, 59.17, 32.02, 59.01, 31.92);
        bezierVertex(58.85, 31.82, 58.66, 31.68, 58.44, 31.51);
        bezierVertex(58.22, 31.34, 58, 31.14, 57.77, 30.93);
        bezierVertex(57.55, 30.72, 57.35, 30.52, 57.19, 30.36);
        bezierVertex(57.03, 30.19, 56.86, 30, 56.67, 29.79);
        bezierVertex(56.48, 29.58, 56.27, 29.35, 56.05, 29.1);
        bezierVertex(55.84, 28.85, 55.62, 28.61, 55.42, 28.38);
        bezierVertex(55.22, 28.14, 54.99, 27.89, 54.75, 27.62);
        bezierVertex(54.5, 27.34, 54.29, 27.11, 54.11, 26.93);
        bezierVertex(53.94, 26.74, 53.8, 26.59, 53.7, 26.49);
        bezierVertex(53.6, 26.39, 53.49, 26.28, 53.38, 26.18);
        bezierVertex(53.27, 26.08, 53.16, 25.98, 53.04, 25.88);
        bezierVertex(52.93, 25.78, 52.84, 25.71, 52.79, 25.67);
        bezierVertex(52.73, 25.62, 52.66, 25.57, 52.57, 25.51);
        bezierVertex(52.48, 25.45, 52.4, 25.4, 52.34, 25.36);
        bezierVertex(52.28, 25.32, 52.17, 25.27, 52, 25.21);
        bezierVertex(51.84, 25.14, 51.7, 25.1, 51.6, 25.07);
        bezierVertex(51.55, 25.07, 51.5, 25.07, 51.44, 25.07);
endShape();

pop();
}

function mentonTransitionStep(xloc,yloc, rotation) {

 push();
     translate(xloc+24,yloc);
     rotate(PI/2+radians(rotation));
     scale(0.5);
fill(ctransitionBadgesBlueBG);
noStroke();
beginShape();
        vertex(44.44, 95.3);
        bezierVertex(27.72, 95.26, 18.68, 95.22, 17.3, 95.16);
        bezierVertex(15.92, 95.09, 14.88, 95.03, 14.18, 94.95);
        bezierVertex(13.48, 94.87, 12.9, 94.8, 12.44, 94.72);
        bezierVertex(11.98, 94.64, 11.57, 94.56, 11.19, 94.48);
        bezierVertex(10.81, 94.39, 10.47, 94.31, 10.17, 94.23);
        bezierVertex(9.88, 94.14, 9.6, 94.06, 9.34, 93.97);
        bezierVertex(9.08, 93.88, 8.76, 93.76, 8.37, 93.61);
        bezierVertex(7.99, 93.45, 7.5, 93.21, 6.92, 92.9);
        bezierVertex(6.34, 92.59, 5.97, 92.38, 5.8, 92.28);
        bezierVertex(5.63, 92.17, 5.46, 92.05, 5.28, 91.93);
        bezierVertex(5.1, 91.81, 4.9, 91.66, 4.69, 91.51);
        bezierVertex(4.48, 91.35, 4.26, 91.17, 4.02, 90.98);
        bezierVertex(3.77, 90.67, 3.55, 90.38, 3.37, 90.13);
        bezierVertex(3.19, 89.88, 3.03, 89.65, 2.9, 89.43);
        bezierVertex(2.75, 89.21, 2.51, 88.77, 2.17, 88.11);
        bezierVertex(1.83, 87.44, 1.6, 86.96, 1.48, 86.64);
        bezierVertex(1.36, 86.33, 1.24, 85.98, 1.13, 85.6);
        bezierVertex(1.01, 85.22, 0.9, 84.78, 0.79, 84.29);
        bezierVertex(0.68, 83.8, 0.58, 83.25, 0.49, 82.66);
        bezierVertex(0.4, 82.06, 0.32, 81.41, 0.26, 80.69);
        bezierVertex(0.2, 79.98, 0.14, 77.96, 0.08, 74.63);
        bezierVertex(0.02, 71.31, -0, 61.74, 0, 45.92);
        bezierVertex(0, 30.1, 0.02, 21.49, 0.05, 20.09);
        bezierVertex(0.07, 18.69, 0.11, 17.58, 0.15, 16.77);
        bezierVertex(0.2, 15.97, 0.24, 15.36, 0.27, 14.96);
        bezierVertex(0.31, 14.56, 0.35, 14.17, 0.4, 13.78);
        bezierVertex(0.44, 13.4, 0.49, 13.03, 0.55, 12.67);
        bezierVertex(0.61, 12.32, 0.67, 11.97, 0.73, 11.64);
        bezierVertex(0.79, 11.31, 0.86, 10.99, 0.94, 10.68);
        bezierVertex(1.01, 10.37, 1.09, 10.06, 1.17, 9.77);
        bezierVertex(1.25, 9.48, 1.34, 9.2, 1.42, 8.94);
        bezierVertex(1.51, 8.68, 1.72, 8.15, 2.08, 7.35);
        bezierVertex(2.43, 6.54, 2.72, 5.95, 2.95, 5.58);
        bezierVertex(3.18, 5.2, 3.41, 4.84, 3.66, 4.5);
        bezierVertex(3.91, 4.16, 4.17, 3.83, 4.45, 3.52);
        bezierVertex(4.67, 3.36, 4.9, 3.19, 5.15, 3.03);
        bezierVertex(5.4, 2.87, 5.66, 2.72, 5.93, 2.57);
        bezierVertex(6.2, 2.42, 6.49, 2.28, 6.78, 2.15);
        bezierVertex(7.07, 2.02, 7.57, 1.82, 8.29, 1.57);
        bezierVertex(9.01, 1.32, 9.53, 1.16, 9.87, 1.07);
        bezierVertex(10.21, 0.99, 10.64, 0.89, 11.17, 0.79);
        bezierVertex(11.69, 0.69, 12.26, 0.6, 12.89, 0.51);
        bezierVertex(13.51, 0.43, 14.15, 0.36, 14.81, 0.3);
        bezierVertex(15.48, 0.24, 16.2, 0.19, 17, 0.15);
        bezierVertex(17.8, 0.12, 20.91, 0.06, 26.34, 0);
        bezierVertex(56.35, 0, 72.42, 0.02, 74.54, 0.04);
        bezierVertex(76.66, 0.07, 78.3, 0.11, 79.46, 0.16);
        bezierVertex(80.62, 0.21, 81.43, 0.26, 81.9, 0.29);
        bezierVertex(82.37, 0.33, 82.8, 0.36, 83.18, 0.4);
        bezierVertex(83.56, 0.44, 83.97, 0.49, 84.41, 0.54);
        bezierVertex(84.85, 0.6, 85.25, 0.65, 85.62, 0.71);
        bezierVertex(85.98, 0.76, 86.38, 0.83, 86.81, 0.91);
        bezierVertex(87.24, 0.99, 87.78, 1.1, 88.43, 1.26);
        bezierVertex(89.07, 1.41, 89.72, 1.59, 90.38, 1.79);
        bezierVertex(91.04, 1.99, 91.6, 2.19, 92.08, 2.38);
        bezierVertex(92.56, 2.57, 93.04, 2.8, 93.54, 3.06);
        bezierVertex(94.04, 3.33, 94.55, 3.64, 95.08, 4);
        bezierVertex(95.37, 4.35, 95.65, 4.71, 95.92, 5.08);
        bezierVertex(96.18, 5.45, 96.4, 5.78, 96.58, 6.08);
        bezierVertex(96.76, 6.37, 96.93, 6.69, 97.11, 7.03);
        bezierVertex(97.28, 7.37, 97.57, 8.02, 97.97, 8.99);
        bezierVertex(98.37, 9.96, 98.64, 10.63, 98.76, 11);
        bezierVertex(98.88, 11.37, 99, 11.77, 99.13, 12.19);
        bezierVertex(99.25, 12.61, 99.37, 13.06, 99.48, 13.54);
        bezierVertex(99.59, 14.01, 99.7, 14.52, 99.8, 15.05);
        bezierVertex(99.91, 15.59, 99.99, 16.12, 100.07, 16.64);
        bezierVertex(100.14, 17.16, 100.21, 17.68, 100.26, 18.19);
        bezierVertex(100.31, 18.7, 100.37, 19.43, 100.43, 20.37);
        bezierVertex(100.49, 21.32, 100.53, 22.31, 100.56, 23.34);
        bezierVertex(100.59, 24.38, 100.61, 31.3, 100.62, 44.1);
        bezierVertex(100.63, 56.9, 100.64, 64.13, 100.63, 65.78);
        bezierVertex(100.62, 67.43, 100.61, 68.61, 100.6, 69.33);
        bezierVertex(100.58, 70.04, 100.56, 70.79, 100.54, 71.58);
        bezierVertex(100.51, 72.37, 100.48, 73.08, 100.44, 73.72);
        bezierVertex(100.4, 74.36, 100.36, 74.94, 100.31, 75.47);
        bezierVertex(100.26, 76, 100.2, 76.58, 100.11, 77.22);
        bezierVertex(100.02, 77.85, 99.94, 78.41, 99.85, 78.9);
        bezierVertex(99.76, 79.38, 99.67, 79.83, 99.57, 80.25);
        bezierVertex(99.48, 80.67, 99.38, 81.05, 99.28, 81.4);
        bezierVertex(99.18, 81.75, 99.07, 82.12, 98.95, 82.5);
        bezierVertex(98.83, 82.88, 98.7, 83.27, 98.55, 83.67);
        bezierVertex(98.4, 84.07, 98.14, 84.69, 97.77, 85.53);
        bezierVertex(97.39, 86.36, 97.04, 87.07, 96.72, 87.64);
        bezierVertex(96.4, 88.21, 96.12, 88.66, 95.89, 89.01);
        bezierVertex(95.66, 89.35, 95.33, 89.79, 94.9, 90.32);
        bezierVertex(94.56, 90.57, 94.27, 90.78, 94.01, 90.94);
        bezierVertex(93.76, 91.11, 93.41, 91.32, 92.97, 91.56);
        bezierVertex(92.53, 91.8, 92.11, 92.02, 91.72, 92.2);
        bezierVertex(91.32, 92.39, 90.87, 92.59, 90.35, 92.79);
        bezierVertex(89.84, 93, 89.34, 93.19, 88.85, 93.35);
        bezierVertex(88.36, 93.52, 87.87, 93.67, 87.39, 93.8);
        bezierVertex(86.91, 93.94, 86.44, 94.06, 85.98, 94.16);
        bezierVertex(85.51, 94.27, 85.06, 94.36, 84.62, 94.44);
        bezierVertex(84.18, 94.53, 83.76, 94.6, 83.37, 94.65);
        bezierVertex(82.98, 94.71, 82.52, 94.77, 82, 94.83);
        bezierVertex(81.47, 94.89, 80.98, 94.94, 80.53, 94.98);
        bezierVertex(80.08, 95.02, 79.29, 95.06, 78.18, 95.12);
        bezierVertex(77.06, 95.17, 75.59, 95.21, 73.78, 95.24);
        bezierVertex(71.96, 95.27, 58.41, 95.29, 33.14, 95.3);
endShape();
fill(ctransitionBadgesWhite);

beginShape();
        vertex(51.77, 56.43);
        bezierVertex(51.64, 56.43, 51.47, 56.44, 51.28, 56.47);
        bezierVertex(51.09, 56.5, 50.89, 56.55, 50.68, 56.62);
        bezierVertex(50.48, 56.69, 50.28, 56.77, 50.08, 56.86);
        bezierVertex(49.88, 56.96, 49.57, 57.15, 49.14, 57.44);
        bezierVertex(48.7, 57.73, 48.34, 58, 48.06, 58.25);
        bezierVertex(47.78, 58.5, 47.51, 58.76, 47.25, 59.02);
        bezierVertex(46.99, 59.28, 46.74, 59.54, 46.51, 59.79);
        bezierVertex(46.28, 60.03, 45.72, 60.66, 44.83, 61.68);
        bezierVertex(43.94, 62.7, 43.28, 63.46, 42.85, 63.96);
        bezierVertex(42.42, 64.46, 42.1, 64.84, 41.88, 65.09);
        bezierVertex(41.66, 65.34, 41.46, 65.56, 41.28, 65.75);
        bezierVertex(41.11, 65.95, 40.76, 66.32, 40.24, 66.86);
        bezierVertex(39.72, 67.41, 39.36, 67.78, 39.15, 67.99);
        bezierVertex(38.95, 68.19, 38.62, 68.5, 38.17, 68.91);
        bezierVertex(37.72, 69.31, 37.26, 69.71, 36.78, 70.1);
        bezierVertex(36.31, 70.5, 35.87, 70.84, 35.48, 71.12);
        bezierVertex(35.08, 71.41, 34.79, 71.62, 34.58, 71.75);
        bezierVertex(34.38, 71.88, 34.04, 72.08, 33.58, 72.34);
        bezierVertex(33.11, 72.6, 32.77, 72.78, 32.58, 72.88);
        bezierVertex(32.38, 72.97, 32.04, 73.11, 31.58, 73.3);
        bezierVertex(31.11, 73.49, 30.49, 73.68, 29.71, 73.88);
        bezierVertex(28.94, 74.09, 28.35, 74.21, 27.96, 74.27);
        bezierVertex(27.57, 74.32, 26.98, 74.34, 26.2, 74.34);
        bezierVertex(25.42, 74.34, 24.85, 74.31, 24.49, 74.26);
        bezierVertex(24.14, 74.21, 23.72, 74.13, 23.24, 74.01);
        bezierVertex(22.76, 73.88, 22.38, 73.77, 22.1, 73.66);
        bezierVertex(21.82, 73.55, 21.59, 73.46, 21.44, 73.39);
        bezierVertex(21.28, 73.31, 21.09, 73.22, 20.89, 73.11);
        bezierVertex(20.69, 73, 20.46, 72.85, 20.19, 72.67);
        bezierVertex(19.93, 72.49, 19.6, 72.22, 19.2, 71.87);
        bezierVertex(18.81, 71.52, 18.5, 71.21, 18.27, 70.94);
        bezierVertex(18.05, 70.67, 17.81, 70.35, 17.57, 69.97);
        bezierVertex(17.33, 69.6, 17.09, 69.13, 16.84, 68.57);
        bezierVertex(16.59, 68, 16.42, 67.56, 16.33, 67.25);
        bezierVertex(16.24, 66.94, 16.16, 66.58, 16.08, 66.17);
        bezierVertex(16.01, 65.75, 15.96, 65.32, 15.93, 64.87);
        bezierVertex(15.9, 64.42, 15.89, 64.06, 15.9, 63.8);
        bezierVertex(15.91, 63.53, 15.93, 63.23, 15.97, 62.9);
        bezierVertex(16.01, 62.57, 16.07, 62.18, 16.16, 61.75);
        bezierVertex(16.24, 61.32, 16.35, 60.87, 16.48, 60.41);
        bezierVertex(16.61, 59.94, 16.75, 59.51, 16.89, 59.09);
        bezierVertex(17.04, 58.68, 17.21, 58.25, 17.4, 57.81);
        bezierVertex(17.59, 57.36, 17.77, 56.96, 17.94, 56.61);
        bezierVertex(18.11, 56.25, 18.48, 55.58, 19.03, 54.59);
        bezierVertex(19.58, 53.6, 19.92, 53.01, 20.03, 52.83);
        bezierVertex(20.14, 52.65, 20.43, 52.21, 20.89, 51.52);
        bezierVertex(21.35, 50.82, 21.66, 50.38, 21.8, 50.18);
        bezierVertex(21.94, 49.98, 22.21, 49.61, 22.61, 49.08);
        bezierVertex(23, 48.55, 23.3, 48.15, 23.5, 47.89);
        bezierVertex(23.7, 47.64, 23.9, 47.39, 24.08, 47.17);
        bezierVertex(24.26, 46.94, 24.51, 46.62, 24.84, 46.21);
        bezierVertex(25.18, 45.8, 25.63, 45.24, 26.2, 44.53);
        bezierVertex(26.77, 43.82, 27.24, 43.25, 27.59, 42.81);
        bezierVertex(27.94, 42.38, 28.25, 42, 28.51, 41.67);
        bezierVertex(28.77, 41.34, 29.1, 40.9, 29.51, 40.36);
        bezierVertex(29.92, 39.82, 30.27, 39.35, 30.55, 38.96);
        bezierVertex(30.83, 38.58, 31.06, 38.26, 31.24, 38.01);
        bezierVertex(31.42, 37.77, 31.74, 37.33, 32.19, 36.69);
        bezierVertex(32.64, 36.05, 33.18, 35.29, 33.81, 34.41);
        bezierVertex(34.43, 33.53, 34.88, 32.9, 35.17, 32.51);
        bezierVertex(35.45, 32.11, 35.81, 31.61, 36.26, 31.01);
        bezierVertex(36.7, 30.41, 37.39, 29.51, 38.33, 28.32);
        bezierVertex(39.28, 27.13, 40.1, 26.15, 40.82, 25.37);
        bezierVertex(41.53, 24.59, 42.19, 23.93, 42.8, 23.4);
        bezierVertex(43.41, 22.86, 43.95, 22.44, 44.41, 22.12);
        bezierVertex(44.87, 21.8, 45.24, 21.57, 45.5, 21.42);
        bezierVertex(45.77, 21.27, 46.05, 21.13, 46.34, 21);
        bezierVertex(46.62, 20.87, 46.84, 20.78, 46.99, 20.73);
        bezierVertex(47.13, 20.67, 47.29, 20.62, 47.47, 20.56);
        bezierVertex(47.65, 20.51, 48.06, 20.42, 48.7, 20.29);
        bezierVertex(49.34, 20.17, 50.13, 20.12, 51.08, 20.13);
        bezierVertex(52.03, 20.14, 52.69, 20.18, 53.08, 20.25);
        bezierVertex(53.47, 20.33, 53.86, 20.42, 54.25, 20.54);
        bezierVertex(54.64, 20.66, 55.09, 20.83, 55.6, 21.05);
        bezierVertex(56.11, 21.28, 56.48, 21.45, 56.71, 21.58);
        bezierVertex(56.94, 21.71, 57.18, 21.85, 57.43, 22.01);
        bezierVertex(57.69, 22.18, 57.93, 22.34, 58.17, 22.52);
        bezierVertex(58.41, 22.7, 58.82, 23.05, 59.4, 23.59);
        bezierVertex(59.99, 24.13, 60.37, 24.49, 60.54, 24.67);
        bezierVertex(60.71, 24.86, 60.94, 25.12, 61.22, 25.45);
        bezierVertex(61.5, 25.79, 61.98, 26.41, 62.66, 27.32);
        bezierVertex(63.33, 28.23, 64.03, 29.23, 64.75, 30.33);
        bezierVertex(65.47, 31.42, 66.04, 32.3, 66.47, 32.96);
        bezierVertex(66.9, 33.62, 67.19, 34.06, 67.35, 34.29);
        bezierVertex(67.5, 34.52, 67.81, 34.99, 68.3, 35.69);
        bezierVertex(68.79, 36.4, 69.13, 36.9, 69.34, 37.19);
        bezierVertex(69.55, 37.48, 69.92, 38.01, 70.47, 38.76);
        bezierVertex(71.02, 39.51, 71.47, 40.12, 71.83, 40.59);
        bezierVertex(72.18, 41.05, 72.67, 41.67, 73.28, 42.44);
        bezierVertex(73.9, 43.21, 74.5, 43.96, 75.08, 44.67);
        bezierVertex(75.67, 45.38, 76.34, 46.2, 77.09, 47.11);
        bezierVertex(77.85, 48.03, 78.37, 48.68, 78.67, 49.06);
        bezierVertex(78.97, 49.43, 79.32, 49.88, 79.72, 50.39);
        bezierVertex(80.12, 50.9, 80.66, 51.65, 81.33, 52.63);
        bezierVertex(82, 53.61, 82.48, 54.36, 82.77, 54.86);
        bezierVertex(83.05, 55.37, 83.3, 55.83, 83.5, 56.25);
        bezierVertex(83.7, 56.68, 83.88, 57.08, 84.03, 57.45);
        bezierVertex(84.18, 57.83, 84.33, 58.3, 84.49, 58.85);
        bezierVertex(84.65, 59.4, 84.77, 59.89, 84.85, 60.31);
        bezierVertex(84.92, 60.73, 84.97, 61.04, 85, 61.25);
        bezierVertex(85.02, 61.46, 85.04, 61.83, 85.05, 62.36);
        bezierVertex(85.07, 62.9, 85.04, 63.5, 84.97, 64.18);
        bezierVertex(84.9, 64.86, 84.79, 65.51, 84.63, 66.13);
        bezierVertex(84.48, 66.76, 84.33, 67.26, 84.18, 67.64);
        bezierVertex(84.03, 68.03, 83.72, 68.63, 83.24, 69.45);
        bezierVertex(82.76, 70.27, 82.36, 70.86, 82.05, 71.23);
        bezierVertex(81.74, 71.59, 81.44, 71.91, 81.16, 72.17);
        bezierVertex(80.88, 72.43, 80.57, 72.68, 80.23, 72.94);
        bezierVertex(79.88, 73.19, 79.53, 73.41, 79.17, 73.61);
        bezierVertex(78.81, 73.81, 78.41, 73.99, 77.96, 74.17);
        bezierVertex(77.51, 74.34, 77.13, 74.46, 76.81, 74.55);
        bezierVertex(76.49, 74.63, 76.18, 74.69, 75.9, 74.73);
        bezierVertex(75.61, 74.78, 75.25, 74.81, 74.82, 74.83);
        bezierVertex(74.38, 74.84, 73.98, 74.83, 73.6, 74.8);
        bezierVertex(73.23, 74.76, 72.93, 74.72, 72.7, 74.68);
        bezierVertex(72.46, 74.63, 72.19, 74.57, 71.88, 74.47);
        bezierVertex(71.57, 74.38, 71.32, 74.3, 71.12, 74.23);
        bezierVertex(70.93, 74.16, 70.76, 74.08, 70.6, 74.01);
        bezierVertex(70.45, 73.94, 70.28, 73.85, 70.08, 73.75);
        bezierVertex(69.88, 73.64, 69.6, 73.46, 69.23, 73.22);
        bezierVertex(68.86, 72.97, 68.42, 72.64, 67.92, 72.22);
        bezierVertex(67.42, 71.8, 66.91, 71.33, 66.38, 70.8);
        bezierVertex(65.86, 70.28, 65.41, 69.81, 65.04, 69.39);
        bezierVertex(64.67, 68.98, 64.27, 68.52, 63.83, 68);
        bezierVertex(63.39, 67.48, 62.92, 66.92, 62.42, 66.31);
        bezierVertex(61.91, 65.7, 61.43, 65.11, 60.96, 64.54);
        bezierVertex(60.49, 63.97, 59.97, 63.35, 59.4, 62.68);
        bezierVertex(58.83, 62.01, 58.35, 61.44, 57.94, 60.99);
        bezierVertex(57.54, 60.53, 57.22, 60.17, 56.99, 59.92);
        bezierVertex(56.75, 59.66, 56.51, 59.41, 56.25, 59.15);
        bezierVertex(56, 58.9, 55.74, 58.65, 55.47, 58.41);
        bezierVertex(55.21, 58.18, 55.01, 58, 54.88, 57.9);
        bezierVertex(54.75, 57.79, 54.58, 57.66, 54.38, 57.51);
        bezierVertex(54.17, 57.36, 54, 57.23, 53.86, 57.14);
        bezierVertex(53.72, 57.06, 53.46, 56.93, 53.08, 56.77);
        bezierVertex(52.7, 56.61, 52.38, 56.5, 52.14, 56.45);
        bezierVertex(52.03, 56.44, 51.91, 56.43, 51.77, 56.43);

endShape();

pop();
}

function mentonTransitionRedescribe(xloc,yloc, rotation) {

 push();
     translate(xloc+24,yloc);
     rotate(PI/2+radians(rotation));
     scale(0.5);
fill(ctransitionBadgesBlueBG);
noStroke();
beginShape();
        vertex(-6.36, 47.83);
        bezierVertex(-23.08, 47.79, -32.13, 47.75, -33.51, 47.69);
        bezierVertex(-34.89, 47.62, -35.93, 47.56, -36.63, 47.48);
        bezierVertex(-37.33, 47.4, -37.91, 47.33, -38.36, 47.25);
        bezierVertex(-38.82, 47.17, -39.24, 47.09, -39.62, 47.01);
        bezierVertex(-39.99, 46.92, -40.33, 46.84, -40.63, 46.76);
        bezierVertex(-40.93, 46.67, -41.21, 46.59, -41.46, 46.5);
        bezierVertex(-41.72, 46.41, -42.04, 46.29, -42.43, 46.14);
        bezierVertex(-42.82, 45.98, -43.3, 45.74, -43.88, 45.43);
        bezierVertex(-44.46, 45.12, -44.83, 44.91, -45, 44.81);
        bezierVertex(-45.17, 44.7, -45.34, 44.58, -45.52, 44.46);
        bezierVertex(-45.7, 44.34, -45.9, 44.19, -46.11, 44.04);
        bezierVertex(-46.32, 43.88, -46.54, 43.7, -46.78, 43.51);
        bezierVertex(-47.03, 43.2, -47.25, 42.91, -47.43, 42.66);
        bezierVertex(-47.61, 42.41, -47.77, 42.18, -47.91, 41.96);
        bezierVertex(-48.05, 41.74, -48.29, 41.3, -48.63, 40.64);
        bezierVertex(-48.97, 39.97, -49.2, 39.49, -49.32, 39.17);
        bezierVertex(-49.44, 38.86, -49.56, 38.51, -49.68, 38.13);
        bezierVertex(-49.79, 37.75, -49.9, 37.31, -50.01, 36.82);
        bezierVertex(-50.12, 36.33, -50.22, 35.78, -50.31, 35.19);
        bezierVertex(-50.41, 34.59, -50.48, 33.94, -50.54, 33.22);
        bezierVertex(-50.61, 32.51, -50.67, 30.49, -50.72, 27.16);
        bezierVertex(-50.78, 23.84, -50.81, 14.27, -50.8, -1.55);
        bezierVertex(-50.8, -17.37, -50.78, -25.98, -50.76, -27.38);
        bezierVertex(-50.73, -28.78, -50.69, -29.89, -50.65, -30.7);
        bezierVertex(-50.61, -31.51, -50.57, -32.11, -50.53, -32.51);
        bezierVertex(-50.49, -32.91, -50.45, -33.3, -50.41, -33.69);
        bezierVertex(-50.36, -34.07, -50.31, -34.44, -50.25, -34.8);
        bezierVertex(-50.2, -35.15, -50.14, -35.5, -50.07, -35.83);
        bezierVertex(-50.01, -36.16, -49.94, -36.48, -49.87, -36.79);
        bezierVertex(-49.79, -37.1, -49.72, -37.41, -49.63, -37.7);
        bezierVertex(-49.55, -37.99, -49.47, -38.27, -49.38, -38.53);
        bezierVertex(-49.3, -38.79, -49.08, -39.32, -48.73, -40.12);
        bezierVertex(-48.37, -40.93, -48.08, -41.52, -47.86, -41.89);
        bezierVertex(-47.63, -42.27, -47.39, -42.63, -47.14, -42.97);
        bezierVertex(-46.89, -43.31, -46.63, -43.64, -46.36, -43.95);
        bezierVertex(-46.14, -44.11, -45.9, -44.28, -45.65, -44.44);
        bezierVertex(-45.4, -44.6, -45.14, -44.75, -44.87, -44.9);
        bezierVertex(-44.6, -45.05, -44.32, -45.19, -44.03, -45.32);
        bezierVertex(-43.74, -45.45, -43.23, -45.65, -42.52, -45.9);
        bezierVertex(-41.8, -46.15, -41.27, -46.31, -40.93, -46.4);
        bezierVertex(-40.59, -46.48, -40.16, -46.58, -39.64, -46.68);
        bezierVertex(-39.11, -46.78, -38.54, -46.87, -37.92, -46.96);
        bezierVertex(-37.3, -47.04, -36.65, -47.11, -35.99, -47.17);
        bezierVertex(-35.33, -47.23, -34.6, -47.28, -33.8, -47.32);
        bezierVertex(-33.01, -47.35, -29.9, -47.41, -24.46, -47.47);
        bezierVertex(5.55, -47.47, 21.61, -47.45, 23.74, -47.43);
        bezierVertex(25.86, -47.4, 27.5, -47.36, 28.66, -47.31);
        bezierVertex(29.81, -47.26, 30.63, -47.21, 31.1, -47.18);
        bezierVertex(31.57, -47.14, 32, -47.11, 32.38, -47.07);
        bezierVertex(32.76, -47.03, 33.17, -46.98, 33.61, -46.93);
        bezierVertex(34.05, -46.87, 34.45, -46.82, 34.81, -46.76);
        bezierVertex(35.18, -46.71, 35.58, -46.64, 36.01, -46.56);
        bezierVertex(36.44, -46.48, 36.98, -46.37, 37.62, -46.21);
        bezierVertex(38.27, -46.06, 38.92, -45.88, 39.58, -45.68);
        bezierVertex(40.23, -45.48, 40.8, -45.28, 41.28, -45.09);
        bezierVertex(41.75, -44.9, 42.24, -44.67, 42.74, -44.41);
        bezierVertex(43.23, -44.14, 43.75, -43.83, 44.27, -43.47);
        bezierVertex(44.57, -43.12, 44.85, -42.76, 45.11, -42.39);
        bezierVertex(45.38, -42.02, 45.6, -41.69, 45.78, -41.39);
        bezierVertex(45.95, -41.1, 46.13, -40.78, 46.31, -40.44);
        bezierVertex(46.48, -40.1, 46.77, -39.45, 47.17, -38.48);
        bezierVertex(47.57, -37.51, 47.83, -36.84, 47.95, -36.47);
        bezierVertex(48.08, -36.1, 48.2, -35.7, 48.32, -35.28);
        bezierVertex(48.44, -34.86, 48.56, -34.41, 48.68, -33.93);
        bezierVertex(48.79, -33.46, 48.9, -32.95, 49, -32.42);
        bezierVertex(49.1, -31.88, 49.19, -31.35, 49.27, -30.83);
        bezierVertex(49.34, -30.31, 49.4, -29.79, 49.46, -29.28);
        bezierVertex(49.51, -28.77, 49.56, -28.04, 49.62, -27.1);
        bezierVertex(49.68, -26.15, 49.73, -25.16, 49.76, -24.13);
        bezierVertex(49.78, -23.09, 49.8, -16.17, 49.82, -3.37);
        bezierVertex(49.83, 9.43, 49.83, 16.66, 49.82, 18.31);
        bezierVertex(49.82, 19.96, 49.8, 21.14, 49.79, 21.86);
        bezierVertex(49.78, 22.57, 49.76, 23.32, 49.73, 24.11);
        bezierVertex(49.71, 24.9, 49.68, 25.61, 49.64, 26.25);
        bezierVertex(49.6, 26.89, 49.56, 27.47, 49.51, 28);
        bezierVertex(49.46, 28.53, 49.39, 29.11, 49.31, 29.75);
        bezierVertex(49.22, 30.38, 49.13, 30.94, 49.05, 31.43);
        bezierVertex(48.96, 31.91, 48.86, 32.36, 48.77, 32.78);
        bezierVertex(48.67, 33.2, 48.57, 33.58, 48.48, 33.93);
        bezierVertex(48.38, 34.28, 48.27, 34.65, 48.15, 35.03);
        bezierVertex(48.03, 35.41, 47.89, 35.8, 47.75, 36.2);
        bezierVertex(47.6, 36.6, 47.34, 37.22, 46.96, 38.06);
        bezierVertex(46.59, 38.89, 46.24, 39.6, 45.92, 40.17);
        bezierVertex(45.6, 40.74, 45.32, 41.19, 45.09, 41.54);
        bezierVertex(44.86, 41.88, 44.52, 42.32, 44.09, 42.85);
        bezierVertex(43.76, 43.1, 43.46, 43.31, 43.21, 43.47);
        bezierVertex(42.95, 43.64, 42.6, 43.85, 42.16, 44.09);
        bezierVertex(41.72, 44.33, 41.31, 44.55, 40.91, 44.73);
        bezierVertex(40.52, 44.92, 40.06, 45.12, 39.55, 45.32);
        bezierVertex(39.04, 45.53, 38.54, 45.72, 38.05, 45.88);
        bezierVertex(37.56, 46.05, 37.07, 46.2, 36.59, 46.33);
        bezierVertex(36.11, 46.47, 35.64, 46.59, 35.17, 46.69);
        bezierVertex(34.71, 46.8, 34.26, 46.89, 33.82, 46.97);
        bezierVertex(33.38, 47.06, 32.96, 47.13, 32.57, 47.18);
        bezierVertex(32.18, 47.24, 31.72, 47.3, 31.19, 47.36);
        bezierVertex(30.67, 47.42, 30.18, 47.47, 29.73, 47.51);
        bezierVertex(29.27, 47.55, 28.49, 47.59, 27.37, 47.65);
        bezierVertex(26.26, 47.7, 24.79, 47.74, 22.97, 47.77);
        bezierVertex(21.15, 47.8, 7.61, 47.82, -17.66, 47.83);
endShape();


	fill(ctransitionBadgesWhite);
beginShape();
        vertex(-3.08, 29.21);
        bezierVertex(-3.26, 29.27, -3.57, 29.36, -4.03, 29.48);
        bezierVertex(-4.48, 29.6, -4.72, 29.66, -4.74, 29.66);
        bezierVertex(-4.76, 29.67, -5.03, 29.72, -5.56, 29.81);
        bezierVertex(-6.1, 29.91, -6.54, 29.98, -6.9, 30.02);
        bezierVertex(-7.25, 30.06, -7.6, 30.09, -7.96, 30.11);
        bezierVertex(-8.31, 30.13, -8.63, 30.15, -8.92, 30.16);
        bezierVertex(-9.21, 30.16, -9.53, 30.16, -9.87, 30.16);
        bezierVertex(-10.22, 30.15, -10.45, 30.14, -10.58, 30.13);
        bezierVertex(-10.71, 30.13, -10.9, 30.11, -11.13, 30.09);
        bezierVertex(-11.36, 30.06, -11.66, 30.03, -12.04, 29.98);
        bezierVertex(-12.41, 29.93, -12.79, 29.87, -13.17, 29.8);
        bezierVertex(-13.56, 29.73, -13.94, 29.65, -14.34, 29.56);
        bezierVertex(-14.73, 29.47, -15.08, 29.39, -15.38, 29.31);
        bezierVertex(-15.68, 29.23, -15.98, 29.14, -16.29, 29.04);
        bezierVertex(-16.6, 28.95, -16.93, 28.84, -17.26, 28.72);
        bezierVertex(-17.59, 28.6, -17.88, 28.49, -18.12, 28.39);
        bezierVertex(-18.37, 28.29, -18.63, 28.18, -18.9, 28.06);
        bezierVertex(-19.17, 27.95, -19.39, 27.85, -19.57, 27.78);
        bezierVertex(-19.74, 27.7, -19.88, 27.64, -19.99, 27.58);
        bezierVertex(-20.1, 27.53, -20.33, 27.42, -20.67, 27.24);
        bezierVertex(-21.01, 27.06, -21.32, 26.89, -21.6, 26.74);
        bezierVertex(-21.88, 26.58, -22.18, 26.4, -22.51, 26.19);
        bezierVertex(-22.83, 25.99, -23.11, 25.82, -23.33, 25.67);
        bezierVertex(-23.55, 25.53, -23.72, 25.41, -23.85, 25.32);
        bezierVertex(-23.97, 25.24, -24.12, 25.12, -24.31, 24.97);
        bezierVertex(-24.5, 24.83, -24.73, 24.65, -24.98, 24.44);
        bezierVertex(-25.24, 24.23, -25.47, 24.03, -25.7, 23.83);
        bezierVertex(-25.92, 23.64, -26.13, 23.44, -26.32, 23.26);
        bezierVertex(-26.51, 23.08, -26.72, 22.86, -26.95, 22.61);
        bezierVertex(-27.18, 22.37, -27.43, 22.09, -27.69, 21.78);
        bezierVertex(-27.95, 21.48, -28.22, 21.15, -28.48, 20.8);
        bezierVertex(-28.74, 20.45, -29, 20.08, -29.27, 19.7);
        bezierVertex(-29.52, 19.31, -29.74, 18.98, -29.91, 18.71);
        bezierVertex(-30.07, 18.44, -30.22, 18.2, -30.34, 17.98);
        bezierVertex(-30.47, 17.75, -30.57, 17.57, -30.64, 17.43);
        bezierVertex(-30.72, 17.29, -30.85, 17.03, -31.03, 16.65);
        bezierVertex(-31.22, 16.27, -31.37, 15.94, -31.49, 15.67);
        bezierVertex(-31.61, 15.4, -31.73, 15.11, -31.85, 14.82);
        bezierVertex(-31.97, 14.53, -32.06, 14.3, -32.13, 14.14);
        bezierVertex(-32.2, 13.97, -32.24, 13.85, -32.27, 13.79);
        bezierVertex(-32.29, 13.73, -32.38, 13.45, -32.55, 12.95);
        bezierVertex(-32.72, 12.46, -32.86, 12, -32.98, 11.59);
        bezierVertex(-33.1, 11.17, -33.21, 10.76, -33.3, 10.35);
        bezierVertex(-33.4, 9.94, -33.49, 9.58, -33.55, 9.28);
        bezierVertex(-33.61, 8.98, -33.66, 8.77, -33.68, 8.66);
        bezierVertex(-33.7, 8.55, -33.73, 8.38, -33.77, 8.16);
        bezierVertex(-33.8, 7.94, -33.85, 7.65, -33.91, 7.28);
        bezierVertex(-34.03, 6.56, -34.11, 6, -34.16, 5.62);
        bezierVertex(-34.21, 5.23, -34.25, 4.9, -34.28, 4.61);
        bezierVertex(-34.3, 4.32, -34.33, 4.03, -34.34, 3.74);
        bezierVertex(-34.36, 3.45, -34.38, 3.11, -34.4, 2.72);
        bezierVertex(-34.42, 2.33, -34.43, 1.94, -34.43, 1.53);
        bezierVertex(-34.44, 1.13, -34.44, 0.72, -34.43, 0.3);
        bezierVertex(-34.41, -0.54, -34.39, -1.12, -34.36, -1.45);
        bezierVertex(-34.34, -1.77, -34.31, -2.1, -34.27, -2.44);
        bezierVertex(-34.23, -2.77, -34.17, -3.16, -34.1, -3.61);
        bezierVertex(-34.02, -4.05, -33.95, -4.41, -33.89, -4.68);
        bezierVertex(-33.84, -4.96, -33.77, -5.24, -33.69, -5.52);
        bezierVertex(-33.62, -5.8, -33.56, -6.04, -33.5, -6.23);
        bezierVertex(-33.44, -6.42, -33.35, -6.69, -33.22, -7.04);
        bezierVertex(-33.1, -7.39, -32.97, -7.75, -32.82, -8.11);
        bezierVertex(-32.67, -8.47, -32.55, -8.75, -32.46, -8.95);
        bezierVertex(-32.37, -9.14, -32.3, -9.31, -32.23, -9.45);
        bezierVertex(-32.16, -9.6, -32.03, -9.88, -31.82, -10.29);
        bezierVertex(-31.62, -10.7, -31.48, -10.97, -31.41, -11.1);
        bezierVertex(-31.34, -11.23, -31.18, -11.5, -30.94, -11.91);
        bezierVertex(-30.7, -12.31, -30.56, -12.55, -30.53, -12.62);
        bezierVertex(-30.49, -12.68, -30.43, -12.77, -30.35, -12.9);
        bezierVertex(-30.27, -13.02, -30.17, -13.16, -30.05, -13.33);
        bezierVertex(-29.93, -13.5, -29.82, -13.65, -29.73, -13.78);
        bezierVertex(-29.63, -13.91, -29.52, -14.06, -29.38, -14.24);
        bezierVertex(-29.25, -14.41, -29.14, -14.55, -29.07, -14.66);
        bezierVertex(-28.99, -14.77, -28.91, -14.88, -28.83, -15);
        bezierVertex(-28.75, -15.13, -28.6, -15.38, -28.39, -15.75);
        bezierVertex(-28.18, -16.13, -28.06, -16.38, -28.02, -16.49);
        bezierVertex(-27.98, -16.6, -27.9, -16.89, -27.8, -17.35);
        bezierVertex(-27.84, -17.77, -27.95, -18.13, -28.15, -18.44);
        bezierVertex(-28.34, -18.75, -28.56, -19, -28.79, -19.19);
        bezierVertex(-29.03, -19.38, -29.17, -19.48, -29.2, -19.5);
        bezierVertex(-29.23, -19.52, -29.46, -19.65, -29.89, -19.88);
        bezierVertex(-30.32, -20.11, -30.7, -20.33, -31.04, -20.54);
        bezierVertex(-31.37, -20.75, -31.67, -20.99, -31.95, -21.27);
        bezierVertex(-32.22, -21.55, -32.38, -21.72, -32.41, -21.78);
        bezierVertex(-32.44, -21.84, -32.52, -22.03, -32.64, -22.37);
        bezierVertex(-32.65, -22.41, -32.63, -22.58, -32.59, -22.88);
        bezierVertex(-32.55, -23.17, -32.5, -23.37, -32.44, -23.47);
        bezierVertex(-32.38, -23.57, -32.2, -23.77, -31.88, -24.07);
        bezierVertex(-31.56, -24.37, -31.32, -24.55, -31.15, -24.62);
        bezierVertex(-30.99, -24.69, -30.85, -24.74, -30.73, -24.79);
        bezierVertex(-30.61, -24.83, -30.45, -24.88, -30.26, -24.94);
        bezierVertex(-30.07, -25, -29.82, -25.07, -29.51, -25.14);
        bezierVertex(-29.19, -25.21, -28.83, -25.28, -28.43, -25.35);
        bezierVertex(-28.02, -25.42, -27.69, -25.47, -27.43, -25.52);
        bezierVertex(-27.16, -25.56, -26.9, -25.6, -26.63, -25.65);
        bezierVertex(-26.36, -25.7, -26.07, -25.75, -25.75, -25.82);
        bezierVertex(-25.43, -25.88, -25.1, -25.96, -24.76, -26.04);
        bezierVertex(-24.42, -26.13, -24.22, -26.19, -24.15, -26.2);
        bezierVertex(-24.09, -26.22, -23.91, -26.28, -23.61, -26.38);
        bezierVertex(-23.31, -26.48, -23.02, -26.58, -22.73, -26.68);
        bezierVertex(-22.45, -26.79, -22.12, -26.92, -21.74, -27.07);
        bezierVertex(-21.36, -27.23, -21, -27.37, -20.64, -27.52);
        bezierVertex(-20.29, -27.67, -19.94, -27.81, -19.6, -27.95);
        bezierVertex(-19.25, -28.08, -18.94, -28.21, -18.65, -28.32);
        bezierVertex(-18.36, -28.43, -18.04, -28.54, -17.69, -28.66);
        bezierVertex(-17.34, -28.77, -16.99, -28.87, -16.61, -28.96);
        bezierVertex(-16.24, -29.05, -15.97, -29.11, -15.79, -29.14);
        bezierVertex(-15.61, -29.17, -15.26, -29.19, -14.74, -29.2);
        bezierVertex(-14.22, -29.21, -13.9, -29.2, -13.79, -29.18);
        bezierVertex(-13.68, -29.15, -13.55, -29.11, -13.4, -29.06);
        bezierVertex(-13.25, -29.01, -13.12, -28.94, -13.01, -28.86);
        bezierVertex(-12.9, -28.79, -12.77, -28.67, -12.64, -28.53);
        bezierVertex(-12.62, -28.51, -12.58, -28.42, -12.52, -28.28);
        bezierVertex(-12.45, -28.13, -12.41, -28.01, -12.39, -27.89);
        bezierVertex(-12.36, -27.77, -12.36, -27.6, -12.37, -27.36);
        bezierVertex(-12.38, -27.13, -12.42, -26.81, -12.49, -26.4);
        bezierVertex(-12.56, -25.99, -12.62, -25.64, -12.67, -25.34);
        bezierVertex(-12.73, -25.05, -12.79, -24.77, -12.85, -24.51);
        bezierVertex(-12.91, -24.26, -12.97, -23.93, -13.05, -23.54);
        bezierVertex(-13.12, -23.15, -13.2, -22.7, -13.27, -22.19);
        bezierVertex(-13.34, -21.68, -13.38, -21.33, -13.4, -21.14);
        bezierVertex(-13.42, -20.94, -13.45, -20.67, -13.48, -20.32);
        bezierVertex(-13.51, -19.97, -13.54, -19.66, -13.56, -19.39);
        bezierVertex(-13.57, -19.12, -13.59, -18.83, -13.6, -18.53);
        bezierVertex(-13.62, -18.22, -13.63, -18.01, -13.63, -17.91);
        bezierVertex(-13.63, -17.8, -13.64, -17.5, -13.66, -17);
        bezierVertex(-13.68, -16.51, -13.69, -16.16, -13.7, -15.97);
        bezierVertex(-13.7, -15.78, -13.71, -15.55, -13.72, -15.3);
        bezierVertex(-13.73, -15.05, -13.76, -14.72, -13.8, -14.31);
        bezierVertex(-13.84, -13.89, -13.89, -13.33, -13.95, -12.61);
        bezierVertex(-13.99, -12.41, -14.04, -12.15, -14.11, -11.85);
        bezierVertex(-14.17, -11.55, -14.26, -11.2, -14.38, -10.81);
        bezierVertex(-14.5, -10.42, -14.6, -10.11, -14.7, -9.88);
        bezierVertex(-14.8, -9.65, -14.89, -9.47, -14.96, -9.34);
        bezierVertex(-15.04, -9.21, -15.1, -9.11, -15.13, -9.04);
        bezierVertex(-15.17, -8.98, -15.24, -8.88, -15.33, -8.75);
        bezierVertex(-15.42, -8.62, -15.61, -8.45, -15.88, -8.25);
        bezierVertex(-16.16, -8.04, -16.4, -7.91, -16.63, -7.85);
        bezierVertex(-16.8, -7.85, -17.01, -7.91, -17.26, -8.02);
        bezierVertex(-17.52, -8.13, -17.74, -8.26, -17.94, -8.41);
        bezierVertex(-18.15, -8.56, -18.36, -8.75, -18.6, -8.98);
        bezierVertex(-18.84, -9.21, -19.04, -9.41, -19.23, -9.59);
        bezierVertex(-19.41, -9.77, -19.59, -9.95, -19.78, -10.12);
        bezierVertex(-19.97, -10.3, -20.27, -10.49, -20.67, -10.69);
        bezierVertex(-21.08, -10.9, -21.31, -11, -21.38, -11.01);
        bezierVertex(-21.46, -11.02, -21.53, -11.01, -21.6, -11);
        bezierVertex(-21.67, -10.98, -21.77, -10.96, -21.88, -10.93);
        bezierVertex(-22, -10.9, -22.14, -10.84, -22.3, -10.76);
        bezierVertex(-22.47, -10.67, -22.63, -10.57, -22.77, -10.45);
        bezierVertex(-22.91, -10.33, -23.06, -10.17, -23.23, -9.97);
        bezierVertex(-23.4, -9.77, -23.56, -9.55, -23.71, -9.32);
        bezierVertex(-23.86, -9.09, -24.03, -8.78, -24.22, -8.4);
        bezierVertex(-24.41, -8.02, -24.56, -7.7, -24.68, -7.45);
        bezierVertex(-24.79, -7.19, -24.91, -6.93, -25.02, -6.67);
        bezierVertex(-25.12, -6.41, -25.22, -6.18, -25.29, -5.98);
        bezierVertex(-25.37, -5.79, -25.44, -5.59, -25.51, -5.4);
        bezierVertex(-25.58, -5.21, -25.65, -5.02, -25.7, -4.84);
        bezierVertex(-25.76, -4.66, -25.83, -4.43, -25.9, -4.15);
        bezierVertex(-25.98, -3.87, -26.07, -3.5, -26.17, -3.06);
        bezierVertex(-26.38, -2.2, -26.51, -1.6, -26.55, -1.27);
        bezierVertex(-26.59, -0.94, -26.62, -0.66, -26.64, -0.41);
        bezierVertex(-26.66, -0.16, -26.68, 0.11, -26.69, 0.39);
        bezierVertex(-26.7, 0.67, -26.71, 0.92, -26.71, 1.14);
        bezierVertex(-26.71, 1.35, -26.7, 1.54, -26.69, 1.69);
        bezierVertex(-26.67, 2, -26.65, 2.26, -26.63, 2.47);
        bezierVertex(-26.61, 2.67, -26.57, 2.95, -26.51, 3.3);
        bezierVertex(-26.45, 3.65, -26.39, 3.95, -26.33, 4.21);
        bezierVertex(-26.27, 4.46, -26.21, 4.72, -26.13, 4.99);
        bezierVertex(-26.06, 5.26, -25.98, 5.51, -25.91, 5.73);
        bezierVertex(-25.85, 5.96, -25.77, 6.2, -25.67, 6.47);
        bezierVertex(-25.58, 6.74, -25.48, 7.02, -25.36, 7.32);
        bezierVertex(-25.25, 7.62, -25.14, 7.92, -25.02, 8.21);
        bezierVertex(-24.9, 8.5, -24.77, 8.82, -24.63, 9.15);
        bezierVertex(-24.48, 9.49, -24.31, 9.89, -24.12, 10.34);
        bezierVertex(-23.92, 10.79, -23.77, 11.11, -23.68, 11.31);
        bezierVertex(-23.59, 11.51, -23.49, 11.71, -23.39, 11.91);
        bezierVertex(-23.29, 12.11, -23.18, 12.35, -23.05, 12.62);
        bezierVertex(-22.92, 12.88, -22.8, 13.13, -22.69, 13.34);
        bezierVertex(-22.59, 13.56, -22.47, 13.78, -22.34, 14.02);
        bezierVertex(-22.21, 14.27, -22.02, 14.57, -21.79, 14.94);
        bezierVertex(-21.55, 15.31, -21.35, 15.6, -21.19, 15.82);
        bezierVertex(-21.03, 16.03, -20.8, 16.3, -20.52, 16.62);
        bezierVertex(-20.23, 16.94, -19.96, 17.2, -19.72, 17.41);
        bezierVertex(-19.49, 17.62, -19.25, 17.81, -19.02, 17.98);
        bezierVertex(-18.9, 18.07, -18.73, 18.18, -18.5, 18.32);
        bezierVertex(-18.26, 18.46, -17.97, 18.62, -17.61, 18.8);
        bezierVertex(-17.25, 18.99, -16.9, 19.15, -16.55, 19.3);
        bezierVertex(-16.21, 19.44, -15.88, 19.56, -15.55, 19.66);
        bezierVertex(-15.23, 19.77, -14.94, 19.85, -14.67, 19.92);
        bezierVertex(-14.4, 19.99, -14.11, 20.06, -13.8, 20.12);
        bezierVertex(-13.49, 20.19, -13.17, 20.25, -12.82, 20.31);
        bezierVertex(-12.48, 20.38, -12.14, 20.43, -11.81, 20.48);
        bezierVertex(-11.48, 20.53, -11.13, 20.59, -10.75, 20.64);
        bezierVertex(-10.37, 20.7, -10.06, 20.75, -9.83, 20.79);
        bezierVertex(-9.6, 20.82, -9.36, 20.87, -9.13, 20.91);
        bezierVertex(-8.9, 20.96, -8.62, 21.02, -8.31, 21.08);
        bezierVertex(-8, 21.15, -7.72, 21.21, -7.49, 21.27);
        bezierVertex(-7.26, 21.33, -7.03, 21.39, -6.8, 21.46);
        bezierVertex(-6.57, 21.53, -6.34, 21.61, -6.12, 21.7);
        bezierVertex(-5.89, 21.79, -5.62, 21.92, -5.31, 22.07);
        bezierVertex(-4.99, 22.23, -4.71, 22.4, -4.45, 22.57);
        bezierVertex(-4.19, 22.75, -3.97, 22.92, -3.81, 23.07);
        bezierVertex(-3.64, 23.22, -3.52, 23.34, -3.45, 23.42);
        bezierVertex(-3.38, 23.5, -3.31, 23.57, -3.26, 23.64);
        bezierVertex(-3.2, 23.71, -3.12, 23.82, -3.02, 23.98);
        bezierVertex(-2.92, 24.14, -2.82, 24.32, -2.72, 24.52);
        vertex(-2.6, 24.82);
        bezierVertex(-2.54, 24.93, -2.51, 25, -2.49, 25.04);
        bezierVertex(-2.47, 25.07, -2.45, 25.12, -2.43, 25.2);
        bezierVertex(-2.41, 25.27, -2.39, 25.33, -2.38, 25.38);
        bezierVertex(-2.38, 25.43, -2.36, 25.5, -2.35, 25.6);
        bezierVertex(-2.33, 25.69, -2.31, 25.8, -2.29, 25.91);
        bezierVertex(-2.29, 25.97, -2.3, 26.22, -2.33, 26.66);
        bezierVertex(-2.56, 27.51, -2.81, 28.36, -3.08, 29.21);
endShape();

beginShape();
        vertex(-0.13, -29.41);
        bezierVertex(0.04, -29.46, 0.36, -29.55, 0.81, -29.67);
        bezierVertex(1.27, -29.79, 1.51, -29.85, 1.52, -29.86);
        bezierVertex(1.54, -29.86, 1.82, -29.91, 2.35, -30.01);
        bezierVertex(2.88, -30.11, 3.33, -30.17, 3.68, -30.21);
        bezierVertex(4.04, -30.25, 4.39, -30.29, 4.74, -30.31);
        bezierVertex(5.09, -30.33, 5.42, -30.34, 5.71, -30.35);
        bezierVertex(6, -30.36, 6.31, -30.36, 6.66, -30.35);
        bezierVertex(7, -30.34, 7.24, -30.34, 7.37, -30.33);
        bezierVertex(7.5, -30.32, 7.68, -30.3, 7.91, -30.28);
        bezierVertex(8.15, -30.26, 8.45, -30.22, 8.82, -30.17);
        bezierVertex(9.2, -30.13, 9.57, -30.07, 9.96, -30);
        bezierVertex(10.34, -29.93, 10.73, -29.85, 11.12, -29.76);
        bezierVertex(11.52, -29.67, 11.86, -29.58, 12.16, -29.5);
        bezierVertex(12.46, -29.42, 12.77, -29.33, 13.08, -29.24);
        bezierVertex(13.39, -29.14, 13.71, -29.03, 14.04, -28.91);
        bezierVertex(14.37, -28.79, 14.66, -28.68, 14.91, -28.58);
        bezierVertex(15.15, -28.48, 15.41, -28.37, 15.68, -28.26);
        bezierVertex(15.96, -28.14, 16.18, -28.04, 16.35, -27.97);
        bezierVertex(16.53, -27.9, 16.67, -27.83, 16.78, -27.78);
        bezierVertex(16.89, -27.73, 17.11, -27.61, 17.45, -27.44);
        bezierVertex(17.79, -27.26, 18.1, -27.09, 18.38, -26.93);
        bezierVertex(18.66, -26.77, 18.96, -26.59, 19.29, -26.39);
        bezierVertex(19.62, -26.19, 19.89, -26.01, 20.11, -25.87);
        bezierVertex(20.34, -25.72, 20.51, -25.61, 20.63, -25.52);
        bezierVertex(20.75, -25.43, 20.91, -25.31, 21.1, -25.17);
        bezierVertex(21.29, -25.02, 21.51, -24.84, 21.77, -24.64);
        bezierVertex(22.02, -24.43, 22.26, -24.22, 22.48, -24.03);
        bezierVertex(22.7, -23.83, 22.91, -23.64, 23.1, -23.45);
        bezierVertex(23.29, -23.27, 23.5, -23.05, 23.73, -22.81);
        bezierVertex(23.96, -22.56, 24.21, -22.29, 24.47, -21.98);
        bezierVertex(24.74, -21.67, 25, -21.34, 25.27, -20.99);
        bezierVertex(25.53, -20.65, 25.79, -20.28, 26.05, -19.89);
        bezierVertex(26.31, -19.5, 26.52, -19.17, 26.69, -18.91);
        bezierVertex(26.86, -18.64, 27, -18.39, 27.13, -18.17);
        bezierVertex(27.25, -17.95, 27.35, -17.77, 27.43, -17.63);
        bezierVertex(27.5, -17.49, 27.63, -17.22, 27.82, -16.84);
        bezierVertex(28, -16.46, 28.15, -16.14, 28.27, -15.86);
        bezierVertex(28.39, -15.59, 28.51, -15.31, 28.63, -15.02);
        bezierVertex(28.75, -14.73, 28.84, -14.5, 28.91, -14.33);
        bezierVertex(28.98, -14.16, 29.03, -14.05, 29.05, -13.98);
        bezierVertex(29.07, -13.92, 29.17, -13.64, 29.34, -13.15);
        bezierVertex(29.5, -12.65, 29.65, -12.2, 29.76, -11.78);
        bezierVertex(29.88, -11.37, 29.99, -10.96, 30.09, -10.55);
        bezierVertex(30.19, -10.14, 30.27, -9.78, 30.33, -9.48);
        bezierVertex(30.4, -9.17, 30.44, -8.96, 30.47, -8.85);
        bezierVertex(30.49, -8.74, 30.52, -8.57, 30.55, -8.36);
        bezierVertex(30.59, -8.13, 30.64, -7.84, 30.69, -7.48);
        bezierVertex(30.81, -6.75, 30.9, -6.2, 30.95, -5.81);
        bezierVertex(31, -5.43, 31.03, -5.09, 31.06, -4.8);
        bezierVertex(31.09, -4.51, 31.11, -4.22, 31.13, -3.93);
        bezierVertex(31.15, -3.64, 31.17, -3.3, 31.19, -2.91);
        bezierVertex(31.2, -2.53, 31.21, -2.13, 31.22, -1.73);
        bezierVertex(31.23, -1.32, 31.22, -0.91, 31.22, -0.49);
        bezierVertex(31.2, 0.35, 31.17, 0.93, 31.15, 1.25);
        bezierVertex(31.12, 1.58, 31.09, 1.91, 31.05, 2.24);
        bezierVertex(31.01, 2.58, 30.96, 2.97, 30.88, 3.41);
        bezierVertex(30.81, 3.85, 30.74, 4.21, 30.68, 4.49);
        bezierVertex(30.62, 4.76, 30.55, 5.04, 30.48, 5.32);
        bezierVertex(30.41, 5.61, 30.34, 5.84, 30.28, 6.03);
        bezierVertex(30.22, 6.23, 30.13, 6.5, 30.01, 6.85);
        bezierVertex(29.89, 7.2, 29.75, 7.55, 29.6, 7.92);
        bezierVertex(29.45, 8.28, 29.33, 8.56, 29.25, 8.75);
        bezierVertex(29.16, 8.95, 29.08, 9.12, 29.01, 9.26);
        bezierVertex(28.95, 9.41, 28.81, 9.68, 28.61, 10.09);
        bezierVertex(28.4, 10.5, 28.26, 10.77, 28.19, 10.91);
        bezierVertex(28.12, 11.04, 27.97, 11.31, 27.73, 11.71);
        bezierVertex(27.49, 12.12, 27.35, 12.36, 27.31, 12.42);
        bezierVertex(27.27, 12.49, 27.21, 12.58, 27.13, 12.7);
        bezierVertex(27.05, 12.82, 26.95, 12.97, 26.83, 13.14);
        bezierVertex(26.72, 13.31, 26.61, 13.45, 26.51, 13.58);
        bezierVertex(26.42, 13.71, 26.3, 13.87, 26.17, 14.04);
        bezierVertex(26.03, 14.22, 25.93, 14.36, 25.85, 14.46);
        bezierVertex(25.77, 14.57, 25.7, 14.69, 25.61, 14.81);
        bezierVertex(25.53, 14.93, 25.39, 15.18, 25.18, 15.56);
        bezierVertex(24.97, 15.94, 24.84, 16.18, 24.8, 16.3);
        bezierVertex(24.76, 16.41, 24.69, 16.7, 24.59, 17.16);
        bezierVertex(24.62, 17.57, 24.74, 17.93, 24.93, 18.24);
        bezierVertex(25.12, 18.55, 25.34, 18.8, 25.58, 18.99);
        bezierVertex(25.82, 19.18, 25.95, 19.29, 25.98, 19.31);
        bezierVertex(26.02, 19.33, 26.25, 19.45, 26.68, 19.68);
        bezierVertex(27.11, 19.92, 27.49, 20.14, 27.82, 20.34);
        bezierVertex(28.16, 20.55, 28.46, 20.8, 28.73, 21.08);
        bezierVertex(29.01, 21.35, 29.16, 21.52, 29.19, 21.58);
        bezierVertex(29.22, 21.65, 29.3, 21.84, 29.43, 22.17);
        bezierVertex(29.44, 22.22, 29.42, 22.39, 29.38, 22.68);
        bezierVertex(29.34, 22.98, 29.29, 23.18, 29.23, 23.27);
        bezierVertex(29.17, 23.37, 28.98, 23.57, 28.66, 23.87);
        bezierVertex(28.34, 24.17, 28.1, 24.36, 27.94, 24.42);
        bezierVertex(27.77, 24.49, 27.63, 24.55, 27.51, 24.59);
        bezierVertex(27.4, 24.64, 27.24, 24.69, 27.05, 24.75);
        bezierVertex(26.85, 24.81, 26.6, 24.88, 26.29, 24.94);
        bezierVertex(25.98, 25.01, 25.62, 25.08, 25.21, 25.15);
        bezierVertex(24.8, 25.22, 24.47, 25.28, 24.21, 25.32);
        bezierVertex(23.95, 25.36, 23.68, 25.41, 23.42, 25.46);
        bezierVertex(23.15, 25.5, 22.85, 25.56, 22.53, 25.62);
        bezierVertex(22.21, 25.69, 21.88, 25.76, 21.54, 25.85);
        bezierVertex(21.2, 25.94, 21, 25.99, 20.94, 26.01);
        bezierVertex(20.87, 26.03, 20.69, 26.09, 20.39, 26.18);
        bezierVertex(20.09, 26.28, 19.8, 26.39, 19.52, 26.49);
        bezierVertex(19.23, 26.6, 18.9, 26.73, 18.53, 26.88);
        bezierVertex(18.15, 27.03, 17.78, 27.18, 17.43, 27.33);
        bezierVertex(17.07, 27.47, 16.72, 27.61, 16.38, 27.75);
        bezierVertex(16.04, 27.89, 15.72, 28.01, 15.43, 28.12);
        bezierVertex(15.14, 28.24, 14.82, 28.35, 14.48, 28.46);
        bezierVertex(14.13, 28.58, 13.77, 28.68, 13.4, 28.77);
        bezierVertex(13.02, 28.86, 12.75, 28.92, 12.57, 28.95);
        bezierVertex(12.4, 28.98, 12.05, 29, 11.53, 29.01);
        bezierVertex(11, 29.02, 10.69, 29.01, 10.57, 28.98);
        bezierVertex(10.46, 28.96, 10.33, 28.92, 10.19, 28.87);
        bezierVertex(10.04, 28.81, 9.91, 28.75, 9.79, 28.67);
        bezierVertex(9.68, 28.59, 9.56, 28.48, 9.42, 28.34);
        bezierVertex(9.41, 28.31, 9.37, 28.23, 9.3, 28.08);
        bezierVertex(9.24, 27.94, 9.19, 27.81, 9.17, 27.69);
        bezierVertex(9.15, 27.58, 9.14, 27.4, 9.16, 27.17);
        bezierVertex(9.17, 26.94, 9.21, 26.62, 9.27, 26.21);
        bezierVertex(9.34, 25.79, 9.4, 25.44, 9.46, 25.15);
        bezierVertex(9.52, 24.85, 9.57, 24.57, 9.63, 24.32);
        bezierVertex(9.69, 24.06, 9.76, 23.74, 9.83, 23.35);
        bezierVertex(9.91, 22.96, 9.98, 22.51, 10.05, 22);
        bezierVertex(10.12, 21.49, 10.17, 21.13, 10.19, 20.94);
        bezierVertex(10.21, 20.75, 10.23, 20.48, 10.27, 20.12);
        bezierVertex(10.3, 19.77, 10.32, 19.46, 10.34, 19.19);
        bezierVertex(10.36, 18.93, 10.37, 18.64, 10.39, 18.33);
        bezierVertex(10.4, 18.03, 10.41, 17.82, 10.41, 17.71);
        bezierVertex(10.42, 17.61, 10.43, 17.31, 10.44, 16.81);
        bezierVertex(10.46, 16.31, 10.47, 15.97, 10.48, 15.78);
        bezierVertex(10.49, 15.58, 10.5, 15.36, 10.51, 15.11);
        bezierVertex(10.51, 14.85, 10.54, 14.52, 10.58, 14.11);
        bezierVertex(10.62, 13.7, 10.67, 13.13, 10.73, 12.42);
        bezierVertex(10.78, 12.21, 10.83, 11.96, 10.89, 11.66);
        bezierVertex(10.95, 11.35, 11.04, 11.01, 11.16, 10.62);
        bezierVertex(11.28, 10.23, 11.39, 9.92, 11.49, 9.69);
        bezierVertex(11.58, 9.46, 11.67, 9.28, 11.75, 9.14);
        bezierVertex(11.82, 9.01, 11.88, 8.91, 11.92, 8.85);
        bezierVertex(11.96, 8.79, 12.02, 8.69, 12.12, 8.56);
        bezierVertex(12.21, 8.43, 12.39, 8.26, 12.67, 8.06);
        bezierVertex(12.94, 7.85, 13.19, 7.72, 13.41, 7.66);
        bezierVertex(13.59, 7.66, 13.8, 7.72, 14.05, 7.83);
        bezierVertex(14.3, 7.94, 14.53, 8.07, 14.73, 8.22);
        bezierVertex(14.93, 8.37, 15.15, 8.55, 15.39, 8.78);
        bezierVertex(15.62, 9.01, 15.83, 9.22, 16.01, 9.4);
        bezierVertex(16.19, 9.58, 16.38, 9.75, 16.57, 9.93);
        bezierVertex(16.76, 10.11, 17.05, 10.29, 17.46, 10.5);
        bezierVertex(17.86, 10.7, 18.1, 10.81, 18.17, 10.82);
        bezierVertex(18.24, 10.82, 18.31, 10.82, 18.39, 10.8);
        bezierVertex(18.46, 10.79, 18.55, 10.77, 18.67, 10.74);
        bezierVertex(18.78, 10.71, 18.92, 10.65, 19.09, 10.56);
        bezierVertex(19.26, 10.48, 19.41, 10.38, 19.55, 10.26);
        bezierVertex(19.69, 10.14, 19.85, 9.98, 20.02, 9.78);
        bezierVertex(20.18, 9.58, 20.34, 9.36, 20.49, 9.13);
        bezierVertex(20.64, 8.89, 20.81, 8.59, 21, 8.21);
        bezierVertex(21.19, 7.83, 21.35, 7.51, 21.46, 7.25);
        bezierVertex(21.58, 7, 21.69, 6.74, 21.8, 6.47);
        bezierVertex(21.91, 6.21, 22, 5.98, 22.08, 5.79);
        bezierVertex(22.16, 5.59, 22.23, 5.4, 22.3, 5.21);
        bezierVertex(22.37, 5.01, 22.43, 4.83, 22.49, 4.65);
        bezierVertex(22.55, 4.47, 22.61, 4.24, 22.69, 3.95);
        bezierVertex(22.76, 3.67, 22.85, 3.31, 22.96, 2.87);
        bezierVertex(23.17, 2, 23.29, 1.41, 23.34, 1.08);
        bezierVertex(23.38, 0.75, 23.41, 0.46, 23.43, 0.21);
        bezierVertex(23.45, -0.04, 23.46, -0.3, 23.47, -0.58);
        bezierVertex(23.49, -0.87, 23.49, -1.11, 23.49, -1.33);
        bezierVertex(23.49, -1.55, 23.49, -1.73, 23.48, -1.89);
        bezierVertex(23.46, -2.2, 23.44, -2.45, 23.42, -2.66);
        bezierVertex(23.4, -2.87, 23.36, -3.15, 23.29, -3.5);
        bezierVertex(23.24, -3.85, 23.18, -4.15, 23.12, -4.4);
        bezierVertex(23.06, -4.65, 22.99, -4.91, 22.92, -5.18);
        bezierVertex(22.84, -5.45, 22.77, -5.7, 22.7, -5.93);
        bezierVertex(22.63, -6.15, 22.55, -6.4, 22.46, -6.66);
        bezierVertex(22.36, -6.93, 22.26, -7.22, 22.15, -7.52);
        bezierVertex(22.04, -7.82, 21.92, -8.11, 21.8, -8.41);
        bezierVertex(21.69, -8.7, 21.56, -9.01, 21.41, -9.35);
        bezierVertex(21.27, -9.69, 21.1, -10.08, 20.9, -10.53);
        bezierVertex(20.7, -10.98, 20.56, -11.31, 20.47, -11.51);
        bezierVertex(20.37, -11.71, 20.28, -11.91, 20.18, -12.11);
        bezierVertex(20.08, -12.31, 19.96, -12.54, 19.83, -12.81);
        bezierVertex(19.7, -13.08, 19.59, -13.32, 19.48, -13.53);
        bezierVertex(19.37, -13.75, 19.25, -13.98, 19.12, -14.22);
        bezierVertex(18.99, -14.46, 18.81, -14.77, 18.57, -15.14);
        bezierVertex(18.33, -15.51, 18.13, -15.8, 17.97, -16.01);
        bezierVertex(17.81, -16.22, 17.59, -16.49, 17.3, -16.81);
        bezierVertex(17.01, -17.13, 16.75, -17.4, 16.51, -17.61);
        bezierVertex(16.27, -17.82, 16.04, -18.01, 15.81, -18.18);
        bezierVertex(15.69, -18.26, 15.51, -18.37, 15.28, -18.51);
        bezierVertex(15.05, -18.65, 14.75, -18.81, 14.39, -19);
        bezierVertex(14.03, -19.18, 13.68, -19.35, 13.34, -19.49);
        bezierVertex(13, -19.63, 12.66, -19.75, 12.34, -19.86);
        bezierVertex(12.02, -19.96, 11.72, -20.05, 11.45, -20.12);
        bezierVertex(11.19, -20.19, 10.9, -20.25, 10.59, -20.32);
        bezierVertex(10.28, -20.38, 9.95, -20.45, 9.61, -20.51);
        bezierVertex(9.26, -20.57, 8.92, -20.63, 8.59, -20.68);
        bezierVertex(8.27, -20.73, 7.91, -20.78, 7.53, -20.84);
        bezierVertex(7.15, -20.9, 6.85, -20.94, 6.61, -20.98);
        bezierVertex(6.38, -21.02, 6.15, -21.06, 5.91, -21.11);
        bezierVertex(5.68, -21.15, 5.41, -21.21, 5.09, -21.28);
        bezierVertex(4.78, -21.34, 4.51, -21.41, 4.28, -21.46);
        bezierVertex(4.04, -21.52, 3.81, -21.59, 3.58, -21.66);
        bezierVertex(3.36, -21.73, 3.13, -21.81, 2.9, -21.9);
        bezierVertex(2.68, -21.99, 2.41, -22.11, 2.09, -22.27);
        bezierVertex(1.78, -22.42, 1.49, -22.59, 1.23, -22.77);
        bezierVertex(0.97, -22.95, 0.76, -23.11, 0.59, -23.26);
        bezierVertex(0.43, -23.41, 0.31, -23.53, 0.23, -23.61);
        bezierVertex(0.16, -23.69, 0.1, -23.76, 0.04, -23.83);
        bezierVertex(-0.01, -23.9, -0.09, -24.02, -0.19, -24.17);
        bezierVertex(-0.3, -24.33, -0.4, -24.51, -0.49, -24.71);
        vertex(-0.61, -25.02);
        bezierVertex(-0.67, -25.13, -0.71, -25.2, -0.73, -25.23);
        bezierVertex(-0.74, -25.27, -0.76, -25.32, -0.79, -25.39);
        bezierVertex(-0.81, -25.46, -0.82, -25.52, -0.83, -25.57);
        bezierVertex(-0.84, -25.63, -0.85, -25.7, -0.87, -25.79);
        bezierVertex(-0.89, -25.89, -0.91, -25.99, -0.93, -26.1);
        bezierVertex(-0.93, -26.17, -0.91, -26.42, -0.89, -26.85);
        bezierVertex(-0.66, -27.71, -0.41, -28.56, -0.13, -29.41);
endShape();

pop();
}

function mentonWaypoint(xloc,yloc,fcolour){
push();
		translate(xloc+41,yloc-95);
		rotate(PI/2);
		scale(0.6);
		noStroke();
		fill(fcolour);
		beginShape();
        vertex(11.86, 62.28);
        bezierVertex(11.61, 62.1, 11.41, 61.84, 11.25, 61.49);
        bezierVertex(11.08, 61.14, 10.85, 60.52, 10.55, 59.62);
        bezierVertex(10.25, 58.72, 10.03, 57.99, 9.88, 57.43);
        bezierVertex(9.73, 56.87, 9.63, 56.45, 9.57, 56.19);
        bezierVertex(9.51, 55.92, 9.43, 55.52, 9.32, 54.98);
        bezierVertex(9.22, 54.43, 9.09, 53.7, 8.94, 52.76);
        bezierVertex(8.79, 51.83, 8.68, 51.07, 8.61, 50.48);
        bezierVertex(8.55, 49.89, 8.5, 49.4, 8.48, 49.01);
        bezierVertex(8.46, 48.61, 8.44, 47.97, 8.43, 47.07);
        bezierVertex(8.41, 46.17, 8.41, 45.5, 8.41, 45.04);
        bezierVertex(8.42, 44.58, 8.45, 43.98, 8.5, 43.25);
        bezierVertex(8.55, 42.51, 8.6, 41.99, 8.65, 41.68);
        bezierVertex(8.7, 41.37, 8.74, 41.13, 8.78, 40.95);
        bezierVertex(8.81, 40.77, 8.87, 40.56, 8.94, 40.31);
        bezierVertex(9.01, 40.06, 9.09, 39.84, 9.17, 39.65);
        bezierVertex(9.24, 39.47, 9.4, 39.17, 9.62, 38.76);
        bezierVertex(9.85, 38.35, 10.04, 38.02, 10.21, 37.75);
        bezierVertex(10.37, 37.48, 10.6, 37.09, 10.91, 36.59);
        bezierVertex(11.22, 36.08, 11.45, 35.71, 11.59, 35.47);
        bezierVertex(11.74, 35.23, 11.89, 34.99, 12.04, 34.75);
        bezierVertex(12.2, 34.5, 12.41, 34.17, 12.69, 33.77);
        bezierVertex(12.96, 33.36, 13.25, 32.91, 13.56, 32.43);
        bezierVertex(13.87, 31.94, 14.09, 31.58, 14.23, 31.36);
        bezierVertex(14.36, 31.13, 14.54, 30.83, 14.75, 30.45);
        bezierVertex(14.96, 30.07, 15.16, 29.69, 15.35, 29.31);
        bezierVertex(15.54, 28.94, 15.8, 28.44, 16.13, 27.83);
        bezierVertex(16.46, 27.21, 16.72, 26.72, 16.92, 26.36);
        bezierVertex(17.13, 25.99, 17.4, 25.5, 17.74, 24.88);
        bezierVertex(18.09, 24.25, 18.34, 23.8, 18.49, 23.53);
        bezierVertex(18.65, 23.26, 18.8, 22.99, 18.94, 22.74);
        bezierVertex(19.09, 22.49, 19.26, 22.19, 19.46, 21.82);
        bezierVertex(19.66, 21.45, 19.83, 21.13, 19.96, 20.86);
        bezierVertex(20.09, 20.59, 20.23, 20.27, 20.39, 19.9);
        bezierVertex(20.54, 19.53, 20.75, 18.94, 21, 18.11);
        bezierVertex(21.25, 17.29, 21.42, 16.66, 21.51, 16.2);
        bezierVertex(21.6, 15.75, 21.68, 15.26, 21.75, 14.72);
        bezierVertex(21.82, 14.18, 21.86, 13.8, 21.88, 13.59);
        bezierVertex(21.9, 13.37, 21.91, 13.06, 21.93, 12.66);
        bezierVertex(21.95, 12.26, 21.96, 11.85, 21.96, 11.45);
        bezierVertex(21.96, 11.04, 21.95, 10.56, 21.93, 10);
        bezierVertex(21.91, 9.43, 21.89, 8.99, 21.88, 8.68);
        bezierVertex(21.86, 8.36, 21.83, 7.94, 21.8, 7.41);
        bezierVertex(21.77, 6.89, 21.71, 6.16, 21.63, 5.23);
        bezierVertex(21.54, 4.3, 21.48, 3.67, 21.43, 3.36);
        bezierVertex(21.39, 3.05, 21.33, 2.67, 21.26, 2.22);
        bezierVertex(21.2, 1.77, 21.15, 1.4, 21.13, 1.11);
        bezierVertex(21.12, 0.83, 21.15, 0.47, 21.24, 0.03);
        bezierVertex(21.42, 0, 21.55, -0.01, 21.63, 0);
        bezierVertex(21.72, 0.01, 21.91, 0.06, 22.2, 0.15);
        bezierVertex(22.49, 0.25, 22.83, 0.38, 23.2, 0.55);
        bezierVertex(23.58, 0.72, 24.04, 0.93, 24.57, 1.18);
        bezierVertex(25.1, 1.44, 25.58, 1.66, 25.99, 1.85);
        bezierVertex(26.41, 2.04, 27.04, 2.32, 27.9, 2.7);
        bezierVertex(28.75, 3.09, 29.45, 3.39, 29.99, 3.62);
        bezierVertex(30.53, 3.85, 31.2, 4.12, 32, 4.42);
        bezierVertex(32.8, 4.73, 33.32, 4.92, 33.56, 5);
        bezierVertex(33.81, 5.08, 34.1, 5.16, 34.45, 5.25);
        bezierVertex(34.8, 5.34, 35.4, 5.43, 36.25, 5.53);
        bezierVertex(37.11, 5.64, 37.84, 5.67, 38.43, 5.65);
        bezierVertex(39.03, 5.63, 39.54, 5.58, 39.97, 5.51);
        bezierVertex(40.4, 5.43, 40.7, 5.38, 40.87, 5.34);
        bezierVertex(41.05, 5.3, 41.51, 5.18, 42.25, 4.99);
        bezierVertex(42.99, 4.8, 43.59, 4.63, 44.06, 4.49);
        bezierVertex(44.52, 4.35, 45.12, 4.17, 45.86, 3.97);
        bezierVertex(46.59, 3.76, 47.12, 3.63, 47.44, 3.59);
        bezierVertex(47.76, 3.55, 48, 3.53, 48.15, 3.53);
        bezierVertex(48.29, 3.54, 48.68, 3.63, 49.3, 3.83);
        bezierVertex(49.43, 3.94, 49.57, 4.13, 49.73, 4.41);
        bezierVertex(49.89, 4.68, 50.05, 5.15, 50.21, 5.81);
        bezierVertex(50.38, 6.47, 50.48, 6.98, 50.54, 7.34);
        bezierVertex(50.59, 7.7, 50.64, 8.05, 50.67, 8.39);
        bezierVertex(50.71, 8.73, 50.75, 9.19, 50.8, 9.78);
        bezierVertex(50.85, 10.37, 50.9, 10.94, 50.94, 11.49);
        bezierVertex(50.99, 12.05, 51.01, 12.35, 51.01, 12.4);
        bezierVertex(51.02, 12.45, 51.04, 12.81, 51.08, 13.48);
        bezierVertex(51.12, 14.15, 51.15, 14.69, 51.16, 15.08);
        bezierVertex(51.18, 15.47, 51.2, 15.82, 51.21, 16.13);
        bezierVertex(51.22, 16.44, 51.23, 17, 51.24, 17.81);
        bezierVertex(51.25, 18.62, 51.25, 19.42, 51.22, 20.19);
        bezierVertex(51.2, 20.96, 51.16, 21.64, 51.12, 22.22);
        bezierVertex(51.08, 22.8, 51.03, 23.3, 50.98, 23.7);
        bezierVertex(50.94, 24.11, 50.84, 24.67, 50.71, 25.37);
        bezierVertex(50.57, 26.07, 50.45, 26.57, 50.35, 26.87);
        bezierVertex(50.26, 27.17, 50.15, 27.45, 50.05, 27.71);
        bezierVertex(49.94, 27.97, 49.83, 28.22, 49.72, 28.44);
        bezierVertex(49.6, 28.67, 49.44, 28.96, 49.24, 29.3);
        bezierVertex(49.03, 29.64, 48.86, 29.91, 48.71, 30.11);
        bezierVertex(48.57, 30.31, 48.33, 30.62, 47.98, 31.04);
        bezierVertex(47.62, 31.47, 47.18, 31.97, 46.65, 32.54);
        bezierVertex(46.12, 33.12, 45.67, 33.6, 45.32, 33.98);
        bezierVertex(44.96, 34.36, 44.66, 34.68, 44.41, 34.92);
        bezierVertex(44.17, 35.16, 43.78, 35.54, 43.26, 36.03);
        bezierVertex(42.74, 36.53, 42.33, 36.93, 42.03, 37.23);
        bezierVertex(41.73, 37.54, 41.42, 37.87, 41.1, 38.23);
        bezierVertex(40.77, 38.59, 40.46, 38.97, 40.15, 39.38);
        bezierVertex(39.84, 39.78, 39.54, 40.2, 39.26, 40.64);
        bezierVertex(38.98, 41.09, 38.64, 41.69, 38.26, 42.45);
        bezierVertex(37.88, 43.21, 37.6, 43.81, 37.44, 44.24);
        bezierVertex(37.28, 44.67, 37.11, 45.18, 36.94, 45.77);
        bezierVertex(36.78, 46.37, 36.65, 46.95, 36.56, 47.53);
        bezierVertex(36.48, 48.12, 36.42, 48.62, 36.4, 49.05);
        bezierVertex(36.37, 49.48, 36.36, 49.94, 36.37, 50.43);
        bezierVertex(36.37, 50.92, 36.39, 51.41, 36.42, 51.91);
        bezierVertex(36.46, 52.4, 36.5, 52.84, 36.56, 53.24);
        bezierVertex(36.61, 53.64, 36.7, 54.13, 36.83, 54.7);
        bezierVertex(36.96, 55.26, 37.09, 55.77, 37.23, 56.21);
        bezierVertex(37.36, 56.65, 37.49, 57.07, 37.63, 57.47);
        bezierVertex(37.77, 57.88, 37.89, 58.21, 37.99, 58.46);
        bezierVertex(38.08, 58.71, 38.27, 59.17, 38.55, 59.84);
        bezierVertex(38.84, 60.51, 39.05, 61, 39.19, 61.3);
        bezierVertex(39.32, 61.61, 39.46, 61.93, 39.61, 62.28);
        bezierVertex(39.75, 62.63, 39.85, 62.95, 39.91, 63.24);
        bezierVertex(39.97, 63.54, 39.99, 63.73, 39.99, 63.82);
        bezierVertex(39.98, 63.91, 39.96, 64, 39.94, 64.08);
        vertex(39.88, 64.13);
        vertex(38.82, 64.5);
        bezierVertex(38.66, 64.52, 38.27, 64.53, 37.67, 64.53);
        bezierVertex(37.07, 64.54, 36.51, 64.53, 35.99, 64.51);
        bezierVertex(35.47, 64.49, 35.04, 64.47, 34.71, 64.45);
        bezierVertex(34.38, 64.43, 33.93, 64.38, 33.34, 64.31);
        bezierVertex(32.76, 64.24, 32.4, 64.2, 32.27, 64.18);
        bezierVertex(32.13, 64.16, 31.57, 64.05, 30.58, 63.86);
        bezierVertex(29.59, 63.67, 28.89, 63.54, 28.46, 63.46);
        bezierVertex(28.04, 63.38, 27.67, 63.32, 27.34, 63.27);
        bezierVertex(27.01, 63.23, 26.61, 63.19, 26.16, 63.16);
        bezierVertex(25.71, 63.12, 25.25, 63.1, 24.8, 63.09);
        bezierVertex(24.35, 63.09, 23.71, 63.07, 22.9, 63.05);
        bezierVertex(22.09, 63.02, 21.51, 63, 21.17, 62.97);
        bezierVertex(20.83, 62.95, 20.44, 62.92, 20, 62.9);
        bezierVertex(19.56, 62.87, 19.16, 62.84, 18.8, 62.8);
        bezierVertex(18.44, 62.77, 17.95, 62.72, 17.33, 62.67);
        bezierVertex(16.71, 62.61, 16.34, 62.58, 16.23, 62.57);
        bezierVertex(16.12, 62.57, 15.93, 62.56, 15.65, 62.56);
        bezierVertex(15.38, 62.56, 15.13, 62.56, 14.9, 62.57);
        bezierVertex(14.68, 62.58, 14.39, 62.59, 14.03, 62.61);
        bezierVertex(13.67, 62.63, 13.38, 62.65, 13.18, 62.66);
        bezierVertex(12.98, 62.67, 12.71, 62.66, 12.38, 62.63);
        bezierVertex(12.28, 62.57, 12.1, 62.45, 11.86, 62.28);
    endShape();
    noFill();
    stroke(cdeviceGrey);
    strokeWeight(2);
    mentonrep.scribbleLine(70,68,10,62);
	pop();
}

function mentonTransducer(xloc,yloc,rotation, tcolour){
push();
		translate(xloc+30,yloc-30);
		rotate(radians(109+rotation));
		scale(0.4);
		noStroke();
		fill(tcolour);

beginShape();
 vertex(76.48, 80.8);
            bezierVertex(75.67, 80.91, 75.01, 80.99, 74.52, 81.06);
            bezierVertex(74.02, 81.13, 73.22, 81.23, 72.11, 81.38);
            bezierVertex(71, 81.53, 69.95, 81.67, 68.97, 81.8);
            bezierVertex(67.98, 81.93, 66.7, 82.11, 65.13, 82.32);
            bezierVertex(63.56, 82.53, 62.15, 82.72, 60.92, 82.89);
            bezierVertex(59.69, 83.07, 58.37, 83.25, 56.97, 83.44);
            bezierVertex(55.56, 83.63, 53.83, 83.85, 51.78, 84.09);
            bezierVertex(49.72, 84.34, 48.07, 84.52, 46.81, 84.63);
            bezierVertex(45.56, 84.74, 44.33, 84.83, 43.13, 84.88);
            bezierVertex(41.94, 84.93, 41.18, 84.96, 40.87, 84.96);
            bezierVertex(40.56, 84.97, 40.07, 84.96, 39.4, 84.94);
            bezierVertex(38.72, 84.93, 37.58, 84.85, 35.96, 84.69);
            bezierVertex(34.35, 84.53, 33.36, 84.42, 33, 84.36);
            bezierVertex(32.64, 84.3, 32.14, 84.2, 31.48, 84.06);
            bezierVertex(30.83, 83.93, 30.17, 83.76, 29.5, 83.58);
            bezierVertex(28.83, 83.4, 28.02, 83.14, 27.07, 82.81);
            bezierVertex(26.13, 82.49, 25.42, 82.23, 24.95, 82.03);
            bezierVertex(24.48, 81.84, 24.03, 81.65, 23.6, 81.45);
            bezierVertex(23.16, 81.26, 22.67, 81.02, 22.11, 80.73);
            bezierVertex(21.55, 80.45, 20.8, 80.03, 19.86, 79.48);
            bezierVertex(18.91, 78.92, 18.1, 78.41, 17.43, 77.96);
            bezierVertex(16.75, 77.5, 15.97, 76.94, 15.08, 76.27);
            bezierVertex(14.18, 75.59, 13.33, 74.91, 12.51, 74.22);
            bezierVertex(11.69, 73.53, 11.13, 73.05, 10.84, 72.79);
            bezierVertex(10.55, 72.53, 10, 72.02, 9.21, 71.26);
            bezierVertex(8.42, 70.5, 7.76, 69.86, 7.23, 69.31);
            bezierVertex(6.7, 68.77, 6.2, 68.25, 5.74, 67.76);
            bezierVertex(5.28, 67.27, 4.8, 66.75, 4.28, 66.18);
            bezierVertex(3.77, 65.62, 3.34, 65.13, 2.99, 64.73);
            bezierVertex(2.64, 64.33, 2.19, 63.81, 1.65, 63.16);
            bezierVertex(1.1, 62.52, 0.74, 62.09, 0.56, 61.87);
            bezierVertex(0.39, 61.66, 0.17, 61.4, -0.08, 61.1);
            vertex(-0.08, 61.1);
            bezierVertex(0.53, 61.14, 0.97, 61.18, 1.24, 61.2);
            bezierVertex(1.5, 61.22, 2.26, 61.28, 3.51, 61.4);
            bezierVertex(4.76, 61.51, 5.83, 61.61, 6.72, 61.69);
            bezierVertex(7.61, 61.77, 8.39, 61.83, 9.06, 61.89);
            bezierVertex(9.74, 61.95, 10.85, 62.03, 12.41, 62.15);
            bezierVertex(13.97, 62.27, 15.31, 62.37, 16.41, 62.44);
            bezierVertex(17.51, 62.52, 18.44, 62.58, 19.2, 62.63);
            bezierVertex(19.95, 62.67, 20.74, 62.72, 21.56, 62.77);
            bezierVertex(22.38, 62.81, 23.69, 62.88, 25.49, 62.96);
            bezierVertex(27.29, 63.04, 28.79, 63.1, 30.01, 63.14);
            bezierVertex(31.23, 63.18, 32.27, 63.21, 33.14, 63.23);
            bezierVertex(34.01, 63.24, 34.83, 63.26, 35.58, 63.26);
            bezierVertex(36.34, 63.27, 37.29, 63.27, 38.43, 63.26);
            bezierVertex(39.57, 63.26, 40.48, 63.25, 41.15, 63.24);
            bezierVertex(41.82, 63.22, 42.69, 63.2, 43.75, 63.16);
            bezierVertex(44.8, 63.12, 45.83, 63.08, 46.83, 63.02);
            bezierVertex(47.83, 62.97, 49.04, 62.89, 50.45, 62.79);
            bezierVertex(51.86, 62.69, 53.16, 62.58, 54.34, 62.47);
            bezierVertex(55.52, 62.36, 56.78, 62.22, 58.12, 62.06);
            bezierVertex(59.46, 61.91, 60.45, 61.79, 61.1, 61.7);
            bezierVertex(61.75, 61.61, 62.31, 61.54, 62.8, 61.47);
            bezierVertex(63.28, 61.4, 64.01, 61.29, 64.99, 61.14);
            bezierVertex(65.97, 60.98, 66.8, 60.85, 67.5, 60.73);
            bezierVertex(68.19, 60.61, 68.98, 60.48, 69.85, 60.32);
            bezierVertex(70.73, 60.16, 71.47, 60.02, 72.07, 59.9);
            bezierVertex(72.68, 59.79, 73.33, 59.66, 74.02, 59.52);
            bezierVertex(74.71, 59.38, 75.5, 59.22, 76.4, 59.02);
            bezierVertex(77.3, 58.83, 78.48, 58.57, 79.95, 58.23);
            bezierVertex(80.69, 58.06, 81.39, 57.89, 82.06, 57.73);
            bezierVertex(82.73, 57.57, 83.37, 57.42, 83.98, 57.26);
            bezierVertex(84.59, 57.11, 85.16, 56.97, 85.68, 56.84);
            bezierVertex(86.2, 56.71, 86.68, 56.58, 87.11, 56.47);
            bezierVertex(87.54, 56.36, 88.04, 56.22, 88.6, 56.07);
            bezierVertex(89.15, 55.92, 89.77, 55.75, 90.46, 55.56);
            bezierVertex(91.14, 55.36, 91.8, 55.18, 92.43, 54.99);
            bezierVertex(93.06, 54.81, 93.67, 54.63, 94.25, 54.46);
            bezierVertex(94.83, 54.28, 95.37, 54.12, 95.86, 53.97);
            bezierVertex(96.35, 53.82, 96.8, 53.68, 97.19, 53.55);
            bezierVertex(97.59, 53.43, 98.04, 53.28, 98.55, 53.11);
            bezierVertex(99.05, 52.94, 99.62, 52.75, 100.25, 52.54);
            bezierVertex(100.88, 52.32, 101.51, 52.11, 102.13, 51.89);
            bezierVertex(102.75, 51.67, 103.37, 51.45, 103.98, 51.22);
            bezierVertex(104.59, 51, 105.17, 50.78, 105.72, 50.58);
            bezierVertex(106.27, 50.37, 106.74, 50.19, 107.14, 50.04);
            bezierVertex(107.54, 49.88, 107.96, 49.72, 108.4, 49.55);
            bezierVertex(108.84, 49.38, 109.26, 49.21, 109.68, 49.05);
            bezierVertex(110.09, 48.89, 110.5, 48.72, 110.89, 48.57);
            bezierVertex(111.28, 48.41, 111.7, 48.24, 112.15, 48.05);
            bezierVertex(112.59, 47.87, 113.06, 47.67, 113.56, 47.46);
            bezierVertex(114.06, 47.25, 114.5, 47.06, 114.88, 46.89);
            bezierVertex(115.25, 46.73, 115.62, 46.56, 115.98, 46.39);
            bezierVertex(116.34, 46.22, 116.82, 46, 117.39, 45.71);
            bezierVertex(117.97, 45.43, 118.58, 45.12, 119.2, 44.79);
            bezierVertex(119.82, 44.45, 120.37, 44.15, 120.84, 43.88);
            bezierVertex(121.31, 43.61, 121.8, 43.32, 122.32, 43);
            bezierVertex(122.84, 42.68, 123.37, 42.35, 123.91, 42);
            bezierVertex(124.45, 41.65, 124.99, 41.3, 125.54, 40.93);
            bezierVertex(126.09, 40.57, 126.59, 40.23, 127.06, 39.93);
            bezierVertex(127.52, 39.63, 128.03, 39.31, 128.59, 38.96);
            bezierVertex(129.15, 38.62, 129.67, 38.32, 130.14, 38.06);
            bezierVertex(130.62, 37.8, 131.03, 37.58, 131.38, 37.41);
            bezierVertex(131.73, 37.24, 132.03, 37.1, 132.29, 36.99);
            bezierVertex(132.54, 36.88, 132.74, 36.79, 132.9, 36.73);
            bezierVertex(133.05, 36.67, 133.21, 36.6, 133.37, 36.54);
            bezierVertex(133.53, 36.48, 133.7, 36.4, 133.9, 36.31);
            bezierVertex(134.09, 36.22, 134.25, 36.15, 134.39, 36.08);
            bezierVertex(134.52, 36.01, 134.65, 35.95, 134.77, 35.89);
            bezierVertex(134.89, 35.82, 135.03, 35.75, 135.18, 35.67);
            bezierVertex(135.33, 35.59, 135.5, 35.5, 135.68, 35.4);
            bezierVertex(135.87, 35.3, 136.06, 35.19, 136.27, 35.07);
            bezierVertex(136.48, 34.96, 136.64, 34.87, 136.76, 34.8);
            bezierVertex(136.87, 34.74, 136.93, 34.7, 136.95, 34.7);
            bezierVertex(136.96, 34.69, 137.05, 34.63, 137.23, 34.52);
            bezierVertex(137.41, 34.41, 137.68, 34.24, 138.06, 34.01);
            bezierVertex(138.43, 33.78, 138.83, 33.54, 139.24, 33.28);
            bezierVertex(139.65, 33.03, 140.03, 32.79, 140.37, 32.57);
            bezierVertex(140.71, 32.35, 141.02, 32.16, 141.29, 31.98);
            bezierVertex(141.56, 31.81, 141.85, 31.62, 142.16, 31.41);
            bezierVertex(142.47, 31.2, 142.81, 30.98, 143.17, 30.73);
            bezierVertex(143.53, 30.49, 143.91, 30.22, 144.31, 29.94);
            bezierVertex(144.72, 29.66, 145.11, 29.38, 145.5, 29.1);
            bezierVertex(145.89, 28.83, 146.26, 28.56, 146.62, 28.3);
            bezierVertex(146.99, 28.05, 147.33, 27.8, 147.66, 27.56);
            bezierVertex(148, 27.32, 148.39, 27.04, 148.84, 26.72);
            bezierVertex(149.29, 26.4, 149.77, 26.07, 150.26, 25.72);
            bezierVertex(150.76, 25.37, 151.2, 25.06, 151.58, 24.78);
            bezierVertex(152.35, 24.23, 152.92, 23.83, 153.27, 23.56);
            bezierVertex(153.63, 23.3, 153.96, 23.04, 154.28, 22.8);
            bezierVertex(154.59, 22.56, 154.93, 22.29, 155.32, 21.99);
            bezierVertex(155.7, 21.69, 156.07, 21.38, 156.44, 21.07);
            bezierVertex(156.8, 20.77, 157.16, 20.46, 157.51, 20.15);
            bezierVertex(157.85, 19.83, 158.21, 19.5, 158.56, 19.16);
            bezierVertex(158.92, 18.81, 159.28, 18.45, 159.64, 18.07);
            bezierVertex(160.01, 17.69, 160.37, 17.29, 160.74, 16.87);
            bezierVertex(161.11, 16.46, 161.48, 16.02, 161.86, 15.57);
            bezierVertex(162.24, 15.12, 162.58, 14.71, 162.88, 14.34);
            bezierVertex(163.19, 13.96, 163.45, 13.63, 163.69, 13.33);
            bezierVertex(163.92, 13.04, 164.17, 12.72, 164.45, 12.37);
            bezierVertex(164.73, 12.03, 164.98, 11.71, 165.2, 11.43);
            bezierVertex(165.42, 11.16, 165.66, 10.85, 165.92, 10.53);
            bezierVertex(166.18, 10.2, 166.43, 9.88, 166.69, 9.56);
            bezierVertex(166.94, 9.24, 167.26, 8.85, 167.63, 8.38);
            bezierVertex(168.01, 7.92, 168.44, 7.4, 168.93, 6.83);
            bezierVertex(169.41, 6.24, 169.87, 5.68, 170.31, 5.17);
            bezierVertex(170.75, 4.65, 171.17, 4.18, 171.57, 3.74);
            bezierVertex(172.37, 2.87, 172.88, 2.32, 173.11, 2.1);
            bezierVertex(173.35, 1.88, 173.59, 1.67, 173.84, 1.48);
            bezierVertex(174.09, 1.3, 174.38, 1.09, 174.72, 0.87);
            bezierVertex(175.06, 0.64, 175.35, 0.47, 175.57, 0.34);
            bezierVertex(175.79, 0.21, 175.98, 0.11, 176.14, 0.06);
            bezierVertex(176.3, 0, 176.45, -0.04, 176.6, -0.07);
            bezierVertex(176.74, -0.09, 176.96, -0.08, 177.25, -0.04);
            bezierVertex(177.54, 0, 177.75, 0.07, 177.9, 0.15);
            bezierVertex(178.01, 0.27, 178.11, 0.4, 178.2, 0.53);
            bezierVertex(178.28, 0.67, 178.33, 0.76, 178.35, 0.81);
            bezierVertex(178.37, 0.86, 178.4, 1, 178.42, 1.22);
            bezierVertex(178.45, 1.44, 178.48, 1.76, 178.51, 2.18);
            bezierVertex(178.55, 2.61, 178.56, 3.04, 178.56, 3.48);
            bezierVertex(178.55, 3.92, 178.51, 4.47, 178.45, 5.15);
            bezierVertex(178.38, 5.82, 178.29, 6.53, 178.19, 7.27);
            bezierVertex(178.08, 8.01, 177.97, 8.72, 177.85, 9.41);
            bezierVertex(177.73, 10.1, 177.62, 10.73, 177.52, 11.3);
            bezierVertex(177.42, 11.86, 177.31, 12.48, 177.19, 13.14);
            bezierVertex(177.07, 13.8, 176.96, 14.4, 176.86, 14.96);
            bezierVertex(176.75, 15.51, 176.64, 16.11, 176.5, 16.78);
            bezierVertex(176.37, 17.44, 176.24, 18.05, 176.11, 18.62);
            bezierVertex(175.98, 19.19, 175.85, 19.69, 175.74, 20.12);
            bezierVertex(175.63, 20.55, 175.51, 21.02, 175.37, 21.51);
            bezierVertex(175.23, 22, 175.07, 22.55, 174.88, 23.16);
            bezierVertex(174.68, 23.77, 174.46, 24.44, 174.22, 25.16);
            bezierVertex(173.97, 25.89, 173.71, 26.59, 173.45, 27.27);
            bezierVertex(173.18, 27.95, 172.91, 28.61, 172.63, 29.25);
            bezierVertex(172.35, 29.89, 172.06, 30.5, 171.77, 31.09);
            bezierVertex(171.47, 31.67, 171.18, 32.23, 170.87, 32.75);
            bezierVertex(170.57, 33.28, 170.27, 33.77, 169.97, 34.21);
            bezierVertex(169.67, 34.65, 169.41, 35.03, 169.19, 35.34);
            bezierVertex(168.97, 35.65, 168.74, 35.97, 168.49, 36.3);
            bezierVertex(168.24, 36.63, 168, 36.94, 167.75, 37.26);
            bezierVertex(167.5, 37.57, 167.19, 37.94, 166.81, 38.38);
            bezierVertex(166.44, 38.83, 165.99, 39.31, 165.48, 39.83);
            bezierVertex(164.97, 40.36, 164.52, 40.81, 164.11, 41.21);
            bezierVertex(163.71, 41.6, 163.36, 41.93, 163.06, 42.2);
            bezierVertex(162.76, 42.46, 162.44, 42.74, 162.1, 43.02);
            bezierVertex(161.76, 43.3, 161.4, 43.6, 161.02, 43.9);
            bezierVertex(160.65, 44.2, 160.3, 44.47, 159.99, 44.71);
            bezierVertex(159.68, 44.95, 159.4, 45.17, 159.15, 45.35);
            bezierVertex(158.9, 45.54, 158.57, 45.77, 158.17, 46.04);
            bezierVertex(157.78, 46.32, 157.41, 46.57, 157.07, 46.8);
            bezierVertex(156.73, 47.03, 156.36, 47.28, 155.96, 47.55);
            bezierVertex(155.55, 47.83, 155.14, 48.1, 154.72, 48.38);
            bezierVertex(154.31, 48.66, 153.89, 48.94, 153.46, 49.22);
            bezierVertex(153.04, 49.5, 152.61, 49.78, 152.18, 50.06);
            bezierVertex(151.75, 50.34, 151.32, 50.62, 150.88, 50.91);
            bezierVertex(150.44, 51.19, 150.03, 51.45, 149.64, 51.7);
            bezierVertex(149.26, 51.94, 148.9, 52.16, 148.58, 52.36);
            bezierVertex(148.25, 52.57, 147.95, 52.75, 147.68, 52.91);
            bezierVertex(147.41, 53.07, 147.12, 53.25, 146.8, 53.43);
            bezierVertex(146.48, 53.62, 146.09, 53.84, 145.64, 54.1);
            bezierVertex(145.18, 54.35, 144.7, 54.61, 144.21, 54.87);
            bezierVertex(143.72, 55.13, 143.2, 55.39, 142.64, 55.66);
            bezierVertex(142.09, 55.93, 141.51, 56.21, 140.9, 56.5);
            bezierVertex(140.29, 56.77, 139.7, 57.04, 139.15, 57.29);
            bezierVertex(138.61, 57.54, 138.09, 57.78, 137.61, 58.01);
            bezierVertex(137.12, 58.24, 136.64, 58.47, 136.17, 58.71);
            bezierVertex(135.69, 58.95, 135.22, 59.2, 134.75, 59.46);
            bezierVertex(134.27, 59.72, 133.85, 59.95, 133.47, 60.16);
            bezierVertex(133.1, 60.37, 132.78, 60.55, 132.5, 60.7);
            bezierVertex(132.23, 60.85, 131.94, 61, 131.62, 61.17);
            bezierVertex(131.31, 61.33, 131.01, 61.47, 130.74, 61.59);
            bezierVertex(130.47, 61.71, 130.17, 61.83, 129.84, 61.96);
            bezierVertex(129.5, 62.09, 129.19, 62.21, 128.89, 62.32);
            bezierVertex(128.59, 62.43, 128.23, 62.55, 127.83, 62.68);
            bezierVertex(127.42, 62.81, 127.08, 62.93, 126.79, 63.05);
            bezierVertex(126.5, 63.16, 126.14, 63.36, 125.72, 63.63);
            bezierVertex(125.31, 63.91, 124.92, 64.3, 124.56, 64.82);
            bezierVertex(124.19, 65.33, 124.02, 65.82, 124.03, 66.29);
            bezierVertex(124.04, 66.76, 124.1, 67.17, 124.19, 67.52);
            bezierVertex(124.28, 67.88, 124.35, 68.12, 124.4, 68.25);
            bezierVertex(124.45, 68.39, 124.55, 68.62, 124.7, 68.95);
            bezierVertex(124.85, 69.29, 125.05, 69.73, 125.28, 70.29);
            bezierVertex(125.52, 70.85, 125.7, 71.32, 125.84, 71.71);
            bezierVertex(125.98, 72.09, 126.11, 72.47, 126.22, 72.84);
            bezierVertex(126.34, 73.21, 126.48, 73.62, 126.65, 74.09);
            bezierVertex(126.82, 74.56, 126.97, 74.96, 127.09, 75.29);
            bezierVertex(127.22, 75.63, 127.35, 75.97, 127.49, 76.34);
            bezierVertex(127.63, 76.7, 127.8, 77.11, 127.99, 77.56);
            bezierVertex(128.18, 78.02, 128.38, 78.53, 128.61, 79.09);
            bezierVertex(128.83, 79.65, 129.03, 80.16, 129.2, 80.62);
            bezierVertex(129.37, 81.08, 129.52, 81.47, 129.63, 81.79);
            bezierVertex(129.75, 82.11, 129.87, 82.44, 129.99, 82.78);
            bezierVertex(130.11, 83.11, 130.22, 83.43, 130.33, 83.72);
            bezierVertex(130.43, 84.02, 130.55, 84.36, 130.69, 84.75);
            bezierVertex(130.83, 85.14, 130.96, 85.51, 131.09, 85.88);
            bezierVertex(131.36, 86.61, 131.57, 87.2, 131.74, 87.67);
            bezierVertex(131.91, 88.13, 132.05, 88.54, 132.18, 88.89);
            bezierVertex(132.31, 89.24, 132.44, 89.61, 132.58, 90.01);
            bezierVertex(132.86, 90.8, 133.33, 92.12, 133.98, 93.99);
            bezierVertex(134.63, 95.86, 135.11, 97.24, 135.41, 98.13);
            bezierVertex(135.72, 99.02, 136.04, 99.96, 136.38, 100.96);
            bezierVertex(136.72, 101.96, 137.07, 102.98, 137.42, 104.04);
            bezierVertex(137.78, 105.09, 138.08, 105.98, 138.32, 106.72);
            bezierVertex(138.56, 107.45, 138.79, 108.15, 139, 108.8);
            bezierVertex(139.22, 109.46, 139.4, 110.02, 139.54, 110.48);
            bezierVertex(139.69, 110.94, 139.86, 111.46, 140.04, 112.05);
            bezierVertex(140.23, 112.63, 140.44, 113.32, 140.68, 114.09);
            bezierVertex(140.92, 114.87, 141.21, 115.82, 141.55, 116.95);
            bezierVertex(141.89, 118.08, 142.19, 119.07, 142.44, 119.92);
            bezierVertex(142.7, 120.77, 142.96, 121.65, 143.23, 122.56);
            bezierVertex(143.49, 123.47, 143.79, 124.48, 144.12, 125.59);
            bezierVertex(144.44, 126.71, 144.74, 127.7, 144.99, 128.57);
            bezierVertex(145.25, 129.45, 145.48, 130.24, 145.69, 130.95);
            bezierVertex(145.91, 131.66, 146.22, 132.72, 146.65, 134.12);
            bezierVertex(147.08, 135.52, 147.41, 136.6, 147.65, 137.37);
            bezierVertex(147.89, 138.14, 148.09, 138.77, 148.24, 139.25);
            bezierVertex(148.4, 139.74, 148.58, 140.32, 148.8, 141.01);
            bezierVertex(149.03, 141.7, 149.21, 142.28, 149.36, 142.74);
            bezierVertex(149.51, 143.2, 149.7, 143.79, 149.93, 144.52);
            bezierVertex(150.15, 145.24, 150.45, 146.16, 150.83, 147.29);
            bezierVertex(151.2, 148.42, 151.53, 149.45, 151.83, 150.37);
            bezierVertex(152.13, 151.3, 152.45, 152.32, 152.78, 153.42);
            bezierVertex(153.11, 154.52, 153.36, 155.36, 153.51, 155.93);
            bezierVertex(153.67, 156.51, 153.82, 157.12, 153.98, 157.76);
            bezierVertex(154.13, 158.41, 154.26, 158.98, 154.37, 159.47);
            bezierVertex(154.47, 159.96, 154.59, 160.63, 154.72, 161.48);
            bezierVertex(154.86, 162.34, 154.96, 163.08, 155.03, 163.71);
            bezierVertex(155.09, 164.34, 155.14, 165.34, 155.17, 166.73);
            bezierVertex(155.2, 168.11, 155.18, 169.17, 155.12, 169.89);
            bezierVertex(155.06, 170.62, 154.93, 171.52, 154.73, 172.6);
            bezierVertex(154.52, 173.69, 154.34, 174.49, 154.19, 175);
            bezierVertex(154.04, 175.5, 153.83, 176.11, 153.56, 176.8);
            bezierVertex(153.29, 177.5, 153.01, 178.12, 152.73, 178.68);
            bezierVertex(152.45, 179.24, 151.99, 179.99, 151.35, 180.94);
            bezierVertex(150.72, 181.89, 149.99, 182.82, 149.15, 183.73);
            bezierVertex(148.32, 184.64, 147.26, 185.59, 145.99, 186.57);
            bezierVertex(144.72, 187.55, 143.53, 188.34, 142.42, 188.94);
            bezierVertex(141.31, 189.55, 140.41, 189.99, 139.72, 190.27);
            bezierVertex(139.02, 190.55, 138.16, 190.83, 137.13, 191.13);
            bezierVertex(136.1, 191.42, 135.23, 191.63, 134.52, 191.76);
            bezierVertex(133.81, 191.88, 133.06, 191.98, 132.25, 192.04);
            bezierVertex(131.45, 192.11, 130.62, 192.13, 129.78, 192.11);
            bezierVertex(128.94, 192.09, 128.05, 192.01, 127.11, 191.87);
            bezierVertex(126.18, 191.74, 124.99, 191.44, 123.56, 190.98);
            bezierVertex(122.12, 190.52, 120.96, 190.06, 120.09, 189.6);
            bezierVertex(119.21, 189.15, 118.6, 188.8, 118.25, 188.57);
            bezierVertex(117.91, 188.34, 117.52, 188.06, 117.09, 187.73);
            bezierVertex(116.67, 187.4, 116.37, 187.16, 116.2, 187);
            bezierVertex(116.03, 186.85, 115.81, 186.64, 115.55, 186.38);
            bezierVertex(115.29, 186.12, 114.85, 185.62, 114.22, 184.87);
            bezierVertex(113.59, 184.12, 112.94, 183.21, 112.26, 182.14);
            bezierVertex(111.58, 181.07, 111.05, 180.15, 110.68, 179.37);
            bezierVertex(110.3, 178.6, 109.77, 177.31, 109.08, 175.51);
            bezierVertex(108.4, 173.71, 107.91, 172.31, 107.61, 171.3);
            bezierVertex(107.31, 170.29, 107.04, 169.33, 106.8, 168.42);
            bezierVertex(106.56, 167.52, 106.32, 166.58, 106.08, 165.62);
            bezierVertex(105.84, 164.66, 105.59, 163.64, 105.32, 162.56);
            bezierVertex(105.05, 161.48, 104.73, 160.19, 104.34, 158.68);
            bezierVertex(103.95, 157.16, 103.63, 155.92, 103.36, 154.96);
            bezierVertex(103.1, 154, 102.85, 153.12, 102.63, 152.33);
            bezierVertex(102.4, 151.54, 102.17, 150.77, 101.95, 150.03);
            bezierVertex(101.73, 149.3, 101.53, 148.62, 101.33, 148);
            bezierVertex(101.14, 147.39, 100.98, 146.88, 100.86, 146.5);
            bezierVertex(100.73, 146.11, 100.55, 145.55, 100.3, 144.83);
            bezierVertex(100.06, 144.1, 99.8, 143.34, 99.52, 142.54);
            bezierVertex(99.24, 141.74, 99.01, 141.09, 98.83, 140.58);
            bezierVertex(98.64, 140.08, 98.32, 139.18, 97.85, 137.9);
            bezierVertex(97.37, 136.61, 96.82, 135.11, 96.19, 133.4);
            bezierVertex(95.56, 131.69, 95.13, 130.52, 94.9, 129.89);
            bezierVertex(94.67, 129.26, 94.39, 128.51, 94.08, 127.64);
            bezierVertex(93.76, 126.76, 93.28, 125.43, 92.64, 123.65);
            bezierVertex(91.99, 121.87, 91.47, 120.39, 91.05, 119.23);
            bezierVertex(90.64, 118.06, 90.16, 116.71, 89.61, 115.17);
            bezierVertex(89.07, 113.64, 88.62, 112.38, 88.27, 111.41);
            bezierVertex(87.92, 110.43, 87.58, 109.49, 87.25, 108.58);
            bezierVertex(86.92, 107.68, 86.36, 106.19, 85.58, 104.11);
            bezierVertex(84.8, 102.03, 84.19, 100.4, 83.74, 99.22);
            bezierVertex(83.29, 98.05, 82.94, 97.13, 82.69, 96.47);
            bezierVertex(82.43, 95.8, 81.93, 94.52, 81.19, 92.61);
            bezierVertex(80.45, 90.7, 79.93, 89.37, 79.64, 88.64);
            bezierVertex(79.35, 87.9, 78.63, 86.1, 77.49, 83.24);
            vertex(76.48, 80.8);
   endShape();
   pop();
   }

function mentonDroidShuffle(droidid, xloc, yloc) {
  stroke(droidid);
  noFill();
  discoursedroid(6, xloc, yloc, true, false, droidid, 2);
  var bubblewidth = 0;
  const verticaloffset = 24;
  const marginwidth = 25;
  var bubbleheight = statements.length * verticaloffset;
  textFont(chatterFont, 16);
  for (var i = 0; i < statements.length; i++) {
    if (textWidth(statements[i]) + 3 * marginwidth > bubblewidth) {
      var bubblewidth = textWidth(statements[i]) + 3 * marginwidth;
    }
  }
  var cursorinbox =
    mouseX > xloc - 30 - marginwidth &&
    mouseX < xloc - 30 - marginwidth + bubblewidth - 15 &&
    mouseY < yloc - 28 &&
    mouseY > yloc - 28 - bubbleheight;
  if (cursorinbox) {
    cursor(HAND);
    statementid = floor((mouseY - yloc + bubbleheight + 28) / verticaloffset);
    up = mouseX - xloc + marginwidth + 30 < bubblewidth / 2;
    down = mouseX - xloc + marginwidth + 30 > bubblewidth / 2;
  } else {
    cursor(ARROW);
  }

  mentonbubbleTR("", xloc, yloc, bubblewidth, bubbleheight);

  //draw triangles
  fill(cideaGreen);
  if (up && statementid != 0) {
    triangle(
      10,
      statementid * verticaloffset + 16,
      20,
      statementid * verticaloffset + 16,
      15,
      statementid * verticaloffset + 8
    );
  }
  if (down && statementid != statements.length - 1) {
    triangle(
      bubblewidth - 10,
      statementid * verticaloffset + 12,
      bubblewidth - 20,
      statementid * verticaloffset + 12,
      bubblewidth - 15,
      statementid * verticaloffset + 20
    );
  }

  if (actionup && actionstatementid != 0) {
    statements.move(actionstatementid, actionstatementid - 1);
  }
  actionup = false;
  if (actiondown && actionstatementid != statements.length - 1) {
    statements.move(actionstatementid + 1, actionstatementid); //move down if not the last
  }
  actiondown = false;

  for (var i = 0; i < statements.length; i++) {
    fill(clabeltext);
    text(
      statements[i],
      4 + marginwidth,
      4 + verticaloffset / 2 + i * verticaloffset,
      bubblewidth
    );
  }
}

function mouseReleased() {
  actionup = up;
  actiondown = down;
  actionstatementid = statementid;
}

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

// graphic annotations
//people

function drawGirl1(){
  fill(cdrawChildren);
  noStroke();
  beginShape();
  vertex(24.34, 157.55);
  bezierVertex(24.34, 157.55, 20.73, 150.21, 19.2, 146.88);
  bezierVertex(17.66, 143.53, 13.9, 135.92, 13.9, 135.92);
  bezierVertex(13.9, 135.92, 11.69, 135.35, 11.12, 134.52);
  vertex(10.56, 133.69);
  bezierVertex(10.56, 133.69, 10.14, 134.11, 9.04, 133.15);
  bezierVertex(7.93, 132.17, 7.51, 130.36, 7.51, 130.36);
  bezierVertex(7.51, 130.36, 5.01, 130.51, 5.43, 128.84);
  bezierVertex(5.84, 127.18, 5.43, 125.93, 5.43, 124.68);
  bezierVertex(5.43, 123.43, 6.53, 123.29, 4.74, 120.52);
  bezierVertex(2.92, 117.76, 3.34, 113.72, 3.34, 111.78);
  bezierVertex(3.34, 109.85, 4.74, 91.25, 4.74, 88.48);
  bezierVertex(4.74, 85.72, 2.36, 85.01, 4.32, 81.68);
  bezierVertex(6.26, 78.35, 6.8, 76.83, 6.8, 74.75);
  bezierVertex(6.8, 72.67, 8.62, 63.93, 8.62, 63.93);
  bezierVertex(8.62, 63.93, 7.37, 65.06, 6.68, 65.06);
  bezierVertex(5.97, 65.06, 7.66, 63.66, 7.22, 62);
  bezierVertex(6.8, 60.33, 6.39, 59.77, 6.39, 59.77);
  bezierVertex(6.39, 59.77, 6.26, 61.02, 6.39, 61.44);
  bezierVertex(6.53, 61.85, 5.43, 60.9, 5.16, 59.92);
  bezierVertex(4.86, 58.94, 4.32, 57.42, 4.44, 56.03);
  bezierVertex(4.59, 54.66, 4.86, 55.88, 2.5, 55.19);
  bezierVertex(0.12, 54.51, 0, 53.68, 0, 53.68);
  bezierVertex(0, 53.68, 1.25, 54.92, 3.34, 54.51);
  bezierVertex(5.43, 54.09, 2.5, 52.97, 2.5, 52.97);
  bezierVertex(2.5, 52.97, 4.44, 53.68, 4.86, 49.66);
  bezierVertex(5.28, 45.62, 3.49, 39.11, 3.49, 35.07);
  bezierVertex(3.49, 31.08, 2.78, 38.43, 2.78, 38.43);
  bezierVertex(2.78, 38.43, 2.09, 30.37, 2.78, 24.82);
  bezierVertex(3.49, 19.29, 2.63, 11.8, 8.62, 7.76);
  bezierVertex(14.61, 3.74, 18.37, 0, 24.48, 0);
  bezierVertex(30.62, 0, 39.51, 4.72, 42.02, 6.39);
  bezierVertex(44.52, 8.05, 47.03, 12.36, 47.18, 16.11);
  bezierVertex(47.3, 19.85, 47.3, 18.72, 47.3, 20.39);
  bezierVertex(47.3, 22.05, 47.64, 23.3, 48.43, 23.94);
  bezierVertex(49.19, 24.55, 51.35, 25.38, 50.71, 26.78);
  bezierVertex(50.1, 28.15, 49.46, 28.29, 49.46, 28.29);
  bezierVertex(49.46, 28.29, 49.68, 30.11, 49.68, 30.37);
  bezierVertex(49.68, 30.64, 49.73, 31.4, 48.89, 32.04);
  vertex(48.06, 32.68);
  bezierVertex(48.06, 32.68, 49.61, 33.21, 49.12, 34.05);
  vertex(48.62, 34.88);
  bezierVertex(48.62, 34.88, 49.04, 38.13, 48.43, 38.84);
  bezierVertex(47.79, 39.53, 45.92, 40.21, 44.6, 40.36);
  bezierVertex(43.27, 40.51, 38.83, 41.76, 38.83, 41.76);
  bezierVertex(38.83, 41.76, 45.21, 44.3, 47.18, 45.21);
  bezierVertex(49.12, 46.11, 53.51, 45.28, 56.63, 44.38);
  bezierVertex(59.77, 43.49, 70.9, 40.7, 72.84, 39.46);
  bezierVertex(74.78, 38.21, 76.18, 36.89, 76.33, 36.62);
  bezierVertex(76.45, 36.32, 79.25, 33.78, 79.71, 33.14);
  bezierVertex(80.21, 32.53, 81.73, 30.11, 82.37, 31.08);
  bezierVertex(83.01, 32.04, 83.2, 32.6, 82.17, 34.39);
  bezierVertex(81.11, 36.2, 80.77, 36.69, 80.77, 36.69);
  bezierVertex(80.77, 36.69, 85.39, 37.2, 87.2, 37.3);
  bezierVertex(89, 37.4, 91.6, 38.01, 90.67, 38.84);
  bezierVertex(89.73, 39.68, 87.38, 39.68, 87.38, 39.68);
  bezierVertex(87.38, 39.68, 90.81, 40.56, 91.28, 40.83);
  bezierVertex(91.75, 41.1, 92.85, 42.34, 91.04, 42.34);
  bezierVertex(89.24, 42.34, 85.85, 42.25, 85.85, 42.25);
  bezierVertex(85.85, 42.25, 85.61, 43.08, 87.43, 43.23);
  bezierVertex(89.24, 43.37, 91.04, 43.74, 90.5, 44.62);
  bezierVertex(89.93, 45.48, 87.11, 45.45, 86.49, 45.21);
  bezierVertex(85.9, 44.99, 83.25, 44.47, 83.05, 44.57);
  bezierVertex(82.88, 44.67, 82.47, 45.26, 82.78, 45.82);
  bezierVertex(83.1, 46.38, 86.37, 48.32, 86.74, 48.44);
  bezierVertex(87.11, 48.59, 87.57, 50.71, 86.08, 50.2);
  bezierVertex(84.6, 49.71, 83.1, 48.73, 82.32, 48.22);
  bezierVertex(81.53, 47.7, 81.11, 47.39, 81.11, 47.39);
  bezierVertex(81.11, 47.39, 78.98, 47.24, 78.81, 47.34);
  bezierVertex(78.61, 47.43, 77.04, 47.07, 73.65, 48.85);
  bezierVertex(70.26, 50.67, 70.16, 51.13, 68.54, 51.28);
  bezierVertex(66.92, 51.4, 64.56, 54.66, 61.69, 55.71);
  bezierVertex(58.82, 56.78, 58.67, 56.42, 54.86, 57.94);
  bezierVertex(51.06, 59.45, 44.11, 59.55, 44.11, 59.55);
  bezierVertex(44.11, 59.55, 46.51, 73.87, 46.51, 80.72);
  bezierVertex(46.51, 87.55, 47.35, 112.52, 46.51, 114.28);
  bezierVertex(45.68, 116.04, 44.47, 118.54, 43.64, 118.98);
  bezierVertex(42.8, 119.47, 41.8, 122.8, 43.84, 126.4);
  bezierVertex(45.87, 129.99, 51.06, 143.14, 50.22, 146.1);
  bezierVertex(49.39, 149.06, 47.72, 154.4, 44.57, 157.36);
  bezierVertex(41.4, 160.32, 39.93, 161.42, 39.93, 161.42);
  bezierVertex(39.93, 161.42, 36.3, 169.94, 35.02, 173.17);
  bezierVertex(33.72, 176.42, 31.68, 188.05, 31.48, 190.11);
  bezierVertex(31.31, 192.11, 31.58, 193.51, 31.58, 193.51);
  bezierVertex(31.58, 193.51, 38.83, 196.67, 40.3, 196.74);
  bezierVertex(41.8, 196.84, 45.78, 199.16, 45.04, 200.46);
  vertex(44.3, 201.73);
  bezierVertex(44.3, 201.73, 49.58, 201.83, 49.48, 204.16);
  bezierVertex(49.39, 206.46, 46.24, 210.81, 42.17, 211.65);
  bezierVertex(38.09, 212.48, 32.98, 211.65, 29.91, 211.72);
  bezierVertex(26.84, 211.82, 18.05, 212.75, 15.99, 211.82);
  bezierVertex(13.95, 210.89, 12.57, 208.86, 13.88, 206.65);
  bezierVertex(15.15, 204.43, 15.99, 199.63, 15.99, 199.24);
  bezierVertex(15.99, 198.87, 11.91, 198.6, 11.08, 197.23);
  bezierVertex(10.24, 195.83, 9.04, 190.65, 12.65, 187.05);
  bezierVertex(16.28, 183.45, 17.95, 180.85, 17.95, 180.85);
  bezierVertex(17.95, 180.85, 21.37, 168.47, 21.66, 166.34);
  bezierVertex(21.93, 164.21, 24.34, 157.55, 24.34, 157.55);
  vertex(24.34, 157.55);
  endShape();
}

function drawGirl2(){
  fill(cdrawChildren);
  noStroke();

  beginShape();
  vertex(56.71, 129.84);
  bezierVertex(56.56, 129.84, 51.45, 129.81, 51.08, 129.57);
  bezierVertex(50.71, 129.35, 49.61, 124.23, 49.56, 120.88);
  bezierVertex(49.51, 117.53, 49.41, 102.91, 49.41, 102.91);
  bezierVertex(49.41, 102.91, 47.77, 103.45, 46.98, 103.13);
  bezierVertex(46.22, 102.84, 45.73, 102.15, 46.42, 101.44);
  bezierVertex(47.08, 100.73, 48.38, 99.88, 48.38, 99.88);
  bezierVertex(48.38, 99.88, 49.36, 97.85, 48.16, 98.39);
  bezierVertex(46.96, 98.92, 43.66, 101.18, 43, 101.3);
  bezierVertex(42.31, 101.44, 40.08, 100.96, 42.09, 99.24);
  bezierVertex(44.11, 97.55, 46.37, 95.67, 46.37, 95.67);
  bezierVertex(46.37, 95.67, 43.84, 96.21, 43.12, 96.75);
  bezierVertex(42.41, 97.28, 40.62, 98.75, 39.78, 98.85);
  bezierVertex(39, 98.92, 38.63, 97.82, 39.17, 96.79);
  bezierVertex(39.71, 95.74, 40.2, 95.3, 40.2, 95.3);
  bezierVertex(40.2, 95.3, 38.8, 95.79, 38.75, 94.66);
  bezierVertex(38.73, 93.56, 40.96, 91.14, 42.41, 90.38);
  bezierVertex(43.84, 89.62, 46, 88.77, 46.96, 88.45);
  bezierVertex(47.89, 88.13, 46, 81.91, 45.61, 79.64);
  bezierVertex(45.19, 77.34, 44.48, 75.23, 44.48, 75.23);
  bezierVertex(44.48, 75.23, 42.14, 76.67, 39.49, 77.65);
  bezierVertex(36.84, 78.63, 30.04, 80.15, 23.31, 77.43);
  bezierVertex(16.55, 74.69, 7.76, 71.07, 6.98, 70.16);
  bezierVertex(6.21, 69.28, 6.21, 68.96, 6.68, 68.25);
  bezierVertex(7.12, 67.52, 7.17, 66.98, 7.29, 66.91);
  bezierVertex(7.44, 66.81, 6.14, 65.66, 5.67, 65.12);
  bezierVertex(5.23, 64.56, 4, 61.77, 3.88, 60.47);
  bezierVertex(3.76, 59.17, 3.56, 57.19, 2.73, 56.11);
  bezierVertex(1.89, 55.04, 1.7, 54.82, 1.65, 54.77);
  bezierVertex(1.57, 54.7, 0.61, 55.14, 0.57, 54.74);
  bezierVertex(0.49, 54.33, 0.27, 54.01, 0.54, 53.72);
  vertex(0.81, 53.42);
  bezierVertex(0.81, 53.42, 0.44, 53.4, 0.37, 53.18);
  bezierVertex(0.32, 52.96, 0.34, 52.81, 0.34, 52.81);
  bezierVertex(0.34, 52.81, 0.05, 52.98, 0.03, 52.39);
  bezierVertex(-0.02, 51.78, 0.89, 50.68, 2.04, 50.17);
  bezierVertex(3.19, 49.65, 5.31, 49.26, 6.44, 49.6);
  bezierVertex(7.59, 49.95, 9.38, 51.44, 9.73, 52.69);
  bezierVertex(10.07, 53.96, 11.42, 56.68, 11.44, 57.39);
  vertex(11.44, 58.46);
  bezierVertex(11.44, 58.46, 13.88, 59.98, 14.83, 60.59);
  bezierVertex(15.77, 61.18, 17.78, 61.65, 18.03, 62.09);
  bezierVertex(18.27, 62.53, 18.37, 62.94, 18.47, 63.02);
  bezierVertex(18.57, 63.07, 20.7, 63.8, 21.76, 63.56);
  bezierVertex(22.82, 63.34, 24.02, 63.95, 24.39, 64.41);
  bezierVertex(24.73, 64.88, 28.64, 64.63, 29.86, 65.24);
  bezierVertex(31.09, 65.86, 31.24, 65.54, 32.64, 65.81);
  bezierVertex(34.01, 66.08, 34.53, 66.88, 35.59, 65.39);
  bezierVertex(36.64, 63.92, 38.8, 60.72, 40.79, 58.66);
  bezierVertex(42.76, 56.6, 42.49, 56.07, 43.84, 53.91);
  bezierVertex(45.19, 51.76, 46.1, 50.04, 47.18, 49.8);
  bezierVertex(48.26, 49.51, 50, 48.18, 51.08, 47.67);
  vertex(52.16, 47.18);
  bezierVertex(52.16, 47.18, 51.35, 47.23, 50.44, 45.76);
  bezierVertex(49.56, 44.27, 49.68, 43.61, 49.56, 42.8);
  bezierVertex(49.41, 41.99, 49.83, 44.37, 49.09, 44.73);
  bezierVertex(48.38, 45.08, 48.16, 45.12, 48.16, 45.12);
  bezierVertex(48.16, 45.12, 49.19, 44.05, 48.75, 43.17);
  bezierVertex(48.28, 42.26, 47.57, 42.36, 45.88, 41.28);
  bezierVertex(44.16, 40.21, 41.99, 37.73, 41.95, 35.14);
  bezierVertex(41.9, 32.54, 43.08, 31.79, 43.08, 30.61);
  bezierVertex(43.08, 29.46, 43.12, 29.22, 43.12, 29.22);
  bezierVertex(43.12, 29.22, 42.46, 31.03, 40.64, 31.32);
  bezierVertex(38.85, 31.64, 37.38, 30.44, 37.38, 30.44);
  bezierVertex(37.38, 30.44, 38.8, 30.78, 39.98, 30.71);
  bezierVertex(41.14, 30.61, 41.95, 30, 41.95, 30);
  bezierVertex(41.95, 30, 40.96, 29.8, 40.37, 29.36);
  bezierVertex(39.78, 28.9, 39.76, 28.68, 39.76, 28.68);
  bezierVertex(39.76, 28.68, 41.23, 29.46, 41.6, 29.41);
  bezierVertex(41.95, 29.36, 41.63, 29.41, 40.91, 28.82);
  bezierVertex(40.2, 28.24, 39.98, 27.97, 39.98, 27.97);
  bezierVertex(39.98, 27.97, 41.38, 28.9, 42.27, 28.46);
  bezierVertex(43.17, 28.02, 45.02, 23.76, 45.06, 20.35);
  bezierVertex(45.11, 16.95, 46.86, 5.79, 52.11, 2.98);
  bezierVertex(57.37, 0.16, 65.2, -0.35, 65.6, 0.16);
  bezierVertex(66.01, 0.65, 72.47, -0.3, 75.98, 1.95);
  bezierVertex(79.49, 4.18, 84.53, 14.21, 83.79, 18.96);
  bezierVertex(83.08, 23.71, 80.35, 31.05, 80.8, 32.54);
  bezierVertex(81.24, 34.01, 82.81, 35.53, 84.21, 35.51);
  bezierVertex(85.61, 35.46, 86.96, 35.19, 86.99, 35.04);
  bezierVertex(87.03, 34.92, 85.68, 36.12, 84.75, 36.39);
  bezierVertex(83.79, 36.66, 83.08, 36.66, 82.22, 36.66);
  bezierVertex(81.39, 36.66, 83.45, 38.49, 83.3, 39.57);
  bezierVertex(83.18, 40.65, 82.22, 41.62, 82.22, 41.62);
  bezierVertex(82.22, 41.62, 82.81, 40.52, 82.27, 39.62);
  vertex(81.73, 38.71);
  bezierVertex(81.73, 38.71, 81.39, 41.28, 82.32, 42.36);
  bezierVertex(83.28, 43.41, 84.16, 43.71, 84.16, 43.71);
  bezierVertex(84.16, 43.71, 81.66, 43.71, 81.07, 43.02);
  bezierVertex(80.48, 42.36, 80.8, 44.42, 79.54, 45.27);
  bezierVertex(78.27, 46.13, 78.27, 46.62, 78.27, 46.62);
  bezierVertex(78.27, 46.62, 80.6, 50.19, 82, 51);
  bezierVertex(83.4, 51.81, 88.07, 57.09, 88.11, 60.5);
  bezierVertex(88.16, 63.9, 89.56, 73.76, 89.74, 75.77);
  bezierVertex(89.91, 77.8, 91.18, 84.78, 91.41, 85.68);
  bezierVertex(91.63, 86.56, 91.53, 89.08, 90.64, 90.43);
  bezierVertex(89.74, 91.78, 86.42, 95.25, 86.22, 95.84);
  bezierVertex(86.05, 96.43, 88.16, 103.55, 89.24, 105.53);
  bezierVertex(90.32, 107.49, 96.34, 117.48, 96.76, 119.19);
  bezierVertex(97.15, 120.88, 97.54, 121.78, 96.88, 122.27);
  bezierVertex(96.22, 122.76, 95.36, 134.37, 94.06, 138.18);
  bezierVertex(92.76, 141.98, 94.55, 150.01, 94.4, 152.75);
  bezierVertex(94.28, 155.46, 94.28, 157.35, 94.23, 158.74);
  bezierVertex(94.18, 160.14, 94.6, 166.31, 96.49, 167.56);
  bezierVertex(98.36, 168.83, 98.28, 167.26, 98.99, 168.56);
  bezierVertex(99.71, 169.86, 100.52, 169.37, 101.11, 170.71);
  bezierVertex(101.7, 172.06, 110.02, 187.41, 110.78, 189.22);
  bezierVertex(111.54, 191, 112.62, 197.15, 112.8, 197.32);
  bezierVertex(112.97, 197.49, 115.45, 198.93, 116.38, 200.72);
  bezierVertex(117.34, 202.51, 120.53, 204.12, 119.89, 207.67);
  bezierVertex(119.28, 211.2, 118.15, 213.08, 115.67, 213.99);
  bezierVertex(113.21, 214.87, 108.67, 219.71, 107.22, 221.33);
  bezierVertex(105.77, 222.94, 97.37, 225.37, 93.86, 223.92);
  bezierVertex(90.37, 222.48, 85.83, 219.93, 89.64, 216.75);
  bezierVertex(93.47, 213.57, 94.45, 213.3, 94.65, 213.08);
  bezierVertex(94.82, 212.86, 100.74, 206.91, 100.93, 205.35);
  bezierVertex(101.11, 203.78, 100.61, 202.38, 99.63, 200.23);
  bezierVertex(98.65, 198.08, 98.5, 198.13, 95.68, 192.03);
  vertex(92.83, 185.94);
  bezierVertex(92.83, 185.94, 90.55, 182.58, 87.99, 180.38);
  bezierVertex(85.41, 178.18, 83.57, 178.55, 81.83, 176.66);
  bezierVertex(80.08, 174.78, 77.65, 171.91, 77.65, 171.91);
  bezierVertex(77.65, 171.91, 80.58, 183.71, 80.6, 185.55);
  bezierVertex(80.65, 187.38, 79.99, 187.77, 80.75, 189.12);
  bezierVertex(81.51, 190.46, 82.2, 190.95, 81.61, 191.93);
  bezierVertex(81.02, 192.94, 80.43, 193.82, 81.14, 194.8);
  bezierVertex(81.88, 195.8, 81.95, 199.28, 81.88, 200.4);
  bezierVertex(81.78, 201.53, 83.18, 203.31, 83.18, 203.31);
  bezierVertex(83.18, 203.31, 86.99, 210.27, 85.95, 212.91);
  bezierVertex(84.92, 215.55, 82.15, 217.34, 78.27, 217.34);
  bezierVertex(74.41, 217.34, 69.92, 218.59, 66.36, 219.1);
  bezierVertex(62.82, 219.59, 53.59, 220.69, 52.06, 217.39);
  bezierVertex(50.54, 214.08, 50.39, 210.76, 53.73, 209.68);
  bezierVertex(57.05, 208.6, 66.01, 203.63, 67.17, 202.48);
  bezierVertex(68.35, 201.31, 68.94, 201.94, 68.52, 200.01);
  bezierVertex(68.12, 198.08, 67.88, 194.77, 67.27, 192.74);
  bezierVertex(66.63, 190.73, 61.15, 173.16, 60.73, 171.52);
  bezierVertex(60.34, 169.86, 57.15, 157.99, 57.42, 152.92);
  bezierVertex(57.69, 147.85, 56.71, 129.84, 56.71, 129.84);
  vertex(56.71, 129.84);
  endShape();
}

function drawGirl3(){
  fill(cdrawChildren);
  noStroke();

  beginShape();
  vertex(17.85, 192.17);
  bezierVertex(17.18, 191.93, 16.2, 190.56, 15.81, 189.82);
  bezierVertex(15.44, 189.04, 14.53, 188.67, 14.53, 188.67);
  vertex(14.06, 184.93);
  vertex(15.54, 170.68);
  bezierVertex(15.54, 170.68, 16.15, 164.52, 16.32, 163.9);
  bezierVertex(16.52, 163.29, 17.85, 160.33, 17.85, 160.33);
  bezierVertex(17.85, 160.33, 18.31, 161.55, 18.61, 162.97);
  bezierVertex(18.88, 164.37, 18.36, 166.87, 18.21, 168.63);
  bezierVertex(18.09, 170.37, 17.23, 172.76, 17.62, 176.09);
  bezierVertex(17.99, 179.45, 18.36, 183.12, 18.85, 184.81);
  bezierVertex(19.32, 186.52, 19.98, 192.54, 19.98, 192.54);
  bezierVertex(19.98, 192.54, 18.51, 192.39, 17.85, 192.17);
  vertex(17.85, 192.17);
  vertex(65.73, 96.08);
  bezierVertex(65.49, 95.56, 64.31, 94.98, 64.31, 94.98);
  bezierVertex(64.31, 94.98, 65.07, 94.95, 65.17, 94.56);
  bezierVertex(65.24, 94.19, 65.49, 93.68, 64.51, 93.36);
  bezierVertex(63.5, 93.02, 61.24, 92.11, 61.24, 92.11);
  bezierVertex(61.24, 92.11, 61.24, 92.11, 62.57, 91.7);
  bezierVertex(63.89, 91.28, 64.46, 90.79, 64.21, 89.66);
  bezierVertex(63.97, 88.54, 61.41, 89.52, 59.3, 90.18);
  bezierVertex(57.16, 90.84, 54.85, 91.5, 53.21, 91.55);
  bezierVertex(51.54, 91.6, 49.75, 93.29, 49.01, 93.29);
  bezierVertex(48.22, 93.29, 47.02, 92.77, 47.02, 92.77);
  bezierVertex(47.02, 92.77, 47.02, 92.77, 46.53, 91.6);
  bezierVertex(46.06, 90.42, 44.12, 80.14, 43.31, 79.02);
  bezierVertex(42.53, 77.87, 41.96, 71.11, 41.72, 70.45);
  bezierVertex(41.49, 69.79, 41.3, 65.56, 41.25, 62.06);
  bezierVertex(41.2, 58.58, 34.81, 54.49, 34.81, 54.49);
  bezierVertex(34.81, 54.49, 33.42, 52.04, 32.63, 50.85);
  bezierVertex(31.82, 49.65, 31.92, 46.64, 31.92, 46.64);
  vertex(35.85, 47.39);
  bezierVertex(35.85, 47.39, 35.94, 47.61, 37.52, 47.93);
  bezierVertex(39.06, 48.25, 40.17, 47.1, 40.71, 46.54);
  bezierVertex(41.25, 45.97, 42.13, 43.65, 42.13, 43.65);
  bezierVertex(42.13, 43.65, 42.13, 43.65, 42.62, 43.28);
  bezierVertex(43.09, 42.87, 43.19, 42.38, 43.19, 41.64);
  bezierVertex(43.19, 40.91, 43.63, 40.83, 43.63, 40.83);
  vertex(44.07, 40.05);
  bezierVertex(44.07, 40.05, 44.64, 39.73, 45.13, 39.49);
  bezierVertex(45.6, 39.27, 45.4, 38.61, 45.4, 38.61);
  vertex(45.84, 38.14);
  bezierVertex(45.84, 38.14, 45.84, 38.14, 46.82, 36.53);
  bezierVertex(47.81, 34.94, 47.24, 33.81, 46.82, 31.22);
  bezierVertex(46.38, 28.62, 46.92, 28.25, 46.92, 28.25);
  bezierVertex(46.92, 28.25, 48.22, 26.98, 48.42, 26.59);
  bezierVertex(48.62, 26.22, 49.75, 24.24, 50.11, 20.84);
  bezierVertex(50.51, 17.46, 47.9, 12.32, 46.53, 10.24);
  bezierVertex(45.18, 8.18, 40.39, 3.85, 34.67, 1.38);
  bezierVertex(28.95, -1.07, 20.3, -0.26, 14.21, 3.56);
  bezierVertex(8.12, 7.38, 6.55, 19.25, 5.98, 22.82);
  bezierVertex(5.42, 26.39, 6.23, 36.48, 6.23, 38.22);
  bezierVertex(6.23, 39.66, 7.73, 41.81, 8.1, 42.35);
  bezierVertex(7.78, 41.47, 7.06, 36.04, 7.58, 39.49);
  bezierVertex(8.17, 43.16, 14.31, 45.71, 14.31, 45.71);
  bezierVertex(14.31, 45.71, 14.31, 45.71, 12.98, 47.83);
  bezierVertex(11.66, 49.96, 7.46, 60.32, 6.75, 62.4);
  bezierVertex(6.03, 64.45, 7.97, 77.79, 8.17, 79.83);
  bezierVertex(8.34, 81.83, 8.64, 88.12, 8.54, 90.18);
  bezierVertex(8.44, 92.26, 5.12, 96.59, 4.04, 100.78);
  bezierVertex(2.96, 104.96, 1.27, 111.62, 1.27, 111.62);
  bezierVertex(0.97, 113.87, 1.78, 127.73, 1.78, 127.73);
  bezierVertex(1.78, 127.73, 3.43, 141.85, 3.48, 144.91);
  bezierVertex(3.53, 147.99, 6.79, 151.32, 6.79, 151.32);
  bezierVertex(6.79, 151.32, 5.22, 156.97, 5.22, 157.17);
  bezierVertex(5.22, 157.37, 3.33, 162.48, 2.3, 166.13);
  bezierVertex(1.27, 169.73, 2.82, 176.78, 3.26, 180.81);
  bezierVertex(3.68, 184.88, 4.85, 190.61, 4.85, 190.61);
  bezierVertex(4.85, 190.61, 2.77, 191.78, 2.05, 193.05);
  bezierVertex(1.34, 194.33, 0.75, 201.06, 0.63, 201.2);
  bezierVertex(0.56, 201.35, -0.16, 203.23, -0.01, 204.8);
  bezierVertex(0.14, 206.34, 5.71, 207.67, 8.22, 207.57);
  bezierVertex(10.7, 207.47, 12.69, 205.44, 13.23, 205.07);
  bezierVertex(13.74, 204.7, 18.51, 202.94, 18.51, 202.94);
  vertex(18.46, 205.07);
  bezierVertex(18.46, 205.07, 17.7, 207.81, 17.13, 209.7);
  bezierVertex(16.57, 211.58, 17.38, 212.46, 18.29, 214.03);
  bezierVertex(19.17, 215.57, 28.26, 215.4, 30.84, 214.91);
  bezierVertex(33.44, 214.44, 41.62, 213.42, 45.55, 212.27);
  bezierVertex(49.48, 211.14, 50.41, 208.69, 50.11, 204.41);
  bezierVertex(49.84, 200.13, 42.01, 200.98, 40.54, 200.79);
  bezierVertex(39.06, 200.59, 33.78, 196.58, 33.07, 195.94);
  bezierVertex(32.36, 195.28, 31.08, 196.31, 31.08, 196.31);
  bezierVertex(31.08, 196.31, 31.5, 185.2, 31.97, 181.7);
  bezierVertex(32.46, 178.22, 32.04, 175.48, 31.79, 172.98);
  bezierVertex(31.55, 170.49, 31.38, 164.22, 31.38, 164.22);
  bezierVertex(31.38, 164.22, 31.94, 162.48, 32.46, 159.57);
  bezierVertex(32.97, 156.66, 32.92, 152.79, 32.92, 152.79);
  bezierVertex(32.92, 152.79, 39.58, 151.86, 40.64, 151.37);
  bezierVertex(41.67, 150.9, 41.76, 148.87, 41.96, 147.92);
  bezierVertex(42.13, 146.99, 48.57, 146.47, 50.8, 145.35);
  bezierVertex(53.01, 144.22, 50.65, 141.24, 49.8, 138.79);
  bezierVertex(48.96, 136.34, 49.5, 124.94, 48.81, 122.63);
  bezierVertex(48.1, 120.33, 47.24, 102, 47.24, 102);
  bezierVertex(47.24, 102, 49.84, 101.68, 50.85, 102.05);
  bezierVertex(51.83, 102.42, 56.75, 101.73, 58.24, 101.36);
  bezierVertex(59.77, 100.97, 62.12, 100.04, 62.61, 100.04);
  bezierVertex(63.08, 100.04, 63.55, 100.46, 64.06, 100.36);
  bezierVertex(64.6, 100.26, 64.63, 99.85, 64.51, 99.09);
  bezierVertex(64.36, 98.33, 61.71, 97.3, 61.71, 97.3);
  vertex(65.22, 97.3);
  bezierVertex(66.47, 97.3, 65.95, 96.59, 65.73, 96.08);
  vertex(65.73, 96.08);
  endShape();
}

function drawGirl4(){
  fill(cdrawChildren);
  noStroke();

  beginShape();
  vertex(2.2, 87.49);
  bezierVertex(2.79, 87.4, 5.28, 88.47, 8.09, 89.06);
  bezierVertex(10.87, 89.63, 11.08, 87.6, 11.08, 87.6);
  bezierVertex(11.08, 87.6, 8.09, 86.33, 6.64, 83.53);
  bezierVertex(5.19, 80.71, 9.04, 81.89, 10.99, 83.23);
  bezierVertex(12.91, 84.58, 19.96, 89.42, 19.96, 89.42);
  bezierVertex(19.96, 89.42, 19.75, 88.56, 19.75, 88.08);
  bezierVertex(19.75, 87.6, 21.88, 87.01, 21.88, 87.01);
  bezierVertex(21.88, 87.01, 26.3, 86.15, 28.13, 85.46);
  bezierVertex(29.97, 84.78, 37.78, 82.17, 39.91, 81.1);
  bezierVertex(42.02, 80.05, 45.6, 77.05, 45.6, 77.05);
  vertex(26.89, 72.09);
  vertex(26.71, 67.47);
  bezierVertex(25.96, 67.5, 18.14, 67.7, 15.9, 67.77);
  bezierVertex(13.55, 67.86, 9.67, 66.72, 12.41, 65.15);
  bezierVertex(15.15, 63.58, 18.33, 64.17, 18.33, 64.17);
  bezierVertex(18.33, 64.17, 19.28, 62.35, 16.6, 61.31);
  bezierVertex(13.95, 60.28, 11.28, 59.81, 10.83, 59.4);
  bezierVertex(10.4, 59.01, 9.81, 57.81, 10.94, 56.92);
  bezierVertex(12.07, 56.05, 16.02, 53.53, 18.71, 53.8);
  bezierVertex(21.27, 54.05, 23.49, 55.1, 26.12, 56.49);
  bezierVertex(28.32, 55.76, 30.26, 55.44, 30.26, 55.44);
  bezierVertex(30.26, 55.44, 35.27, 57.28, 37.1, 58.06);
  bezierVertex(38.94, 58.83, 40.09, 59.51, 44.15, 60.97);
  bezierVertex(48.2, 62.42, 48.29, 60.97, 50.04, 60.67);
  bezierVertex(51.76, 60.38, 51.58, 59.42, 52.35, 58.35);
  bezierVertex(53.12, 57.28, 54.84, 53.3, 57.45, 51.78);
  bezierVertex(60.07, 50.21, 63.45, 43.54, 63.45, 43.54);
  bezierVertex(63.45, 43.54, 57.36, 44.41, 55.14, 44.11);
  bezierVertex(52.92, 43.82, 51.85, 41.88, 51.96, 40.93);
  bezierVertex(52.05, 39.95, 51.49, 38.31, 50.6, 37.63);
  bezierVertex(49.74, 36.95, 50.42, 36.17, 50.42, 36.17);
  bezierVertex(50.42, 36.17, 50.6, 35.61, 49.74, 35.31);
  bezierVertex(48.88, 35.01, 49.27, 34.45, 49.27, 34.45);
  vertex(49.06, 32.19);
  bezierVertex(49.06, 32.19, 47.71, 31.72, 47.43, 30.94);
  bezierVertex(47.14, 30.17, 47.71, 29.21, 48.59, 27.76);
  bezierVertex(49.45, 26.3, 49.65, 24.85, 48.97, 22.44);
  bezierVertex(48.29, 20, 47.71, 16.23, 49.93, 9.84);
  bezierVertex(52.14, 3.44, 64.97, 0.94, 68.25, 0.83);
  bezierVertex(68.59, 0.83, 68.98, 0.87, 69.41, 0.97);
  bezierVertex(71.69, 1.01, 74.16, 1.74, 76.95, 3.03);
  bezierVertex(89.82, 9.04, 91.08, 14.68, 91.11, 15.04);
  bezierVertex(91.22, 15.2, 93.78, 18.55, 94.48, 19.53);
  bezierVertex(97.18, 23.21, 96.61, 28.03, 96.61, 27.08);
  bezierVertex(96.61, 26.67, 95.73, 24.98, 94.89, 23.44);
  bezierVertex(96.7, 28.65, 96.75, 39.27, 97.95, 41.5);
  bezierVertex(99.31, 44.02, 97.09, 45.66, 97.09, 44.98);
  bezierVertex(97.09, 44.32, 95.93, 43.34, 95.93, 43.34);
  bezierVertex(95.93, 43.34, 96.41, 46.05, 97.58, 46.55);
  bezierVertex(98.72, 47.02, 100.46, 44.41, 100.46, 44.41);
  bezierVertex(100.46, 44.41, 100.46, 44.41, 100.28, 46.16);
  bezierVertex(100.08, 47.89, 97.18, 48, 96.23, 48);
  bezierVertex(95.25, 48, 93.42, 46.64, 93.42, 46.64);
  bezierVertex(93.42, 46.64, 93.8, 47.12, 94.69, 49.53);
  bezierVertex(95.55, 51.96, 93.42, 51.78, 93.42, 51.78);
  bezierVertex(93.42, 51.78, 93.42, 51.78, 93.62, 51.1);
  bezierVertex(93.8, 50.41, 91.79, 49.25, 91.79, 49.25);
  bezierVertex(91.79, 49.25, 92.08, 51.78, 92.94, 52.64);
  bezierVertex(93.8, 53.51, 95.93, 52.05, 95.93, 52.05);
  bezierVertex(95.93, 52.05, 95.93, 53.51, 93.15, 54.1);
  bezierVertex(90.34, 54.67, 88.71, 51.87, 88.71, 51.87);
  vertex(89.77, 55.14);
  bezierVertex(89.77, 55.14, 95.55, 71.13, 96.5, 73.75);
  bezierVertex(97.47, 76.37, 102.59, 91.08, 104.61, 95.04);
  bezierVertex(106.62, 99.02, 104.81, 101.93, 104.81, 101.93);
  bezierVertex(108.07, 105.5, 108.37, 115.19, 108.07, 120.31);
  bezierVertex(107.8, 125.45, 98.24, 139.48, 96.23, 143.76);
  bezierVertex(94.19, 148.01, 91.31, 158.27, 91.31, 161.09);
  bezierVertex(91.31, 163.89, 91.31, 178.22, 91.7, 182.2);
  bezierVertex(92.08, 186.16, 89, 199.71, 88.61, 201.26);
  bezierVertex(88.21, 202.81, 87.26, 207.36, 88.12, 210.27);
  bezierVertex(89, 213.18, 79.35, 213.09, 75, 213.09);
  bezierVertex(70.67, 213.09, 67.68, 214.82, 62.09, 215.59);
  bezierVertex(56.49, 216.36, 52.05, 212.02, 50.6, 208.42);
  bezierVertex(49.18, 204.83, 58.62, 202.42, 61.02, 201.26);
  bezierVertex(63.45, 200.1, 65.26, 197.58, 65.26, 197.58);
  bezierVertex(65.26, 197.58, 57.17, 197.87, 53.98, 197.39);
  bezierVertex(50.81, 196.89, 47.52, 194, 47.61, 191.09);
  bezierVertex(47.71, 188.18, 53.69, 186.45, 55.63, 185.68);
  bezierVertex(57.56, 184.91, 62.27, 182.38, 62.27, 182.38);
  bezierVertex(62.27, 182.38, 62.27, 177.65, 61.41, 175.4);
  bezierVertex(60.55, 173.19, 58.51, 168.35, 56.58, 162.73);
  bezierVertex(54.66, 157.11, 52.73, 148.01, 53.89, 140.76);
  bezierVertex(55.04, 133.48, 67.21, 117.42, 67.21, 117.42);
  bezierVertex(67.21, 117.42, 66.8, 116.65, 67.57, 115.28);
  bezierVertex(68.36, 113.92, 67.39, 110.64, 64.6, 104.43);
  bezierVertex(61.79, 98.25, 57.17, 84.69, 57.17, 84.69);
  bezierVertex(57.17, 84.69, 54.09, 86.71, 51.96, 89.15);
  bezierVertex(49.83, 91.56, 32.57, 98.63, 30.26, 99.41);
  bezierVertex(27.95, 100.18, 23.72, 101.04, 23.72, 101.04);
  vertex(21.38, 98.63);
  bezierVertex(21.38, 98.63, 17.15, 98.63, 13.98, 98.34);
  bezierVertex(10.78, 98.04, 8.18, 97.75, 5.78, 96.5);
  bezierVertex(3.35, 95.24, 1.43, 90.97, 0.95, 89.63);
  bezierVertex(0.48, 88.26, 1.63, 87.6, 2.2, 87.49);
  vertex(2.2, 87.49);
  endShape();
}

function drawGirl5(){
  fill(cdrawChildren);
  noStroke();

  beginShape();
  vertex(80.47, 96.78);
  bezierVertex(80.47, 97.83, 80.4, 98.75, 80.4, 99.47);
  bezierVertex(80.4, 100.19, 80.47, 101.22, 80.47, 101.22);
  vertex(79.76, 101.11);
  bezierVertex(79.76, 101.11, 79.49, 100.46, 79.49, 100.05);
  bezierVertex(79.49, 99.65, 79.96, 97.97, 79.96, 97.77);
  bezierVertex(79.96, 97.56, 80.92, 90.01, 82.35, 88.24);
  bezierVertex(82.35, 88.24, 80.47, 95.75, 80.47, 96.78);
  vertex(80.47, 96.78);
  endShape();
  vertex(91.48, 110.61);
  bezierVertex(92.85, 105.08, 93.97, 99.34, 94.8, 93.87);
  bezierVertex(95.65, 88.37, 96.05, 81.07, 97.01, 76.22);
  bezierVertex(98, 71.4, 99.23, 71.72, 99.05, 68.8);
  bezierVertex(98.85, 65.84, 91.35, 58.22, 88.69, 55.8);
  bezierVertex(86, 53.4, 83.92, 48.89, 83.27, 46.54);
  bezierVertex(82.62, 44.19, 83.67, 41.65, 84.52, 38.58);
  bezierVertex(85.35, 35.51, 84.84, 31.65, 84.84, 31.65);
  bezierVertex(84.84, 31.65, 84.84, 31.65, 85.69, 31.45);
  bezierVertex(86.54, 31.27, 87.25, 30.62, 87.77, 28.98);
  bezierVertex(88.28, 27.35, 87.84, 24.34, 87.5, 22.33);
  bezierVertex(87.19, 20.31, 85.17, 20.56, 85.17, 20.56);
  bezierVertex(85.17, 20.56, 84.9, 19.77, 84.52, 17.62);
  bezierVertex(84.12, 15.47, 82.28, 11.36, 81.39, 9.73);
  bezierVertex(80.47, 8.11, 75.19, 3.79, 75.53, 3.67);
  bezierVertex(75.84, 3.54, 75.53, 2.87, 75.53, 2.87);
  bezierVertex(75.53, 2.87, 76.24, 3.4, 79.04, 4.57);
  bezierVertex(81.84, 5.76, 85.49, 13.18, 85.75, 14.1);
  bezierVertex(86, 15.02, 87.46, 18.67, 87.46, 18.67);
  bezierVertex(87.46, 18.67, 87.46, 18.67, 87.25, 18.16);
  bezierVertex(87.05, 17.62, 86.67, 14.95, 87.05, 15.8);
  bezierVertex(87.46, 16.65, 88.1, 20.31, 88.1, 21.03);
  bezierVertex(88.1, 21.74, 88.82, 25.26, 88.82, 25.26);
  bezierVertex(88.82, 25.26, 89.4, 26.88, 89.65, 28.27);
  bezierVertex(89.92, 29.64, 89.13, 35.11, 89.13, 35.11);
  bezierVertex(89.13, 35.11, 89.13, 35.11, 89.58, 33.49);
  bezierVertex(90.05, 31.85, 90.77, 29.57, 90.63, 28.33);
  bezierVertex(90.5, 27.1, 89.4, 21.27, 89.4, 21.27);
  bezierVertex(89.4, 21.27, 90.12, 23.76, 90.19, 25.06);
  bezierVertex(90.25, 26.36, 92.54, 29.3, 92.54, 29.3);
  bezierVertex(92.54, 29.3, 91.84, 26.77, 90.97, 24.9);
  bezierVertex(90.07, 23.04, 90.66, 18.6, 91.26, 15.8);
  bezierVertex(91.84, 13, 89.98, 10.51, 88.64, 6.68);
  bezierVertex(87.32, 2.8, 81.03, 0.56, 79.11, 0.33);
  bezierVertex(77.18, 0.11, 74.67, 1.77, 74.67, 1.77);
  bezierVertex(74.67, 1.77, 74.23, 1.18, 73.56, 1.43);
  bezierVertex(72.91, 1.7, 72.91, 2.04, 72.91, 2.04);
  bezierVertex(72.91, 2.04, 72.91, 2.04, 71.29, 1.97);
  bezierVertex(69.66, 1.9, 68.56, 1.86, 67, 2.22);
  bezierVertex(65.43, 2.55, 62.95, 3.87, 60.06, 5.33);
  bezierVertex(57.17, 6.81, 56.1, 9.01, 54.44, 11.21);
  bezierVertex(52.78, 13.43, 52.99, 21.92, 52.38, 25.13);
  bezierVertex(51.8, 28.33, 54.02, 31.65, 54.02, 31.65);
  bezierVertex(54.02, 31.65, 53.95, 31.43, 53.57, 30.51);
  bezierVertex(53.32, 29.95, 53.19, 28.16, 53.12, 27.15);
  bezierVertex(53.46, 28.96, 55.34, 33.78, 55.69, 34.41);
  bezierVertex(56.07, 35.08, 57.22, 36.16, 57.51, 36.45);
  bezierVertex(57.8, 36.74, 58.09, 39.25, 58.09, 39.25);
  bezierVertex(58.09, 39.25, 58.51, 38.11, 58.49, 37.37);
  bezierVertex(58.45, 36.63, 57.37, 34.01, 57.57, 34.37);
  bezierVertex(57.78, 34.72, 58.96, 36.63, 59.37, 37.73);
  bezierVertex(59.75, 38.83, 61.38, 43.54, 61.38, 43.54);
  bezierVertex(61.38, 43.54, 61, 43.74, 58.58, 43.8);
  bezierVertex(56.16, 43.87, 51.24, 44.41, 51.24, 44.41);
  bezierVertex(51.24, 44.41, 50.88, 43.98, 49.45, 43.98);
  bezierVertex(48.02, 43.98, 44.17, 46.02, 43.23, 46.97);
  bezierVertex(42.29, 47.91, 41.79, 50.98, 41.79, 50.98);
  bezierVertex(41.79, 50.98, 35.08, 57.12, 34.21, 57.44);
  bezierVertex(33.33, 57.75, 32.77, 58.74, 31.99, 58.78);
  bezierVertex(31.21, 58.83, 30.63, 59.57, 29.95, 61.11);
  bezierVertex(29.26, 62.68, 28.12, 61.67, 27.34, 61.36);
  bezierVertex(26.55, 61.02, 25.84, 60.53, 24.4, 59.5);
  bezierVertex(22.97, 58.44, 23.89, 58.94, 22.48, 57.93);
  bezierVertex(21.09, 56.92, 19.55, 55.64, 19.39, 55.13);
  bezierVertex(19.23, 54.59, 18.52, 54.14, 18.18, 53.98);
  bezierVertex(17.87, 53.8, 18.18, 53.98, 17.87, 53.78);
  bezierVertex(17.53, 53.58, 17.53, 53.58, 16.84, 52.55);
  bezierVertex(16.17, 51.49, 15.18, 49.97, 14.96, 48.78);
  bezierVertex(14.73, 47.62, 15.05, 45.53, 14.38, 44.5);
  bezierVertex(13.68, 43.45, 12.74, 40.24, 12.41, 38.6);
  bezierVertex(12.09, 36.97, 11.44, 34.52, 10.8, 33.07);
  bezierVertex(10.15, 31.59, 9.39, 30.8, 8.87, 30.87);
  bezierVertex(8.36, 30.94, 7.86, 31.65, 7.86, 31.65);
  bezierVertex(7.86, 31.65, 7.57, 31.2, 7.39, 30.87);
  bezierVertex(7.24, 30.55, 6.23, 30.22, 5.58, 30.62);
  bezierVertex(4.93, 31, 5.38, 32.8, 5.36, 32.71);
  bezierVertex(5.31, 32.59, 4.95, 32.5, 4.24, 32.82);
  bezierVertex(3.52, 33.15, 3.72, 34.41, 3.72, 35.08);
  bezierVertex(3.72, 35.78, 4.6, 39.79, 4.75, 41.34);
  bezierVertex(4.93, 42.91, 4.53, 42.32, 4.24, 41.97);
  bezierVertex(3.95, 41.61, 2.72, 39.05, 2.38, 38.6);
  bezierVertex(2.07, 38.15, 1.15, 38.45, 0.95, 39.14);
  bezierVertex(0.75, 39.81, 1.93, 42.03, 2.36, 42.86);
  bezierVertex(2.78, 43.67, 3.07, 45.89, 3.07, 45.89);
  bezierVertex(3.07, 45.89, 2.94, 48.83, 3.66, 50.26);
  bezierVertex(4.37, 51.7, 7.95, 55.53, 7.95, 55.53);
  vertex(10.17, 59.39);
  bezierVertex(10.17, 59.39, 9.25, 61.09, 8.8, 62.32);
  bezierVertex(8.36, 63.58, 8.87, 64.3, 9.79, 65.01);
  bezierVertex(10.68, 65.73, 14.26, 68.91, 16.88, 69.72);
  bezierVertex(19.48, 70.48, 24.92, 75.69, 26.6, 76.18);
  bezierVertex(28.25, 76.65, 33.33, 75.69, 34.41, 75.17);
  bezierVertex(35.48, 74.7, 38.01, 73.42, 39.49, 72.93);
  bezierVertex(40, 72.77, 40.45, 72.23, 40.81, 71.65);
  vertex(37.16, 84.9);
  bezierVertex(37.16, 84.9, 35.55, 87.07, 32.6, 90.46);
  bezierVertex(29.69, 93.87, 24.05, 105.62, 22.5, 109.85);
  bezierVertex(20.93, 114.09, 12.79, 122.77, 11.67, 124.47);
  bezierVertex(10.55, 126.15, 9.18, 127.47, 10.3, 128.06);
  bezierVertex(11.4, 128.64, 10.44, 130.99, 12.52, 132.09);
  bezierVertex(14.6, 133.21, 18.83, 136.33, 20.13, 137.05);
  bezierVertex(21.45, 137.79, 23.2, 139.47, 26.53, 139.74);
  bezierVertex(29.84, 140.01, 30.42, 139.22, 33.94, 140.72);
  bezierVertex(36.85, 141.96, 37.18, 141.06, 37.21, 140.93);
  vertex(37.21, 140.97);
  bezierVertex(37.21, 141.35, 40.41, 153.77, 40.99, 155.99);
  bezierVertex(41.57, 158.21, 42.42, 164.15, 43.07, 169.87);
  bezierVertex(43.72, 175.63, 45.73, 179.56, 47.7, 184.31);
  bezierVertex(49.65, 189.08, 52.2, 194.62, 51.73, 195.47);
  bezierVertex(51.29, 196.33, 51.22, 198.72, 51.22, 198.72);
  vertex(51.08, 202.89);
  bezierVertex(51.08, 202.89, 49.65, 204.6, 48.08, 206.89);
  bezierVertex(46.52, 209.17, 47.64, 211.57, 48.8, 213.1);
  bezierVertex(49.99, 214.6, 60.66, 213.95, 61.89, 213.16);
  bezierVertex(63.15, 212.38, 62.74, 205.07, 62.74, 205.07);
  bezierVertex(62.74, 205.07, 63.33, 204.28, 63.6, 201.75);
  bezierVertex(63.86, 199.2, 62.43, 194.55, 61.58, 193.25);
  bezierVertex(60.73, 191.95, 59.75, 185.81, 59.3, 180.92);
  bezierVertex(58.85, 176.01, 57.66, 168.97, 57.08, 166.62);
  bezierVertex(56.5, 164.27, 57.42, 160.88, 57.66, 156.44);
  bezierVertex(57.93, 152, 56.43, 147.18, 56.43, 147.18);
  bezierVertex(56.43, 147.18, 57.15, 147.76, 57.6, 147.9);
  bezierVertex(58.07, 148.01, 57.87, 148.28, 59.16, 149.33);
  bezierVertex(60.46, 150.37, 61.31, 150.05, 61.31, 150.05);
  bezierVertex(61.31, 150.05, 61.89, 153.71, 62.43, 156.37);
  bezierVertex(62.95, 159.04, 67.18, 165.25, 67.45, 165.77);
  bezierVertex(67.71, 166.31, 67.58, 169.49, 68.88, 172.76);
  bezierVertex(70.18, 176.01, 72.59, 182.49, 73.65, 185.68);
  bezierVertex(74.67, 188.88, 75.01, 192.13, 75.01, 192.13);
  bezierVertex(75.01, 192.13, 74.81, 192.47, 74.54, 194.35);
  bezierVertex(74.29, 196.26, 75.12, 199.71, 75.66, 200.5);
  bezierVertex(76.17, 201.28, 79.11, 202.72, 79.24, 203.1);
  bezierVertex(79.38, 203.5, 79.24, 203.1, 79.49, 204.28);
  bezierVertex(79.76, 205.45, 82.96, 208.14, 84.39, 208.66);
  bezierVertex(85.82, 209.17, 93.32, 208.52, 95.51, 206.44);
  bezierVertex(97.73, 204.35, 92.92, 199.85, 90.83, 198.14);
  bezierVertex(88.75, 196.44, 85.11, 190.25, 84.32, 188.3);
  bezierVertex(83.54, 186.33, 83.27, 178.57, 83.07, 172.63);
  bezierVertex(82.89, 166.69, 80.14, 160.57, 79.55, 158.32);
  bezierVertex(78.97, 156.1, 79.38, 153.12, 79.96, 152.99);
  bezierVertex(80.54, 152.85, 81.64, 152.41, 83.67, 152.52);
  bezierVertex(85.69, 152.65, 87.25, 152.41, 89.07, 151.04);
  bezierVertex(90.9, 149.65, 88.82, 139.4, 88.55, 135.03);
  bezierVertex(88.28, 130.66, 88.28, 124, 88.48, 121.51);
  bezierVertex(88.69, 119.04, 90.12, 116.18, 91.48, 110.62);
  vertex(91.48, 110.61);
  endShape();
}

function drawBoy1(){
  fill(cdrawChildren);
  noStroke();

  beginShape();
  vertex(90, 76.95);
  bezierVertex(89.83, 75.83, 88.04, 74.63, 86.24, 73.92);
  bezierVertex(84.43, 73.21, 83.72, 73.6, 79.78, 73.7);
  bezierVertex(75.87, 73.77, 76, 74.65, 73.65, 75.29);
  bezierVertex(71.3, 75.9, 70.64, 75.85, 67.34, 75.9);
  bezierVertex(65.97, 75.93, 64.85, 75.95, 63.78, 75.95);
  bezierVertex(65.9, 74.43, 71.55, 70.52, 71.55, 70.52);
  bezierVertex(71.55, 70.52, 77.36, 69.38, 78.81, 69.55);
  bezierVertex(80.25, 69.72, 81.32, 69.89, 82.42, 69.94);
  bezierVertex(83.52, 69.96, 84.55, 69.94, 85.43, 68.96);
  bezierVertex(86.31, 68.01, 85.11, 67, 84.53, 67.3);
  bezierVertex(83.96, 67.62, 82.57, 66.96, 81.64, 66.61);
  bezierVertex(80.74, 66.27, 81.23, 65.68, 81.23, 65.68);
  bezierVertex(81.23, 65.68, 83.62, 64.61, 84.35, 63.66);
  bezierVertex(85.06, 62.68, 84.7, 62.19, 83.69, 61.38);
  bezierVertex(82.67, 60.58, 81.23, 61.6, 81.23, 61.6);
  bezierVertex(81.23, 61.6, 81.86, 60.67, 82.52, 59.79);
  bezierVertex(83.18, 58.89, 82.3, 58.11, 81.4, 57.23);
  bezierVertex(80.49, 56.32, 79.49, 57.69, 79.49, 57.69);
  bezierVertex(79.49, 57.69, 80.81, 55.44, 80.93, 54.64);
  bezierVertex(81.03, 53.83, 79.25, 53.34, 78.27, 53.39);
  bezierVertex(77.29, 53.44, 75.8, 55.59, 75.48, 56.03);
  bezierVertex(75.16, 56.45, 72.38, 56.52, 72.38, 56.52);
  bezierVertex(72.38, 56.52, 72.33, 55.98, 72.77, 55.08);
  bezierVertex(73.23, 54.17, 73.58, 54, 73.87, 52.78);
  bezierVertex(74.19, 51.53, 73.11, 50.7, 71.74, 51.58);
  bezierVertex(70.37, 52.46, 68.79, 55.3, 67.95, 57.13);
  bezierVertex(67.15, 58.99, 67.42, 61.04, 67.42, 61.04);
  bezierVertex(67.42, 61.04, 66.05, 62.73, 64.12, 63.39);
  bezierVertex(62.16, 64.07, 57.71, 67.03, 55.17, 67.47);
  bezierVertex(54.22, 67.64, 53.44, 67.76, 52.73, 67.88);
  bezierVertex(52.58, 67.69, 52.43, 67.52, 52.34, 67.32);
  bezierVertex(52.26, 67.3, 52.17, 67.32, 52.07, 67.3);
  bezierVertex(51.77, 67.22, 51.51, 67.15, 51.24, 67.03);
  bezierVertex(47.67, 66.76, 43.76, 65.27, 42.17, 62.02);
  bezierVertex(42.15, 61.97, 42.12, 61.92, 42.1, 61.85);
  bezierVertex(41.12, 60.53, 39.99, 58.91, 39.68, 58.33);
  bezierVertex(39.11, 57.23, 42.19, 54.56, 42.19, 54.56);
  bezierVertex(42.19, 54.56, 41.8, 54.03, 41.05, 54.08);
  bezierVertex(40.31, 54.12, 38.45, 51.7, 38.45, 51.7);
  bezierVertex(38.45, 51.7, 38.31, 51.34, 38.8, 50.73);
  bezierVertex(39.29, 50.12, 39.68, 48.53, 39.68, 48.53);
  bezierVertex(39.68, 48.53, 41, 48.09, 41.27, 47.35);
  bezierVertex(41.53, 46.65, 40.7, 45.69, 40.7, 45.69);
  bezierVertex(40.7, 45.69, 41.09, 45.37, 41.85, 44.89);
  bezierVertex(42.61, 44.4, 43.34, 44.4, 43.34, 43.35);
  bezierVertex(43.34, 42.3, 43.83, 40.49, 43.83, 40.49);
  bezierVertex(43.83, 40.49, 44.69, 39.95, 45.59, 38.97);
  bezierVertex(46.52, 37.99, 45.59, 37.77, 44.88, 36.67);
  bezierVertex(44.2, 35.57, 44.32, 34.38, 44.27, 33.2);
  bezierVertex(44.25, 32.01, 45.86, 29.9, 46.52, 28.63);
  bezierVertex(47.2, 27.36, 47.11, 24.04, 47.11, 24.04);
  vertex(48.87, 25.19);
  vertex(47.82, 22.11);
  vertex(48.79, 23.26);
  bezierVertex(48.79, 23.26, 48.87, 21.74, 48.87, 21.5);
  bezierVertex(48.87, 21.2, 48.6, 18.22, 48.6, 18.22);
  vertex(49.92, 18.47);
  bezierVertex(49.92, 18.47, 49.67, 17.41, 48.87, 15.65);
  bezierVertex(48.08, 13.87, 46.23, 12.04, 46.23, 12.04);
  vertex(48.52, 12.38);
  bezierVertex(48.52, 12.38, 45.86, 11.06, 45.15, 9.98);
  bezierVertex(44.47, 8.93, 42.41, 9.2, 42.95, 9.1);
  bezierVertex(43.39, 9.03, 44.08, 7.54, 44.66, 7.1);
  bezierVertex(44.27, 7.15, 43.66, 7.22, 43.02, 7.35);
  bezierVertex(41.71, 7.61, 38.36, 6.37, 38.36, 6.37);
  bezierVertex(38.36, 6.37, 40.65, 6.47, 40.92, 6.47);
  bezierVertex(41.19, 6.47, 38.8, 5.32, 35.69, 3.8);
  bezierVertex(32.61, 2.31, 27.41, 1.77, 27.41, 1.77);
  vertex(30.93, 1.43);
  bezierVertex(30.93, 1.43, 24.13, -0.16, 20.42, 0.01);
  bezierVertex(16.7, 0.18, 12.99, 2.04, 12.99, 2.04);
  vertex(14.33, 0.18);
  bezierVertex(14.33, 0.18, 12.65, 0.8, 11.59, 1.26);
  bezierVertex(10.52, 1.7, 9.3, 4.71, 9.3, 4.71);
  vertex(9.3, 2.41);
  bezierVertex(9.3, 2.41, 8.49, 3.46, 7.98, 4.78);
  bezierVertex(7.44, 6.1, 7.44, 7, 7.44, 7);
  bezierVertex(7.44, 7, 5.48, 6.91, 6.36, 8.49);
  bezierVertex(7.27, 10.08, 5.75, 11.33, 5.75, 11.33);
  vertex(2.31, 10.96);
  vertex(3.19, 12.55);
  vertex(1.43, 12.55);
  vertex(2.92, 13.43);
  bezierVertex(2.92, 13.43, 2.14, 14.68, 0.99, 15.39);
  bezierVertex(-0.16, 16.09, 0.01, 18.12, 0.01, 18.12);
  vertex(1.6, 17.59);
  vertex(0.11, 20.08);
  bezierVertex(0.11, 20.08, 1.16, 21.74, 1.26, 20.69);
  bezierVertex(1.35, 19.61, 1.7, 22.11, 1.7, 22.11);
  bezierVertex(1.7, 22.11, 0.72, 24.04, 0.38, 24.14);
  bezierVertex(0.01, 24.23, 1.08, 24.84, 1.96, 26.16);
  bezierVertex(2.84, 27.48, 3.55, 28.8, 4.09, 29.17);
  bezierVertex(4.6, 29.51, 3.11, 29.34, 2.58, 29.34);
  bezierVertex(2.04, 29.34, 4.16, 30.66, 4.16, 30.66);
  vertex(5.58, 33.86);
  vertex(5.48, 35.26);
  bezierVertex(5.48, 35.26, 6.8, 36.67, 8.22, 38.53);
  bezierVertex(9.66, 40.39, 9.37, 40.73, 9.57, 41.1);
  bezierVertex(9.74, 41.44, 9.37, 39.85, 9.37, 39.85);
  vertex(10.69, 41.1);
  bezierVertex(10.69, 41.1, 11.5, 41, 12.91, 42.42);
  bezierVertex(14.33, 43.84, 14.14, 46.47, 14.14, 46.47);
  vertex(13.7, 47.01);
  bezierVertex(13.7, 47.01, 11.99, 47.77, 10.79, 47.77);
  bezierVertex(9.59, 47.77, 7.83, 49.53, 8, 49.92);
  bezierVertex(8.2, 50.34, 9.25, 51.34, 11.01, 54.56);
  bezierVertex(12.79, 57.79, 11.06, 56.08, 11.06, 57.52);
  bezierVertex(11.06, 58.99, 10.4, 72.28, 10.47, 75.34);
  bezierVertex(10.57, 78.37, 13.48, 89.56, 13.62, 94.28);
  bezierVertex(13.75, 99, 16.68, 108.36, 16.53, 110.48);
  bezierVertex(16.41, 112.61, 15.58, 114.08, 15.33, 119.06);
  bezierVertex(15.11, 124.05, 16.31, 129.4, 16.31, 129.94);
  bezierVertex(16.31, 130.45, 14.8, 133.46, 14.62, 133.63);
  bezierVertex(14.45, 133.83, 18.83, 136.91, 18.83, 136.91);
  bezierVertex(18.83, 136.91, 19.64, 139.03, 21.66, 142.14);
  bezierVertex(23.69, 145.21, 28.14, 151.72, 29.75, 154.31);
  bezierVertex(31.34, 156.92, 31.42, 158.12, 33.66, 160.05);
  bezierVertex(35.91, 162.01, 33.86, 161.91, 33.59, 164.57);
  bezierVertex(33.32, 167.21, 31.95, 169.61, 31.95, 169.61);
  bezierVertex(31.95, 169.61, 28.95, 174.49, 27.7, 177.38);
  bezierVertex(26.48, 180.24, 25.18, 186.42, 24.25, 189.38);
  bezierVertex(23.33, 192.34, 22.05, 196.37, 21.08, 195.98);
  bezierVertex(20.12, 195.59, 18.88, 195.07, 18.07, 196.05);
  bezierVertex(17.29, 197.03, 15.6, 202.7, 14.99, 205.19);
  bezierVertex(14.36, 207.71, 13.13, 210.94, 13.53, 213.18);
  bezierVertex(13.94, 215.46, 22.45, 215.63, 25.77, 215.9);
  bezierVertex(29.07, 216.14, 37.99, 216.24, 43.03, 216.46);
  bezierVertex(48.08, 216.68, 50.28, 216.14, 51.77, 214.06);
  bezierVertex(53.29, 212.01, 47.67, 208.64, 47.67, 208.64);
  bezierVertex(47.67, 208.64, 58.2, 208.57, 62.21, 208.47);
  bezierVertex(66.24, 208.37, 64.83, 208.08, 65.49, 205.19);
  bezierVertex(66.15, 202.33, 62.09, 200.87, 60.79, 200.04);
  bezierVertex(59.52, 199.18, 56.64, 197.25, 54.88, 196.88);
  bezierVertex(53.12, 196.54, 51.99, 195.83, 50.67, 194.58);
  bezierVertex(49.36, 193.36, 48.74, 187.94, 49.26, 185.88);
  bezierVertex(49.8, 183.86, 56.2, 175.79, 56.2, 175.79);
  bezierVertex(56.2, 175.79, 64.68, 174.1, 65.12, 173.88);
  bezierVertex(65.56, 173.66, 66.02, 165.23, 66.02, 165.23);
  vertex(70.91, 163.72);
  bezierVertex(70.91, 163.72, 69.27, 156.04, 69.42, 153.79);
  bezierVertex(69.54, 151.52, 68.49, 150.59, 66.19, 147.34);
  bezierVertex(63.9, 144.07, 65, 141.5, 64.83, 139.25);
  bezierVertex(64.65, 137, 64.9, 135.76, 63.09, 132.85);
  bezierVertex(61.28, 129.94, 59.3, 127.67, 59.33, 127.45);
  bezierVertex(59.38, 127.23, 59.64, 126.44, 60.18, 125.08);
  bezierVertex(60.7, 123.71, 60.13, 123.56, 58.45, 120.21);
  bezierVertex(56.79, 116.84, 56.81, 112.56, 57.67, 109.07);
  bezierVertex(58.5, 105.57, 56.79, 106.43, 55.05, 102.86);
  bezierVertex(53.34, 99.27, 52.53, 87.95, 52.53, 87.95);
  bezierVertex(52.53, 87.95, 52.53, 87.73, 54.66, 87.44);
  bezierVertex(56.79, 87.12, 72.28, 83.62, 72.43, 83.6);
  bezierVertex(72.55, 83.55, 73.92, 83.77, 76.48, 84.99);
  bezierVertex(79.03, 86.24, 83.28, 84.87, 83.5, 84.87);
  bezierVertex(83.72, 84.87, 86.11, 86.41, 86.94, 86.29);
  bezierVertex(87.8, 86.14, 87.82, 85.53, 87.38, 84.43);
  bezierVertex(86.94, 83.33, 84.35, 82.13, 84.35, 82.13);
  bezierVertex(84.35, 82.13, 84.35, 82.13, 84.97, 81.96);
  bezierVertex(85.58, 81.77, 87.21, 83.11, 88.09, 83.5);
  bezierVertex(88.97, 83.89, 88.7, 83.33, 89.34, 82.08);
  bezierVertex(89.95, 80.86, 88.7, 79.98, 88.7, 79.98);
  bezierVertex(88.7, 79.98, 89.24, 79.93, 90, 79.62);
  bezierVertex(90.76, 79.3, 90.17, 78.1, 90, 76.95);
  vertex(90, 76.95);
  endShape();
}

function drawTiFoThinking(){
     fill(cdrawTiFo);
        noStroke();
     beginShape();
      vertex(115.31, 88.11);
      bezierVertex(114.65, 86.11, 117.33, 83.43, 115.92, 81.92);
      bezierVertex(114.5, 80.4, 112.65, 75.51, 110.34, 66.83);
      bezierVertex(108.04, 58.15, 104, 53.27, 99.63, 51.6);
      bezierVertex(95.26, 49.94, 92.75, 49.39, 84.38, 43.47);
      bezierVertex(76.01, 37.55, 71.1, 34.68, 71.1, 34.68);
      bezierVertex(71.1, 34.68, 70.28, 33.99, 68.74, 33.12);
      bezierVertex(69.18, 30.22, 69.58, 25.47, 68.66, 24.58);
      bezierVertex(67.62, 23.57, 68.8, 15.92, 67.6, 12.24);
      bezierVertex(67.85, 11.83, 68.12, 11.35, 68.41, 10.84);
      bezierVertex(69.35, 11.81, 69.73, 18.83, 73.35, 18.33);
      bezierVertex(69.98, 15.2, 73.12, 7.2, 72.55, 5.5);
      bezierVertex(74.23, 2.14, 72.65, 1.2, 73.67, -5.35);
      bezierVertex(74.53, -6.74, 74.61, -15.02, 74.9, -16.54);
      bezierVertex(75.24, -18.3, 74.81, -20.18, 73.98, -22);
      bezierVertex(74.05, -26.77, 73.46, -31.2, 71.83, -34.71);
      bezierVertex(64.54, -50.37, 36.1, -54.68, 36.1, -54.68);
      vertex(33.89, -55.17);
      bezierVertex(33.89, -55.17, 29.77, -54.16, 27.56, -47.34);
      vertex(25.09, -45.42);
      bezierVertex(25.09, -45.42, 15.95, -38.08, 14.26, -32.99);
      bezierVertex(14.19, -32.78, 14.15, -32.59, 14.08, -32.39);
      vertex(12.78, -33.09);
      bezierVertex(12.25, -33.38, 9.69, -29.4, 7.08, -24.21);
      bezierVertex(4.96, -20.02, 3.46, -16.36, 3.24, -14.94);
      bezierVertex(2.98, -14.78, 2.77, -14.67, 2.66, -14.64);
      bezierVertex(1.95, -14.46, 1.33, -14.04, 0.73, -13.88);
      bezierVertex(-0.5, -13.44, -1.51, -10.34, -0.42, -9);
      bezierVertex(0.67, -7.65, 2.19, -6.47, 1.63, -4.9);
      bezierVertex(1.07, -3.34, -0.8, -2.39, -0.8, -2.39);
      bezierVertex(-0.8, -2.39, -1.06, 0.22, 0.1, 1.33);
      bezierVertex(-1.08, 1.98, -1.91, 4.85, -1.19, 5.59);
      bezierVertex(-0.84, 5.96, -0.52, 6.64, -0.32, 7.32);
      vertex(-1.07, 8.94);
      bezierVertex(-1.07, 8.94, -2.26, 10.8, -2.08, 12.48);
      bezierVertex(-4.11, 8.79, -6.79, 5, -7.84, 5);
      bezierVertex(-9.59, 5, -14.07, 6.83, -17.82, 6.33);
      bezierVertex(-21.57, 5.83, -34.82, 20.43, -35.96, 24.08);
      bezierVertex(-36.45, 25.65, -34.93, 25.75, -35.09, 32.52);
      bezierVertex(-35.24, 39.08, -34.77, 48, -34.08, 57.03);
      bezierVertex(-35.5, 57.51, -36.52, 57.84, -36.82, 57.89);
      bezierVertex(-37.49, 60.14, -36.96, 66.5, -36.96, 66.5);
      vertex(-35.48, 68.48);
      bezierVertex(-35.48, 68.48, -34.03, 71.2, -34.78, 72.58);
      bezierVertex(-35.53, 73.95, -35.83, 74.71, -35.03, 76.7);
      bezierVertex(-34.23, 78.7, -34.28, 88.2, -34.9, 91.33);
      bezierVertex(-35.53, 94.45, -34.65, 98.84, -32.9, 99.7);
      bezierVertex(-31.15, 100.57, -28.15, 106.08, -28.4, 110.08);
      bezierVertex(-28.65, 114.08, -22.65, 120.7, -22.15, 121.58);
      bezierVertex(-21.93, 121.97, -19.51, 122.81, -16.87, 123.62);
      bezierVertex(-14.72, 126.3, -12.63, 127.91, -10.84, 127.66);
      bezierVertex(-9.45, 127.47, -7.95, 126.75, -6.43, 125.7);
      bezierVertex(-5.67, 144.22, -8.39, 163.95, -8.51, 164.35);
      bezierVertex(-8.49, 164.36, -8.43, 164.59, -8.17, 166.28);
      bezierVertex(-9.15, 167.71, -10.51, 171.18, -9.84, 174.54);
      bezierVertex(-12, 183.86, -9.99, 202.02, -9.99, 202.02);
      bezierVertex(-9.99, 202.02, 55.02, 202.02, 78.62, 202.02);
      bezierVertex(80.28, 187.38, 76.81, 179.94, 76.81, 179.94);
      bezierVertex(76.81, 179.94, 81.68, 174.02, 81.59, 171.94);
      bezierVertex(81.49, 169.86, 85.55, 167.97, 91.81, 163.5);
      bezierVertex(98.07, 159.04, 117.1, 144.94, 117.1, 144.94);
      bezierVertex(117.1, 144.94, 117.1, 144.94, 117.37, 146.21);
      bezierVertex(117.64, 147.47, 120.55, 144.61, 121.56, 142.58);
      bezierVertex(122.58, 140.54, 123.83, 138.18, 123.83, 138.18);
      vertex(123.89, 134.98);
      bezierVertex(123.89, 134.98, 127.73, 130.05, 128.55, 126.74);
      bezierVertex(129.36, 123.44, 115.97, 90.11, 115.31, 88.11);
      vertex(10.4, -22.42);
      bezierVertex(11.58, -24.77, 12.56, -26.93, 13.25, -28.65);
      bezierVertex(12.89, -26.14, 13.89, -24.23, 12.93, -22.53);
      bezierVertex(12.47, -21.73, 10.6, -20.77, 9.45, -19.65);
      bezierVertex(9.45, -19.65, 9.09, -19.36, 8.53, -18.92);
      bezierVertex(9.14, -19.99, 9.76, -21.17, 10.4, -22.42);
      vertex(-7.15, 51.66);
      bezierVertex(-7.83, 64.04, -10.68, 73.02, -11.86, 79.71);
      bezierVertex(-12.52, 75.73, -15.65, 68.58, -15.65, 68.58);
      vertex(-17.35, 62.76);
      vertex(-15.4, 61.33);
      vertex(-17.65, 51.2);
      bezierVertex(-17.65, 51.2, -19.1, 51.73, -21.19, 52.48);
      bezierVertex(-22.59, 39.67, -23.3, 27.12, -22.15, 25);
      bezierVertex(-19.82, 20.66, -16.92, 22.22, -13.65, 19.33);
      bezierVertex(-10.84, 16.85, -10.84, 15.35, -8.84, 15.85);
      bezierVertex(-6.84, 16.35, -2.15, 20.33, -2.15, 20.33);
      bezierVertex(-2.15, 20.33, 0.8, 21.6, 0.45, 18.5);
      bezierVertex(0.35, 17.57, -0.28, 15.99, -1.16, 14.23);
      bezierVertex(0.96, 16.55, 4.05, 17.14, 7.49, 16.69);
      vertex(8.76, 17.94);
      bezierVertex(8.76, 17.94, 12.38, 22.09, 12.83, 26.7);
      vertex(12.83, 34.51);
      bezierVertex(5.15, 35.66, -6.48, 39.44, -7.15, 51.66);
      vertex(105.04, 124.6);
      bezierVertex(104.1, 125.36, 100.32, 130.61, 100.32, 130.61);
      bezierVertex(100.32, 130.61, 100.03, 131.56, 101.03, 132.1);
      bezierVertex(97.21, 135.96, 82.85, 158.64, 80.23, 160.67);
      bezierVertex(77.62, 162.7, 73.62, 159.45, 73.62, 159.45);
      bezierVertex(71.14, 151.23, 74.88, 124.66, 78.66, 110.95);
      bezierVertex(82.44, 97.23, 82.44, 80.31, 82.44, 80.31);
      bezierVertex(82.44, 80.31, 93.41, 91.09, 93.7, 97.39);
      bezierVertex(93.99, 103.7, 100.88, 113.59, 102.94, 114.5);
      bezierVertex(104.99, 115.4, 104.29, 116.05, 102.85, 120.68);
      bezierVertex(101.67, 124.46, 104.26, 124.72, 105.04, 124.6);
      bezierVertex(105.13, 124.52, 105.2, 124.48, 105.23, 124.49);
      bezierVertex(105.3, 124.52, 105.21, 124.57, 105.04, 124.6);
     endShape();
        fill(TiFoPencil);
        beginShape();
         vertex(61.92, 170.99);
         vertex(51.97, 138.49);
         vertex(51.86, 135.11);
         vertex(51.38, 132.96);
         vertex(51.71, 132.97);
         vertex(52.56, 134.89);
         vertex(54.83, 137.62);
         vertex(64.78, 170.12);
         vertex(61.92, 170.99);
        endShape();
}

function drawTiFoPointing(){
   fill(cdrawTiFo);
    noStroke();
   beginShape();
    vertex(-103.92, 186.8);
    bezierVertex(-106.71, 183.61, -111.49, 180.82, -112.49, 177.84);
    bezierVertex(-113.48, 174.85, -111.69, 174.65, -111.69, 174.65);
    bezierVertex(-111.69, 174.65, -114.88, 168.27, -115.48, 162.69);
    bezierVertex(-116.07, 157.12, -117.3, 135.7, -123.28, 127.13);
    bezierVertex(-129.26, 118.56, -130.65, 83.94, -129.65, 81.35);
    bezierVertex(-128.66, 78.76, -112.98, 74.19, -109.39, 59.65);
    bezierVertex(-105.36, 43.33, -104.01, 31.57, -103.89, 28.08);
    bezierVertex(-103.61, 20.25, -105.31, 14.95, -109.31, 6.79);
    bezierVertex(-110.83, 3.67, -115.19, 2.1, -117.01, -0.5);
    bezierVertex(-117.14, -0.69, -119.7, -1.57, -123.31, -2.74);
    bezierVertex(-123.1, -3.71, -122.5, -4.9, -121.85, -6.23);
    bezierVertex(-120.83, -5.29, -119.9, -5.21, -119.39, -5.8);
    bezierVertex(-120.19, -5.36, -120.87, -6.01, -121.42, -7.13);
    bezierVertex(-120.38, -9.35, -119.42, -11.83, -119.99, -14.17);
    bezierVertex(-121.36, -19.86, -119.39, -24.29, -119.39, -24.29);
    bezierVertex(-119.39, -24.29, -120.42, -25.47, -120.55, -26.13);
    bezierVertex(-120.55, -26.13, -121.95, -33.02, -124.75, -39.27);
    bezierVertex(-124.77, -40.06, -124.89, -40.85, -125.18, -41.55);
    bezierVertex(-125.51, -42.36, -126.18, -43.02, -127.01, -43.54);
    bezierVertex(-128.26, -45.52, -129.68, -47.18, -131.29, -48.18);
    bezierVertex(-138.46, -52.66, -151.27, -46.84, -151.27, -46.84);
    vertex(-152.31, -46.45);
    bezierVertex(-152.31, -46.45, -153.73, -44.93, -152.82, -41.55);
    vertex(-153.32, -40.1);
    bezierVertex(-153.32, -40.1, -155.11, -34.65, -154.44, -32.11);
    bezierVertex(-154.41, -32.01, -154.38, -31.92, -154.35, -31.82);
    vertex(-155.08, -31.76);
    bezierVertex(-155.37, -31.73, -155.36, -29.42, -155.04, -26.6);
    bezierVertex(-154.79, -24.31, -154.43, -22.41, -154.15, -21.77);
    bezierVertex(-154.21, -21.63, -154.26, -21.53, -154.3, -21.49);
    bezierVertex(-154.54, -21.23, -154.69, -20.89, -154.89, -20.66);
    bezierVertex(-155.28, -20.15, -154.87, -18.61, -154.06, -18.35);
    bezierVertex(-153.25, -18.09, -152.31, -18.01, -152.13, -17.22);
    bezierVertex(-151.94, -16.43, -152.45, -15.54, -152.45, -15.54);
    bezierVertex(-152.45, -15.54, -151.86, -14.4, -151.09, -14.26);
    bezierVertex(-151.4, -13.68, -150.98, -12.28, -150.48, -12.16);
    bezierVertex(-150.24, -12.11, -149.93, -11.91, -149.66, -11.68);
    vertex(-149.54, -10.82);
    bezierVertex(-149.54, -10.82, -149.54, -10.8, -149.54, -10.77);
    bezierVertex(-153.56, -11.43, -158.29, -11.6, -159.99, -9.25);
    bezierVertex(-163.18, -4.87, -175.93, 9.68, -179.12, 8.88);
    bezierVertex(-182.13, 8.13, -192.57, 1.42, -194.68, -3.93);
    vertex(-194.68, -3.93);
    bezierVertex(-194.68, -3.93, -196.12, -5.92, -195.86, -7.65);
    bezierVertex(-195.6, -9.35, -195.91, -12.86, -198.45, -13.66);
    bezierVertex(-202.37, -14.9, -202.69, -16.98, -202.69, -16.98);
    bezierVertex(-202.69, -16.98, -203.8, -16.54, -203.92, -15.66);
    vertex(-204.64, -16.12);
    bezierVertex(-204.64, -16.12, -209.43, -20.42, -210.97, -20.45);
    bezierVertex(-212.51, -20.49, -212.31, -18.72, -212.2, -18.52);
    bezierVertex(-212.09, -18.32, -207.09, -14.59, -207.09, -14.59);
    bezierVertex(-207.09, -14.59, -209.02, -12.96, -208.7, -11.92);
    bezierVertex(-208.37, -10.89, -210.35, -11.28, -209.1, -9.46);
    bezierVertex(-207.84, -7.64, -209.46, -7.41, -208.63, -6.15);
    bezierVertex(-207.8, -4.88, -199.62, -1.34, -199.6, -0);
    bezierVertex(-199.6, -0, -199.58, 0.2, -199.44, 0.36);
    bezierVertex(-198.01, 3.05, -185.61, 19.13, -181.01, 20.63);
    bezierVertex(-176.13, 22.23, -158.57, 12.08, -159.3, 12.86);
    bezierVertex(-163.99, 17.92, -162.04, 41.71, -170.52, 54.88);
    vertex(-172.19, 53.9);
    vertex(-174.54, 56.95);
    vertex(-173, 58.33);
    bezierVertex(-176.05, 62.68, -178.93, 68.93, -178.31, 81.3);
    bezierVertex(-177.82, 90.95, -170.74, 103.15, -170.54, 112.11);
    bezierVertex(-170.35, 121.08, -161.9, 155.52, -159.11, 161.5);
    bezierVertex(-156.32, 167.48, -152.34, 179.23, -152.34, 179.23);
    vertex(-150.94, 179.23);
    bezierVertex(-150.94, 179.23, -150.14, 183.22, -151.34, 184.81);
    bezierVertex(-152.53, 186.4, -155.12, 194.57, -153.73, 197.96);
    bezierVertex(-152.33, 201.35, -147.35, 199.95, -143.77, 199.35);
    bezierVertex(-140.18, 198.76, -140.98, 195.57, -139.78, 192.38);
    bezierVertex(-138.59, 189.19, -137.79, 182.62, -139.78, 181.02);
    bezierVertex(-141.77, 179.43, -139.78, 178.63, -139.78, 178.63);
    bezierVertex(-139.78, 178.63, -140.38, 167.68, -142.57, 160.11);
    bezierVertex(-144.76, 152.54, -149.63, 128.66, -148.84, 124.08);
    bezierVertex(-148.04, 119.5, -147.64, 111.59, -149.23, 107.41);
    bezierVertex(-150.83, 103.23, -149.23, 100.84, -149.23, 100.84);
    bezierVertex(-149.23, 100.84, -144.65, 121.49, -141.46, 127.66);
    bezierVertex(-138.28, 133.84, -133.8, 156.12, -133.01, 161.5);
    bezierVertex(-132.21, 166.88, -126.43, 175.65, -127.43, 177.64);
    bezierVertex(-128.43, 179.63, -124.04, 179.83, -124.04, 179.83);
    bezierVertex(-124.04, 179.83, -126.03, 183.22, -125.04, 184.41);
    bezierVertex(-124.04, 185.61, -119.66, 188, -119.06, 189.39);
    bezierVertex(-118.46, 190.79, -116.27, 195.37, -109.5, 194.77);
    bezierVertex(-102.73, 194.17, -101.13, 189.99, -103.92, 186.8);
    vertex(-130.11, 66.3);
    bezierVertex(-130.11, 66.3, -127.12, 46.73, -125.33, 42.85);
    bezierVertex(-123.53, 38.96, -118.15, 34.48, -117.86, 29.7);
    bezierVertex(-118.75, 44.34, -124.43, 64.81, -130.11, 67.2);
    vertex(-130.11, 66.3);
  endShape();

  fill(TiFoPencil);
  beginShape();
   vertex(-137.1, 75.05);
   vertex(-143.96, 52.61);
   vertex(-144.04, 50.28);
   vertex(-144.37, 48.8);
   vertex(-144.14, 48.81);
   vertex(-143.56, 50.13);
   vertex(-141.99, 52.01);
   vertex(-135.12, 74.44);
   vertex(-137.1, 75.05);
  endShape();
}

function drawTiFoSpin(){
  fill(cdrawTiFo);
    noStroke();

  beginShape();
    vertex(-18.06, 58.04);
    bezierVertex(-15.59, 61.73, -11.9, 65.41, -11.9, 65.41);
    bezierVertex(-10.09, 67.15, -4.26, 66.09, -4.26, 66.09);
    vertex(-2.78, 67.65);
    vertex(5.16, 69.07);
    vertex(6.02, 67.98);
    bezierVertex(6.02, 67.98, 14.21, 69.87, 16.32, 68.95);
    bezierVertex(17.78, 68.33, 23.57, 68.62, 28.2, 69.18);
    vertex(28.2, 69.13);
    bezierVertex(28.44, 69.13, 28.62, 69.14, 28.62, 69.14);
    bezierVertex(29.29, 69.17, 30.02, 69.49, 30.56, 69.82);
    bezierVertex(33.42, 71.61, 41.59, 73.33, 42.34, 71.94);
    bezierVertex(43.09, 70.55, 36.94, 70.3, 37.17, 69.52);
    bezierVertex(37.4, 68.75, 44.4, 70.13, 44.93, 69.03);
    bezierVertex(45.46, 67.92, 37.98, 66.96, 37.85, 66.15);
    bezierVertex(37.72, 65.35, 47.11, 67.96, 47.44, 65.8);
    bezierVertex(47.65, 64.44, 37.98, 64.29, 38.28, 62.99);
    bezierVertex(39, 62.87, 44.92, 64.06, 44.84, 62.5);
    bezierVertex(44.75, 60.96, 36.98, 60.79, 35.64, 60.72);
    bezierVertex(34.3, 60.65, 34.9, 59.18, 35.61, 58.91);
    bezierVertex(36.32, 58.64, 37.16, 57.54, 37.29, 56.95);
    bezierVertex(37.42, 56.37, 35.48, 57.29, 34.83, 57.34);
    bezierVertex(34.17, 57.4, 32.64, 59.43, 31.57, 60.49);
    bezierVertex(30.65, 61.4, 30.5, 62.95, 28.52, 62.97);
    vertex(28.52, 62.95);
    bezierVertex(24.21, 63.1, 16.14, 60.74, 12.13, 59.27);
    bezierVertex(7.31, 57.51, 5.82, 57.7, 5.82, 57.7);
    vertex(5.63, 56.2);
    bezierVertex(5.63, 56.2, 0.86, 55.72, -0.44, 55.65);
    vertex(-1, 56.54);
    bezierVertex(-1, 56.54, -0.92, 56.36, -1.59, 56.11);
    bezierVertex(-2.26, 55.87, -2.41, 56.55, -3.32, 56.34);
    bezierVertex(-4.22, 56.14, -5.85, 54.57, -5.44, 54.16);
    vertex(1.76, 55.27);
    bezierVertex(2.14, 54.83, 3.75, 54.58, 4.3, 54.29);
    bezierVertex(5.41, 53.77, 8.85, 51.44, 8.85, 51.44);
    bezierVertex(8.48, 50.96, 9.35, 50.15, 9.35, 50.15);
    vertex(10.57, 49.65);
    vertex(14.2, 46.91);
    bezierVertex(14.2, 46.91, 13.04, 46.65, 13.65, 45.74);
    bezierVertex(14.25, 44.82, 31.18, 32.3, 31.18, 32.3);
    bezierVertex(31.8, 31.95, 32.45, 31.73, 33.12, 31.73);
    bezierVertex(36.68, 31.73, 44.99, 28.68, 44.88, 27.01);
    bezierVertex(44.77, 25.34, 39.11, 28.58, 38.88, 27.75);
    bezierVertex(38.65, 26.93, 45.71, 24.24, 45.57, 22.95);
    bezierVertex(45.42, 21.66, 38.17, 24.99, 37.6, 24.34);
    bezierVertex(37.04, 23.69, 46.92, 20.76, 46.01, 18.64);
    bezierVertex(45.43, 17.3, 36.67, 22.6, 36.21, 21.26);
    bezierVertex(36.79, 20.75, 42.77, 18.49, 41.82, 17.14);
    bezierVertex(40.88, 15.81, 33.81, 20.02, 32.57, 20.71);
    bezierVertex(31.33, 21.4, 31.04, 19.74, 31.52, 19.1);
    bezierVertex(32.01, 18.45, 32.15, 17, 31.93, 16.4);
    bezierVertex(31.72, 15.8, 30.5, 17.72, 29.94, 18.13);
    bezierVertex(29.38, 18.55, 29.15, 21.24, 28.79, 22.79);
    bezierVertex(28.46, 24.14, 29.23, 25.64, 27.38, 26.77);
    bezierVertex(22.86, 29.55, 11.57, 34.39, 9.72, 36.76);
    bezierVertex(9.46, 35.36, 8.98, 35.73, 8.98, 35.73);
    vertex(4.36, 38.95);
    vertex(4.47, 40.53);
    bezierVertex(4.47, 40.53, -0.08, 41.76, 0.51, 43.05);
    bezierVertex(1.09, 44.35, -3.86, 42.3, -4.33, 42.06);
    bezierVertex(-6.42, 41, -6.71, 41.02, -9.87, 39.26);
    bezierVertex(-10.69, 36.85, -12.2, 34.92, -13.62, 33.64);
    bezierVertex(-16.7, 30.85, -20.46, 18.05, -20.46, 18.05);
    vertex(-20.89, 17.58);
    vertex(-19.42, 17.3);
    bezierVertex(-19.22, 16.84, -19.01, 16.45, -18.85, 16.17);
    bezierVertex(-18.31, 15.24, -17.03, 13.08, -17.37, 12.61);
    bezierVertex(-17.73, 12.2, -18.14, 11.79, -18.58, 11.38);
    vertex(-18.11, 10.99);
    bezierVertex(-16.42, 8.99, -14.32, 7.97, -14.32, 7.97);
    vertex(-13.33, 7.66);
    bezierVertex(-11.44, 8.6, -9.48, 8.95, -7.67, 8.14);
    bezierVertex(-6.45, 7.61, -6.79, 5.88, -6.79, 5.88);
    vertex(-6.81, 5.01);
    bezierVertex(-6.53, 4.74, -6.19, 4.5, -5.91, 4.41);
    bezierVertex(-5.34, 4.22, -5.1, 2.77, -5.59, 2.24);
    bezierVertex(-4.69, 1.98, -4.2, 0.76, -4.2, 0.76);
    bezierVertex(-4.2, 0.76, -4.99, -0.04, -4.92, -0.85);
    bezierVertex(-4.85, -1.66, -3.74, -1.89, -2.82, -2.28);
    bezierVertex(-1.9, -2.66, -1.7, -4.25, -2.26, -4.69);
    bezierVertex(-2.56, -4.88, -2.79, -5.19, -3.14, -5.41);
    bezierVertex(-3.19, -5.44, -3.28, -5.53, -3.38, -5.66);
    bezierVertex(-3.16, -6.34, -3.1, -8.27, -3.24, -10.57);
    bezierVertex(-3.42, -13.41, -3.86, -15.69, -4.22, -15.67);
    vertex(-5.1, -15.61);
    bezierVertex(-5.08, -15.72, -5.06, -15.81, -5.05, -15.92);
    bezierVertex(-4.75, -18.53, -7.97, -23.62, -7.97, -23.62);
    vertex(-8.85, -24.97);
    bezierVertex(-8.42, -28.46, -10.42, -29.73, -10.42, -29.73);
    vertex(-11.75, -29.94);
    bezierVertex(-11.75, -29.94, -23.43, -33.63, -31.19, -28.06);
    bezierVertex(-38.95, -22.49, -39.79, -4.57, -39.79, -4.57);
    bezierVertex(-39.83, -3.91, -40.84, -2.57, -40.84, -2.57);
    bezierVertex(-40.84, -2.57, -43.32, 1.26, -43.85, 7.09);
    bezierVertex(-44.38, 12.93, -42.75, 15.85, -47.3, 17.89);
    vertex(-43.87, 21.51);
    vertex(-43.53, 21.45);
    bezierVertex(-43.54, 21.51, -43.57, 21.57, -43.57, 21.64);
    bezierVertex(-43.57, 21.64, -48.6, 44.82, -41.28, 57.03);
    bezierVertex(-33.96, 69.25, -36.11, 74.43, -37.65, 82.89);
    vertex(-38.24, 84.64);
    vertex(-40.41, 84.64);
    vertex(-41.49, 87.55);
    vertex(-39.91, 88.14);
    bezierVertex(-39.91, 88.14, -42.74, 95.13, -42.07, 105.3);
    bezierVertex(-41.41, 115.47, -36.07, 118.8, -36.07, 118.8);
    vertex(-22.4, 153.71);
    bezierVertex(-22.23, 157.19, -22.73, 160.45, -24.9, 164.36);
    bezierVertex(-27.07, 168.27, -27.9, 178.4, -31.73, 191.22);
    bezierVertex(-35.57, 204.04, -35.9, 208.82, -37.07, 209.69);
    bezierVertex(-38.23, 210.56, -39.9, 215.12, -40.23, 218.82);
    bezierVertex(-40.57, 222.51, -39.37, 224.47, -31.3, 223.82);
    bezierVertex(-23.23, 223.17, -7.9, 225.55, -7.9, 222.73);
    bezierVertex(-7.9, 219.91, -11.73, 216.86, -14.9, 213.39);
    bezierVertex(-8.9, 215.12, 3.93, 217.08, 4.6, 213.82);
    bezierVertex(5.27, 210.56, 3.27, 207.3, 0.6, 206.87);
    bezierVertex(-2.07, 206.43, -10.57, 200.78, -11.9, 195.78);
    bezierVertex(-13.23, 190.79, -7.57, 172.83, -5.73, 170.44);
    bezierVertex(-3.9, 168.05, 3.1, 154.58, 0.93, 146.1);
    bezierVertex(-0.45, 140.67, -8.16, 117.13, -8.07, 113.55);
    bezierVertex(-7.99, 109.97, -10.08, 91.05, -10.08, 91.05);
    vertex(-9.02, 90.8);
    vertex(-9.02, 88.05);
    bezierVertex(-9.02, 88.05, -9.49, 87.3, -10.73, 87.47);
    bezierVertex(-10.22, 87.3, -10.77, 84.11, -10.77, 84.11);
    bezierVertex(-11.6, 77.7, -10.73, 70.37, -10.73, 66.44);
    bezierVertex(-10.73, 66.44, -10.77, 63.9, -10.49, 60.18)
  endShape();

  // now the pencil

  beginShape();
    vertex(48.47, -11.76);
    vertex(18, -30.13);
    vertex(15.55, -32.7);
    vertex(13.68, -34.03);
    vertex(13.94, -34.26);
    vertex(15.94, -33.35);
    vertex(19.62, -32.81);
    vertex(50.09, -14.43);
    vertex(48.47, -11.76);
  endShape();

  // now the spins

  beginShape();
    vertex(47.91, -11.46);
    bezierVertex(47.47, -10.49, 46.79, -9.83, 46.15, -9.14);
    bezierVertex(45.48, -8.46, 44.78, -7.83, 44.05, -7.23);
    bezierVertex(42.6, -6.04, 41.05, -4.97, 39.42, -4.03);
    bezierVertex(37.79, -3.1, 36.09, -2.3, 34.3, -1.74);
    bezierVertex(32.51, -1.18, 30.63, -0.86, 28.77, -0.97);
    bezierVertex(30.64, -0.93, 32.49, -1.31, 34.24, -1.92);
    bezierVertex(35.99, -2.54, 37.65, -3.38, 39.23, -4.36);
    bezierVertex(40.81, -5.33, 42.3, -6.44, 43.69, -7.67);
    bezierVertex(44.38, -8.28, 45.05, -8.92, 45.67, -9.59);
    bezierVertex(46.27, -10.26, 46.92, -10.99, 47.22, -11.74);
    vertex(47.91, -11.46);
  endShape();

  beginShape();
    vertex(44.81, -12.86);
    bezierVertex(43.74, -11.67, 42.58, -10.61, 41.37, -9.61);
    bezierVertex(40.15, -8.62, 38.87, -7.71, 37.53, -6.9);
    bezierVertex(34.85, -5.29, 31.87, -4.09, 28.77, -3.72);
    bezierVertex(31.86, -4.22, 34.74, -5.52, 37.33, -7.22);
    bezierVertex(38.62, -8.07, 39.85, -9.02, 41.01, -10.04);
    bezierVertex(42.15, -11.07, 43.26, -12.17, 44.23, -13.34);
    vertex(44.81, -12.86);
  endShape();

  beginShape();
    vertex(40.82, -14.99);
    bezierVertex(39.5, -13.41, 38.05, -11.96, 36.44, -10.69);
    bezierVertex(35.63, -10.07, 34.78, -9.49, 33.85, -9.05);
    bezierVertex(32.93, -8.62, 31.91, -8.31, 30.9, -8.41);
    bezierVertex(31.92, -8.37, 32.89, -8.74, 33.77, -9.22);
    bezierVertex(34.65, -9.71, 35.45, -10.32, 36.2, -10.98);
    bezierVertex(37.7, -12.32, 39.04, -13.84, 40.22, -15.45);
    vertex(40.82, -14.99);
  endShape();

  beginShape();
    vertex(22.35, -33.61);
    bezierVertex(23.28, -34.46, 24.26, -35.22, 25.3, -35.9);
    bezierVertex(25.83, -36.23, 26.37, -36.54, 26.95, -36.79);
    bezierVertex(27.52, -37.03, 28.12, -37.23, 28.74, -37.23);
    bezierVertex(28.13, -37.17, 27.56, -36.91, 27.03, -36.62);
    bezierVertex(26.5, -36.32, 26, -35.97, 25.52, -35.59);
    bezierVertex(24.57, -34.84, 23.69, -33.98, 22.89, -33.09);
    vertex(22.35, -33.61);
  endShape();

  beginShape();
    vertex(20.32, -34.84);
    bezierVertex(21.46, -36.11, 22.7, -37.25, 24.08, -38.2);
    bezierVertex(24.78, -38.68, 25.51, -39.1, 26.29, -39.41);
    bezierVertex(27.07, -39.72, 27.91, -39.91, 28.74, -39.86);
    bezierVertex(27.06, -39.82, 25.58, -38.9, 24.31, -37.9);
    bezierVertex(23.03, -36.88, 21.89, -35.66, 20.91, -34.37);
    vertex(20.32, -34.84);
  endShape();

  beginShape();
    vertex(17.18, -34.82);
    bezierVertex(17.98, -35.92, 18.87, -36.9, 19.81, -37.85);
    bezierVertex(20.76, -38.8, 21.76, -39.68, 22.82, -40.48);
    bezierVertex(24.95, -42.08, 27.32, -43.38, 29.87, -44.11);
    bezierVertex(27.36, -43.26, 25.07, -41.86, 23.06, -40.19);
    bezierVertex(22.05, -39.35, 21.1, -38.43, 20.22, -37.46);
    bezierVertex(19.35, -36.5, 18.51, -35.47, 17.8, -34.4);
    vertex(17.18, -34.82);
  endShape();
}

function advicedroid(xloc,yloc,theadvice,advicewidth,adviceheight){
	discoursedroid(11,xloc,yloc,false,false,cdrawGuides,1);
	talkbubbleBL(theadvice, xloc+10, yloc+50, advicewidth,adviceheight);
	}


function challengedroid(xloc,yloc,theadvice,advicewidth,adviceheight){
	discoursedroid(1,xloc,yloc,true,false,cdrawGuides,1);
	talkbubbleTR(theadvice, xloc-10, yloc+10, advicewidth,adviceheight);
	}

function RLdroid(xloc,yloc,theadvice,advicewidth,adviceheight){
	discoursedroid(7,xloc,yloc,true,false,cideaGreen,1);
	talkbubbleTR(theadvice, xloc-20, yloc+10, advicewidth,adviceheight);
	}

function WTdroid(xloc,yloc,theadvice,advicewidth,adviceheight){
	discoursedroid(9,xloc,yloc,true,false,cideaRed,1);
	talkbubbleTR(theadvice, xloc, yloc+10, advicewidth,adviceheight);
	}

function pssguide(guideid,xloc,yloc,flip){
	discoursedroid(guideid,xloc,yloc,flip,true,cdrawGuides,1);
}

function discoursedroid(personid,xloc,yloc,flip,bigger,thecolour,theweight){

	stroke(thecolour);
	noFill();
	strokeWeight(theweight);


	push();
		translate(xloc,yloc);
		if (flip==true){
		scale(-1,1);
		}
		if (bigger==true){
		scale(2.0);
		}

	switch(personid){

	case 0:
		beginShape();
		vertex(15.1, 18.7);
		bezierVertex(15.1, 18.7, 14.01, 21.96, 15.1, 25.26);
		bezierVertex(16.19, 28.56, 15.61, 35.34, 15.68, 36.38);
		bezierVertex(15.75, 37.43, 14.48, 44.19, 14.83, 46.79);
		bezierVertex(15.17, 49.4, 18.61, 59.83, 17.08, 60.93);
		bezierVertex(15.55, 62.03, 11.91, 61.67, 11.62, 63.41);
		bezierVertex(11.33, 65.14, 12.55, 65.92, 15.1, 65.57);
		bezierVertex(17.65, 65.23, 21.92, 66.18, 21.95, 64.7);
		bezierVertex(21.98, 62.92, 20.78, 61.23, 21.37, 59.2);
		bezierVertex(21.95, 57.18, 22.99, 51.1, 21.31, 49.42);
		bezierVertex(20.72, 48.88, 21.65, 45.46, 22.39, 42.64);
		endShape();
		beginShape();
		vertex(11.97, 24.32);
		bezierVertex(12.84, 22.41, 13.59, 15.36, 14.44, 14.71);
		bezierVertex(15.83, 13.66, 19.01, 13.49, 20.32, 13.08);
		bezierVertex(21.64, 12.67, 22.39, 11.15, 19.67, 10.36);
		bezierVertex(16.92, 9.56, 16.7, 3.19, 18.82, 1.33);
		bezierVertex(20.93, -0.53, 23.29, -1.29, 27, 0.63);
		bezierVertex(30.72, 2.55, 29.66, 9.86, 27.48, 10.4);
		bezierVertex(25.27, 10.94, 25.74, 12.56, 25.74, 12.56);
		bezierVertex(25.74, 12.56, 25.3, 13.15, 28.65, 13.69);
		bezierVertex(32, 14.24, 32.36, 14.57, 38.94, 21.99);
		bezierVertex(38.94, 21.99, 39.26, 22.02, 38.94, 23.03);
		bezierVertex(38.31, 24.98, 32.05, 27.68, 31.72, 28.72);
		bezierVertex(31.4, 29.76, 29.57, 31.51, 27.88, 31.48);
		bezierVertex(27.88, 31.48, 25.07, 31.66, 25.56, 30.23);
		bezierVertex(26.06, 28.8, 29.61, 28.72, 29.77, 27.55);
		endShape();
		beginShape();
		vertex(28.87, 32.16);
		bezierVertex(28.87, 32.16, 28.87, 33.02, 29, 33.24);
		bezierVertex(30, 34.91, 29.62, 46.98, 30.42, 48.25);
		bezierVertex(31.22, 49.52, 32.37, 51.27, 32.37, 53.53);
		bezierVertex(32.37, 55.78, 32.47, 60.6, 33.31, 62.91);
		bezierVertex(34.5, 66.15, 32.6, 66.15, 32.6, 66.15);
		bezierVertex(32.6, 66.15, 27.34, 66.15, 26.47, 66.15);
		bezierVertex(25.59, 66.15, 23.41, 66.15, 23.13, 65.74);
		bezierVertex(22.69, 63.72, 24.75, 63.26, 25.45, 63.2);
		bezierVertex(26.19, 63.14, 27.99, 64.29, 28.56, 61.22);
		bezierVertex(29.14, 58.15, 25.01, 50.57, 25.01, 49.24);
		bezierVertex(24.06, 47.97, 22.31, 39.16, 22.31, 39.16);
		endShape();
		beginShape();
		vertex(29.92, 21.03);
		bezierVertex(29.66, 21.95, 29.35, 23.19, 29.16, 24.36);
		bezierVertex(29.03, 25.15, 28.96, 26.37, 28.91, 27.61);
		endShape();
		beginShape();
		vertex(34.07, 22.13);
		bezierVertex(33.06, 23.09, 31.62, 26.73, 30.37, 26.5);
		endShape();
		beginShape();
		vertex(29.16, 19.65);
		bezierVertex(29.16, 19.65, 31, 21.61, 33.19, 22.3);
		endShape();

		beginShape();
		vertex(13.8, 27.99);
		bezierVertex(13.8, 27.99, 11.95, 24.6, 11.32, 23.9);
		bezierVertex(10.7, 23.2, 8.65, 19.8, 8.65, 18.87);
		bezierVertex(8.65, 17.94, 8.72, 16.95, 6.39, 16.6);
		bezierVertex(4.06, 16.25, 4.13, 15.9, 4.13, 15.9);
		endShape();
		beginShape();
		vertex(4.33, 16.8);
		bezierVertex(4.33, 16.8, 4.28, 16.68, 2.82, 15.9);
		bezierVertex(1.36, 15.13, 0.29, 15.57, -0.28, 16.17);
		bezierVertex(-0.94, 16.86, 0.01, 17.38, 1.76, 17.96);
		bezierVertex(3.51, 18.54, 6.17, 18.39, 5.93, 19.82);
		bezierVertex(5.69, 21.26, 9.25, 28.33, 9.81, 29.1);
		bezierVertex(10.65, 30.21, 11.46, 31.58, 13.81, 31.08);
		bezierVertex(14.29, 30.98, 14.73, 30.68, 15.13, 30.26);
		endShape();

	break;
	case 1:

		beginShape();
		vertex(10.05, 23.58);
		bezierVertex(10.05, 23.58, 9.46, 22.48, 7.79, 20.8);
		bezierVertex(6.11, 19.12, 3.56, 18.6, 4.29, 16.4);
		bezierVertex(5.02, 14.2, 4.58, 13.95, 3.56, 13.58);
		bezierVertex(2.54, 13.22, 1.23, 10.03, -0.01, 10.09);
		bezierVertex(-1.25, 10.15, 0.21, 12, 1.01, 12.98);
		bezierVertex(1.81, 13.97, -1.95, 15.42, 0.43, 17.68);
		bezierVertex(1.74, 18.92, 2.43, 18.78, 2.87, 19.93);
		bezierVertex(3.31, 21.09, 7.64, 27.64, 10.05, 27.75);
		bezierVertex(11.38, 27.82, 12.94, 26.79, 14.1, 25.83);
		endShape();
		beginShape();
		vertex(28.81, 32.56);
		bezierVertex(29.32, 33.66, 26.18, 34.99, 26.55, 36.44);
		bezierVertex(26.91, 37.89, 29.32, 36.73, 29.32, 36.73);
		bezierVertex(30.85, 36.15, 31.5, 33.95, 31.21, 32.91);
		bezierVertex(30.92, 31.86, 35.95, 26.82, 35.51, 24.86);
		bezierVertex(33.83, 17.1, 31.07, 15.07, 27.71, 14.53);
		bezierVertex(24.36, 13.98, 24.6, 13.56, 24.6, 13.56);
		bezierVertex(24.6, 13.56, 24.53, 12.31, 26.55, 11.24);
		bezierVertex(28.06, 10.45, 28.75, 4.23, 26.71, 2.36);
		bezierVertex(23.63, -0.46, 19.84, 0.34, 17.73, 2.19);
		bezierVertex(15.61, 4.04, 15.75, 8.34, 17.51, 10.55);
		bezierVertex(18.94, 12.34, 20.38, 11.83, 20.03, 13.72);
		bezierVertex(19.77, 15.07, 15.55, 14.25, 14.16, 15.3);
		bezierVertex(12.78, 16.34, 10.29, 22.42, 10.29, 22.42);
		endShape();
		beginShape();
		vertex(28.22, 32.9);
		bezierVertex(28.22, 32.9, 27.86, 27.34, 28.22, 25.14);
		bezierVertex(28.59, 22.94, 29.39, 20.45, 29.39, 20.45);
		endShape();
		beginShape();
		vertex(29.39, 21.84);
		bezierVertex(29.39, 21.84, 31.65, 24.51, 31.28, 25.72);
		bezierVertex(30.92, 26.94, 30.63, 31.1, 29.39, 31.34);
		endShape();
		beginShape();
		vertex(14.6, 18.92);
		bezierVertex(14.6, 18.92, 13.51, 22.19, 14.6, 25.49);
		bezierVertex(15.69, 28.79, 15.11, 35.57, 15.18, 36.61);
		bezierVertex(15.25, 37.65, 13.98, 44.42, 14.33, 47.02);
		bezierVertex(14.67, 49.63, 18.11, 60.06, 16.58, 61.16);
		bezierVertex(15.06, 62.26, 11.41, 61.89, 11.12, 63.63);
		bezierVertex(10.83, 65.37, 12.05, 66.15, 14.6, 65.8);
		bezierVertex(17.15, 65.45, 21.42, 66.41, 21.45, 64.93);
		bezierVertex(21.48, 63.15, 20.28, 61.46, 20.87, 59.43);
		bezierVertex(21.45, 57.4, 22.49, 51.32, 20.81, 49.64);
		bezierVertex(20.22, 49.11, 21.15, 45.69, 21.89, 42.87);
		endShape();
		beginShape();
		vertex(21.81, 39.39);
		bezierVertex(21.81, 39.39, 23.56, 48.19, 24.51, 49.47);
		bezierVertex(24.51, 50.8, 28.64, 58.38, 28.06, 61.45);
		bezierVertex(27.49, 64.52, 25.69, 63.37, 24.94, 63.43);
		bezierVertex(24.25, 63.48, 22.19, 63.95, 22.63, 65.97);
		bezierVertex(22.9, 66.38, 25.09, 66.38, 25.96, 66.38);
		bezierVertex(26.84, 66.38, 32.1, 66.38, 32.1, 66.38);
		bezierVertex(32.1, 66.38, 34, 66.38, 32.81, 63.14);
		bezierVertex(31.97, 60.83, 31.87, 56.01, 31.87, 53.75);
		bezierVertex(31.87, 51.5, 30.72, 49.75, 29.92, 48.48);
		bezierVertex(29.11, 47.21, 29.96, 39.04, 28.72, 37.54);
		endShape();

	break;
	case 2:

		beginShape();
		vertex(34.4, 32.56);
		bezierVertex(34.91, 33.66, 31.77, 34.99, 32.14, 36.44);
		bezierVertex(32.5, 37.88, 34.91, 36.73, 34.91, 36.73);
		bezierVertex(36.44, 36.15, 37.09, 33.95, 36.8, 32.9);
		bezierVertex(36.51, 31.86, 41.54, 26.82, 41.1, 24.86);
		bezierVertex(39.42, 17.1, 36.65, 15.08, 33.31, 14.52);
		bezierVertex(30.39, 14.04, 30.61, 13.4, 30.61, 13.4);
		bezierVertex(30.61, 13.4, 30.14, 12.15, 32.14, 11.24);
		bezierVertex(33.7, 10.54, 34.34, 4.23, 32.3, 2.36);
		bezierVertex(29.22, -0.46, 25.43, 0.34, 23.32, 2.19);
		bezierVertex(21.2, 4.04, 21.34, 8.34, 23.1, 10.55);
		bezierVertex(24.53, 12.34, 26.23, 11.9, 25.87, 13.79);
		bezierVertex(25.62, 15.14, 21.14, 14.25, 19.75, 15.3);
		bezierVertex(18.37, 16.34, 15.87, 22.42, 15.87, 22.42);
		bezierVertex(15.87, 22.42, 13.5, 22.2, 11.24, 24.06);
		bezierVertex(9.38, 25.58, 8.8, 25.94, 6.48, 25.02);
		bezierVertex(4.16, 24.1, 3.8, 24.4, 3.21, 25.14);
		bezierVertex(2.62, 25.88, -0.32, 26.08, -0.48, 27.06);
		bezierVertex(-0.63, 28.03, 0.85, 27.52, 2.09, 27.04);
		bezierVertex(3.33, 26.57, 4.28, 29.75, 7.21, 28.24);
		bezierVertex(8.84, 27.41, 17.78, 26.96, 19.24, 25.55);
		endShape();
		beginShape();
		vertex(33.81, 32.9);
		bezierVertex(33.81, 32.9, 33.45, 27.34, 33.81, 25.14);
		bezierVertex(34.18, 22.94, 34.98, 20.45, 34.98, 20.45);
		endShape();
		beginShape();
		vertex(34.98, 21.84);
		bezierVertex(34.98, 21.84, 37.24, 24.51, 36.87, 25.72);
		bezierVertex(36.51, 26.94, 36.22, 31.1, 34.98, 31.34);
		endShape();
		beginShape();
		vertex(20.19, 18.92);
		bezierVertex(20.19, 18.92, 19.1, 22.19, 20.19, 25.49);
		bezierVertex(21.28, 28.79, 20.7, 35.57, 20.77, 36.61);
		bezierVertex(20.84, 37.65, 19.57, 44.41, 19.92, 47.02);
		bezierVertex(20.26, 49.63, 23.7, 60.05, 22.17, 61.15);
		bezierVertex(20.64, 62.26, 17, 61.89, 16.71, 63.63);
		bezierVertex(16.42, 65.37, 17.64, 66.15, 20.19, 65.8);
		bezierVertex(22.74, 65.45, 27.01, 66.41, 27.04, 64.93);
		bezierVertex(27.07, 63.15, 25.87, 61.46, 26.46, 59.43);
		bezierVertex(27.04, 57.4, 28.08, 51.32, 26.4, 49.64);
		bezierVertex(25.81, 49.1, 26.74, 45.69, 27.48, 42.87);
		endShape();
		beginShape();
		vertex(27.4, 39.39);
		bezierVertex(27.4, 39.39, 28.95, 48.41, 29.9, 49.68);
		bezierVertex(29.9, 51.01, 34.23, 58.38, 33.65, 61.45);
		bezierVertex(33.08, 64.52, 31.28, 63.37, 30.54, 63.43);
		bezierVertex(29.84, 63.48, 27.78, 63.95, 28.22, 65.97);
		bezierVertex(28.5, 66.38, 30.68, 66.38, 31.55, 66.38);
		bezierVertex(32.43, 66.38, 37.69, 66.38, 37.69, 66.38);
		bezierVertex(37.69, 66.38, 39.59, 66.38, 38.4, 63.14);
		bezierVertex(37.56, 60.83, 37.46, 56.01, 37.46, 53.75);
		bezierVertex(37.46, 51.5, 36.31, 49.75, 35.51, 48.48);
		bezierVertex(34.71, 47.2, 35.55, 39.04, 34.32, 37.54);
		endShape();

	break;
	case 3:

		beginShape();
		vertex(14.9, 18.32);
		bezierVertex(14.9, 18.32, 15.49, 18.81, 14.51, 19.94);
		bezierVertex(13.54, 21.07, 10.37, 23.3, 9.75, 22.89);
		endShape();
		beginShape();
		vertex(14.36, 18.76);
		bezierVertex(14.36, 18.76, 11.73, 18.91, 11.62, 17.43);
		bezierVertex(11.52, 15.96, 11.35, 15.77, 10.65, 15.66);
		bezierVertex(9.95, 15.55, 10.5, 19.46, 7.36, 19.72);
		bezierVertex(4.23, 19.98, 0.59, 19.85, 1.32, 18.93);
		endShape();
		beginShape();
		vertex(4.48, 25.39);
		bezierVertex(4.48, 25.39, 6.71, 28.75, 10.28, 28.53);
		bezierVertex(13.85, 28.31, 20.37, 22.97, 20.95, 19.83);
		bezierVertex(21.53, 16.69, 16.67, 15.54, 16.36, 14.55);
		bezierVertex(15.86, 12.99, 17.91, 12.52, 19.86, 11.04);
		bezierVertex(21.99, 9.42, 22.89, 3.82, 20.24, 1.65);
		bezierVertex(17.59, -0.51, 13.06, -1.84, 10.34, 1.7);
		bezierVertex(7.62, 5.24, 7.47, 10.21, 9.95, 12.12);
		bezierVertex(9.95, 12.12, 12.53, 13.63, 11.19, 13.84);
		bezierVertex(10.39, 13.96, 0.53, 17.04, -0.15, 19.2);
		bezierVertex(-0.83, 21.36, -0.3, 25.94, 1.4, 25.74);
		bezierVertex(3.1, 25.54, 9.21, 22.05, 10.65, 22.05);
		endShape();
		beginShape();
		vertex(19.81, 23.58);
		bezierVertex(19.81, 23.58, 18.42, 30.08, 19, 31.79);
		bezierVertex(19.58, 33.51, 20.74, 36.09, 18.56, 40.48);
		bezierVertex(16.38, 44.87, 17.69, 51.28, 17.98, 53.04);
		bezierVertex(18.27, 54.81, 17.24, 58.35, 17.91, 60.46);
		bezierVertex(18.57, 62.57, 18.1, 61.86, 17.32, 64.03);
		bezierVertex(16.55, 66.2, 15.97, 66.45, 13.45, 66.34);
		bezierVertex(10.92, 66.22, 10, 64.28, 10.68, 63.14);
		bezierVertex(11.36, 62, 12.91, 62.12, 12.86, 57.16);
		bezierVertex(12.81, 52.2, 11.02, 47.73, 11.41, 44.53);
		bezierVertex(11.79, 41.34, 11.5, 38.49, 10.05, 37.41);
		endShape();
		beginShape();
		vertex(10.58, 44.65);
		bezierVertex(10.58, 44.65, 10.19, 46.36, 10.58, 47.73);
		bezierVertex(10.97, 49.1, 9.46, 55.68, 10.05, 57.78);
		bezierVertex(10.63, 59.89, 10.77, 60.69, 8.3, 61.49);
		bezierVertex(5.82, 62.29, 3.32, 63.94, 0.87, 61.95);
		bezierVertex(-1.59, 59.95, -0.15, 58.53, 0.87, 58.41);
		bezierVertex(1.89, 58.3, 4.77, 58.01, 5.08, 55.68);
		bezierVertex(5.38, 53.34, 5.08, 48.51, 5.08, 48.51);
		bezierVertex(5.08, 48.51, 4.63, 45.95, 5.08, 44.97);
		bezierVertex(5.53, 44, 4.39, 40.06, 4.43, 36.08);
		bezierVertex(4.46, 34.25, 5.08, 31.59, 4.43, 26.87);
		endShape();

	break;
	case 4:

		beginShape();
		vertex(33.45, 31.77);
		bezierVertex(33.45, 31.77, 34.01, 29.58, 34.46, 28.51);
		bezierVertex(35.76, 25.3, 32.88, 21.35, 30.74, 17.81);
		bezierVertex(28.6, 14.26, 23.51, 14.6, 23.53, 13.12);
		bezierVertex(23.56, 10.38, 27.86, 11.9, 27.86, 5.65);
		bezierVertex(27.86, 0.39, 23.4, -0.49, 20.6, -0.49);
		bezierVertex(19.14, -0.49, 14.44, 1.11, 14.65, 5.5);
		bezierVertex(14.87, 10.1, 16.15, 10.82, 17.45, 11.55);
		bezierVertex(18.75, 12.28, 18.9, 13.65, 18.9, 13.65);
		bezierVertex(18.9, 13.65, 14.01, 14.31, 13.14, 16.34);
		bezierVertex(12.27, 18.37, 12.04, 20.9, 12.49, 21.86);
		endShape();
		beginShape();
		vertex(31.11, 32.28);
		bezierVertex(31.11, 32.28, 33.7, 31.83, 33.92, 32.9);
		bezierVertex(34.15, 33.97, 33.02, 35.78, 31.9, 35.89);
		bezierVertex(30.77, 36, 30.55, 35.72, 31.11, 35.04);
		bezierVertex(31.67, 34.37, 31.79, 33.81, 31.79, 33.81);
		endShape();
		beginShape();
		vertex(30.32, 31.83);
		bezierVertex(30.32, 31.83, 29.76, 31.78, 29.02, 32.19);
		bezierVertex(28.29, 32.6, 27.62, 34.42, 27.95, 34.71);
		bezierVertex(27.95, 34.71, 27.93, 35.28, 27.9, 35.52);
		bezierVertex(27.9, 35.52, 27.5, 36.68, 25.67, 37.35);
		bezierVertex(23.84, 38.03, 25.08, 39.15, 27.86, 39.21);
		bezierVertex(30.65, 39.27, 30.81, 36.56, 30.81, 36.56);
		endShape();
		beginShape();
		vertex(29.94, 30.82);
		bezierVertex(29.94, 30.82, 29.25, 26.61, 30.14, 25.81);
		endShape();
		beginShape();
		vertex(29.25, 25.81);
		bezierVertex(29.25, 25.81, 26.58, 21.97, 25.67, 21.86);
		endShape();
		beginShape();
		vertex(28.1, 25.81);
		bezierVertex(28.1, 25.81, 27.42, 28.71, 28.1, 30.16);
		bezierVertex(28.26, 30.52, 28.49, 30.98, 28.71, 31.54);
		endShape();
		beginShape();
		vertex(20.66, 39.72);
		bezierVertex(22.07, 40.34, 24.94, 47.21, 24.72, 48.45);
		bezierVertex(24.49, 49.69, 25.08, 50.87, 25.08, 50.87);
		vertex(25.39, 51.49);
		bezierVertex(24.89, 52.9, 26.29, 57.57, 27.11, 60.33);
		bezierVertex(27.93, 63.09, 26.74, 62.98, 25.67, 63.82);
		bezierVertex(24.6, 64.67, 25.22, 65.63, 25.67, 65.63);
		bezierVertex(26.13, 65.63, 30.69, 65.63, 32.77, 65.63);
		bezierVertex(34.86, 65.63, 33.39, 62.58, 32.77, 61.51);
		bezierVertex(32.15, 60.44, 32.04, 52.73, 32.19, 51.71);
		bezierVertex(32.35, 50.7, 31.08, 49.12, 31.08, 49.12);
		bezierVertex(31.08, 49.12, 29.5, 43.04, 29.69, 39.94);
		endShape();
		beginShape();
		vertex(14.24, 19.05);
		bezierVertex(14.24, 19.05, 13.06, 21.58, 13.52, 23.84);
		bezierVertex(13.97, 26.1, 14.35, 33.97, 13.45, 36.84);
		bezierVertex(12.54, 39.72, 13.96, 46.76, 13.56, 47.43);
		bezierVertex(13.17, 48.11, 13.89, 50.02, 13.89, 50.02);
		bezierVertex(13.89, 50.02, 15.03, 57.01, 14.63, 59.49);
		bezierVertex(14.24, 61.96, 10.86, 60.89, 9.9, 62.58);
		bezierVertex(8.95, 64.27, 10.07, 64.67, 12.95, 64.67);
		bezierVertex(15.82, 64.67, 17.85, 63.99, 19.48, 63.88);
		bezierVertex(21.12, 63.77, 21.11, 62.3, 20.14, 60.89);
		bezierVertex(19.16, 59.48, 19.76, 53.12, 20.07, 52.05);
		bezierVertex(20.38, 50.98, 19.48, 49.52, 19.48, 49.52);
		bezierVertex(18.36, 45.57, 20.81, 40.7, 20.81, 40.7);
		endShape();
		beginShape();
		vertex(12.78, 24.89);
		bezierVertex(12.78, 24.89, 9.65, 29.18, 7.51, 28.68);
		bezierVertex(5.37, 28.17, 2.41, 28.28, 1.34, 28.9);
		bezierVertex(0.27, 29.52, 2.24, 29.8, 2.24, 29.8);
		endShape();
		beginShape();
		vertex(2.69, 29.8);
		bezierVertex(2.69, 29.8, 2.92, 31.49, 1.51, 31.83);
		endShape();
		beginShape();
		vertex(4.27, 33.58);
		bezierVertex(4.27, 33.58, 0.27, 32.1, -0.23, 32.53);
		bezierVertex(-0.74, 32.96, -0.4, 33.97, 0.05, 34.7);
		bezierVertex(0.5, 35.44, 3.92, 36.29, 6.22, 35.21);
		bezierVertex(8.53, 34.13, 7.14, 32.11, 8.55, 31.77);
		bezierVertex(9.96, 31.44, 13.14, 30.16, 13.14, 30.16);
		endShape();

	break;
	case 5:

		beginShape();
		vertex(8.89, 13.24);
		bezierVertex(8.89, 13.24, 9.23, 11.64, 10.2, 11.64);
		bezierVertex(11.17, 11.64, 10.05, 13.53, 11.51, 15.82);
		bezierVertex(12.97, 18.11, 17.58, 20.3, 18.07, 21.37);
		endShape();
		beginShape();
		vertex(17.01, 20.54);
		bezierVertex(17.01, 20.54, 17.5, 19.11, 17.79, 19.01);
		endShape();
		beginShape();
		vertex(9.23, 13.58);
		bezierVertex(8.94, 13.73, 8.16, 13.53, 6.46, 12.42);
		bezierVertex(4.75, 11.3, 3.58, 13.34, 4.02, 15.58);
		bezierVertex(4.46, 17.81, 8.69, 18.11, 9.91, 19.18);
		bezierVertex(11.12, 20.25, 15.16, 25.98, 17.79, 26.08);
		bezierVertex(20.42, 26.17, 22.66, 22.86, 22.95, 19.55);
		bezierVertex(23.24, 16.24, 15.11, 14.43, 13.7, 14);
		bezierVertex(12.29, 13.56, 14.21, 12.12, 14.21, 12.12);
		bezierVertex(14.21, 12.12, 16.94, 10.8, 16.68, 5.26);
		bezierVertex(16.49, 1.03, 12.94, -0.51, 9.64, -0.49);
		bezierVertex(5.84, -0.47, 3.06, 1.92, 3.42, 6.22);
		bezierVertex(3.82, 10.9, 5.77, 11.64, 5.77, 11.64);
		endShape();
		beginShape();
		vertex(3.29, 16.11);
		bezierVertex(3.29, 16.11, 0.76, 20.49, 1.93, 24.09);
		bezierVertex(3.1, 27.69, 5, 29.31, 8.4, 28.06);
		bezierVertex(11.81, 26.81, 14.58, 26.28, 14.58, 26.28);
		endShape();
		beginShape();
		vertex(12.05, 23.02);
		bezierVertex(12.05, 23.02, 8.64, 23.46, 6.89, 23.02);
		bezierVertex(5.14, 22.58, 5.97, 19.04, 5.97, 19.04);
		endShape();
		beginShape();
		vertex(14.09, 60.91);
		bezierVertex(13.62, 62.64, 12.86, 64.67, 14.58, 65.2);
		bezierVertex(17.45, 66.09, 19.15, 66.2, 20.47, 65.48);
		bezierVertex(21.78, 64.76, 22.01, 61.32, 17.64, 61.94);
		endShape();
		beginShape();
		vertex(19.38, 61.32);
		bezierVertex(19.38, 61.32, 19.31, 58.98, 19.89, 56.7);
		bezierVertex(20.47, 54.43, 21.66, 48.83, 21.28, 47.72);
		bezierVertex(20.9, 46.61, 21.5, 43.16, 19.89, 38.23);
		bezierVertex(18.28, 33.29, 19.38, 26.69, 19.38, 26.69);
		endShape();
		beginShape();
		vertex(10.9, 38.93);
		bezierVertex(10.9, 38.93, 12.63, 40.09, 13.21, 41.84);
		bezierVertex(13.8, 43.6, 15.16, 46.95, 15.55, 47.39);
		bezierVertex(15.55, 47.39, 15.45, 48.46, 15.31, 49.29);
		bezierVertex(15.16, 50.11, 14.48, 50.84, 15.07, 53.67);
		bezierVertex(15.65, 56.49, 14.75, 59.92, 14.09, 60.91);
		endShape();
		beginShape();
		vertex(3.93, 28.06);
		bezierVertex(3.93, 28.06, 4.91, 30.64, 4.2, 34.28);
		bezierVertex(3.49, 37.93, 4.43, 44.33, 4.43, 44.33);
		bezierVertex(3.8, 46.22, 3.76, 45.69, 4.44, 49.13);
		bezierVertex(5.12, 52.57, 6.13, 59.69, 4.61, 60.3);
		bezierVertex(3.08, 60.91, 1.35, 59.15, 0.13, 60.76);
		bezierVertex(-1.08, 62.37, -0.47, 63.3, 1.62, 63.86);
		bezierVertex(3.71, 64.41, 5.86, 64.64, 8.14, 63.19);
		bezierVertex(10.43, 61.75, 11.85, 62.87, 10.9, 59.71);
		bezierVertex(9.96, 56.55, 10.69, 53.14, 10.69, 51.47);
		bezierVertex(10.69, 49.81, 9.88, 48.33, 10.59, 46.17);
		bezierVertex(11.08, 44.67, 11.51, 40.62, 11.51, 40.62);
		endShape();

	break;
	case 6:

		beginShape();
		vertex(10.39, 39.78);
		bezierVertex(11.8, 40.4, 12.14, 47.61, 11.91, 48.85);
		bezierVertex(11.69, 50.09, 12.28, 51.27, 12.28, 51.27);
		vertex(12.59, 51.88);
		bezierVertex(12.08, 53.29, 13.49, 57.95, 14.3, 60.7);
		bezierVertex(15.12, 63.45, 13.94, 63.34, 12.87, 64.18);
		bezierVertex(11.8, 65.02, 12.42, 65.98, 12.87, 65.98);
		bezierVertex(13.32, 65.98, 17.87, 65.98, 19.95, 65.98);
		bezierVertex(22.02, 65.98, 20.56, 62.95, 19.95, 61.88);
		bezierVertex(19.33, 60.81, 18.85, 53.66, 19, 52.65);
		bezierVertex(19.16, 51.64, 18.26, 49.53, 18.26, 49.53);
		bezierVertex(18.26, 49.53, 18.34, 41.55, 18.54, 40.67);
		bezierVertex(19.31, 37.38, 19.41, 33.18, 18.84, 30.62);
		bezierVertex(18.5, 29.07, 19.41, 22.87, 19.41, 22.87);
		endShape();
		beginShape();
		vertex(5.03, 19.54);
		bezierVertex(5.03, 19.54, 3.85, 22.06, 4.31, 24.31);
		bezierVertex(4.76, 26.57, 5.14, 34.42, 4.24, 37.28);
		bezierVertex(3.33, 40.15, 4.75, 47.16, 4.35, 47.84);
		bezierVertex(3.96, 48.51, 4.68, 50.42, 4.68, 50.42);
		bezierVertex(4.68, 50.42, 5.81, 57.38, 5.42, 59.86);
		bezierVertex(5.03, 62.33, 1.66, 61.26, 0.7, 62.94);
		bezierVertex(-0.25, 64.63, 0.87, 65.02, 3.74, 65.02);
		bezierVertex(6.6, 65.02, 8.62, 64.35, 10.26, 64.23);
		bezierVertex(11.89, 64.12, 11.88, 62.66, 10.91, 61.26);
		bezierVertex(9.94, 59.85, 10.53, 53.51, 10.84, 52.44);
		bezierVertex(11.15, 51.38, 10.26, 49.92, 10.26, 49.92);
		bezierVertex(9.14, 45.99, 10.92, 42.72, 10.92, 42.72);
		endShape();
		beginShape();
		vertex(22.2, 6.27);
		bezierVertex(22.2, 6.27, 21.52, 5.64, 21.46, 2.48);
		bezierVertex(21.41, -0.68, 20.36, 0.24, 19.41, 0.24);
		bezierVertex(18.46, 0.24, 16.69, 0.84, 17.17, 4.9);
		bezierVertex(17.64, 8.95, 19.14, 9.27, 19.51, 11.17);
		bezierVertex(19.88, 13.07, 19.78, 17.33, 20.94, 18.38);
		endShape();
		beginShape();
		vertex(19.41, 16.86);
		bezierVertex(19.41, 16.86, 14.54, 15.9, 14.54, 14.58);
		bezierVertex(14.54, 12.27, 17.78, 13.28, 17.98, 9.59);
		endShape();
		beginShape();
		vertex(16.83, 0.85);
		bezierVertex(16.83, 0.85, 15.88, -0.49, 12.28, -0.49);
		bezierVertex(8.99, -0.49, 5.97, 1.49, 5.97, 6.45);
		bezierVertex(5.97, 10.75, 7.8, 12.22, 9.53, 13.32);
		bezierVertex(11.27, 14.43, 10.07, 15.69, 8.65, 15.85);
		bezierVertex(8.65, 15.85, 3.98, 15.6, 3.24, 17.39);
		bezierVertex(2.51, 19.18, 2.77, 25.83, 2.37, 26.66);
		bezierVertex(1.96, 27.49, 1.5, 29.48, 1.72, 32);
		bezierVertex(1.94, 34.52, 0.65, 36.1, 0.19, 36.35);
		bezierVertex(-0.26, 36.6, -0.87, 38.61, -0.17, 39.71);
		endShape();
		beginShape();
		vertex(0.72, 38.15);
		bezierVertex(0.72, 38.15, -0.38, 40.91, 0.56, 42);
		bezierVertex(1.17, 42.7, 2.82, 42.47, 2.82, 42.47);
		endShape();
		beginShape();
		vertex(18.23, 22.22);
		bezierVertex(18.79, 22.09, 19.45, 22.07, 20.2, 22.23);
		bezierVertex(22.88, 22.81, 26.78, 22.6, 26.78, 20.54);
		bezierVertex(26.78, 18.49, 24.67, 16.38, 24.67, 16.38);
		bezierVertex(24.67, 16.38, 22.15, 13.86, 22.2, 11.64);
		bezierVertex(22.25, 9.43, 24.3, 7.64, 23.72, 5.8);
		bezierVertex(23.15, 3.96, 22.2, 4.06, 22.2, 4.06);
		endShape();

	break;
	case 7:

		beginShape();
		vertex(25.59, 15.85);
		bezierVertex(25.73, 15.24, 27.74, 14.1, 27.74, 14.1);
		bezierVertex(27.74, 14.1, 28.83, 12.89, 26.83, 12.33);
		bezierVertex(25.48, 11.95, 24.02, 10.85, 23.68, 5.86);
		bezierVertex(23.32, 0.65, 28.46, -0.49, 29.84, -0.49);
		bezierVertex(32.49, -0.49, 37.1, 0, 37.1, 5.79);
		bezierVertex(37.1, 12.34, 32.6, 11.13, 32.57, 13.73);
		bezierVertex(32.57, 13.73, 32.54, 14.54, 34.26, 14.41);
		bezierVertex(34.26, 14.41, 37.03, 14.09, 38.64, 14.78);
		bezierVertex(38.64, 14.78, 41.84, 11.84, 45.02, 11.43);
		bezierVertex(46.6, 9.73, 52.15, 8.16, 53.15, 6.32);
		bezierVertex(54.14, 4.47, 53.05, 2.32, 53.84, 2.06);
		bezierVertex(54.63, 1.8, 55.33, 4.43, 55.33, 4.43);
		endShape();
		beginShape();
		vertex(29.84, 40.08);
		bezierVertex(31.25, 40.7, 34.12, 47.57, 33.9, 48.81);
		bezierVertex(33.67, 50.05, 34.26, 51.23, 34.26, 51.23);
		vertex(34.57, 51.85);
		bezierVertex(34.06, 53.25, 35.47, 57.93, 36.29, 60.68);
		bezierVertex(37.11, 63.44, 35.92, 63.33, 34.85, 64.17);
		bezierVertex(33.78, 65.02, 34.4, 65.98, 34.85, 65.98);
		bezierVertex(35.3, 65.98, 39.86, 65.98, 41.95, 65.98);
		bezierVertex(44.03, 65.98, 42.56, 62.94, 41.95, 61.87);
		bezierVertex(41.33, 60.8, 41.21, 53.08, 41.37, 52.07);
		bezierVertex(41.52, 51.06, 40.26, 49.48, 40.26, 49.48);
		bezierVertex(40.26, 49.48, 38.61, 43.4, 38.86, 40.3);
		bezierVertex(39.15, 36.78, 38.57, 33.22, 37.89, 32.43);
		bezierVertex(37.2, 31.63, 36.09, 26.88, 36.97, 23.21);
		bezierVertex(37.85, 19.54, 44.82, 16.76, 46.01, 15.85);
		bezierVertex(47.89, 15.43, 51.46, 12.7, 52.45, 11.57);
		bezierVertex(53.44, 10.45, 54.43, 8.93, 59.19, 7.27);
		bezierVertex(63.95, 5.62, 61.87, 2.79, 60.48, 1.5);
		bezierVertex(59.09, 0.21, 55.92, 2.97, 55.92, 2.97);
		endShape();
		beginShape();
		vertex(23.42, 19.42);
		bezierVertex(23.42, 19.42, 22.24, 21.95, 22.7, 24.21);
		bezierVertex(23.16, 26.46, 23.54, 34.34, 22.63, 37.21);
		bezierVertex(21.72, 40.08, 23.14, 47.12, 22.75, 47.79);
		bezierVertex(22.36, 48.47, 23.08, 50.38, 23.08, 50.38);
		bezierVertex(23.08, 50.38, 24.21, 57.36, 23.82, 59.84);
		bezierVertex(23.42, 62.32, 20.05, 61.25, 19.09, 62.94);
		bezierVertex(18.13, 64.62, 19.26, 65.02, 22.13, 65.02);
		bezierVertex(25, 65.02, 27.03, 64.34, 28.66, 64.23);
		bezierVertex(30.3, 64.12, 30.29, 62.65, 29.32, 61.25);
		bezierVertex(28.34, 59.84, 28.94, 53.48, 29.25, 52.41);
		bezierVertex(29.56, 51.34, 28.66, 49.87, 28.66, 49.87);
		bezierVertex(27.54, 45.93, 29.98, 41.06, 29.98, 41.06);
		endShape();
		beginShape();
		vertex(25.59, 14.41);
		bezierVertex(23.98, 14, 17.01, 13.33, 16.09, 12.2);
		bezierVertex(15.16, 11.08, 10.48, 8.57, 8.77, 6.95);
		bezierVertex(7.06, 5.33, 9.14, 3.3, 7.98, 2.85);
		bezierVertex(6.83, 2.4, 6.92, 6.18, 4.98, 5.06);
		bezierVertex(3.04, 3.93, 1.38, 2.58, 0.36, 4.07);
		bezierVertex(-0.65, 5.55, -1.58, 7.89, 2.76, 9.16);
		bezierVertex(7.11, 10.42, 5.76, 8.26, 8.39, 11.05);
		bezierVertex(11.03, 13.85, 13.73, 15.8, 14.29, 15.85);
		bezierVertex(14.84, 15.89, 20.13, 18.58, 22.32, 20.03);
		endShape();

	break;
	case 8:


		beginShape();
		vertex(32.21, 29.36);
		bezierVertex(32.09, 30.59, 28.67, 30.13, 28.24, 31.58);
		bezierVertex(27.81, 33.03, 30.5, 33.26, 30.5, 33.26);
		bezierVertex(32.14, 33.55, 33.85, 31.97, 34.13, 30.91);
		bezierVertex(34.42, 29.85, 41.91, 27.01, 42.54, 25.07);
		bezierVertex(42.55, 23.03, 36.18, 15.04, 30.82, 13.72);
		bezierVertex(28.95, 13.26, 28.42, 13.3, 28.42, 13.3);
		bezierVertex(27.78, 13.34, 27.56, 12.79, 27.56, 12.62);
		bezierVertex(27.56, 12.62, 27.51, 11.74, 29.64, 10.39);
		bezierVertex(31.8, 9.02, 31.87, 3.28, 29.8, 1.38);
		bezierVertex(26.68, -1.48, 22.84, -0.67, 20.7, 1.21);
		bezierVertex(18.55, 3.09, 18.7, 7.44, 20.48, 9.69);
		bezierVertex(21.93, 11.5, 23.49, 10.63, 23.13, 12.54);
		bezierVertex(22.87, 13.91, 18.42, 13.36, 17.08, 14.5);
		bezierVertex(14.66, 16.55, 12.59, 18.78, 11.81, 20.29);
		endShape();
		beginShape();
		vertex(31.21, 29.52);
		bezierVertex(31.15, 27.78, 31.14, 25.66, 31.34, 24.48);
		bezierVertex(31.7, 22.25, 32.52, 19.73, 32.52, 19.73);
		endShape();
		beginShape();
		vertex(32.94, 21.38);
		bezierVertex(32.94, 21.38, 37.65, 23.65, 37.18, 24.85);
		bezierVertex(36.59, 26.33, 33.09, 29.19, 31.85, 28.34);
		endShape();
		beginShape();
		vertex(17.52, 18.18);
		bezierVertex(17.52, 18.18, 16.42, 21.49, 17.52, 24.84);
		bezierVertex(18.63, 28.18, 18.04, 35.05, 18.12, 36.11);
		bezierVertex(18.19, 37.16, 16.9, 44.02, 17.25, 46.66);
		bezierVertex(17.6, 49.3, 21.09, 59.87, 19.54, 60.99);
		bezierVertex(17.99, 62.11, 14.29, 61.74, 14, 63.5);
		bezierVertex(13.7, 65.26, 14.94, 66.05, 17.52, 65.7);
		bezierVertex(20.11, 65.35, 24.44, 66.32, 24.47, 64.82);
		bezierVertex(24.5, 63.01, 23.28, 61.3, 23.88, 59.24);
		bezierVertex(24.47, 57.19, 25.52, 51.02, 23.82, 49.32);
		bezierVertex(23.34, 48.88, 23.85, 46.57, 24.46, 44.2);
		endShape();
		beginShape();
		vertex(31.85, 33.96);
		bezierVertex(33.09, 35.48, 31.03, 46.77, 31.85, 48.06);
		bezierVertex(31.85, 48.06, 33.78, 49.9, 35.45, 60.69);
		endShape();
		beginShape();
		vertex(24.08, 38.98);
		bezierVertex(24.08, 38.98, 25.46, 47.72, 25.94, 49.62);
		bezierVertex(26.48, 51.22, 31.75, 57.58, 31.17, 60.7);
		bezierVertex(30.59, 63.81, 29.95, 63.23, 29.19, 63.29);
		bezierVertex(28.49, 63.35, 26.41, 63.82, 26.84, 65.87);
		bezierVertex(27.12, 66.29, 31.41, 66.18, 32.3, 66.18);
		bezierVertex(33.18, 66.18, 35.27, 64.02, 35.27, 64.02);
		bezierVertex(35.27, 64.02, 36.39, 63.11, 35.45, 60.69);
		endShape();
		beginShape();
		vertex(2.31, 10.9);
		bezierVertex(2.31, 10.9, 2.31, 9.8, 2.31, 8.78);
		bezierVertex(2.31, 7.76, 3.83, 7.41, 3.66, 8.37);
		bezierVertex(3.33, 10.55, 5.1, 13.47, 6.03, 15.54);
		bezierVertex(7.51, 18.82, 10.98, 20.61, 10.98, 20.61);
		bezierVertex(10.98, 20.61, 12.9, 22.06, 12.9, 23.54);
		endShape();
		beginShape();
		vertex(-0.13, 11.1);
		bezierVertex(-0.13, 11.1, 2.74, 10.96, 2.91, 11.65);
		bezierVertex(3.07, 12.33, 3.83, 14.65, 2.91, 14.92);
		bezierVertex(1.98, 15.2, 0.2, 15.61, -0.13, 14.51);
		bezierVertex(-0.47, 13.42, -0.72, 11.11, -0.13, 11.1);
		endShape();
		endShape();
		beginShape();
		vertex(16.3, 23.48);
		bezierVertex(16.3, 23.48, 13.64, 27.31, 10.98, 27.38);
		bezierVertex(8.32, 27.46, 3.63, 16.11, 2.98, 15.67);
		endShape();

	break;
	case 9:


		beginShape();
		vertex(18.28, 37.28);
		bezierVertex(18.28, 37.28, 15.7, 45.28, 14.33, 47.24);
		bezierVertex(14.38, 50.47, 13.36, 56.33, 13.21, 59.26);
		bezierVertex(13.07, 62.12, 14.51, 62.36, 14.23, 65.09);
		bezierVertex(14.12, 66.05, 10.36, 65.71, 7.77, 65.71);
		bezierVertex(5.19, 65.71, 4.7, 64.87, 5.02, 63.61);
		bezierVertex(5.35, 62.34, 7.69, 62.75, 8.58, 60.86);
		bezierVertex(9, 59.96, 9.28, 58.03, 9, 56.1);
		bezierVertex(8.78, 54.59, 8.29, 50.45, 7.82, 47.52);
		bezierVertex(7.37, 45.45, 10.81, 34.84, 11.61, 32.87);
		bezierVertex(12.41, 30.91, 11.94, 22.07, 10.85, 20.18);
		bezierVertex(10.85, 20.18, 8.61, 18.02, 5.33, 17.6);
		bezierVertex(2.06, 17.17, -0.36, 15.65, -0.49, 14.28);
		bezierVertex(-0.61, 12.91, 7.26, 9.06, 7.15, 7.45);
		bezierVertex(7.03, 5.84, 6.38, 2.08, 11.66, -0.13);
		bezierVertex(12.52, -0.56, 13.3, 0.29, 12.58, 2.12);
		bezierVertex(11.85, 3.94, 9.84, 5.65, 10.65, 7.11);
		bezierVertex(11.46, 8.57, 10.12, 9.15, 9.48, 9.2);
		bezierVertex(8.84, 9.25, 4.94, 14.11, 5.11, 14.32);
		endShape();
		beginShape();
		vertex(18.28, 37.28);
		bezierVertex(18.28, 37.28, 20.87, 45.28, 22.24, 47.24);
		bezierVertex(22.19, 50.47, 23.2, 56.33, 23.36, 59.26);
		bezierVertex(23.5, 62.12, 22.06, 62.36, 22.34, 65.09);
		bezierVertex(22.44, 66.05, 26.21, 65.71, 28.8, 65.71);
		bezierVertex(31.38, 65.71, 31.87, 64.87, 31.54, 63.61);
		bezierVertex(31.22, 62.34, 28.88, 62.75, 27.99, 60.86);
		bezierVertex(27.57, 59.96, 27.29, 58.03, 27.57, 56.1);
		bezierVertex(27.79, 54.59, 28.28, 50.45, 28.75, 47.52);
		bezierVertex(29.2, 45.45, 25.76, 34.84, 24.96, 32.87);
		bezierVertex(24.16, 30.91, 24.62, 22.07, 25.71, 20.18);
		bezierVertex(25.71, 20.18, 27.96, 18.02, 31.23, 17.6);
		bezierVertex(34.51, 17.17, 37.35, 15.62, 37.12, 14.26);
		bezierVertex(36.88, 12.91, 29.35, 9.07, 29.46, 7.46);
		bezierVertex(29.57, 5.85, 30.21, 2.09, 24.92, -0.11);
		bezierVertex(24.06, -0.53, 23.28, 0.32, 24.01, 2.15);
		bezierVertex(24.74, 3.97, 26.76, 5.67, 25.95, 7.13);
		bezierVertex(25.15, 8.6, 26.49, 9.17, 27.13, 9.22);
		bezierVertex(27.77, 9.27, 31.69, 14.11, 31.52, 14.32);
		endShape();
		beginShape();
		vertex(30.06, 13.09);
		bezierVertex(28.3, 13.06, 26.02, 13.12, 24.96, 13.54);
		bezierVertex(23.11, 14.28, 20.87, 14.63, 20.62, 13.58);
		bezierVertex(20.38, 12.53, 19.83, 12.09, 21.35, 11.88);
		bezierVertex(22.86, 11.67, 24.71, 9.91, 24.56, 5.59);
		bezierVertex(24.36, -0.2, 19.17, -0.49, 18.66, -0.49);
		bezierVertex(18.15, -0.49, 12.15, -0.39, 12.18, 5.47);
		bezierVertex(12.2, 10.52, 13.49, 11.67, 15, 11.88);
		bezierVertex(16.52, 12.09, 16.12, 12.53, 15.88, 13.58);
		bezierVertex(15.64, 14.63, 13.37, 14.48, 11.61, 13.54);
		bezierVertex(10.18, 12.78, 8.21, 12.83, 6.65, 13.04);
		endShape();

	break;
	case 10:


		beginShape();
		vertex(9.41, 23.02);
		bezierVertex(8.6, 24.97, 7.56, 28.62, 5.33, 28.56);
		bezierVertex(2.3, 28.48, 2.04, 20.87, 1.33, 19.86);
		bezierVertex(-0.7, 16.9, -1.27, 12.34, 0.86, 11.66);
		bezierVertex(3.38, 10.85, 3.74, 11.22, 3.89, 13.3);
		bezierVertex(4.03, 15.38, 4.54, 15.58, 5.28, 14.41);
		bezierVertex(6.02, 13.23, 5.99, 14.04, 5.99, 14.04);
		bezierVertex(6.07, 15.2, 5.65, 16.34, 4.68, 17.89);
		bezierVertex(3.35, 20, 5.14, 23.79, 5.79, 23.62);
		endShape();
		beginShape();
		vertex(27.77, 22.57);
		bezierVertex(27.29, 20.3, 26.73, 13.95, 19.57, 13.95);
		bezierVertex(19.02, 13.95, 18.91, 13.45, 18.91, 13.45);
		bezierVertex(18.67, 12.4, 18.12, 11.97, 19.63, 11.76);
		bezierVertex(21.15, 11.55, 23.06, 9.91, 22.91, 5.59);
		bezierVertex(22.71, -0.2, 17.52, -0.49, 17.01, -0.49);
		bezierVertex(16.49, -0.49, 10.5, -0.39, 10.52, 5.47);
		bezierVertex(10.55, 10.52, 11.94, 11.58, 13.46, 11.79);
		bezierVertex(14.97, 12, 14.6, 12.44, 14.33, 13.49);
		bezierVertex(14.26, 13.78, 13.82, 13.99, 13.39, 13.99);
		bezierVertex(6.23, 13.99, 5.69, 20.3, 5.2, 22.57);
		endShape();
		beginShape();
		vertex(23.68, 23.31);
		bezierVertex(24.48, 25.31, 25.52, 28.62, 27.64, 28.56);
		bezierVertex(30.68, 28.48, 30.94, 20.87, 31.64, 19.86);
		bezierVertex(33.68, 16.9, 34.24, 12.34, 32.12, 11.66);
		bezierVertex(29.59, 10.85, 29.23, 11.22, 29.09, 13.3);
		bezierVertex(28.94, 15.38, 28.44, 15.58, 27.7, 14.41);
		bezierVertex(26.96, 13.23, 26.98, 14.04, 26.98, 14.04);
		bezierVertex(26.9, 15.2, 27.32, 16.34, 28.3, 17.89);
		bezierVertex(29.62, 20, 27.84, 23.79, 27.18, 23.62);
		endShape();
		beginShape();
		vertex(16.63, 37.28);
		bezierVertex(16.63, 37.28, 14.05, 45.28, 12.67, 47.24);
		bezierVertex(12.72, 50.47, 11.71, 56.33, 11.56, 59.26);
		bezierVertex(11.41, 62.12, 12.86, 62.36, 12.57, 65.09);
		bezierVertex(12.47, 66.05, 8.71, 65.71, 6.12, 65.71);
		bezierVertex(3.53, 65.71, 3.05, 64.87, 3.37, 63.61);
		bezierVertex(3.69, 62.34, 6.04, 62.75, 6.93, 60.86);
		bezierVertex(7.35, 59.96, 7.62, 58.03, 7.35, 56.1);
		bezierVertex(7.13, 54.59, 6.63, 50.45, 6.17, 47.52);
		bezierVertex(5.72, 45.45, 9.15, 34.84, 9.96, 32.87);
		bezierVertex(10.61, 31.26, 10.42, 25.03, 9.72, 21.8);
		endShape();
		beginShape();
		vertex(16.63, 37.28);
		bezierVertex(16.63, 37.28, 19.21, 45.28, 20.59, 47.24);
		bezierVertex(20.54, 50.47, 21.55, 56.33, 21.7, 59.26);
		bezierVertex(21.85, 62.12, 20.4, 62.36, 20.69, 65.09);
		bezierVertex(20.79, 66.05, 24.55, 65.71, 27.14, 65.71);
		bezierVertex(29.73, 65.71, 30.21, 64.87, 29.89, 63.61);
		bezierVertex(29.57, 62.34, 27.22, 62.75, 26.33, 60.86);
		bezierVertex(25.91, 59.96, 25.64, 58.03, 25.92, 56.1);
		bezierVertex(26.13, 54.59, 26.63, 50.45, 27.09, 47.52);
		bezierVertex(27.55, 45.45, 24.11, 34.84, 23.3, 32.87);
		bezierVertex(22.5, 30.91, 22.97, 22.07, 24.06, 20.18);
		endShape();

	break;
	case 11:


		beginShape();
		vertex(7.48, 33.27);
		bezierVertex(8.13, 30.27, 8.53, 27.02, 7.83, 25.25);
		bezierVertex(7.05, 23.27, 6.76, 18.68, 6.76, 18.68);
		endShape();
		beginShape();
		vertex(14.6, 37.78);
		bezierVertex(14.6, 37.78, 14.42, 47.28, 13.62, 48.41);
		bezierVertex(12.81, 49.54, 13.71, 52.93, 13.62, 55.4);
		bezierVertex(13.53, 57.87, 12.85, 63.59, 13.28, 64.01);
		bezierVertex(13.71, 64.44, 14.18, 66.48, 13.14, 66.48);
		bezierVertex(12.1, 66.48, 6.38, 66.48, 6.02, 66.48);
		bezierVertex(5.67, 66.48, 4.06, 65.43, 6.02, 64.23);
		bezierVertex(7.99, 63.02, 9.5, 62.84, 8.78, 60.09);
		bezierVertex(8.07, 57.33, 7.36, 49.4, 7.72, 48.06);
		bezierVertex(7.65, 46.71, 6.8, 41.29, 6.72, 37.36);
		endShape();
		beginShape();
		vertex(8.63, 14.75);
		bezierVertex(11.33, 14.75, 12.65, 14.17, 12.68, 13.1);
		bezierVertex(12.71, 11.65, 9, 12, 8.95, 6.34);
		bezierVertex(8.92, 2.84, 11.09, 0.51, 15.09, 0.51);
		bezierVertex(18.47, 0.51, 20.59, 3.38, 20.67, 5.88);
		bezierVertex(20.88, 11.95, 16.35, 11.63, 16.59, 13.06);
		bezierVertex(16.77, 14.11, 19.04, 14.75, 21.74, 14.75);
		bezierVertex(24.44, 14.75, 26, 17.69, 25.4, 19.56);
		bezierVertex(25.4, 19.56, 24.48, 26.8, 25.09, 27.65);
		bezierVertex(25.7, 28.5, 24.99, 30.9, 23, 31.18);
		bezierVertex(21, 31.46, 19.64, 23.58, 17.7, 23.4);
		bezierVertex(15.75, 23.23, 14.6, 23.41, 14.6, 21.85);
		bezierVertex(14.6, 21.04, 18.65, 20.19, 19.52, 21.36);
		bezierVertex(20.4, 22.53, 19.22, 22.6, 19.22, 22.6);
		endShape();
		beginShape();
		vertex(22.3, 24.35);
		bezierVertex(22.3, 24.35, 23.29, 19.18, 22.91, 18.68);
		endShape();
		beginShape();
		vertex(21.88, 31.52);
		bezierVertex(21.9, 32.17, 21.94, 32.74, 22.03, 33.09);
		bezierVertex(22.37, 34.32, 22.76, 39.27, 22.32, 40.64);
		bezierVertex(21.89, 42.02, 21.4, 48.41, 21.4, 48.41);
		bezierVertex(21.4, 48.41, 21.84, 51.66, 21.64, 53.42);
		bezierVertex(21.45, 55.19, 20.09, 61.33, 21.4, 62.18);
		bezierVertex(22.71, 63.03, 24.07, 64.12, 25.19, 64.23);
		bezierVertex(26.3, 64.33, 26.89, 66.49, 25.19, 66.49);
		bezierVertex(23.49, 66.49, 17.47, 66.49, 17.47, 66.49);
		bezierVertex(17.47, 66.49, 15.67, 65.96, 16.79, 64.16);
		bezierVertex(17.9, 62.36, 17.08, 59.85, 16.79, 58.86);
		bezierVertex(16.49, 57.87, 16.2, 49.57, 15.91, 48.69);
		bezierVertex(15.62, 47.81, 15.08, 43.64, 15.08, 43.64);
		endShape();
		beginShape();
		vertex(6.6, 32.83);
		bezierVertex(6.72, 34.05, 10.14, 33.6, 10.57, 35.05);
		bezierVertex(11, 36.5, 8.31, 36.73, 8.31, 36.73);
		bezierVertex(6.67, 37.02, 4.96, 35.43, 4.68, 34.37);
		bezierVertex(4.39, 33.31, 0.15, 27.92, -0.49, 25.97);
		bezierVertex(-0.49, 23.93, 3.86, 15.14, 8.63, 14.75);
		endShape();
		beginShape();
		vertex(6.64, 21.52);
		bezierVertex(6.64, 21.52, 3.44, 25.21, 3.92, 26.4);
		bezierVertex(4.51, 27.88, 5.72, 32.66, 6.96, 31.81);
		endShape();
		beginShape();
		vertex(20.26, 21.56);
		bezierVertex(20.26, 21.56, 20.33, 20.26, 20.84, 21.09);
		bezierVertex(21.47, 22.11, 20.67, 23.14, 21.3, 24.18);
		bezierVertex(21.72, 24.87, 23.24, 25.95, 23.28, 26.52);
		endShape();
	break;

	}


	pop();
}


//structural adornments

function physicalPane(xloc, yloc, paneWidth, paneHeight ){

     var cornerRound = 5;
     push();
     fill(cpaneGreen);
     noStroke();
     rectMode(CENTER);
     rect(xloc,yloc, paneWidth, paneHeight, cornerRound, cornerRound, cornerRound, cornerRound);
     rectMode(CORNER);
     pop();
}

function conceptualPane(xloc, yloc, paneWidth, paneHeight ){

     var cornerRound = 5;
     push();
     fill(cpaneBlue);
     noStroke();
     rectMode(CENTER);
     rect(xloc,yloc, paneWidth, paneHeight, cornerRound, cornerRound, cornerRound, cornerRound);
     rectMode(CORNER);
     pop();
}

function paneNumber(paneNumber,paneKind,xloc,yloc) {
	 fill(cWhite);
	ellipse(xloc, yloc, 30, 30);
	if (paneKind=="C") {
        fill(cideaBlue);
    }
    if (paneKind=="P") {
        fill(cideaGreen);
    }
	textFont(titleFont, 18);
	text(paneNumber, xloc-textWidth(paneNumber)/2,yloc+6);
}

function paneBadgeSnapshot(){

  fill(cpaneBadgecamera);
  beginShape(); //flash
  noStroke();
  vertex(37.88, 0);
  bezierVertex(36.31, 0, 34.01, 0.79, 34.01, 5.8);
  bezierVertex(34.01, 5.8, 36.21, 5.8, 37.06, 6.07);
  bezierVertex(39.66, 5.8, 51.08, 5.8, 51.08, 5.8);
  bezierVertex(51.08, 2.44, 50.02, 0, 48.34, 0);
  vertex(37.88, 0);
  endShape();

  beginShape(); //body
  vertex(66.03, 5.79);
  vertex(21.81, 5.79);
  bezierVertex(19.33, 5.79, 17.47, 7.85, 17.47, 10.59);
  vertex(17.47, 35.22);
  bezierVertex(17.47, 38.16, 19.97, 40.54, 22.03, 40.54);
  vertex(65.5, 40.54);
  bezierVertex(67.89, 40.54, 70.06, 38.29, 70.06, 35.82);
  vertex(70.06, 10.36);
  bezierVertex(70.06, 8.15, 68.44, 5.79, 66.03, 5.79);
  vertex(51.74, 5.79);
  endShape();

  beginShape(); //lens
  fill(cpaneBadgelens);
  strokeWeight(2);
  stroke(cpaneBadgehighlight);
  vertex(53.28, 24.4);
  bezierVertex(53.28, 29.75, 48.85, 34.09, 43.4, 34.09);
  bezierVertex(37.94, 34.09, 33.52, 29.75, 33.52, 24.4);
  bezierVertex(33.52, 19.04, 37.94, 14.7, 43.4, 14.7);
  bezierVertex(48.85, 14.7, 53.28, 19.04, 53.28, 24.4);
  endShape();


  beginShape(); // highlight
  fill(cpaneBadgehighlight);
  noStroke();
  vertex(42.4, 21.64);
  bezierVertex(42.4, 22.89, 41.46, 23.9, 40.31, 23.9);
  bezierVertex(39.15, 23.9, 38.22, 22.89, 38.22, 21.64);
  bezierVertex(38.22, 20.38, 39.15, 19.37, 40.31, 19.37);
  bezierVertex(41.46, 19.37, 42.4, 20.38, 42.4, 21.64);
  endShape();

  beginShape(); //underhand
  fill(cpaneBadgehands);
  vertex(44.99, 61.54);
  bezierVertex(44.91, 61.54, 36.61, 61.53, 35.67, 60.87);
  bezierVertex(35.02, 60.4, 32.21, 57.56, 31.89, 57.23);
  vertex(31.82, 57.17);
  vertex(30.01, 53.95);
  bezierVertex(29.68, 53.7, 28.82, 53.03, 28.11, 52.25);
  bezierVertex(27.33, 51.4, 27.34, 49.52, 27.34, 47.87);
  bezierVertex(27.35, 47.28, 27.35, 46.72, 27.31, 46.39);
  bezierVertex(27.13, 45, 28.03, 40.91, 28.39, 40.27);
  bezierVertex(28.66, 39.79, 29.19, 39.33, 29.5, 39.07);
  bezierVertex(29.64, 38.17, 30.05, 35.38, 30.17, 34.78);
  bezierVertex(30.29, 34.15, 30.58, 33.31, 31.71, 33.31);
  bezierVertex(31.95, 33.31, 32.24, 33.34, 32.61, 33.39);
  vertex(32.82, 33.42);
  bezierVertex(35.03, 33.73, 36.18, 37.43, 36.52, 38.73);
  vertex(37.32, 38.99);
  bezierVertex(37.34, 38.99, 39.49, 39.44, 40.57, 39.99);
  bezierVertex(40.8, 40.1, 40.97, 40.3, 41.04, 40.55);
  bezierVertex(41.14, 40.89, 41.05, 41.3, 40.91, 41.67);
  bezierVertex(41.89, 42.15, 43.55, 42.99, 43.85, 43.17);
  bezierVertex(44, 43.26, 44.44, 43.52, 44.46, 44.81);
  bezierVertex(45.3, 44.77, 46.67, 44.72, 47.81, 44.7);
  bezierVertex(55.54, 44.58, 57.34, 39.97, 57.65, 38.92);
  bezierVertex(57.42, 38.41, 56.78, 37.09, 56.06, 36.31);
  bezierVertex(54.88, 35.03, 53.83, 31.74, 54.92, 28.88);
  bezierVertex(55.28, 27.93, 56.04, 27.4, 57.04, 27.4);
  bezierVertex(57.67, 27.4, 58.19, 27.61, 58.24, 27.64);
  vertex(58.32, 27.67);
  vertex(58.38, 27.72);
  bezierVertex(58.61, 27.89, 64.1, 31.95, 65.21, 33.13);
  bezierVertex(66.01, 33.99, 66.6, 35.85, 67.24, 38.02);
  bezierVertex(67.43, 38.64, 67.6, 39.23, 67.7, 39.44);
  bezierVertex(68.19, 40.52, 68.3, 47.04, 67.72, 48.53);
  vertex(67.5, 49.09);
  bezierVertex(67.01, 50.4, 66.4, 52.03, 65.01, 54);
  bezierVertex(63.67, 55.92, 59.46, 58.8, 56.33, 60.37);
  bezierVertex(54.3, 61.39, 48.36, 61.54, 44.99, 61.54);
  vertex(44.99, 61.54);
  vertex(44.99, 61.54);
  endShape();

  beginShape(); //upperhand
  vertex(11.26, 51.73);
  bezierVertex(10.56, 51.73, 9.79, 51.69, 8.97, 51.6);
  bezierVertex(2.82, 50.91, 3.13, 45.5, 3.14, 45.44);
  vertex(2.41, 34.09);
  bezierVertex(2.18, 30.59, 1.98, 26.68, 1.98, 26.08);
  vertex(1.98, 25.58);
  bezierVertex(1.93, 25.41, 1.27, 22.93, 1.65, 21.41);
  bezierVertex(1.99, 20.05, 4.84, 14.81, 5.46, 13.67);
  bezierVertex(5.46, 12.18, 5.55, 6.76, 6.62, 5.33);
  bezierVertex(7.83, 3.73, 13.43, 1.38, 14.49, 1.24);
  bezierVertex(14.58, 1.23, 14.71, 1.23, 14.88, 1.23);
  bezierVertex(16.43, 1.23, 21.49, 1.8, 21.71, 1.82);
  bezierVertex(22.79, 2.09, 24.64, 3.06, 24.52, 4.99);
  bezierVertex(24.4, 6.89, 23.1, 7.6, 22.43, 7.71);
  vertex(19.89, 8.14);
  bezierVertex(21.31, 8.78, 22.99, 9.59, 23.59, 10.05);
  bezierVertex(24.86, 11.02, 26.39, 12.5, 27.9, 14.22);
  bezierVertex(29.55, 16.11, 28.73, 18.11, 28.37, 18.97);
  bezierVertex(28.33, 19.07, 28.29, 19.16, 28.28, 19.22);
  bezierVertex(28.07, 19.99, 27.39, 20.46, 26.7, 20.75);
  bezierVertex(27.01, 20.97, 27.36, 21.22, 27.71, 21.48);
  bezierVertex(29.25, 22.66, 30.88, 25.31, 29.66, 27.55);
  bezierVertex(29.02, 28.72, 28.19, 29.42, 27.19, 29.64);
  bezierVertex(27.42, 29.86, 28.47, 30.87, 28.86, 31.2);
  bezierVertex(29.97, 32.12, 30.42, 32.87, 30.74, 33.42);
  bezierVertex(30.82, 33.55, 30.89, 33.67, 30.97, 33.78);
  bezierVertex(31.81, 35.01, 31.44, 36.28, 29.85, 37.56);
  vertex(29.73, 37.66);
  bezierVertex(29.39, 37.95, 28.97, 38.1, 28.47, 38.1);
  bezierVertex(27.49, 38.1, 26.2, 37.52, 24.63, 36.38);
  bezierVertex(24.53, 36.53, 24.26, 36.97, 24.1, 37.35);
  vertex(24.11, 37.35);
  bezierVertex(24.12, 37.35, 23.75, 38.99, 23.23, 40.12);
  bezierVertex(21.46, 44.04, 19.25, 47.65, 17.74, 49.1);
  vertex(17.51, 49.33);
  bezierVertex(16.4, 50.4, 15.01, 51.73, 11.26, 51.73);
  endShape();
}

function paneBadgeIntervene(){

  fill(cpaneBadgehands);
  stroke(cpaneBadgeedges);

  beginShape(); // hand1
  vertex(38.09, 5.32);
  bezierVertex(36.34, 5.32, 33.75, 5.49, 31.01, 5.68);
  bezierVertex(28.82, 5.82, 26.56, 5.98, 24.64, 6.05);
  bezierVertex(22.99, 6.1, 20.97, 7.32, 19.03, 8.49);
  bezierVertex(18.37, 8.89, 17.75, 9.26, 17.26, 9.52);
  bezierVertex(15.08, 10.68, 7.98, 15.6, 7.23, 16.12);
  bezierVertex(6.53, 16.53, 1.55, 19.62, 0.97, 24.7);
  bezierVertex(0.59, 28.08, 2.2, 31.45, 5.77, 34.71);
  bezierVertex(7.28, 36.08, 9.92, 36.84, 13.21, 36.84);
  bezierVertex(17.05, 36.84, 21.45, 35.78, 25.61, 33.86);
  bezierVertex(28, 32.76, 30.54, 29.28, 31.51, 27.86);
  vertex(40.94, 25.82);
  bezierVertex(41.23, 25.76, 41.5, 25.61, 41.71, 25.4);
  vertex(52.27, 15.09);
  bezierVertex(52.62, 14.74, 52.8, 14.26, 52.74, 13.77);
  bezierVertex(52.68, 13.28, 52.4, 12.85, 51.98, 12.59);
  bezierVertex(51.18, 12.11, 48.97, 10.76, 48.3, 10.27);
  bezierVertex(46.95, 9.28, 42.05, 6.18, 40.45, 5.58);
  bezierVertex(39.97, 5.4, 39.28, 5.32, 38.09, 5.32);
  endShape();

  beginShape(); //hand2
  vertex(65.16, 72.69);
  bezierVertex(64.99, 72.69, 64.83, 72.68, 64.66, 72.67);
  bezierVertex(61.16, 72.33, 55.98, 69.29, 56.15, 65.47);
  bezierVertex(56.21, 63.89, 56.71, 58.88, 57.25, 56.89);
  bezierVertex(57.55, 55.81, 57.93, 54.63, 58.31, 53.44);
  bezierVertex(59.16, 50.82, 60.04, 48.11, 60.04, 46.27);
  vertex(59.31, 41.74);
  vertex(59.19, 41.74);
  vertex(59.19, 40.94);
  bezierVertex(59.19, 40.75, 64.53, 21.3, 74.08, 21.3);
  bezierVertex(74.59, 21.3, 75.1, 21.35, 75.61, 21.46);
  bezierVertex(76.12, 21.57, 77.18, 21.81, 79.63, 28.77);
  bezierVertex(80.12, 30.11, 82.58, 41.81, 82.6, 43.71);
  bezierVertex(82.61, 45.29, 82.24, 50.2, 81.63, 51.75);
  bezierVertex(79.85, 56.3, 75.19, 63.82, 73.2, 67.03);
  vertex(72.69, 67.85);
  bezierVertex(71.73, 69.43, 68.62, 72.69, 65.16, 72.69);
  vertex(65.16, 72.69);
  endShape();

  beginShape(); //LH block
  fill(cpaneBadgeblocks);
  vertex(32.37, 16.15);
  vertex(46.36, 1.33);
  vertex(65.37, 6.34);
  vertex(68.6, 29.73);
  vertex(53.94, 43.67);
  vertex(38.22, 38.08);
  vertex(32.37, 16.15);
  vertex(32.37, 16.15);
  endShape();

  beginShape(); // LH block no 2
  vertex(49.6, 22);
  vertex(65, 6.8);
  vertex(68.13, 29.51);
  vertex(53.98, 42.88);
  vertex(49.6, 22);
  vertex(49.6, 22);
  endShape();


  beginShape(); // RH block
  vertex(68.54, 7.59);
  vertex(52.67, 11.77);
  vertex(52, 39.01);
  vertex(59.77, 41.42);
  vertex(75.43, 33.28);
  vertex(78.16, 10.56);
  vertex(68.54, 7.59);
  vertex(68.54, 7.59);
  endShape();

  beginShape(); //LH thumb
  fill(cpaneBadgehands);
  vertex(36.41, 11.22);
  bezierVertex(14.88, 16.25, 33.54, 25.19, 34.56, 25.33);
  bezierVertex(35.58, 25.47, 44.59, 25.95, 43.34, 31.2);
  bezierVertex(42.58, 34.38, 39.42, 33.77, 39.42, 33.77);
  bezierVertex(39.42, 33.77, 28.5, 33.04, 27.17, 33.09);
  bezierVertex(25.68, 33.14, 20.21, 35.14, 20.21, 35.14);
  endShape();


  beginShape(); //RH thumb
  vertex(59.95, 47.11);
  bezierVertex(59.81, 45.41, 59.25, 40.3, 58.69, 38.44);
  bezierVertex(58.14, 36.57, 58.22, 34.38, 58.22, 34.38);
  bezierVertex(58.22, 34.38, 57.86, 30.62, 61.03, 29.77);
  bezierVertex(64.19, 28.92, 65.17, 31.87, 65.17, 31.87);
  bezierVertex(65.17, 31.87, 66.36, 34.88, 67.02, 36.65);
  bezierVertex(67.22, 37.19, 68.41, 40.97, 69.61, 43.07);
  endShape();
}

function transitionEvolve(xloc,yloc, rotation){
     push();
     translate(xloc,yloc);
     rotate(radians(rotation));

     translate(-50,-50);
     smooth();

     beginShape();
     noStroke();
     fill(ctransitionBadgesBlueBG);
     vertex(36,69);
     bezierVertex(33,69,30,66,30,63);
     vertex(30,36);
     bezierVertex(30,33,33,30,36,30);
     vertex(63,30);
     bezierVertex(66,30,69,33,69,36);
     vertex(69,63);
     bezierVertex(69,66,66,69,63,69);
     vertex(36,69);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(1);
     stroke(ctransitionBadgesGrey);
     vertex(43,64);
     bezierVertex(42,64,41,64,40,63);
     bezierVertex(39,61,38,60,38,59);
     bezierVertex(39,57,41,55,41,55);
     vertex(47,51);
     bezierVertex(47,50,47,50,47,50);
     vertex(47,50);
     vertex(47,49);
     vertex(41,44);
     bezierVertex(41,44,39,43,38,41);
     bezierVertex(38,39,39,38,40,37);
     bezierVertex(41,36,42,35,43,35);
     bezierVertex(45,35,47,37,47,37);
     vertex(60,47);
     bezierVertex(60,47,61,48,61,50);
     vertex(61,50);
     bezierVertex(61,52,60,53,60,53);
     vertex(47,63);
     bezierVertex(47,63,45,64,43,64);
     vertex(43,64);
     vertex(43,64);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(1);
     stroke(129,173,192);
     vertex(50,59);
     bezierVertex(45,59,41,55,41,50);
     bezierVertex(41,46,44,42,48,42);
     vertex(48,41);
     bezierVertex(47,41,47,41,47,41);
     vertex(47,40);
     vertex(47,39);
     vertex(47,39);
     bezierVertex(48,38,48,38,49,38);
     vertex(50,38);
     vertex(51,38);
     vertex(52,39);
     vertex(52,39);
     bezierVertex(52,40,52,41,52,41);
     vertex(52,41);
     vertex(52,42);
     bezierVertex(55,42,58,46,58,50);
     bezierVertex(58,55,54,59,50,59);
     vertex(50,59);
     vertex(50,59);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(1);
     stroke(ctransitionBadgesBluedetail);
     ellipse(50,50,12.8,12.8);
     endShape();

     beginShape();
     noStroke();
     fill(ctransitionBadgesBluedetail);
     vertex(49,50);
     vertex(56,50);
     vertex(56.1,50.7);
     vertex(56,50.9);
     vertex(49,50.9);
     endShape();

     beginShape();
     noStroke();
     fill(ctransitionBadgesBluedetail);
     vertex(49.76,51.69);
     vertex(50.7,46);
     vertex(50.39,51.82);
     endShape();

     pop();
}

function transitionIntervene(xloc, yloc,  rotation){
     push();
     translate(xloc,yloc);
     rotate(radians(rotation));

     smooth();
     scale(0.5);

     beginShape();
     noStroke();
     fill(ctransitionBadgesBlueBG);
     vertex(38,27);
     bezierVertex(38,33,33,38,27,38);
     vertex(-27,38);
     bezierVertex(-33,38,-38,33,-38,27);
     vertex(-38,-27);
     bezierVertex(-38,-33,-33,-38,-27,-38);
     vertex(27,-38);
     bezierVertex(33,-38,38,-33,38,-27);
     vertex(38,27);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(1.9999999825256929);
     stroke(ctransitionBadgesGrey);
     vertex(-19,25);
     bezierVertex(-22,25,-24,24,-25,22);
     bezierVertex(-27,20,-28,18,-28,16);
     bezierVertex(-27,12,-24,10,-24,10);
     vertex(-14,2);
     bezierVertex(-13,1,-13,1,-13,0);
     vertex(-13,0);
     vertex(-14,0);
     vertex(-24,-8);
     bezierVertex(-24,-8,-27,-10,-28,-14);
     bezierVertex(-28,-16,-27,-18,-25,-20);
     bezierVertex(-24,-22,-22,-23,-19,-23);
     bezierVertex(-16,-23,-13,-21,-13,-21);
     vertex(8,-4);
     bezierVertex(8,-3,10,-2,10,0);
     vertex(10,0);
     bezierVertex(10,3,8,5,8,5);
     vertex(-13,22);
     bezierVertex(-13,22,-16,25,-19,25);
     vertex(-19,25);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(1.9999999825256929);
     stroke(ctransitionBadgesGrey);
     vertex(14,10);
     bezierVertex(13,10,12,10,12,9);
     bezierVertex(11,8,11,7,11,6);
     bezierVertex(11,5,12,4,12,4);
     vertex(16,1);
     bezierVertex(17,1,17,0,17,0);
     vertex(17,0);
     bezierVertex(17,0,17,0,16,0);
     vertex(12,-2);
     bezierVertex(12,-3,11,-3,11,-5);
     bezierVertex(11,-6,11,-7,12,-7);
     bezierVertex(12,-8,13,-9,14,-9);
     bezierVertex(16,-9,17,-8,17,-8);
     vertex(26,-1);
     vertex(26,0);
     vertex(26,0);
     bezierVertex(26,2,26,2,26,2);
     vertex(17,9);
     bezierVertex(17,9,16,10,14,10);
     vertex(14,10);
     endShape();

     pop();
}

function transitionRedescribe(xloc,yloc, rotation){
     push();
     translate(xloc,yloc);
     rotate(radians(rotation));

     smooth();
     scale(0.5);
     beginShape();
     noStroke();
     fill(ctransitionBadgesBlueBG);
     vertex(38,27);
     bezierVertex(38,33,33,38,27,38);
     vertex(-27,38);
     bezierVertex(-33,38,-38,33,-38,27);
     vertex(-38,-27);
     bezierVertex(-38,-33,-33,-38,-27,-38);
     vertex(27,-38);
     bezierVertex(33,-38,38,-33,38,-27);
     vertex(38,27);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(2);
     stroke(ctransitionBadgesGrey);
     vertex(-17,20);
     bezierVertex(-21,15,-24,9,-24,3);
     bezierVertex(-24,1,-23,0,-23,0);
     bezierVertex(-22,0,-21,-1,-20,-1);
     bezierVertex(-19,-1,-17,0,-17,0);
     bezierVertex(-16,0,-15,1,-15,3);
     bezierVertex(-15,7,-14,11,-11,14);
     bezierVertex(-8,17,-4,19,0,19);
     bezierVertex(3,19,6,18,9,16);
     vertex(7,14);
     bezierVertex(6,13,6,12,6,11);
     bezierVertex(6,10,7,10,8,10);
     vertex(23,6);
     bezierVertex(24,6,25,6,25,7);
     bezierVertex(26,7,26,8,26,10);
     vertex(22,24);
     bezierVertex(21,25,21,26,20,26);
     bezierVertex(19,26,18,26,17,25);
     vertex(15,22);
     bezierVertex(10,26,5,27,0,27);
     bezierVertex(-6,27,-12,25,-17,20);
     vertex(-17,20);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(2);
     stroke(ctransitionBadgesGrey);
     vertex(-22,-7);
     bezierVertex(-23,-8,-23,-9,-23,-10);
     vertex(-19,-25);
     bezierVertex(-18,-26,-18,-26,-17,-27);
     bezierVertex(-16,-27,-15,-26,-14,-26);
     vertex(-12,-23);
     bezierVertex(-7,-26,-2,-28,2,-28);
     bezierVertex(9,-28,15,-25,20,-21);
     bezierVertex(24,-16,27,-10,27,-3);
     bezierVertex(27,-1,25,0,23,0);
     bezierVertex(22,0,20,0,20,0);
     bezierVertex(19,-1,18,-2,18,-3);
     bezierVertex(18,-8,17,-12,14,-15);
     bezierVertex(11,-18,7,-19,2,-19);
     bezierVertex(0,-19,-3,-18,-6,-17);
     vertex(-4,-15);
     bezierVertex(-3,-14,-3,-13,-3,-12);
     bezierVertex(-3,-11,-4,-10,-5,-10);
     vertex(-20,-7);
     bezierVertex(-21,-6,-22,-7,-22,-7);
     endShape();
     pop();
}

function transitionStep(xloc,yloc, rotation){
     push();
     translate(xloc,yloc);
     rotate(radians(rotation));

     smooth();
     scale(0.5);

     beginShape();
     noStroke();
     fill(ctransitionBadgesBlueBG);
     vertex(38,27);
     bezierVertex(38,33,33,38,27,38);
     vertex(-27,38);
     bezierVertex(-33,38,-38,33,-38,27);
     vertex(-38,-27);
     bezierVertex(-38,-33,-33,-38,-27,-38);
     vertex(27,-38);
     bezierVertex(33,-38,38,-33,38,-27);
     vertex(38,27);
     endShape();

     beginShape();
     fill(ctransitionBadgesWhite);
     strokeWeight(1.9999783941146585);
     stroke(ctransitionBadgesGrey);
     vertex(-11,-28);
     bezierVertex(-14,-28,-17,-26,-19,-24);
     bezierVertex(-21,-22,-22,-19,-22,-16);
     bezierVertex(-21,-12,-18,-9,-17,-9);
     vertex(-6,0);
     vertex(-6,0);
     vertex(-6,0);
     bezierVertex(-6,0,-6,0,-5,0);
     bezierVertex(-6,0,-6,0,-6,0);
     vertex(-6,0);
     vertex(-6,0);
     vertex(-17,9);
     bezierVertex(-18,9,-21,12,-22,16);
     bezierVertex(-22,19,-21,22,-19,24);
     bezierVertex(-17,26,-14,28,-11,28);
     bezierVertex(-7,28,-4,25,-4,25);
     vertex(19,6);
     vertex(19,6);
     vertex(20,6);
     bezierVertex(20,5,22,3,22,0);
     vertex(22,0);
     bezierVertex(22,-3,20,-5,20,-6);
     vertex(19,-6);
     vertex(19,-6);
     vertex(-4,-25);
     bezierVertex(-4,-25,-7,-28,-11,-28);
     vertex(-11,-28);
     endShape();
     pop();
}

function SIDPane(paneKind, paneNumber, paneAction, titleText){

    if (paneKind=="C") {
        conceptualPane(width/2, height/2, width, height);
    }
    if (paneKind=="P") {
        physicalPane(width/2, height/2, width, height);
    }
    fill(cInvertedTextBG);
    noStroke();
    rect(0, 0, width, 40, 5, 5, 0, 0);
    arc(30, 35, 50, 40, 0, PI);
    if (paneKind=="C") {
        fill(cpaneBlue);
    }
    if (paneKind=="P") {
        fill(cpaneGreen);
    }
    ellipse(width-30, 20, 30, 30);
    fill(cInvertedText);
    textFont(titleFont, 18);
    text(titleText, 65, 25);
    text(paneNumber, width-30-textWidth(paneNumber)/2, 25);

    push();
    scale(0.5);
    translate(20, 25);
    if (paneAction=="S") {
        paneBadgeSnapshot();
    }
    if (paneAction=="F") {
        paneBadgeIntervene();
    }
    pop();
}


function linkArrowUp(xloc,yloc,lengthofArrow,linkcolour){
  var widthOfArrow = 8;
  var widthOfArrowHead = 24;
  var heightOfArrowHead = 18;
  var arrowIndent =8;
  push();
  translate(xloc, yloc-lengthofArrow-arrowIndent);
  rotate(-PI/2);
  beginShape();
  noStroke();
  fill(linkcolour);
  vertex(0,0);
  vertex(-heightOfArrowHead,-widthOfArrowHead/2);
  vertex(-heightOfArrowHead,-widthOfArrow/2);
  vertex(-lengthofArrow-(widthOfArrow/2)-arrowIndent,-widthOfArrow/2);
  vertex(-lengthofArrow-(widthOfArrow/2)-arrowIndent,widthOfArrow/2);
  vertex(-heightOfArrowHead,widthOfArrow/2);
  vertex(-heightOfArrowHead,widthOfArrowHead/2);
  vertex(0,0);
  endShape(CLOSE);
  pop();
}

function linkArrowDown(xloc,yloc,lengthofArrow,linkcolour){
  var widthOfArrow = 8;
  var widthOfArrowHead = 24;
  var heightOfArrowHead = 18;
  var arrowIndent =8;
  push();
  translate(xloc, yloc+lengthofArrow+arrowIndent);
  rotate(PI/2);
  beginShape();
  noStroke();
  fill(linkcolour);
  vertex(0,0);
  vertex(-heightOfArrowHead,-widthOfArrowHead/2);
  vertex(-heightOfArrowHead,-widthOfArrow/2);
  vertex(-lengthofArrow-(widthOfArrow/2)-arrowIndent,-widthOfArrow/2);
  vertex(-lengthofArrow-(widthOfArrow/2)-arrowIndent,widthOfArrow/2);
  vertex(-heightOfArrowHead,widthOfArrow/2);
  vertex(-heightOfArrowHead,widthOfArrowHead/2);
  vertex(0,0);
  endShape(CLOSE);
  pop();
}

function linkArrowRight(xloc,yloc,lengthofArrow,linkcolour){
  var widthOfArrow = 8;
  var widthOfArrowHead = 24;
  var heightOfArrowHead = 18;
  var arrowIndent =8;
  push();
  translate(xloc+lengthofArrow+arrowIndent, yloc);
  beginShape();
  noStroke();
  fill(linkcolour);
  vertex(0,0);
  vertex(-heightOfArrowHead,-widthOfArrowHead/2);
  vertex(-heightOfArrowHead,-widthOfArrow/2);
  vertex(-lengthofArrow-(widthOfArrow/2)-arrowIndent,-widthOfArrow/2);
  vertex(-lengthofArrow-(widthOfArrow/2)-arrowIndent,widthOfArrow/2);
  vertex(-heightOfArrowHead,widthOfArrow/2);
  vertex(-heightOfArrowHead,widthOfArrowHead/2);
  vertex(0,0);
  endShape(CLOSE);
  pop();
}

function linkArrowLeft(xloc,yloc,lengthofArrow,linkcolour){
push();
  translate(xloc,yloc);
  rotate(PI);
  linkArrowRight(0, 0, lengthofArrow,linkcolour);
  pop();
}

function linkedBox(xloc,yloc,bwidth,bhight){
  rectMode(CENTER);
  noStroke();
  fill(linkcolour);
  rect(xloc,yloc,bwidth,bhight);
  rectMode(CORNER);

}

function linkBarRight(xloc,yloc,lengthBar,linkcolour){
  var widthOfBar = 8;
  noStroke();
  fill(linkcolour);
  rect(xloc, yloc-(widthOfBar/2), lengthBar,widthOfBar);
}

function linkBarUp(xloc,yloc,lengthBar,linkcolour){
  var widthOfBar = 8;
  noStroke();
  fill(linkcolour);
  rect(xloc-(widthOfBar/2), yloc+(widthOfBar/2), widthOfBar,-(lengthBar+(widthOfBar/2)));
}

// all the colours

// panes, badges, other infrastructure and backgrounds
var cindicator = 'rgb(225, 191, 45)';
var cWhite = 'rgb(255,255,255)';
var cBlack = 'rgb(0,0,0)';
var cdesignbackground ='rgba(255, 204, 102, 0.59)';
var cpssbackground ='rgb(245, 245, 245)';
var cDIPbg = 'rgba(83, 136, 165,0.4)';
var cSIDbg = 'rgb(223, 223, 223)';
var cpaneGreen='rgb(174, 208, 186)';
var cpaneBlue='rgb(180, 211, 225)';
var cpaneBadgecamera = 'rgb(179, 179, 179)';
var cpaneBadgehands = 'rgb(83, 136, 165)';
var cpaneBadgelens = 'rgb(109, 109, 109)';
var cpaneBadgehighlight = 'rgb(230, 230, 230)';
var cpaneBadgeblocks = 'rgb(179, 179, 179)';
var cpaneBadgeedges = 'rgb(109, 109, 109)';
var ctransitionBadgesWhite = 'rgb(255, 255, 255)';
var ctransitionBadgesBlueBG = 'rgb(135,178,202)';
var ctransitionBadgesBluedetail = 'rgb(129,173,192)';
var ctransitionBadgesGrey = 'rgb(137,137,137)';
var control_outline = 'rgb(179, 179, 179)';
var control_fill  = 'rgb(165, 165, 165)';
var control_hover = 'rgb(255, 112, 40)';
var control_background = 'rgb(230, 230, 230)';
var control_press = 'rgb(91, 173, 58)';
var csliderlightGrey ='rgb(230, 230, 230)';
var csliderdarkGrey ='rgb(179, 179, 179)';
var cexploreplot ='rgb(72, 120, 175)';
var cplotBG ='rgb(188, 222, 251)';
var cplotaxes ='rgb(83, 136, 165)';
var cleadline = 'rgb(204, 204, 204)';
var cItemOverviewBlue = 'rgb(102, 154, 179)';
var cideaGrey='rgb(150,150,150)';
var cideaBlue='rgb(86, 137, 164)';
var cideaBlue3D='rgba(86, 137, 164,0.8)';
var cideaGreen='rgb(86, 164, 112)';
var cideaGreen3D='rgba(86, 164, 112,0.8)';
var cideaRed='rgb(171, 90, 117)';
var cideaRed3D='rgba(171, 90, 117,0.8)';
var cideaBrown='rgb(181, 152, 95)';
var cpathlinks='rgba(179,179,179,0.80)';
var cboxLightGrey = 'rgb(240, 240, 240)';

var ccyan ='rgb(0,255,255)';
var ccyan3D ='rgba(0,255,255,0.6)';
var cyellow ='rgb(255,255,0)';
var cyellow3D ='rgba(255,255,0,0.6)';
var cmagenta ='rgb(255,0,255)';
var cmagenta3D ='rgba(255,0,255,0.6)';


// energy and power
var cstoresdarkBlue = 'rgb(33,84,119)';
var cstoresOrange = 'rgb(237,93,5)';
var cstoreslightOrange = 'rgb(253,99,0)';
var cstoreslighterOrange = 'rgb(253,152,1)';
var cstorespaleBlue = 'rgb(104,186,210)';
var cstoresdarkRed = 'rgb(218, 72, 59)';
var cstoresmidBlue = 'rgb(42, 110, 179)';
var cstoresdarkGrey = 'rgb(108, 121, 134)';
var cstoresmidGrey = 'rgb(151,151,151)';
var cstoreslightGrey = 'rgb(101,101,101)';
var cstoresdarkerGrey = 'rgb(61,61,61)';
var cstoresdarkerRed = 'rgb(165,56,47)';
var cstoreslightRed = 'rgb(229,20,6)';
var cstoreframeGrey = 'rgb(179, 179, 179)';
var cstoreframelightGrey = 'rgb(230, 230, 230)';
var cstoreslightBlue = 'rgb(32,127,253)';
var cstoresmiddlingBlue = 'rgb(21,100,253)';
var cstoresgreyBlue = 'rgb(82,119,142)';
var cstoresnuclearYellow = 'rgb(255, 220, 103)';
var cstoresnuclearOrange = 'rgb(240, 123, 74)';
var cstoresnuclearGrey = 'rgb(101, 115, 129)';
var cstoresnuclearBlue = 'rgb(9, 97, 163)';
var cstoresvibrationlightgreyBlue = 'rgb(132, 157, 182)';
var cstoresvibrationdarkgreyBlue = 'rgb(53, 88, 109)';
var cstoreskineticGrey = 'rgb(153,153,153)';
var cstorethermaldarkBlue = 'rgb(67, 97, 115)';
var cstorethermallightBlue = 'rgb(136, 161, 185)';
var cenergy = 'rgb(244, 144, 33)';
var cpathwayBlue = 'rgb(36,67,253)';
var cdeviceBlue = 'rgb(51, 88, 109)';
var cdeviceLightGrey = 'rgb(240, 240, 241)';
var cdeviceGrey = 'rgb(146, 148, 151)';
var cactivity = 'rgb(213, 135, 23)';

// people annotations
var cdrawChildren = 'rgb(59, 122, 220)';
var cdrawTiFo = 'rgb(83, 136, 165)';
var TiFoPencil = 'rgb(255, 255, 255)';
var cdrawGuides = 'rgb(56, 91, 113)';
var cdrawvehicles = 'rgb(83, 136, 165)';

//  text
var clabeltext = 'rgb(0, 51, 102)';
var cspeechBubbleBG = 'rgb(255,255,255)';
var cInvertedTextBG = 'rgb(56, 91, 113)';
var ctalkbubbleBG = 'rgb(209, 237, 243)';
var cInvertedText = 'rgb(255, 255, 255)';

// radiations
var clight = 'rgb(248, 231, 28)';
var csound = 'rgb(0, 156, 62)';
var cabsorb = 'rgb(0, 0, 0)';
var csoundsource = 'rgb(96, 96, 96)';
var cdolikeme = 'rgb(166, 168, 171)';
var ccongreen = 'rgb(0, 165, 81)';
var cconpink = 'rgb(235, 0, 139)';
var cconorange = 'rgb(246, 146, 30)';
var cconlightgreen = 'rgb(139, 197, 63)';
var ccongray = 'rgb(166, 168, 171)';
var cconpurple = 'rgb(120, 121, 142)';
var cconcyan = 'rgb(0, 173, 238)';
var cabsorbpoor = 'rgb(202, 201, 202)';
var cabsorbgood = 'rgb(144, 144, 144)';
var cabsorbbetter = 'rgb(85, 85, 85)';
var cabsorbperfect = 'rgb(0, 0, 0)';
var ctransparent = 'rgb(209, 211, 212)';
var cmirrorbacking = 'rgb(155, 155, 155)';
var cmirrorfront = 'rgb(219, 37, 38)';
var copitcallines ='rgb(131, 174, 195)';
var CeyeGrey = 'rgb(96, 96, 96)';
var cWater = 'rgb(17, 119, 159)';

// circuits
var ccircuitRed = 'rgb(233, 35, 39)';
var ccircuitBlack = 'rgb(35, 31, 32)';
var ccircuitloopGrey = 'rgb(216, 216, 216)';
var ccircuitloopGrey3D = 'rgba(216, 216, 216,0.9)';
var cresistance ='rgb(90, 92, 93)';
var ccurrent ='rgb(233, 32, 65)';
var cpotentialdifference ='rgb(0, 146, 71)';

// forces and fields
var cgravity ='rgba(42, 157, 98,0.6)';
var ccompression ='rgba(167, 179, 38,0.6)';
var cbuoyancy ='rgba(43, 65, 159,0.6)';
var ctension = 'rgba(181, 166, 46,0.6)';
var celectric ='rgba(184, 68, 50,0.6)';
var cmagnetic ='rgba(48, 117, 158,0.6)';
var cgrip ='rgba(172, 48, 82,0.6)';
var cslip ='rgba(182, 116, 44,0.6)';
var cdrag ='rgba(68, 96, 138,0.6)';
var cgeneric='rgba(204, 204, 204,0.6)';
var cgravity3D = 'rgb(42, 157, 98)';
var ccompression3D = 'rgb(167, 179, 38)';
var cbuoyancy3D = 'rgb(43, 65, 159)';
var ctension3D =  'rgb(181, 166, 46)';
var celectric3D = 'rgb(184, 68, 50)';
var cmagnetic3D = 'rgb(48, 117, 158)';
var cgrip3D = 'rgb(172, 48, 82)';
var cslip3D = 'rgb(182, 116, 44)';
var cdrag3D = 'rgb(68, 96, 138)';
var cgeneric3D ='rgb(204, 204, 204)';
var cEfield='rgb(212, 78, 58)';
var cEequipot='rgba(212, 78, 58,0.7)';
var cBfield='rgb(65, 158, 214)';
var cgField='rgb(61, 214, 142)';
var cBfieldspace='rgba(65, 158, 214,0.4)';
var cgFieldspace='rgba(61, 214, 142,0.4)';
var cEfieldspace='rgba(212, 78, 58,0.4)';
var cforceBlue='rgba(86, 137, 164, 0.6)';
var cforceGreen='rgba(86, 164, 112, 0.6)';
var cforceRed='rgba(171, 90, 117, 0.6)';

// kinematics
var cpovAlice='rgb(51, 175, 169)';
var cpovBob='rgb(214, 100, 39)';
var cpovCharlie='rgb(131, 136, 194)';
var cpovSomebody='rgb(34, 64, 152)';

var cpovAliceCone='rgba(51, 175, 169,0.6)';
var cpovBobCone='rgba(214, 100, 39,0.6)';
var cpovCharlieCone='rgba(131, 136, 194,0.6)';
var cpovSomebodyCone='rgba(34, 64, 152,0.6)';
var cpovSomebodySphere='rgba(34, 64, 152,0.4)';


var cacceleration='rgb(126, 62, 149)';
var cmomentum='rgb(127, 127, 127)';
var cdurationclockBlue='rgb(34, 64, 152)';
var cdurationclockYellow='rgb(255, 240, 0)';

// mechanical things
var cpulleylightGrey='rgb(186, 186, 186)';
var cpulleydarkGrey='rgb(114, 114, 114)';
var cpulleyropeRed='rgb(239, 57, 57)';
var cpressure0 = 'rgb(220, 220, 220)';
var cpressure1 = 'rgb(160, 212, 250)';
var cpressure2 ='rgb(119, 161, 244)';
var cpressure3 = 'rgb(78, 109, 238)';
var cpressure4 = 'rgb(37, 58, 232)';
var cmass='rgb(127, 127, 127)';
var cpendulum ='rgb(0, 128, 255)';

// magnets
var cmagnetpermananet = 'rgb(42, 58, 140)';
var ccoilred = 'rgb(236, 28, 36)';
var cmagnetcompassouter = 'rgb(244, 144, 33)';
var cmagnetcompassRed = 'rgb(233, 35, 39)';
var cmagnetcompassBlue = 'rgb(42, 58, 140)';
var cmagnetgrey3D = 'rgba(150,150,150,0.8)';
var cmagnetgrey = 'rgb(150,150,150)';

// path links for catching physics

var cPlinkblue='rgba(62, 156, 191,0.80)';
var cPlinklightblue='rgba(167, 236, 242,0.80)';
var cPlinkorange='rgba(242, 196, 61,0.80)';
var cPlinkdeeporange='rgba(241, 124, 55,0.80)';
var cPlinkred='rgba(242, 109, 80,0.80)';


// --end of colours--

//useful values

var seriesoffset=107;
var loopoffset=215;
var pixelscaling = 10;
var pxscale=10;

// for pspace1D and pspace2D

var exploredvaluesX = new Array(1);
var exploredvaluesY = new Array(1);
var exploredvalues = new Array(1);
var sparkline = new Array(0);

//slider

function SliderDivider(xPos,yPos,sliderheight,sliderwidth,noOfSteps,handlepostions,showlabel,top,left)
{
	this.top=top==undefined?0:top;//Indicates pivot point y coordinate.0 indicates top.
	this.left=left==undefined?0:left;//Indicates pivot point x coordinate.0 indicates top.
	this.sliderheight=sliderheight==undefined?200:sliderheight;//Indicates height of the slider.
	this.sliderwidth=sliderwidth==undefined?30:sliderwidth;//indicates width of the slider.
	this.noOfSteps=noOfSteps==undefined?0:noOfSteps;//Indicates no of steps.0 default value.
	this.handlepostions=handlepostions==undefined?[0.5]:handlepostions;//Indicates the position of handles.ranges from 0 to 1.
	this.showlabel=showlabel==undefined?false:showlabel;//Whether to show label next to hanble or not.Label has the value of hanle.
	this.handles=[];
	this.handleIndex=-1;
	this.xPos=xPos==undefined?0:xPos;//x coordinate of the position of slider,default 0.
	this.yPos=yPos==undefined?0:yPos;//y coordinate of the position of slider,default 0.
	this.isMouseDown=false;
	this.init();
}
 /**
   *  @param xPos: x coordinate of the position of slider,default 0.
   *  @param yPos: y coordinate of the position of slider,default 0.
   *  @returns nothing.
   **/



SliderDivider.prototype.moveTo=function(xPos,yPos)
{
	this.xPos=xPos==undefined?0:xPos;
	this.yPos=yPos==undefined?0:yPos;
}
SliderDivider.prototype.init=function()
{
	for(var i=0;i<this.handlepostions.length;i++)
	{
		this.handles.push(new IanSlideHandle(this.handlepostions[i],this.top,this.left,this.sliderheight,this.sliderwidth,this.showlabel));
	}
}
 /**
   *  @param index: index of handle.
   *  @returns value the handle ranging form 0 to 1.Default,it will provide value of handle with index 0.
   **/
SliderDivider.prototype.getValue=function(index)
  {
		if((index==undefined||index==null))
		{
			return this.handles[0].getValue();
		}
		else
		{
			return this.handles[index].getValue();
		}
  }
  /**
   *  @param index: index of handle.
   *  @param value: value of handle.If only one parameter is provided then,It will set value for handle with index 0.
   **/
  SliderDivider.prototype.setValue=function(index,value)
  {
	if((value==undefined||value==null))
	{
		if(index>2)
		{
		this.handles[0].setValue(index/this.sliderHeight)
		}
		else
		{
		this.handles[0].setValue(index)
		}
	}
	else
	{
		if(value>2)
		{
		this.handles[index].setValue(value/this.sliderHeight)
		}
		else
		{
		this.handles[index].setValue(value)
		}
	}

  }
SliderDivider.prototype.draw=function()
{



	push();
    stroke('#B3B3B3');
    strokeWeight(1);
    fill('#E6E6E6');
    translate(this.xPos,this.yPos);
	rect(-this.left, -this.top, this.sliderwidth, this.sliderheight, 5);
	for(var i=0;i<this.handles.length;i++)
	{
		this.handles[i].draw();
	}
	if(this.isMouseDown)
    {
      	var difference=100000;
		if(this.noOfSteps>0)
		{
				var closerNumber=0;
				var difference=20000;
				var steps=this.noOfSteps+1;
				for(var i=0;i<=steps;i++)
				{
					var mouseValue=(-this.yPos+mouseY);
					var pointValue=i*(this.sliderheight/steps);
					if(Math.abs(mouseValue-pointValue)<difference)
					{
							if(pointValue>this.sliderheight)
							{
								closerNumber=this.sliderheight;
							}
							else
							{
								closerNumber=pointValue;
							}

							difference=Math.abs(mouseValue-pointValue);
					}
				}
				if(this.handleIndex<0)
				{
					difference=100000;
					for(var m=0;m<this.handles.length;m++)
					{
							if(Math.abs(this.handles[m].magnitude-(this.sliderheight-closerNumber-this.top))<difference)
							{
								difference=Math.abs(this.handles[m].magnitude-(this.sliderheight-closerNumber-this.top));
								this.handleIndex=m;
							}
					}
				}

				this.handles[this.handleIndex].setValue((this.sliderheight-closerNumber-this.top)/this.sliderheight);
		}
		else
		{
				if(this.handleIndex<0)
				{
					var difference2=100000;
					for(var m=0;m<this.handles.length;m++)
					{

						if(Math.abs(this.handles[m].magnitude-(this.sliderheight-(-this.yPos+mouseY)-this.top))<difference2)
						{

							difference2=Math.abs(this.handles[m].magnitude-(this.sliderheight-(-this.yPos+mouseY)-this.top));
							this.handleIndex=m;
						}
					}
				}
				this.handles[this.handleIndex].setValue((this.sliderheight-(-this.yPos+mouseY)-this.top)/this.sliderheight);
		}

    }
    else
    {
    	this.handleIndex=-1;
    }
    for(var  m=0;m<this.handles.length;m++)
	{
		this.handles[m].draw();
	}
    pop();


}
SliderDivider.prototype.mousePressed=function()
{

	if(mouseX>(this.xPos-this.left)&&mouseX<(this.xPos-this.left+this.sliderwidth)&&mouseY>(this.yPos-this.top)&&mouseY<(this.yPos-this.top+this.sliderheight))
	{
		this.isMouseDown=true;
	}
}
SliderDivider.prototype.mouseReleased=function()
{
	this.isMouseDown=false;
}


function IanSlideHandle(value,parentTop,parentLeft,parentheight,parentWidth,showlabel)
{
	this.value=value;
	this.parentheight=parentheight;
	this.parentWidth=parentWidth;
	this.parentTop=parentTop;
	this.parentLeft=parentLeft;
	this.magnitude=this.parentheight*this.value;
	this.offsetY=this.parentheight-this.magnitude;
	this.showlabel=showlabel;
}
IanSlideHandle.prototype.draw=function()
{
	this.magnitude=this.parentheight*this.value;
	this.offsetY=this.parentheight-this.magnitude;
	push();
	translate(-this.parentLeft,-this.parentTop);
    stroke('#cccccc');
    strokeWeight(1);
    fill('#ffffff');
    rect(-3,this.offsetY-(this.parentWidth+6)/2,this.parentWidth+6,this.parentWidth+6,5);
    stroke('#cccccc');
    strokeWeight(1);
    line(0,this.offsetY,this.parentWidth,this.offsetY);
    if(this.showlabel==true)
    {

      fill("#444444");
      textAlign(LEFT, CENTER)
      text(parseFloat(Math.round(this.value * 100) / 100).toFixed(2), this.parentWidth+10, this.offsetY);
    }
	pop();
}
IanSlideHandle.prototype.setValue=function(value)
{
	if(value>=0&&value<=1)
    {
      this.value=value;
    }
    else if(value<0)
    {
      this.value=0;
    }
    else if(value>1)
    {
      this.value=1;
    }
}
IanSlideHandle.prototype.getValue=function()
{
	return this.value;
}
window.SliderDivider=SliderDivider;
window.IanSlideHandle=IanSlideHandle;

// xregexp

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.XRegExp = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * XRegExp.build 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2016 MIT License
 * Inspired by Lea Verou's RegExp.create <lea.verou.me>
 */

module.exports = function(XRegExp) {
    'use strict';

    var REGEX_DATA = 'xregexp',
        subParts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
        parts = XRegExp.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, subParts], 'g');

/**
 * Strips a leading `^` and trailing unescaped `$`, if both are present.
 *
 * @private
 * @param {String} pattern Pattern to process.
 * @returns {String} Pattern with edge anchors removed.
 */
    function deanchor(pattern) {
        // Allow any number of empty noncapturing groups before/after anchors, because regexes
        // built/generated by XRegExp sometimes include them
        var leadingAnchor = /^(?:\(\?:\))*\^/,
            trailingAnchor = /\$(?:\(\?:\))*$/;

        if (
            leadingAnchor.test(pattern) &&
            trailingAnchor.test(pattern) &&
            // Ensure that the trailing `$` isn't escaped
            trailingAnchor.test(pattern.replace(/\\[\s\S]/g, ''))
        ) {
            return pattern.replace(leadingAnchor, '').replace(trailingAnchor, '');
        }

        return pattern;
    }

/**
 * Converts the provided value to an XRegExp. Native RegExp flags are not preserved.
 *
 * @private
 * @param {String|RegExp} value Value to convert.
 * @returns {RegExp} XRegExp object with XRegExp syntax applied.
 */
    function asXRegExp(value) {
        return XRegExp.isRegExp(value) ?
            (value[REGEX_DATA] && value[REGEX_DATA].captureNames ?
                // Don't recompile, to preserve capture names
                value :
                // Recompile as XRegExp
                XRegExp(value.source)
            ) :
            // Compile string as XRegExp
            XRegExp(value);
    }

/**
 * Builds regexes using named subpatterns, for readability and pattern reuse. Backreferences in the
 * outer pattern and provided subpatterns are automatically renumbered to work correctly. Native
 * flags used by provided subpatterns are ignored in favor of the `flags` argument.
 *
 * @memberOf XRegExp
 * @param {String} pattern XRegExp pattern using `{{name}}` for embedded subpatterns. Allows
 *   `({{name}})` as shorthand for `(?<name>{{name}})`. Patterns cannot be embedded within
 *   character classes.
 * @param {Object} subs Lookup object for named subpatterns. Values can be strings or regexes. A
 *   leading `^` and trailing unescaped `$` are stripped from subpatterns, if both are present.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Regex with interpolated subpatterns.
 * @example
 *
 * var time = XRegExp.build('(?x)^ {{hours}} ({{minutes}}) $', {
 *   hours: XRegExp.build('{{h12}} : | {{h24}}', {
 *     h12: /1[0-2]|0?[1-9]/,
 *     h24: /2[0-3]|[01][0-9]/
 *   }, 'x'),
 *   minutes: /^[0-5][0-9]$/
 * });
 * time.test('10:59'); // -> true
 * XRegExp.exec('10:59', time).minutes; // -> '59'
 */
    XRegExp.build = function(pattern, subs, flags) {
        var inlineFlags = /^\(\?([\w$]+)\)/.exec(pattern),
            data = {},
            numCaps = 0, // 'Caps' is short for captures
            numPriorCaps,
            numOuterCaps = 0,
            outerCapsMap = [0],
            outerCapNames,
            sub,
            p;

        // Add flags within a leading mode modifier to the overall pattern's flags
        if (inlineFlags) {
            flags = flags || '';
            inlineFlags[1].replace(/./g, function(flag) {
                // Don't add duplicates
                flags += (flags.indexOf(flag) > -1 ? '' : flag);
            });
        }

        for (p in subs) {
            if (subs.hasOwnProperty(p)) {
                // Passing to XRegExp enables extended syntax and ensures independent validity,
                // lest an unescaped `(`, `)`, `[`, or trailing `\` breaks the `(?:)` wrapper. For
                // subpatterns provided as native regexes, it dies on octals and adds the property
                // used to hold extended regex instance data, for simplicity
                sub = asXRegExp(subs[p]);
                data[p] = {
                    // Deanchoring allows embedding independently useful anchored regexes. If you
                    // really need to keep your anchors, double them (i.e., `^^...$$`)
                    pattern: deanchor(sub.source),
                    names: sub[REGEX_DATA].captureNames || []
                };
            }
        }

        // Passing to XRegExp dies on octals and ensures the outer pattern is independently valid;
        // helps keep this simple. Named captures will be put back
        pattern = asXRegExp(pattern);
        outerCapNames = pattern[REGEX_DATA].captureNames || [];
        pattern = pattern.source.replace(parts, function($0, $1, $2, $3, $4) {
            var subName = $1 || $2,
                capName,
                intro,
                localCapIndex;
            // Named subpattern
            if (subName) {
                if (!data.hasOwnProperty(subName)) {
                    throw new ReferenceError('Undefined property ' + $0);
                }
                // Named subpattern was wrapped in a capturing group
                if ($1) {
                    capName = outerCapNames[numOuterCaps];
                    outerCapsMap[++numOuterCaps] = ++numCaps;
                    // If it's a named group, preserve the name. Otherwise, use the subpattern name
                    // as the capture name
                    intro = '(?<' + (capName || subName) + '>';
                } else {
                    intro = '(?:';
                }
                numPriorCaps = numCaps;
                return intro + data[subName].pattern.replace(subParts, function(match, paren, backref) {
                    // Capturing group
                    if (paren) {
                        capName = data[subName].names[numCaps - numPriorCaps];
                        ++numCaps;
                        // If the current capture has a name, preserve the name
                        if (capName) {
                            return '(?<' + capName + '>';
                        }
                    // Backreference
                    } else if (backref) {
                        localCapIndex = +backref - 1;
                        // Rewrite the backreference
                        return data[subName].names[localCapIndex] ?
                            // Need to preserve the backreference name in case using flag `n`
                            '\\k<' + data[subName].names[localCapIndex] + '>' :
                            '\\' + (+backref + numPriorCaps);
                    }
                    return match;
                }) + ')';
            }
            // Capturing group
            if ($3) {
                capName = outerCapNames[numOuterCaps];
                outerCapsMap[++numOuterCaps] = ++numCaps;
                // If the current capture has a name, preserve the name
                if (capName) {
                    return '(?<' + capName + '>';
                }
            // Backreference
            } else if ($4) {
                localCapIndex = +$4 - 1;
                // Rewrite the backreference
                return outerCapNames[localCapIndex] ?
                    // Need to preserve the backreference name in case using flag `n`
                    '\\k<' + outerCapNames[localCapIndex] + '>' :
                    '\\' + outerCapsMap[+$4];
            }
            return $0;
        });

        return XRegExp(pattern, flags);
    };

};

},{}],2:[function(require,module,exports){
/*!
 * XRegExp.matchRecursive 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2009-2016 MIT License
 */

module.exports = function(XRegExp) {
    'use strict';

/**
 * Returns a match detail object composed of the provided values.
 *
 * @private
 */
    function row(name, value, start, end) {
        return {
            name: name,
            value: value,
            start: start,
            end: end
        };
    }

/**
 * Returns an array of match strings between outermost left and right delimiters, or an array of
 * objects with detailed match parts and position data. An error is thrown if delimiters are
 * unbalanced within the data.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {String} left Left delimiter as an XRegExp pattern.
 * @param {String} right Right delimiter as an XRegExp pattern.
 * @param {String} [flags] Any native or XRegExp flags, used for the left and right delimiters.
 * @param {Object} [options] Lets you specify `valueNames` and `escapeChar` options.
 * @returns {Array} Array of matches, or an empty array.
 * @example
 *
 * // Basic usage
 * var str = '(t((e))s)t()(ing)';
 * XRegExp.matchRecursive(str, '\\(', '\\)', 'g');
 * // -> ['t((e))s', '', 'ing']
 *
 * // Extended information mode with valueNames
 * str = 'Here is <div> <div>an</div></div> example';
 * XRegExp.matchRecursive(str, '<div\\s*>', '</div>', 'gi', {
 *   valueNames: ['between', 'left', 'match', 'right']
 * });
 * // -> [
 * // {name: 'between', value: 'Here is ',       start: 0,  end: 8},
 * // {name: 'left',    value: '<div>',          start: 8,  end: 13},
 * // {name: 'match',   value: ' <div>an</div>', start: 13, end: 27},
 * // {name: 'right',   value: '</div>',         start: 27, end: 33},
 * // {name: 'between', value: ' example',       start: 33, end: 41}
 * // ]
 *
 * // Omitting unneeded parts with null valueNames, and using escapeChar
 * str = '...{1}.\\{{function(x,y){return {y:x}}}';
 * XRegExp.matchRecursive(str, '{', '}', 'g', {
 *   valueNames: ['literal', null, 'value', null],
 *   escapeChar: '\\'
 * });
 * // -> [
 * // {name: 'literal', value: '...',  start: 0, end: 3},
 * // {name: 'value',   value: '1',    start: 4, end: 5},
 * // {name: 'literal', value: '.\\{', start: 6, end: 9},
 * // {name: 'value',   value: 'function(x,y){return {y:x}}', start: 10, end: 37}
 * // ]
 *
 * // Sticky mode via flag y
 * str = '<1><<<2>>><3>4<5>';
 * XRegExp.matchRecursive(str, '<', '>', 'gy');
 * // -> ['1', '<<2>>', '3']
 */
    XRegExp.matchRecursive = function(str, left, right, flags, options) {
        flags = flags || '';
        options = options || {};
        var global = flags.indexOf('g') > -1,
            sticky = flags.indexOf('y') > -1,
            // Flag `y` is controlled internally
            basicFlags = flags.replace(/y/g, ''),
            escapeChar = options.escapeChar,
            vN = options.valueNames,
            output = [],
            openTokens = 0,
            delimStart = 0,
            delimEnd = 0,
            lastOuterEnd = 0,
            outerStart,
            innerStart,
            leftMatch,
            rightMatch,
            esc;
        left = XRegExp(left, basicFlags);
        right = XRegExp(right, basicFlags);

        if (escapeChar) {
            if (escapeChar.length > 1) {
                throw new Error('Cannot use more than one escape character');
            }
            escapeChar = XRegExp.escape(escapeChar);
            // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`
            esc = new RegExp(
                '(?:' + escapeChar + '[\\S\\s]|(?:(?!' +
                    XRegExp.union([left, right]).source +
                    ')[^' + escapeChar + '])+)+',
                // Flags `gy` not needed here
                flags.replace(/[^imu]+/g, '')
            );
        }

        while (true) {
            // If using an escape character, advance to the delimiter's next starting position,
            // skipping any escaped characters in between
            if (escapeChar) {
                delimEnd += (XRegExp.exec(str, esc, delimEnd, 'sticky') || [''])[0].length;
            }
            leftMatch = XRegExp.exec(str, left, delimEnd);
            rightMatch = XRegExp.exec(str, right, delimEnd);
            // Keep the leftmost match only
            if (leftMatch && rightMatch) {
                if (leftMatch.index <= rightMatch.index) {
                    rightMatch = null;
                } else {
                    leftMatch = null;
                }
            }
            // Paths (LM: leftMatch, RM: rightMatch, OT: openTokens):
            // LM | RM | OT | Result
            // 1  | 0  | 1  | loop
            // 1  | 0  | 0  | loop
            // 0  | 1  | 1  | loop
            // 0  | 1  | 0  | throw
            // 0  | 0  | 1  | throw
            // 0  | 0  | 0  | break
            // The paths above don't include the sticky mode special case. The loop ends after the
            // first completed match if not `global`.
            if (leftMatch || rightMatch) {
                delimStart = (leftMatch || rightMatch).index;
                delimEnd = delimStart + (leftMatch || rightMatch)[0].length;
            } else if (!openTokens) {
                break;
            }
            if (sticky && !openTokens && delimStart > lastOuterEnd) {
                break;
            }
            if (leftMatch) {
                if (!openTokens) {
                    outerStart = delimStart;
                    innerStart = delimEnd;
                }
                ++openTokens;
            } else if (rightMatch && openTokens) {
                if (!--openTokens) {
                    if (vN) {
                        if (vN[0] && outerStart > lastOuterEnd) {
                            output.push(row(vN[0], str.slice(lastOuterEnd, outerStart), lastOuterEnd, outerStart));
                        }
                        if (vN[1]) {
                            output.push(row(vN[1], str.slice(outerStart, innerStart), outerStart, innerStart));
                        }
                        if (vN[2]) {
                            output.push(row(vN[2], str.slice(innerStart, delimStart), innerStart, delimStart));
                        }
                        if (vN[3]) {
                            output.push(row(vN[3], str.slice(delimStart, delimEnd), delimStart, delimEnd));
                        }
                    } else {
                        output.push(str.slice(innerStart, delimStart));
                    }
                    lastOuterEnd = delimEnd;
                    if (!global) {
                        break;
                    }
                }
            } else {
                throw new Error('Unbalanced delimiter found in string');
            }
            // If the delimiter matched an empty string, avoid an infinite loop
            if (delimStart === delimEnd) {
                ++delimEnd;
            }
        }

        if (global && !sticky && vN && vN[0] && str.length > lastOuterEnd) {
            output.push(row(vN[0], str.slice(lastOuterEnd), lastOuterEnd, str.length));
        }

        return output;
    };

};

},{}],3:[function(require,module,exports){
/*!
 * XRegExp Unicode Base 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2008-2016 MIT License
 */

/**
 * Adds base support for Unicode matching:
 * - Adds syntax `\p{..}` for matching Unicode tokens. Tokens can be inverted using `\P{..}` or
 *   `\p{^..}`. Token names ignore case, spaces, hyphens, and underscores. You can omit the braces
 *   for token names that are a single letter (e.g. `\pL` or `PL`).
 * - Adds flag A (astral), which enables 21-bit Unicode support.
 * - Adds the `XRegExp.addUnicodeData` method used by other addons to provide character data.
 *
 * Unicode Base relies on externally provided Unicode character data. Official addons are available
 * to provide data for Unicode categories, scripts, blocks, and properties.
 *
 * @requires XRegExp
 */
module.exports = function(XRegExp) {
    'use strict';

// Storage for Unicode data
    var unicode = {};

/* ==============================
 * Private functions
 * ============================== */

// Generates a token lookup name: lowercase, with hyphens, spaces, and underscores removed
    function normalize(name) {
        return name.replace(/[- _]+/g, '').toLowerCase();
    }

// Adds leading zeros if shorter than four characters
    function pad4(str) {
        while (str.length < 4) {
            str = '0' + str;
        }
        return str;
    }

// Converts a hexadecimal number to decimal
    function dec(hex) {
        return parseInt(hex, 16);
    }

// Converts a decimal number to hexadecimal
    function hex(dec) {
        return parseInt(dec, 10).toString(16);
    }

// Gets the decimal code of a literal code unit, \xHH, \uHHHH, or a backslash-escaped literal
    function charCode(chr) {
        var esc = /^\\[xu](.+)/.exec(chr);
        return esc ?
            dec(esc[1]) :
            chr.charCodeAt(chr.charAt(0) === '\\' ? 1 : 0);
    }

// Inverts a list of ordered BMP characters and ranges
    function invertBmp(range) {
        var output = '',
            lastEnd = -1,
            start;
        XRegExp.forEach(range, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function(m) {
            start = charCode(m[1]);
            if (start > (lastEnd + 1)) {
                output += '\\u' + pad4(hex(lastEnd + 1));
                if (start > (lastEnd + 2)) {
                    output += '-\\u' + pad4(hex(start - 1));
                }
            }
            lastEnd = charCode(m[2] || m[1]);
        });
        if (lastEnd < 0xFFFF) {
            output += '\\u' + pad4(hex(lastEnd + 1));
            if (lastEnd < 0xFFFE) {
                output += '-\\uFFFF';
            }
        }
        return output;
    }

// Generates an inverted BMP range on first use
    function cacheInvertedBmp(slug) {
        var prop = 'b!';
        return unicode[slug][prop] || (
            unicode[slug][prop] = invertBmp(unicode[slug].bmp)
        );
    }

// Combines and optionally negates BMP and astral data
    function buildAstral(slug, isNegated) {
        var item = unicode[slug],
            combined = '';
        if (item.bmp && !item.isBmpLast) {
            combined = '[' + item.bmp + ']' + (item.astral ? '|' : '');
        }
        if (item.astral) {
            combined += item.astral;
        }
        if (item.isBmpLast && item.bmp) {
            combined += (item.astral ? '|' : '') + '[' + item.bmp + ']';
        }
        // Astral Unicode tokens always match a code point, never a code unit
        return isNegated ?
            '(?:(?!' + combined + ')(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))' :
            '(?:' + combined + ')';
    }

// Builds a complete astral pattern on first use
    function cacheAstral(slug, isNegated) {
        var prop = isNegated ? 'a!' : 'a=';
        return unicode[slug][prop] || (
            unicode[slug][prop] = buildAstral(slug, isNegated)
        );
    }

/* ==============================
 * Core functionality
 * ============================== */

/*
 * Add Unicode token syntax: \p{..}, \P{..}, \p{^..}. Also add astral mode (flag A).
 */
    XRegExp.addToken(
        // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(match, scope, flags) {
            var ERR_DOUBLE_NEG = 'Invalid double negation ',
                ERR_UNKNOWN_NAME = 'Unknown Unicode token ',
                ERR_UNKNOWN_REF = 'Unicode token missing data ',
                ERR_ASTRAL_ONLY = 'Astral mode required for Unicode token ',
                ERR_ASTRAL_IN_CLASS = 'Astral mode does not support Unicode tokens within character classes',
                // Negated via \P{..} or \p{^..}
                isNegated = match[1] === 'P' || !!match[2],
                // Switch from BMP (0-FFFF) to astral (0-10FFFF) mode via flag A
                isAstralMode = flags.indexOf('A') > -1,
                // Token lookup name. Check `[4]` first to avoid passing `undefined` via `\p{}`
                slug = normalize(match[4] || match[3]),
                // Token data object
                item = unicode[slug];

            if (match[1] === 'P' && match[2]) {
                throw new SyntaxError(ERR_DOUBLE_NEG + match[0]);
            }
            if (!unicode.hasOwnProperty(slug)) {
                throw new SyntaxError(ERR_UNKNOWN_NAME + match[0]);
            }

            // Switch to the negated form of the referenced Unicode token
            if (item.inverseOf) {
                slug = normalize(item.inverseOf);
                if (!unicode.hasOwnProperty(slug)) {
                    throw new ReferenceError(ERR_UNKNOWN_REF + match[0] + ' -> ' + item.inverseOf);
                }
                item = unicode[slug];
                isNegated = !isNegated;
            }

            if (!(item.bmp || isAstralMode)) {
                throw new SyntaxError(ERR_ASTRAL_ONLY + match[0]);
            }
            if (isAstralMode) {
                if (scope === 'class') {
                    throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
                }

                return cacheAstral(slug, isNegated);
            }

            return scope === 'class' ?
                (isNegated ? cacheInvertedBmp(slug) : item.bmp) :
                (isNegated ? '[^' : '[') + item.bmp + ']';
        },
        {
            scope: 'all',
            optionalFlags: 'A',
            leadChar: '\\'
        }
    );

/**
 * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
 *
 * @memberOf XRegExp
 * @param {Array} data Objects with named character ranges. Each object may have properties `name`,
 *   `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are optional, although
 *   one of `bmp` or `astral` is required (unless `inverseOf` is set). If `astral` is absent, the
 *   `bmp` data is used for BMP and astral modes. If `bmp` is absent, the name errors in BMP mode
 *   but works in astral mode. If both `bmp` and `astral` are provided, the `bmp` data only is used
 *   in BMP mode, and the combination of `bmp` and `astral` data is used in astral mode.
 *   `isBmpLast` is needed when a token matches orphan high surrogates *and* uses surrogate pairs
 *   to match astral code points. The `bmp` and `astral` data should be a combination of literal
 *   characters and `\xHH` or `\uHHHH` escape sequences, with hyphens to create ranges. Any regex
 *   metacharacters in the data should be escaped, apart from range-creating hyphens. The `astral`
 *   data can additionally use character classes and alternation, and should use surrogate pairs to
 *   represent astral code points. `inverseOf` can be used to avoid duplicating character data if a
 *   Unicode token is defined as the exact inverse of another token.
 * @example
 *
 * // Basic use
 * XRegExp.addUnicodeData([{
 *   name: 'XDigit',
 *   alias: 'Hexadecimal',
 *   bmp: '0-9A-Fa-f'
 * }]);
 * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
 */
    XRegExp.addUnicodeData = function(data) {
        var ERR_NO_NAME = 'Unicode token requires name',
            ERR_NO_DATA = 'Unicode token has no character data ',
            item,
            i;

        for (i = 0; i < data.length; ++i) {
            item = data[i];
            if (!item.name) {
                throw new Error(ERR_NO_NAME);
            }
            if (!(item.inverseOf || item.bmp || item.astral)) {
                throw new Error(ERR_NO_DATA + item.name);
            }
            unicode[normalize(item.name)] = item;
            if (item.alias) {
                unicode[normalize(item.alias)] = item;
            }
        }

        // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
        // flags might now produce different results
        XRegExp.cache.flush('patterns');
    };

};

},{}],4:[function(require,module,exports){
/*!
 * XRegExp Unicode Blocks 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2016 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

/**
 * Adds support for all Unicode blocks. Block names use the prefix 'In'. E.g., `\p{InBasicLatin}`.
 * Token names are case insensitive, and any spaces, hyphens, and underscores are ignored.
 *
 * Uses Unicode 8.0.0.
 *
 * @requires XRegExp, Unicode Base
 */
module.exports = function(XRegExp) {
    'use strict';

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Blocks');
    }

    XRegExp.addUnicodeData([
        {
            name: 'InAegean_Numbers',
            astral: '\uD800[\uDD00-\uDD3F]'
        },
        {
            name: 'InAhom',
            astral: '\uD805[\uDF00-\uDF3F]'
        },
        {
            name: 'InAlchemical_Symbols',
            astral: '\uD83D[\uDF00-\uDF7F]'
        },
        {
            name: 'InAlphabetic_Presentation_Forms',
            bmp: '\uFB00-\uFB4F'
        },
        {
            name: 'InAnatolian_Hieroglyphs',
            astral: '\uD811[\uDC00-\uDE7F]'
        },
        {
            name: 'InAncient_Greek_Musical_Notation',
            astral: '\uD834[\uDE00-\uDE4F]'
        },
        {
            name: 'InAncient_Greek_Numbers',
            astral: '\uD800[\uDD40-\uDD8F]'
        },
        {
            name: 'InAncient_Symbols',
            astral: '\uD800[\uDD90-\uDDCF]'
        },
        {
            name: 'InArabic',
            bmp: '\u0600-\u06FF'
        },
        {
            name: 'InArabic_Extended_A',
            bmp: '\u08A0-\u08FF'
        },
        {
            name: 'InArabic_Mathematical_Alphabetic_Symbols',
            astral: '\uD83B[\uDE00-\uDEFF]'
        },
        {
            name: 'InArabic_Presentation_Forms_A',
            bmp: '\uFB50-\uFDFF'
        },
        {
            name: 'InArabic_Presentation_Forms_B',
            bmp: '\uFE70-\uFEFF'
        },
        {
            name: 'InArabic_Supplement',
            bmp: '\u0750-\u077F'
        },
        {
            name: 'InArmenian',
            bmp: '\u0530-\u058F'
        },
        {
            name: 'InArrows',
            bmp: '\u2190-\u21FF'
        },
        {
            name: 'InAvestan',
            astral: '\uD802[\uDF00-\uDF3F]'
        },
        {
            name: 'InBalinese',
            bmp: '\u1B00-\u1B7F'
        },
        {
            name: 'InBamum',
            bmp: '\uA6A0-\uA6FF'
        },
        {
            name: 'InBamum_Supplement',
            astral: '\uD81A[\uDC00-\uDE3F]'
        },
        {
            name: 'InBasic_Latin',
            bmp: '\0-\x7F'
        },
        {
            name: 'InBassa_Vah',
            astral: '\uD81A[\uDED0-\uDEFF]'
        },
        {
            name: 'InBatak',
            bmp: '\u1BC0-\u1BFF'
        },
        {
            name: 'InBengali',
            bmp: '\u0980-\u09FF'
        },
        {
            name: 'InBlock_Elements',
            bmp: '\u2580-\u259F'
        },
        {
            name: 'InBopomofo',
            bmp: '\u3100-\u312F'
        },
        {
            name: 'InBopomofo_Extended',
            bmp: '\u31A0-\u31BF'
        },
        {
            name: 'InBox_Drawing',
            bmp: '\u2500-\u257F'
        },
        {
            name: 'InBrahmi',
            astral: '\uD804[\uDC00-\uDC7F]'
        },
        {
            name: 'InBraille_Patterns',
            bmp: '\u2800-\u28FF'
        },
        {
            name: 'InBuginese',
            bmp: '\u1A00-\u1A1F'
        },
        {
            name: 'InBuhid',
            bmp: '\u1740-\u175F'
        },
        {
            name: 'InByzantine_Musical_Symbols',
            astral: '\uD834[\uDC00-\uDCFF]'
        },
        {
            name: 'InCJK_Compatibility',
            bmp: '\u3300-\u33FF'
        },
        {
            name: 'InCJK_Compatibility_Forms',
            bmp: '\uFE30-\uFE4F'
        },
        {
            name: 'InCJK_Compatibility_Ideographs',
            bmp: '\uF900-\uFAFF'
        },
        {
            name: 'InCJK_Compatibility_Ideographs_Supplement',
            astral: '\uD87E[\uDC00-\uDE1F]'
        },
        {
            name: 'InCJK_Radicals_Supplement',
            bmp: '\u2E80-\u2EFF'
        },
        {
            name: 'InCJK_Strokes',
            bmp: '\u31C0-\u31EF'
        },
        {
            name: 'InCJK_Symbols_and_Punctuation',
            bmp: '\u3000-\u303F'
        },
        {
            name: 'InCJK_Unified_Ideographs',
            bmp: '\u4E00-\u9FFF'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_A',
            bmp: '\u3400-\u4DBF'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_B',
            astral: '[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_C',
            astral: '\uD86D[\uDC00-\uDF3F]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD869[\uDF00-\uDFFF]'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_D',
            astral: '\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_E',
            astral: '[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]|\uD86E[\uDC20-\uDFFF]'
        },
        {
            name: 'InCarian',
            astral: '\uD800[\uDEA0-\uDEDF]'
        },
        {
            name: 'InCaucasian_Albanian',
            astral: '\uD801[\uDD30-\uDD6F]'
        },
        {
            name: 'InChakma',
            astral: '\uD804[\uDD00-\uDD4F]'
        },
        {
            name: 'InCham',
            bmp: '\uAA00-\uAA5F'
        },
        {
            name: 'InCherokee',
            bmp: '\u13A0-\u13FF'
        },
        {
            name: 'InCherokee_Supplement',
            bmp: '\uAB70-\uABBF'
        },
        {
            name: 'InCombining_Diacritical_Marks',
            bmp: '\u0300-\u036F'
        },
        {
            name: 'InCombining_Diacritical_Marks_Extended',
            bmp: '\u1AB0-\u1AFF'
        },
        {
            name: 'InCombining_Diacritical_Marks_Supplement',
            bmp: '\u1DC0-\u1DFF'
        },
        {
            name: 'InCombining_Diacritical_Marks_for_Symbols',
            bmp: '\u20D0-\u20FF'
        },
        {
            name: 'InCombining_Half_Marks',
            bmp: '\uFE20-\uFE2F'
        },
        {
            name: 'InCommon_Indic_Number_Forms',
            bmp: '\uA830-\uA83F'
        },
        {
            name: 'InControl_Pictures',
            bmp: '\u2400-\u243F'
        },
        {
            name: 'InCoptic',
            bmp: '\u2C80-\u2CFF'
        },
        {
            name: 'InCoptic_Epact_Numbers',
            astral: '\uD800[\uDEE0-\uDEFF]'
        },
        {
            name: 'InCounting_Rod_Numerals',
            astral: '\uD834[\uDF60-\uDF7F]'
        },
        {
            name: 'InCuneiform',
            astral: '\uD808[\uDC00-\uDFFF]'
        },
        {
            name: 'InCuneiform_Numbers_and_Punctuation',
            astral: '\uD809[\uDC00-\uDC7F]'
        },
        {
            name: 'InCurrency_Symbols',
            bmp: '\u20A0-\u20CF'
        },
        {
            name: 'InCypriot_Syllabary',
            astral: '\uD802[\uDC00-\uDC3F]'
        },
        {
            name: 'InCyrillic',
            bmp: '\u0400-\u04FF'
        },
        {
            name: 'InCyrillic_Extended_A',
            bmp: '\u2DE0-\u2DFF'
        },
        {
            name: 'InCyrillic_Extended_B',
            bmp: '\uA640-\uA69F'
        },
        {
            name: 'InCyrillic_Supplement',
            bmp: '\u0500-\u052F'
        },
        {
            name: 'InDeseret',
            astral: '\uD801[\uDC00-\uDC4F]'
        },
        {
            name: 'InDevanagari',
            bmp: '\u0900-\u097F'
        },
        {
            name: 'InDevanagari_Extended',
            bmp: '\uA8E0-\uA8FF'
        },
        {
            name: 'InDingbats',
            bmp: '\u2700-\u27BF'
        },
        {
            name: 'InDomino_Tiles',
            astral: '\uD83C[\uDC30-\uDC9F]'
        },
        {
            name: 'InDuployan',
            astral: '\uD82F[\uDC00-\uDC9F]'
        },
        {
            name: 'InEarly_Dynastic_Cuneiform',
            astral: '\uD809[\uDC80-\uDD4F]'
        },
        {
            name: 'InEgyptian_Hieroglyphs',
            astral: '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F]'
        },
        {
            name: 'InElbasan',
            astral: '\uD801[\uDD00-\uDD2F]'
        },
        {
            name: 'InEmoticons',
            astral: '\uD83D[\uDE00-\uDE4F]'
        },
        {
            name: 'InEnclosed_Alphanumeric_Supplement',
            astral: '\uD83C[\uDD00-\uDDFF]'
        },
        {
            name: 'InEnclosed_Alphanumerics',
            bmp: '\u2460-\u24FF'
        },
        {
            name: 'InEnclosed_CJK_Letters_and_Months',
            bmp: '\u3200-\u32FF'
        },
        {
            name: 'InEnclosed_Ideographic_Supplement',
            astral: '\uD83C[\uDE00-\uDEFF]'
        },
        {
            name: 'InEthiopic',
            bmp: '\u1200-\u137F'
        },
        {
            name: 'InEthiopic_Extended',
            bmp: '\u2D80-\u2DDF'
        },
        {
            name: 'InEthiopic_Extended_A',
            bmp: '\uAB00-\uAB2F'
        },
        {
            name: 'InEthiopic_Supplement',
            bmp: '\u1380-\u139F'
        },
        {
            name: 'InGeneral_Punctuation',
            bmp: '\u2000-\u206F'
        },
        {
            name: 'InGeometric_Shapes',
            bmp: '\u25A0-\u25FF'
        },
        {
            name: 'InGeometric_Shapes_Extended',
            astral: '\uD83D[\uDF80-\uDFFF]'
        },
        {
            name: 'InGeorgian',
            bmp: '\u10A0-\u10FF'
        },
        {
            name: 'InGeorgian_Supplement',
            bmp: '\u2D00-\u2D2F'
        },
        {
            name: 'InGlagolitic',
            bmp: '\u2C00-\u2C5F'
        },
        {
            name: 'InGothic',
            astral: '\uD800[\uDF30-\uDF4F]'
        },
        {
            name: 'InGrantha',
            astral: '\uD804[\uDF00-\uDF7F]'
        },
        {
            name: 'InGreek_Extended',
            bmp: '\u1F00-\u1FFF'
        },
        {
            name: 'InGreek_and_Coptic',
            bmp: '\u0370-\u03FF'
        },
        {
            name: 'InGujarati',
            bmp: '\u0A80-\u0AFF'
        },
        {
            name: 'InGurmukhi',
            bmp: '\u0A00-\u0A7F'
        },
        {
            name: 'InHalfwidth_and_Fullwidth_Forms',
            bmp: '\uFF00-\uFFEF'
        },
        {
            name: 'InHangul_Compatibility_Jamo',
            bmp: '\u3130-\u318F'
        },
        {
            name: 'InHangul_Jamo',
            bmp: '\u1100-\u11FF'
        },
        {
            name: 'InHangul_Jamo_Extended_A',
            bmp: '\uA960-\uA97F'
        },
        {
            name: 'InHangul_Jamo_Extended_B',
            bmp: '\uD7B0-\uD7FF'
        },
        {
            name: 'InHangul_Syllables',
            bmp: '\uAC00-\uD7AF'
        },
        {
            name: 'InHanunoo',
            bmp: '\u1720-\u173F'
        },
        {
            name: 'InHatran',
            astral: '\uD802[\uDCE0-\uDCFF]'
        },
        {
            name: 'InHebrew',
            bmp: '\u0590-\u05FF'
        },
        {
            name: 'InHigh_Private_Use_Surrogates',
            bmp: '\uDB80-\uDBFF'
        },
        {
            name: 'InHigh_Surrogates',
            bmp: '\uD800-\uDB7F'
        },
        {
            name: 'InHiragana',
            bmp: '\u3040-\u309F'
        },
        {
            name: 'InIPA_Extensions',
            bmp: '\u0250-\u02AF'
        },
        {
            name: 'InIdeographic_Description_Characters',
            bmp: '\u2FF0-\u2FFF'
        },
        {
            name: 'InImperial_Aramaic',
            astral: '\uD802[\uDC40-\uDC5F]'
        },
        {
            name: 'InInscriptional_Pahlavi',
            astral: '\uD802[\uDF60-\uDF7F]'
        },
        {
            name: 'InInscriptional_Parthian',
            astral: '\uD802[\uDF40-\uDF5F]'
        },
        {
            name: 'InJavanese',
            bmp: '\uA980-\uA9DF'
        },
        {
            name: 'InKaithi',
            astral: '\uD804[\uDC80-\uDCCF]'
        },
        {
            name: 'InKana_Supplement',
            astral: '\uD82C[\uDC00-\uDCFF]'
        },
        {
            name: 'InKanbun',
            bmp: '\u3190-\u319F'
        },
        {
            name: 'InKangxi_Radicals',
            bmp: '\u2F00-\u2FDF'
        },
        {
            name: 'InKannada',
            bmp: '\u0C80-\u0CFF'
        },
        {
            name: 'InKatakana',
            bmp: '\u30A0-\u30FF'
        },
        {
            name: 'InKatakana_Phonetic_Extensions',
            bmp: '\u31F0-\u31FF'
        },
        {
            name: 'InKayah_Li',
            bmp: '\uA900-\uA92F'
        },
        {
            name: 'InKharoshthi',
            astral: '\uD802[\uDE00-\uDE5F]'
        },
        {
            name: 'InKhmer',
            bmp: '\u1780-\u17FF'
        },
        {
            name: 'InKhmer_Symbols',
            bmp: '\u19E0-\u19FF'
        },
        {
            name: 'InKhojki',
            astral: '\uD804[\uDE00-\uDE4F]'
        },
        {
            name: 'InKhudawadi',
            astral: '\uD804[\uDEB0-\uDEFF]'
        },
        {
            name: 'InLao',
            bmp: '\u0E80-\u0EFF'
        },
        {
            name: 'InLatin_Extended_Additional',
            bmp: '\u1E00-\u1EFF'
        },
        {
            name: 'InLatin_Extended_A',
            bmp: '\u0100-\u017F'
        },
        {
            name: 'InLatin_Extended_B',
            bmp: '\u0180-\u024F'
        },
        {
            name: 'InLatin_Extended_C',
            bmp: '\u2C60-\u2C7F'
        },
        {
            name: 'InLatin_Extended_D',
            bmp: '\uA720-\uA7FF'
        },
        {
            name: 'InLatin_Extended_E',
            bmp: '\uAB30-\uAB6F'
        },
        {
            name: 'InLatin_1_Supplement',
            bmp: '\x80-\xFF'
        },
        {
            name: 'InLepcha',
            bmp: '\u1C00-\u1C4F'
        },
        {
            name: 'InLetterlike_Symbols',
            bmp: '\u2100-\u214F'
        },
        {
            name: 'InLimbu',
            bmp: '\u1900-\u194F'
        },
        {
            name: 'InLinear_A',
            astral: '\uD801[\uDE00-\uDF7F]'
        },
        {
            name: 'InLinear_B_Ideograms',
            astral: '\uD800[\uDC80-\uDCFF]'
        },
        {
            name: 'InLinear_B_Syllabary',
            astral: '\uD800[\uDC00-\uDC7F]'
        },
        {
            name: 'InLisu',
            bmp: '\uA4D0-\uA4FF'
        },
        {
            name: 'InLow_Surrogates',
            bmp: '\uDC00-\uDFFF'
        },
        {
            name: 'InLycian',
            astral: '\uD800[\uDE80-\uDE9F]'
        },
        {
            name: 'InLydian',
            astral: '\uD802[\uDD20-\uDD3F]'
        },
        {
            name: 'InMahajani',
            astral: '\uD804[\uDD50-\uDD7F]'
        },
        {
            name: 'InMahjong_Tiles',
            astral: '\uD83C[\uDC00-\uDC2F]'
        },
        {
            name: 'InMalayalam',
            bmp: '\u0D00-\u0D7F'
        },
        {
            name: 'InMandaic',
            bmp: '\u0840-\u085F'
        },
        {
            name: 'InManichaean',
            astral: '\uD802[\uDEC0-\uDEFF]'
        },
        {
            name: 'InMathematical_Alphanumeric_Symbols',
            astral: '\uD835[\uDC00-\uDFFF]'
        },
        {
            name: 'InMathematical_Operators',
            bmp: '\u2200-\u22FF'
        },
        {
            name: 'InMeetei_Mayek',
            bmp: '\uABC0-\uABFF'
        },
        {
            name: 'InMeetei_Mayek_Extensions',
            bmp: '\uAAE0-\uAAFF'
        },
        {
            name: 'InMende_Kikakui',
            astral: '\uD83A[\uDC00-\uDCDF]'
        },
        {
            name: 'InMeroitic_Cursive',
            astral: '\uD802[\uDDA0-\uDDFF]'
        },
        {
            name: 'InMeroitic_Hieroglyphs',
            astral: '\uD802[\uDD80-\uDD9F]'
        },
        {
            name: 'InMiao',
            astral: '\uD81B[\uDF00-\uDF9F]'
        },
        {
            name: 'InMiscellaneous_Mathematical_Symbols_A',
            bmp: '\u27C0-\u27EF'
        },
        {
            name: 'InMiscellaneous_Mathematical_Symbols_B',
            bmp: '\u2980-\u29FF'
        },
        {
            name: 'InMiscellaneous_Symbols',
            bmp: '\u2600-\u26FF'
        },
        {
            name: 'InMiscellaneous_Symbols_and_Arrows',
            bmp: '\u2B00-\u2BFF'
        },
        {
            name: 'InMiscellaneous_Symbols_and_Pictographs',
            astral: '\uD83D[\uDC00-\uDDFF]|\uD83C[\uDF00-\uDFFF]'
        },
        {
            name: 'InMiscellaneous_Technical',
            bmp: '\u2300-\u23FF'
        },
        {
            name: 'InModi',
            astral: '\uD805[\uDE00-\uDE5F]'
        },
        {
            name: 'InModifier_Tone_Letters',
            bmp: '\uA700-\uA71F'
        },
        {
            name: 'InMongolian',
            bmp: '\u1800-\u18AF'
        },
        {
            name: 'InMro',
            astral: '\uD81A[\uDE40-\uDE6F]'
        },
        {
            name: 'InMultani',
            astral: '\uD804[\uDE80-\uDEAF]'
        },
        {
            name: 'InMusical_Symbols',
            astral: '\uD834[\uDD00-\uDDFF]'
        },
        {
            name: 'InMyanmar',
            bmp: '\u1000-\u109F'
        },
        {
            name: 'InMyanmar_Extended_A',
            bmp: '\uAA60-\uAA7F'
        },
        {
            name: 'InMyanmar_Extended_B',
            bmp: '\uA9E0-\uA9FF'
        },
        {
            name: 'InNKo',
            bmp: '\u07C0-\u07FF'
        },
        {
            name: 'InNabataean',
            astral: '\uD802[\uDC80-\uDCAF]'
        },
        {
            name: 'InNew_Tai_Lue',
            bmp: '\u1980-\u19DF'
        },
        {
            name: 'InNumber_Forms',
            bmp: '\u2150-\u218F'
        },
        {
            name: 'InOgham',
            bmp: '\u1680-\u169F'
        },
        {
            name: 'InOl_Chiki',
            bmp: '\u1C50-\u1C7F'
        },
        {
            name: 'InOld_Hungarian',
            astral: '\uD803[\uDC80-\uDCFF]'
        },
        {
            name: 'InOld_Italic',
            astral: '\uD800[\uDF00-\uDF2F]'
        },
        {
            name: 'InOld_North_Arabian',
            astral: '\uD802[\uDE80-\uDE9F]'
        },
        {
            name: 'InOld_Permic',
            astral: '\uD800[\uDF50-\uDF7F]'
        },
        {
            name: 'InOld_Persian',
            astral: '\uD800[\uDFA0-\uDFDF]'
        },
        {
            name: 'InOld_South_Arabian',
            astral: '\uD802[\uDE60-\uDE7F]'
        },
        {
            name: 'InOld_Turkic',
            astral: '\uD803[\uDC00-\uDC4F]'
        },
        {
            name: 'InOptical_Character_Recognition',
            bmp: '\u2440-\u245F'
        },
        {
            name: 'InOriya',
            bmp: '\u0B00-\u0B7F'
        },
        {
            name: 'InOrnamental_Dingbats',
            astral: '\uD83D[\uDE50-\uDE7F]'
        },
        {
            name: 'InOsmanya',
            astral: '\uD801[\uDC80-\uDCAF]'
        },
        {
            name: 'InPahawh_Hmong',
            astral: '\uD81A[\uDF00-\uDF8F]'
        },
        {
            name: 'InPalmyrene',
            astral: '\uD802[\uDC60-\uDC7F]'
        },
        {
            name: 'InPau_Cin_Hau',
            astral: '\uD806[\uDEC0-\uDEFF]'
        },
        {
            name: 'InPhags_pa',
            bmp: '\uA840-\uA87F'
        },
        {
            name: 'InPhaistos_Disc',
            astral: '\uD800[\uDDD0-\uDDFF]'
        },
        {
            name: 'InPhoenician',
            astral: '\uD802[\uDD00-\uDD1F]'
        },
        {
            name: 'InPhonetic_Extensions',
            bmp: '\u1D00-\u1D7F'
        },
        {
            name: 'InPhonetic_Extensions_Supplement',
            bmp: '\u1D80-\u1DBF'
        },
        {
            name: 'InPlaying_Cards',
            astral: '\uD83C[\uDCA0-\uDCFF]'
        },
        {
            name: 'InPrivate_Use_Area',
            bmp: '\uE000-\uF8FF'
        },
        {
            name: 'InPsalter_Pahlavi',
            astral: '\uD802[\uDF80-\uDFAF]'
        },
        {
            name: 'InRejang',
            bmp: '\uA930-\uA95F'
        },
        {
            name: 'InRumi_Numeral_Symbols',
            astral: '\uD803[\uDE60-\uDE7F]'
        },
        {
            name: 'InRunic',
            bmp: '\u16A0-\u16FF'
        },
        {
            name: 'InSamaritan',
            bmp: '\u0800-\u083F'
        },
        {
            name: 'InSaurashtra',
            bmp: '\uA880-\uA8DF'
        },
        {
            name: 'InSharada',
            astral: '\uD804[\uDD80-\uDDDF]'
        },
        {
            name: 'InShavian',
            astral: '\uD801[\uDC50-\uDC7F]'
        },
        {
            name: 'InShorthand_Format_Controls',
            astral: '\uD82F[\uDCA0-\uDCAF]'
        },
        {
            name: 'InSiddham',
            astral: '\uD805[\uDD80-\uDDFF]'
        },
        {
            name: 'InSinhala',
            bmp: '\u0D80-\u0DFF'
        },
        {
            name: 'InSinhala_Archaic_Numbers',
            astral: '\uD804[\uDDE0-\uDDFF]'
        },
        {
            name: 'InSmall_Form_Variants',
            bmp: '\uFE50-\uFE6F'
        },
        {
            name: 'InSora_Sompeng',
            astral: '\uD804[\uDCD0-\uDCFF]'
        },
        {
            name: 'InSpacing_Modifier_Letters',
            bmp: '\u02B0-\u02FF'
        },
        {
            name: 'InSpecials',
            bmp: '\uFFF0-\uFFFF'
        },
        {
            name: 'InSundanese',
            bmp: '\u1B80-\u1BBF'
        },
        {
            name: 'InSundanese_Supplement',
            bmp: '\u1CC0-\u1CCF'
        },
        {
            name: 'InSuperscripts_and_Subscripts',
            bmp: '\u2070-\u209F'
        },
        {
            name: 'InSupplemental_Arrows_A',
            bmp: '\u27F0-\u27FF'
        },
        {
            name: 'InSupplemental_Arrows_B',
            bmp: '\u2900-\u297F'
        },
        {
            name: 'InSupplemental_Arrows_C',
            astral: '\uD83E[\uDC00-\uDCFF]'
        },
        {
            name: 'InSupplemental_Mathematical_Operators',
            bmp: '\u2A00-\u2AFF'
        },
        {
            name: 'InSupplemental_Punctuation',
            bmp: '\u2E00-\u2E7F'
        },
        {
            name: 'InSupplemental_Symbols_and_Pictographs',
            astral: '\uD83E[\uDD00-\uDDFF]'
        },
        {
            name: 'InSupplementary_Private_Use_Area_A',
            astral: '[\uDB80-\uDBBF][\uDC00-\uDFFF]'
        },
        {
            name: 'InSupplementary_Private_Use_Area_B',
            astral: '[\uDBC0-\uDBFF][\uDC00-\uDFFF]'
        },
        {
            name: 'InSutton_SignWriting',
            astral: '\uD836[\uDC00-\uDEAF]'
        },
        {
            name: 'InSyloti_Nagri',
            bmp: '\uA800-\uA82F'
        },
        {
            name: 'InSyriac',
            bmp: '\u0700-\u074F'
        },
        {
            name: 'InTagalog',
            bmp: '\u1700-\u171F'
        },
        {
            name: 'InTagbanwa',
            bmp: '\u1760-\u177F'
        },
        {
            name: 'InTags',
            astral: '\uDB40[\uDC00-\uDC7F]'
        },
        {
            name: 'InTai_Le',
            bmp: '\u1950-\u197F'
        },
        {
            name: 'InTai_Tham',
            bmp: '\u1A20-\u1AAF'
        },
        {
            name: 'InTai_Viet',
            bmp: '\uAA80-\uAADF'
        },
        {
            name: 'InTai_Xuan_Jing_Symbols',
            astral: '\uD834[\uDF00-\uDF5F]'
        },
        {
            name: 'InTakri',
            astral: '\uD805[\uDE80-\uDECF]'
        },
        {
            name: 'InTamil',
            bmp: '\u0B80-\u0BFF'
        },
        {
            name: 'InTelugu',
            bmp: '\u0C00-\u0C7F'
        },
        {
            name: 'InThaana',
            bmp: '\u0780-\u07BF'
        },
        {
            name: 'InThai',
            bmp: '\u0E00-\u0E7F'
        },
        {
            name: 'InTibetan',
            bmp: '\u0F00-\u0FFF'
        },
        {
            name: 'InTifinagh',
            bmp: '\u2D30-\u2D7F'
        },
        {
            name: 'InTirhuta',
            astral: '\uD805[\uDC80-\uDCDF]'
        },
        {
            name: 'InTransport_and_Map_Symbols',
            astral: '\uD83D[\uDE80-\uDEFF]'
        },
        {
            name: 'InUgaritic',
            astral: '\uD800[\uDF80-\uDF9F]'
        },
        {
            name: 'InUnified_Canadian_Aboriginal_Syllabics',
            bmp: '\u1400-\u167F'
        },
        {
            name: 'InUnified_Canadian_Aboriginal_Syllabics_Extended',
            bmp: '\u18B0-\u18FF'
        },
        {
            name: 'InVai',
            bmp: '\uA500-\uA63F'
        },
        {
            name: 'InVariation_Selectors',
            bmp: '\uFE00-\uFE0F'
        },
        {
            name: 'InVariation_Selectors_Supplement',
            astral: '\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'InVedic_Extensions',
            bmp: '\u1CD0-\u1CFF'
        },
        {
            name: 'InVertical_Forms',
            bmp: '\uFE10-\uFE1F'
        },
        {
            name: 'InWarang_Citi',
            astral: '\uD806[\uDCA0-\uDCFF]'
        },
        {
            name: 'InYi_Radicals',
            bmp: '\uA490-\uA4CF'
        },
        {
            name: 'InYi_Syllables',
            bmp: '\uA000-\uA48F'
        },
        {
            name: 'InYijing_Hexagram_Symbols',
            bmp: '\u4DC0-\u4DFF'
        }
    ]);

};

},{}],5:[function(require,module,exports){
/*!
 * XRegExp Unicode Categories 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2016 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

/**
 * Adds support for Unicode's general categories. E.g., `\p{Lu}` or `\p{Uppercase Letter}`. See
 * category descriptions in UAX #44 <http://unicode.org/reports/tr44/#GC_Values_Table>. Token names
 * are case insensitive, and any spaces, hyphens, and underscores are ignored.
 *
 * Uses Unicode 8.0.0.
 *
 * @requires XRegExp, Unicode Base
 */
module.exports = function(XRegExp) {
    'use strict';

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Categories');
    }

    XRegExp.addUnicodeData([
        {
            name: 'C',
            alias: 'Other',
            isBmpLast: true,
            bmp: '\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5-\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C80\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D56\u0D58-\u0D5E\u0D64\u0D65\u0D76-\u0D78\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C80-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFB\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FB-\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E43-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AE\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C5-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF',
            astral: '\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDD9B-\uDDE5\uDE03-\uDE0F\uDE3B-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFFF]|\uD86E[\uDC1E\uDC1F]|\uD83D[\uDD7A\uDDA4\uDED1-\uDEDF\uDEED-\uDEEF\uDEF4-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8D-\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3E-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD86D[\uDF35-\uDF3F]|[\uD807\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD81C-\uD82B\uD82D\uD82E\uD830-\uD833\uD837-\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD805[\uDC00-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD19-\uDD7F\uDD85-\uDDBF\uDDC1-\uDFFF]|\uD873[\uDEA2-\uDFFF]'
        },
        {
            name: 'Cc',
            alias: 'Control',
            bmp: '\0-\x1F\x7F-\x9F'
        },
        {
            name: 'Cf',
            alias: 'Format',
            bmp: '\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB',
            astral: '\uDB40[\uDC01\uDC20-\uDC7F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uD804\uDCBD'
        },
        {
            name: 'Cn',
            alias: 'Unassigned',
            bmp: '\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u05FF\u061D\u070E\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5-\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C80\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D56\u0D58-\u0D5E\u0D64\u0D65\u0D76-\u0D78\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C80-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFB\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FB-\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E43-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AE\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C5-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF',
            astral: '\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDD9B-\uDDE5\uDE03-\uDE0F\uDE3B-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFFF]|\uD86E[\uDC1E\uDC1F]|\uD83D[\uDD7A\uDDA4\uDED1-\uDEDF\uDEED-\uDEEF\uDEF4-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8D-\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD86D[\uDF35-\uDF3F]|[\uD807\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD81C-\uD82B\uD82D\uD82E\uD830-\uD833\uD837-\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD805[\uDC00-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3E-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD19-\uDD7F\uDD85-\uDDBF\uDDC1-\uDFFF]|\uD873[\uDEA2-\uDFFF]'
        },
        {
            name: 'Co',
            alias: 'Private_Use',
            bmp: '\uE000-\uF8FF',
            astral: '[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]'
        },
        {
            name: 'Cs',
            alias: 'Surrogate',
            bmp: '\uD800-\uDFFF'
        },
        {
            name: 'L',
            alias: 'Letter',
            bmp: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
            astral: '\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD83A[\uDC00-\uDCC4]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD80D[\uDC00-\uDC2E]|\uD87E[\uDC00-\uDE1D]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD809[\uDC80-\uDD43]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD808[\uDC00-\uDF99]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD811[\uDC00-\uDE46]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD82C[\uDC00\uDC01]|\uD873[\uDC00-\uDEA1]'
        },
        {
            name: 'Ll',
            alias: 'Lowercase_Letter',
            bmp: 'a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
            astral: '\uD803[\uDCC0-\uDCF2]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD801[\uDC28-\uDC4F]|\uD806[\uDCC0-\uDCDF]'
        },
        {
            name: 'Lm',
            alias: 'Modifier_Letter',
            bmp: '\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F',
            astral: '\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F]'
        },
        {
            name: 'Lo',
            alias: 'Other_Letter',
            bmp: '\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
            astral: '\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD83A[\uDC00-\uDCC4]|\uD803[\uDC00-\uDC48]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD80D[\uDC00-\uDC2E]|\uD87E[\uDC00-\uDE1D]|\uD81B[\uDF00-\uDF44\uDF50]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD809[\uDC80-\uDD43]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD808[\uDC00-\uDF99]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD811[\uDC00-\uDE46]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD82C[\uDC00\uDC01]|\uD873[\uDC00-\uDEA1]'
        },
        {
            name: 'Lt',
            alias: 'Titlecase_Letter',
            bmp: '\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC'
        },
        {
            name: 'Lu',
            alias: 'Uppercase_Letter',
            bmp: 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A',
            astral: '\uD806[\uDCA0-\uDCBF]|\uD803[\uDC80-\uDCB2]|\uD801[\uDC00-\uDC27]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]'
        },
        {
            name: 'M',
            alias: 'Mark',
            bmp: '\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
            astral: '\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDCA-\uDDCC\uDE2C-\uDE37\uDEDF-\uDEEA\uDF00-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD82F[\uDC9D\uDC9E]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'Mc',
            alias: 'Spacing_Mark',
            bmp: '\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\u1CF3\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC',
            astral: '\uD834[\uDD65\uDD66\uDD6D-\uDD72]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD81B[\uDF51-\uDF7E]'
        },
        {
            name: 'Me',
            alias: 'Enclosing_Mark',
            bmp: '\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672'
        },
        {
            name: 'Mn',
            alias: 'Nonspacing_Mark',
            bmp: '\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
            astral: '\uD805[\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'N',
            alias: 'Number',
            bmp: '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
            astral: '\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD806[\uDCE0-\uDCF2]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD834[\uDF60-\uDF71]|\uD83C[\uDD00-\uDD0C]|\uD809[\uDC00-\uDC6E]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD805[\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]'
        },
        {
            name: 'Nd',
            alias: 'Decimal_Number',
            bmp: '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
            astral: '\uD801[\uDCA0-\uDCA9]|\uD835[\uDFCE-\uDFFF]|\uD805[\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]'
        },
        {
            name: 'Nl',
            alias: 'Letter_Number',
            bmp: '\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF',
            astral: '\uD809[\uDC00-\uDC6E]|\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]'
        },
        {
            name: 'No',
            alias: 'Other_Number',
            bmp: '\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D70-\u0D75\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835',
            astral: '\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD83C[\uDD00-\uDD0C]|\uD806[\uDCEA-\uDCF2]|\uD83A[\uDCC7-\uDCCF]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD805[\uDF3A\uDF3B]|\uD81A[\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]'
        },
        {
            name: 'P',
            alias: 'Punctuation',
            bmp: '\x21-\x23\x25-\\x2A\x2C-\x2F\x3A\x3B\\x3F\x40\\x5B-\\x5D\x5F\\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65',
            astral: '\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD809[\uDC70-\uDC74]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD836[\uDE87-\uDE8B]|\uD801\uDD6F|\uD82F\uDC9F|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]'
        },
        {
            name: 'Pc',
            alias: 'Connector_Punctuation',
            bmp: '\x5F\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F'
        },
        {
            name: 'Pd',
            alias: 'Dash_Punctuation',
            bmp: '\\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D'
        },
        {
            name: 'Pe',
            alias: 'Close_Punctuation',
            bmp: '\\x29\\x5D\x7D\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63'
        },
        {
            name: 'Pf',
            alias: 'Final_Punctuation',
            bmp: '\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21'
        },
        {
            name: 'Pi',
            alias: 'Initial_Punctuation',
            bmp: '\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20'
        },
        {
            name: 'Po',
            alias: 'Other_Punctuation',
            bmp: '\x21-\x23\x25-\x27\\x2A\x2C\\x2E\x2F\x3A\x3B\\x3F\x40\\x5C\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166D\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65',
            astral: '\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD809[\uDC70-\uDC74]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD836[\uDE87-\uDE8B]|\uD801\uDD6F|\uD82F\uDC9F|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]'
        },
        {
            name: 'Ps',
            alias: 'Open_Punctuation',
            bmp: '\\x28\\x5B\\x7B\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62'
        },
        {
            name: 'S',
            alias: 'Symbol',
            bmp: '\\x24\\x2B\x3C-\x3E\\x5E\x60\\x7C\x7E\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BE\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u23FA\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD',
            astral: '\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDD9A\uDDE6-\uDE02\uDE10-\uDE3A\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDD79\uDD7B-\uDDA3\uDDA5-\uDED0\uDEE0-\uDEEC\uDEF0-\uDEF3\uDF00-\uDF73\uDF80-\uDFD4]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD82F\uDC9C|\uD805\uDF3F|\uD802[\uDC77\uDC78\uDEC8]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD83B[\uDEF0\uDEF1]'
        },
        {
            name: 'Sc',
            alias: 'Currency_Symbol',
            bmp: '\\x24\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BE\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6'
        },
        {
            name: 'Sk',
            alias: 'Modifier_Symbol',
            bmp: '\\x5E\x60\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uFBB2-\uFBC1\uFF3E\uFF40\uFFE3',
            astral: '\uD83C[\uDFFB-\uDFFF]'
        },
        {
            name: 'Sm',
            alias: 'Math_Symbol',
            bmp: '\\x2B\x3C-\x3E\\x7C\x7E\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC',
            astral: '\uD83B[\uDEF0\uDEF1]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]'
        },
        {
            name: 'So',
            alias: 'Other_Symbol',
            bmp: '\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u23FA\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFDFD\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD',
            astral: '\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83D[\uDC00-\uDD79\uDD7B-\uDDA3\uDDA5-\uDED0\uDEE0-\uDEEC\uDEF0-\uDEF3\uDF00-\uDF73\uDF80-\uDFD4]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDD9A\uDDE6-\uDE02\uDE10-\uDE3A\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFA]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD82F\uDC9C|\uD805\uDF3F|\uD802[\uDC77\uDC78\uDEC8]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]'
        },
        {
            name: 'Z',
            alias: 'Separator',
            bmp: '\x20\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
        },
        {
            name: 'Zl',
            alias: 'Line_Separator',
            bmp: '\u2028'
        },
        {
            name: 'Zp',
            alias: 'Paragraph_Separator',
            bmp: '\u2029'
        },
        {
            name: 'Zs',
            alias: 'Space_Separator',
            bmp: '\x20\xA0\u1680\u2000-\u200A\u202F\u205F\u3000'
        }
    ]);

};

},{}],6:[function(require,module,exports){
/*!
 * XRegExp Unicode Properties 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2016 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

/**
 * Adds properties to meet the UTS #18 Level 1 RL1.2 requirements for Unicode regex support. See
 * <http://unicode.org/reports/tr18/#RL1.2>. Following are definitions of these properties from UAX
 * #44 <http://unicode.org/reports/tr44/>:
 *
 * - Alphabetic
 *   Characters with the Alphabetic property. Generated from: Lowercase + Uppercase + Lt + Lm + Lo +
 *   Nl + Other_Alphabetic.
 *
 * - Default_Ignorable_Code_Point
 *   For programmatic determination of default ignorable code points. New characters that should be
 *   ignored in rendering (unless explicitly supported) will be assigned in these ranges, permitting
 *   programs to correctly handle the default rendering of such characters when not otherwise
 *   supported.
 *
 * - Lowercase
 *   Characters with the Lowercase property. Generated from: Ll + Other_Lowercase.
 *
 * - Noncharacter_Code_Point
 *   Code points permanently reserved for internal use.
 *
 * - Uppercase
 *   Characters with the Uppercase property. Generated from: Lu + Other_Uppercase.
 *
 * - White_Space
 *   Spaces, separator characters and other control characters which should be treated by
 *   programming languages as "white space" for the purpose of parsing elements.
 *
 * The properties ASCII, Any, and Assigned are also included but are not defined in UAX #44. UTS #18
 * RL1.2 additionally requires support for Unicode scripts and general categories. These are
 * included in XRegExp's Unicode Categories and Unicode Scripts addons.
 *
 * Token names are case insensitive, and any spaces, hyphens, and underscores are ignored.
 *
 * Uses Unicode 8.0.0.
 *
 * @requires XRegExp, Unicode Base
 */
module.exports = function(XRegExp) {
    'use strict';

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Properties');
    }

    var unicodeData = [
        {
            name: 'ASCII',
            bmp: '\0-\x7F'
        },
        {
            name: 'Alphabetic',
            bmp: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0-\u08B4\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA7E-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
            astral: '\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD804[\uDC00-\uDC45\uDC82-\uDCB8\uDCD0-\uDCE8\uDD00-\uDD32\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD83A[\uDC00-\uDCC4]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF36\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD80D[\uDC00-\uDC2E]|\uD87E[\uDC00-\uDE1D]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD808[\uDC00-\uDF99]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD805[\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDF00-\uDF19\uDF1D-\uDF2A]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD811[\uDC00-\uDE46]|\uD82C[\uDC00\uDC01]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF93-\uDF9F]|\uD873[\uDC00-\uDEA1]'
        },
        {
            name: 'Any',
            isBmpLast: true,
            bmp: '\0-\uFFFF',
            astral: '[\uD800-\uDBFF][\uDC00-\uDFFF]'
        },
        {
            name: 'Default_Ignorable_Code_Point',
            bmp: '\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8',
            astral: '[\uDB40-\uDB43][\uDC00-\uDFFF]|\uD834[\uDD73-\uDD7A]|\uD82F[\uDCA0-\uDCA3]'
        },
        {
            name: 'Lowercase',
            bmp: 'a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
            astral: '\uD803[\uDCC0-\uDCF2]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD801[\uDC28-\uDC4F]|\uD806[\uDCC0-\uDCDF]'
        },
        {
            name: 'Noncharacter_Code_Point',
            bmp: '\uFDD0-\uFDEF\uFFFE\uFFFF',
            astral: '[\uDB3F\uDB7F\uDBBF\uDBFF\uD83F\uD87F\uD8BF\uDAFF\uD97F\uD9BF\uD9FF\uDA3F\uD8FF\uDABF\uDA7F\uD93F][\uDFFE\uDFFF]'
        },
        {
            name: 'Uppercase',
            bmp: 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A',
            astral: '\uD806[\uDCA0-\uDCBF]|\uD803[\uDC80-\uDCB2]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD801[\uDC00-\uDC27]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]'
        },
        {
            name: 'White_Space',
            bmp: '\x09-\x0D\x20\x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
        }
    ];

    // Add non-generated data
    unicodeData.push({
        name: 'Assigned',
        // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
        // Categories addon is required to use this property
        inverseOf: 'Cn'
    });

    XRegExp.addUnicodeData(unicodeData);

};

},{}],7:[function(require,module,exports){
/*!
 * XRegExp Unicode Scripts 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2016 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

/**
 * Adds support for all Unicode scripts. E.g., `\p{Latin}`. Token names are case insensitive, and
 * any spaces, hyphens, and underscores are ignored.
 *
 * Uses Unicode 8.0.0.
 *
 * @requires XRegExp, Unicode Base
 */
module.exports = function(XRegExp) {
    'use strict';

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Scripts');
    }

    XRegExp.addUnicodeData([
        {
            name: 'Ahom',
            astral: '\uD805[\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3F]'
        },
        {
            name: 'Anatolian_Hieroglyphs',
            astral: '\uD811[\uDC00-\uDE46]'
        },
        {
            name: 'Arabic',
            bmp: '\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B4\u08E3-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC',
            astral: '\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]'
        },
        {
            name: 'Armenian',
            bmp: '\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17'
        },
        {
            name: 'Avestan',
            astral: '\uD802[\uDF00-\uDF35\uDF39-\uDF3F]'
        },
        {
            name: 'Balinese',
            bmp: '\u1B00-\u1B4B\u1B50-\u1B7C'
        },
        {
            name: 'Bamum',
            bmp: '\uA6A0-\uA6F7',
            astral: '\uD81A[\uDC00-\uDE38]'
        },
        {
            name: 'Bassa_Vah',
            astral: '\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]'
        },
        {
            name: 'Batak',
            bmp: '\u1BC0-\u1BF3\u1BFC-\u1BFF'
        },
        {
            name: 'Bengali',
            bmp: '\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB'
        },
        {
            name: 'Bopomofo',
            bmp: '\u02EA\u02EB\u3105-\u312D\u31A0-\u31BA'
        },
        {
            name: 'Brahmi',
            astral: '\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F]'
        },
        {
            name: 'Braille',
            bmp: '\u2800-\u28FF'
        },
        {
            name: 'Buginese',
            bmp: '\u1A00-\u1A1B\u1A1E\u1A1F'
        },
        {
            name: 'Buhid',
            bmp: '\u1740-\u1753'
        },
        {
            name: 'Canadian_Aboriginal',
            bmp: '\u1400-\u167F\u18B0-\u18F5'
        },
        {
            name: 'Carian',
            astral: '\uD800[\uDEA0-\uDED0]'
        },
        {
            name: 'Caucasian_Albanian',
            astral: '\uD801[\uDD30-\uDD63\uDD6F]'
        },
        {
            name: 'Chakma',
            astral: '\uD804[\uDD00-\uDD34\uDD36-\uDD43]'
        },
        {
            name: 'Cham',
            bmp: '\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F'
        },
        {
            name: 'Cherokee',
            bmp: '\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF'
        },
        {
            name: 'Common',
            bmp: '\0-\x40\\x5B-\x60\\x7B-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0589\u0605\u060C\u061B\u061C\u061F\u0640\u06DD\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20BE\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u23FA\u2400-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2E00-\u2E42\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD',
            astral: '\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD82F[\uDCA0-\uDCA3]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uDB40[\uDC01\uDC20-\uDC7F]|\uD83D[\uDC00-\uDD79\uDD7B-\uDDA3\uDDA5-\uDED0\uDEE0-\uDEEC\uDEF0-\uDEF3\uDF00-\uDF73\uDF80-\uDFD4]|\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9B\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDF00-\uDF56\uDF60-\uDF71]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDD0C\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3A\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]'
        },
        {
            name: 'Coptic',
            bmp: '\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF'
        },
        {
            name: 'Cuneiform',
            astral: '\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]|\uD808[\uDC00-\uDF99]'
        },
        {
            name: 'Cypriot',
            astral: '\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]'
        },
        {
            name: 'Cyrillic',
            bmp: '\u0400-\u0484\u0487-\u052F\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F'
        },
        {
            name: 'Deseret',
            astral: '\uD801[\uDC00-\uDC4F]'
        },
        {
            name: 'Devanagari',
            bmp: '\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FD'
        },
        {
            name: 'Duployan',
            astral: '\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]'
        },
        {
            name: 'Egyptian_Hieroglyphs',
            astral: '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]'
        },
        {
            name: 'Elbasan',
            astral: '\uD801[\uDD00-\uDD27]'
        },
        {
            name: 'Ethiopic',
            bmp: '\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E'
        },
        {
            name: 'Georgian',
            bmp: '\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D'
        },
        {
            name: 'Glagolitic',
            bmp: '\u2C00-\u2C2E\u2C30-\u2C5E'
        },
        {
            name: 'Gothic',
            astral: '\uD800[\uDF30-\uDF4A]'
        },
        {
            name: 'Grantha',
            astral: '\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]'
        },
        {
            name: 'Greek',
            bmp: '\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65',
            astral: '\uD800[\uDD40-\uDD8C\uDDA0]|\uD834[\uDE00-\uDE45]'
        },
        {
            name: 'Gujarati',
            bmp: '\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9'
        },
        {
            name: 'Gurmukhi',
            bmp: '\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75'
        },
        {
            name: 'Han',
            bmp: '\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9',
            astral: '\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD87E[\uDC00-\uDE1D]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD873[\uDC00-\uDEA1]'
        },
        {
            name: 'Hangul',
            bmp: '\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC'
        },
        {
            name: 'Hanunoo',
            bmp: '\u1720-\u1734'
        },
        {
            name: 'Hatran',
            astral: '\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]'
        },
        {
            name: 'Hebrew',
            bmp: '\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F'
        },
        {
            name: 'Hiragana',
            bmp: '\u3041-\u3096\u309D-\u309F',
            astral: '\uD82C\uDC01|\uD83C\uDE00'
        },
        {
            name: 'Imperial_Aramaic',
            astral: '\uD802[\uDC40-\uDC55\uDC57-\uDC5F]'
        },
        {
            name: 'Inherited',
            bmp: '\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951\u0952\u1AB0-\u1ABE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D',
            astral: '\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD800[\uDDFD\uDEE0]|\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'Inscriptional_Pahlavi',
            astral: '\uD802[\uDF60-\uDF72\uDF78-\uDF7F]'
        },
        {
            name: 'Inscriptional_Parthian',
            astral: '\uD802[\uDF40-\uDF55\uDF58-\uDF5F]'
        },
        {
            name: 'Javanese',
            bmp: '\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF'
        },
        {
            name: 'Kaithi',
            astral: '\uD804[\uDC80-\uDCC1]'
        },
        {
            name: 'Kannada',
            bmp: '\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2'
        },
        {
            name: 'Katakana',
            bmp: '\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D',
            astral: '\uD82C\uDC00'
        },
        {
            name: 'Kayah_Li',
            bmp: '\uA900-\uA92D\uA92F'
        },
        {
            name: 'Kharoshthi',
            astral: '\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F-\uDE47\uDE50-\uDE58]'
        },
        {
            name: 'Khmer',
            bmp: '\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF'
        },
        {
            name: 'Khojki',
            astral: '\uD804[\uDE00-\uDE11\uDE13-\uDE3D]'
        },
        {
            name: 'Khudawadi',
            astral: '\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]'
        },
        {
            name: 'Lao',
            bmp: '\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF'
        },
        {
            name: 'Latin',
            bmp: 'A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A'
        },
        {
            name: 'Lepcha',
            bmp: '\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F'
        },
        {
            name: 'Limbu',
            bmp: '\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F'
        },
        {
            name: 'Linear_A',
            astral: '\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]'
        },
        {
            name: 'Linear_B',
            astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]'
        },
        {
            name: 'Lisu',
            bmp: '\uA4D0-\uA4FF'
        },
        {
            name: 'Lycian',
            astral: '\uD800[\uDE80-\uDE9C]'
        },
        {
            name: 'Lydian',
            astral: '\uD802[\uDD20-\uDD39\uDD3F]'
        },
        {
            name: 'Mahajani',
            astral: '\uD804[\uDD50-\uDD76]'
        },
        {
            name: 'Malayalam',
            bmp: '\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D75\u0D79-\u0D7F'
        },
        {
            name: 'Mandaic',
            bmp: '\u0840-\u085B\u085E'
        },
        {
            name: 'Manichaean',
            astral: '\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]'
        },
        {
            name: 'Meetei_Mayek',
            bmp: '\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9'
        },
        {
            name: 'Mende_Kikakui',
            astral: '\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]'
        },
        {
            name: 'Meroitic_Cursive',
            astral: '\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]'
        },
        {
            name: 'Meroitic_Hieroglyphs',
            astral: '\uD802[\uDD80-\uDD9F]'
        },
        {
            name: 'Miao',
            astral: '\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]'
        },
        {
            name: 'Modi',
            astral: '\uD805[\uDE00-\uDE44\uDE50-\uDE59]'
        },
        {
            name: 'Mongolian',
            bmp: '\u1800\u1801\u1804\u1806-\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18AA'
        },
        {
            name: 'Mro',
            astral: '\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]'
        },
        {
            name: 'Multani',
            astral: '\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]'
        },
        {
            name: 'Myanmar',
            bmp: '\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F'
        },
        {
            name: 'Nabataean',
            astral: '\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]'
        },
        {
            name: 'New_Tai_Lue',
            bmp: '\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF'
        },
        {
            name: 'Nko',
            bmp: '\u07C0-\u07FA'
        },
        {
            name: 'Ogham',
            bmp: '\u1680-\u169C'
        },
        {
            name: 'Ol_Chiki',
            bmp: '\u1C50-\u1C7F'
        },
        {
            name: 'Old_Hungarian',
            astral: '\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]'
        },
        {
            name: 'Old_Italic',
            astral: '\uD800[\uDF00-\uDF23]'
        },
        {
            name: 'Old_North_Arabian',
            astral: '\uD802[\uDE80-\uDE9F]'
        },
        {
            name: 'Old_Permic',
            astral: '\uD800[\uDF50-\uDF7A]'
        },
        {
            name: 'Old_Persian',
            astral: '\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]'
        },
        {
            name: 'Old_South_Arabian',
            astral: '\uD802[\uDE60-\uDE7F]'
        },
        {
            name: 'Old_Turkic',
            astral: '\uD803[\uDC00-\uDC48]'
        },
        {
            name: 'Oriya',
            bmp: '\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77'
        },
        {
            name: 'Osmanya',
            astral: '\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]'
        },
        {
            name: 'Pahawh_Hmong',
            astral: '\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]'
        },
        {
            name: 'Palmyrene',
            astral: '\uD802[\uDC60-\uDC7F]'
        },
        {
            name: 'Pau_Cin_Hau',
            astral: '\uD806[\uDEC0-\uDEF8]'
        },
        {
            name: 'Phags_Pa',
            bmp: '\uA840-\uA877'
        },
        {
            name: 'Phoenician',
            astral: '\uD802[\uDD00-\uDD1B\uDD1F]'
        },
        {
            name: 'Psalter_Pahlavi',
            astral: '\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]'
        },
        {
            name: 'Rejang',
            bmp: '\uA930-\uA953\uA95F'
        },
        {
            name: 'Runic',
            bmp: '\u16A0-\u16EA\u16EE-\u16F8'
        },
        {
            name: 'Samaritan',
            bmp: '\u0800-\u082D\u0830-\u083E'
        },
        {
            name: 'Saurashtra',
            bmp: '\uA880-\uA8C4\uA8CE-\uA8D9'
        },
        {
            name: 'Sharada',
            astral: '\uD804[\uDD80-\uDDCD\uDDD0-\uDDDF]'
        },
        {
            name: 'Shavian',
            astral: '\uD801[\uDC50-\uDC7F]'
        },
        {
            name: 'Siddham',
            astral: '\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]'
        },
        {
            name: 'SignWriting',
            astral: '\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]'
        },
        {
            name: 'Sinhala',
            bmp: '\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4',
            astral: '\uD804[\uDDE1-\uDDF4]'
        },
        {
            name: 'Sora_Sompeng',
            astral: '\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]'
        },
        {
            name: 'Sundanese',
            bmp: '\u1B80-\u1BBF\u1CC0-\u1CC7'
        },
        {
            name: 'Syloti_Nagri',
            bmp: '\uA800-\uA82B'
        },
        {
            name: 'Syriac',
            bmp: '\u0700-\u070D\u070F-\u074A\u074D-\u074F'
        },
        {
            name: 'Tagalog',
            bmp: '\u1700-\u170C\u170E-\u1714'
        },
        {
            name: 'Tagbanwa',
            bmp: '\u1760-\u176C\u176E-\u1770\u1772\u1773'
        },
        {
            name: 'Tai_Le',
            bmp: '\u1950-\u196D\u1970-\u1974'
        },
        {
            name: 'Tai_Tham',
            bmp: '\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD'
        },
        {
            name: 'Tai_Viet',
            bmp: '\uAA80-\uAAC2\uAADB-\uAADF'
        },
        {
            name: 'Takri',
            astral: '\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9]'
        },
        {
            name: 'Tamil',
            bmp: '\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA'
        },
        {
            name: 'Telugu',
            bmp: '\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F'
        },
        {
            name: 'Thaana',
            bmp: '\u0780-\u07B1'
        },
        {
            name: 'Thai',
            bmp: '\u0E01-\u0E3A\u0E40-\u0E5B'
        },
        {
            name: 'Tibetan',
            bmp: '\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA'
        },
        {
            name: 'Tifinagh',
            bmp: '\u2D30-\u2D67\u2D6F\u2D70\u2D7F'
        },
        {
            name: 'Tirhuta',
            astral: '\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]'
        },
        {
            name: 'Ugaritic',
            astral: '\uD800[\uDF80-\uDF9D\uDF9F]'
        },
        {
            name: 'Vai',
            bmp: '\uA500-\uA62B'
        },
        {
            name: 'Warang_Citi',
            astral: '\uD806[\uDCA0-\uDCF2\uDCFF]'
        },
        {
            name: 'Yi',
            bmp: '\uA000-\uA48C\uA490-\uA4C6'
        }
    ]);

};

},{}],8:[function(require,module,exports){
var XRegExp = require('./xregexp');

require('./addons/build')(XRegExp);
require('./addons/matchrecursive')(XRegExp);
require('./addons/unicode-base')(XRegExp);
require('./addons/unicode-blocks')(XRegExp);
require('./addons/unicode-categories')(XRegExp);
require('./addons/unicode-properties')(XRegExp);
require('./addons/unicode-scripts')(XRegExp);

module.exports = XRegExp;

},{"./addons/build":1,"./addons/matchrecursive":2,"./addons/unicode-base":3,"./addons/unicode-blocks":4,"./addons/unicode-categories":5,"./addons/unicode-properties":6,"./addons/unicode-scripts":7,"./xregexp":9}],9:[function(require,module,exports){
/*!
 * XRegExp 3.1.0
 * <xregexp.com>
 * Steven Levithan (c) 2007-2016 MIT License
 */

/**
 * XRegExp provides augmented, extensible regular expressions. You get additional regex syntax and
 * flags, beyond what browsers support natively. XRegExp is also a regex utility belt with tools to
 * make your client-side grepping simpler and more powerful, while freeing you from related
 * cross-browser inconsistencies.
 */

    'use strict';

/* ==============================
 * Private stuff
 * ============================== */

    // Property name used for extended regex instance data
    var REGEX_DATA = 'xregexp';
    // Optional features that can be installed and uninstalled
    var features = {
        astral: false,
        natives: false
    };
    // Native methods to use and restore ('native' is an ES3 reserved keyword)
    var nativ = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
    };
    // Storage for fixed/extended native methods
    var fixed = {};
    // Storage for regexes cached by `XRegExp.cache`
    var regexCache = {};
    // Storage for pattern details cached by the `XRegExp` constructor
    var patternCache = {};
    // Storage for regex syntax tokens added internally or by `XRegExp.addToken`
    var tokens = [];
    // Token scopes
    var defaultScope = 'default';
    var classScope = 'class';
    // Regexes that match native regex syntax, including octals
    var nativeTokens = {
        // Any native multicharacter token in default scope, or any single character
        'default': /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        // Any native multicharacter token in character class scope, or any single character
        'class': /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
    };
    // Any backreference or dollar-prefixed character in replacement strings
    var replacementToken = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
    // Check for correct `exec` handling of nonparticipating capturing groups
    var correctExecNpcg = nativ.exec.call(/()??/, '')[1] === undefined;
    // Check for ES6 `flags` prop support
    var hasFlagsProp = /x/.flags !== undefined;
    // Shortcut to `Object.prototype.toString`
    var toString = {}.toString;

    function hasNativeFlag(flag) {
        // Can't check based on the presense of properties/getters since
        // browsers might support such properties even when don't support the
        // corresponding flag in regex construction (tested in Chrome 48, where
        // `'unicode' in /x/` is true but trying to construct a regex with flag
        // `u` throws an error).
        var isSupported = true;
        try {
            new RegExp('', flag);
        } catch (exception) {
            isSupported = false;
        }
        return isSupported;
    }
    // Check for ES6 `u` flag support
    var hasNativeU = hasNativeFlag('u');
    // Check for ES6 `y` flag support
    var hasNativeY = hasNativeFlag('y');
    // Tracker for known flags, including addon flags
    var registeredFlags = {
        g: true,
        i: true,
        m: true,
        u: hasNativeU,
        y: hasNativeY
    };

/**
 * Attaches extended data and `XRegExp.prototype` properties to a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to augment.
 * @param {Array} captureNames Array with capture names, or `null`.
 * @param {String} xSource XRegExp pattern used to generate `regex`, or `null` if N/A.
 * @param {String} xFlags XRegExp flags used to generate `regex`, or `null` if N/A.
 * @param {Boolean} [isInternalOnly=false] Whether the regex will be used only for internal
 *   operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *   skipping some operations like attaching `XRegExp.prototype` properties.
 * @returns {RegExp} Augmented regex.
 */
    function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
        var p;

        regex[REGEX_DATA] = {
            captureNames: captureNames
        };

        if (isInternalOnly) {
            return regex;
        }

        // Can't auto-inherit these since the XRegExp constructor returns a nonprimitive value
        if (regex.__proto__) {
            regex.__proto__ = XRegExp.prototype;
        } else {
            for (p in XRegExp.prototype) {
                // An `XRegExp.prototype.hasOwnProperty(p)` check wouldn't be worth it here, since
                // this is performance sensitive, and enumerable `Object.prototype` or
                // `RegExp.prototype` extensions exist on `regex.prototype` anyway
                regex[p] = XRegExp.prototype[p];
            }
        }

        regex[REGEX_DATA].source = xSource;
        // Emulate the ES6 `flags` prop by ensuring flags are in alphabetical order
        regex[REGEX_DATA].flags = xFlags ? xFlags.split('').sort().join('') : xFlags;

        return regex;
    }

/**
 * Removes any duplicate characters from the provided string.
 *
 * @private
 * @param {String} str String to remove duplicate characters from.
 * @returns {String} String with any duplicate characters removed.
 */
    function clipDuplicates(str) {
        return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, '');
    }

/**
 * Copies a regex object while preserving extended data and augmenting with `XRegExp.prototype`
 * properties. The copy has a fresh `lastIndex` property (set to zero). Allows adding and removing
 * flags g and y while copying the regex.
 *
 * @private
 * @param {RegExp} regex Regex to copy.
 * @param {Object} [options] Options object with optional properties:
 *   <li>`addG` {Boolean} Add flag g while copying the regex.
 *   <li>`addY` {Boolean} Add flag y while copying the regex.
 *   <li>`removeG` {Boolean} Remove flag g while copying the regex.
 *   <li>`removeY` {Boolean} Remove flag y while copying the regex.
 *   <li>`isInternalOnly` {Boolean} Whether the copied regex will be used only for internal
 *     operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *     skipping some operations like attaching `XRegExp.prototype` properties.
 * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
 */
    function copyRegex(regex, options) {
        if (!XRegExp.isRegExp(regex)) {
            throw new TypeError('Type RegExp expected');
        }

        var xData = regex[REGEX_DATA] || {},
            flags = getNativeFlags(regex),
            flagsToAdd = '',
            flagsToRemove = '',
            xregexpSource = null,
            xregexpFlags = null;

        options = options || {};

        if (options.removeG) {flagsToRemove += 'g';}
        if (options.removeY) {flagsToRemove += 'y';}
        if (flagsToRemove) {
            flags = nativ.replace.call(flags, new RegExp('[' + flagsToRemove + ']+', 'g'), '');
        }

        if (options.addG) {flagsToAdd += 'g';}
        if (options.addY) {flagsToAdd += 'y';}
        if (flagsToAdd) {
            flags = clipDuplicates(flags + flagsToAdd);
        }

        if (!options.isInternalOnly) {
            if (xData.source !== undefined) {
                xregexpSource = xData.source;
            }
            // null or undefined; don't want to add to `flags` if the previous value was null, since
            // that indicates we're not tracking original precompilation flags
            if (xData.flags != null) {
                // Flags are only added for non-internal regexes by `XRegExp.globalize`. Flags are
                // never removed for non-internal regexes, so don't need to handle it
                xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags;
            }
        }

        // Augment with `XRegExp.prototype` properties, but use the native `RegExp` constructor to
        // avoid searching for special tokens. That would be wrong for regexes constructed by
        // `RegExp`, and unnecessary for regexes constructed by `XRegExp` because the regex has
        // already undergone the translation to native regex syntax
        regex = augment(
            new RegExp(regex.source, flags),
            hasNamedCapture(regex) ? xData.captureNames.slice(0) : null,
            xregexpSource,
            xregexpFlags,
            options.isInternalOnly
        );

        return regex;
    }

/**
 * Converts hexadecimal to decimal.
 *
 * @private
 * @param {String} hex
 * @returns {Number}
 */
    function dec(hex) {
        return parseInt(hex, 16);
    }

/**
 * Returns native `RegExp` flags used by a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {String} Native flags in use.
 */
    function getNativeFlags(regex) {
        return hasFlagsProp ?
            regex.flags :
            // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or
            // concatenation with an empty string) allows this to continue working predictably when
            // `XRegExp.proptotype.toString` is overriden
            nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1];
    }

/**
 * Determines whether a regex has extended instance data used to track capture names.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {Boolean} Whether the regex uses named capture.
 */
    function hasNamedCapture(regex) {
        return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
    }

/**
 * Converts decimal to hexadecimal.
 *
 * @private
 * @param {Number|String} dec
 * @returns {String}
 */
    function hex(dec) {
        return parseInt(dec, 10).toString(16);
    }

/**
 * Returns the first index at which a given value can be found in an array.
 *
 * @private
 * @param {Array} array Array to search.
 * @param {*} value Value to locate in the array.
 * @returns {Number} Zero-based index at which the item is found, or -1.
 */
    function indexOf(array, value) {
        var len = array.length, i;

        for (i = 0; i < len; ++i) {
            if (array[i] === value) {
                return i;
            }
        }

        return -1;
    }

/**
 * Determines whether a value is of the specified type, by resolving its internal [[Class]].
 *
 * @private
 * @param {*} value Object to check.
 * @param {String} type Type to check for, in TitleCase.
 * @returns {Boolean} Whether the object matches the type.
 */
    function isType(value, type) {
        return toString.call(value) === '[object ' + type + ']';
    }

/**
 * Checks whether the next nonignorable token after the specified position is a quantifier.
 *
 * @private
 * @param {String} pattern Pattern to search within.
 * @param {Number} pos Index in `pattern` to search at.
 * @param {String} flags Flags used by the pattern.
 * @returns {Boolean} Whether the next token is a quantifier.
 */
    function isQuantifierNext(pattern, pos, flags) {
        return nativ.test.call(
            flags.indexOf('x') > -1 ?
                // Ignore any leading whitespace, line comments, and inline comments
                /^(?:\s+|#.*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ :
                // Ignore any leading inline comments
                /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
            pattern.slice(pos)
        );
    }

/**
 * Pads the provided string with as many leading zeros as needed to get to length 4. Used to produce
 * fixed-length hexadecimal values.
 *
 * @private
 * @param {String} str
 * @returns {String}
 */
    function pad4(str) {
        while (str.length < 4) {
            str = '0' + str;
        }
        return str;
    }

/**
 * Checks for flag-related errors, and strips/applies flags in a leading mode modifier. Offloads
 * the flag preparation logic from the `XRegExp` constructor.
 *
 * @private
 * @param {String} pattern Regex pattern, possibly with a leading mode modifier.
 * @param {String} flags Any combination of flags.
 * @returns {Object} Object with properties `pattern` and `flags`.
 */
    function prepareFlags(pattern, flags) {
        var i;

        // Recent browsers throw on duplicate flags, so copy this behavior for nonnative flags
        if (clipDuplicates(flags) !== flags) {
            throw new SyntaxError('Invalid duplicate regex flag ' + flags);
        }

        // Strip and apply a leading mode modifier with any combination of flags except g or y
        pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function($0, $1) {
            if (nativ.test.call(/[gy]/, $1)) {
                throw new SyntaxError('Cannot use flag g or y in mode modifier ' + $0);
            }
            // Allow duplicate flags within the mode modifier
            flags = clipDuplicates(flags + $1);
            return '';
        });

        // Throw on unknown native or nonnative flags
        for (i = 0; i < flags.length; ++i) {
            if (!registeredFlags[flags.charAt(i)]) {
                throw new SyntaxError('Unknown regex flag ' + flags.charAt(i));
            }
        }

        return {
            pattern: pattern,
            flags: flags
        };
    }

/**
 * Prepares an options object from the given value.
 *
 * @private
 * @param {String|Object} value Value to convert to an options object.
 * @returns {Object} Options object.
 */
    function prepareOptions(value) {
        var options = {};

        if (isType(value, 'String')) {
            XRegExp.forEach(value, /[^\s,]+/, function(match) {
                options[match] = true;
            });

            return options;
        }

        return value;
    }

/**
 * Registers a flag so it doesn't throw an 'unknown flag' error.
 *
 * @private
 * @param {String} flag Single-character flag to register.
 */
    function registerFlag(flag) {
        if (!/^[\w$]$/.test(flag)) {
            throw new Error('Flag must be a single character A-Za-z0-9_$');
        }

        registeredFlags[flag] = true;
    }

/**
 * Runs built-in and custom regex syntax tokens in reverse insertion order at the specified
 * position, until a match is found.
 *
 * @private
 * @param {String} pattern Original pattern from which an XRegExp object is being built.
 * @param {String} flags Flags being used to construct the regex.
 * @param {Number} pos Position to search for tokens within `pattern`.
 * @param {Number} scope Regex scope to apply: 'default' or 'class'.
 * @param {Object} context Context object to use for token handler functions.
 * @returns {Object} Object with properties `matchLength`, `output`, and `reparse`; or `null`.
 */
    function runTokens(pattern, flags, pos, scope, context) {
        var i = tokens.length,
            leadChar = pattern.charAt(pos),
            result = null,
            match,
            t;

        // Run in reverse insertion order
        while (i--) {
            t = tokens[i];
            if (
                (t.leadChar && t.leadChar !== leadChar) ||
                (t.scope !== scope && t.scope !== 'all') ||
                (t.flag && flags.indexOf(t.flag) === -1)
            ) {
                continue;
            }

            match = XRegExp.exec(pattern, t.regex, pos, 'sticky');
            if (match) {
                result = {
                    matchLength: match[0].length,
                    output: t.handler.call(context, match, scope, flags),
                    reparse: t.reparse
                };
                // Finished with token tests
                break;
            }
        }

        return result;
    }

/**
 * Enables or disables implicit astral mode opt-in. When enabled, flag A is automatically added to
 * all new regexes created by XRegExp. This causes an error to be thrown when creating regexes if
 * the Unicode Base addon is not available, since flag A is registered by that addon.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */
    function setAstral(on) {
        features.astral = on;
    }

/**
 * Enables or disables native method overrides.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */
    function setNatives(on) {
        RegExp.prototype.exec = (on ? fixed : nativ).exec;
        RegExp.prototype.test = (on ? fixed : nativ).test;
        String.prototype.match = (on ? fixed : nativ).match;
        String.prototype.replace = (on ? fixed : nativ).replace;
        String.prototype.split = (on ? fixed : nativ).split;

        features.natives = on;
    }

/**
 * Returns the object, or throws an error if it is `null` or `undefined`. This is used to follow
 * the ES5 abstract operation `ToObject`.
 *
 * @private
 * @param {*} value Object to check and return.
 * @returns {*} The provided object.
 */
    function toObject(value) {
        // null or undefined
        if (value == null) {
            throw new TypeError('Cannot convert null or undefined to object');
        }

        return value;
    }

/* ==============================
 * Constructor
 * ============================== */

/**
 * Creates an extended regular expression object for matching text with a pattern. Differs from a
 * native regular expression in that additional syntax and flags are supported. The returned object
 * is in fact a native `RegExp` and works with all native methods.
 *
 * @class XRegExp
 * @constructor
 * @param {String|RegExp} pattern Regex pattern string, or an existing regex object to copy.
 * @param {String} [flags] Any combination of flags.
 *   Native flags:
 *     <li>`g` - global
 *     <li>`i` - ignore case
 *     <li>`m` - multiline anchors
 *     <li>`u` - unicode (ES6)
 *     <li>`y` - sticky (Firefox 3+, ES6)
 *   Additional XRegExp flags:
 *     <li>`n` - explicit capture
 *     <li>`s` - dot matches all (aka singleline)
 *     <li>`x` - free-spacing and line comments (aka extended)
 *     <li>`A` - astral (requires the Unicode Base addon)
 *   Flags cannot be provided when constructing one `RegExp` from another.
 * @returns {RegExp} Extended regular expression object.
 * @example
 *
 * // With named capture and flag x
 * XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
 *          (?<month> [0-9]{2} ) -?  # month \n\
 *          (?<day>   [0-9]{2} )     # day   ', 'x');
 *
 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
 * // have fresh `lastIndex` properties (set to zero).
 * XRegExp(/regex/);
 */
    function XRegExp(pattern, flags) {
        var context = {
                hasNamedCapture: false,
                captureNames: []
            },
            scope = defaultScope,
            output = '',
            pos = 0,
            result,
            token,
            generated,
            appliedPattern,
            appliedFlags;

        if (XRegExp.isRegExp(pattern)) {
            if (flags !== undefined) {
                throw new TypeError('Cannot supply flags when copying a RegExp');
            }
            return copyRegex(pattern);
        }

        // Copy the argument behavior of `RegExp`
        pattern = pattern === undefined ? '' : String(pattern);
        flags = flags === undefined ? '' : String(flags);

        if (XRegExp.isInstalled('astral') && flags.indexOf('A') === -1) {
            // This causes an error to be thrown if the Unicode Base addon is not available
            flags += 'A';
        }

        if (!patternCache[pattern]) {
            patternCache[pattern] = {};
        }

        if (!patternCache[pattern][flags]) {
            // Check for flag-related errors, and strip/apply flags in a leading mode modifier
            result = prepareFlags(pattern, flags);
            appliedPattern = result.pattern;
            appliedFlags = result.flags;

            // Use XRegExp's tokens to translate the pattern to a native regex pattern.
            // `appliedPattern.length` may change on each iteration if tokens use `reparse`
            while (pos < appliedPattern.length) {
                do {
                    // Check for custom tokens at the current position
                    result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
                    // If the matched token used the `reparse` option, splice its output into the
                    // pattern before running tokens again at the same position
                    if (result && result.reparse) {
                        appliedPattern = appliedPattern.slice(0, pos) +
                            result.output +
                            appliedPattern.slice(pos + result.matchLength);
                    }
                } while (result && result.reparse);

                if (result) {
                    output += result.output;
                    pos += (result.matchLength || 1);
                } else {
                    // Get the native token at the current position
                    token = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, 'sticky')[0];
                    output += token;
                    pos += token.length;
                    if (token === '[' && scope === defaultScope) {
                        scope = classScope;
                    } else if (token === ']' && scope === classScope) {
                        scope = defaultScope;
                    }
                }
            }

            patternCache[pattern][flags] = {
                pattern: output,
                // Strip all but native flags
                flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ''),
                // `context.captureNames` has an item for each capturing group, even if unnamed
                captures: context.hasNamedCapture ? context.captureNames : null
            };
        }

        generated = patternCache[pattern][flags];
        return augment(
            new RegExp(generated.pattern, generated.flags),
            generated.captures,
            pattern,
            flags
        );
    };

// Add `RegExp.prototype` to the prototype chain
    XRegExp.prototype = new RegExp();

/* ==============================
 * Public properties
 * ============================== */

/**
 * The XRegExp version number as a string containing three dot-separated parts. For example,
 * '2.0.0-beta-3'.
 *
 * @static
 * @memberOf XRegExp
 * @type String
 */
    XRegExp.version = '3.1.0';

/* ==============================
 * Public methods
 * ============================== */

// Intentionally undocumented
    XRegExp._hasNativeFlag = hasNativeFlag;

/**
 * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
 * create XRegExp addons. If more than one token can match the same string, the last added wins.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex object that matches the new token.
 * @param {Function} handler Function that returns a new pattern string (using native regex syntax)
 *   to replace the matched token within all future XRegExp regexes. Has access to persistent
 *   properties of the regex being built, through `this`. Invoked with three arguments:
 *   <li>The match array, with named backreference properties.
 *   <li>The regex scope where the match was found: 'default' or 'class'.
 *   <li>The flags used by the regex, including any flags in a leading mode modifier.
 *   The handler function becomes part of the XRegExp construction process, so be careful not to
 *   construct XRegExps within the function or you will trigger infinite recursion.
 * @param {Object} [options] Options object with optional properties:
 *   <li>`scope` {String} Scope where the token applies: 'default', 'class', or 'all'.
 *   <li>`flag` {String} Single-character flag that triggers the token. This also registers the
 *     flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
 *   <li>`optionalFlags` {String} Any custom flags checked for within the token `handler` that are
 *     not required to trigger the token. This registers the flags, to prevent XRegExp from
 *     throwing an 'unknown flag' error when any of the flags are used.
 *   <li>`reparse` {Boolean} Whether the `handler` function's output should not be treated as
 *     final, and instead be reparseable by other tokens (including the current token). Allows
 *     token chaining or deferring.
 *   <li>`leadChar` {String} Single character that occurs at the beginning of any successful match
 *     of the token (not always applicable). This doesn't change the behavior of the token unless
 *     you provide an erroneous value. However, providing it can increase the token's performance
 *     since the token can be skipped at any positions where this character doesn't appear.
 * @example
 *
 * // Basic usage: Add \a for the ALERT control code
 * XRegExp.addToken(
 *   /\\a/,
 *   function() {return '\\x07';},
 *   {scope: 'all'}
 * );
 * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
 *
 * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
 * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
 * // character classes only)
 * XRegExp.addToken(
 *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
 *   function(match) {return match[1] + (match[2] ? '' : '?');},
 *   {flag: 'U'}
 * );
 * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
 * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
 */
    XRegExp.addToken = function(regex, handler, options) {
        options = options || {};
        var optionalFlags = options.optionalFlags, i;

        if (options.flag) {
            registerFlag(options.flag);
        }

        if (optionalFlags) {
            optionalFlags = nativ.split.call(optionalFlags, '');
            for (i = 0; i < optionalFlags.length; ++i) {
                registerFlag(optionalFlags[i]);
            }
        }

        // Add to the private list of syntax tokens
        tokens.push({
            regex: copyRegex(regex, {
                addG: true,
                addY: hasNativeY,
                isInternalOnly: true
            }),
            handler: handler,
            scope: options.scope || defaultScope,
            flag: options.flag,
            reparse: options.reparse,
            leadChar: options.leadChar
        });

        // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
        // flags might now produce different results
        XRegExp.cache.flush('patterns');
    };

/**
 * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
 * the same pattern and flag combination, the cached copy of the regex is returned.
 *
 * @memberOf XRegExp
 * @param {String} pattern Regex pattern string.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Cached XRegExp object.
 * @example
 *
 * while (match = XRegExp.cache('.', 'gs').exec(str)) {
 *   // The regex is compiled once only
 * }
 */
    XRegExp.cache = function(pattern, flags) {
        if (!regexCache[pattern]) {
            regexCache[pattern] = {};
        }
        return regexCache[pattern][flags] || (
            regexCache[pattern][flags] = XRegExp(pattern, flags)
        );
    };

// Intentionally undocumented
    XRegExp.cache.flush = function(cacheName) {
        if (cacheName === 'patterns') {
            // Flush the pattern cache used by the `XRegExp` constructor
            patternCache = {};
        } else {
            // Flush the regex cache populated by `XRegExp.cache`
            regexCache = {};
        }
    };

/**
 * Escapes any regular expression metacharacters, for use when matching literal strings. The result
 * can safely be used at any point within a regex that uses any flags.
 *
 * @memberOf XRegExp
 * @param {String} str String to escape.
 * @returns {String} String with regex metacharacters escaped.
 * @example
 *
 * XRegExp.escape('Escaped? <.>');
 * // -> 'Escaped\?\ <\.>'
 */
    XRegExp.escape = function(str) {
        return nativ.replace.call(toObject(str), /[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    };

/**
 * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
 * regex uses named capture, named backreference properties are included on the match array.
 * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
 * must start at the specified position only. The `lastIndex` property of the provided regex is not
 * used, but is updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.exec` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Array} Match array with named backreference properties, or `null`.
 * @example
 *
 * // Basic use, with named backreference
 * var match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
 * match.hex; // -> '2620'
 *
 * // With pos and sticky, in a loop
 * var pos = 2, result = [], match;
 * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
 *   result.push(match[1]);
 *   pos = match.index + match[0].length;
 * }
 * // result -> ['2', '3', '4']
 */
    XRegExp.exec = function(str, regex, pos, sticky) {
        var cacheKey = 'g',
            addY = false,
            match,
            r2;

        addY = hasNativeY && !!(sticky || (regex.sticky && sticky !== false));
        if (addY) {
            cacheKey += 'y';
        }

        regex[REGEX_DATA] = regex[REGEX_DATA] || {};

        // Shares cached copies with `XRegExp.match`/`replace`
        r2 = regex[REGEX_DATA][cacheKey] || (
            regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
                addG: true,
                addY: addY,
                removeY: sticky === false,
                isInternalOnly: true
            })
        );

        r2.lastIndex = pos = pos || 0;

        // Fixed `exec` required for `lastIndex` fix, named backreferences, etc.
        match = fixed.exec.call(r2, str);

        if (sticky && match && match.index !== pos) {
            match = null;
        }

        if (regex.global) {
            regex.lastIndex = match ? r2.lastIndex : 0;
        }

        return match;
    };

/**
 * Executes a provided function once per regex match. Searches always start at the beginning of the
 * string and continue until the end, regardless of the state of the regex's `global` property and
 * initial `lastIndex`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Function} callback Function to execute for each match. Invoked with four arguments:
 *   <li>The match array, with named backreference properties.
 *   <li>The zero-based match index.
 *   <li>The string being traversed.
 *   <li>The regex object being used to traverse the string.
 * @example
 *
 * // Extracts every other digit from a string
 * var evens = [];
 * XRegExp.forEach('1a2345', /\d/, function(match, i) {
 *   if (i % 2) evens.push(+match[0]);
 * });
 * // evens -> [2, 4]
 */
    XRegExp.forEach = function(str, regex, callback) {
        var pos = 0,
            i = -1,
            match;

        while ((match = XRegExp.exec(str, regex, pos))) {
            // Because `regex` is provided to `callback`, the function could use the deprecated/
            // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since
            // `XRegExp.exec` doesn't use `lastIndex` to set the search position, this can't lead
            // to an infinite loop, at least. Actually, because of the way `XRegExp.exec` caches
            // globalized versions of regexes, mutating the regex will not have any effect on the
            // iteration or matched strings, which is a nice side effect that brings extra safety
            callback(match, ++i, str, regex);

            pos = match.index + (match[0].length || 1);
        }
    };

/**
 * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
 * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
 * regexes are not recompiled using XRegExp syntax.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex to globalize.
 * @returns {RegExp} Copy of the provided regex with flag `g` added.
 * @example
 *
 * var globalCopy = XRegExp.globalize(/regex/);
 * globalCopy.global; // -> true
 */
    XRegExp.globalize = function(regex) {
        return copyRegex(regex, {addG: true});
    };

/**
 * Installs optional features according to the specified options. Can be undone using
 * `XRegExp.uninstall`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.install({
 *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
 *   astral: true,
 *
 *   // DEPRECATED: Overrides native regex methods with fixed/extended versions
 *   natives: true
 * });
 *
 * // With an options string
 * XRegExp.install('astral natives');
 */
    XRegExp.install = function(options) {
        options = prepareOptions(options);

        if (!features.astral && options.astral) {
            setAstral(true);
        }

        if (!features.natives && options.natives) {
            setNatives(true);
        }
    };

/**
 * Checks whether an individual optional feature is installed.
 *
 * @memberOf XRegExp
 * @param {String} feature Name of the feature to check. One of:
 *   <li>`astral`
 *   <li>`natives`
 * @returns {Boolean} Whether the feature is installed.
 * @example
 *
 * XRegExp.isInstalled('astral');
 */
    XRegExp.isInstalled = function(feature) {
        return !!(features[feature]);
    };

/**
 * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
 * created in another frame, when `instanceof` and `constructor` checks would fail.
 *
 * @memberOf XRegExp
 * @param {*} value Object to check.
 * @returns {Boolean} Whether the object is a `RegExp` object.
 * @example
 *
 * XRegExp.isRegExp('string'); // -> false
 * XRegExp.isRegExp(/regex/i); // -> true
 * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
 * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
 */
    XRegExp.isRegExp = function(value) {
        return toString.call(value) === '[object RegExp]';
        //return isType(value, 'RegExp');
    };

/**
 * Returns the first matched string, or in global mode, an array containing all matched strings.
 * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
 * the result types you actually want (string instead of `exec`-style array in match-first mode,
 * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
 * you override flag g and ignore `lastIndex`, and fixes browser bugs.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {String} [scope='one'] Use 'one' to return the first match as a string. Use 'all' to
 *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
 *   `scope` is 'all'.
 * @returns {String|Array} In match-first mode: First match as a string, or `null`. In match-all
 *   mode: Array of all matched strings, or an empty array.
 * @example
 *
 * // Match first
 * XRegExp.match('abc', /\w/); // -> 'a'
 * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
 * XRegExp.match('abc', /x/g, 'one'); // -> null
 *
 * // Match all
 * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /x/, 'all'); // -> []
 */
    XRegExp.match = function(str, regex, scope) {
        var global = (regex.global && scope !== 'one') || scope === 'all',
            cacheKey = ((global ? 'g' : '') + (regex.sticky ? 'y' : '')) || 'noGY',
            result,
            r2;

        regex[REGEX_DATA] = regex[REGEX_DATA] || {};

        // Shares cached copies with `XRegExp.exec`/`replace`
        r2 = regex[REGEX_DATA][cacheKey] || (
            regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
                addG: !!global,
                removeG: scope === 'one',
                isInternalOnly: true
            })
        );

        result = nativ.match.call(toObject(str), r2);

        if (regex.global) {
            regex.lastIndex = (
                (scope === 'one' && result) ?
                    // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
                    (result.index + result[0].length) : 0
            );
        }

        return global ? (result || []) : (result && result[0]);
    };

/**
 * Retrieves the matches from searching a string using a chain of regexes that successively search
 * within previous matches. The provided `chain` array can contain regexes and or objects with
 * `regex` and `backref` properties. When a backreference is specified, the named or numbered
 * backreference is passed forward to the next regex or returned.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} chain Regexes that each search for matches within preceding results.
 * @returns {Array} Matches by the last regex in the chain, or an empty array.
 * @example
 *
 * // Basic usage; matches numbers within <b> tags
 * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
 *   XRegExp('(?is)<b>.*?</b>'),
 *   /\d+/
 * ]);
 * // -> ['2', '4', '56']
 *
 * // Passing forward and returning specific backreferences
 * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
 *         <a href="http://www.google.com/">Google</a>';
 * XRegExp.matchChain(html, [
 *   {regex: /<a href="([^"]+)">/i, backref: 1},
 *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
 * ]);
 * // -> ['xregexp.com', 'www.google.com']
 */
    XRegExp.matchChain = function(str, chain) {
        return (function recurseChain(values, level) {
            var item = chain[level].regex ? chain[level] : {regex: chain[level]},
                matches = [],
                addMatch = function(match) {
                    if (item.backref) {
                        /* Safari 4.0.5 (but not 5.0.5+) inappropriately uses sparse arrays to hold
                         * the `undefined`s for backreferences to nonparticipating capturing
                         * groups. In such cases, a `hasOwnProperty` or `in` check on its own would
                         * inappropriately throw the exception, so also check if the backreference
                         * is a number that is within the bounds of the array.
                         */
                        if (!(match.hasOwnProperty(item.backref) || +item.backref < match.length)) {
                            throw new ReferenceError('Backreference to undefined group: ' + item.backref);
                        }

                        matches.push(match[item.backref] || '');
                    } else {
                        matches.push(match[0]);
                    }
                },
                i;

            for (i = 0; i < values.length; ++i) {
                XRegExp.forEach(values[i], item.regex, addMatch);
            }

            return ((level === chain.length - 1) || !matches.length) ?
                matches :
                recurseChain(matches, level + 1);
        }([str], 0));
    };

/**
 * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
 * or regex, and the replacement can be a string or a function to be called for each match. To
 * perform a global search and replace, use the optional `scope` argument or include flag g if using
 * a regex. Replacement strings can use `${n}` for named and numbered backreferences. Replacement
 * functions can use named backreferences via `arguments[0].name`. Also fixes browser bugs compared
 * to the native `String.prototype.replace` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 *   Replacement strings can include special replacement syntax:
 *     <li>$$ - Inserts a literal $ character.
 *     <li>$&, $0 - Inserts the matched substring.
 *     <li>$` - Inserts the string that precedes the matched substring (left context).
 *     <li>$' - Inserts the string that follows the matched substring (right context).
 *     <li>$n, $nn - Where n/nn are digits referencing an existent capturing group, inserts
 *       backreference n/nn.
 *     <li>${n} - Where n is a name or any number of digits that reference an existent capturing
 *       group, inserts backreference n.
 *   Replacement functions are invoked with three or more arguments:
 *     <li>The matched substring (corresponds to $& above). Named backreferences are accessible as
 *       properties of this first argument.
 *     <li>0..n arguments, one for each backreference (corresponding to $1, $2, etc. above).
 *     <li>The zero-based index of the match within the total search string.
 *     <li>The total string being searched.
 * @param {String} [scope='one'] Use 'one' to replace the first match only, or 'all'. If not
 *   explicitly specified and using a regex with flag g, `scope` is 'all'.
 * @returns {String} New string with one or all matches replaced.
 * @example
 *
 * // Regex search, using named backreferences in replacement string
 * var name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
 * XRegExp.replace('John Smith', name, '${last}, ${first}');
 * // -> 'Smith, John'
 *
 * // Regex search, using named backreferences in replacement function
 * XRegExp.replace('John Smith', name, function(match) {
 *   return match.last + ', ' + match.first;
 * });
 * // -> 'Smith, John'
 *
 * // String search, with replace-all
 * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
 * // -> 'XRegExp builds XRegExps'
 */
    XRegExp.replace = function(str, search, replacement, scope) {
        var isRegex = XRegExp.isRegExp(search),
            global = (search.global && scope !== 'one') || scope === 'all',
            cacheKey = ((global ? 'g' : '') + (search.sticky ? 'y' : '')) || 'noGY',
            s2 = search,
            result;

        if (isRegex) {
            search[REGEX_DATA] = search[REGEX_DATA] || {};

            // Shares cached copies with `XRegExp.exec`/`match`. Since a copy is used, `search`'s
            // `lastIndex` isn't updated *during* replacement iterations
            s2 = search[REGEX_DATA][cacheKey] || (
                search[REGEX_DATA][cacheKey] = copyRegex(search, {
                    addG: !!global,
                    removeG: scope === 'one',
                    isInternalOnly: true
                })
            );
        } else if (global) {
            s2 = new RegExp(XRegExp.escape(String(search)), 'g');
        }

        // Fixed `replace` required for named backreferences, etc.
        result = fixed.replace.call(toObject(str), s2, replacement);

        if (isRegex && search.global) {
            // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
            search.lastIndex = 0;
        }

        return result;
    };

/**
 * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
 * array of replacement details. Later replacements operate on the output of earlier replacements.
 * Replacement details are accepted as an array with a regex or string to search for, the
 * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
 * replacement text syntax, which supports named backreference properties via `${name}`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} replacements Array of replacement detail arrays.
 * @returns {String} New string with all replacements.
 * @example
 *
 * str = XRegExp.replaceEach(str, [
 *   [XRegExp('(?<name>a)'), 'z${name}'],
 *   [/b/gi, 'y'],
 *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
 *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
 *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
 *   [/f/g, function($0) {
 *     return $0.toUpperCase();
 *   }]
 * ]);
 */
    XRegExp.replaceEach = function(str, replacements) {
        var i, r;

        for (i = 0; i < replacements.length; ++i) {
            r = replacements[i];
            str = XRegExp.replace(str, r[0], r[1], r[2]);
        }

        return str;
    };

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * XRegExp.split('a b c', ' ');
 * // -> ['a', 'b', 'c']
 *
 * // With limit
 * XRegExp.split('a b c', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', '..']
 */
    XRegExp.split = function(str, separator, limit) {
        return fixed.split.call(toObject(str), separator, limit);
    };

/**
 * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
 * `sticky` arguments specify the search start position, and whether the match must start at the
 * specified position only. The `lastIndex` property of the provided regex is not used, but is
 * updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.test` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * // Basic use
 * XRegExp.test('abc', /c/); // -> true
 *
 * // With pos and sticky
 * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
 * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
 */
    XRegExp.test = function(str, regex, pos, sticky) {
        // Do this the easy way :-)
        return !!XRegExp.exec(str, regex, pos, sticky);
    };

/**
 * Uninstalls optional features according to the specified options. All optional features start out
 * uninstalled, so this is used to undo the actions of `XRegExp.install`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.uninstall({
 *   // Disables support for astral code points in Unicode addons
 *   astral: true,
 *
 *   // DEPRECATED: Restores native regex methods
 *   natives: true
 * });
 *
 * // With an options string
 * XRegExp.uninstall('astral natives');
 */
    XRegExp.uninstall = function(options) {
        options = prepareOptions(options);

        if (features.astral && options.astral) {
            setAstral(false);
        }

        if (features.natives && options.natives) {
            setNatives(false);
        }
    };

/**
 * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
 * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
 * Backreferences in provided regex objects are automatically renumbered to work correctly within
 * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
 * `flags` argument.
 *
 * @memberOf XRegExp
 * @param {Array} patterns Regexes and strings to combine.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Union of the provided regexes and strings.
 * @example
 *
 * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
 * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
 */
    XRegExp.union = function(patterns, flags) {
        var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
            output = [],
            numCaptures = 0,
            numPriorCaptures,
            captureNames,
            pattern,
            rewrite = function(match, paren, backref) {
                var name = captureNames[numCaptures - numPriorCaptures];

                // Capturing group
                if (paren) {
                    ++numCaptures;
                    // If the current capture has a name, preserve the name
                    if (name) {
                        return '(?<' + name + '>';
                    }
                // Backreference
                } else if (backref) {
                    // Rewrite the backreference
                    return '\\' + (+backref + numPriorCaptures);
                }

                return match;
            },
            i;

        if (!(isType(patterns, 'Array') && patterns.length)) {
            throw new TypeError('Must provide a nonempty array of patterns to merge');
        }

        for (i = 0; i < patterns.length; ++i) {
            pattern = patterns[i];

            if (XRegExp.isRegExp(pattern)) {
                numPriorCaptures = numCaptures;
                captureNames = (pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames) || [];

                // Rewrite backreferences. Passing to XRegExp dies on octals and ensures patterns
                // are independently valid; helps keep this simple. Named captures are put back
                output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite));
            } else {
                output.push(XRegExp.escape(pattern));
            }
        }

        return XRegExp(output.join('|'), flags);
    };

/* ==============================
 * Fixed/extended native methods
 * ============================== */

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `RegExp.prototype.exec`. Calling `XRegExp.install('natives')` uses this to
 * override the native method. Use via `XRegExp.exec` without overriding natives.
 *
 * @private
 * @param {String} str String to search.
 * @returns {Array} Match array with named backreference properties, or `null`.
 */
    fixed.exec = function(str) {
        var origLastIndex = this.lastIndex,
            match = nativ.exec.apply(this, arguments),
            name,
            r2,
            i;

        if (match) {
            // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating
            // capturing groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of
            // older IEs. IE 9 in standards mode follows the spec
            if (!correctExecNpcg && match.length > 1 && indexOf(match, '') > -1) {
                r2 = copyRegex(this, {
                    removeG: true,
                    isInternalOnly: true
                });
                // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                // matching due to characters outside the match
                nativ.replace.call(String(str).slice(match.index), r2, function() {
                    var len = arguments.length, i;
                    // Skip index 0 and the last 2
                    for (i = 1; i < len - 2; ++i) {
                        if (arguments[i] === undefined) {
                            match[i] = undefined;
                        }
                    }
                });
            }

            // Attach named capture properties
            if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
                // Skip index 0
                for (i = 1; i < match.length; ++i) {
                    name = this[REGEX_DATA].captureNames[i - 1];
                    if (name) {
                        match[name] = match[i];
                    }
                }
            }

            // Fix browsers that increment `lastIndex` after zero-length matches
            if (this.global && !match[0].length && (this.lastIndex > match.index)) {
                this.lastIndex = match.index;
            }
        }

        if (!this.global) {
            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
            this.lastIndex = origLastIndex;
        }

        return match;
    };

/**
 * Fixes browser bugs in the native `RegExp.prototype.test`. Calling `XRegExp.install('natives')`
 * uses this to override the native method.
 *
 * @private
 * @param {String} str String to search.
 * @returns {Boolean} Whether the regex matched the provided value.
 */
    fixed.test = function(str) {
        // Do this the easy way :-)
        return !!fixed.exec.call(this, str);
    };

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `String.prototype.match`. Calling `XRegExp.install('natives')` uses this to
 * override the native method.
 *
 * @private
 * @param {RegExp|*} regex Regex to search with. If not a regex object, it is passed to `RegExp`.
 * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
 *   the result of calling `regex.exec(this)`.
 */
    fixed.match = function(regex) {
        var result;

        if (!XRegExp.isRegExp(regex)) {
            // Use the native `RegExp` rather than `XRegExp`
            regex = new RegExp(regex);
        } else if (regex.global) {
            result = nativ.match.apply(this, arguments);
            // Fixes IE bug
            regex.lastIndex = 0;

            return result;
        }

        return fixed.exec.call(regex, toObject(this));
    };

/**
 * Adds support for `${n}` tokens for named and numbered backreferences in replacement text, and
 * provides named backreferences to replacement functions as `arguments[0].name`. Also fixes browser
 * bugs in replacement text syntax when performing a replacement using a nonregex search value, and
 * the value of a replacement regex's `lastIndex` property during replacement iterations and upon
 * completion. Calling `XRegExp.install('natives')` uses this to override the native method. Note
 * that this doesn't support SpiderMonkey's proprietary third (`flags`) argument. Use via
 * `XRegExp.replace` without overriding natives.
 *
 * @private
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 * @returns {String} New string with one or all matches replaced.
 */
    fixed.replace = function(search, replacement) {
        var isRegex = XRegExp.isRegExp(search),
            origLastIndex,
            captureNames,
            result;

        if (isRegex) {
            if (search[REGEX_DATA]) {
                captureNames = search[REGEX_DATA].captureNames;
            }
            // Only needed if `search` is nonglobal
            origLastIndex = search.lastIndex;
        } else {
            search += ''; // Type-convert
        }

        // Don't use `typeof`; some older browsers return 'function' for regex objects
        if (isType(replacement, 'Function')) {
            // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
            // functions isn't type-converted to a string
            result = nativ.replace.call(String(this), search, function() {
                var args = arguments, i;
                if (captureNames) {
                    // Change the `arguments[0]` string primitive to a `String` object that can
                    // store properties. This really does need to use `String` as a constructor
                    args[0] = new String(args[0]);
                    // Store named backreferences on the first argument
                    for (i = 0; i < captureNames.length; ++i) {
                        if (captureNames[i]) {
                            args[0][captureNames[i]] = args[i + 1];
                        }
                    }
                }
                // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox,
                // Safari bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
                if (isRegex && search.global) {
                    search.lastIndex = args[args.length - 2] + args[0].length;
                }
                // ES6 specs the context for replacement functions as `undefined`
                return replacement.apply(undefined, args);
            });
        } else {
            // Ensure that the last value of `args` will be a string when given nonstring `this`,
            // while still throwing on null or undefined context
            result = nativ.replace.call(this == null ? this : String(this), search, function() {
                // Keep this function's `arguments` available through closure
                var args = arguments;
                return nativ.replace.call(String(replacement), replacementToken, function($0, $1, $2) {
                    var n;
                    // Named or numbered backreference with curly braces
                    if ($1) {
                        // XRegExp behavior for `${n}`:
                        // 1. Backreference to numbered capture, if `n` is an integer. Use `0` for
                        //    for the entire match. Any number of leading zeros may be used.
                        // 2. Backreference to named capture `n`, if it exists and is not an
                        //    integer overridden by numbered capture. In practice, this does not
                        //    overlap with numbered capture since XRegExp does not allow named
                        //    capture to use a bare integer as the name.
                        // 3. If the name or number does not refer to an existing capturing group,
                        //    it's an error.
                        n = +$1; // Type-convert; drop leading zeros
                        if (n <= args.length - 3) {
                            return args[n] || '';
                        }
                        // Groups with the same name is an error, else would need `lastIndexOf`
                        n = captureNames ? indexOf(captureNames, $1) : -1;
                        if (n < 0) {
                            throw new SyntaxError('Backreference to undefined group ' + $0);
                        }
                        return args[n + 1] || '';
                    }
                    // Else, special variable or numbered backreference without curly braces
                    if ($2 === '$') { // $$
                        return '$';
                    }
                    if ($2 === '&' || +$2 === 0) { // $&, $0 (not followed by 1-9), $00
                        return args[0];
                    }
                    if ($2 === '`') { // $` (left context)
                        return args[args.length - 1].slice(0, args[args.length - 2]);
                    }
                    if ($2 === "'") { // $' (right context)
                        return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                    }
                    // Else, numbered backreference without curly braces
                    $2 = +$2; // Type-convert; drop leading zero
                    // XRegExp behavior for `$n` and `$nn`:
                    // - Backrefs end after 1 or 2 digits. Use `${..}` for more digits.
                    // - `$1` is an error if no capturing groups.
                    // - `$10` is an error if less than 10 capturing groups. Use `${1}0` instead.
                    // - `$01` is `$1` if at least one capturing group, else it's an error.
                    // - `$0` (not followed by 1-9) and `$00` are the entire match.
                    // Native behavior, for comparison:
                    // - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
                    // - `$1` is a literal `$1` if no capturing groups.
                    // - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
                    // - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
                    // - `$0` is a literal `$0`.
                    if (!isNaN($2)) {
                        if ($2 > args.length - 3) {
                            throw new SyntaxError('Backreference to undefined group ' + $0);
                        }
                        return args[$2] || '';
                    }
                    // `$` followed by an unsupported char is an error, unlike native JS
                    throw new SyntaxError('Invalid token ' + $0);
                });
            });
        }

        if (isRegex) {
            if (search.global) {
                // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
                search.lastIndex = 0;
            } else {
                // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
                search.lastIndex = origLastIndex;
            }
        }

        return result;
    };

/**
 * Fixes browser bugs in the native `String.prototype.split`. Calling `XRegExp.install('natives')`
 * uses this to override the native method. Use via `XRegExp.split` without overriding natives.
 *
 * @private
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 */
    fixed.split = function(separator, limit) {
        if (!XRegExp.isRegExp(separator)) {
            // Browsers handle nonregex split correctly, so use the faster native method
            return nativ.split.apply(this, arguments);
        }

        var str = String(this),
            output = [],
            origLastIndex = separator.lastIndex,
            lastLastIndex = 0,
            lastLength;

        // Values for `limit`, per the spec:
        // If undefined: pow(2,32) - 1
        // If 0, Infinity, or NaN: 0
        // If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
        // If negative number: pow(2,32) - floor(abs(limit))
        // If other: Type-convert, then use the above rules
        // This line fails in very strange ways for some values of `limit` in Opera 10.5-10.63,
        // unless Opera Dragonfly is open (go figure). It works in at least Opera 9.5-10.1 and 11+
        limit = (limit === undefined ? -1 : limit) >>> 0;

        XRegExp.forEach(str, separator, function(match) {
            // This condition is not the same as `if (match[0].length)`
            if ((match.index + match[0].length) > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                }
                lastLength = match[0].length;
                lastLastIndex = match.index + lastLength;
            }
        });

        if (lastLastIndex === str.length) {
            if (!nativ.test.call(separator, '') || lastLength) {
                output.push('');
            }
        } else {
            output.push(str.slice(lastLastIndex));
        }

        separator.lastIndex = origLastIndex;
        return output.length > limit ? output.slice(0, limit) : output;
    };

/* ==============================
 * Built-in syntax/flag tokens
 * ============================== */

/*
 * Letter escapes that natively match literal characters: `\a`, `\A`, etc. These should be
 * SyntaxErrors but are allowed in web reality. XRegExp makes them errors for cross-browser
 * consistency and to reserve their syntax, but lets them be superseded by addons.
 */
    XRegExp.addToken(
        /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
        function(match, scope) {
            // \B is allowed in default scope only
            if (match[1] === 'B' && scope === defaultScope) {
                return match[0];
            }
            throw new SyntaxError('Invalid escape ' + match[0]);
        },
        {
            scope: 'all',
            leadChar: '\\'
        }
    );

/*
 * Unicode code point escape with curly braces: `\u{N..}`. `N..` is any one or more digit
 * hexadecimal number from 0-10FFFF, and can include leading zeros. Requires the native ES6 `u` flag
 * to support code points greater than U+FFFF. Avoids converting code points above U+FFFF to
 * surrogate pairs (which could be done without flag `u`), since that could lead to broken behavior
 * if you follow a `\u{N..}` token that references a code point above U+FFFF with a quantifier, or
 * if you use the same in a character class.
 */
    XRegExp.addToken(
        /\\u{([\dA-Fa-f]+)}/,
        function(match, scope, flags) {
            var code = dec(match[1]);
            if (code > 0x10FFFF) {
                throw new SyntaxError('Invalid Unicode code point ' + match[0]);
            }
            if (code <= 0xFFFF) {
                // Converting to \uNNNN avoids needing to escape the literal character and keep it
                // separate from preceding tokens
                return '\\u' + pad4(hex(code));
            }
            // If `code` is between 0xFFFF and 0x10FFFF, require and defer to native handling
            if (hasNativeU && flags.indexOf('u') > -1) {
                return match[0];
            }
            throw new SyntaxError('Cannot use Unicode code point above \\u{FFFF} without flag u');
        },
        {
            scope: 'all',
            leadChar: '\\'
        }
    );

/*
 * Empty character class: `[]` or `[^]`. This fixes a critical cross-browser syntax inconsistency.
 * Unless this is standardized (per the ES spec), regex syntax can't be accurately parsed because
 * character class endings can't be determined.
 */
    XRegExp.addToken(
        /\[(\^?)]/,
        function(match) {
            // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
            // (?!) should work like \b\B, but is unreliable in some versions of Firefox
            return match[1] ? '[\\s\\S]' : '\\b\\B';
        },
        {leadChar: '['}
    );

/*
 * Comment pattern: `(?# )`. Inline comments are an alternative to the line comments allowed in
 * free-spacing mode (flag x).
 */
    XRegExp.addToken(
        /\(\?#[^)]*\)/,
        function(match, scope, flags) {
            // Keep tokens separated unless the following token is a quantifier
            return isQuantifierNext(match.input, match.index + match[0].length, flags) ?
                '' : '(?:)';
        },
        {leadChar: '('}
    );

/*
 * Whitespace and line comments, in free-spacing mode (aka extended mode, flag x) only.
 */
    XRegExp.addToken(
        /\s+|#.*/,
        function(match, scope, flags) {
            // Keep tokens separated unless the following token is a quantifier
            return isQuantifierNext(match.input, match.index + match[0].length, flags) ?
                '' : '(?:)';
        },
        {flag: 'x'}
    );

/*
 * Dot, in dotall mode (aka singleline mode, flag s) only.
 */
    XRegExp.addToken(
        /\./,
        function() {
            return '[\\s\\S]';
        },
        {
            flag: 's',
            leadChar: '.'
        }
    );

/*
 * Named backreference: `\k<name>`. Backreference names can use the characters A-Z, a-z, 0-9, _,
 * and $ only. Also allows numbered backreferences as `\k<n>`.
 */
    XRegExp.addToken(
        /\\k<([\w$]+)>/,
        function(match) {
            // Groups with the same name is an error, else would need `lastIndexOf`
            var index = isNaN(match[1]) ? (indexOf(this.captureNames, match[1]) + 1) : +match[1],
                endIndex = match.index + match[0].length;
            if (!index || index > this.captureNames.length) {
                throw new SyntaxError('Backreference to undefined group ' + match[0]);
            }
            // Keep backreferences separate from subsequent literal numbers
            return '\\' + index + (
                endIndex === match.input.length || isNaN(match.input.charAt(endIndex)) ?
                    '' : '(?:)'
            );
        },
        {leadChar: '\\'}
    );

/*
 * Numbered backreference or octal, plus any following digits: `\0`, `\11`, etc. Octals except `\0`
 * not followed by 0-9 and backreferences to unopened capture groups throw an error. Other matches
 * are returned unaltered. IE < 9 doesn't support backreferences above `\99` in regex syntax.
 */
    XRegExp.addToken(
        /\\(\d+)/,
        function(match, scope) {
            if (
                !(
                    scope === defaultScope &&
                    /^[1-9]/.test(match[1]) &&
                    +match[1] <= this.captureNames.length
                ) &&
                match[1] !== '0'
            ) {
                throw new SyntaxError('Cannot use octal escape or backreference to undefined group ' +
                    match[0]);
            }
            return match[0];
        },
        {
            scope: 'all',
            leadChar: '\\'
        }
    );

/*
 * Named capturing group; match the opening delimiter only: `(?<name>`. Capture names can use the
 * characters A-Z, a-z, 0-9, _, and $ only. Names can't be integers. Supports Python-style
 * `(?P<name>` as an alternate syntax to avoid issues in some older versions of Opera which natively
 * supported the Python-style syntax. Otherwise, XRegExp might treat numbered backreferences to
 * Python-style named capture as octals.
 */
    XRegExp.addToken(
        /\(\?P?<([\w$]+)>/,
        function(match) {
            // Disallow bare integers as names because named backreferences are added to match
            // arrays and therefore numeric properties may lead to incorrect lookups
            if (!isNaN(match[1])) {
                throw new SyntaxError('Cannot use integer as capture name ' + match[0]);
            }
            if (match[1] === 'length' || match[1] === '__proto__') {
                throw new SyntaxError('Cannot use reserved word as capture name ' + match[0]);
            }
            if (indexOf(this.captureNames, match[1]) > -1) {
                throw new SyntaxError('Cannot use same name for multiple groups ' + match[0]);
            }
            this.captureNames.push(match[1]);
            this.hasNamedCapture = true;
            return '(';
        },
        {leadChar: '('}
    );

/*
 * Capturing group; match the opening parenthesis only. Required for support of named capturing
 * groups. Also adds explicit capture mode (flag n).
 */
    XRegExp.addToken(
        /\((?!\?)/,
        function(match, scope, flags) {
            if (flags.indexOf('n') > -1) {
                return '(?:';
            }
            this.captureNames.push(null);
            return '(';
        },
        {
            optionalFlags: 'n',
            leadChar: '('
        }
    );

/* ==============================
 * Expose XRegExp
 * ============================== */

    module.exports = XRegExp;

},{}]},{},[8])(8)
});

//pmlparser

// dev DEP pm version 2018-10-30

// temp, to hide SWF, CMR

// text = XRegExp.replace(text,/InsertSWF{(.*?)}/,'<p>deflashing to do</p>\n',"all")//processes swf, temp: to remove in prod
//
// text = XRegExp.replace(text,/InsertCMR{(.*?)}/,'<p>deCMR to do</p>\n',"all")//processes swf, temp: to remove in prod

function pmlparse(text){

// Strip critic markup

	text = XRegExp.replace(text,/{>>(.*?|\-|\:|\@)<<}/,'','all');//removes any critic markup comments, including file updates
	text = XRegExp.replace(text,/{\+\+(.*?)\+\+\}/,'','all');//removes any critic markup additions
	text = XRegExp.replace(text,/{\-\-(.*?)\-\-\}/,'','all');//removes any critic markup deletions
	text = XRegExp.replace(text,/{~~(.*?)~>(.*?)~~}/,'','all');//removes any critic markup substitutions
	text = XRegExp.replace(text,/{==(.*?)==}/,'','all');//removes any critic markup highlights




// InsertGlyph



// 	Unitary operators, expects to find, and strip, a trailing space
	text = XRegExp.replace(text,' SymbolDelta ','&Delta;','all');//writes  delta (change in) character
	text = XRegExp.replace(text,' SymbolDifferential ','d','all');//writes  delta (change in) character
	text = XRegExp.replace(text,' SymbolPlusorminus ','&plusmn;&thinsp;','all');//writes  plus or minus, and a following thin space
	text = XRegExp.replace(text,' SymbolPositive ','&plus;&thinsp;','all');//writes  plus or minus, and a following thin space
	text = XRegExp.replace(text,' SymbolNegative ','&minus;&thinsp;','all');//writes  plus or minus, and a following thin space


// 	Binary operators,expects to find, and strips, and space from before and after, then inserts non-breaking space
	text = XRegExp.replace(text,' SymbolProportion ','&nbsp;&prop;&nbsp;','all');//writes  proportion wrapped by non-breaking spaces
	text = XRegExp.replace(text,' SymbolEquivalent ','&nbsp;&equiv;&nbsp;','all');//writes  equivalent to wrapped by non-breaking spaces
	text = XRegExp.replace(text,' SymbolMultipliedby ','&nbsp;&times;&nbsp;','all');//writes  multiplication sign wrapped by non-breaking spaces
	text = XRegExp.replace(text,' SymbolMinus ','&nbsp;&minus;&nbsp;','all');//writes  minus sign wrapped by non-breaking spaces
	text = XRegExp.replace(text,' SymbolPlus ','&nbsp;&plus;&nbsp;','all');//writes  minus sign wrapped by non-breaking spaces
	text = XRegExp.replace(text,' SymbolArrowright ','&nbsp;&rarr;&nbsp;','all');//writes  arrow right, wrapped in non-breaking spaces
	text = XRegExp.replace(text,' SymbolEqual ','&nbsp;&equals;&nbsp;','all');//writes  equals sign wrapped by non-breaking spaces
	text = XRegExp.replace(text,' SymbolApproxequal ','&nbsp;&cong;&nbsp;','all');//writes  equals sign wrapped by non-breaking spaces


	text = XRegExp.replace(text,' SymbolPi ','&pi;','all');//writes  pi character
	text = XRegExp.replace(text,' SymbolCopyright ','&copy;','all');//writes  copyright character
	text = XRegExp.replace(text,' SymbolEndash ','&ndash;','all');//writes  ndash character
	text = XRegExp.replace(text,' SymbolEmdash ','&mdash;','all');//writes  ndash character
	text = XRegExp.replace(text,'SymbolHalf','&#xBD;','all');//writes  1/2 character
	text = XRegExp.replace(text,' SymbolThird ','&#8531;','all');//writes  1/3 character
	text = XRegExp.replace(text,' SymbolQuarter ','&frac14;','all');//writes  1/4 character
	text = XRegExp.replace(text,' SymbolAlpha ','&alpha;','all');//writes  alpha character
	text = XRegExp.replace(text,' SymbolBeta ','&beta;','all');//writes  beta character
	text = XRegExp.replace(text,' SymbolGamma ','&gamma;','all');//writes  gamma character
	text = XRegExp.replace(text,' SymbolPercent ','&percnt;','all');//writes  percent character
// 	Expected tobe used inside{} or (), or where mnul scaping applied
	text = XRegExp.replace(text,' SymbolDegree ','&deg;','all');//writes  degree character
	text = XRegExp.replace(text,' SymbolTemperaturecentigrade ','&deg;C','all');//writes  degress centigrade as physical quantity
	text = XRegExp.replace(text,' SymbolOhm ','&Omega;','all');//writes  abbreviation for the unit ohms character
	text = XRegExp.replace(text,' SymbolEMF ','&#8496;','all');//writes  abbreviation for the unit ohms character

// 	 Physical qunatites, represented by greek letters, italicised
	text = XRegExp.replace(text,' SymbolAngle ','&theta;','all');//writes  theta as angle

	text = XRegExp.replace(text,' SymbolAngularv ','<i>&omega;</i>','all');//writes  angular velocity symbol
	text = XRegExp.replace(text,' SymbolAngulara ','<i>&alpha;</i>','all');//writes  angular acceleration symbol
	text = XRegExp.replace(text,' SymbolWavelength ','<i>&lambda;</i>','all');//writes  wavelength symbol
	text = XRegExp.replace(text,' SymbolDensity ','<i>&rho;</i>','all');//writes  wavelength symbol
	text = XRegExp.replace(text,' SymbolFlux ','<i>&Phi;</i>','all');//writes  magnetic flux symbol
	text = XRegExp.replace(text,' SymbolEpsilon ','<i>&epsilon;</i>','all');//writes  epsilon, as electrical permittivity symbol
	text = XRegExp.replace(text,' SymbolMu ','<i>&mu;</i>','all');//writes  mu, as magnetic permeability symbol
	text = XRegExp.replace(text,' SymbolSigma ','<i>&sigma;</i>','all');//writes  sigma, as charge density symbol
	text = XRegExp.replace(text,' SymbolStrain ','<i>&epsilon;</i>','all');//writes  sigma, as charge density symbol
	text = XRegExp.replace(text,' SymbolStress ','<i>&sigma;</i>','all');//writes  sigma, as charge density symbol

// 	Just greek

	text = XRegExp.replace(text,'UcAlpha','&Alpha;','all');//writes  greek character
	text = XRegExp.replace(text,'UcBeta','&Beta;','all');//writes  greek character
	text = XRegExp.replace(text,'UcGamma','&Gamma;','all');//writes  greek character
	text = XRegExp.replace(text,'UcDelta','&Delta;','all');//writes  greek character
	text = XRegExp.replace(text,'UcEpsilon','&Epsilon;','all');//writes  greek character
	text = XRegExp.replace(text,'UcZeta','&Zeta;','all');//writes  greek character
	text = XRegExp.replace(text,'UcEta','&Eta;','all');//writes  greek character
	text = XRegExp.replace(text,'UcTheta','&Theta;','all');//writes  greek character
	text = XRegExp.replace(text,'UcIota','&Iota;','all');//writes  greek character
	text = XRegExp.replace(text,'UcKappa','&Kappa;','all');//writes  greek character
	text = XRegExp.replace(text,'UcLambda','&Lambda;','all');//writes  greek character
	text = XRegExp.replace(text,'UcMu','&Mu;','all');//writes  greek character
	text = XRegExp.replace(text,'UcNu','&Nu;','all');//writes  greek character
	text = XRegExp.replace(text,'UcXi','&Xi;','all');//writes  greek character
	text = XRegExp.replace(text,'UcOmicron','&Omicron;','all');//writes  greek character
	text = XRegExp.replace(text,'UcPi','&Pi;','all');//writes  greek character
	text = XRegExp.replace(text,'UcRho','&Rho;','all');//writes  greek character
	text = XRegExp.replace(text,'UcSigma','&Sigma;','all');//writes  greek character
	text = XRegExp.replace(text,'UcTau','&Tau;','all');//writes  greek character
	text = XRegExp.replace(text,'UcUpsilon','&Upsilon;','all');//writes  greek character
	text = XRegExp.replace(text,'UcPhi','&Phi;','all');//writes  greek character
	text = XRegExp.replace(text,'UcChi','&Chi;','all');//writes  greek character
	text = XRegExp.replace(text,'UcPsi','&Psi;','all');//writes  greek character
	text = XRegExp.replace(text,'UcOmega','&Omega;','all');//writes  greek character
	text = XRegExp.replace(text,'LcAlpha','&alpha;','all');//writes  greek character
	text = XRegExp.replace(text,'LcBeta','&beta;','all');//writes  greek character
	text = XRegExp.replace(text,'LcGamma','&gamma;','all');//writes  greek character
	text = XRegExp.replace(text,'LcDelta','&delta;','all');//writes  greek character
	text = XRegExp.replace(text,'LcEpsilon','&epsilon;','all');//writes  greek character
	text = XRegExp.replace(text,'LcZeta','&zeta;','all');//writes  greek character
	text = XRegExp.replace(text,'LcEta','&eta;','all');//writes  greek character
	text = XRegExp.replace(text,'LcTheta','&theta;','all');//writes  greek character
	text = XRegExp.replace(text,'LcIota','&iota;','all');//writes  greek character
	text = XRegExp.replace(text,'LcKappa','&kappa;','all');//writes  greek character
	text = XRegExp.replace(text,'LcLambda','&lambda;','all');//writes  greek character
	text = XRegExp.replace(text,'LcMu','&mu;','all');//writes  greek character
	text = XRegExp.replace(text,'LcNu','&nu;','all');//writes  greek character
	text = XRegExp.replace(text,'LcXi','&xi;','all');//writes  greek character
	text = XRegExp.replace(text,'LcOmicron','&omicron;','all');//writes  greek character
	text = XRegExp.replace(text,'LcPi','&pi;','all');//writes  greek character
	text = XRegExp.replace(text,'LcRho','&rho;','all');//writes  greek character
	text = XRegExp.replace(text,'LcSigma','&sigma;','all');//writes  greek character
	text = XRegExp.replace(text,'LcTau','&tau;','all');//writes  greek character
	text = XRegExp.replace(text,'LcUpsilon','&upsilon;','all');//writes  greek character
	text = XRegExp.replace(text,'LcPhi','&phi;','all');//writes  greek character
	text = XRegExp.replace(text,'LcChi','&chi;','all');//writes  greek character
	text = XRegExp.replace(text,'LcPsi','&psi;','all');//writes  greek character
	text = XRegExp.replace(text,'LcOmega','&omega;','all');//writes  greek character

// add spacing
	text = XRegExp.replace(text,"SpacingLinebreak", '<br/>','all'); // adds line breaks
	text = XRegExp.replace(text,"SpacingParabreak", '<br/><br/>','all'); // adds para breaks
	text = XRegExp.replace(text,"SpacingThinspace", '&#8201;','all'); // adds thinspaces
	text = XRegExp.replace(text,'SpacingNonbreakspace','&nbsp;','all');//writes  XXX character


// graphics and links

// specialised graphic / links first, then fallback for all others

	text = XRegExp.replace(text,/InsertGraphic{(.*?IMSP)}/,'<div class="spangraphic"><img src="SPTGraphics/$1.png"></div>\n<div class = "clear"></div>\n',"all")//processes png monochromatic, span
	text = XRegExp.replace(text,/InsertGraphic{(.*?IMCP)}/,'<div class="graphic"><img src="SPTGraphics/$1.png"></div>\n',"all")//processes png monocromatic, single column
	text = XRegExp.replace(text,/InsertGraphic{(.*?ICSP)}/,'<div class="spangraphic"><img src="SPTGraphics/$1.png"></div>\n<div class = "clear"></div>\n',"all")//processes png  colour, span
	text = XRegExp.replace(text,/InsertGraphic{(.*?ICCP)}/,'<div class="graphic"><img src="SPTGraphics/$1.png"></div>\n',"all")//processes png  colour, single column

	text = XRegExp.replace(text,/InsertGraphic{(.*?INCH)}/,'<div class="graphic"><img src="SPTGraphics/$1.svg"></div>\n',"all")//processes heads

	text = XRegExp.replace(text,/InsertGraphic{(.*?INSC)}/,'<div class="spangraphic_topopup"><a href="SPTGraphics/$1.svg" class="pop-spangraphic"><img src="SPTGraphics/$1.svg"></a></div>\n<div class = "clear"></div>\n',"all");//processes SVG Wide drawn conceptual diagram
	text = XRegExp.replace(text,/InsertGraphic{(.*?INCC)}/,'<div class="graphic_topopup"><a href="SPTGraphics/$1.svg" class="pop-singlegraphic"><img src="SPTGraphics/$1.svg"></a></div>\n',"all");//processes SVG Narrow drawn conceptual diagram

	text = XRegExp.replace(text,/InsertGraphic{(.*?IFSC)}/,'<div class="spangraphic_topopup"><a href="SPTGraphics/' + '$1.svg" class="pop-spangraphic"><img src="SPTGraphics/' + '$1.svg"></a></div>\n<div class = "clear"></div>\n',"all");//processes SVG Wide drawn flow diagram
	text = XRegExp.replace(text,/InsertGraphic{(.*?IFCC)}/,'<div class="graphic_topopup"><a href="SPTGraphics/' + '$1.svg" class="pop-singlegraphic"><img src="SPTGraphics/' + '$1.svg"></a></div>\n',"all");//processes SVG Narrow drawn flow diagram

	text = XRegExp.replace(text,/InsertGraphic{(.*?)IPSC}/,'<div class="spangraphic_topopup"><a href="SPTGraphics/$1EPSC.svg" class="pop-spangraphic" target="_blank"><img src="SPTGraphics/$1IPSC.svg"></a></div>\n<div class = "clear"></div>\n',"all");//processes SVG Wide paned paned conceptual diagram, that  has an explorable interactive version
	text = XRegExp.replace(text,/InsertGraphic{(.*?)IPCC}/,'<div class="graphic_topopup"><a href="SPTGraphics/$1EPCC.svg" class="pop-singlegraphic" target="_blank"><img src="SPTGraphics/$1IPCC.svg"></a></div>\n',"all");//processes SVG narrow paned drawn conceptual diagram, that has an explorable interactive version

	text = XRegExp.replace(text,/InsertGraphic{(.*?)PID}{(.*?)}{(.*?)}/,'<iframe  src="SPTGraphics/$1PID" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',"all");//processes PID (one of two pdl graphic types supported)
	text = XRegExp.replace(text,/InsertGraphic{(.*?)DIP}{(.*?)}{(.*?)}/,'<iframe  src="http://supportingphysicsteaching.net/SPTGraphics/$1PID" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',"all");//processes DIP (one of two pdl graphic types supported)
	text = XRegExp.replace(text,/InsertGraphic{(.*?)PSS}{(.*?)}{(.*?)}/,'<iframe  src="http://supportingphysicsteaching.net/SPTGraphics/ShowStory.html?file=http://supportingphysicsteaching.net/SPTGraphics/$1PSS.md" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',"all");//processes PSS (Story space embed)


	text = XRegExp.replace(text,/InsertGraphic{(.*?)CLIP}{(.*?)}{(.*?)}/,'<video width="$2" height="$3" controls>\n<source src="SPTWebGraphics/$1.mp4"\ntype="video/mp4">\n</video>\n',"all") // processes mp4 video clips

	text = XRegExp.replace(text,/InsertGraphic{(.*?)}/,'<div><img src="$1"></div>\n',"all") // processes non-typed graphics


	text = XRegExp.replace(text,/InsertLink\{(.+?)FILE\}/,'<p class = "download_doc_btn"><a href="SupportFiles/$1.zip"> download and unzip files to use</a></p></br>',"all"); // deals with internal links for videoclips (CLIP suffix triggers)

	text = XRegExp.replace(text,/InsertLink\{(.*?)\}\{(.+?)PSD\}/,'<p><a href="http://supportingphysicsteaching.net/SupportPrintableDocuments/$2.html" class="printablelink">$1</a></p></br>',"all"); // deals with internal links for printables

	text = XRegExp.replace(text,/InsertLink\{(.+?)CLIP\}/,'<p class = "download_doc_btn"><a href="SPTMediaFiles/$1.swf"> download clip to view</a></p></br>',"all"); // deals with internal links for videoclips (CLIP suffix triggers)

	text = XRegExp.replace(text,/InsertLink\{(.+?)FILE\}/,'<p class = "download_doc_btn"><a href="SupportFiles/$1.zip"> download and unzip files to use</a></p></br>',"all"); // deals with internal links for Files

	text = XRegExp.replace(text,/InsertLink\{(.+?)PDF\}/,'<p class = "download_doc_btn"><a href="SupportFiles/$1.pdf"> download the pdf to use</a></p></br>',"all"); // deals with internal links for Files

	text = XRegExp.replace(text,/InsertLink{(.*?)}{(.+?)}/,'<p><a href="$2" class="internallink">$1</a></p></br>',"all"); // deals with internal links

	text = XRegExp.replace(text,/InsertLinkPN\{(.*?)\}\{(.+?)\}/,'<p><a href="$2" class="internallinkPN">$1</a></p></br>',"all"); // deals with internal links
	text = XRegExp.replace(text,/InsertLinkTL\{(.*?)\}\{(.+?)\}/,'<p><a href="$2" class="internallinkTL">$1</a></p></br>',"all"); // deals with internal links
	text = XRegExp.replace(text,/InsertLinkTA\{(.*?)\}\{(.+?)\}/,'<p><a href="$2" class="internallinkTA">$1</a></p></br>',"all");// deals with internal links

	text = XRegExp.replace(text,/URLLink\{(.*?)\}\{(.+?)\}/,'<p><a href="$2" class="externallink">$1</a></p></br>',"all"); // deals with external links

	//Slideshows

        text = XRegExp.replace(text,/StartSlideShow/,'<div class="SPTslideshow">',"all");// does start of slide show

        text = XRegExp.replace(text,/ShowPicture{(.*)}{(.*)}/,'<img class="$1" src="$2" style="width:30%">',"all");// does every image

        text = XRegExp.replace(text,/EndSlideShow{(.*)}{(.*)}/,'</div>\n<script>\nvar myIndex = 0;\ncarousel$1();\nfunction carousel$1() {\nvar i;\nvar x = document.getElementsByClassName("$1");\nfor (i = 0; i < x.length; i++) {\nx[i].style.display = "none";\n}\nmyIndex++;\nif (myIndex > x.length) {myIndex = 1}\nx[myIndex-1].style.display = "block";\nsetTimeout(carousel$1, $2); // Change image every 2 seconds\n}</script>',"all");// ends show and inserts script




// techical-subscript and superscript
text =  XRegExp.replace(text,/QuantitySymbol{(\w)}/,'<i>$1</i>',"all") // processes symbols
        text =  XRegExp.replace(text,/QuantitySub{(.*?)}{(.*?)}/,'<i>$1</i><sub>$2</sub>',"all") // processes symbols with subscript
        text =  XRegExp.replace(text,/QuantitySuper{(.*?)}{(.*?)}/,'<i>$1</i><sup>&thinsp;$2</sup>',"all") //processes symbols with subscript


        text = XRegExp.replace(text,/NPNucleus{(.*?)}{(.*?)}{(.*?)}/,'<span class = "hilowrap"><span class = "hiloHigh">$1</span><span class = "hiloLow">$2</span></span>$3',"all"); //NPNucleus{nucleonNumber}{protonNumber}{nucleus}, for nuclei, mostly


// techical-vectors
        text =  XRegExp.replace(text,/VectorSub{(\w)}{(.*?)}/,'<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span><sub>$2</sub>',"all") // processes vectors with arrows and subscript
        text =  XRegExp.replace(text,/VectorOver{(\w)}/,'<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>',"all")
        text =  XRegExp.replace(text,/VectorMagnitude{(\w)}/,'||<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>&thinsp;||',"all") // processes vector magnitudes

// technical-quantities and units

		text =  XRegExp.replace(text,/QuantitySymbol{(\w)}/,'<i>$1</i>',"all") // processes symbols

		text =  XRegExp.replace(text,/QuantityVector{(\w)}/,'<b><i>$1</i></b>',"all") // processes symbols


//         JustUnit

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('JustUnit')>=0){
            var match = XRegExp.exec(text,/JustUnit{(.*?|-)}/);
            if(match){
                var found = match[0];
                var qjMatch = XRegExp.exec(found,/JustUnit{(.*?|-)}/);
                var unit = parseUnit(qjMatch[1]);
                var qjSubs = '<span class = "groupedblock">'+unit+'</span>';
                text = text.replace(found,qjSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }


	   //ValueUnit

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('ValueUnit')>=0){
            var match = XRegExp.exec(text,/ValueUnit{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var quMatch = XRegExp.exec(found,/ValueUnit{(.*?)}{(.*?)}/);
                var number = quMatch[1];
                var unit = parseUnit(quMatch[2]);
                var quSubs = '<span class = "groupedblock">'+number+'&nbsp;'+unit+'</span>';
                text = text.replace(found,quSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }

        //QuantityUnit

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('QuantityUnit')>=0){
            var match = XRegExp.exec(text,/QuantityUnit{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var quMatch = XRegExp.exec(found,/QuantityUnit{(.*?)}{(.*?)}{(.*?)}/);
                var symbol = quMatch[1];
                var value = quMatch[2];
                var unit = parseUnit(quMatch[3]);
                var qvSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+value+'&nbsp;'+unit+'</span>';
                text = text.replace(found,qvSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }

	  //QuantityValue

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('QuantityValue')>=0){
            var match = XRegExp.exec(text,/QuantityValue{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var quMatch = XRegExp.exec(found,/QuantityValue{(.*?)}{(.*?)}{(.*?)}/);
                var symbol = quMatch[1];
                var number = quMatch[2];
                var unit = parseUnit(quMatch[3]);
                var qvSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+number+'&nbsp;'+unit+'</span>';
                text = text.replace(found,qvSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }

          //QuantityOrder

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('QuantityOrder')>=0){
            var match = XRegExp.exec(text,/QuantityOrder{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var quMatch = XRegExp.exec(found,/QuantityOrder{(.*?)}{(.*?)}{(.*?)}/);
                var symbol = quMatch[1];
                var exponent = quMatch[2];
                var unit = parseUnit(quMatch[3]);
                var qvSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;~&nbsp;10<sup>'+exponent+'</sup>&nbsp;'+unit+'</span>';
                text = text.replace(found,qvSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }

        //ValueOrder

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('ValueOrder')>=0){
            var match = XRegExp.exec(text,/ValueOrder(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var quMatch = XRegExp.exec(found,/ValueOrder{(.*?)}{(.*?)}/);
                var exponent = quMatch[1];
                var unit = parseUnit(quMatch[2]);
                var joSubs = '<span class = "groupedblock">~&nbsp;10<sup>'+exponent+'</sup>&nbsp;'+unit+'</span>';
                text = text.replace(found,joSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }



		   //ValueExponent

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('ValueExponent')>=0){
            var match = XRegExp.exec(text,/ValueExponent{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var qeMatch = XRegExp.exec(found,/ValueExponent{(.*?)}{(.*?)}{(.*?)}/);
                var number = qeMatch[1];
                var exponent = qeMatch[2];
                var unit = parseUnit(qeMatch[3]);
                var qeSubs = '<span class = "groupedblock">'+number+'&nbsp;&times;&nbsp;10<sup class = "sscript">'+exponent+'</sup>&nbsp;'+unit+'</span>';
                text = text.replace(found,qeSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }

        //QuantityExponent

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('QuantityExponent')>=0){
            var match = XRegExp.exec(text,/QuantityExponent{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var qeMatch = XRegExp.exec(found,/QuantityExponent{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
                var symbol = qeMatch[1];
                var number = qeMatch[2];
                var exponent = qeMatch[3];
                var unit = parseUnit(qeMatch[4]);
                var qeSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+number+'&nbsp;&times;&nbsp;10<sup class = "sscript">'+exponent+'</sup>&nbsp;'+unit+'</span>';
                text = text.replace(found,qeSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }




         //ValueRange

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('ValueRange')>=0){
            var match = XRegExp.exec(text,/ValueRange{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var qsMatch = XRegExp.exec(found,/ValueRange{(.*?)}{(.*?)}{(.*?)}/);
                var rangestart = qsMatch[1];
                var rangeend = qsMatch[2];
                var unit = parseUnit(qsMatch[3]);
                var qsSubs = '<span class = "groupedblock">'+rangestart+'&ndash;'+rangeend+'&nbsp;'+unit+'</span>';
                text = text.replace(found,qsSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }

        //QuantityRange

        wordsHere = XRegExp.match(text,/[\w!]+/,'all');
        while(wordsHere.indexOf('QuantityRange')>=0){
            var match = XRegExp.exec(text,/QuantityRange{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
            if(match){
                var found = match[0];
                var qsMatch = XRegExp.exec(found,/QuantityRange{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
                var symbol = qsMatch[1];
                var rangestart = qsMatch[2];
                var rangeend = qsMatch[3];
                var unit = parseUnit(qsMatch[4]);
                var qsSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+rangestart+'&ndash;'+rangeend+'&nbsp;'+unit+'</span>';
                text = text.replace(found,qsSubs);
            }
            else
            {
                break;
            }
            wordsHere = XRegExp.match(text,/[\w]+/,'all');
        }



  text =  XRegExp.replace(text,/WordSub{(.*?)}{(.*?)}/,'$1<sub>$2</sub>',"all") // processes symbols with subscript
        text =  XRegExp.replace(text,/WordSuper{(.*?)}{(.*?)}/,'$1<sup>$2</sup>',"all") //processes words with subscript
        text =  XRegExp.replace(text,/NumberSuper{(.*?)}{(.*?)}/,'$1<sup>$2</sup>',"all") //processes numbers raised to a power

//technical-blocks, take 1
        text =  XRegExp.replace(text,/FractionBlock{(.*?)}{(.*?)}/,'<span class = "relationship"><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span></span>',"all");


// technical- square roots
	text =  XRegExp.replace(text,/QuantityRoot{(.*?)}/,'<span style="white-space: nowrap;">&radic;<span style="border-top: 1px solid #000000;">&nbsp;<i>$1</i>&nbsp;</span></span>',"all")

	text =  XRegExp.replace(text,/NumberRoot{(.*?)}/,'<span style="white-space: nowrap;">&radic;<span style="border-top: 1px solid #000000;">&nbsp;$1&nbsp;</span></span>',"all")

	text =  XRegExp.replace(text,/WordRoot{(.*?)}/,'&nbsp;&nbsp;&nbsp;<span class="fractionroot"><span class="fraction">$1</span></span>',"all");

	text =  XRegExp.replace(text,/FractionRoot{(.*?)}{(.*?)}/,'&nbsp;&nbsp;&nbsp;<span class="fractionroot"><span class="fraction"><span class="fractionuproot">&nbsp;<i>$1</i>&nbsp;</span><span class="fractiondown"><i>$2</i></span></span></span>',"all");

// VectorMatrix must follow units

text =  XRegExp.replace(text,/VectorMatrix{(\w)}{(.*?)}{(.*?)}{(.*?)}/,'<span><span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractionup">$3</span><span class="fractionup">$4</span></span></span>',"all") // processes vector matrix


// Relationships, all equalities for now

	text = XRegExp.replace(text,/DifferenceABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&minus;&nbsp;$3</span>');	    // DifferenceABC
	text = XRegExp.replace(text,/SumABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&plus;&nbsp;$3</span>'); //SumABC

	text = XRegExp.replace(text,/ProductABeqCD{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;&times;&nbsp;$2&nbsp;=&nbsp;$3&nbsp;&times;&nbsp;$4</span>'); //ProductABeqCD
	text = XRegExp.replace(text,/ProductQuantityABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;<i>$2</i>&nbsp;&times;&nbsp;<i>$3</i></span>'); //ProductQuantityABC
	text = XRegExp.replace(text,/ProductVectorCrossABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i><b>$1</i></b>&nbsp;=&nbsp;<i><b>$2</i></b>&nbsp;&#x2a2f;&nbsp;<i><b>$3</i></b></span>'); //ProductVectorABC
	text = XRegExp.replace(text,/ProductVectorDotABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;<i><b>$2</i></b>&nbsp;&middot;&nbsp;<b><i>$3</i></b></span>'); //ProductVectorDotABC
	text = XRegExp.replace(text,/ProductABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&times;&nbsp;$3</span>'); //ProductABC
	text = XRegExp.replace(text,/ProductQuantityAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;&minus;&thinsp;<i>$2</i>&nbsp;&times;&nbsp;<i>$3</i></span>'); //QuantityProductAnBC
	text = XRegExp.replace(text,/ProductAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;&minus;&thinsp;$2&nbsp;&times;&nbsp;$3</span>'); //ProductAnBC
	text = XRegExp.replace(text,/EqualityAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2</span>'); //EqualityAssertion
  text = XRegExp.replace(
    text,
    /ApproxeqAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g,
    '<span class = "relationship">$1&nbsp;&asymp;&nbsp;$2</span>'
  ); //ApproxeqAssertion
  text = XRegExp.replace(
    text,
    /ProportionAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g,
    '<span class = "relationship">$1&nbsp;&prop;&nbsp;$2</span>'
  ); //ProportionAssertion
	text = XRegExp.replace(text,/FractionAdBeqCdD{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$3</span><span class="fractiondown">$4 </span></span></span></span>'); //FractionAdBeqCdD
	text = XRegExp.replace(text,/FractionQuantityAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><i>$1</i>&nbsp;=&nbsp;&minus;&thinsp;<span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span></span></span>'); //FractionQuantityAnBC
	text = XRegExp.replace(text,/FractionQuantityABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><i>$1</i>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span></span></span>'); //FractionQuantityABC
	text = XRegExp.replace(text,/FractionVectorABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><b><i>$1</i></b>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup"><b><i>$2</i></b></span><span class="fractiondown"><i>$3</i></span></span></span></span>'); //FractionQuantityABC
	text = XRegExp.replace(text,/FractionAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span>$1&nbsp;=&nbsp;&minus;&thinsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span></span></span>'); //FractionAnBC
	text = XRegExp.replace(text,/FractionABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span>$1&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span></span></span>'); //FractionABC
	text = XRegExp.replace(text,/FractionQuantityBdCeqA{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span>&nbsp;=&nbsp;<i>$1</i></span>'); //FractionQuantityBdAeqC
	text = XRegExp.replace(text,/FractionBdCeqA{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span>&nbsp;=&nbsp;$1</span>'); //FractionBdCeqA
	text = XRegExp.replace(text,/FractionAdBeqCDdEF{(.*?)}{(.*?)}{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$3</span><span class="fractiondown">$4</span></span>&nbsp;&times;&nbsp;<span class="fraction"><span class="fractionup">$5</span><span class="fractiondown">$6</span></span></span></span>'); //FractionAdBeqCDdEF
	text = XRegExp.replace(text,/EfficiencyCalc{(.*?)}{(.*?)}/g, '<span class = "relationship"> efficiency&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;&times;&nbsp;100&nbsp;&percnt;</span>'); // EfficiencyCalc
	text = XRegExp.replace(text,/AccumulateRelationship{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i><sub> final($3)</sub>&nbsp;=&nbsp;<i>$1</i><sub> initial($3)</sub>&nbsp;+&nbsp;$2&nbsp;&times;&nbsp;&Delta;<i>t</i></span>'); // AccumulateRelationship


// Style text
	text = XRegExp.replace(text,XRegExp('(?s)QuotationThis{(.*?)}'),'<q class="double">$1</q>',"all"); //processes quotes double (quotation)
	text = XRegExp.replace(text,XRegExp('(?s)QuoteThis{(.*?)}'),'<q class="single">$1</q>',"all"); //processes quotes single (quote);
	text =  XRegExp.replace(text,XRegExp('(?s)EmphasiseThis{(.*?)}'),'<em>$1</em>',"all"); // processes emphasise
	text =  XRegExp.replace(text,XRegExp('(?s)BoldThis{(.*?)}'),'<b>$1</b>',"all"); // processes emphasise
	text =  XRegExp.replace(text,XRegExp('(?s)SafetyTested{(.*?)}'),'<i>$1</i>',"all"); // processes safety test claim
	text =  XRegExp.replace(text,XRegExp('(?s)AttributThis{(.*?)}'),'<i>$1</i>',"all"); // processes attributions

//Headers

    text = XRegExp.replace(text,/WebTitle{(.*?)}/,'<h1>$1</h1>\n',"all"); // Web document title
    text = XRegExp.replace(text,/StepHeader{Purpose}/,'<br><p class="SPTactivityHeader"><strong>What the activity is for</strong></p>',"all"); //reworks SPT prepareheader
    text = XRegExp.replace(text,/StepHeader{Prepare}/,'<br><p class="SPTactivityHeader"><strong>What the activity is for</strong></p>',"all"); //reworks SPT purposeheader
    text = XRegExp.replace(text,/StepHeader{Happens}/,'<br><p class="SPTactivityHeader"><strong>What happens during this activity</strong></p>',"all"); //reworks SPT prepareheader
	text = XRegExp.replace(text,/StepHeader{(.*?)}/,'<h4>$1</h4>',"all"); //covers most cases
	text = XRegExp.replace(text,/ThinkHeader{(.*?)}/,'<p class="clear"></p><p class="Thinking"> <strong>$1</strong>\n</p><p class="clear"></p>',"all");



// SpeechBubbles

	text = XRegExp.replace(text,/WrongTrack{(.*)}/,'<p class="WrongTrack"><strong>Wrong Track: </strong>$1</p><p class="clear"></p>',"all");// does WrongTrack
	text = XRegExp.replace(text,/RightLines{(.*)}/,'<p class="RightLines"><strong>Right Lines: </strong> $1</p><p class="clear"></p>',"all");//does RightLines
	text = XRegExp.replace(text,/SafetyTip{(.*)}/,'<p class="safetynote"><strong>Safety note: </strong>$1</p><p class="clear"></p>',"all");// does SafetyTip
	text = XRegExp.replace(text,/TeacherTip{(.*)}/,'<p class="TeacherTip"><strong>Teacher Tip: </strong><q>$1</q></p><p class="clear"></p>',"all");// does TeacherTip
	text = XRegExp.replace(text,/AttributeThis{(.*)}/,'<p class="TeacherAttribute">$1</p><p class="clear"></p>',"all");// does TeacherAttribution
	text = XRegExp.replace(text,/TeacherSpeak{(.*)}/,'<p class="TeacherSpeak">Teacher: $1</p><p class="clear"></p>',"all");//does TeacherSpeak
	text = XRegExp.replace(text,/JustSpeak{(.*)}/,'<p class="TeacherSpeak">$1</p><p class="clear"></p>',"all");//does JustSpeak
	text = XRegExp.replace(text,/PupilSpeak{(.*)}{(.*)}/,'<p class="PupilSpeak">$1: $2</p><p class="clear"></p>',"all");// does PupilSpeak
    // dialogue
	text = XRegExp.replace(text,/TeacherOne{(.*)}/,"<div class=\"teacherone\">$1</div><div class=\"clear\"></div>\n","all");
	text = XRegExp.replace(text,/TeacherTwo{(.*)}/,"<div class=\"teachertwo\">$1</div><div class=\"clear\"></div>\n","all");
	text = XRegExp.replace(text,/TeacherThree{(.*)}/,"<div class=\"teacherthree\">$1</div><div class=\"clear\">\n","all");


// Lists

	text = XRegExp.replace(text, /\- (.*)/,'<li>$1</li>',"all");
	text = XRegExp.replace(text,"ListEquipmentEnd",'</div><p class="clear"></p>','all');
	text = XRegExp.replace(text,"ListEquipment",'<div class="equipmentlist">','all');
	text = XRegExp.replace(text,"ListSequenceEnd",'</div><p class="clear"></p>','all');
	text = XRegExp.replace(text,"ListSequence",'<div class="sequencelist">','all');
	text = XRegExp.replace(text,"ListInformationEnd",'</div ><p class="clear"></p>','all');
	text = XRegExp.replace(text,"ListInformation",'<div class="informationlist">','all');

	XRegExp.replace(text,"ListMultipleChoiceEnd",'</div><p class="clear"></p>','all');
	text = XRegExp.replace(text,"ListMultipleChoice",'<div class="multiplechoicelist">','all');

// Tables
	text = XRegExp.replace(text,'StartTable','<table>');

	while(text.indexOf('TableHeader')>-1) {
		var match = XRegExp.exec(text,/TableHeader{(.*)}/);
		if(match) {
			var headerhtml = '\t<thead style="text-align:right">\n\t\t<tr class = "tit_bg">\n\t\t<th>' + match[1].split('}{').join('</td><td>') + '</th>\n\t\t</tr>\n\t<tbody>\n';
			var headerrow = match[0];
			text = XRegExp.replace(text, headerrow, headerhtml);
		}
		else{
			break;
		}
	}
	while(text.indexOf('TableRow')>-1){
		match = XRegExp.exec(text,/TableRow{(.*)}/);
		if(match){
			rowhtml='\t\t<tr style="text-align:right">\n\t\t\t<td>'+match[1].split('}{').join('</td><td>')+'</td>\n\t\t</tr>';
			inputrow=match[0];
			text = XRegExp.replace(text,inputrow,rowhtml);
		}
	}
	text = XRegExp.replace(text,'StopTable','\n\t</tbody>\n</table>')




// technical-blocks, take 2
        text =  XRegExp.replace(text, /GroupBlock{(.*?)}/,'<span class = "groupedblock">$1</span>',"all"); // processes grouping, but only if its on a single line (otherwise deal with physical quantity first)

// Coaching
        //SessionBlock0
        // no URL provided, so not a link
        text = XRegExp.replace(text,/PlanBlockNoLink{(.*)}{([0-9])([0-9])([0-9])([0-9])}{(.*)}{([0-9]{2})}/,'<div class= "SessionBlock"><p class="supporterblocknolink">$1</p><div class= "SessionBlockData">making physics connect FacetScore$2</p>providing tools to think with FacetScore$3</p>Making explicit links FacetScore$4</p>Exploiting physical experiences FacetScore$5</p><p class="TeacherSpeak">Around &#x23f3;$7 minutes. Coaching Notes: $6</p>   <p class="clear"></p><p><br/></p>\n</div>',"all");// does SessionBlockNoLink

        //rest have a link
        text = XRegExp.replace(text,/PlanBlock{(.*)}{(.*)}{([0-9])([0-9])([0-9])([0-9])}{(.*)}{([0-9]{2})}/,'<div class= "SessionBlock"><p><a href="$2" class="supporterblocklink">$1</a></p><div class= "SessionBlockData">making physics connect FacetScore$3</p>providing tools to think with FacetScore$4</p>Making explicit links FacetScore$5</p>Exploiting physical experiences FacetScore$6</p><p class="TeacherSpeak">Around &#x23f3;$8 minutes. Coaching Notes: $7</p>   <p class="clear"></p><p><br/></p>\n</div>','all');

        text = XRegExp.replace(text,"FacetScore0",'&#x1f44e;','all');
        text = XRegExp.replace(text,"FacetScore1",'&#128077;','all');
        text = XRegExp.replace(text,"FacetScore2",'&#128077;&#128077;','all');
        text = XRegExp.replace(text,"FacetScore3",'&#128077;&#128077;&#128077;','all');
        text = XRegExp.replace(text,"FacetScore4",'&#128077;&#128077;&#128077;&#128077;','all');

        text = XRegExp.replace(text,/GuideBlock{(.*)}{(.*)}{(.*)}/,'<div class="SessionBlock">\n<p><a href="$2" class="supporterblocklink">$1</a></p>\n\t<div class= "SessionBlockData">\n\t<p class="TeacherSpeak">$3</p><p class="clear"></p><p><br/></p></div>',"all");// does GuideBlock

        text = XRegExp.replace(text,/GuideBlockNoLink{(.*)}{(.*)}/,'<div class="SessionBlock">\n<p class="supporterblocknolink">$1</p>\n\t<div class= "SessionBlockData">\n\t<p class="TeacherSpeak">$2</p><p class="clear"></p><p><br/></p></div>',"all");// does GuideBlock


// Diagnostic questions

	text = XRegExp.replace(text,/QuestionStem{(.*)}/g,'<div class="Mcquestion">\n<hr>\n<p class="Mcstem">$1</p></div>\n',"all");
	text = XRegExp.replace(text,/QuestionItem{([A-E])}{(.*)}/g,'<div>\n\t<input id="option$1" type="radio" class="Mcitem" name="question-1-answers" value="$1" />\n\t<label for="question-1-answers-A"><span><span></span></span><strong>$1</strong>   $2</label>\n</div>\n\n',"all");
	text = XRegExp.replace(text,/QuestionAnswer{(.*)}/g,'<input type = "button" class="Questioncheckbutton" value = "Check my answer" onclick = "checkAnswer()"/><div id ="theanswer" >$1</div>\n\n<div id ="showanswer"> </div>\n<hr>\n',"all");
	// following are related metadata,not to be shown
	text = XRegExp.replace(text,/QuestionSource{(.*)}/g,'',"all");
	text = XRegExp.replace(text,/QuestionID{(.*)}/g,'',"all");
	text = XRegExp.replace(text,/QuestionDifficulty{(.*)}/g,'',"all");
	text = XRegExp.replace(text,/QuestionSkill{(.*)}/g,'',"all");
	text = XRegExp.replace(text,/QuestionTopic{(.*)}/g,'',"all");







        return text;
    };

function parseUnit(unitString){

	var unitBits = unitString.split(" ");

	for (var i=1 ;i < unitBits.length; i++){ // the first array element needs nothing in front, and will not be a number, so don't process
		if (/\d/.test(unitBits[i])){
			unitBits[i]='<sup>'+unitBits[i]+'</sup>';
		}else{
				unitBits[i]='&nbsp;'+unitBits[i];
		};
	}

	var htmLunitString=unitBits.join('');

	return htmLunitString;
}



//try

class SparkLineGraph{
	constructor(){

	}
// 	plotKind can be one of "PN" for positive or negative values, autoscaling; "PO" for positive values, autoscaling; "FX" for fixed scale, when the value of maxFixedValue is used: for PO and PN this is not used
	create(xloc,yloc,slwidth,slheight,slLabel,plotKind,maxFixedValue){
	this.locX=xloc;
	this.slwidth = slwidth;
	this.slheight = slheight;
	this.locY= yloc;
	this.plotKind=plotKind;
	this.slLabel=slLabel;
	this.maxFixedValue=maxFixedValue;
	this.slValues=[];
	}

	acquire(valueNow){
	this.valueNow=valueNow;
	this.slValues.push(this.valueNow);
	}

	plot(){
	push();
	translate(this.locX, this.locY);
	noStroke();
    strokeWeight(1);
    fill(cplotBG);
    rect(0, -this.slheight, this.slwidth, 2*this.slheight, 20, 20, 20, 20);
    stroke(cplotaxes);
    line(-15, 0, this.slwidth+15, 0);
    fill(clabeltext);
    textFont(romanFont,14);
    text(this.slLabel,this.slwidth+20,0);
    switch (this.plotKind){
    case "PN":
        var maxTimeSeries = max(abs(max(this.slValues)),abs(min(this.slValues)));
    break;

    case "PO":
        var maxTimeSeries = max(this.slValues);
    break;

    case "FX":
        var maxTimeSeries = this.maxFixedValue;
    break;
    }

	var thusfar =min(this.slValues.length,masterTicker);

    for (var i = 1; i < thusfar; i = i+1) {
      var ploty = -map(this.slValues[i], -maxTimeSeries, maxTimeSeries, -this.slheight+20, this.slheight-20);
      strokeWeight(2);
      stroke(cexploreplot);
      point(i, ploty);
    }
    pop();
  }
}
