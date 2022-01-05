# TODO: to change by a supported Red Hat image
FROM docker.io/library/node:current-slim

# Configure apt
RUN apt-get -y update

# Install slapd and ldap-utils
RUN LC_ALL=C DEBIAN_FRONTEND=noninteractive apt-get install -y ldap-utils

COPY . .
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "start" ]

