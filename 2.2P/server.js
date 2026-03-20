const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Simple endpoint
app.get("/hello", (req, res) => {
  res.send("Hello from Express server!");
});

// Add two numbers
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.send("Provide numbers like /add?num1=5&num2=3");
  }

  const sum = num1 + num2;
  res.send(`Sum is: ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});