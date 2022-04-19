/*image de base*/
FROM node:17-alpine
/*current dir place of work and package for reading params of proxy*/
WORKDIR /.\./client/package.json
/*cpy everything inside my container*/
COPY . .
/*install packages*/
RUN npm install -g npm@8.7.0
/*run app*/
CMD ["npm","run","dev"]
