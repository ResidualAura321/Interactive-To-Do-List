document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        
        // Task text element
        const span = document.createElement('span');
        span.textContent = taskText;
        span.addEventListener('click', () => {
            span.classList.toggle('completed');
        });

        // Delete button element
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        taskInput.value = ''; // Clear input field
    }

    // Trigger on button click
    addBtn.addEventListener('click', addTask);

    // Trigger on pressing "Enter" key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});
