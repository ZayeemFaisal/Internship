const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const taskText = taskInput.value.trim(); // Remove leading/trailing white spaces

  if (taskText !== '') {
    addTask(taskText); // Add task to the list
    taskInput.value = ''; // Clear input field
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerText = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    li.remove(); // Remove the task when delete button is clicked
  });

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', function() {
    li.classList.toggle('completed'); // Toggle 'completed' class to mark/unmark task as complete
  });

  li.appendChild(deleteButton);
  li.appendChild(completeButton);

  taskList.appendChild(li);
}
