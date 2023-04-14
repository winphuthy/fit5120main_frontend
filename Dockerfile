FROM node:18.14.0
WORKDIR /react
COPY package.json .
RUN npm install
COPY . .
ENV WATCHPACK_POLLING=true
EXPOSE 3000
CMD ["npm", "start"]