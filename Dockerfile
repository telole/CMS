FROM node:20.3.0-slim

RUN apt-get update -y && apt-get install -y curl python3 make g++ && rm -rf/var/lib/apt/lists/*

WORKDIR /strapi-sttp

COPY package.* .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 1337
CMD ["npm", "run", "start"]