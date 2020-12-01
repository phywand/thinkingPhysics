WebTitle{Electrical working in series circuits(Exposition)}

StepHeader{How to find the power dissipated in circuits with only series connections}

InsertGraphic{EePowerInSeriesGuidedPSS}

In episode 01 you saw how to find the current in this loop (with only series connections like this, there is only one value for the current), using the relationship FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}} and then the potential differences across the lamps, using the constraining relationships ProductABC{QuantitySub{V}{1}}{QuantitySub{R}{1}}{I} and ProductABC{QuantitySub{V}{2}}{QuantitySub{R}{2}}{I}.

Now you need only add to this analysis to find out the power dissipated in each lamp. This value is the power in the electrical working pathway, calculated by ProductQuantityABC{P}{I}{V}.

But, and it can be a big but, you need to take great care to use the correct values of QuantitySymbol{V} and QuantitySymbol{I}. Careful and explicit labelling will help you and those you teach to keep a clear head.

We emphasise again that QuantitySymbol{V}, QuantitySymbol{I} and QuantitySymbol{R}, without modifiers, are best reserved for entire circuits.

StepHeader{Keeping the calculations in order}

InsertGraphic{EeSeriesCCTIMCP}

You have to repeat a sum with variations two or three times, depending on how much you remember about the conservation of energy:

For the top lamp, ProductABC{QuantitySub{P}{1}}{I}{QuantitySub{V}{1}}.

For the bottom lamp, ProductABC{QuantitySub{P}{1}}{I}{QuantitySub{V}{1}}.

For the cell, ProductQuantityABC{P}{I}{V}.

Now start with SumABC{QuantitySymbol{E}}{QuantitySub{E}{1}}{QuantitySub{E}{2}}, which is just the conservation of energy, and remember that the energy shifted in any one second is just the power.

You'll get SumABC{QuantitySymbol{P}}{QuantitySub{P}{1}}{QuantitySub{P}{2}}, and you could use this relationship in place of one of the three multiplications.

You might like to review the process by completing the model provided in the support sheet.

SpacingLinebreak

InsertLink{Support sheet}{Ee02PN06PowerInSeriesPSD}
