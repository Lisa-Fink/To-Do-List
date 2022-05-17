import { allProjRender } from "./allProjects";

class ToDoList {
    constructor() {
        this.projects = projects;
    }
    addProject(project) {
        this.projects.push(project);
    }
    findProject(name) {
        let arr = this.projects
        for (let obj of arr) {
            if (obj.name == name) {
                return obj;
            }
        }
    }
    getIndex(project) {
        const index = this.projects.findIndex(x => x == project);
        return index;
    }
    removeProject(index) {
        this.projects = this.projects.slice(0,index).concat(this.projects.slice(index+1));
    }
    updateStorage() {
        localStorage.setItem('todoLists', JSON.stringify(this));
        const getTodoLists = localStorage.getItem('todoLists');
        const parsedTodoLists = JSON.parse(getTodoLists)
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    findTodo(name) {
        for (let object of this.todos) {
            if (object.name == name) {
                return object;
            }
        }
    }
    removeTodo(index) {
        this.todos = this.todos.slice(0,index).concat(this.todos.slice(index+1));
    }
}

class Todo {
    constructor(name, description, date, important, complete=false) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.important = important;
        this.complete = complete;
    }
}

let todoLists = new ToDoList;

const populateStorage = () => {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

const setTodoLists = () => {
    const getTodoLists = localStorage.getItem('todoLists');
    const parsedTodoLists = JSON.parse(getTodoLists)
    const proj = [...parsedTodoLists.projects]
    
    if (proj) {
        proj.forEach(project => {
            let newProj = new Project(project.name);
            if (project.todos) {
                project.todos.forEach(todo => {
                    let newTodo = new Todo(todo.name, todo.description, 
                        todo.date, todo.important, todo.complete);
                    newProj.addTodo(newTodo)
                })
            }
            todoLists.addProject(newProj);
        })
    }     
}

if (!localStorage.getItem('todoLists')) {
    populateStorage()
} else {
    setTodoLists();
}

export {ToDoList, Project, Todo, todoLists};