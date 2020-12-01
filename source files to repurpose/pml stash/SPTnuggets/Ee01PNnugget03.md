WebTitle{Why 230 volt is a safe limit(Exposition)}

StepHeader{Safety through restricted currents}

InsertGraphic{EeBathroomSwitchIMCP}

A potential difference of ValueUnit{230}{volt} is quite safe, but this safety is a trade-off for lower efficiency (we explain why it is more efficient in the next episode).

The hazard posed by any electrical outlet is determined largely by the potential difference. Quite small electrical currents through the human heart can cause it to malfunction, with terminal consequences for the owner. (Death from electric shock is called electrocution.) However, your resistance is quite high (mostly your skin). The largest potential difference that can be applied across you without driving a lethal current in you can be calculated, by modelling you as the resistor in an electrical loop. The outlet itself might also provide some resistance in the circuit, and this internal resistance (internal to the electrical source, or QuoteThis{power supply}) is the other factor that determines the safety of the outlet.

How much current is lethal depends on the path that the charged particles take as they drift through your body SymbolEndash paths that include the head or heart require lower currents to cause death. ValueRange{0.1}{0.3}{ampere} is an approximate value for a lethal current: this is thought to vary with the individual as well as with the path. The smallest current that you can feel is about ValueUnit{0.001}{ampere} (ValueUnit{1}{mA}) SymbolEndash you'd report this as an electric shock (after electrocution you wouldn't be alive to make the report).

Dry skin has a resistance of approximately ValueUnit{100,000}{ohm}, but wet skin can be 100 times less than this, so only ValueUnit{1000}{ohm}. The difference made by so little moisture is a major reason for the folk wisdom, captured in the aphorism: QuoteThis{electricity and water don't mix}. It also explains why normal light switches should not be mounted inside bathrooms. Pure water is not a very good conductor, but you only need a few ions in the water (and the body provides plenty as it perspires) to make it rather a good conductor, as the ions are very mobile, carrying charge as they move. As you are ValueUnit{90}{&percnt;} water, with many ions in your internal transport systems, the electrical resistance of your internal organs is tiny compared with the resistance of your skin. So this simple model, ignoring the resistance of the internal organs, provides a sufficiently accurate prediction of the current.

StepHeader{Sums in the wet and in the dry}

InsertGraphic{EeWetHandIMCP}

Armed with these data and the model, calculations reveal the wisdom of choosing ValueUnit{230}{volt}.

First calculate for a circuit where dry skin provides all of the resistance.

FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}}

FractionABC{QuantitySymbol{I}}{ValueUnit{230}{volt}}{ValueUnit{100 000}{ohm}}

The current is ValueUnit{0.00230}{ampere}, which is an electric shock.

Now the same calculation, but for wet skin.

FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}}

FractionABC{QuantitySymbol{I}}{ValueUnit{230}{volt}}{ValueUnit{1000}{ohm}}

The current is now ValueUnit{0.230}{ampere}, which is likely to lead to electrocution, if the loop includes the heart.

In other countries, the domestic supply voltage is ValueUnit{120}{volt} SymbolEndash safer, but less efficient (we will explain more later, in episodes 03 and 04).

For transmission over long distances, the supply voltage is much higher: ValueUnit{11}{kilovolt}, rising to ValueUnit{110}{kilovolt}, and even ValueUnit{400}{kilovolt} for very long distances. This is more efficient, but has to be kept farther away from humans SymbolEndash usually on high pylons. We'll return to the reasons why it is more efficient in episode 02.

These models are simple, and there are significant and complex effects if the current is alternating, rather than direct, as we have assumed. However, at low frequencies, such as are used for the mains electricity supply, these effects do not alter the main conclusions.

One telling indicator of the success of limiting domestic supplies to ValueUnit{230}{volt} is that more than ValueUnit{90}{&percnt;} of electrocutions each year happen in the workplace, where machinery is routinely supplied with potential differences greater than ValueUnit{230}{V}.

