# Stage 1: Build the application using Maven
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Copy all files needed for Maven build
COPY . .

# Build the project and package it into a jar file
RUN mvn clean package -DskipTests

# Stage 2: Use a smaller base image to run the app
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy the jar file from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your Spring Boot app runs on (default 8080)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
