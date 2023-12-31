# Todo App

This is a React project made to further understand new technologies, mostly Tailwind and Typescript. Also worked with Json storage and local browser storage to keep the data stored, and Docker for another way to build the app. 

## Running the app
You can either run this app with docker or node. Whichever way you choose, simply run localhost:3000 afterwards to preview the project.

### 1.Running with node
```
npm install

npm start
```

### 2.Running with docker

To build the container and run it you can use the following commands:
```
docker build -t todo .

docker run -dp 127.0.0.1:3000:3000 todo
```
Once you are finished and want to stop the container, look for the id of your container and stop it.
```
docker ps

docker stop <container_id>
```


---
### Technologies used:

<div style="display:flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height="50"/>
</div>
