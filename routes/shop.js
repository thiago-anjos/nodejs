const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // the first argument is the name of template, the second is the datra
  res.render("shop", {
    products,
    pageTitle: "Shop Title Dinamyc",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productsCSS: true,
    layoyt: false,
  });
});

module.exports = router;
