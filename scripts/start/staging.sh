#!/bin/bash
echo "🚀  Bootstraping the application! ..."
webpack-dev-server --mode development --env.ENVIRONMENT=staging --config ./webpack.config.js