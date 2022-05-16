import { todoLists } from "./classes";
import {allProjControl} from "./allProjects";
import { todoCreate } from "./projectPage";

const taskControl = (() => {
    const makeTasksPage = (type) => {
        let filter = type
        //insert the correct content in the ul
        if (type == 'all') {
            render.tasksPage('all-tasks', 'All Tasks');
            for (let proj of todoLists.projects) {
                todoCreate.list(proj)
                }
            } else if (type == 'important') {
                render.tasksPage('important', 'Important Tasks');
                for (let proj of todoLists.projects) {
                    todoCreate.list(proj, filter)
                    }
            } else if (type == 'week') {
                render.tasksPage('week', 'Tasks Due This Week');
                for (let proj of todoLists.projects) {
                    todoCreate.list(proj, filter)
                    }
            } else if (type == 'today') {
                render.tasksPage('today', 'Tasks Due Today');
                for (let proj of todoLists.projects) {
                    todoCreate.list(proj, filter)
                    }
            }
            else if (type == 'projects') {
                allProjControl.makePage()
            }
        }

    return {makeTasksPage};
})()


const create = (() => {
    const heading = (headingText) => { 
    const head = document.createElement('h2');
    head.innerText = headingText;
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
    const tasksPage = (dataType, headingText) => {
        contentDiv.data = dataType
        contentDiv.innerHTML = ''
        contentDiv.appendChild(create.heading(headingText));
        contentDiv.appendChild(create.ul());
    }
    return {tasksPage};
})()

export default taskControl;