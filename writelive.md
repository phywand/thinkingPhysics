
# WebTitle{testfile}

## StepHeader{words}

TeacherOne{It's raining again}

TeacherTwo{But it is only March}

TeacherThree{Nevermind, it's nearly Friday}

TeacherSpeak{It's your time you're wasting}

TeacherTip{Getting angry only wears you out}

PupilSpeak{Julia}{I totally get this now}

JustSpeak{Physics is not so hard}

WrongTrack{Mathematics is the language physics}

RightLines{Physics makes the world go round}

## StepHeader{Style text}

AttributeThis{to someone}

EmphasiseThis{ThePhrase}

QuotationThis{ThePhrase}

QuoteThis{ThePhrase}

SafetyTested{Test details – Ex PP}

SafetyTip{Here is a tip – ex SPT}

## StepHeader{Technical expression}

To display physical quantities:

Quantityxx   Symbol{F} xx

QuantitySub{F}{gravity}

QuantitySuper{r}{2}

To go longhand:

WordSub{radius}{2}

WordSuper{radius}{2}

Or for standalone numbers:

NumberSuper{10}{-17}

Vectors:

VectorOver{p}

VectorMagnitude{a}

VectorSub{v}{initial}

VectorMatrix{d}{2}{2}{2}

For nuclei:

NPNucleus{235}{92}{U}

Units, and numbers;

JustUnit{m s -2}

ValueUnit{10}{N kg 1}

ValueExponent{8}{-9}{J s -4}

ValueRange{3}{5}{V}

ValueOrder{23}{kg}

Quantites, units, numbers:

QuantityUnit{k}{6}{N m -1}

QuantityExponent{h}{6,6}{-34}{J s 1}

QuantityRange{v}{12}{34.2}{m s -1}

QuantityOrder{g}{-1}{N kg -1}

QuantityValue{F}{12}{N}

For Square roots

QuantityRoot{h}

NumberRoot{23}

FractionRoot{g}{l}

Two blocks, as components

FractionBlock{mass}{volume}

builds up fractions, as other technical primitives can be inserted in the braces, whereas grouping, to prevent splitting over lines, where you need to force this, is achieved by:

GroupBlock{Many words which will not split, but which are otherwise unchanged.}




## StepHeader{Relationship}

Many of these are 'convenience' primitives, since mostly you could build this up with assertions of equality or even from glyphs and grouping.

SumABC{one}{two}{three}

DifferenceABC{one}{two}{three}

ProductABC{one}{two}{three}

FractionABC{one}{two}{three}

Sometimes you need a negative sign inserted, denoted by an 'n'.

ProductAnBC{one}{two}{three}

FractionAnBC{one}{two}{three}

And sometimes you know you're dealing with xx   Symbols for physical quantities, so insert a 'Quantity'. xx

ProductQuantityABC{A}{B}{C}

FractionQuantityABC{A}{B}{C}

You can do both quantity and negation:

ProductQuantityAnBC{A}{B}{C}

FractionQuantityAnBC{A}{B}{C}

Occasionally you'll want to reverse the order, to change emphasis ('d' here denotes divide):

FractionBdCeqA{one}{two}{three}

FractionQuantityBdCeqA{A}{B}{C}

Common four term pattens are supported, where 'eq' denotes the location of the equality.

ProductABeqCD{one}{two}{three}{four}

FractionAdBeqCdD{one}{two}{three}{four}

And one six-term item:

FractionAdBeqCDdEF{one}{two}{three}{four}{five}{six}

A couple of specials, for calculating efficiency and expressing accumulations:

EfficiencyCalc{power in}{power out}

AccumulateRelationship{v}{a}{AtoB}

And finally, you can just set things equal (this, of course, looks after spacing, and prevents equations being split over lines, so its a fundamental building block):

EqualityAssertion{one}{two}


The aim should be not to have any ad-hoc '=' or other _xx   Symbols_ to 'short-cut' the layout. Be consistent. xx

## StepHeader{Spacing, in case you need to get hands on}

Note that a double line break is a paragraph break, which is standard MarkDown convention, as a MarkDown parser acts on this file. Sometimes inserting a single linebreak before and after a complex expression makes the parsing/editing more relaible, without affecting the parsed output

ASpacingThinspaceB

A B

CSpacingParabreakD

ESpacingNonbreakspaceF

GSpacingLinebreakH

## StepHeader{Add Glyphs}

These are predefined words, so you can think physics, rather than html entity

xx   SymbolBeta  xx

xx   SymbolDelta xx

xx   SymbolDifferential  xx

xx   SymbolPlusorminus xx

xx   SymbolPositive xx

xx   SymbolNegative xx

xx   SymbolProportion xx

xx   SymbolEquivalent xx

xx   SymbolMultipliedby xx

xx   SymbolMinus xx

xx   SymbolPlus xx

xx   SymbolArrowright xx

xx   SymbolEqual xx

xx   SymbolPi xx

xx   SymbolCopyright xx

xx   SymbolEndash xx

xx   SymbolHalf xx

xx   SymbolQuarter xx

xx   SymbolAlpha xx

xx   SymbolBeta xx

xx   SymbolGamma xx

xx   SymbolPercent xx

xx   SymbolDegree xx

xx   SymbolTemperaturecentigrade xx

xx   SymbolOhm xx

xx   SymbolAngle xx

xx   SymbolAngularv xx

xx   SymbolAngulara xx

xx   SymbolWavelength xx

xx   SymbolDensity xx

xx   SymbolFlux xx

xx   SymbolEpsilon xx

xx   SymbolMu xx

xx   SymbolSigma xx

xx   SymbolStrain xx

xx   SymbolStress xx

 UcAlpha

 UcBeta

 UcGamma

 UcDelta

 UcEpsilon

 UcZeta

 UcEta

 UcTheta

 UcIota

 UcKappa

 UcLambda

 UcMu

 UcNu

 UcXi

 UcOmicron

 UcPi

 UcRho

 UcSigma

 UcTau

 UcUpsilon

 UcPhi

 UcChi

 UcPsi

 UcOmega

 LcAlpha

 LcBeta

 LcGamma

 LcDelta

 LcEpsilon

 LcZeta

 LcEta

 LcTheta

 LcIota

 LcKappa

 LcLambda

 LcMu

 LcNu

 LcXi

 LcOmicron

 LcPi

 LcRho

 LcSigma

 LcTau

 LcUpsilon

 LcPhi

 LcChi

 LcPsi

 LcOmega
