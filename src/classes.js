class ToDoList {
    constructor() {
        this.projects = [];
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
    findIndex(project) {
        const index = this.projects.findIndex(project);
        return index
    }
    removeProject(index) {
        this.projects = this.projects.slice(0,index).concat(this.projects.slice(index+1));
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
        for (object of this.todos) {
            if (object.name == name) {
                return object;
            }
        }
    }
    findIndex(todo) {
        const index = this.todos.findIndex(todo);
        return index
    }
    removeTodo(todo) {
        const index = this.todos.findIndex(todo);
        this.todos = this.todos.slice(0,index).concat(this.todos.slice(index+1));
    }
}

class Todo {
    constructor(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date
    }
}


export {ToDoList, Project, Todo}