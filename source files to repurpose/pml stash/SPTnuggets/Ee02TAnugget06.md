WebTitle{Talking and thinking circuit calculations(Activity)}

StepHeader{Exemplifying a calculation to give students good practice to emulate}

StepHeader{Purpose}

This is an interactive teacher demonstration with a difference. It involves working not with apparatus, but with numbers in carrying out circuit calculations. The idea here is to make explicit to students the steps, or underlying strategy, involved in making calculations. All too often this systematic guidance is missed out and students struggle to make sense of relatively simple questions.

StepHeader{Prepare}

ListEquipment
- simple circuits to demonstrate, connecting the calculations to these circuits
ListEquipmentEnd

Here we suggest:

circuit 1: ValueUnit{12}{volt} supply and two resistors in series, ValueUnit{40}{ohm} and ValueUnit{80}{ohm}

circuit 2: ValueUnit{12}{volt} supply and two resistors in parallel, ValueUnit{48}{ohm} and ValueUnit{60}{ohm}

StepHeader{Happens}

Set out below are the approaches to carrying out calculations for different kinds of circuit. These may be used as and when appropriate in a lesson sequence. It's a good idea to have apparatus to hand so that the steps in the calculation can be followed with the equipment.

Circuit 1: Two resistors in series

Question: What is the potential difference across the ValueUnit{80}{ohm} resistor?

In answering a question such as this, it is a good idea to talk through the overall approach with your class, making clear all of the key points:

With two resistors in series, the total voltage (ValueUnit{12}{volt}) of the supply is shared between them.

Since the resistors are not of equal value, the voltage is shared with a greater potential difference across the bigger resistor. More energy is shifted as the current passes through the bigger resistor.

The current through both resistors is the same.

If we know the value of the electrical current then the potential difference across either resistor can be calculated using the equation: ProductQuantityABC{V}{R}{I}.

StepHeader{Talking through the calculation}

TeacherSpeak{So, how do we calculate the electric current in this circuit?}

PupilSpeak{Sarah}{From the voltage and resistance?}

TeacherSpeak{Which resistance?}

PupilSpeak{Will}{The total resistance.}

TeacherSpeak{Exactly! We can find the current in this loop from the voltage and total resistance using our old friend FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}}, so FractionABC{QuantitySymbol{I}}{12 volt}{40 ohm + 80 ohm}, which simplifies to FractionABC{QuantitySymbol{I}}{12 volt}{120 ohm}, for which you can work out that the current is ValueUnit{0.1}{A}.}

TeacherSpeak{So the current in the loop is ValueUnit{0.1}{ampere}.}

TeacherSpeak{We can now calculate the potential difference across the ValueUnit{80}{ohm} resistor: ProductQuantityABC{V}{R}{I}, so the potential difference is  ValueUnit{80}{&Omega;}  SymbolMultipliedby ValueUnit{0.1}{A}.}

The potential difference across the ValueUnit{80}{ohm} resistor is equal to ValueUnit{8}{volt}.

TeacherSpeak{So what is the potential difference across the ValueUnit{40}{ohm} resistor?}

PupilSpeak{Sam}{Is it ValueUnit{4}{volt}?}

TeacherSpeak{Why do you think that?}

PupilSpeak{Sam}{Because 8 from ValueUnit{12}{volt} leaves ValueUnit{4}{volt}.}

TeacherSpeak{Yes! That's right. And why does that make good sense looking at the values of resistance?}

The final point here is that there is twice the potential difference across the ValueUnit{80}{ohm} resistor compared with the ValueUnit{40}{ohm} resistor. In other words, the potential difference is shared in proportion to the resistance values.

TeacherSpeak{When you become expert at these calculations, like me(!), you'll be able just to glance at values such as these and give the answer straight away. Of course, the numbers aren't always as easy as this.}

StepHeader{Discussing the calculations}

Circuit 2: two resistors in parallel

Question: What is the current in the supply?

In answering a question such as this, it's a good idea to talk through the overall approach with your class, making clear all of the key points:

ListInformation
- With two resistors in parallel the current in the supply is the current in both loops.
- The total current in the supply is therefore the sum of the currents in each resistor.
- In a parallel circuit, each resistor has the full battery potential difference across it.
ListInformationEnd

The current in each of the resistors can therefore be calculated using FractionABC{QuantitySymbol{I}}{QuantitySymbol{V}}{QuantitySymbol{R}} for each loop in turn, so FractionABC{QuantitySub{I}{1}}{QuantitySymbol{V}}{QuantitySub{R}{1}} and
FractionABC{QuantitySub{I}{2}}{QuantitySymbol{V}}{QuantitySub{R}{2}}.

TeacherSpeak{So, how do we calculate the current in the ValueUnit{48}{ohm} resistor?}

PupilSpeak{John}{From the voltage and resistance?}

TeacherSpeak{And what is the voltage?}

PupilSpeak{Will}{ValueUnit{12}{volt}.}

TeacherSpeak{Exactly! We can find the current in the ValueUnit{48}{ohm} resistor using the connection between QuantitySymbol{I}, QuantitySymbol{V} and QuantitySymbol{R}.}

Using FractionABC{QuantitySub{I}{1}}{V}{QuantitySub{R}{1}}, in this case FractionBlock{12 volt}{48 ohm}, so the current works out at ValueUnit{0.25}{A}.

In the same way, the current through the ValueUnit{60}{ohm} resistor is calculated, Using FractionABC{QuantitySub{I}{2}}{V}{QuantitySub{R}{2}}, in this case FractionBlock{12 volt}{60 ohm}, so the current works out at ValueUnit{0.20}{A}.

The total current in the supply must therefore be the sum of these values: ValueUnit{0.25}{ampere}  and ValueUnit{0.2}{ampere}. The current in the supply is ValueUnit{0.45}{ampere}.

