const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deliteButton = document.createElement("button");
  deliteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deliteButton.classList.add("deleteTask");
  task.appendChild(deliteButton);

  if (inputTask.value === "") {
    alert("Enter a task, dude!");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deliteButton.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
