// app.js

const express = require("express");
const mongoose = require("mongoose");

const TaskModel = require("./models/TaskModel");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/taski");

app.use(express.json());

app.get("/", (req, res) => {
  TaskModel.find().then((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.send(tasks);
  });
});

app.post("/", async (req, res) => {
  try {
    const newTodo = new TaskModel(req.body);
    await newTodo.save();
    res.send(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Taski server running on port ${port}`);
});
