#!/bin/bash
echo "📦  Building the application ..."!
webpack --mode production --env.ENVIRONMENT=staging --config ./webpack.config.js