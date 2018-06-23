#!/bin/bash

echo "start deploy"
echo "${DEPLOY_RSA_KEY}" | base64 --decode >/tmp/rsync_rsa

echo "key generation successful"
echo "deploy build path: ${TRAVIS_BUILD_DIR}/dist/ornamentum-demo/"
echo "deploy instance: ${DEPLOY_USER}@${DEPLOY_HOST}"

rsync -avz -e "ssh -i /tmp/rsync_rsa" --delete ${TRAVIS_BUILD_DIR}/dist/ornamentum-demo/ ${DEPLOY_USER}@${DEPLOY_HOST}:~/ornamentum.app/
echo "end deploy"

