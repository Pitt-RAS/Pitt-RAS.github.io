---
layout: post
title:  "Newsletter October 2016: Motion Control"
date:   2016-10-19
author: Alex Fox, Ryan Matthews, & Xavier Torgerson 
categories: projects 2017-motion-control
icon: cogs
---

Many robotics projects involve controlling a car-like robot to accomplish some task. Examples include last year’s Micromouse (below), Line Follower, and Sumo projects.

<img style="width: 100%" src="/assets/images/projects/2017/project-micromouse.jpg">

While each robot has different characteristics and is destined to accomplish a different goal, one thing is the same. They all have wheels. They all need motion control.

Often times in computer science, we find that many projects have the need to solve a similar problem, yet each project has been developing its own solution. This indicates duplicated or “wasted” effort, because the projects could be sharing code where their tasks overlap.

The goal of the Motion Control project is to study control theory surrounding car-like robots, to identify common elements and concepts surrounding these robots, and then to develop a practically useful library or “toolkit” for a potentially large audience. We want to develop a robust and easy to use strategy for getting a car-like robot up and running, so that the developer can quickly and effectively move past the task of motion control and continue on to solving the larger high-level problem (such as following a line or solving a maze).

This project involves a fairly wide scope of skills and knowledge:
<ul>
    <li>C++ programming, compilation,
    libraries</li>
    <li>Version control (git)</li>
    <li>PID, feed-forward, and self-tuning
    control theory</li>
    <li>Adaptability to feedback from unknown
    sources</li>
    <li>Physics surrounding linear and
    rotational motion</li>
    <li>Mechanical and electronic design</li>
    <li>Use of diverse computer systems (Arduino, Raspberry Pi, UNIX, Windows...)</li>
</ul>
As a proof of concept, we would like to design three physically and electronically diverse robots and then load the same program onto each one, demonstrating how our project might adapt to different robots. Above all, we’re here to learn.