WebTitle{Components not equal(Expansion &ndash; lead me deeper)}

StepHeader{Non-equal bulbs and resistors in series}

InsertGraphic{ElSeriesCircuitRopeVoltageUnequalIPSC}


Suppose two bulbs are connected in series and they are not identical. Suppose the resistance of bulb A is greater than the resistance of bulb B. How will the battery voltage be shared between the two bulbs?

The answer to this question is that a higher voltage is dropped across the greater resistance. In other words more voltage is dropped across bulb A. Why should this be?

More energy is shifted as charged particles pass through a bigger resistance. Think of the rope loop teaching model. If two pupils act as resistors but one pupil grips the rope more tightly than the other (greater resistance), the hand with the tighter grip warms up more than that with the looser grip.

The same argument is formalised using the relationship:

ProductQuantityABC{V}{R}{I}

The current (QuantitySymbol{I}) is the same through each bulb as the two bulbs are connected in series. Therefore a higher voltage must be dropped across the greater resistor.

Remember that the sum of the voltages across the two bulbs must still be equal to the battery voltage.

StepHeader{An example of a circuit with series connections to explore}

Here is a loop with series connections, where you can choose the battery and choose the bulbs, so setting the resistance of those bulbs. These choices have consequences for the current in the loop and the power dissipated by the bulbs and switched by the battery.

InsertGraphic{ElVIRPSeriesLoopPID}{800}{700}

You may well find the code intelligible SymbolEndash the physics is only a few lines, containing these essential relationships:

SumABC{resistance of loop}{resistance of first bulb}{resistance of second bulb}


FractionBdCeqA{current}{voltage}{resistance}

ProductABC{voltage}{current}{resistance}

ProductABC{power}{current}{voltage}

The rest is all concerned with display.

StepHeader{Non-equal components in parallel}

InsertGraphic{ElParallelCircuitRopeVoltageUnequalIPSC}

Suppose two bulbs are connected in parallel to a ValueUnit{3}{volt} battery and they are not identical: the resistance of bulb A is greater than the resistance of bulb B. What happens to the current in, and voltage across, each bulb in this case?

The voltage across both bulbs must be the same. Consider the two loops separately: the current in loop A is small (due to the high resistance), so the power switched by the bulb is small; the current in loop B is large (due to the lower resistance) so the power switched by the bulb is small.

The rope loop model can help to make sense of this; the power switched depends only on the grip and on the speed at which the rope passes through the hand.

Voltage across bulb A is ValueUnit{3}{volt}

Current in bulb A: relatively small

Power switched by bulb A: relatively small

Voltage across bulb B is ValueUnit{3}{volt}

Current in bulb B: relatively large

Power switched by bulb B: relatively large

StepHeader{An example of a circuit with parallel connections to explore}

Here are two loops, so a circuit with parallel connections, where you can choose the battery and choose the bulbs, so setting the resistance of those bulbs. These choices have consequences for the current in the loops and the power dissipated by the bulbs and switched by the battery.

InsertGraphic{ElVIRPParallelLoopPID}{800}{450}

You may well find the code intelligible SymbolEndash the physics is only a few lines, containing these essential relationships:

FractionBdCeqA{current}{voltage}{resistance}

SumABC{current through battery}{current in inner loop}{current in outer loop}

ProductABC{power}{current}{voltage}

The rest is all concerned with the display.
