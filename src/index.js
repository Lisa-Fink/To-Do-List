import './style.css';
import {sideRender, sideControl, sideFunc} from './side';
import {ToDoList, Project, Todo, todoLists} from './classes';
import projectControl from './projectPage';
import taskControl from './sideHome';


const makeIcon = (name) => {
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.innerText = name;
    return span;
}

const contentController = (() => {
    const goToProjectPage = (project) => {
        projectControl.makePage(project);
    }
    const goToTasks = (taskType) => {
        taskControl.makeTasksPage(taskType);
    } 
    return {goToProjectPage, goToTasks};
})();

export {contentController, makeIcon};
