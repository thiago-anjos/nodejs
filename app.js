const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("METHOD:", req.method);
  console.log("HEADERS:", req.headers);
  res.end("Hello World!");
});
server.listen(3000);
