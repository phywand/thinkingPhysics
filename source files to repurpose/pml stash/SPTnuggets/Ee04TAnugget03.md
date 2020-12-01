WebTitle{Calculate the efficiency of a motor in two ways(Activity)}

StepHeader{Practical measurements and calculations as exemplars to learn from}

InsertGraphic{EeMotorEfficiencyIMCP}

StepHeader{Purpose}

In this activity a motor is used to lift a load. The efficiency of the motor is calculated in two ways:

ListInformation
- Considering the energy shifted from the chemical store to the gravity store once the load has been lifted.
- Considering the power in the electrical and mechanical pathways as the load is lifted.
ListInformationEnd

StepHeader{Prepare}

ListEquipment
- a ValueUnit{12}{V} power pack
- a small motor with pulley/axle attachment
- 2 G clamps
- a ValueUnit{1}{m} rule
- some Blu-tack
- a ValueUnit{100}{g} mass holder
- 3 ValueUnit{100}{g} masses
- an SEP energy meter
- 4 leads
- ValueUnit{1}{m} of light, strong, thin string
ListEquipmentEnd

SafetyTip{Both the falling masses and the strained string line present possible hazards.}

StepHeader{Happens}

This account includes sample values to give an indication of the kind of values expected. Your own values may differ and should be used.

StepHeader{Calculating using stores and energy}

Set up the equipment to lift a mass of ValueUnit{400}{gram} through a distance of ValueUnit{80.0}{cm}. Blu-tack a 1 metre ruler close to the load to show distance moved clearly. Have the SEP energy meter set to read energy and the power pack set at ValueUnit{5}{V} DC.

TeacherSpeak{So, we're using a motor to lift a load from the floor. We have an energy meter, which is connected directly to the power supply to let us know how much energy is being shifted from the store. The kind of store depends on our local power station. Here we burn gas, so it'll be a chemical store.}

Switch on the power supply and the energy meter simultaneously. Allow the load to move through a distance of ValueUnit{80}{cm} and then switch the supply and energy meter off simultaneously. (Use a student to help because three hands are needed and the mass will start to fall back down immediately.)

TeacherSpeak{How much energy is shifted to the motor?}

PupilSpeak{Lola}{ValueUnit{21.7}{joule}.}

It's probably worth writing this on the board:

Energy shifted from the chemical store is ValueUnit{21.7}{joule}

TeacherSpeak{Excellent, and you used the correct unit too. The gravity store is filling as the load is lifted. How could we calculate how much energy is shifted to the store?}

PupilSpeak{Bill}{Gravity force SymbolMultipliedby vertical distance moved.}

TeacherSpeak{Good. Now we can calculate the energy shifted as the load is lifted further from the earth.}

We'd suggest writing this on the board (don't forget the units to make it more intelligible):

ProductABC{energy shifted}{ValueUnit{0.4}{kilogram}  SymbolMultipliedby ValueUnit{9.8}{newton kilogram -1}}{ValueUnit{0.8}{m}}

energy is ValueUnit{3.14}{J}

TeacherSpeak{We know that energy is neither created nor destroyed, so why is this change not the same as that shifted from the store?}

PupilSpeak{Julie}{Energy must have been shifted to other stores: stores that are not useful.}

Explain that there is also energy being shifted to thermal stores. Now calculate the efficiency of the motor on the board using the equation.

A clear written-out calculation can serve as a good model, perhaps written on a board.

EfficiencyCalc{useful energy shifted}{total energy input to the system}.

Put the numbers in to get FractionBlock{3.14 joule}{21.7 joule}  SymbolMultipliedby ValueUnit{100}{&percnt;}, which can be worked out to be an
efficiency of ValueUnit{14.5}{&percnt;}.

StepHeader{Calculating using power in pathways}

Change the SEP energy meter to read average power. The average power in the electrical pathway can be read directly from the meter. The motor switches this power more or less effectively to mechanical working. The power in the mechanical pathway can be found from force   SymbolMultipliedby velocity.

If all of the power in the electrical working pathway is switched to mechanical working, then the efficiency is ValueUnit{100}{&percnt;}. So efficiency can also be calculated using power values. After this preamble we suggest you get a new set of measurements to get these data.

TeacherSpeak{What do we need to know if we want to find the average power in the mechanical working pathway as the load is lifted?}

PupilSpeak{David}{The force required to lift the load and the speed of the load.}

Lift the load as before, recording the average power shifted to the motor as read from the SEP meter and the time taken to lift the load.

Here are some sample values, showing the line of argument you might follow.

The average input power to the motor is ValueUnit{4.34}{watt}

The power needed to lift the load(the output power) is ValueUnit{0.4}{kilogram}  SymbolMultipliedby ValueUnit{9.8}{newton inverse kilogram}  SymbolMultipliedby FractionBlock{0.8 metre}{5 second} which is ValueUnit{3.92}{N}  SymbolMultipliedby ValueUnit{0.16}{m s -1}, and therefore the output power is ValueUnit{0.63}{W}.

Now for some efficiencies:

EfficiencyCalc{power in mechanical pathway}{power in electrical pathway}

Putting the values in, you get: FractionBlock{0.63 watt}{4.34 watt}  SymbolMultipliedby 100, which evaluates to give an efficiency of ValueUnit{14.5}{&percnt;}

This activity has been written containing only one lifting of the load for the energy and power calculations for ease of explanation. It could be run several times and average values used to calculate the efficiencies.

Some possibilities to extend the experiment:

ListInformation
- Change the load size to see if this affects the efficiency of the motor.
- Change the distances moved by the load to see if this affects the efficiency of the motor.
ListInformationEnd
