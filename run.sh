#!/bin/bash
if [[ -e container_id ]];then
	docker kill `cat container_id`
	docker rm tdeheurles/galliasphere
fi
docker build -t tdeheurles/galliasphere .
docker run -d -p 8200:8000 tdeheurles/galliasphere > container_id
