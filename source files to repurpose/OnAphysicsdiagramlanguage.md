WebTitle{A physics diagram language}

A language for developing static and interactive diagrams on the web.

StepHeader{An overview}

Expressing physics diagrammatically on a web page with the fruitful precision required to best support learning tends to be seen as a demanding technical task for technical illustrators.  Few teachers or authors develop the necessary familiarity with illustration software to generate their diagrams. This tends to lead to diagrammatic representation becoming a second-class citizen in communicating physics to young people.

A second issue is that such diagrams often combine technical conventions, textual and diagrammatic, that act as tripwires for the authors, and perhaps even more so for any non-PER aware technical illustrators or animators brought in as external resources to execute the diagrams.
A third issue is one of maintainability, especially for textual elements. Whereas many high-end illustration packages do have hierarchical symbol sets, which allow you to propagate a change through a set of diagrams, they do not do so well when faced with similar tasks based on technical text.
The poster will present a designed and implemented lightweight diagram language, based on p5js, optimised for publishing and curating physics diagrams. It has roots in the idea of a sketch, as implemented in the processing language, and in the graphic language which has informed the supporting Physics Teaching Project over the last 17 years.

Ultimate flexibility and accessibility are provided by the use of code, as more or less anyone can type and with appropriate support, get to an iterate, useable diagram in only a few lines, as the language encapsulates complexity, providing primitives in the physics domain rather than leaving the authors to assemble a collection of Euclidian graphical elements.

The authoring can be in any text editor, with all the power that this implies, including support for code completion, snippets and syntax highlighting, matching the construction of diagrams to the thinking patterns of teachers of physics (think force with magnitude and rotation, rather than that arrow, with the right style of head, of the right length, varying the length stem but not the head of the arrow, and other graphic details).

There are elements to allow for interaction such as sliders, dividers, buttons and checkboxes, as well as the ability to work in the three-dimensional space and two separately engineered implementations of an infinite canvas.

A version has been used to curate and publish diagrams on the Supporting Physics Teaching Project for several years and is built into Spark.iop.org. So the system is well tested for representing the diagrammatic elements physics for 5-19-year-old children. The system complements the physics markup language. Also, both languages have been presented at international conferences (GIREP 2017 and GIREP 2019).

StepHeader{Coding a diagram}

You construct the diagrams from a set of primitives, many being physics representations drawn from a rather comprehensive collection of designed graphical together with a standard set of controls, such as sliders, buttons and pucks (2D sliders). Also, HTML text entities are co-opted to allow both CSS control of text and to co-opt the physics markup language in rendering technical physics text. These primitives are connected with raw p5js so that the diagrams can be interactive, and indeed have access to the whole of JavaScript if needed.

This use of a framework (physics diagram language, pdl) leads to an inheritance hierarchy across a suite of diagrams, which makes encapsulation, consistency and editability both possible and reliable.
This framework has been used extensively to build physics interactive diagrams (PID)  and discussions of instances in physics(DIP). Both contain mostly conventional and well-explored explanatory schema and diagrammatic conventions. Still, how they are produced and deployed has significant advantages in editability, in consistency, and in maintainability due to the building blocks from which they are created. PID can be any single diagram, whether interactive or not. DIP are a specialised subset, designed to present points of view to promote conceptually fruitful discussion.

StepHeader{Sample DIP}

InsertGraphic{FoMoonEarthForcesDIP}{600}{600}

A static diagram, constructed from three building blocks, to promote discussion

Discussions about instances in physics have a long and successful history in the research field and have also been successfully deployed as conceptual probes in the classroom. There are a few building blocks: an image as a contact setter, speech bubbles to express points of view that may stimulate the desired discussions, and optionally, some characters to express the points of view. pdl provides primitives for all of these, so a speaking character requires only two statements:

	drawGirl5();
	speechbubble("Physics seems\nvery complicated.",12,64, "TL");
	
And the image requires a single statement to place the preloaded image.

	image(toDiscuss,80,80);
	
The time-consuming part is arranging them all neatly, but to generate a number one can establish a framework: a few lines of code which can be adapted for the image, the text, and the locations of the characters.

InsertGraphic{pdlIntroLancasterSocketsDIP}{600}{600}

A second DIP, constructed from the same three building blocks.

StepHeader{Concept maps}

You can use different building blocks to create simple, but elegant maps showing ideas. These may be static, just like the DIP, in which case the code executes once.


InsertGraphic{pdlIntroconceptMapPID}{800}{600}

