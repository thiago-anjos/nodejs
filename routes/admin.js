const express = require("express");
const router = express.Router();

router.use("/add-product", (req, res, next) => {
  console.log("In the middleware 2");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log("req.body", req.body);
  res.redirect("/");
});

module.exports = router;
