#!/bin/bash
echo "🚀  Bootstraping the application! ..."
webpack-dev-server --mode development --env.ENVIRONMENT=qa --config ./webpack.config.js