import { v4 as uuid } from "uuid";
import "@/scss/style.scss";

const todoForm = document.querySelector(".Todo__form");
const todoTodos = document.querySelector(".Todo__todos");
const input = document.querySelector(".Todo__form__input");

let todos = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  AddTodo();
});

function List(todos) {
  todoTodos.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todos__todo");
    li.innerHTML = `
        <span>${todo.task}</span>
        <label for=${todo.id}> </label>
          <input type="checkbox" ${
            todo.complited && "checked"
          } class="complited" id=${todo.id} />
        <button class="delete" data-id="${todo.id}">x</button>
      `;

    todoTodos.appendChild(li);

    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", (e) => {
      deleteTodo(e.target.dataset.id);
    });

    const toggleComplited = li.querySelector(".complited");
    toggleComplited.addEventListener("click", (e) => {
      toggleComplitedTodo(e.target.id);
    });
  });
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  updateTodos();
}

function toggleComplitedTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, complited: !todo.complited } : todo
  );
  updateTodos();
}

function AddTodo() {
  if (input.value.trim()) {
    todos.unshift({ id: uuid(), task: input.value, complited: false });
    input.value = "";
    updateTodos();
  }
}

function updateTodos() {
  List(todos);
}

updateTodos();
