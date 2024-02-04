From node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV PORT 3700
EXPOSE ${PORT}
