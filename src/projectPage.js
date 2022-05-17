import { Todo } from "./classes";
import { sideRender } from "./sideProjects";
import { makeIcon } from "./allProjects";
import taskControl from "./sideHome";
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

let thisProject = null;

const todoCreate = (() => {
    const heading = () => {
        const heading = document.createElement('h2');
        heading.innerText = thisProject.name;
        return heading;
    }

    const filters = (project, filter) => {
        let filteredTodos = project.todos;
        if (filter) {
            if (filter == 'important') {
                filteredTodos = project.todos.filter(todo => todo.important);
            } else if (filter == 'today') {
                let today = new Date();
                const dd = String(today.getDate()).padStart(2, '0');
                const mm = String(today.getMonth() + 1).padStart(2, '0');
                const yyyy = today.getFullYear();
                const formatToday = yyyy + '-' + mm + '-' + dd;
                filteredTodos = project.todos.filter(todo => todo.date == formatToday);
                } else {
                    filteredTodos = project.todos.
                        filter(todo => {
                           return  (todo.date && 
                            formatDistanceToNowStrict(parseISO(todo.date)).split(' ')[0] <= 7) ?
                                todo : null;
                        });
                }
            }
        return filteredTodos;
    }
    const list = (project, filter=null) => {
        const ul = document.getElementById('todo-list-ul');
        if (project.todos) {
            let i = 1;
            let filteredTodos = filters(project, filter);
            for (let task of filteredTodos) {
                let li = document.createElement('li');
                li.id = i;
                li.data = task;
                let topDiv = document.createElement('div');

                let nameDiv = document.createElement('div');
                nameDiv.innerText = task.name;

                let dateDiv = document.createElement('div');
                if (task.date) {
                    dateDiv.innerText = `Due: ${task.date}`;
                } else {
                    dateDiv.innerText = 'No Due Date';
                }

                let taskChangeDiv = changerDiv(project, task);
                taskChangeDiv.data = i;

                const leftContainer = document.createElement('div');
                const rightContainer = document.createElement('div');
                rightContainer.className = 'task-container'
                leftContainer.className = 'task-container'

                leftContainer.appendChild(checkBox(task));
                leftContainer.appendChild(nameDiv);
                rightContainer.appendChild(dateDiv);
                rightContainer.appendChild(taskChangeDiv);
                topDiv.classList.add('task-list');
                topDiv.appendChild(leftContainer);
                topDiv.appendChild(rightContainer);
                li.appendChild(topDiv);
                let description = document.createElement('div');
                if (task.description) {
                    description = document.createElement('div');
                    description.classList.add('description');
                    description.innerText = task.description;
                    li.appendChild(description);
                }
                task.complete ? 
                    (nameDiv.className = 'complete',
                        description.classList.add('complete')) :
                    (nameDiv.className = '',
                        description.className = 'description');
                i ++;
                ul.appendChild(li);
            }
        }
    }
    const todoList = () => {
        const ul = document.createElement('ul');
        ul.classList.add('task-ul');
        ul.id = 'to-do-list-ul';
        return ul
    }
    
    const checkBox = (task) => {
        const checkBox = task.complete ? makeIcon('check_box') :
            makeIcon('check_box_outline_blank');
        checkBox.addEventListener('click', projectControl.changeStatus);
        checkBox.data = task;
        return checkBox;
    }
    const starIcon = (task) => {
        let star = null;
        if (task && task.important) {
            star = makeIcon('star');
            star.classList.add('important');
        } else {
            star = makeIcon('grade');
        }
        star.data = task;
        return star;
    }

    const changerDiv = (project, task) => {
        let changeDiv = document.createElement('div');
       
        let edit = makeIcon('edit');
        let remove = makeIcon('delete_forever');
        remove.data = project;
        let star = starIcon(task);
        

        star.addEventListener('click', projectControl.starClick);
        remove.addEventListener('click', projectControl.removeTodo);
        edit.addEventListener('click', projectControl.editTodo);

        changeDiv.appendChild(star);
        changeDiv.appendChild(edit);
        changeDiv.appendChild(remove);
        return changeDiv;
    }
    
    const todoForm = (editing=false, selectedTodo=null) => {
        const formHeading = document.createElement('h3');
        

        const todoForm = document.createElement('form');
        todoForm.autocomplete = 'off';
        todoForm.id = 'todo-form';
    
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.classList.add('todo-input');
    
        const detailLabel = document.createElement('label');
        detailLabel.innerText = 'Details: ';
        const detailInput = document.createElement('textarea');
        detailInput.classList.add('todo-input');
    
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Date: ';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('todo-input');

        const starLabel = document.createElement('label');
        starLabel.appendChild(starIcon(selectedTodo));
        const starInput = document.createElement('input');
        starInput.type = 'hidden'
        starLabel.id = 'star-form'
        starLabel.addEventListener('click', projectControl.starForm);

        const addButton = makeIcon('check_circle');
        const cancelButton = makeIcon('cancel');
        
        if (editing) {
            formHeading.innerText = 'Edit a Task'
            todoForm.data = selectedTodo;
            todoForm.id = 'edit-todo-form';
            titleInput.value = selectedTodo.name;
            detailInput.value = selectedTodo.description ? 
                selectedTodo.description : '';
            dateInput.value = selectedTodo.date;
            addButton.addEventListener('click', projectControl.makeTodoEdit);
            cancelButton.addEventListener('click', projectControl.cancelEditTodoForm);
        } else {
            formHeading.innerText = 'Add a Task'
            addButton.addEventListener('click', projectControl.makeNewTodo);
            cancelButton.addEventListener('click', projectControl.cancelTodoForm);
        }
        const inputContainer = document.createElement('div')
        const buttonContainer = document.createElement('div')
        buttonContainer.id = 'button-form'
        inputContainer.id = 'input-container'

        todoForm.appendChild(formHeading);
        inputContainer.appendChild(titleLabel);
        inputContainer.appendChild(titleInput);
        inputContainer.appendChild(dateLabel);
        inputContainer.appendChild(dateInput);
        inputContainer.appendChild(detailLabel);
        inputContainer.appendChild(detailInput);
        inputContainer.appendChild(starLabel);
        inputContainer.appendChild(starInput);

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);
        inputContainer.appendChild(buttonContainer);
        todoForm.appendChild(inputContainer);

        return todoForm;
    }
    
    const addTodoBtn = () => {
        const addTodo = document.createElement('div');
        addTodo.innerText = 'Add Task ';
        addTodo.appendChild(makeIcon('add_circle'));
        addTodo.addEventListener('click', projectRender.showTodoForm);
        addTodo.id = 'add-task'
        return addTodo;
    }

    return {addTodoBtn, todoForm, todoList, heading, list};
})()



