WebTitle{Predicting beams(Exposition)}

StepHeader{We are informed about our surroundings by reflections}

InsertGraphic{RaReflectionsPanesIMCP}

Reflections are all around SymbolEndash most of the things we see are as a result of reflections: luminous objects are greatly outnumbered by non-luminous objects. But that pervasiveness does not make it any less intriguing, or at least with a little thought reflection can be made so.

In the SPT: Light topic, the rule about reflection from flat shiny surfaces was introduced and extended to show how everyday things can be seen from all kinds of angles, rather than just one special angle, where the angle of incidence is equal to the angle of reflection. There the connection was made to many angles of incidence and to many angles of reflection. The many angles are introduced as each surface is thought of as being made up of many small flat surfaces, but not all lined up. You can make a flat, shiny surface by lining them all up, or by polishing the surface to remove all the lumps and bumps. Aligning the surfaces to achieve special effects we'll come back to later, but the smooth polished surface, while rare, is simple, and so is a good place to ask questions to which you might get simple answers.

Here is a really simple question. A beam of radiation strikes such a surface. The angle at which it strikes the surface (the angle of incidence) is always the same as the angle at which it leaves the surface (the angle of reflection). Because it is a surface, this angle is measured from the normal, as this makes the angle unique. Find more detail on the need for this particular measurement technique in the SPT: Light topic. Just why is the reflected angle equal to the incident angle?

One answer is to appeal to the rules about rays. That's just how they're drawn, and once you have the ray, it predicts the beam. We hope that you do not find this a satisfying explanation, but want to know more. In particular, how is this behaviour linked to the rules for drawing rays that predict refraction? After all, they're both rules for the same kind of things SymbolEndash for radiations SymbolEndash so there really ought to be some commonality of behaviour.

StepHeader{As a beam is refracted, so the beam is deflected}

InsertGraphic{RaPencilInGlassIMCP}

Here you should focus on a single beam that is neither reflected nor absorbed but is transmitted from air, through a different material (not air), and back into air again, with a constant power in its pathway. So the beam changes the medium in which it is travelling twice: from one material (often air) to another (often glass or plastic) and back to air again.

Even with all these simplifying constraints, there is still an interesting phenomenon to explore here: refraction. A beam is typically bent if it strikes the surface between the two materials at anything other than a right angle. This bending is called refraction, and there are two angles to specify: the angle at which the beam approaches the interface and the angle at which it leaves. These are, of course, the angle of incidence and the angle of refraction. But, just as with reflection, you need to be careful about how the angle is measured. The surface between the two media where the beam strikes is a small plane; and the adjacent planes may be at an angle to the current plane. One place where refraction is certainly important is at the surface of lenses, and constructing the surface of a lens from many small planes requires that the angles between adjacent planes changes in complex ways as you move across the surface. As a result of this complex change, measuring the angle between the surface and the beam can give many different values: measuring the angle between the normal and the beam gives only one, as each plane has only a single normal. You do need to work with normals: add these to the place where the beam strikes as the first step in constructing a diagram to account for refraction.

Both the angle of incidence and the angle of refraction are measured from this normal. Then there is another apparently QuoteThis{brute} law, unrelated to the law of reflection: the law of refraction. As a beam goes through a surface it will bend, so the angles of incidence and refraction will not be equal, unless both are zero. For common materials, as a beam goes from a medium where the measured speed of propagation is higher to one where it is lower, so the beam is bent towards the normal. That is, the angle of incidence is greater than the angle of refraction. This relationship between the angles is reversed as the beam makes its way from a low-speed medium to a high-speed medium: the beam bends away from the normal. And it's also frequency dependent: over the optical range, blue bends best (and so red bends least). OK, so that is the brute fact. You could reasonably ask two further questions to refine your understanding:

How, exactly, is the angle of incidence related to the angle of refraction?

Why does a beam or a ray bend like this SymbolEndash is there an underpinning reason?

The first is a matter of empirical investigation, the second a matter of inventing an explanatory model. The first is not trivial, nor is the relationship straightforward, so it has been named: Snell's law.

For any pair of materials, there is a constant relationship between the angles of incidence and refraction. Take the sines of these angles and divide one by the other.

The answer is a constant:

FractionBdCeqA{sine(incident angle)}{sine(refracted angle)}{constant}

That is Snell's law.

Changing the pair of materials results in a new constant, so this is a property of the pair of materials. The greater the difference in speed between the materials, the greater the constant.

StepHeader{Rays are used to predict beams}

InsertGraphic{RaRaysBeamsIPCC}

There are simple rays that can be drawn, using simple geometrical rules, to predict what the beams will do. In each case we're working on one plane SymbolEndash defined by the surface and the normal.

Here's a checklist for reflection:

ListEquipment
- Select a surface.
- Draw in the normal.
- Position the source.
- Draw in the inbound ray from the source to the point where the normal meets the surface, which allows you to measure the angle of incidence.
- Draw in the outbound ray so that the angle of reflection is equal to the angle of incidence.
ListEquipmentEnd

Here's a checklist for refraction:

ListEquipment
- Select a surface.
- Draw in the normal, right through the surface.
- Position the source.
- Draw in the inbound ray from the source to the point where the normal meets the surface, which allows you to measure the angle of incidence. Take the sine of this angle and divide it by the refractive index.
- Draw in the outbound ray so that the sine of the angle of refraction is equal to the angle of incidence divided by the refractive index.
ListEquipmentEnd

All of these steps are shown in the SPT: Light topic.

These rules are exploited whenever programmers need to QuoteThis{light} a scene for a computer game: it's all about finding the normals, setting up the sources and then applying the rules to see how much lighting to display for that point of view. This is all fine, but why do these rules work SymbolEndash why is nature that way? That's a good question and it demands a deeper level of explanation.

