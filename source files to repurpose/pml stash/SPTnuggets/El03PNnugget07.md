WebTitle{Calculating electrical power(Exposition)}

StepHeader{Example calculations}

InsertGraphic{ElTwelveVCctINCC}

Going back to the circuit we started with, you can see that the electrical power is calculated by multiplying together the current in the bulb and the voltage across it. In general:

FractionAdBeqCDdEF{power}{watt}{voltage}{volt}{current}{ampere}

Now, the voltage across bulb is ValueUnit{12}{volt} and the current in bulb is ValueUnit{2}{ampere}, so

ProductABC{power of bulb}{ValueUnit{12}{volt}}{ValueUnit{2}{ampere}}

and the power of the bulb is calculated as ValueUnit{24}{watt}.

Note that the power calculated here includes the total energy shifted by the bulb through lighting and through heating. The energy shifted by the electrical working pathway does not all end up being shifted by the lighting pathway. The bulb is not as efficient as we'd like. More on this can be found in the SPT: Energy topic.

StepHeader{An example to explore}

Here is a simple loop, where you can choose the battery and choose the bulb, so setting the resistance of that bulb. These choices have consequences for the current in the loop and the power dissipated by the bulb and switched by the battery.

InsertGraphic{ElVIRPSimpleLoopPID}{800}{500}

The code is quite intelligible SymbolEndash the physics is only two lines:

FractionBdCeqA{current}{voltage}{resistance}

and

ProductABC{power}{current}{voltage}

The remaining code is all concerned with the display.
