const container = document.getElementById("taskContainer");

function createCard(task) {
  return `
    <div class="card">
      <h3>${task.taskName}</h3>
      <p><b>Subject:</b> ${task.subject}</p>
      <p><b>Deadline:</b> ${task.deadline}</p>
      <p><b>Priority:</b> ${task.priority}</p>
      <p><b>Status:</b> ${task.status}</p>
      <p>${task.notes}</p>
    </div>
  `;
}

async function loadTasks() {
  const res = await fetch("/api/tasks");
  const data = await res.json();

  if (data.statusCode === 200) {
    container.innerHTML = "";
    data.data.forEach(task => {
      container.innerHTML += createCard(task);
    });
  }
}

window.onload = loadTasks;

const form = document.getElementById("taskForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTask = {
    taskName: document.getElementById("taskName").value,
    subject: document.getElementById("subject").value,
    deadline: document.getElementById("deadline").value,
    priority: document.getElementById("priority").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value
  };

  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  });

  const result = await res.json();

  if (result.statusCode === 201) {
    alert("Task added!");
    form.reset();
    loadTasks();
  }
});