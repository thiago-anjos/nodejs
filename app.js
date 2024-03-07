const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // pass the request to the next handler
});

app.use((req, res, next) => {
  console.log("In the middleware 2");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
