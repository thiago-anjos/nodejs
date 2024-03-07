const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const FILENAME = "names.txt";

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

function addNameToFile(nameInput) {
  const name = nameInput.trim();
  fs.appendFile(FILENAME, name + "\n", (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function readNamesFromFile() {
  try {
    return fs.readFileSync(FILENAME, "utf8").split("\n").filter(Boolean);
  } catch (error) {
    console.error(err);
    return [];
  }
}

router.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

router.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

router.post("/contact", (req, res) => {
  const formData = req.body;
  const name = formData.name;

  if (fileExists("names.txt")) {
    addNameToFile(name);
  } else {
    try {
      fs.writeFileSync("names.txt", name + "\n");
    } catch (error) {
      console.error(error);
    }
  }
  res.send("Thank you for your name, " + formData.name + "!");
});

router.get("/users", (req, res) => {
  const names = readNamesFromFile();
  res.send(names);
});

module.exports = router;
