---
layout: post
title: "Review of KDE Direct propulsion system"
date: 2017-08-02
author: Aaron Miller
categories: reviews projects IARC
icon: cogs
---

For our 5kg custom autonomous quadrotor built over the past year, we used KDE Direct ESCs, motors, and props.  Specifically, we designed our propulsion system to provide approximately 10kg of thrust using the following combination:

- [515Kv, 535W Brushless Motors (KDE2814XF-515)](https://www.kdedirect.com/products/kde2814xf-515)
- [35A ESCs (KDEXF-UAS35)](https://www.kdedirect.com/products/kdexf-uas35)
- [Triple-bladed 12.5x4.3 Carbon Fiber propellers (KDE-CF125-TP)](https://www.kdedirect.com/products/kde-cf125-tp)

The ESCs were fantastic and incredibly responsive.  The synchronous rectification and regenerative braking features do feed large transients back into the system, but the only problem this caused occured when we had a connection (external to KDE's electronics) between our control electronics and our motor power system.  We were able to diagnose the problem with KDE's help, and adding an opto-isolation barrier completely solved any problems.

The motors were also very reliable and well-constructed.  We had one extremely bad crash from approximately 15m which broke the bearings on one motor, but they have otherwise been good.  The propellers were relatively quiet and very stable.  We eventually decided to switch to dual-bladed propellors with higher pitch to make the drone more agile.  Unfortunately, KDE does not sell propellers in the size we wanted, so we were forced to switch manufacturers.  Overall, we were extremely satisfied with KDE's parts.

![Render of mounted propeller](/assets/images/posts/post-iarc-kde-review.png)
