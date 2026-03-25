const express = require("express");

const app = express();
const PORT = 3001;

// Student details
const name = "Himanshu Dhaka";
const studentId = "223904638";

// Functions
function add(a, b) {
  return a + b;
}

function checkNumber(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Home route
app.get("/", (req, res) => {
  let numbers = "";
  for (let i = 1; i <= 5; i++) {
    numbers += i + "<br>";
  }

  res.send(`
    <h1>SIT725 Task 1.3P</h1>
    <p>Name: ${name}</p>
    <p>ID: ${studentId}</p>

    <h2>Numbers from 1 to 5:</h2>
    ${numbers}

    <h2>Results:</h2>
    <p>Sum of 5 and 3: ${add(5, 3)}</p>
    <p>Check 7: ${checkNumber(7)}</p>
  `);
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});