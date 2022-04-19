/*image de base*/
FROM node:17-alpine
/*current dir place of work*/
WORKDIR .
/*cpy everything inside my container*/
COPY . .
/*run my app*/
RUN npm run dev
