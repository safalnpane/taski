// app.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/taski");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Taski server running on port ${port}`);
});
