#!/bin/bash

RCol='\e[0m' ; Red='\e[0;31m'; Yel='\e[0;33m'; Blu='\e[0;34m'; Gre='\e[0;32m'; Pur='\e[0;35m'; Cya='\e[0;36m';
IMAGE_NAME=${DOCKER_USERNAME}/ornamentum

function print() {
  echo -e "\n$2$1$RCol"
}

function handleError() {
  if [ "$1" == "0" ]
  then
    echo -e "\n$Gre$2$RCol"
  else
    echo -e "\n$Red$3$RCol"
    exit 1
  fi
}

print "start publish" "$Gre"

print "build docker image" "$Gre"
docker build --pull --cache-from ${IMAGE_NAME} -t ${IMAGE_NAME} ${TRAVIS_BUILD_DIR}
handleError $? "docker image build successful" "docker image build failure"

print "login to docker hub" "$Gre"
echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
handleError $? "docker login successful" "docker login failure"

print "tag docker image" "$Gre"
docker tag ${IMAGE_NAME} ${IMAGE_NAME}:latest
handleError $? "docker tag successful" "docker tag failure"

#docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${TRAVIS_TAG}
#handleError $? "docker tag successful" "docker tag failure"

print "push docker image" "$Gre"
docker push ${IMAGE_NAME}:latest
handleError $? "docker latest push successful" "docker latest push failure"

#docker push ${IMAGE_NAME}:${TRAVIS_TAG}
#handleError $? "docker tag push successful" "docker tag push failure"

ssh -i ~/.ssh/id_rsa_ornamentum ${DEPLOY_USER}@${DEPLOY_HOST} "sh deploy.ornamentum.sh"

print "end publish" "$Gre"
print "deploy verification start" "$Gre"

curl -k -I "https://"${DEPLOY_HOST}

curl -k -I "https://"${DEPLOY_HOST} 2>&1 | grep -q "HTTP/2 200"
handleError $? "deployment successful" "deployment failure"
