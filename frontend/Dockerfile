# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json  ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the Nginx default port
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]