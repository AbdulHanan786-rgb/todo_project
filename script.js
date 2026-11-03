const todoInput = document.querySelector("input");

const addButton = document.querySelector(".bg-blue-500");

const todoContainer = document.querySelector(".bg-gray-200.min-h-32");

const mainBox = document.querySelector(".bg-\\[\\#F5F5F5\\]");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTodos() {
  todoContainer.innerHTML = "";

  let heading = document.createElement("h1");

  heading.className = "font-semibold text-2xl px-2 mb-4";

  heading.innerText = "My Todos (" + todos.length + ")";

  todoContainer.appendChild(heading);

  todos.forEach(function (todo, index) {
    let div = document.createElement("div");

    div.className = "flex items-center gap-3 mb-3";

    let todoText = document.createElement("h1");

    todoText.className =
      "bg-white flex-1 min-h-12 px-4 py-3 rounded-lg border border-gray-300 text-gray-700";

    todoText.innerText = todo;

    let deleteButton = document.createElement("button");

    deleteButton.className =
      "bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600";

    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteTodo(index);
    });

    div.appendChild(todoText);

    div.appendChild(deleteButton);

    todoContainer.appendChild(div);
  });

  mainBox.style.height = "auto";

  mainBox.style.paddingBottom = "40px";
}

function addTodo() {
  let todo = todoInput.value.trim();

  if (todo === "") {
    alert("Please Enter Your Todo!");

    return;
  }

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));

  todoInput.value = "";

  showTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todos));

  showTodos();
}

addButton.addEventListener("click", function () {
  addTodo();
});

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

showTodos();
