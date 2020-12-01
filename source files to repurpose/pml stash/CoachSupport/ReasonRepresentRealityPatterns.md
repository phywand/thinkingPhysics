FileName: ReasonRepresentRealityPatterns

WebTitle{Patterns of reasoning with representations}

StepHeader{Building blocks: descriptions and transitions}

You can develop two kinds of descriptions of situations: of the lived-in, or physical world, and of the imagined, or conceptual world.  Four kinds of transitions move from one situation to another. These are simply common patterns of reasoning in physics.

InsertGraphic{RRRPanesTransitionsPID}{600}{330}

StepHeader{Developing lines of thinking}

As you explicitly develop a way of representing a phenomenon, so as to provide a courteous reasoning path for the children, it may help to represent the moves you make along the way, from one  description to another.

InsertGraphic{RRRTransitionsCRCPID}{800}{410}

InsertGraphic{RRRTransitionsPEPPID}{800}{410}

InsertGraphic{RRRTransitionsPIPPID}{800}{410}

Diagrams of any complexity can be built up, providing an overview of an argument, as you move from 'seeing it' one way to 'seeing it' another.

StepHeader{Describing processes (evolutions) or situations (states)}

For many processes studied in classical physics we think we've acquired some understanding of the process when we can write down a fixed deterministic rule  that describes how the process evolves:  what future state (there is only one – that's determinism) follows from the current state.

The paradigm for much of this aspiration is  the dynamical system of Newtonian mechanics. The rule of evolution for this dynamical system is a set of relationships that link the state now to the state a short time in the future , given as differential  or difference equations. To determine the states for all future times just keep iterating the relation many times: advancing step by step by step.

JustSpeak{Processes evolve through accumulations.}

There are a few relationships like this in elementary physics, but only a few. Many do not specify how a state will evolve into another: they are not concerned with specifying how a situation evolves over time—a process—rather they are concerned with relationships between different quantities in a given situation. These situations are more formally referred to as states.

A state quantity or state variable is a property of a situation that depends only on what's the case now, not on how that situation was reached, or even where it will go next. In thermodynamics a state variable describes the equilibrium state of a system—for example, energy in a thermal store. These are atemporal relationships, as there is no evolution over time: indeed no first one, then another.

Relationships that predict changes in quantities over processes are accumulations(quantities with accumulations: QWA): those that relate quantities in situations are constraints(quantities with constraints: QWC). These are two fundamental patterns of reasoning in SPT.

StepHeader{Accumulating}

Accumulating is all about fluxions: about changes over time. Newton was deeply interested  in change over time.  His invention of the calculus enabled a more precise description of how quantities changed over time: how they accumulated in either a positive or negative sense. The accumulating  quantity Newton called a  fluent, the quantity which set the accumulations a fluxion. These quantities  were central to his publication: "The Method of Fluxions".

To enable children to work with changes over time I think we might well gain from a return to this concern of tracking the change of a single quality through time. This would be similar to a sparkline, popularised by Tufte, as a common way of tracking quantities over time.

Accumulations are all about change, not about the accumulated effect, so there is a focus  on reasoning with and about  representations of quantities evolving over time, rather than rear view: studying a  completed process that has happened.

Conventional scatter graphs are like frozen rivers of time, perhaps recording what happened to the fluents and the fluxions, and invite geometrical rather than fluxion-based reasoning: these representations are therefore probably not the most helpful to support reasoning about accumulations.

StepHeader{Constraining}

Constraint relationships are all about possibility spaces. In a situation, or state, it's often the case that discoveries have been made about the values that different quantities can have: not every quantity can have any values—there are constraints. There are two facets to establish in introducing the discovery:

- that quantities are constrained
- how the quantities are constrained

