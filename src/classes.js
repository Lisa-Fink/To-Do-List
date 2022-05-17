import { allProjRender } from "./allProjects";

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
    getIndex(project) {
        const index = this.projects.findIndex(x => x == project);
        return index;
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
    removeTodo(index) {
        this.todos = this.todos.slice(0,index).concat(this.todos.slice(index+1));
    }
}

class Todo {
    constructor(name, description, date, important) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.important = important;
    }
}
// add project for testing
let todo1 = new Todo('Cut down to 100 photos');
todo1.description = 'make sure to include the photo of Sean and Sarah';
let todo2 = new Todo('Edit all photos');
let todo3 = new Todo('Make photo album');
let todo4 = new Todo('Get album printed')

let proj1 = new Project('Birthday Party Photo Album');
proj1.addTodo(todo1);
proj1.addTodo(todo2);
proj1.addTodo(todo3);
proj1.addTodo(todo4);
todo1.date = '2022-06-21'
todo1.important = true
todo2.date = '2022-06-28'
todo3.date = '2022-07-07'
todo4.date = '2022-07-14'
const todoLists = new ToDoList;
todoLists.addProject(proj1);

export {ToDoList, Project, Todo, todoLists}