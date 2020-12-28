# deploy.sh

# abort on errors
set -e

# build
# echo Building...
# yarn build

echo Adding CNAME file to dist...
# go into dist folder
cd dist
# need when deploying to custom domain
echo "cookingwithsutto.com" > CNAME

# navigate out of repo directory
cd ../..

echo Copying files to cookingwithsutto-deploy...
# create folder called
mkdir -p cookingwithsutto-deploy

# remove anything inside this folder
rm -rf cookingwithsutto-deploy/*

# copy dist into folder
cp -r cookingwithsutto/dist/* cookingwithsutto-deploy

# return to repo
cd cookingwithsutto

echo Checking out gh-pages branch...
git fetch
git checkout origin/gh-pages
git pull

echo Deploying...
# copy back into repo
cp -r cookingwithsutto-deploy/* cookingwithsutto


# TODO: add deploy back later
# git init
# git add -A
# git commit -m "deploy"

# # deploy
# git push -f git@github.com:ssuttoplunz/cookingwithsutto.git HEAD:origin/gh-pages

# cd -

# # script and deploy help taken from:
# # https://dev.to/tiim/how-i-use-vue-js-on-github-pages-45np