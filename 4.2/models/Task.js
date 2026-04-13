const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    minlength: 3
  },
  subject: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true,
    enum: ["Low", "Medium", "High"]
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "In Progress", "Completed"]
  },
  notes: {
    type: String,
    required: true,
    maxlength: 300
  }
});

module.exports = mongoose.model("Task", TaskSchema);