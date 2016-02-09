#!/bin/bash

if [[ $# != 1 ]];then
  echo "usage:"
  echo "  ${0} BUILD_ID"
  exit 1
fi 
build=$1

cd ..
    ./hive script hive_run \
    --config config.yml  \
    build install.sh \
    build $build
cd build
