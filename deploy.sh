#!/bin/bash

echo "start deploy"
rsync -avz -e "ssh -i ${HOME}/.ssh/id_rsa_deploy" --delete ${TRAVIS_BUILD_DIR}/dist/ornamentum-demo/ ${DEPLOY_USER}@${DEPLOY_HOST}:~/ornamentum.app/
echo "end deploy"

