WebTitle{Newton&apos;s second law and momentum(Expansion &ndash; tell me more)}

StepHeader{On throwing balls: changing velocity and changing momentum}

InsertGraphic{FmTennisCricketIMCP}

Throw a tennis ball QuoteThis{harder} and it leaves your hand faster. No surprise there SymbolEndash we're just describing an everyday occurrence in everyday language.

Now re-describe the situation using the more precise and rarefied language of physics: QuoteThis{Exerting a force on an object changes its motion: the object is accelerated.} You generalised and quantified this pattern in episode 01 of this topic, as we introduced Newton's Second Law.

So we'd hope that you can work out what happens if you switch a tennis ball for a cricket ball, increasing the mass of what you're throwing, whilst keeping everything else the same. Remember, and reason with: FractionABC{acceleration}{force}{mass}.

So you'll expect a smaller acceleration (same force, larger mass).

One thing missing from this account is the time during which you exert the force. As acceleration accumulates velocity, you'd expect that to have an effect. Again a reminder: ProductABC{velocity}{acceleration}{ SymbolDelta time} (or ProductQuantityABC{ SymbolDelta v}{a}{ SymbolDelta t}).

Stop for a moment and think through the two relationships, so that you can reason out, semi-quantitatively, the effects of changing (one at a time): the mass of the ball, the force exerted and the duration for which the force is exerted.

You've been reasoning that the force exerted and the duration for which it is exerted combine together to increase the release velocity, whilst increasing the mass decreases the release velocity(ProductABeqCD{QuantitySymbol{m}}{VectorOver{v}}{VectorOver{F}}{ SymbolDelta QuantitySymbol{t}} ). These four quantities are deeply involved in the analysis and we hope you'll be reminded of the connection between impulse and momentum: EqualityAssertion{ SymbolDelta VectorOver{p}}{VectorOver{I}}.

When you exert an impulse on an object you change its momentum.

When you exert a force on an object you accelerate it: accumulate the acceleration on over an interval and you change the velocity.

We suggest it's worth formalising the connection between the force-mass-acceleration approach and  the impulse-momentum approach.

StepHeader{A formal connection, assisted by algebra}

InsertGraphic{FmN2MomentumIPCC}

Start with the most familiar, from episode 01: FractionBdCeqA{QuantitySymbol{a}}{QuantitySymbol{F}}{QuantitySymbol{m}}, and then add, from episode 02:FractionABC{QuantitySymbol{a}}{ SymbolDelta QuantitySymbol{v}}{ SymbolDelta QuantitySymbol{t}}. Use this to replace QuantitySymbol{a} in the first relationship, to get FractionAdBeqCdD{QuantitySymbol{F}}{QuantitySymbol{m}}{ SymbolDelta QuantitySymbol{v}}{ SymbolDelta QuantitySymbol{t}}. 

A little rearranging then gives:

EqualityAssertion{FractionBlock{QuantitySymbol{F} SymbolDelta QuantitySymbol{t}}{QuantitySymbol{m}}}{ SymbolDelta QuantitySymbol{v}}.

This is useful for ball throwing, but you can go further, to get the previously met:

ProductABeqCD{QuantitySymbol{F}}{ SymbolDelta QuantitySymbol{t}}{QuantitySymbol{m}}{ SymbolDelta QuantitySymbol{v}}

 That's just the connection between the impulse delivered and the change in momentum of the object.


So there is a tight connection between Newton's second law and momentum, after all. In fact, Newton originally (translated to modern notation) wrote his second law as:
EqualityAssertion{FractionBlock{ SymbolDifferential QuantitySymbol{p}}{ SymbolDifferential QuantitySymbol{t}}}{QuantitySymbol{a}}
.

