const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
