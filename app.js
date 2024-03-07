const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