const projectRender = (() => {
    const contentDiv = document.getElementById('main-content');
    
    const projectPage = () => {
        contentDiv.innerHTML = '';
        contentDiv.data = 'project-page';
        contentDiv.appendChild(todoCreate.heading());
        contentDiv.appendChild(todoCreate.todoForm());
        contentDiv.appendChild(todoCreate.addTodoBtn());
        contentDiv.appendChild(todoCreate.todoList());
        todoCreate.list(thisProject);

    }

    const showTodoForm = () => {
        const addTaskDiv = document.getElementById('add-task');
        addTaskDiv.style.display = 'none'
        const todoForm = document.getElementById('todo-form');
        todoForm.style.display != 'block' ? 
            todoForm.style.display = 'block': null;
    }
    const hideTodoForm = () => {
        const addTaskDiv = document.getElementById('add-task');
        addTaskDiv.style.display = 'block'
        const todoForm = document.getElementById('todo-form');
        todoForm.style.display == 'block' ? 
            (todoForm.style.display = 'none', clearTodoForm): null;
    }

    const update = () => {
        const addTaskDiv = document.getElementById('add-task');
        addTaskDiv && addTaskDiv.style.display != 'block' ? addTaskDiv.style.display == 'block' : null;
        contentDiv.data == 'project-page' ? projectPage(thisProject) :
            contentDiv.data == 'all-tasks' ? taskControl.makeTasksPage('all') :
            contentDiv.data == 'important' ? taskControl.makeTasksPage('important') :
            contentDiv.data == 'today' ? taskControl.makeTasksPage('today') :
            contentDiv.data == 'week' ? taskControl.makeTasksPage('week') : null; 
        }

    const clearTodoForm = () => {
        const inputs = document.querySelectorAll('.todo-input');
        inputs.forEach(input => input.value = '')
    };
    const changeLiToForm = (selectedTodo, selectedLi) => {
        selectedLi.innerHTML = ''
        selectedLi.appendChild(todoCreate.todoForm(true, selectedTodo));
    }
    return {projectPage, showTodoForm, hideTodoForm, update, clearTodoForm,
        changeLiToForm};
})()

