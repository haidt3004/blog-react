# Use an official Node runtime as a parent image
FROM node:8.9

# Make port 1000 available to the world outside this container
EXPOSE 1000

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app
RUN npm install forever -g

# Install & build react app
RUN npm install
RUN npm run build

# Install server app
WORKDIR /app/server
RUN npm install

# Setting environment variables
ENV DB_URI mongodb://mymongo/rblog
ENV SENTRY_DNS https://1f4bf702246d45d28e4f0d24d17832ca:0679e0a6c0804c19924078f98954f638@sentry.io/264486
ENV MONGODB_DEBUG false
ENV PORT 1000
ENV NODE_ENV production
ENV DEBUG *,-express:*,-morgan,-send,-body-parser:*

# launch the container
CMD ["npm", "run", "start-prod"]
