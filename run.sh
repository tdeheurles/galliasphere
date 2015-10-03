#!/bin/bash
if [[ -e container_id ]];then
	docker kill `cat container_id`
	docker rm galliasphere
fi
docker build -t galliasphere .
docker run -d -p 8200:8000 galliasphere > container_id