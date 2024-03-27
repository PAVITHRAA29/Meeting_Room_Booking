FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY target/Meeting_Room_Blocker.jar /app

EXPOSE 8080

CMD ["java", "-jar", "Meeting_Room_Blocker.jar"]