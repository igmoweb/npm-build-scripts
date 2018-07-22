#!/usr/bin/env bash

echo "Building..."
rm -rf ./dist/$npm_package_version
pug --obj data.json src/index.pug --out dist/$npm_package_version
node-sass scss/style.scss | cssmin > dist/$npm_package_version/style.css
mustache data.json src/index.mustache | uglifyjs > dist/$npm_package_version/index.js
echo "Building finished"
