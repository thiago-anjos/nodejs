const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("METHOD:", req.method);
  console.log("HEADERS:", req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>Hello World</h1></body></html>");
  res.end("");
});
server.listen(3000);
