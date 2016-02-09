FROM        <% image.base.node %>:<% version.base.node %>
MAINTAINER  <% maintainer %>

COPY        client    <% path.client %>
WORKDIR     <% path.client %>

ENTRYPOINT  ["npm", "run", "build"]
