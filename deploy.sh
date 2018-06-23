#!/bin/bash

echo "start deploy"
rsync -avz --delete ${TRAVIS_BUILD_DIR}/dist/ornamentum-demo/ ${DEPLOY_USER}@${DEPLOY_HOST}:~/ornamentum.app/
echo "end deploy"
