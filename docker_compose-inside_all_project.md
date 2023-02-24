```bash
version: '3.0'
services:
 api:
   build: ./server/
   container_name: api
   ports:
     - "3700:3700"
   command: npm start
   environment:
    MONGO_URI:mongodb://user:pwd@db:27017
   volumes:
     - "./server/:/app"
     # w nijim zeda nit7akim fil node_modules
     - "/app/node_modules"

 web:
   build: ./client/
   container_name: web
   ports:
     - "3000:3000"
   command: npm start
   volumes:
     - "./client/:/app"
     # w nijim zeda nit7akim fil node_modules
     - "/app/node_modules"
     
 api:
   image: mongo
   restart: always
   environment:
     MONGO_ROOT_USER: root
     MONGO_ROOT_PWD: exemple
   volumes:
     - db-data:/data/db
volumes:
  db-data: {}
```
### et dans /client package.json il faut dit au proxy le srv api
### "proxy": "http://api:3700"

 
 
     
     
