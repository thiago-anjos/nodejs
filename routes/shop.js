const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In the middleware 2");
  res.send("Bye!");
});

module.exports = router;
