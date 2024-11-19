
// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Get the input value
   const taskValue = taskInput.value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center list-group-item-success';

    // Add the task text
    listItem.textContent = taskValue;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-close btn-outline-success btn-sm';
    removeButton.onclick = function () {
        removeTask(listItem);
    };

    // Append the button to the list item
    listItem.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);
    taskInput.value = '';

}

// Function to remove a task
function removeTask(task) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(task);
}