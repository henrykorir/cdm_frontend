FROM node: alpine
WORKDIR /usr/src/app
COPY *.json ./
EXPOSE PORT 3000

RUN npm cache clear --force && npm install

ENTRYPOINT ["npm", "start"]

