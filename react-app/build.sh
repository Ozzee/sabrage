#!/bin/bash
set -e

node node_modules/react-scripts/bin/react-scripts.js build

find build/static/js -type f -exec sed -i '.bak' 's/http:\/\/localhost:8000//g' {} \;

rm build/statis/js/*.bak

cp build/index.html ../templates/

rm -r ../static/sabrage/static/*

cp -r build/static ../static/sabrage/
