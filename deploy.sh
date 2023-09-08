# deploy.sh

# abort on errors
set -e

# build
echo Building...
yarn build

echo Adding CNAME file to dist...
# copy CNAME into dist folder
cp ./CNAME ./dist/

echo Adding sitemap file to dist...
# copy CNAME into dist folder
cp ./sitemap.xml ./dist/

# navigate out of repo directory
cd ..

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
git checkout gh-pages
git pull

echo Deploying...
# remove everything in gh-pages branch
rm -rf !(./node-modules/*|.gitignore)
# copy dist folder into repo
cp -r ../cookingwithsutto-deploy/* ../cookingwithsutto/


# TODO: add deploy back later
# git init
# git add -A
# git commit -m "deploy"

# # deploy
# git push -f git@github.com:ssuttoplunz/cookingwithsutto.git HEAD:origin/gh-pages

# cd -

# # script and deploy help taken from:
# # https://dev.to/tiim/how-i-use-vue-js-on-github-pages-45np