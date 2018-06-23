#!/usr/bin/env bash

echo "${DEPLOY_RSA_KEY}" | base64 --decode >/tmp/rsync_rsa
rsync -avz -e "ssh -i /tmp/rsync_rsa" --delete ${TRAVIS_BUILD_DIR}/dist/ornamentum-demo/ ${DEPLOY_USER}@${DEPLOY_HOST}:~/ornamentum.app/


