# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building. this may take a minute...
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "cookingwithsutto.com" > CNAME

echo Deploying..
git init
git add -A
git commit -m "deploy"

# deploy
git push -f git@github.com:ssuttoplunz/cookingwithsutto.git HEAD:origin/gh-pages

cd -

# script and deploy help taken from:
# https://dev.to/tiim/how-i-use-vue-js-on-github-pages-45np