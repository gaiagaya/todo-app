const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

const items = [];

taskInput.addEventListener("keyup", processKeyPress);
addButton.addEventListener("click", addNewItem);

function processKeyPress(event) {
    addButton.disabled = event.target.value.trim() === "";
    
    if (event.key === "Enter") {
        addNewItem();
    }
}

function createElementForTask(task){
    console.log(task);
}

function addNewItem() {
    const task = {
        value: taskInput.value,
        complete: false
    }

    items.push(task);

    let newItem = createElementForTask(task);
   // tasks.appendChild(newItem);

    taskInput.value = "";
    taskInput.focus();
}