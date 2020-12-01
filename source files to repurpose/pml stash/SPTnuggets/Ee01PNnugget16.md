WebTitle{Loop models of simple circuits(Summary)}

StepHeader{Pulling the model together}

InsertGraphic{Ee01PNSummaryIFCC}

Think about the effect that your choices in assembling the circuit have on the loops. That's the place to start analysing circuits.

StepHeader{Modelling with loops}

InsertGraphic{EeLoopModelsSummaryPRS}

To analyse a circuit containing several resistances, reduce it to a single equivalent loop containing only one resistor. A circuit is equivalent when the current in the battery is the same.

For series connections, add the resistances to find the equivalent resistor. Then find the current. This current can then be related to the potential difference across each resistor by using one of the two constraining relationships: ProductABC{QuantitySub{V}{1}}{QuantitySub{R}{1}}{QuantitySymbol{I}}; ProductABC{QuantitySub{V}{2}}{QuantitySub{R}{2}}{QuantitySymbol{I}}.

For parallel connections, treat the two loops separately and then add the current in each loop to find the current. From the current and potential difference you can calculate the required single equivalent resistor.

The current in and the potential difference across each element of the circuit set how much energy is shifted by that element over any fixed duration.

StepHeader{Circuits with both kinds of connections SymbolEndash nothing new, just loops}

InsertGraphic{EeSeveralCircuitsINSC}

Compound circuits, containing both parallel and series connections, require more sophisticated analysis. This analysis still uses loops, which is part of the reason why they are emphasised here.

In particular, a resistor (or lamp) that is part of two separate loops will have two contributions to how its resistance constrains the current and potential difference. The complexities that arise make this more suited to post-16 study because more difficult algebraic manipulations are essential.

