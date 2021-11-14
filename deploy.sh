#!/usr/bin/env sh

set -e 

npm run build --no-clean

cd dist

git init
git add -A
git commit -m 'Fix Deployment'
git push -f https://github.com/khulqu15/sengon_kavling.prototype.git main

cd -