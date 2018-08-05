#!/bin/bash

if [ "$TRAVIS_PULL_REQUEST" = "false" ];
then
 echo "setup ssh key"
 openssl aes-256-cbc -K ${encrypted_48bfcff1b99c_key} -iv ${encrypted_48bfcff1b99c_iv} -in deploy.key.enc -out ~/.ssh/id_rsa_ornamentum -d
fi
