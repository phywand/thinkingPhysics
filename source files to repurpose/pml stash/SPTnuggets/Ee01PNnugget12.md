WebTitle{Fuses and earthing for safety(Exposition)}

StepHeader{Domestic circuits}

InsertGraphic{EePlugOpenIMCP}

Domestic circuits are more complex than those studied in the school laboratory. As with alternating current, however, simple models of these circuits illuminate the principles. Here we show how inserting fuses into circuits and earthing those circuits both contribute to making the circuits safer for us to use. Understanding more modern devices, such as miniature circuit breakers (MCB) SymbolEndash often now used to replace fuses SymbolEndash and earth leakage circuit breakers (ELCB), takes us beyond simple models of circuits, so these are not explained here.

A wire warms a little when there is an electric current in the wire. A larger current warms the wire more. And very large currents in a wire makes the wire very hot. It is also the case that large currents often indicate that the appliance is not working properly, suggesting that a fault has developed. Later, in episode 03, we find out how to calculate the normal working current for an appliance. If the current goes above that value, there may be a fault, so that we want to break the circuit, and isolate the appliance from the supply. That is the job of the fuse: it is a current-sensitive switch, and a very simple one at that. To make a fuse, place a short piece of wire that melts at a low temperature in the circuit. Once the wire has melted, the circuit is broken. The switch is irreversible, and the fuse must be thrown away and replaced. This is a cheap price to pay in return for enhanced safety. A correctly chosen fuse, which doesn't melt until the current exceeds the normal working current for the appliance, is a one-time switch. In practice there are many different working currents for difference appliances, and fuses are made with only a limited number of safe working (rated) currents. Once these rated currents are exceeded, the fuse melts. So to choose a fuse, calculate the normal working current for the appliance and then select the smallest rating of fuse that exceeds this value. Fuses are typically available with ratings of 3, 5, 10 and ValueUnit{13}{ampere}.

Although fuses insert an infinite resistance into any loop with a fault, they are a bit slow to react. There is a current in the loop whilst the fuse is melting. That loop might well include a human, and that's not a good thing. So now far faster and more senisitive current-operated switches are used (earth leakage circuit breakers), but these have more complex machanisms.

StepHeader{Building a model of an earthing circuit}


Many UK domestic circuits have three wires: live, neutral and earth. Live and neutral do the same jobs as the positive and negative terminals of the battery, setting charge in motion round a loop, of which these terminals are a part. But what is the function of the earth wire? It is again a safety feature, and specifically one for appliances that have conducting surfaces that a user can touch. These include: toasters, kettles with metal casings, microwave ovens, conventional ovens, hobs, and many fridges and freezers. The danger that the earth wire is designed to protect against is that a fault develops inside the appliance in a way that a human could become a part of a circuit, and so have a lethal current in their body. Such faults can be of two kinds: one where a wire directly connected to the QuoteThis{live} terminal becomes connected to the conducting surface open to the human, and one where a wire directly connected to the QuoteThis{neutral} terminal touches that surface. In between the live and neutral terminals is the device at the core of the appliance, where the energy is dissipated when it is working correctly. So you might guess that the first condition, where the human is effectively touching the live wire from the socket, is likely to be more dangerous. You'd be right. But why is this?

StepHeader{Parallel connections are the key to understanding earthing circuits}

InsertGraphic{EeParallelCctINCC}

To find out more, you have to think about circuits with parallel connections. These have several loops. When working normally, there is only one loop between live and neutral. If a wire makes a connection with the outer metal case, an extra loop is created between live and earth, or between neutral and earth, depending again on which side of the dissipating core the fault happens. If, in addition to this fault, someone touches the exposed conductor, there is another loop between live and earth, or neutral and earth, again depending on which side of the core the fault happens. There is only one key question to establish the safety of the appliance under these conditions: QuoteThis{How much current is there in the individual?} To find the answer, consider each loop in isolation, as with analysing any collection of parallel connections in a circuit.

However, to tidy up these loops further, first you need to know that the neutral wire is connected to earth at the power station, and so a direct current circuit model that connects the earth and neutral terminals represents what happens rather well. It doesn't work so well in providing safety features in real appliances, although for a while the earth and neutral wires were combined in the USA (to save copper, which was required for the war effort). In our model there shouldn't be a battery between the earth and neutral terminals SymbolEndash perhaps only some rather poorly conducting wire.

StepHeader{Now to explore and exploit the constructed model}

InsertGraphic{EeModellingEarthingCircuitsGuidedPSS}

Use the interactive to explore the model of earthing circuits that we have developed. See how adding the extra earthing loop makes appliances safe. Note that a fuse is drawn as the safety device here, but that it could equally well be a faster and more complex device, better able to cut off the current quickly enough so that the human does not get a shock. The earth wire fulfils the same function in the case of this substitution.

StepHeader{Appliances that do and do not use earthing circuits to enhance safety}

InsertGraphic{EeKettleDistributionBoardIMCP}

Some appliances don't have the earth wire connected. These same appliances are often referred to as being QuoteThis{double-insulated}. The reason is that the surfaces that the user can touch are all insulators, so there is no accessible conductor that could provide a link from the live or neutral wire to them. Typically, the outer surface is moulded plastic (e.g. a kettle). They do still have fuses, so that only the designed amount of power is switched in the device: more power than the deisgned value and you might get a fire.

Miniature circuit breakers are used to replace fuses,as they are faster, so they too are current-limiting switches SymbolEndash once the current in the circuit protected by the circuit breaker rises above a certain preset value, the switch is opened. However, unlike a fuse, the switch can be closed again because the circuit breaker can be reset. There are usually two active parts in the circuit breaker: an electromagnetic switch that responds to sudden and large increases in current and a thermal switch that responds to smaller and more slowly changing excess currents.

Earth leakage circuit breakers again function as switches, but they work a little differently. The current in the live wire is compared with the current in the neutral wire, by comparing the magnetic fields produced by coils wound using both of these wires (more on this in the SPT: Magnetism topic). If the electrical loop is complete and there are no additional loops (say via earth), then these two magnetic fields and currents will be the same. The sameness of the currents is just elementary circuit theory, as emphasised in the SPT: Electric circuits topic. If the currents are not the same then the live&ndash;neutral circuit is not a single complete electrical loop and so the circuit is cut. The difference in current can be very small SymbolEndash  that is what makes these devices more sensitive than fuses, and is another reason that they are better at protecting humans.

