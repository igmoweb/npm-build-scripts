#!/usr/bin/env bash

npm run lint
BABEL_ENV=test mocha ./tests --require babel-register
