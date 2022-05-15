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
        for (let object of this.todos) {
            if (object.name == name) {
                return object;
            }
        }
    }
    findIndex(todo) {
        const index = this.todos.findIndex(todo);
        return index;
    }
    removeTodo(index) {
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
// add project for testing
let todo1 = new Todo('todo1')
todo1.description = 'this is a description'
let todo2 = new Todo('todo2')
let todo3 = new Todo('todo3')

let proj1 = new Project('Default Project')
proj1.addTodo(todo1)
proj1.addTodo(todo2)
proj1.addTodo(todo3)
const todoLists = new ToDoList;
todoLists.addProject(proj1)

export {ToDoList, Project, Todo, todoLists}