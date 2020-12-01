WebTitle{Bi-directional kinematic connections(Expansion &ndash; lead me deeper)}

StepHeader{Acceleration and velocity}

InsertGraphic{FmavGraphsSummaryIPCC}

A rather concise way of expressing the connection between velocity and accelerations is to say that the rate of change of velocity is the acceleration. (The rate of change of velocity is the increment or decrement of velocity in a unit of time.) This is exactly the converse of saying that acceleration tells velocity how to accumulate.

We think that talking about the accumulation SymbolEndash just adding on either positive or negative quantities SymbolEndash is much simpler than introducing the idea of rate of change. Rates of change are complex because of the multiple operations required to calculate them (subtraction and division) and hard because to be precise you need to move to the limit: the duration you divide by is a very short length of time (literally an infinitesimal duration). Adding small contributions (so accumulating over small durations) seems accessible, and is not a complex operation (we think addition is very simple).

The belief that accumulations is a better approach than rates underpins this approach to the study of motion.

More simply still, we're suggesting that addition is simpler than division: DifferenceABC{new value}{old value}{change}.

Where the change is over some agreed duration, the more complicated route is: FractionABC{rate}{WordSub{value}{new} - WordSub{value}{old}}{time interval}.

And, of course, SymbolDelta  QuantitySymbol{t} should be made very small, so that the duration is as close to zero as we can imagine.

StepHeader{Velocity and displacement}

InsertGraphic{FmvsGraphsSummaryIPCC}

A similarly concise expression connects position and velocity: the rate of change of position is the velocity. (The rate of change of position is the increment or decrement of position in a unit of time.) Again, this is exactly the converse of saying that velocity tells position how to accumulate. We think that talking about the accumulation SymbolEndash just adding on either positive or negative quantities SymbolEndash is much simpler than introducing the idea of rate of change. This belief underpins the approach to the study of motion here developed.

Again, we're suggesting that addition is simpler than division.

Here is the accumulations version written out:

SumABC{new displacement}{old displacement}{change due to velocity}

Where the change due to the velocity is simply: ProductABC{change}{velocity}{chosen interval of time} (or, in symbols ProductABC{QuantitySub{s}{new}}{v}{ SymbolDelta t}).

The explicit recipe for accumulating displacement over the interval AB is therefore: AccumulateRelationship{s}{v}{AB} .

Following the division route:

FractionABC{velocity}{WordSub{displacement}{new} - WordSub{displacement}{old}}{time interval between displacements} (or, in symbols FractionABC{QuantitySymbol{v}}{QuantitySub{s}{new} - QuantitySub{s}{old}}{ SymbolDelta QuantitySymbol{t}} ).

StepHeader{Connecting acceleration, velocity, displacement}

InsertGraphic{FmavsConnectINSC}

Here is a summary of both relationships, seen as accumulations:

ListInformation
- Acceleration determines change in velocity.
- Velocity determines change in position.
ListInformationEnd

Here is a summary of both relationships, seen as rates:

ListInformation
- Acceleration is the rate of change of velocity.
- Velocity is the rate of change of position.
ListInformationEnd

