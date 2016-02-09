#!/bin/bash

path_client="<% path.client %>"
image_release_client="<% image.release.client %>"
volume_cache="<% volume.cache %>"
build="<% args.build %>"
temp_container="sphereclub_build"
temp_image="sphereclub_image"

# fail fast
set -euo pipefail

# build dist
if [[ -f client ]]; then 
    rm -rf /client/* 
fi
cp -r ../client .
cp install.Dockerfile Dockerfile
docker build -t ${temp_image} .
rm -rf client 
rm Dockerfile

docker rm ${temp_container} 2&> /dev/null || true
docker run -ti                                   \
  --name ${temp_container}                       \
  -v ${volume_cache}:${path_client}/node_modules \
  -w /${path_client}                             \
  ${temp_image}

# extract from container
docker cp ${temp_container}:${path_client}/public .
docker rm ${temp_container}
docker rmi ${temp_image}

# build nginx
cp nginx.Dockerfile Dockerfile
docker build -t ${image_release_client} .
docker tag ${image_release_client} ${image_release_client}:${build}

# clean up
rm -rf public
rm Dockerfile
