---
layout: post
title: "Thoughts on Hull Design"
date: 2017-11-04
author: Jay Maier
categories: projects 2017-sailbot
icon: cogs
---

<p>
Looking at the kinds of things a boat in the Sailbot competition will have to do, it seems like being successful will be more determined by things like how well you can plot a course, perceive the world around you, and decide when to tack than on achieving an absolute minimum form drag.  This is most clear for tasks such as collision avoidance, searching an area, keeping a station, and navigating to a waypoint.  With this in mind, we will be doing anything we can to construct a platform which can deliver high quality sensor information to our perception team and which can maneuver in a predictable and responsive way.  In particular, this decision has led us to develop a wide-beam multihull.  
</p>
<p>
Historically in the Sailbot competition it has been popular to copy the design decisions made by the people building racing rc yachts in the Marblehead class. In particular, this has led to a proliferation of designs which derive their righting moment from a deep keel with a heavy bulb at the bottom.  We have moved away from this because even though a deep keel design probably decreases form drag, the righting moment associated with a heavy build on a long central keel goes with the sine of the heel angle which means that you’re always sailing at significant heel angles.  Our multihull design gets a righting moment that goes with the cosine of the heel angle, which means that we get a significant righting moment at a low heel angle which should mean that at low wind speeds we will be rock solid.  The team we have working on vision tells us that this stability will be crucial in being able to parse the data that they will be getting from the cameras.
Because we have sacrificed the emergency righting moment that the deep keel design grants, we will be designing our rig to work at wind speeds much higher than those expected for the competition.  In particular this means that we will be designing the boat to flip in the worst configuration of rudder, sail, and wind direction at 30 knots. Any compartments holding water-sensitive electronics will be tested to stay watertight for 30 minutes while completely submerged.  Unless something really exciting is going on (i.e. surprise tornado), we’re pretty confident that we’ll be able to right the boat in well under that 30 minute mark.  Software side, we will have emergency conditions which will swing our bow into the wind and let out the sheet if we get close to our critical heel angle.   In addition, this inability to recover from a flip has lead us towards a gaff rig.  This is attractive because it gets the center of effort down towards the waterline which again decreases heeling moment while not losing sail area.  Though we’ve decided to go with a gaff rig for now, we realise that we as a group aren't the most seasoned sailors and recognise the possibility that we could be totally wrong about that.  With this in mind, we will be building the boat so that different rigs can be easily swapped in and out.  Even though we really think the gaff rig will be better for our particular situation, there’s probably a reason pretty much every performance sailboat has a bermuda rig.
</p>

