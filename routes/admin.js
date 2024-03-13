const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product Dynamic title",
    path: "/admin/add-product",
    activeShop: true,
    formCSS: true,
    productCSS: true,
    layoyt: false,
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
