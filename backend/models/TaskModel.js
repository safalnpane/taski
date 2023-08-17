// TaskModel.js

const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false,
  },
  isStared: {
    type: Boolean,
    reuqired: true,
    default: false,
  },
});

const TaskModel = mongoose.model("TaskModel", TaskSchema);
module.exports = TaskModel;
