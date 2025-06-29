#use an official image as a parent image
FROM node:22-slim
#set a working directory
RUN npm install -g nodemon

WORKDIR  /app
#copy all packages
COPY  package.*json ./
#install dependencies
RUN npm install 
#copy all files
COPY . .
#expose port
EXPOSE 5000
#run the app
CMD ["npm","run","dev"]