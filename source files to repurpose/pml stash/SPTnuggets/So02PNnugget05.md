WebTitle{The decibel(Expansion &ndash; lead me deeper)}

StepHeader{A complicated explanation of the decibel, included here as it may be hard to find elsewhere}

InsertGraphic{SoEarIMCP}

The bel was invented by telephone engineers, and is named after Alexander Graham Bell, inventor of the telephone.

The bel unit (a decibel is one tenth of a bel) is derived by comparing the power of one sound with another:

EqualityAssertion{number of bels}{log(FractionBlock{QuantitySub{P}{1}}{QuantitySub{P}{0}})}

where QuantitySub{P}{1} and QuantitySub{P}{0} are powers in watts (for sound, that is the energy arriving at the ear per second) and QuantitySub{P}{0} is a reference power value with which QuantitySub{P}{1} is compared.

The logarithmic scale compresses the range of loudness values. Instead of having a loudness scale that stretches from the threshold of hearing to a value that is one billion times greater, the decibel scale goes from ValueUnit{0}{dB} to ValueUnit{140}{dB}.

EqualityAssertion{number of decibels}{10  SymbolMultipliedby log(FractionBlock{QuantitySub{P}{1}}{QuantitySub{P}{0}})}


For sound we need some agreed intensity as a reference value. Intensity is power per square metre: this eliminates concerns over the size of the ear. The agreed reference intensity is ValueExponent{1}{-12}{watt metre -2} at ValueUnit{1000}{hertz}. So every other sound level is compared with this using the decibel scale. This reference value comes out at ValueUnit{0}{dB}.

We started describing the loudness of vibrations in terms of amplitudes and now we are talking in terms of intensities SymbolEndash the energy arriving per square metre per second. There is an intermediate step: the energy associated with a vibration depends on the amplitude.

So the connection between the to and fro of the loudspeaker and the measure of the loudness in decibels involves several steps. Knowing about these steps is for your interest, and certainly not for the great majority of pupils at this age.

