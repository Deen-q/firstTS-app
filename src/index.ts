import { v4 as uuidV4 } from "uuid";
console.log(uuidV4()); // Works ✅

type Task = {
  id: string;
  title: string;
};

// 1) make a reference to HTML elements
const inputTaskTitle = document.querySelector(
  "#newTaskTitle"
) as HTMLInputElement;
const form = document.getElementById("newTaskForm") as HTMLFormElement;
const list = document.querySelector("#list") as HTMLUListElement;

// const storedTasks: Task[] = []

// 2) function to add tasks to list
function addListItem(task: Task) {
  const label = document.createElement("label"); // label: a 'description'
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  label.append(deleteBtn, task.title); // adding task name + x button to newly created label, above
  // task.title refers to the title of the object type, Task.
  li.append(label);
  list?.append(li);

  deleteBtn.addEventListener("click", () => {
    li.remove(); //remove task
  });
  //no return -> TS returns void (nothing)
}

// 3) refer to the form, in which holds the typed input ('taskName')
form?.addEventListener("submit", (e) => {
  // 'submit' is built in, for forms
  e.preventDefault(); // in case page is refreshed

  if (inputTaskTitle?.value == "" || inputTaskTitle?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: inputTaskTitle.value,
  };

  addListItem(newTask);

  inputTaskTitle.value = ''; // clear input on 'Add' click
});
