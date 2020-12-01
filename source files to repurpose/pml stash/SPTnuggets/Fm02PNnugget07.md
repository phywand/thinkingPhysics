WebTitle{Intervals and instants(Exposition)}

StepHeader{Where am I, and when am I there?}

InsertGraphic{FmGPXTrailIMSP}

Acceleration, velocity and position have been introduced as descriptions of motion true at an instant. Questions such as QuoteThis{When did it have that velocity?} are best answered by giving a time of day SymbolEndash a clock reading. You're reporting the right-now status of the motion, not telling a story about how it has been over a period, or interval of time.

The tracks provided by a GPS unit provide a set of positions and clock times (at that instant SymbolEndash not before, and not after). They report where you were and when you were there (so an instantaneous record of position and clock reading). They locate you on a journey as a trail of events. Each event is a statement about where you were and when you were there. Such events are the basis of careful thinking about motion that is necessary to understand Einstein's theory of relativity.

It is possible that the trail records your position as unchanging for a number of different clock times: in that case we'd suggest that it's natural to say, for that duration, that you were stationary. The QuoteThis{duration} is then specified by the difference in clock times

(EqualityAssertion{duration}{ SymbolDelta clock time}).

It's also possible that such a trail reports that your position changes over such a duration. We'd suggest that you call this difference in position QuoteThis{displacement}

(EqualityAssertion{displacement}{ SymbolDelta position})).

You are literally displaced, or repositioned. This change may or may not represent the actual journey you took SymbolEndash it all depends on how often the positions were recorded (so it may not be an accurate record of the distance you actually travelled). So it may not be a good idea to try and find the speed at which you were travelling from such a trail. You could find the velocity: FractionABC{VectorOver{v}}{VectorOver{d}}{ SymbolDelta t}. But we suggest you leave this for post-16 study.

StepHeader{Suggestions for referring to quantities}

InsertGraphic{FmGPSUnitIMCP}

Here are some suggestions as to how to refer to quantities, taking care to be consistent:

TeacherTip{Clock readings (an instant) and position (instantaneous) together define an event SymbolEndash a location in space and time.}

TeacherTip{A series of (such) events SymbolEndash clock readings (an instant) and positions (instantaneous) SymbolEndash provides a trail, which can report a motion.}

TeacherTip{A period of time in such a motion is a duration, being the difference between two clock times.}

StepHeader{Predictions SymbolEndash extrapolating to where you'll be, when you'll be there, and at what velocity you'll be travelling}

Acceleration accumulates velocity, so that by finding out the acceleration and velocity now (at this instant, for this clock reading), you can gain some insight into the future SymbolEndash assuming some things don't change. This is the beginning of making predictive models, and is an essential part of physics. (The quality of the insight is often judged, to a significant degree, by the success it has in contributing to a predictive model.)

So here's a simple recipe, for predicting future velocities:

SumABC{new value}{old value}{change}

First calculate the change: ProductABC{ SymbolDelta VectorOver{v}}{VectorOver{a}}{ SymbolDelta QuantitySub{t}{interval(A_B)}}.

Then add the change to the old value: AccumulateRelationship{VectorOver{v}}{VectorOver{a}}{AB} .

You can carry out a similar process for displacement and velocity, so predicting changes in position. Remember that velocity accumulates displacement.

SumABC{new value}{old value}{change}

First calculate the change: ProductABC{ SymbolDelta VectorOver{d}}{VectorOver{v}}{ SymbolDelta QuantitySymbol{t}}.

Then add the change to the old value: AccumulateRelationship{VectorOver{d}}{VectorOver{v}}{AB} .

When making predictions we'd suggest you use instantaneous values of acceleration, velocity, and position.
Then run these forward from one instant (clock reading) to another instant (clock reading), so covering an interval, running from an initial instant to a final instant.

We'd suggest that you use VectorOver{a}, VectorOver{v}, VectorOver{s} or VectorOver{d} together with intervals of time ( SymbolDelta t) to project forward. Avoid averages.

StepHeader{Averages and reporting on journeys}

InsertGraphic{FmGPXAveragesIMSP}

When there's an actual track, such as might be recorded by a GPS unit recording  a trail of events at a high frequency SymbolEndash that is, lots of (clock readings and position) records every second SymbolEndash then it's reasonable to suppose that it does map an actual journey, depicting rather accurately the distances covered.

In this case, avoid thinking with the vector terms (VectorOver{a}, VectorOver{v}, VectorOver{s} or even acceleration, velocity, position) and use the appropriate scalars: distance from journey beginning to journey end (from one instant (clock reading) to another instant (clock reading)) over the duration.

Then you can use FractionABC{speed}{distance}{duration}, where speed is necessarily average speed.

You can make a connection from these averages to instantaneous speed (the magnitude of VectorOver{v}, written VectorMagnitude{v}). You simply split the journey into smaller and smaller chunks.

Split the journey duration (from beginning to end) into many intervals (from initial to final). As the time intervals get shorter and shorter, so the speed you calculate will get closer and closer to VectorMagnitude{v}.

So you can see how the instantaneous and average speeds are connected, and which is closest to the VectorMagnitude{v}.

StepHeader{Distance and displacement}

InsertGraphic{FmTwoRoutesINCC}

A similar thing happens to the values of distance and VectorMagnitude{d} as you chop the journey into smaller and smaller pieces. That should make sense if you remember the original caution about the distance not being, in general, equal to the VectorMagnitude{d}.

(You can, in fact, see this averaging error in progress when you reduce the number of points in a GPS track. Any software that re-constitutes your track from the simplified trail does so by drawing straight lines between the (newly reduced) points. This straightens out the wiggles, so under-reporting the actual distance you covered.)

