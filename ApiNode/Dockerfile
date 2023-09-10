FROM node:16.13.2

# Create app directory
WORKDIR /app


ENV APP_PORT=8083
ENV TOKEN_KEY="8K1CSM11SUd3DXEk8CK/Xx9WBX5ENTiqns2UIDlOhoLZ0EgabFPEhGTKBPmBGQI6gtzoXjIqA2MsYFd+SMkwF8VQ0gevMsJGXZtNwNMLVQ8abSjWUsa4NTAZre9BVudErTE1wHxINK+uL1Nov1xuGxroxFEEUuPvEbITtJfqdnytuacVe9Dbn0o0BAq3OrPISAjbpNmkCkdps2E3p1dWGXtktsAlLHvOpqoKZxoPzbJnB1Z7lGr7YwC3exQg7u+ZB5NFuw6NyMxi78xto0cGjMfPJ6LIkj3Phfx3UrqvyYYiSxlzGpxRBgMCnWWNsLJYbCh7SOjh8ynCtFNUU0w7sA=="
ENV MONGO_HOST="host.docker.internal"
ENV MONGO_PORT=27017
ENV MONGO_DB="testnode"
ENV MONGO_USER="root"
ENV MONGO_DB_TEST="testnodetest"
ENV MONGO_PASSWORD="example"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install app dependencies
RUN npm install

#test 
RUN npm run test 

# Copy the rest of the application code to the container
COPY . .

# Build TypeScript code

RUN npm run build
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 81
CMD [ "node", "./bin/index.js" ]