Representing these relationships with a scatter graph is a geometrisation of 'If this then that'(IFTT), or a "game of consequences": the constraint relationships define the possibility space.  The phrase "possibility space"  seems more fruitful than "consequence space" as it reduces any tendency to think of time flowing as the consequences evolve (similarly, a comparison with IFTT  may not be that fruitful as it is (currently) a temporal, causal  internet service). It is the case that these kinds of relationship are most common in introductory physics, and least often explicitly modelled, perhaps because nothing happens by itself, and it is quite hard computationally. Constraint relationships are typically agnostic about cause, in and of themselves: they may point out the possibilities for, and consequences of, action on our part, but that action is not baked into the relationship.

 (This could be a very useful precursor to thinking about energy as this also defines possibility spaces (and impossibility spaces,  by analogy to the art world's figure and ground—you just cannot go there), although these are more extensive. It may function as an introduction to phase space, as well.)

Compensating  and proportional reasoning  are both specific cases within the more general pattern of constraint reasoning, both of which received a good deal of attention from Piaget. More recently, the difficulties in constraint reasoning in physics have been extensively  and effectively explored by Viennot.

JustSpeak{Constraining relationships apply to states, not evolutions. So situations, not processes.}

StepHeader{Accumulating relationships: always for  processes}

In this mode you can manipulate representations that  accumulate over time: that is involve rates of change. The foundation idea is that accumulations (numerical  integration) is rather simple – just like stacking up Cuisinaire rods, and so fundamentally based on addition. However differentiation, and all that talk of rates of  change and definitions such as

FractionBdCeqA{QuantitySymbol{a}}{dQuantitySymbol{v}}{dQuantitySymbol{t}}

can be rather off-putting.

In elementary physics there are rather few accumulating relationships, although some lie at the heart of difficulties with kinematics, which is all about such accumulations.

Using a  triangle to suggest an accumulation – a visual reminder that one quantity changes another with time—you could write:

QuantitySymbol{a}—&#9650;—QuantitySymbol{v} (QuoteThis{QuantitySymbol{a} tells QuantitySymbol{v} how to grow})

QuantitySymbol{v}—&#9650;—QuantitySymbol{x} (QuoteThis{QuantitySymbol{v} tells QuantitySymbol{x} how to grow})

(maybe coded as v+=a, x+=v). That's kinematics.

Time does not appear here, because it is a Newtonian universe, where the universal time is ticking away in the background, and we're dealing with processes (which  necessarily evolve over time).

There are a few more:

power—&#9650;—energy

current—&#9650;—charge

activity—&#9650;—number

and then you are essentially done. So the trick is to make it also appear to be that simple, and yet remain accessible.

In the imagined worlds rendered as computational models something happens on screen as the process unfolds, so there is both feedback and the chance to explore consequences. You can alter the rules and the initial conditions and  see the effects, rather than having to conjure all of them up by a heroic act of the imagination . That's perhaps why accumulating computational models have been a staple of teaching physics since DMS was introduced into Nuffield A level Physics in the late 1980s.

Here is a completed model

InsertGraphic{RRRxvaAccumulateGraphPID}{800}{800}

Accumulations can also be negative...


StepHeader{Constraint relationships : always for situations}

If reasoning with constrains you'll be manipulating representations to describe and make predictions about  situations rather than processes.

Let's start with a simple situation: comparing the impulse with the change in momentum.  Here's a simple computational model which has the two quantities, and allows you to vary their values by dragging. But there are no rules in the imagined world: there are no rules connecting the two quantities:

InsertGraphic{RRRImpulseMometumUnConstrainPID}{600}{410}

There are deep reasons for thinking that these two will always have identical values, that is both the numerical values and the units will be equal.

 EqualityAssertion{WordFraction{number for impulse}{unit for impulse}}{WordFraction{number for change in momentum}{unit for change in momentum }}

That is, the two are constrained. Vary the impulse and you necessarily alter the change the momentum **and** vary the change in momentum and you necessarily alter the impulse. It is a genuine assertion of equality, not an assertion of assignment.

QuoteThis{EqualityAssertion{change in momentum}{impulse}}

Is identical in meaning to

QuoteThis{EqualityAssertion{impulse}{change in momentum}}

(There is evidence that this is not how children read and use the equals symbol, and that this distorts their understanding of the snapshot-like nature of situations: so the distinction is important in teaching physics).

You can  adapt the model to reason like this. Here is a constrained pair: they go up and down together. Drag either to vary the value and the other alters.

InsertGraphic{RRRImpulseMometumConstrainPID}{600}{410}

You can present this as either an empirical discovery about the world, or an a priori truth: but whichever way you look at it, it's a  rather significant and reliable relationship. So worth treating with respect—it was a hard won discovery.

This is a rather simple example,  and there are many constrained relationships in elementary physics – perhaps most of them.  It is easily possible to do a categorisation, and then count!

Constraining relationships with three terms are very common: here is one:

FractionBdCeqA{QuantitySymbol{a}}{QuantitySymbol{F}}{QuantitySymbol{m}}

But respecting the insights into the abuse of the equals sign, perhaps exacerbated by the use of 'triangles', let's represent these three quantities, at first in a model where there are no rules.

InsertGraphic{RRRaFmUnconstrainPID}{600}{360}

You might not like the arrangement of the representations here—the force is not exerted on the mass—but it suited me to arrange it to match the relationship above. If you object strongly enough , adapt the code(EFTR).

Now you could add some rules into the imagined world, representing the discovery that QuantitySymbol{a}, QuantitySymbol{F} and QuantitySymbol{m} are bound together in a permanent relationship. Here the mass is kept constant, so that you can explore the effect of one independent variable on one dependent variable, again by dragging.

URLFrame{http://supportingphysicsteaching.net/CoachSupport/pml/ShowExplore.html?file=http://supportingphysicsteaching.net/CoachSupport/PESsource/RRRaFmConstrainedPES.html}{900}{600}

Again, whether an empirical discovery about the world, or an a priori truth: another  rather significant and reliable relationship. It's not just a calculating device: it's a relationship between important quantities in the physics world.

Constraining is all about exploring what could or could not be the case in a situation. Some possibilities are ruled out, because of the rules that we've learnt to be reliable guides to action (the 'laws' of physics). So you could make a bit of a fuss about this, exploring first the possible values when the quantities are unconstrained, and then the possibilities when the quantities  are  constrained. As constraining restricts the possible values, so you get back to linear graphs, but by an insightful route.

Constraints apply to many different relationships, not just to two- and three-term relationships: compensated circuits( An SPT activity) and transformers are two applications where you'd want to model something like:

ProductABeqCD{QuantitySub{I}{1}}{QuantitySub{V}{1}}{QuantitySub{I}{2}}{QuantitySub{V}{2}}

So create the quantities and then constrain them, to give a computational model:

InsertGraphic{RRRConstraintVIVIegPID}{800}{600}

Here you can drag both currents to set the values, but neither pd.  That allows you to have one independent and one dependent variable. To change these, grab the code and alter the model.

Whereas it seems important to build explicit contained computation models to establish the principles, it might not be so fruitful todo so with more complex relationships, such as



EqualityAssertion{QuantitySub{F}{g}}{FractionBlock{QuantitySymbol{G} SymbolMultipliedby QuantitySymbol{M} SymbolMultipliedby QuantitySymbol{m}}{QuantitySuper{r}{2}}}

This is, rather famously, atemporal.

However it will probably be helpful to emphasise the atemporal nature of the relationship: that it models a situation, not a process, and so is an example of a constraint relationship.
