# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy the built React app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the Nginx default port
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]