FROM        nginx:latest

MAINTAINER  tdeheurles@gmail.com

RUN         rm /etc/nginx/conf.d/*.conf

COPY        src/nginxconf/site.conf     /etc/nginx/conf.d/
COPY        src/nginxconf/nginx.conf    /etc/nginx/
