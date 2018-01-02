# Use an official Node runtime as a parent image
FROM node:8.9

# Make port 1000 available to the world outside this container
EXPOSE 1000

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install & build react app
RUN npm install
RUN npm run build

# Install api app and start it when the container launches
WORKDIR /app/api
RUN npm install
RUN npm install forever -g
CMD ["npm", "run", "start-prod"]
