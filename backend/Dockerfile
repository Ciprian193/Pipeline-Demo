# backend/Dockerfile

FROM eclipse-temurin:24-jre-alpine

WORKDIR /app

# Copiem JAR-ul rezultat din build
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
