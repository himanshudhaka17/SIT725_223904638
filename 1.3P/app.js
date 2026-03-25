// Student details
const name = "Himanshu Dhaka";
const studentId = "223904638";

console.log("Name:", name);
console.log("Student ID:", studentId);

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to check even or odd
function checkNumber(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Loop example
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Function outputs
console.log("Sum of 5 and 3:", add(5, 3));
console.log("Check 7:", checkNumber(7));