import { Todo } from "./classes";

let thisProject = null

const todoCreate = (() => {
    const heading = () => {
        const heading = document.createElement('h2')
        heading.innerText = thisProject.name
        return heading
    }
    
    const todoList = () => {
        const ul = document.createElement('ul')
        
        if (thisProject.todos) {
            for (let task of thisProject.todos) {
                let i = 1 
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
        let remove = document.createElement('span');
        remove.innerText = 'remove';
        let edit = document.createElement('span');
        edit.innerText = 'edit';

        remove.addEventListener('click', projectControl.removeTodo)
        edit.addEventListener('click', projectControl.editTodo)


        changeDiv.appendChild(remove);
        changeDiv.appendChild(edit);
        return changeDiv;
    }
    
    const todoForm = (titleVal='', detailVal='', dateVal='') => {
        const todoForm = document.createElement('form');
        todoForm.id = 'to-do-form';
        todoForm.autocomplete = 'off';
    
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.classList.add('todo-input');
        titleInput.value = titleVal;
    
        const detailLabel = document.createElement('label');
        detailLabel.innerText = 'Details(optional): ';
        const detailInput = document.createElement('input');
        detailInput.classList.add('todo-input');
        detailInput.value = detailVal;
    
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Date: ';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('todo-input');
        dateInput.value = dateVal

        todoForm.appendChild(titleLabel);
        todoForm.appendChild(titleInput);
        todoForm.appendChild(detailLabel);
        todoForm.appendChild(detailInput);
        todoForm.appendChild(dateLabel);
        todoForm.appendChild(dateInput);

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
        addTodo.addEventListener('click', projectRender.showTodoForm)
        return addTodo
    }
    return {addTodoBtn, todoForm, todoList, heading}
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
    return {projectPage, showTodoForm, hideTodoForm, update, clearTodoForm}
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
        projectRender.hideTodoForm()
        projectRender.clearTodoForm()
    }
    const editTodo = (e) => {
        let li = findSelectedLi(e)
        let selectedTodo = li.data
        let values = getTaskValues(selectedTodo)
        console.log(values)
        changeLiToForm(values, li)
    }
    const findSelectedLi = (e) => {
        let id = e.target.parentElement.data
        let selectedLi = document.getElementById(id)
        return selectedLi
    }
    const getTaskValues = (todo) => {
        let name = todo.name;
        let description = todo.description;
        let date = todo.date;
        return [name, description, date]
    }
    const changeLiToForm = (values, li) => {
        li.innerHTML = ''
        li.appendChild(todoCreate.todoForm(values[0], values[1])) 
    }
    
    return {makeNewTodo, setProject, makePage, cancelTodoForm, editTodo};

})()

export default projectControl