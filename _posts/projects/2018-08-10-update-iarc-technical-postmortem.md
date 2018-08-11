---
layout: post
title: "IARC Mission 7 Technical Postmortem 2018"
date: 2018-08-10
author: Aaron Miller
categories: projects 2017-iarc
icon: cogs
---

Over the last two years, Robotics and Automation Society has supported a team for Mission 7 of the [International Aerial Robotics Competition](http://aerialroboticscompetition.org).  We've made multiple posts about our progress along the way, including posts about our success at competition last year, all of which can be found from the [IARC project page](/projects/2017-iarc).  At this year's competition, we were awarded both "Best System Design" (for the design best suited to complete the mission) and "Best Technical Paper" (read our paper [here](/assets/misc/iarc-technical-paper-2018.pdf)) at the American Venue of the competition.  Furthermore, we achieved the highest overall score at the American Venue.

Now that the project is complete, we wanted to write up a dump of all the technical aspects of the project, that's what this document is for.  If you want to know the details of the interesting stuff we did and why we did it, read onward! (Or just skip to the part you're interested in)

## Table of Contents
### Hardware
 - Compute
 - Sensors
 - Propulsion
 - Frame

### State Estimation
 - Optical flow
 - Extended Kalman Filter (EKF)
 - Arena boundary detection
 - The things that didn't work (if only we had another month)
 
### Controls
 - Dynamic Thrust Model
 - Motion Profile Controller

### Planning
 - Target interaction
 - Search-based planner?

### Target Robots
 - Detection
 - Filtering

### Obstacles
 - Detection
 - Filtering
 - Avoidance
