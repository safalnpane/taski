// app.js

const express = require("express");
const mongoose = require("mongoose");

const TaskModel = require("./models/TaskModel");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/taski");

app.use(express.json());

// Get the list of todos
app.get("/", (req, res) => {
  TaskModel.find().then((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.send(tasks);
  });
});

// Create a new todo
app.post("/", async (req, res) => {
  try {
    const newTodo = new TaskModel(req.body);
    await newTodo.save();
    res.send(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a todo
app.put("/:todoId", async (req, res) => {
  try {
    const updatedTodo = await TaskModel.findOneAndUpdate(
      { _id: req.params.todoId },
      { name: req.body.name },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(400).json({ error: "todo not found" });
    }

    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a todo
app.delete("/:todoId", async (req, res) => {
  try {
    await TaskModel.deleteOne({ _id: req.params.todoId });
    res.json({ message: "todo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Taski server running on port ${port}`);
});
