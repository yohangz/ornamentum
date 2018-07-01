#!/bin/bash

echo "start deploy"
IMAGE_NAME=${DOCKER_USERNAME}/ornamentum

echo "stop running image"
docker ps | grep ${IMAGE_NAME} | awk '{print $1}' | xargs docker stop

echo "pull latest image"
docker pull ${IMAGE_NAME}

echo "run latest image"
docker run -p 8080:8080 -d ${IMAGE_NAME}
echo "end deploy"
