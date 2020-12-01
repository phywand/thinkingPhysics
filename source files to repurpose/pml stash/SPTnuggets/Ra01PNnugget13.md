WebTitle{Amplitude modulation(Exposition)}

StepHeader{Encoding a signal by changing the amplitude}

InsertGraphic{RaAmplitudeModulationIPSC}

Amplitude modulation is one way of encoding a signal on a carrier wave.

The carrier frequency remains constant but the amplitude of the carrier is modulated.

To encode digital signals on the carrier, an agreement that full amplitude is the code for a QuoteThis{1} and zero amplitude is the code for a QuoteThis{0} is sufficient. Any binary signal can then be carried from the source to any detector, where it can be decoded back into a string of ones and zeros.

To encode analogue signals, the carrier amplitude must vary smoothly. Do this by multiplication: the carrier amplitude (a constant) is multiplied by the signal amplitude to give the modulated amplitude. To avoid difficulties, the amplitude of the signal is first normalised so that it lies between 0 and 1.

Then a non-stop multiplication is carried out in the encoder.

You can see the process at work, encoding either your own signal, or a prepared signal, using the interactive. By looking at the model you can see the relationship between the input (the signal and carrier) and the output (the amplitude modulated carrier).

StepHeader{More technical details (optional extra depth on the mathematics)}

InsertGraphic{RaAMProcessINSC}

The carrier amplitude can then alter between 0 and the carrier amplitude. However, transmitting for long periods where the signal is zero might well be confused with receiving no signal at all. So in practice this sum is modified by introducing another factor, which determines the depth of the modulation SymbolEndash again lying between 0 and 1. A value of 1 reproduces ValueUnit{100}{&percnt;} modulation. A value of 0.5 is much more useful.

This is the new sum, again carried out continuously at the encoder.

And that's it.

StepHeader{Digital signals by amplitude modulation}

InsertGraphic{RaDigitalEncodingIPSC}

Although changing both the amplitude and the frequency of a carrier can be used to encode a digital signal, here we have chosen to show amplitude modulation only, simply because it is easier to show what is going on.

There are two essential steps in digitising the signal to the final transmittable form.

Step 1: the signal is sampled to convert the pattern into a vibration as a string of numbers.

Step 2: these numbers are converted to binary, resulting in a string of ones and zeros.

Once you have a string of such numbers, simply modulate the amplitude of the carrier, as before. Only this time you need only two levels: the first to represent a QuoteThis{zero}, and the second to represent a QuoteThis{one}.

