# Use Nginx as the base image
FROM node:alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build your application
RUN npm run build

# Use Nginx as the base image for the final stage
FROM nginx:stable-alpine

# Remove the default Nginx configuration file
# RUN rm /etc/nginx/conf.d/default.conf

# Copy the build output from the builder stage to replace the default Nginx contents
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# # Start Nginx when the container launches
# CMD ["nginx", "-g", "daemon off;"]

# # #
# # # Use Nginx as the base image
# # FROM nginx:stable-alpine

# # # Remove the default Nginx configuration file
# # RUN rm /etc/nginx/conf.d/default.conf

# # # Copy the build output to replace the default Nginx contents
# # COPY dist /usr/share/nginx/html

# # # Expose port 80 to the outside world
# # EXPOSE 80

# # # Start Nginx when the container launches
# # CMD ["nginx", "-g", "daemon off;"]
