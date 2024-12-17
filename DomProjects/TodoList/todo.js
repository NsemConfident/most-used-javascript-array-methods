const input = document.getElementById("input_task");
const addBtn = document.getElementById("add_task");
const taskContainer = document.getElementById("task_container");

addBtn.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${input.value}`;
  task.appendChild(li);
  //   create check button
  let checkBtn = document.createElement("button");
  checkBtn.innerText = "✔";
  checkBtn.classList.add("check_task");
  task.appendChild(checkBtn);
  //   create deleteBtn
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.classList.add("cancel_task");
  task.appendChild(deleteBtn);

  //handle adding of input

  if (input.value === "") {
    alert("Please Enter a task");
  } else {
    taskContainer.appendChild(task);
  }
  input.value = "";

  checkBtn.addEventListener("click", function () {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });
  deleteBtn.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.remove();
  });
});
