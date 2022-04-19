/*image de base*/
FROM node:17-alpine
/*current dir place of work*/
WORKDIR /.
/*cpy everything inside my container*/
COPY . .
/*install packages*/
RUN npm install -g npm@8.7.0
/*run app*/
CMD ["npm","run","dev"]
