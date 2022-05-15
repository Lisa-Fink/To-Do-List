import './style.css';
import {sideRender, sideControl, sideFunc} from './side';
import {ToDoList, Project, Todo} from './classes';
import projectControl from './projectPage';
import taskControl from './tasksPage';

const todoLists = new ToDoList;



const contentController = (() => {
    const goToProjectPage = (project) => {
        projectControl.makePage(project);
    }
    const goToTasks = (taskType) => {
        taskControl.makeTasksPage(taskType);
    } 
    return {goToProjectPage, goToTasks};
})();

// add project for testing
let todo1 = new Todo('todo1')
todo1.description = 'this is a description'
let todo2 = new Todo('todo2')
let todo3 = new Todo('todo3')

let proj1 = new Project(1)
proj1.addTodo(todo1)
proj1.addTodo(todo2)
proj1.addTodo(todo3)

todoLists.addProject(proj1)



export {contentController, todoLists};
