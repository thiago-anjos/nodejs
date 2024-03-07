const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware 2");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In the middleware 2");
  res.send("Bye!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
