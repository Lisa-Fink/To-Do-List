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



export {contentController, todoLists};
