FROM node:20

RUN apt-get update && \
    apt-get -y install ffmpeg

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY index.js .

CMD ["node", "index.js"]

EXPOSE 8000
