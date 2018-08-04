#!/bin/bash

echo "install dependencies"
yarn

if [ "$TRAVIS_PULL_REQUEST" = "false" ];
then
  echo "install ssh key"
  eval "$(ssh-agent -s)"
  chmod 600 ./deploy.key
  ssh-add ./deploy.key
  echo ${DEPLOY_KNOWN_HOST} | base64 --decode >> ~/.ssh/known_hosts
  chmod 644 ~/.ssh/known_hosts
fi
