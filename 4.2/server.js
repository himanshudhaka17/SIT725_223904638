const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studyTaskDB");

mongoose.connection.on("connected", () => {
  console.log("✅ Connected to MongoDB");
});

// GET API

app.post("/api/tasks", async (req, res) => {
  try {
    const { taskName, subject, deadline, priority, status, notes } = req.body;

    const task = new Task({
      taskName,
      subject,
      deadline,
      priority,
      status,
      notes
    });

    await task.save();

    res.status(201).json({
      statusCode: 201,
      message: "Task created",
      data: task
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: error.message
    });
  }
});

app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find({});
  res.json({
    statusCode: 200,
    data: tasks
  });
});

app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});