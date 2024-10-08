// Get Elements
const popupBtn = document.getElementById('popupBtn');
const popupSection = document.getElementById('popupSection');
const notepadLink = document.getElementById('notepadLink');
const todoLink = document.getElementById('todoLink');
const notepadSection = document.getElementById('notepadSection');
const todoSection = document.getElementById('todoSection');
const todonavbar = document.getElementById('todonavbar');

// Notepad Elements
const addNoteBtn = document.getElementById('addNote');
const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const notesList = document.getElementById('notes');

// Todo Elements
const addTodoBtn = document.getElementById('addTodo');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Toggle Popup Section (open/close)
popupBtn.addEventListener('click', () => {
    popupSection.classList.toggle('visible');
    todonavbar.classList.toggle('visible');
});

// Navigation Links
notepadLink.addEventListener('click', () => {
    notepadSection.classList.add('active');
    todoSection.classList.remove('active');
});

todoLink.addEventListener('click', () => {
    todoSection.classList.add('active');
    notepadSection.classList.remove('active');
});

// Add Note
addNoteBtn.addEventListener('click', () => {
    const title = noteTitle.value;
    const content = noteContent.value;

    if (title && content) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}:</strong> ${content}`;
        notesList.appendChild(li);

        noteTitle.value = '';
        noteContent.value = '';
    } else {
        alert('Please enter both topic and note.');
    }
});

// Add To-Do Task
addTodoBtn.addEventListener('click', () => {
    const task = todoInput.value;

    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span> <button class="editTodo">Edit</button> <button class="deleteTodo">Delete</button>`;
        todoList.appendChild(li);
        todoInput.value = '';

        // Edit Task
        li.querySelector('.editTodo').addEventListener('click', () => {
            const newTask = prompt('Edit Task:', li.querySelector('span').innerText);
            if (newTask) {
                li.querySelector('span').innerText = newTask;
            }
        });

        // Delete Task
        li.querySelector('.deleteTodo').addEventListener('click', () => {
            li.remove();
        });
    } else {
        alert('Please enter a task.');
    }
});
