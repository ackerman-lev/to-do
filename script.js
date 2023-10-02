document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${taskText}</td>
                <td><button class="remove-btn">Remove</button></td>
            `;
            taskList.appendChild(newRow);
            taskInput.value = '';

            // Attach a click event listener to the "Remove" button for the new task
            const removeBtn = newRow.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                newRow.remove();
            });
        }
    });
});
