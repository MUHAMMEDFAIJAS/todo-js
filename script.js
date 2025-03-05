

//  without local storage


document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Add a delete button to the list item
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        li.remove();
      });
  
      li.appendChild(deleteBtn);
      document.getElementById('taskList').appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  });
  
  // Allow pressing "Enter" to add a task
  document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('addTaskBtn').click();
    }
  });




  // using localstorage 



  // Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
  });
  
  // Function to load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
  
    tasks.forEach(task => {
      const li = createTaskElement(task);
      taskList.appendChild(li);
    });
  }
  
  // Function to create a task element
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // Add a delete button to the list item
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
      li.remove();
      saveTasks();
    });
  
    li.appendChild(deleteBtn);
    return li;
  }
  
  // Function to save tasks to local storage
  function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
  
    taskList.querySelectorAll('li').forEach(li => {
      tasks.push(li.textContent.replace('Delete', '').trim());
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Add a new task
  document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const li = createTaskElement(taskText);
      document.getElementById('taskList').appendChild(li);
      saveTasks();
  
      // Clear the input field
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  });
  
  // Allow pressing "Enter" to add a task
  document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('addTaskBtn').click();
    }
  });