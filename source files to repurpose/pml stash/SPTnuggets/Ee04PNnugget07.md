WebTitle{Quantifying pathways(Exposition)}

StepHeader{Calculating power in all four pathways}

InsertGraphic{EeFourCalculablePathwaysPID}{400}{320}

Here is how to calculate the power in each pathway directly SymbolEndash at least in principle. In practice, some of the required measurements might be hard to do.

Electrical working: FractionBlock{joule}{coulomb} SymbolMultipliedby  FractionBlock{coulomb}{second}

Mechanical working: FractionBlock{joule}{metre} SymbolMultipliedby  FractionBlock{metre}{second}

Heating by particles: FractionBlock{joule}{particle} SymbolMultipliedby  FractionBlock{particle}{second}

Heating by radiation: FractionBlock{joule}{photon} SymbolMultipliedby  FractionBlock{photon}{second}

You might be more familiar with the first two as:

Electrical working: p.d. SymbolMultipliedby current

Mechanical working: force SymbolMultipliedby velocity

StepHeader{Checking the switching from pathway to pathway}

InsertGraphic{EePathwayCalculationsPRS}

If you can calculate the power in each pathway in a particular case, then this can give another route to finding energy efficiency. Remember that power is just energy per second.

Because the pathways description is often closer to the mechanism, this may be a better practical route to improving the efficiency. Find the leaky pathways, decide which can be fixed and then plug the leaks. More of the input power will be directed to the desired output pathway.

Imagine running the system for exactly 1 second. Calculate the percentage of the input energy ending up in the desired output and you have the efficiency: EfficiencyCalc{WordSub{energy}{out}}{WordSub{energy}{in}}.

