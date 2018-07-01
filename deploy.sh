#!/bin/bash

echo "start publish"
IMAGE_NAME=${DOCKER_USERNAME}/ornamentum

echo "build docker image"
docker build --pull --cache-from ${IMAGE_NAME} -t ${IMAGE_NAME} ${TRAVIS_BUILD_DIR}

echo "login to docker hub"
echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin

echo "tag docker image"
docker tag ${IMAGE_NAME} ${IMAGE_NAME}:latest
docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${TRAVIS_TAG}

echo "push docker image"
docker push ${IMAGE_NAME}:latest
docker push ${IMAGE_NAME}:${TRAVIS_TAG}

ssh -i ~/.ssh/id_rsa_ornamentum ${DEPLOY_USER}@${DEPLOY_HOST} "sh deploy.ornamentum.sh"

echo "end publish"
