// Select elements
let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

// Add task function
button.addEventListener("click", function () {

    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create li
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    // Delete functionality
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});