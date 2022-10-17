#!/bin/bash

 sed -i '' 's~SIB EMAILER~'"REGEX"'~g' ./index.html

sed -i '' 's|<span id="unlockedCount">\([0-9]\{0,\}\)</span>|<span id="unlockedCount">'"${unlockedCount}"'</span>|g' ./index.html