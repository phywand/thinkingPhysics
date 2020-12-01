WebTitle{Transformer input and output(Expansion &ndash; lead me deeper)}

StepHeader{Lenz's law}

The conservation of energy is a very fundamental principle: the energy shifted from one store is equal to the energy shifted to other stores.

Power in pathways also respects this principle, in that no device can do more than switch pathways: the output power can be no more than the input power.

If you propose a process where more power emerges than you put in, you are certain to be wrong. So, if there are only two possibilities, and you eliminate one, the other must be true. This is how to decide about the relationship between the direction of flow in the output coil and the changing flow in the input coil. We show that one possibility violates the conservation of energy, and then conclude that the other possibility must be true.

So to work: describing what turns out not to be possible.

StepHeader{Arguments about the conservation of energy}

InsertGraphic{EeThreeLoopsINCC}

Consider the input electrical loop with an increasing flow and so producing an increasing magnetic effect in the linking loop. The output electrical loop will have a constant potential difference induced across it. This can only be in one of two directions. This potential difference will drive an electrical current that also produces a magnetic field, and so a magnetic effect. One direction will produce a magnetic effect that adds to the existing effect, produced by the input coil. In this case, a change in magnetic effect induces a potential difference that drives a current that increases the magnetic effect, so leading to a greater potential difference being induced, and therefore to a larger driven current in the output. The positive feedback loop continues without limit. Now the output coil has a growing potential difference and a growing current, so there is more power in the pathway ProductQuantityABC{P}{I}{V}). This is without making any changes to the input. You're now getting something for nothing, and there is no longer compensation in changing the character of the pathway: both the output potential difference and the output current are growing.

Conclusion: the opposite case must be true. The potential difference across the output must be of such a polarity that the current driven produces a magnetic effect that decreases the inducing magnetic effect.

Starting with a decreasing electrical flow in the primary changes all of the signs in the argument, and again leads to the conclusion that the magnetic effect produced by the current driven by the induced potential difference in the output loop must be in such a direction that it opposes any changes in the magnetic effect.

This result is know as Lenz's law, but now you can see that it is really just the conservation of energy. In further studies we'd just write:

ProductABC{induced potential difference}{-constant}{change in magnetic effect}.

Sometimes a simple minus sign represents a lot of physical reasoning.

StepHeader{Inputs and outputs for transformers}

InsertGraphic{TransformersInAndOutPID}{600}{600}

An alternating potential difference is one that repeatedly changes polarity, driving electrical current first one way and then the other. Tracing out the variation over time can give any number of patterns, while still being alternating (sawtooth, ramps and square waves are all possibilities).

The mains supply is sinusoidal, so it's worth thinking about how this works in a transformer. We think it's best to choose a few instants to think about, to predict how the changing linkage will affect the induced potential difference.

When the current in the input electrical loop is small, but growing rapidly, the magnetic effect in the linking loop is also growing rapidly, so the induced potential difference is large and negative.

StepHeader{Current in one electrical loop related to potential difference across the second}

InsertGraphic{EeTracesINSC}

When the current in the input electrical loop is at its maximum positive value (no longer growing), the magnetic effect in the linking loop is also large, but no longer growing, so the induced potential difference is zero.

When the current in the input electrical loop is small, but shrinking rapidly, the magnetic effect in the linking loop is also shrinking rapidly, so the induced potential difference is large and positive.

When the current in the input electrical loop is at its maximum negative value (no longer growing), the magnetic effect in the linking loop is also large, but no longer growing, so the induced potential difference is zero.

Certain of these points, we can now fill in the graph, to show that the induced potential difference is also sinusoidal (so the current in the output electrical loop will be too), but that it does not peak at the same time as the input. We say that the input current is QuoteThis{out of phase} with the induced potential difference.

