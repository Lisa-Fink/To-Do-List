import { todoLists } from "./classes";
import {allProjControl} from "./allProjects";
import { todoCreate } from "./projectPage";

const taskControl = (() => {
    const makeTasksPage = (type) => {
        render.tasksPage();
        //insert the correct content in the ul
        if (type == 'all') {
            for (let proj of todoLists.projects) {
                todoCreate.list(proj)
                }
            } else if (type == 'projects') {
                allProjControl.makePage()
            }
        }

    return {makeTasksPage};
})()


const create = (() => {
    const heading = () => { 
    const head = document.createElement('h2');
    head.innerText = 'All Tasks';
    return head;
    }
    const ul = () => {
        const ul = document.createElement('ul');
        ul.classList.add('task-ul');
        ul.id = 'to-do-list-ul';
        return ul;
    }
    
    return {heading, ul};
})()

const render = (() => {
    const contentDiv = document.getElementById('main-content');
    const tasksPage = (tasks) => {
        contentDiv.data = 'all-tasks'
        contentDiv.innerHTML = ''
        contentDiv.appendChild(create.heading());
        contentDiv.appendChild(create.ul());
    }
    return {tasksPage};
})()

export default taskControl;