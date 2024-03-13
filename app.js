const express = require("express");
const bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.engine("hbs", exphbs.engine({ extname: ".hbs", defaultLayout: null }));
app.set("view engine", "hbs");
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
