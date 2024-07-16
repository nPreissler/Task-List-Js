function addTask() {
    var taskInput = document.getElementById('taskInput')
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.className = 'taskItem';
        li.innerHTML = taskText + '<button onclick="removeTask(this)"> Remover </button>';
        taskList.appendChild(li);
        taskInput - '';
        taskInput.value = '';
    } else {
        alert('Por favor insira uma tarefa válida.')
    }
}
function removeTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}

document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
function deleteTasks(){
    
}