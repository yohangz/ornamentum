# base image
FROM node:10.15.0

# base work directory
WORKDIR /app

# Compy build artifacts
COPY dist/ornamentum-demo /app

# Expose application via port 8080
EXPOSE 8080

CMD ["node", "server.js"]
