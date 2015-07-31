#! /bin/bash

function ssh-command {
  ssh -i ~/.ssh/id_rsa core@192.168.1.13 $1
}

function scp-command {
  scp -r -i ~/.ssh/id_rsa $1 $2
}

ssh-command "mkdir -p /home/core/galliasphere/src"
scp-command ./src         core@192.168.1.13:/home/core/galliasphere/
scp-command ./Dockerfile  core@192.168.1.13:/home/core/galliasphere/Dockerfile
ssh-command "cd /home/core/galliasphere ; docker build --no-cache -t galliasphere ."
ssh-command "docker kill \`cat container_pid\`"
ssh-command "docker run -d -p 8000:8000 galliasphere 1>container_pid"
curl 192.168.1.13:8000
