WebTitle{Transformers &ndash; changing back to where you started(Exposition)}

StepHeader{Transformers are pervasive, and a bit mysterious}

Transformers are devices connecting pathways yet they seem not to switch pathway SymbolEndash one electric circuit is linked to another (completely separate) electric circuit. The inbound pathway is electrical working, as is the outbound pathway. How can this be useful?

The key to their usefulness is that two pathways can be different in character, because the rate at which energy is shifted SymbolEndash the electrical working SymbolEndash is the product of the current and the potential difference. There can be the same power in the pathway for many different currents: smaller currents are compensated for by larger potential differences.

InsertGraphic{EeTransformerTradeOffsPID}{800}{600}

Next, you'll meet the principles for designing transformers to step up, or to step down, the potential difference to allow smaller or larger currents.

Transformers can be built to be very efficient SymbolEndash all of the power appears in the desired output pathway. So the power in the inbound pathway is effectively equal to the power in the outbound pathway:

EqualityAssertion{WordSub{power}{in}}{WordSub{power}{out}}

StepHeader{Transformers everywhere}

InsertGraphic{EeWallWartsIMSP}

Transformers appear at all scales, from providing small potential differences running all of the electronic devices in the home, to large substations on the National Grid, supplying very large potential differences. In between these two, the domestic supply is set at ValueUnit{230}{volt}. This is a compromise between improving safety, for which an even smaller potential difference might be preferred, and greater efficiency, for which a larger potential difference would be chosen.

The details are given in episodes 01 and 02. You choose the character of the pathway, constrained by both efficiency and safety.

To change the character of the electrical pathway, use a transformer. This device trades a change in potential difference for a change in current:
 ProductABeqCD{WordSub{current}{in}}{WordSub{pd}{in}}{WordSub{current}{out}}{WordSub{pd}{out}} (this must be true, as EqualityAssertion{WordSub{power}{in}}{WordSub{power}{out}}).

StepHeader{Stepping up and stepping down}

Described from the energy point of view, the transformer is a very simple device. You change the character of the electrical pathway, not the pathway itself. This change in character is fixed by altering the ratio of the number of turns on the two coils.

To step down the potential difference, choose more coils on the input side; to step up the potential, choose more on the output side: FractionAdBeqCdD{QuantitySub{V}{out}}{QuantitySub{V}{in}}{QuantitySub{N}{out}}{QuantitySub{N}{in}}

The ratio of the potential differences is equal to the ratio of the number of turns.

There is more detail about how transformers work later in this episode, but for now note that practical devices work using alternating current. There is no transforming action at all for steady, direct currents.

StepHeader{What is inside}

InsertGraphic{EeThreeLoopsIPCC}

A transformer is rather simple – there are no moving parts.

Two electrical coils are linked by a loop of magnetic material, typically iron. A transformer is just three linked loops, suitably arranged: the electrical loops are at right angles to the magentic loop.
