WebTitle{Force changes momentum(Exposition)}

StepHeader{How do you add to the quantity of motion?}

InsertGraphic{FmJetBoatIMCP}

Just push for a while, causing a change in the velocity: that adds to the quantity of motion.

The longer you push, the greater the change in the quantity of motion of the object. You can either add to the quantity of motion, or reduce it. Notice that there's an implicit point of view here, as your feet need to be anchored to something to push. It's on that basis alone that you can claim that you add to, or take away from, the quantity of motion. The change in motion does not depend on this particular point of view, so wherever you view the action from, the change in motion won't change SymbolEndash it'll be invariant.

This invariant quantity, the amount by which you change the motion, is called the QuoteThis{impulse}. The duration and intensity of your interaction with the object both contribute to the impulse.

You now know that the intensity of the interaction can be modelled by isolating the object and drawing a force arrow of appropriate  direction and length (and of an appropriate kind, to keep the thinking clear based on the physical basis of the interaction modelled).

The duration, as in episode 02, is the time interval between the start and finish of the interaction.

So the impulse can be calculated as: ProductABC{impulse}{force}{time}.

The impulse looks just like another accumulation, this time an accumulation of force over time. Push for a longer duration, or exert a larger force, to accumulate more change in the motion.

Other accumulations caused changes in linked quantities. For example:

ListInformation
- Acceleration accumulating over time changed the velocity.
- Velocity accumulating over time changed the displacement.
- Power accumulating over time changed the energy.
- Force accumulating over distance also changed the energy.
ListInformationEnd

The first two are both from this topic, the second two from the SPT: Electricity and energy topic.

So what quantity associated with the motion is changed by the action of the impulse?

Paying attention to units will reveal an insight into just how your impulse has affected the motion.

StepHeader{Choosing an appropriate measure of motion changed by an impulse}

The required measure turns out to be something new: neither the velocity nor the energy added to the kinetic store will do. To see why not, we'd suggest looking carefully  at these three measures:

ListInformation
- Impulse is measured in newton-second (force  SymbolMultipliedby duration).
- Energy is measured in joule (force  SymbolMultipliedby distance).
- Velocity is measured in JustUnit{metre second -1}.
ListInformationEnd

What could impulse change?

Velocity doesn't look possible SymbolEndash the units of the measures look too different, but you'd better check.
ListInformation
- impulse: JustUnit{newton second}
- velocity: JustUnit{metre second -1}
ListInformationEnd

There ought to be a more rigorous way to compare the units SymbolEndash and there is. Let's try it with a more likely candidate: the energy.

The energy indeed looks like a possibility SymbolEndash a candidate for the measure of motion changed by the impulse. That is, the impulse will change the energy (EqualityAssertion{ SymbolDelta energy}{impulse}). Because this is an equation, the quantities on both sides ought to be equal SymbolEndash that is both the numbers and the units. If the units don't agree, then it doesn't matter what the numbers are: the units provide the general condition, the numbers the particular. Here we're interested in the general.

We can compare these two quantities by reducing them all to SI base units (metre, kilogram, second, etc.). This is done by looking for relationships connecting energy and force  to measures in metres, kilograms and seconds (which happen to be all the base units in this case).

Recall (or check in the  SPT: Energy topic and the  SPT: Forces topic, and in episode 01 of this topic):

ProductABC{energy}{force}{distance}

This implies a relationship amongst the units:

ProductABC{joule}{newton}{metre}

Getting, there, but we still need to connect force to more fundamental measures. You may remember, from  episode 01: FractionABC{acceleration}{force}{mass}.

You can rearrange this, to deduce the connections between the measures: ProductABC{force}{mass}{acceleration} (expressed in units ProductABC{newton}{kilogram}{metre WordSuper{second}{-2}}).

So now you have reduced newton to the base units, and a simple comparison is possible, between joule and GroupBlock{kilogram  SymbolMultipliedby JustUnit{metre second -2} SymbolMultipliedby JustUnit{metre}}, which can be cleaned up as FractionBlock{kilogram  SymbolMultipliedby WordSuper{metre}{2}}{WordSuper{second}{2}} .

Impulse, expressed in units, is: GroupBlock{newton  SymbolMultipliedby second}, which can be expanded to GroupBlock{kilogram  SymbolMultipliedby metre WordSuper{second}{-2}  SymbolMultipliedby second}, which can be cleaned up to represent the units of impulse as FractionBlock{kilogram  SymbolMultipliedby metre}{second} .

So it doesn't matter what the numbers are SymbolEndash the impulse can't be equal to the change in the energy in the kinetic store.

StepHeader{A powerful, general, way of thinking}

InsertGraphic{FmThinkingWithUnitsINCC}

This is a powerful, general and rich way of reasoning, but may not be for all students at this age.

In later study it will become even more formalised as thinking with dimensions, where it can be a powerful method of checking and even discovering the possible forms of empirical relationships. The basis is very simple: a relationship must contain an equals sign, and so the measures on both sides must be equal:

(EqualityAssertion{WordSub{quantity}{1}}{WordSub{quantity}{2}}).

Once you remember that quantity is an amalgam of unit and number, you get:

FractionAdBeqCdD{WordSub{quantity}{1}}{WordSub{unit}{1}}{WordSub{quantity}{2}}{WordSub{unit}{2}},

and so

EqualityAssertion{WordSub{number}{1}}{WordSub{number}{2}}

only if 

EqualityAssertion{WordSub{unit}{1}}{WordSub{unit}{2}}.

So it doesn't matter what the numbers are SymbolEndash the impulse can't be equal to the change in the energy in the kinetic store.

It's only a variation of that old adage that equations only work if you use either pears or apples, and don't try to add pears to apples.

StepHeader{Introducing momentum}

InsertSWF{Fm_ForcetimesTime}

The units of whatever is changed by the impulse are: FractionBlock{kilogram  SymbolMultipliedby metre}{second}. You can make a subtle regrouping: kilogram  SymbolMultipliedby FractionBlock{metre}{second}, and then go back to physical quantites: ProductABC{ SymbolDelta (physical quantity)}{mass}{velocity}.
This new quantity is given a name: it is momentum.
ProductABC{momentum}{mass}{velocity} (or, in symbolsProductABC{p}{m}{v}).

As velocity is a vector, momentum must be a vector as well.

When you exert an impulse (QuantitySymbol{I}) on an object you change its momentum.: EqualityAssertion{ SymbolDelta VectorOver{p}}{VectorOver{I}}.

You can also write this out more fully as SymbolDelta ProductABeqCD{QuantitySymbol{m}}{VectorOver{v}}{VectorOver{F}}{ SymbolDelta QuantitySymbol{t}}.

