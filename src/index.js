document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  const task = document.getElementById('tasks');

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.getElementById('new-task-description').value;

    task.innerHTML += `<li>${newTask}</li>`;
    
  });

});
