WebTitle{A solver&apos;s toolkit(Exposition)}

StepHeader{A kitset for thinking about circuits}

First you'll have to identify the lkind of circuit you are dealing with.

InsertGraphic{EeCircuitKindsINCC}

To analyse a circuit usually means that you calculate all of the potential differences and currents from the cell potential difference and the resistances in the circuit. Sometimes there will be other puzzles, involving designing for a particular current, and so choosing a resistor, but the principles remain the same. From this analysis you will be able to find what the power is in each pathway SymbolEndash simply multiply the current by the potential difference for that pathway.

And here are the simple steps to follow:

ListSequence
- Identify each loop in the circuit.
- If a resistor appears in more than one loop, take special care (see episode 01).
- If more than one resistor appears in a loop, add together the resistances that do appear to give a single equivalent resistance. Then work with one resistor in the loop, of this calculated value.
- Calculate the current in each loop (WordSub{loop}{n}, where n indicates one of the loops), using FractionABC{QuantitySub{I}{n}}{QuantitySymbol{V}}{QuantitySub{R}{n}}.
- Add together the currents in each loop to find the current in the battery.
- You can find out the single equivalent resistance by dividing the battery potential difference by this current.
ListSequenceEnd

For combination circuits these are the steps:

InsertGraphic{Ee3StepsAnalysingComboCctsINCC}