# Posts
## Jekyll
[Jekyll](https://jekyllrb.com) is a static site generator, made in Ruby, primarily used for blog sites. GitHub pages has Jekyll built in. This is convenient for us because all we have to do is commit our template changes, markdown files, data, etc and GitHub will take care of the rest of the building.

### [Writing posts in Jekyll](https://jekyllrb.com/docs/posts/)

## Writing Posts
### Files and Folders
All post files must be created in the _posts folder. Create post files in the corresponding folder category (eg. 'general', 'artbot', 'micromouse', etc) to keep things organized.

Use this naming convention: **YEAR-MONTH-DAY-TITLE.html**. The title doesn't matter and will not appear on the actual webpage. The extension can either be Markdown or HTML depending on how you want to code it.

### Front Matter
Your post files must contain YAML Front Matter at the very beginning.

####Example:####
```
---
layout: post
title:  "Pitt RAS wins 1st Place in Micromouse at IEEE SAC 2016"
date:   2016-04-11
author: John Linahan
categories: general
icon: trophy
---
```
#### categories
This should only contain one string and should be the same as the category folder.
#### icon
The icons use Font Awesome. They will appear beside the post in the site's feed. [See example](http://pittras.org/)

The current icons include:
- 'trophy' - for when we win something
- 'code' - posts relateding to code/programming/etc
- 'picture' - post primarily relating to pictures
- 'play' - post primarily relating to videos
- 'cogs' - post relating to mechanical/building/etc
- '' - default icon (empty string)

### Content
The rest is normal HTML or Markdown.

## Complete Example
[2016-04-11-ieeesac2016.html](https://github.com/Pitt-RAS/Pitt-RAS.github.io/blob/master/_posts/general/2016-04-11-ieeesac2016.html)
```
---
layout: post
title:  "Pitt RAS wins 1st Place in Micromouse at IEEE SAC 2016"
date:   2016-04-11
author: John Linahan
categories: general
icon: trophy
---

<p>
Congratulations to the Micromouse Team, Quentin Torgerson, Xavier Torgerson, Aaron Miller, Alex Fox, and Ryan Matthews! They won first place at IEEE SAC 2016 this past weekend at Cleveland State University. The Micromouse finished the course in 6.84 seconds.
</p>
<p>
Micromouse will be showcased at the SSOE Design Expo on April 20th.
</p>
<img style="width: 100%" src="/assets/images/posts/post-ieeesac2016.jpg">
```
