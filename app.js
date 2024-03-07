const express = require("express");

const app = express();

app.use("/product", (req, res, next) => {
  console.log("In the middleware 2");
  res.send("Product!");
});

app.use("/", (req, res, next) => {
  console.log("In the middleware 2");
  res.send("Bye!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
