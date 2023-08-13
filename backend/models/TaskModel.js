// TaskModel.js

const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  isDone: Boolean,
});

const TaskModel = mongoose.model("TaskModel", TaskSchema);
module.export = TaskModel;
