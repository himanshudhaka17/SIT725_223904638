const mongoose = require("mongoose");
const Task = require("./models/Task");

mongoose.connect("mongodb://127.0.0.1:27017/studyTaskDB");

const sampleTasks = [
  {
    taskName: "Complete JavaScript quiz",
    subject: "Web Development",
    deadline: "2026-04-15",
    priority: "High",
    status: "Pending",
    notes: "Revise DOM manipulation and event handling before submission."
  },
  {
    taskName: "Prepare database report",
    subject: "Database Systems",
    deadline: "2026-04-18",
    priority: "Medium",
    status: "In Progress",
    notes: "Include schema design and MongoDB explanation."
  },
  {
    taskName: "Finish cloud lab screenshots",
    subject: "Cloud Computing",
    deadline: "2026-04-20",
    priority: "High",
    status: "Pending",
    notes: "Capture terminal output and final browser result."
  },
  {
    taskName: "Read article on AI ethics",
    subject: "Research Methods",
    deadline: "2026-04-22",
    priority: "Low",
    status: "Completed",
    notes: "Summarise the key ideas for class discussion."
  }
];

async function seedDatabase() {
  try {
    await Task.deleteMany({});
    await Task.insertMany(sampleTasks);
    console.log("Sample task data inserted successfully");
    mongoose.connection.close();
  } catch (error) {
    console.log("Seeding error:", error);
    mongoose.connection.close();
  }
}

seedDatabase();