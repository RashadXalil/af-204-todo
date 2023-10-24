const newTodoInp = document.getElementById("newTodo")
const addTodoBtn = document.getElementById("addTodo")
const todoList = document.getElementById("todo__list")
const clearComplatedBtn = document.getElementById("clearComplated")
let id = 0
let todos = []
class Todo {
    constructor(content) {
        this.id = id,
            this.content = content,
            this.isComplated = false,
            id++

    }
}
function addTodo(content) {
    let newTodo = new Todo(content)
    todos.push(newTodo)
}
function deleteTodo(id) {
    let target = todos.find(todo => todo.id == id)
    let indexofTarget = todos.indexOf(target)
    todos.splice(indexofTarget, 1)
    renderUI(todos)
}
function complateTodo(id) {
    let target = todos.find(todo => todo.id == id)
    target.isComplated = !target.isComplated
    renderUI(todos)
}
addTodoBtn.addEventListener("click", () => {
    let content = newTodoInp.value
    addTodo(content)
    newTodoInp.value = ""
    renderUI(todos)
})
clearComplatedBtn.addEventListener("click", () => {
    let filteredTodos = todos.filter(todo => todo.isComplated == false)
    renderUI(filteredTodos)
})
function renderUI(array) {
    let innerText = ""
    for (let i = 0; i < array.length; i++) {
        innerText += `<li onclick="complateTodo(${array[i].id})"><span class="${array[i].isComplated ? "complated" : ""}">${array[i].content}</span><button onclick="deleteTodo(${array[i].id})">delete</button></li>`
    }
    todoList.innerHTML = innerText
}