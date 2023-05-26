FROM node:20

RUN apt-get update && \
    apt-get -y install ffmpeg

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY index.js .

CMD ["npm", "start"]

EXPOSE 8000
