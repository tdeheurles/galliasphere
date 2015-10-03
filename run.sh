#!/bin/bash

if [[ -e container_id ]]; then
  docker kill `cat container_id`
fi
docker build -t galliasphere
docker run -d -p 8567:8000 galliasphere > container_id
