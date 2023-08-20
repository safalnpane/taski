// app.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const TaskModel = require("./models/TaskModel");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/taski");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

// Get the list of todos
app.get("/", (req, res) => {
  TaskModel.find().then((err, tasks) => {
    if (err) {
      return res.send(err);
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

// Star a todo
app.put("/star/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const todo = await TaskModel.findOne({ _id: todoId });

    if (!todo) {
      return res.status(404).json({ error: "todo not found" });
    }

    todo.stared = !todo.stared;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Check todo
app.put("/check/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const todo = await TaskModel.findOne({ _id: todoId });

    if (!todo) {
      return res.status(404).json({ error: "todo not found" });
    }

    todo.done = !todo.done;
    await todo.save();

    res.json(todo);
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
