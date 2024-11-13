function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskContainer = document.getElementById('taskContainer');
    const priority = document.getElementById('priority').value;

    if (taskInput.value.trim()) {
        const card = document.createElement('div');
        card.classList.add('card', priority); 

        const taskText = document.createElement('p');
        taskText.textContent = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        
        deleteBtn.onclick = function() {
            if (priority === 'alta') {
                const confirmDelete = confirm("¿Seguro que quieres eliminar esta tarea de alta prioridad?");
                if (confirmDelete) {
                    taskContainer.removeChild(card);
                }
            } else {
                taskContainer.removeChild(card);
            }
        };

        card.appendChild(taskText);
        card.appendChild(deleteBtn);
        taskContainer.appendChild(card);

        taskInput.value = '';
    }
}
