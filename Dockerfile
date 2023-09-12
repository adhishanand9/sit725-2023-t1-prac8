# ==== CONFIGURE =====

# Use a Node 18 base image
FROM node:18-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD =====

#It installs dependencies 
RUN npm install

EXPOSE 3000

# Start the app
CMD [ "npm", "start"]