#!/usr/bin/env bash
#
#
node=`which node 2>&1`
if [ $? -ne 0 ]; then
  echo "Please install NodeJS."
  echo "http://nodejs.org/"
  exit 1
fi

npm=`which npm 2>&1`
if [ $? -ne 0 ]; then
  echo "Please install NPM."
fi

echo "Updating all git submodules..."
git submodule init
git submodule foreach --recursive "git submodule update"

echo "Pulling all git submodules..."
git submodule foreach --recursive "git pull"

echo "Installing required npm packages..."
npm install

echo "Well done ! I can't do more , because i am so stupid and lazy."
echo "Please run next step by yourself : gulp <taskname>"