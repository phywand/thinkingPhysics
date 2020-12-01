WebTitle{Using a motor to lift(Exposition)}

StepHeader{A simple view of a motor}

InsertGraphic{EeMotorLiftingAccumulatingGuidedPSS}

One view of a motor is as a complex assembly of wires, magnets, axles, brushes and commutators. There are many different designs of electrical motor (e.g. brushed DC, stepper DC, synchronous AC) and considerable skill is deployed in adapting a design to a particular task. This might be for a particularly high-torque application, perhaps to generate large accelerations for an electric sports car, or an application where the working power is very small, but very little power can be wasted, such as in a solar-powered car.

A much simpler view is provided by developing a description in terms of energy stores or the power in pathways.

StepHeader{Working power and maximum power}


InsertGraphic{EeForkLiftIMCP}

There are many working powers for motors. Even in the domestic sphere you can find motors designed to agitate clothes in a washing machine, blend soup, grind coffee or to spin the hard disk in your portable music player. Precision movement is required for the last example SymbolEndash but perhaps not for much longer. The reproduction of music has depended on precise rotation from 78 rpm (revolutions per minute) singles, through the steady high speed for audio CD-ROM, to the steady high speed for hard disk drives (7200 rpm is commonly available at the time of writing). Perhaps flash memory players will supersede both hard disks and portable audio cassette players, with their need for very precise motors to draw the tape over the head at 1 FractionBlock{7}{8} inches per second. Nevertheless, if robots are to play any part in the future, there will be a great need for engineers to design motors with a range of precision and rated power.

But there is a simpler view (and physicists like simpler views) that provides guidance for all of this engineering. A motor is simply a device designed to switch from an electrical pathway to a mechanical pathway, so it's a kind of a transducer. A perfect motor will switch all of the power SymbolEndash there is no waste.

Use a battery to drive a motor, which is lifting a pallet (perhaps on a fork-lift truck). Then the device/pathway description provides a useful level of detail for one strategic view of the engineering demands. An even more abstract view is provided by a description in terms of stores SymbolEndash one that is even less concerned with the QuoteThis{how?}, and so even more focused on the QuoteThis{how much?}.

StepHeader{Perfect and less than perfect switching from one pathway to another}

InsertGraphic{EePerfectImperfectINCC}

Engineers are very much concerned with real motors, which are not perfect. Perfection is only an unattainable target: engineering is all about the right compromise.

Any motor has a significant length of wire, in which there is a current, and across which there is a potential difference, the value constrained by this relationship: ProductQuantityABC{V}{R}{I}. There will therefore be some warming in these motor wires. So a more realistic view of the motor is a device that switches from the electrical pathway to the mechanical working pathway and to the heating by particles pathway.

A less wasteful, more efficient motor is one where more of the power ends up in the mechanical working pathway.

As motors don't glow very much we can neglect the heating by radiation pathway; in other words, there is not much power in this pathway for most motors, until they are run beyond their design power, often resulting in a QuoteThis{burnt out} motor. This happens when the power switched from the input (electrical) pathway exceeds the three output pathways (mechanical working, heating by particles, heating by radiation). The energy shifted in exceeds the energy shifted out, and the thermal store is augmented, so the wire gets hotter and hotter until it eventually melts.

StepHeader{How to calculate accumulations in stores as a result of lifting}

InsertGraphic{EeGravityStoreFillingTradeOffPID}{600}{500}

Back to the motor of the fork-lift truck lifting a pallet. As the motor runs, so the battery is flattened and the load is lifted. The faster the load is lifted, the greater the rate at which the chemicals react in the battery and so it is depleted at a greater rate.

The motor switches from the electrical pathway SymbolEndash the energy shifted from the chemical store of the battery, and to the gravitational store, accumulates over time.

The power in the electrical pathway (set by the current and the potential difference, as before) and the time both set the accumulation.

StepHeader{Power in two pathways}

InsertGraphic{EeMotorCutawayIMCP}

The energy shifted to the gravitational store depends both on the force (mass  SymbolMultipliedby gravitational field strength) and the distance SymbolEndash here the height. You can check these connections in the SPT: Forces and the SPT: Energy topics. So you can calculate the energy shifted to the gravitational store accumulating as the height is varied. The force is fixed by the contents of the pallet that the fork lift picks up.

The energy accumulated in the gravitational store, as a result of the change in height, can be calculated by mass  SymbolMultipliedby gravitational field strength  SymbolMultipliedby height change. Check this makes sense using the units:  JustUnit{kilogram}  SymbolMultipliedby JustUnit{newton kilogram -1}  SymbolMultipliedby JustUnit{metre}, which simplifies to: JustUnit{newton}  SymbolMultipliedby JustUnit{metre}. Moving from units back to quantities, this is force  SymbolMultipliedby distance.

This calculates energy (see the SPT: Energy topic for more detail).

These two accumulations, due to the electrical and mechanical pathways, will be equal if the motor is perfect. We often use this simplified model because it's often a good guide to action. But for real motors, some energy will inevitably be shifted to thermal stores, so the accumulation calculated from the electrical pathway will be equal to the energy shifted to the gravitational store and to these thermal stores.

