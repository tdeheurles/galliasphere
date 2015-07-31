FROM        nginx:latest

MAINTAINER  tdeheurles@gmail.com

RUN         rm /etc/nginx/conf.d/*.conf

#COPY        src/site.conf     /etc/nginx/conf.d/
COPY        src/nginx.conf     /etc/nginx/

COPY        src/index.html    /www/
COPY        src/images/       /www/images/
COPY        src/javascripts/  /www/javascripts/
COPY        src/stylesheets/  /www/stylesheets/
