#!/bin/bash

echo "start deploy"

IMAGE_NAME=${DOCKER_USERNAME}/ornamentum

echo "build docker image"
docker build --pull --cache-from ${IMAGE_NAME} -t ${IMAGE_NAME} ${TRAVIS_BUILD_DIR}

echo "login to docker hub"
echo docker ${DOCKER_PASSWORD} | login -u ${DOCKER_USERNAME} --password-stdin

echo "login to docker hub"
docker tag ${IMAGE_NAME} ${IMAGE_NAME}:latest

echo "push docker image"
docker push ${IMAGE_NAME}:latest

#rsync -avz -e "ssh -i ~/.ssh/id_rsa_ornamentum" --delete ${TRAVIS_BUILD_DIR}/dist/ornamentum-demo/ ${DEPLOY_USER}@${DEPLOY_HOST}:~/ornamentum.app/
echo "end deploy"

