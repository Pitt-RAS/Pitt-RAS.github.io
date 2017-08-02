---
layout: post
title: "Review of Slamtec RPLIDAR A2 on NVIDIA Jetson"
date: 2017-08-02
author: Aaron Miller
icon: cogs
---

Our IARC Mission 7 team this past year used an RPLIDAR A2 made by [Slamtec](https://www.slamtec.com) for obstacle detection.  For a little background information, the drone flies in an open gymnasium and must avoid four moving ground robots with tall PVC pipes on top.

The installation and setup process were fairly painless.  We have used both the NVIDIA Jetson TX1 and TX2 with this sensor.  The default configuration of Linux4Tegra does not include the kernel module for communicating with the CP210x usb-to-serial converter included with the RPLIDAR.  To set up this kernel module, we followed the instructions [here](https://devtalk.nvidia.com/default/topic/890599/?comment=4710941).

After that was done, everything worked flawlessly with the ROS packages provided by Slamtec [here](https://github.com/robopeak/rplidar_ros).

We had no problems with noisy or invalid data coming out of the sensor; we were easily able to cluster the data into individual obstacles that could then be fed into our obstacle avoidance code.

![RPLIDAR A2 on drone](/assets/images/posts/post-iarc-slamtec-review-rplidar.png)
