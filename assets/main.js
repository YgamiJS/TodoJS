import{v4 as uuid}from"uuid";import"@/scss/style.scss";const todoForm=document.querySelector(".Todo__form"),todoTodos=document.querySelector(".Todo__todos"),input=document.querySelector(".Todo__form__input");let todos=[];function List(o){todoTodos.innerHTML="",o.forEach((o=>{const t=document.createElement("li");t.classList.add("todos__todo"),t.innerHTML=`\n        <span>${o.task}</span>\n        <label for=${o.id}> </label>\n          <input type="checkbox" ${o.complited&&"checked"} class="complited" id=${o.id} />\n        <button class="delete" data-id="${o.id}">x</button>\n      `,todoTodos.appendChild(t),t.querySelector(".delete").addEventListener("click",(o=>{deleteTodo(o.target.dataset.id)})),t.querySelector(".complited").addEventListener("click",(o=>{toggleComplitedTodo(o.target.id)}))}))}function deleteTodo(o){todos=todos.filter((t=>t.id!==o)),updateTodos()}function toggleComplitedTodo(o){todos=todos.map((t=>t.id===o?{...t,complited:!t.complited}:t)),updateTodos()}function AddTodo(){input.value.trim()&&(todos.unshift({id:uuid(),task:input.value,complited:!1}),input.value="",updateTodos())}function updateTodos(){List(todos)}todoForm.addEventListener("submit",(o=>{o.preventDefault(),AddTodo()})),updateTodos();