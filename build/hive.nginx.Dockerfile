FROM        <% image.base.nginx %>:<% version.base.nginx %>

MAINTAINER  <% maintainer %>

RUN         rm /etc/nginx/conf.d/*.conf

COPY        nginx.conf   /etc/nginx/

COPY        public       <% path.client %>
