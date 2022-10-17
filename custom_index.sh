#!/bin/bash

 sed -i '' 's~SIB EMAILER~'"REGEX"'~g' ./index.html

sed -i '' 's|</head><body>|</head><body style="background-color: #131219">|g' ./biddz-index.html