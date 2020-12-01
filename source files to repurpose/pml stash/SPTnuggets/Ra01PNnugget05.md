WebTitle{Lenses and mirrors with rays(Exposition)}

StepHeader{A lens: a carefully and systematically shaped block of refracting material}

InsertGraphic{RaCameraLensIMCP}

A lens is a simple block of glass through which light passes: it's refracted as it passes. The block must be very cunningly shaped in order to ensure that beams that strike the lens further from the centre line SymbolEndash the optical axis SymbolEndash are bent more than those which strike the surfaces closer to this axis. Usually this shaping is done by grinding off excess material SymbolEndash a slow process that used to require both patience and skill (Newton was a skilful lens grinder). Now it's done by machines, but lenses can be both beautiful and complex, so as to ensure perfect imaging. For any serious photographer, the major part of their investment is in the lenses that attach to the camera body, and these still call for very careful design and precise manufacturing. However, a camera lens is a compound of many single lenses: here you'll only study the very simplest of lenses.

How are these lenses built up? So far you have looked at refraction through rectangular blocks (and through prisms in the SPT: Light topic). Perhaps the best way to approach the finished product in our minds is to start with prisms SymbolEndash after all, these deflect beams of light: rectangular blocks can, at best, only introduce a sidestep in the beam. And the sharper the angle of the prism, the more the deviation. This suggests that the lens can be thought of as a series of prisms, symmetrically arranged about the optical axis, assembled so that those with the sharpest angles are furthest from the axis. To tidy the lens up, slice off the unneeded tops and bottoms of the prisms to get a set of trapezoids. Glue these together and you have a conventional converging lens. Of course, if you don't glue them together you have a Fresnel lens, which gives much the same effect, only without anything like as much glass. You'll find these in lighthouses and telescopes, as these are both places where the more complex cost of manufacturing such an intricate shape is offset by the lower cost of keeping such a large mass of glass exactly where you want it. (Glass is not a good structural material, so large lenses may sag as a result of the force of gravity acting on them. This goes part of the way in explaining why most large astronomical telescopes depend on mirrors, and not lenses.)

If the lens can be moulded from plastic then it can be very lightweight, and the manufacturing costs come right down. Hill walkers may have a Fresnel lens in their pocket, for use as a magnifying glass, to discern the finer details on a map.

It is also possible to make diverging lenses. Here again you need a set of prisms, whose apex angles vary systematically as you move away from the optical axis. But now the beams striking the surfaces must be bent away from the optical axis; so flip each prism about its asymmetric axis. Top and tail the prisms as before, then glue to get a conventional lens, or space carefully to get a Fresnel lens.

Systematically varying the angles between the sides of the prisms, for a lot of prisms, is exactly equivalent to varying the curvature of the surface of the lens. (You may remember making circles from polygons in the programming language LOGO, by shortening the step size and reducing the angle through which the turtle turned.) Manufacturing lenses of variable curvature allows the light to be bent more or less. This has recently provided cheap spectacles for Africa that can be adjusted by the wearer, simply by pumping more fluid into a flexible bag. Some of the finer subtleties of the lens-grinder's art cannot be reproduced by this technique, but a bit of very simple lateral physics-based thinking is making a huge difference to thousands with this very appropriate technology.

StepHeader{Describing Lenses}

InsertGraphic{RaLensAnatomyINCC}

StepHeader{Cunningly chosen rays predict lens behaviour}

InsertGraphic{RaRaysForLensesINCC}

From the many, many rays that could be drawn that do strike a lens, there are three that are very easy to predict.

The first is one that goes straight through the centre of the lens. As the lens here is just about a parallel sided slab, you can predict that the ray will not be deviated, but might be offset a little. The thinner the glass here, the less the offset.

The second and third are related and are fixed by the curvature of the lens. A lens is designed so that all rays parallel to the axis will deviate so that their exit line passes through the principal focus. This is therefore a rather special point on the principal axis, so we can use it with confidence: it is what defines the lens.

For a converging lens, these rays actually pass through the principal focus; for a diverging lens they deviate so that they seem to have come from the principal focus.

StepHeader{Modelling lenses with selected rays}

InsertGraphic{RaLensesAndImagesINSC}

Here are only a few examples of modelling with rays, and the predicted beams. There are two different sets of outcomes.

In the first set the rays SymbolEndash and so the beams SymbolEndash actually meet. At these points there will be a bright spot: the radiation will focus. Place a detector at that point and you'll detect a high power, dissipating the energy. These are real images.

In the second set the rays only appear to come from a single point. No radiation will be found at a detector placed at that single point. These are virtual images, just like the image in the plane mirror in the SPT: Light topic.

StepHeader{Using rays to predict the action of mirrors of different shapes}

InsertGraphic{RaMirrorsAndImagesINSC}

For mirrors there is only one rule for specular reflection: find the normal, then use the relationship between the angle of incidence and the angle of reflection. So far, so simple. However, if we bend the mirror systematically, the normals will no longer be parallel to one another and we might get all kinds of interesting shapes of mirror, producing all kinds of patterns.

Here are three simple shapes:

ListInformation
- A spherical concave mirror.
- A spherical convex mirror.
- A parabolic mirror.
ListInformationEnd

A focusing concave mirror can be curved so that it has a single principal focus, just like the lens. Here the curve is very simple SymbolEndash it's a part of a circle, or in three dimensions a part of a sphere.

The converse situation (get this by just flipping the mirror over, if it's shiny on both sides and so reflects from both the front and the rear surfaces) also has a principal focus.

This first pair of mirrors is easy to make predictions for because, just like lenses, there are three rays on which we can rely:
ListInformation
- Two rays are inbound parallel to the principal axis and outbound along a line that passes through the principal focus.
- One ray reflects about the principal axis, as its normal lies on that axis.
ListInformationEnd

StepHeader{Parabolic mirrors SymbolEndash useful but not easy to draw rays for}

InsertGraphic{RaParabolicMirrorIMCP}

The final case is a parabolic mirror, which is useful for generating or focusing parallel beams. In this case the curvature is more complex, and so finding simple rules for rays to make useful predictions is hard. To be useful, these predictions must contribute to showing the overall focusing pattern.

But there is a trade-off: these mirrors focus light from beams with a greater range of incident angles than the circular mirrors. Later we'll show you an easier line of attack for this problem.
