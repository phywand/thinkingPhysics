WebTitle{Mechanisms of accelerating(Exposition)}

StepHeader{Loudspeakers}

Loudspeakers reproduce sounds by turning the to-and-fro movements of electrical currents, which encode the sound, into the to-and-fro movements of air. Power is switched from an electrical working pathway at the loudspeaker. (Another switch, to the electrical working pathway occurs at the ear, but this may not be so helpful a way of thinking about the ear—so not worth emphasising, but it is defensible).

What happens over here affect what happens over there, so it is a kind of remote working, and it is mechanical: pressure differences and forces on the ear and the loudspeaker are connected by the mechanical working pathway.

Place a wire in a magnetic field and alter the current in it. There is a force acting on the wire that changes as the current alters, even reversing in direction as the current reverses. Force changes motion, so the wire's movements change in response to the changing current. Now you need some careful engineering so that the moving wire sets enough air in motion for people to hear, and to ensure that the movement of the wire follows the changes in the electric current exactly. Attach the wire to a cone of paper. As the wire moves, so the paper will move, in turn shifting the air.

The to-and-fro motion can be accounted for in terms of a current in a wire in a magnetic field:

InsertGraphic{LoudSpeakerCoilMagnetGuidedPSS}

The motion can also be acounted for by describing one of the coils as a varying magnet:

InsertGraphic{LoudSpeakerMagnetPairGuidedPSS}

StepHeader{Improving loudspeakers}

InsertGraphic{EeLoudspeakerIMSP}

The first improvement is rather easier than the second. Rather than making the current travel once through the magnetic field, make it travel through the field many times by winding the wire into a coil. An extra force, equal in magnitude and direction to the original, is acting on each transit of the wire. Add these contributing forces (one acting on each transit of the wire) to get the resultant force on the coil. This resultant force can be increased further by altering the shape of the magnetic field so that a greater length of the wire is in the field SymbolEndash in fact the whole of the coil. This resultant force can now drive a large surface area to-and-fro, causing significant changes in density of the air over a large enough volume for people to hear.

The prices that some are willing to pay for their speakers in search of fidelity is evidence that the second improvement is not an easy quest, and that complete success is likely to be both elusive and controversial. There's much debate about the quality of sound produced by speakers, and refining this quality is a subtle art, linking together physics with psycho-acoustics.

StepHeader{Simple direct current motors}

Simple electric motors spin, but arranging magnets and currents in wires to obtain this motion is not straightforward.

Place a wire carefully in a magnetic field, connect a battery to drive current through the wire, and a force is acting on the wire, catapulting it out of the magnetic field at right angles to both the field and the current (That's just like a loudspeaker). This is a one-time effect and only the start of arranging for the motor to spin.

As with the loudspeaker, arranging for the wire to make multiple transits of the field increases the resultant force. To achieve this, wind the wire into a coil. The charge travels up one side of the coil and back down the other SymbolEndash two significant transits for each turn of the coil. This time, don't reshape the magnetic field SymbolEndash a near-uniform field works well for simple motors. As the current reverses in direction on the return journey down the second side of the coil, so the force on the current in the wire is reversed. The wires on one side of the coil get thrown upwards; those on the other side get thrown downwards.

InsertGraphic{Eemotor3DPID}{800}{700}

StepHeader{How the turning happens}

Explaining the spinning can be doen in one of three ways, shown below:

- coil as magnet, between magnets (top row)
- wire between magnets (middle row)
- fields exerting force on wires (bottom row)

 In each case there is a cross-section through the motor, and a magnified diagram of the commutator, which switches the current as the brushes make and break contact with the exposed opposite ends of the wire on the coil, which are the commutator.

InsertGraphic{EeThreeExplanationsForSpinningIPSC}


The first quarter turn is achieved by adding an axis to the middle of the coil for it to spin round.

With the coil now at right-angles to the magnetic field, the forces on the wires simply stretch the coil SymbolEndash they no longer act so as to spin it. But neither do they slow it down. That happens as soon as the coil, which is already moving, spins so that the out and back wires swap sides. The forces now act so as to return the coil to its position after the first quarter turn, at right angles to the field.

To continue the spin, simply reverse the direction of the current in the wires as the coil reaches this quarter-turn position. Now, as the wires swap sides, the force acting on the current also reverses by 180 degrees. The result is that whichever wire is on one side will always be pulled down, while the wire on the other side will always be pulled up. The wire coil is kept spinning. To reverse the direction of the current, use a split-ring commutator SymbolEndash a simple position-dependent reversing switch made of two brushes and a sliced ring that encases the axle of the coil.

StepHeader{Further improvements}

InsertGraphic{EeMotorGutsIMCP}

You can, of course, switch the magnetic field rather than the current to alter the direction of the force, but this is rather harder to do quickly. Reshaping the magnetic field by curving the poles makes the field near radial and so keeps the out and back transits of the wire at right angles to the field for longer.

You can add more coils, cutting the split-ring commutator once for each coil that you add. This makes the motor smoother, just as adding more cylinders to a car motor produces a smoother torque to drive the car.

