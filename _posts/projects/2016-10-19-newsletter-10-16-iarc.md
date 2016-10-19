---
layout: post
title:  "Newsletter October 2016: IARC 7"
date:   2016-10-19
author: Levi Burner, Aaron Miller, & Dan Gilmour 
categories: projects 2017-iarc
icon: cogs
---


RAS is participating in Mission 7 of the International Aerial Robotics Competition (IARC). IARC has been running since 1991 and centers around the concept of missions which can span multiple years. There have been seven missions in total, with each successive mission pushing the boundaries of aerial robotics. See <a href="http://www.aerialroboticscompetition.org">http://www.aerialroboticscompetition.org</a> for more information.

Mission 7 began in 2014 and has not yet been solved. Teams are required to develop an autonomous aerial robot capable of directing ground robots through physical interaction. More specifically, 10 iRobot Create 2 differential drive robots move around along a randomly generated path inside an arena. The arena consists of 10m by 10m flat area marked with a grid line pattern. The aerial robot can interact with the ground robots by either blocking its path, forcing it to turn around, or by touching a switch on the top of a ground robot, causing it to rotate by 45 degrees. The goal is to direct four of the ten ground robots across one side of the arena.

So far, the most accomplished team has demonstrated tracking and getting in front of the ground robots while avoiding obstacles. However, they did not direct a ground robot across a particular side of the arena.

MAIN CHALLENGES
<ul>
    <li>Localization without the use of GPS, external beacons, or nearby landmarks necessary for SLAM</li>
    <li>Making physical contact with ground robots during flight</li>
    <li>Finding an optimal path to guide ground robots</li>
    <li>Locating ground robots using computer vision</li>
    <li>Planning motion profiles to avoid targets and interact with ground robots</li>
</ul>
CURRENT STATUS
<ul>
    <li>Using ROS to manage software complexity</li>
    <li>Implementing MORSE robotics simulator to test AI and computer vision</li>
    <li>Designing a custom quadcopter suited for the application</li>
    <li>Implementing safety infrastructure to prevent crashing and harm to bystanders</li>
    <li>Using Agile reminiscent project management</li>
    <li>Using Slack, Github, and Trello to</li>
</ul>
encourage collaboration
We are interested in a dedicated faculty advisor. If interested, please send the project leads an email. We would enjoy meeting with you.