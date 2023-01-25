FROM node:latest

RUN git clone https://github.com/hakimel/reveal.js.git /usr/src/app/reveal.js

WORKDIR /usr/src/app/reveal.js

RUN npm install

CMD [ "npm", "start", "--", "--port=8001" ]