A simple idea map of the big ideas in a topic, constructed from two building blocks.
Here there are two building blocks, which encapsulate much of the complexity(the author still has to decide what goes where, and what is linked to what):

    drawCoreIdeaBox(boxText,xpos,ypos,boxWidth,boxHeight)	     
	drawLink(xposstart,yposstart,xposfinish,yposfinish,connectorWeight)
	
Or the code can loop, continuously redrawing the map, but checking for keypresses, to allow subsets of the map to be drawn, which is useful if there are complex maps, such as this one.

InsertGraphic{pdlIntroPathwayPID}{980}{700}

An elaborate map of the ideas for a topic.

Different facets of the topic, shown by the different colours of the boxes, can be made visible or invisible to make the diagram more natural to read.

These are more complex, so the data structures to code and maintain them somewhat elegantly are more refined. Still, the building blocks are the same, except that the box drawing primitive gains an extra parameter to allow the box colour to be set. 

StepHeader{Adding interaction}

InsertGraphic{pdlIntroAddLoopParallelWidePID}{900}{400}

A simple PID to support thinking about the connection between series and parallel circuits, thought of as separate or joined loops.

As the diagram can be continuously redrawn with tests for interaction, so buttons can be added, and the diagrams become responsive to user input. (Every diagram has a two-part structure, available as a result of building pdl on top of P5js, in turn, developed from the processing language, of setup and draw. What is within the draw segment may be run once, or iterated.)

Other than this, primitives encapsulate the drawing of standard physics depiction. Here:

	resistor ()
	battery()
	power(4)

When the button is pressed, the visual impression formed by the change in the magnitude of the power representations is memorable. But if one wanted some other representational change, then code is very malleable, primitives for representations of different quantities such as current or potential difference are built-in.

Sliders and checkboxes are similarly simple to add, allowing for selection of physical magnitudes and controlling what is displayed. The processing language supports three dimensions, and new primitives enable you to exploit that in topics such as electromagnetism, where it is fruitful and appropriate.

InsertGraphic{pdlIntrochargedParticleMagenticFieldVariableVelocityPID}{800}{600}


This PID allows the user to explore the effects of varying the velocity of a charged particle in a magnetic field. The whole can be viewed from different angles, as this is appropriate for electromagnetic phenomena.
 
The affordances built into the computer as a representation machine are exploited to manipulate vectors, somewhat intuitively, as first-class objects, leading to stories about motion as a foundation for kinematics. The language has control pucks and acceleration, velocity and displacement representations are built-in, to support such pedagogical reconstruction. But again, code is malleable, so other reconstructs can be facilitated by extending the language.

InsertGraphic{pdlIntroWatchRanaGo2DxvPID}{800}{600}

A PID for working with vectors, describing the movements of a hedgehog: part of an introduction to kinematics.

The language is deliberately modular and flexible, so using the same displacements as above and a combination of sliders and checkboxes, it is possible to assemble interactive diagrams that tell the physics narrative as one wants it, without having to mediate the telling via a professional developer. The existence of encapsulated primitives both supports consistency and allows for deep editability, for example being able to change the depiction of displacement across a suite of interactive diagrams, by changing the definition in the library file.

InsertGraphic{pdlIntroWavePID}{950}{400}

A complex PID developed as a part of re-imagining how the idea of a wave might be developed For children not fluent in algebra.

StepHeader{Arranging multiple diagrams on an infinite canvas}

The physics story space lays out an alternating series of panes and transitions from top left to bottom right to give a graphic novel-like experience to the narrative. The resources drawn on by the system are a structured text file, a series of prepared graphics, which can be, but need not be rendered in the diagram language, and a JavaScript/HTML/CSS framework. The core of the system is a parser that takes a structured text file and lays out the graphics as alternating panes and transitions in a rendering framework.

A complete physics story space, in overview mode, showing the entire multi-step argument. Four panes show the Steps and Three linking panes are populated by guides, rendering the moves between panes explicit. 

InsertGraphic{NgWildBrewDescriptionGuidedPSS}

As you navigate, notice how each active pane reveals the context, locating this step amongst many, with a menu to allow navigation between panes.

The physics roaming space lays out an array of panes in which the order in which the panes is visited is not important but being able to make comparisons between panes is. All eight panes can be interactive, and the menu or arrow keys enable navigation between the panes.


StepHeader{Resources}

https://processing.org (philoso[hy and background to processing)

https://p5js.org (reference  for p5js).

https://www.openprocessing.org (online coding environment, adaptable to include pdl).

http://www.scottmccloud.com/4-inventions/canvas/ (the idea of an infinite canvas, used to represent multiple argument steps).
