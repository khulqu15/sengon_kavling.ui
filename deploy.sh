#!/usr/bin/env sh

set -e 

npm run build

cd dist

git init
git add -A
git commit -m 'Fix Deployment'
git push -f https://github.com/khulqu15/grand_sengon.kavling.prototype.git main

cd -