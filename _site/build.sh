#!/bin/sh

if [ -z "$1" ]
  then
    echo "No commit message supplied"
else
    bundle exec jekyll build
    git checkout dev
    git add -A
    git commit -m $@
    git push origin dev
    grunt buildcontrol:pages
fi
