document.addEventListener('DOMContentLoaded', function () {
  // Toggle sidebar open/close
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Toggle project dropdown
  const projectsToggle = document.getElementById('projects-toggle');
  const projectsList = document.getElementById('projects-list');

  projectsToggle.addEventListener('click', function (event) {
    event.preventDefault();
    projectsList.classList.toggle('expanded');
  });

  // Toggle completed tasks dropdown
  const completedToggle = document.getElementById('completed-toggle');
  const completedList = document.getElementById('completed-list');

  completedToggle.addEventListener('click', function (event) {
    event.preventDefault();
    completedList.classList.toggle('expanded');
  });

  // Add Task Functionality
  const addTaskButton = document.getElementById('addTaskButton');
  const addTaskFormContainer = document.getElementById('addTaskFormContainer');
  const newTaskForm = document.getElementById('newTaskForm');
  const taskCardsContainer = document.getElementById('taskCards');
  const cancelTaskButton = document.getElementById('cancelTaskButton');

  addTaskButton.addEventListener('click', function () {
    addTaskFormContainer.style.display = 'flex';
  });

  cancelTaskButton.addEventListener('click', function () {
    addTaskFormContainer.style.display = 'none';
  });

  newTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;

    addTaskCard(taskTitle, taskDescription);

    // Reset the form and hide the form container
    newTaskForm.reset();
    addTaskFormContainer.style.display = 'none';
  });

  function addTaskCard(title, description) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    taskCard.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
    `;

    taskCardsContainer.appendChild(taskCard);
  }

  // Search Functionality
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const taskCards = document.querySelectorAll('.task-card');

    taskCards.forEach(function (card) {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
