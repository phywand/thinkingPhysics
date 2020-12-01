WebTitle{Battery-accelerated car(Exposition)}

StepHeader{A simple view of accelerating masses}

InsertGraphic{EeMotorAcceleratingAccumulatingGuidedPSS}

Using batteries to accelerate a model car will involve different complex technologies. The energy picture is both simple and clear: a chemical store empties and and a kinetic store fills.

The electrical link is missing altogether: the energy picture is that abstract.

The description using pathways fills in a little detail, without providing the precise mechanisms and detailed thinking necessary to make a device that works. Rather, this level of description provides a way of understanding what can be achieved and what cannot.

The motor switches from the electrical pathway SymbolEndash the energy shifted from the chemical store of the battery, and to the kinetic store, accumulates over time. The power in the electrical pathway (set by the current and the potential difference, as before) and the time both set the accumulation. This power in the electrical pathway sets the maximum rate at which the kinetic store accumulates.

Why the maximum? Simple: the motor is not perfect. Some of the power in the electrical pathway will accumulate energy in a thermal store.

StepHeader{Energy from store to store through switched pathways}

InsertGraphic{EeBatteryCarIMCP}

That not all of the energy is shifted from the chemical store to the kinetic store is certain, at least in the real world. That still leaves you with a decision about how to model this as a useful description using pathways. There are at least two possibilities.

In the first, we suggest that you focus on the motor as the switching device. This isn't completely effective because the wires of the motor present some electrical resistance and so cause some warming. Some of the power in the electrical pathway is switched to the heating by particles pathway, leaving most still switched to the mechanical working pathway.

In the second, the car as a whole is the switching device. The input is now still the electrical pathway, but the output paths are two mechanical working pathways: one serves to accelerate the car, the other works on the air, warming it, and so accumulating energy in the thermal store.

The choice of which model is more appropriate depends on the task at hand: improving the motor, or improving the ease with which the car acquires speed as it slips through the air and propels itself along the road.

StepHeader{How to calculate accumulations in stores as a result of accelerating}

InsertGraphic{EeKineticStoreFillingTradeOffPID}{600}{500}

Here is a common model of the battery-driven car: a QuoteThis{good-enough} guide to action.

The power in the electrical pathway (set by the current and the potential difference, as ever) and the time both set the accumulation. You choose the character of the pathway to suit the devices at either end: the battery and the motor.

The energy accumulating in the kinetic store is set by the power in the mechanical working pathway and the time.

StepHeader{A non-obvious, but illuminating, graph}

InsertGraphic{EeEnergyShiftedInAcceleratingINCC}

Another way is to plot a seemingly uninteresting graph SymbolEndash of mass  SymbolMultipliedby  velocity against velocity. This will always be a straight line through the origin, with a gradient of the mass. However, the area of the graph is interesting: it will be measured in JustUnit{metre second -1} SymbolMultipliedby  JustUnit{kilogram} SymbolMultipliedby  JustUnit{metre second -1}.

Why is this interesting? Only because it is exactly JustUnit{metre} SymbolMultipliedby JustUnit{kilogram} SymbolMultipliedby metre WordSuper{second}{-2}.

This can be shown with simple algebra: get out the pencil and paper and convince yourself. I hope you'll recognise these collections of units as distance SymbolMultipliedby mass SymbolMultipliedby acceleration, and then see that you can collect them as distance SymbolMultipliedby force, and then (really the last step) remember that this calculates energy shifted (covered in the SPT: Energy topic).

Looking at the triangle on the graph that represents the energy one last time, you should be able to see that its area is GroupBlock{FractionBlock{1}{2} SymbolMultipliedby mass SymbolMultipliedby velocity SymbolMultipliedby velocity} (GroupBlock{FractionBlock{1}{2} SymbolMultipliedby height SymbolMultipliedby base} is the area of a right-angled triangle).

Tidy this expression up to get GroupBlock{FractionBlock{1}{2} SymbolMultipliedby mass SymbolMultipliedby WordSuper{velocity}{2}}. More simple algebra: again it's best to convince yourself with a pencil and paper.

So the energy accumulated in the kinetic store as a result of the acceleration can be calculated by GroupBlock{FractionBlock{1}{2}  SymbolMultipliedby mass  SymbolMultipliedby WordSuper{velocity}{2}}.

