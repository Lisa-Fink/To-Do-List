import { Todo } from "./classes";
import { sideRender } from "./side";

let thisProject = null

const create = (() => {
    const heading = () => {
        const heading = document.createElement('h2')
        heading.innerText = thisProject.name
        return heading
    }
    
    const todoList = () => {
        const ul = document.createElement('ul')
        
        if (thisProject.todos) {
            for (let todo of thisProject.todos) {
                let li = document.createElement('li')
                li.innerText = todo.name
                ul.appendChild(li)
            }
        }
        return ul
    }
    
    const todoForm = () => {
        const todoForm = document.createElement('form')
        todoForm.id = 'to-do-form'
        todoForm.autocomplete = 'off'
    
        const titleLabel = document.createElement('label')
        titleLabel.innerText = 'Title: '
        const titleInput = document.createElement('input')
        titleInput.classList.add('todo-input')
    
        const detailLabel = document.createElement('label')
        detailLabel.innerText = 'Details(optional): '
        const detailInput = document.createElement('input')
        detailInput.classList.add('todo-input')
    
        const dateLabel = document.createElement('label')
        dateLabel.innerText = 'Date: '
        const dateInput = document.createElement('input')
        dateInput.type = 'date'
        dateInput.classList.add('todo-input')

        todoForm.appendChild(titleLabel)
        todoForm.appendChild(titleInput)
        todoForm.appendChild(detailLabel)
        todoForm.appendChild(detailInput)
        todoForm.appendChild(dateLabel)
        todoForm.appendChild(dateInput)

        const addButton = document.createElement('button')
        addButton.innerText = ' Add Task '
        addButton.addEventListener('click', projectControl.makeNewTodo)

        const cancelButton = document.createElement('button')
        cancelButton.innerText = ' Cancel '
        cancelButton.addEventListener('click', projectControl.cancelTodoForm)

        todoForm.appendChild(addButton)
        todoForm.appendChild(cancelButton)
        return todoForm
    }
    
    const addTodoBtn = () => {
        const addTodo = document.createElement('div')
        addTodo.innerText = 'Add Task +'
        addTodo.addEventListener('click', projectRender.toggleTodoForm)
        return addTodo
    }
    return {addTodoBtn, todoForm, todoList, heading}
})()



const projectRender = (() => {
    const contentDiv = document.getElementById('main-content')

    const projectPage = () => {
        contentDiv.innerHTML = ''
        contentDiv.appendChild(create.heading())
        contentDiv.appendChild(create.todoList())
        contentDiv.appendChild(create.todoForm())
        contentDiv.appendChild(create.addTodoBtn())
    }

    const toggleTodoForm = () => {
        const todoForm = document.getElementById('to-do-form')
        todoForm.style.display == 'block' ? 
            (todoForm.style.display = 'none', clearTodoForm):
            todoForm.style.display = 'block'
     
    }

    const update = () => {
        projectPage(thisProject)
    }

    const clearTodoForm = () => {
        const inputs = document.querySelectorAll('.todo-input')
        inputs.forEach(input => input.value = '')
    }
    return {projectPage, toggleTodoForm, update, clearTodoForm}
})()

const projectControl = (() => {
    const makePage = (project) => {
        setProject(project)
        projectRender.projectPage()
    }

    const setProject = (project) => {
        thisProject = project
    }

    const makeNewTodo = (e) => {
        e.preventDefault()
        let todoInfo = getTodoInfo(e)
        let newTodo = createTodo(todoInfo[0], todoInfo[1], todoInfo[2]);
        thisProject.addTodo(newTodo)
        projectRender.toggleTodoForm()
        projectRender.update()
    }

    const getTodoInfo = (e) => {
        const name = e.target.form[0].value
        const details = e.target.form[1].value
        const date = e.target.form[2].value
        return [name, details, date]
    }
    const createTodo = (name, description, date) => {
        let newTodo = new Todo(name, description , date);
        return newTodo  
    }
    const removeTodo = (todo) => {
        let index = thisProject.findIndex(todo)
        thisProject.removeTodo(index)
        projectRender.update()
    }
    const cancelTodoForm = (e) => {
        e.preventDefault()
        projectRender.toggleTodoForm()
        projectRender.clearTodoForm()
    }
    return {makeNewTodo, setProject, makePage, cancelTodoForm};

})()

export default projectControl