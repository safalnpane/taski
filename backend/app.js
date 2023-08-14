// app.js

const express = require("express");
const mongoose = require("mongoose");

const TaskModel = require("./models/TaskModel");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/taski");

app.get("/", (req, res) => {
  TaskModel.find().then((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.send(tasks);
  });
});

app.post("/", (req, res) => {
  res.send("hello post");
});

app.listen(port, () => {
  console.log(`Taski server running on port ${port}`);
});
