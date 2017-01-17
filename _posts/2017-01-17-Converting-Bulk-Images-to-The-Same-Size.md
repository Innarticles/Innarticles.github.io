---
layout: post
title: Bulk Convert Images to the same size for training
---

### Set of commands that worked for me
- My images had some extra strings to its extention ".jpgwidth=203&height=307"
- So first, I renamed the images. 
- Then added padding while centering the image.
- From the terminal, Navigate to the root folders for the images

```shell
$ mkdir renamed
$ convert '*.jpgwidth=203&height=307' renamed/thumb-300-%03d.jpg
$ convert -define jpeg:size=200x200 *.jpg -thumbnail '100x100>' -bordercolor white  -border 50 -gravity center  -crop 100x100+0+0 +repage zzhumb-300-%03d.jpg
```
