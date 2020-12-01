WebTitle{Frequency modulation(Exposition)}

StepHeader{Encoding a signal by altering the frequency}

InsertGraphic{RaFrequencyModulationIPSC}

Frequency modulation is another way of encoding a signal on a carrier wave.

The carrier amplitude remains constant but the frequency of the carrier is modulated. This change is usually constrained, so the carrier frequency changes over a small range.

To encode digital signals on the carrier, an agreement that the carrier frequency is shifted just enough is the code for a QuoteThis{1} and the carrier frequency itself is the code for a QuoteThis{0}. Any binary signal can then be carried from the source to any detector, where it can be decoded back into a string of ones and zeroes.

To encode analogue signals, the carrier frequency must vary smoothly. Do this by addition SymbolEndash the carrier frequency (a constant) is added to the signal frequency to give the modulated frequency. To avoid difficulties, the amplitude of the signal is first normalised.

So a non-stop sum is carried out in the encoder.

And that's it.

You can see the process at work, encoding either your own signal, or a prepared signal, using the interactive. By looking at the model, you can see the relationship between the input (the signal and carrier) and the output (the frequency modulated carrier).

StepHeader{More technical details (optional extra depth on the mathematics)}

InsertGraphic{RaFMProcessINSC}

As the carrier frequency is added to the signal frequency to find the modulated frequency, this frequency can alter between the limits of (carrier&ndash;signal) and (carrier + signal). To control the range over which the frequency can swing, the signal frequency is normalised (mapped so that it swings between +1 and &ndash;1) and a new parameter is added. Then the sum is modified by introducing another factor that determines the swing of the modulation, setting a fraction of the carrier frequency by which the modulated frequency can alter. All this careful calculating restricts the range of frequencies that must be detected so that the full signal is available to decode. That's why FM (frequency modulated) radio stations cannot be too close in frequency SymbolEndash each needs a small range of frequencies, rather than one very well defined frequency, to transmit the information.

This is the new sum, again carried out continuously at the encoder.

