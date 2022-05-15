import { Todo } from "./classes";
import { sideRender } from "./side";
import {makeIcon} from "./allProjects";

let thisProject = null

const todoCreate = (() => {
    const heading = () => {
        const heading = document.createElement('h2')
        heading.innerText = thisProject.name
        return heading
    }
    const editHeading = () => {
        const heading = document.createElement('h3')
        heading.innerText = 'Edit Task'
        return heading
    }
    
    const todoList = () => {
        const ul = document.createElement('ul')
        ul.classList.add('task-ul')
        let i = 1 
        if (thisProject.todos) {
            for (let task of thisProject.todos) {
                let li = document.createElement('li');
                li.id = i;
                li.data = task;
                let topDiv = document.createElement('div');
                let nameDiv = document.createElement('div');
                nameDiv.innerText = task.name;
                let taskChangeDiv = changerDiv();
                taskChangeDiv.data = i
                topDiv.appendChild(nameDiv);
                topDiv.appendChild(taskChangeDiv);
                topDiv.classList.add('task-list');
                li.appendChild(topDiv);
                if (task.description) {
                    let description = document.createElement('div');
                    description.classList.add('description')
                    description.innerText = task.description;
                    li.appendChild(description)
                }
                i ++
                ul.appendChild(li);
            }
        }
        return ul
    }

    const changerDiv = () => {
        let changeDiv = document.createElement('div');
        let edit = makeIcon('edit')
        let remove = makeIcon('delete_forever')

        remove.addEventListener('click', projectControl.removeTodo)
        edit.addEventListener('click', projectControl.editTodo)

        changeDiv.appendChild(edit);
        changeDiv.appendChild(remove);
        return changeDiv;
    }
    
    const todoForm = () => {

        const todoForm = document.createElement('form');
        todoForm.id = 'to-do-form';
        todoForm.autocomplete = 'off';
    
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.classList.add('todo-input');
    
        const detailLabel = document.createElement('label');
        detailLabel.innerText = 'Details(optional): ';
        const detailInput = document.createElement('input');
        detailInput.classList.add('todo-input');
    
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Date: ';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('todo-input');

        todoForm.appendChild(titleLabel);
        todoForm.appendChild(titleInput);
        todoForm.appendChild(detailLabel);
        todoForm.appendChild(detailInput);
        todoForm.appendChild(dateLabel);
        todoForm.appendChild(dateInput);

        const addButton = makeIcon('check_circle')
        
        addButton.addEventListener('click', projectControl.makeNewTodo)

        const cancelButton = makeIcon('cancel')
        cancelButton.addEventListener('click', projectControl.cancelTodoForm)

        todoForm.appendChild(addButton)
        todoForm.appendChild(cancelButton)

        return todoForm
    }
    
    const addTodoBtn = () => {
        const addTodo = document.createElement('div')
        addTodo.innerText = 'Add Task '
        addTodo.appendChild(makeIcon('add_circle'))
        addTodo.addEventListener('click', projectRender.showTodoForm)
        return addTodo
    }

    const editForm = (selectedTodo) => {
        const todoForm = document.createElement('form');
        todoForm.data = selectedTodo
        todoForm.id = 'edit-to-do-form';
        todoForm.autocomplete = 'off';
    
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.classList.add('todo-input');
        titleInput.value = selectedTodo.name
    
        const detailLabel = document.createElement('label');
        detailLabel.innerText = 'Details(optional): ';
        const detailInput = document.createElement('input');
        detailInput.classList.add('todo-input');
        detailInput.value = selectedTodo.description ? 
            selectedTodo.description : ''
    
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Date: ';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('todo-input');
        dateInput.value = selectedTodo.date

        todoForm.appendChild(editHeading())
        todoForm.appendChild(titleLabel);
        todoForm.appendChild(titleInput);
        todoForm.appendChild(detailLabel);
        todoForm.appendChild(detailInput);
        todoForm.appendChild(dateLabel);
        todoForm.appendChild(dateInput);

        const addButton = makeIcon('check_circle')
        addButton.addEventListener('click', projectControl.makeTodoEdit)

        const cancelButton = makeIcon('cancel')
        cancelButton.addEventListener('click', projectControl.cancelEditTodoForm)

        todoForm.appendChild(addButton)
        todoForm.appendChild(cancelButton)

        return todoForm
    }
    return {addTodoBtn, todoForm, todoList, heading, editForm}
})()



const projectRender = (() => {
    const contentDiv = document.getElementById('main-content')

    const projectPage = () => {
        contentDiv.innerHTML = ''
        contentDiv.appendChild(todoCreate.heading())
        contentDiv.appendChild(todoCreate.todoList())
        contentDiv.appendChild(todoCreate.todoForm())
        contentDiv.appendChild(todoCreate.addTodoBtn())
    }

    const showTodoForm = () => {
        const todoForm = document.getElementById('to-do-form')
        todoForm.style.display != 'block' ? 
            todoForm.style.display = 'block': null
    }
    const hideTodoForm = () => {
        const todoForm = document.getElementById('to-do-form')
        todoForm.style.display == 'block' ? 
            (todoForm.style.display = 'none', clearTodoForm): null
    }

    const update = () => {
        projectPage(thisProject)
    }

    const clearTodoForm = () => {
        const inputs = document.querySelectorAll('.todo-input')
        inputs.forEach(input => input.value = '')
    }
    const changeLiToForm = (selectedTodo, selectedLi) => {
        selectedLi.innerHTML = ''
        selectedLi.appendChild(todoCreate.editForm(selectedTodo))
    }
    return {projectPage, showTodoForm, hideTodoForm, update, clearTodoForm,
        changeLiToForm}
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
        projectRender.showTodoForm()
        projectRender.update()
    }

    const getTodoInfo = (e) => {
        e.preventDefault()
        const name = e.target.parentElement[0].value
        const details = e.target.parentElement[1].value
        const date = e.target.parentElement[2].value
        return [name, details, date]
    }
    const createTodo = (name, description, date) => {
        let newTodo = new Todo(name, description , date);
        return newTodo  
    }
    const removeTodo = (e) => {
        let index = e.target.parentElement.data - 1
        thisProject.removeTodo(index)
        projectRender.update()
    }
    const cancelTodoForm = (e) => {
        e.preventDefault()
        projectRender.hideTodoForm()
        projectRender.clearTodoForm()
    }
    const editTodo = (e) => {
        let selLi = findSelectedLi(e)
        let selectedTodo = selLi.data
        projectRender.changeLiToForm(selectedTodo, selLi)
    }
    const findSelectedLi = (e) => {
        let id = e.target.parentElement.data
        let selectedLi = document.getElementById(id)
        return selectedLi
    }
    const cancelEditTodoForm = (e) => {
        e.preventDefault()
        projectRender.projectPage()
    }
    const makeTodoEdit = (e) => {
        e.preventDefault()
        const selectedTodo = e.target.parentElement.data
        let values = getTodoInfo(e)
        selectedTodo.name = values[0]
        selectedTodo.description = values[1]
        selectedTodo.date = values[2]
        projectRender.projectPage()
    }
    
    return {makeNewTodo, setProject, makePage, cancelTodoForm, editTodo, 
            cancelEditTodoForm, makeTodoEdit, removeTodo};

})()

export default projectControl