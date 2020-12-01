WebTitle{Modelling simple circuits(Introduction)}

StepHeader{Putting together a circuit}

Imagine yourself setting up a simple circuit. What do you do?

Head for the store-cupboard, and select some components:

ListInformation
- Choose a cell.
- Select a lamp.
- Pick up some wires to connect in a loop.
ListInformationEnd

Connect the different circuit elements together to form one complete loop, and you get an electric current in the loop: flow of charge.

InsertGraphic{EeAssembleACircuitGuidedPSS}

The lamp will light if enough power is dissipated. Too little power dissipated and the filament will warm up, but not enough to glow.

If it doesn't glow, what do you do? Pick up a lamp with a lower resistance (one with a thicker and/or shorter filament) or a cell that provides a larger potential difference SymbolEndash or even both, if you are careful enough. Both changes will increase the current.

StepHeader{Try building a model}

InsertGraphic{EeIVRmodelChoicesPID}{800}{500}


Now think through what you do in terms of representing what is happening in a circuit as a computable model:

ListInformation
- You set the potential difference by choosing the cell.
- You set the resistance by choosing the lamp.
ListInformationEnd

The current is fixed by the potential difference and the resistance. You cannot choose the current directly.

There will be other resistances that impede the flow of charge: it won't only be the filament of the lamp. The wires will present some resistance but very little compared with the filament lamps as they are very much thicker and made of materials that conduct very well. That all of the resistance in the loop is very nearly the same as the resistance of the lamp was argued in detail in the SPT: Electric circuits topic.

The cell also has charge flowing in it SymbolEndash the cell is a part of the loop. The materials that the cell is made of also impede the flow. This resistance is also usually not too large, and in well-designed cells it will be close to zero. However, it is often not zero, and cells with a large flow through them may get hot as a result of this internal resistance. More on this in episode 04.

You could build a number of models to emphasise the importance of these constraints. Here are two that can be adapted by you.


TeacherTip{The potential difference may be a new term to you. It was introduced in the SPT: Electric circuits topic, but only as an extension. We suggest that you use it consistently in teaching older children for the quantity measured in volts, which you might previously have called the voltage. By the end of this episode we hope that you will see why it is a more precise and more evocative term.}

StepHeader{Now for the physical model}

InsertGraphic{EeModelACircuitGuidedPSS}

The same choices are made in modelling an electrical loop with a rope loop. The potential difference is modelled by the pull of the person modelling the cell; the resistance by the sliding frictional force applied by the hands of the person modelling the resistor. The steady movement of the rope comes about as a result of these two forces coming into equilibrium. So the flow of rope (JustUnit{metre second -1}) models the flow of charge (JustUnit{coulomb second -1} or ampere): the current. There is a short settling down period, after which a steady flow of rope past each point represents the steady flow of charge past each point. Electric circuits also have this short settling down period. Then energy is shifted at a steady rate, here modelled by the QuoteThis{battery} hands getting tired, and the QuoteThis{resistor} being warmed by the action of the rope.

Again the flow is fixed by the representatives of the two circuit elements: the cell and the lamp. One person chooses how hard to pull, the other how hard to squeeze the rope. The movement of the rope, representing the current, is a result of these actions.

StepHeader{The current depends on the circuit elements that you place in the circuit}

InsertGraphic{EeIVRGuidedPSS}

The relationship between the voltage, resistance and current in a complete circuit is one of dependence. This can be shown by writing the relationship in these forms:

FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}}

or write it out

FractionABC{current}{potential difference}{resistance}

or include units,

FractionABC{current/ampere}{potential difference / volt}{resistance / ohm}

or abbreviate:

FractionABC{QuantitySymbol{I}/A}{QuantitySymbol{V} / V}{QuantitySymbol{R} / SymbolOhm }

or

FractionABC{QuantitySymbol{I}/JustUnit{ampere}}{QuantitySymbol{V} / JustUnit{volt}}{QuantitySymbol{R} /JustUnit{ohm}}

Choose an alternative to suit your class.

Your actions in building the circuit, the computable model and the physical model all follow this pattern.

(As an aside, remember that this algebraic statement shows the interrelationship of three physical quantities: it is not Ohm's law.)

Algebra is much more flexible, allowing you to represent this relationship in many different equivalent forms. However, overly slick use of algebra by a confident student or teacher can undermine physical understanding. So we suggest keeping it simple and direct, not exploiting this flexibility, and consistently writing:

FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}}

