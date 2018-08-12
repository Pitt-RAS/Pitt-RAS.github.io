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
### [Hardware](#hardware)
 - [Frame](#frame)
 - [Propulsion](#propulsion)
 - [Sensors](#sensors)
 - [Compute](#compute)

### [State Estimation](#state-estimation)
 - [Optical flow](#optical-flow)
 - [Extended Kalman Filter (EKF)](#extended-kalman-filter-ekf)
 - [Arena boundary detection](#arena-boundary-detection)
 - [The things that didn't work (if only we had another month)](#the-things-that-didnt-work-if-only-we-had-another-month)
 
### [Controls](#controls)
 - [Dynamic Thrust Model](#dynamic-thrust-model)
 - [Motion Profile Controller](#motion-profile-controller)

### [Planning](#planning)
 - [Target interaction](#target-interaction)
 - [Search-based planner?](#search-based-planner)

### [Target Robots](#target-robots)
 - [Target Detection](#target-detection)
 - [Target Filtering](#target-filtering)

### [Obstacles](#obstacles)
 - [Obstacle Detection](#obstacle-detection)
 - [Obstacle Filtering](#obstacle-filtering)
 - [Obstacle Avoidance](#obstacle-avoidance)

### Hardware

Our team put a lot of time into building a custom drone for this competition.  Why did we do this?  We have a couple of reasons which are intimately tied together.  We wanted RGBD camera coverage around the bottom and sides of the drone and all computation done onboard; the only commercially available system which was close to our design goals while fitting inside the competition size limit is the DJI M100 when used with the DJI Guidance camera system.  We chose not to use this platform because it did not have quite enough thrust to carry the amount of compute we wanted available onboard the drone.  So, we built a custom system.

![2018 Competition Drone](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/drone-image.png)
<p style="text-align: center;">2018 Competition Drone</p>

## Frame
The frame is largely the same as last year's, with a couple of major changes.  First, this year's drone does not have prop guards.  The primary reason for this was weight savings; the motors on the final drone were at their limit for power usage, and increasing the weight of the drone would have drastically decreased our flight time and control authority.  Furthermore, the team was much more confident in the reliability of our software system by this point, so we were comfortable flying without the extra protection of the prop guards.

The other major difference is the structure around the bottom of the drone.  Because we switched from a scanning LIDAR to depth cameras this year, we no longer needed the plastic cage between the core and the target interaction plate to hold the LIDAR.  Instead, the block of foam for shock absorbtion is mounted directly onto the core carbon fiber plate.  We then were able to mount our sensors and compute on the bottom plate instead of on the core.

Several other changes were made for weight saving purposes; the bottom plate was made from laser cut plywood instead of cardboard, and the side bumpers for the targets were a single wire this year instead of wood.

## Propulsion
The propulsion system this year is exactly the same as last year's.  We use four [KDE Direct 515Kv motors](https://www.kdedirect.com/collections/uas-multi-rotor-brushless-motors/products/kde2814xf-515) with 12x6 APC propellors.  The system is powered by two Tattu 6S1P 35C LiPo batteries in parallel.

## Sensors

## Compute
We do all of our compute onboard.  The primary computer is an NVIDIA Jetson TX2, which does all of the low-latency processing required for state estimation, target tracking, and control.  The secondary computer is an Intel NUC 6i7KYK, which does all processing for the side cameras, which includes target detection, obstacle detection, and obstacle filtering.  The two computers communicate over the network.

# State Estimation

## Optical Flow

_Code:_ `iarc7_vision/src/OpticalFlowEstimator.cpp`

![Picture of flow statistics]()
<p style="text-align: center;">Picture of flow statistics</p>

We chose to do velocity estimation using optical flow on our bottom camera instead of using an optical flow module such as the PX4Flow.  This was primarily so that we could throw out flow from the moving targets, which would give us incorrect velocity estimates.  We use the Sparse PyrLK flow estimator in OpenCV, which provides flow vectors for a specified set of features between a pair of images.  These flow vectors are then filtered for outlier rejection.  Furthermore, if a frame does not have a tight enough distribution of flow estimates after outlier rejection, the entire frame is rejected.

## Extended Kalman Filter (EKF)
We use the [robot_localization](http://docs.ros.org/melodic/api/robot_localization/html/index.html) state estimator, which uses an EKF to estimate 6DOF pose, 6DOF velocity, and translational acceleration.  We modified the filter to only estimate the translational components, because we use the orientation estimates straight out of the flight controller orientation estimator.

## Arena Boundary Detection

_Code:_ `iarc7_vision/src/iarc7_vision/floor_detector.py`

![Arena Boundary](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/boundary-example.png)
<p style="text-align: center;">Arena Boundary</p>

![Arena Boundary Detector](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/boundary-detector-example.png)
<p style="text-align: center;">Arena Boundary Detector</p>

## The things that didn't work (if only we had another month)

_Code:_ `iarc7_vision/src/GridLineEstimator.cpp`

![Grid Detector](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/grid-detector.png)
<p style="text-align: center;">Grid Detector</p>

The primary state estimation technique that we didn't use at competition was a global position estimator based on the grid on the competition floor, which would have killed the drift in both our yaw estimates and position estimates.  The grid detector we had implemented worked, but had problems with jumpy position estimates that made it unusable at competition.  The current implementation in the [iarc7_vision](https://github.com/pitt-ras/iarc7_vision) repository uses an edge detector and a Hough transform to find the two edges of each white line in the arena, and then does a fitting procedure to minimize the squared difference in angle between the observed lines and the grid, followed by another fit to minimize the squared difference in position.  The 1m translation and 90 degree rotation ambiguities this leaves are then resolved based on the current estimated pose of the drone.  As you can see in the image, OpenCV's Hough transform does not perform non-max suppression, so multiple detections are present for each line.  Work was in progress [here](https://github.com/Pitt-RAS/iarc7_vision/tree/better-grid-detector) to both perform the non-max suppression and to detect the core of the line instead of the two edges, but that work was not finished in time for competiion.

# Controls
## Dynamic Thrust Model
## Motion Profile Controller

# Planning
## Target Interaction
## Search-based planner

# Target Robots
## Target Detection

We have two vision-based detectors for finding the target robots - one which runs on the bottom camera, and one which runs on the side cameras.  The detector on the bottom camera is based on classical computer vision techniques.  It first converts the image to the HSV color space, then normalizes the saturation.

## Target Filtering

# Obstacles
![An IARC Obstacle Robot](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/obstacle-picture.jpg)
<p style="text-align: center;">An IARC Obstacle Robot</p>

IARC Mission 7 requires the drone to avoid several obstacle robots in the arena, as seen above.  These obstacles primarily move in circles around the arena, although their movement is not very precise.

## Obstacle Detection

_Code:_ `iarc7_sensors/src/iarc7_sensors/obstacle_detector_r200.py`

Our obstacle detection is based on four Intel Realsense depth cameras, one pointing horizontally on each side of the drone.  Using depth cameras instead of a scanning LIDAR gives us a better vertical field of view - we can see obstacles below us that would not be seen by a planar LIDAR.  Furthermore, we get better position estimates because the resolution on the depth cameras is better than that of the scanning LIDARs in our price range, such as the RP-LIDAR A2 or the Scanse Sweep.

The detection algorithm first filters out points which do not belong to obstacles based on a variety of thresholds - these include throwing out the floor, throwing out points that are too far from the camera (because the noise in the depth map gets extremely large at long range), and throwing out points that are too close (because they are noise or they belong to the drone itself).  The points left should all belong to the PVC pipe obstacles that we expect in the arena, pictured below:

![Obstacle Point Cloud](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/obstacle-point-cloud.png)
<p style="text-align: center;">Obstacle Point Cloud - The green sphere at the bottom indicates the position estimate from the detector, and the green cylinder indicates the filtered obstacle position</p>

To group these points into individual obstacles, we run the DBSCAN clustering algorithm.  We then calculate the bounding box of each of the resulting clusters and report them as obstacle detections.

## Obstacle Filtering

_Code:_ `iarc7_sensors/src/iarc7_sensors/obstacle_filter.py`

The raw detections have a few problems: they are noisy, they occasionally have false positives and false negatives, and there are blind spots around the drone.  To fix these problems, we run a filter on top of these raw detections.  The main filter is actually a collection of single-obstacle filters, just like the [target tracking filter](#target-filtering).  It uses the same mechanisms for sorting obstacles into single-obstacle filters.  The single-obstacle filters are then the same as the single-target filters, except that they never leave the naive position-velocity Kalman Filter.  Even though we do have a more detailed motion model for the obstacles which would allow for a better filter, the position-velocity filter is good enough for our purposes, and it allows us to track obstacles other than the PVC roombas used in the IARC competition.

## Obstacle Avoidance

_Code:_ `iarc7_motion/src/iarc7_motion/iarc_tasks/task_utilities/obstacle_avoid_helper.py`

![Obstacle Avoidance Potential Field](/assets/images/posts/post-update-iarc-technical-postmortem-2018-08-10/potential-field.png)
<p style="text-align: center;">Obstacle Avoidance Potential Field</p>

Obstacle avoidance is performed using a modified potential field like the one shown above, where the force generated by the field modifies the requested velocity from the current task.  The primary difference from a typical potential field is that the distance between the drone and the obstacle is predicted forward in time based on the drone's current velocity.  Because the drone's acceleration is severely limited relative to its maximum allowed velocity, this causes the drone to react sooner if it will take longer to decelerate and avoid the obstacle.
