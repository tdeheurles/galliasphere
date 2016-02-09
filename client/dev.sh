#!/bin/bash

docker run -ti                               \
  -v lasphereclub_cache:/client/node_modules \
  -v /$(pwd):/client                         \
  -w //client                                \
  --net=host                                 \
  weareadaptive/node:0.0.1                   \
  sh