const projectControl = (() => {
    const makePage = (project) => {
        setProject(project);
        projectRender.projectPage();
    }

    const setProject = (project) => {
        thisProject = project;
    }

    const makeNewTodo = (e) => {
        e.preventDefault();
        let todoInfo = getTodoInfo(e);
        let newTodo = createTodo(todoInfo[0], todoInfo[1], todoInfo[2], todoInfo[3]);
        thisProject.addTodo(newTodo);
        projectRender.showTodoForm();
        projectRender.update();
    }

    const getTodoInfo = (e) => {
        e.preventDefault();
        const values = [...e.target.parentElement.parentElement.parentElement]
        const name = values[0].value == '' ? 'unnamed task' : values[0].value
        const details = values[2].value;
        const date = values[1].value;
        const important = (values[3].previousSibling.
                childNodes[0].classList.contains('important')) ? true : false;
        return [name, details, date, important];
    }
    const createTodo = (name, description, date, important) => {
        name == '' ? name = 'unnamed task' : null;
        let newTodo = new Todo(name, description, date, important);
        return newTodo;
    }
    const removeTodo = (e) => {
        let index = e.target.parentElement.data - 1;
        const project = e.target.data;
        project.removeTodo(index);
        projectRender.update();
    }
    const cancelTodoForm = (e) => {
        e.preventDefault();
        projectRender.hideTodoForm();
        projectRender.clearTodoForm();
    }
    const editTodo = (e) => {
        let selLi = findSelectedLi(e);
        let selectedTodo = selLi.data;
        projectRender.changeLiToForm(selectedTodo, selLi);
    }
    const findSelectedLi = (e) => {
        let id = e.target.parentElement.data;
        let selectedLi = document.getElementById(id);
        return selectedLi;
    }
    const cancelEditTodoForm = (e) => {
        e.preventDefault();
        projectRender.update();
    }
    const makeTodoEdit = (e) => {
        e.preventDefault();
        const selectedTodo = e.target.parentElement.parentElement.parentElement.data;
        let values = getTodoInfo(e);
        selectedTodo.name = values[0];
        selectedTodo.description = values[1];
        selectedTodo.date = values[2];
        selectedTodo.important = values[3];
        projectRender.update();
    }
    const starClick = (e) => {
        const todo = e.target.data;
        todo.important ? 
            (e.target.classList.remove('important'),
                e.target.innerText = 'grade',
                todo.important = false) :
            (e.target.classList.add('important'),
                e.target.innerText = 'star',
                todo.important = true);
        projectRender.update();
    }
    const changeStatus = (e) => {
        const todo = e.target.data;
        todo.complete ? todo.complete = false: todo.complete = true;
        projectRender.update();
    }
    const starForm = (e) => {
        (e.target.classList.contains('important')) ?
            (e.target.classList.remove('important'),
            e.target.innerText = 'grade') :
            (e.target.classList.add('important'),
            e.target.innerText = 'star')
    }
    
    return {makeNewTodo, setProject, makePage, cancelTodoForm, editTodo, 
            cancelEditTodoForm, makeTodoEdit, removeTodo, starClick, changeStatus, starForm};

})()

export {projectControl, todoCreate};