FROM node:20.18.0 AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY ../src ./src
COPY ../public ./public
COPY ../next.config.ts ./next.config.ts
COPY ../tsconfig.json ./tsconfig.json

EXPOSE 3000
CMD ["npm", "run", "dev"]
