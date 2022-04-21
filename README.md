#crud-users

# Server
npm intsall

npm run dev

# Client
npm install

npm start

# Together (concurrently)
npm run dev

# backend base url : http://localhost:3700/
# frontend base url : http://localhost:3000/

change the content of MONGO_URI in your .env file with you access URI mongoDB cloud

# List of routes (backend)

#Add user

/api/users (POST)

#Get all users

/api/users (GET)

#Get one user

/api/users/:id (POST)

#Update user

/api/users/:id (POST)

#Delete one user

/api/users/:id (POST)

# List of routes (frontend)

/ (principal page)

/:id (find user by id)

### Deploy app inside k8s with jenkins
### install jenkins plugins such as Docker pipeline (to push my app container for my docker hub account),kubernetes continuous plugin go to this link before
```bash
https://updates.jenkins.io/download/p...
````
## and configure kubernetes plugin using kube config file
### 1.create jenkins container
```bash
sudo docker run -u 0 --privileged --name jenkins -it -d -p 8089:8080 -p 55555:50000 -v /var/run/docker.sock:/var/run/docker.sock -v $(which docker):/usr/bin/docker -v /home/jenkins_home:/var/jenkins_home jenkins/jenkins:latest
```
### 2.show id of container 
```bash
docker ps
```
### 3.show log of container 
```bash
docker logs –f <id_contantainer>
```
### 4.extract id of my k8s cluster inside kube config file
# go to home directory
```bash
cd ~
```
# show all directory 
```bash
ll
```
# go to kube
```bash
cd .kube/
```
# go to config file
```bash
cd config
```
# show content of this file
```bash
cat config
```



