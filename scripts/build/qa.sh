#!/bin/bash
echo "📦  Building the application ..."!
webpack --mode production --env.ENVIRONMENT=qa --config ./webpack.config.js