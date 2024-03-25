const express = require("express");
const bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404", {
    pageTitle: "Page Not Found",
    title: "Page Not Found :(",
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
