import { todoLists } from "./classes";
import {allProjControl} from "./allProjects";
import { todoCreate } from "./projectPage";

const taskControl = (() => {
    const makeTasksPage = (type) => {
        let filter = type;
        //insert the correct content in the ul
        if (type == 'all') {
            render.tasksPage('all-tasks', 'All Tasks');
            const ulTask = document.getElementById('todo-list-ul');
            for (let proj of todoLists.projects) {
                todoCreate.list(proj);          
                }
            ulTask.innerHTML == '' ? render.emptyList('') : null;
            } else if (type == 'important') {
                render.tasksPage('important', 'Important Tasks');
                const ulTask  = document.getElementById('todo-list-ul');
                for (let proj of todoLists.projects) {
                    todoCreate.list(proj, filter);
                }
                    ulTask.innerHTML == '' ? render.emptyList('important') : null;
            } else if (type == 'week') {
                render.tasksPage('week', 'Tasks Due This Week');
                const ulTask  = document.getElementById('todo-list-ul');
                for (let proj of todoLists.projects) {
                    todoCreate.list(proj, filter);
                }
                    ulTask.innerHTML == '' ? render.emptyList(' due this week') : null;
            } else if (type == 'today') {
                render.tasksPage('today', 'Tasks Due Today');
                const ulTask  = document.getElementById('todo-list-ul');
                for (let proj of todoLists.projects) {
                    todoCreate.list(proj, filter);
                }
                    ulTask.innerHTML == '' ? render.emptyList(' due today') : null;
            }
            else if (type == 'projects') {
                allProjControl.makePage();
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
        ul.id = 'todo-list-ul';
        return ul;
    }
    const emptyList = (string) => {
        const emptyText = document.createElement('p');
        emptyText.classList.add('empty');
        emptyText.classList.add('description');
        emptyText.innerText = string != 'important' ? 
            `There are no tasks${string}.`:
            `There are no ${string} tasks.`;
        return emptyText;
    }
    
    return {heading, ul, emptyList};
})()

const render = (() => {
    const contentDiv = document.getElementById('main-content');
    const tasksPage = (dataType, headingText) => {
        contentDiv.data = dataType
        contentDiv.innerHTML = ''
        contentDiv.appendChild(create.heading(headingText));
        contentDiv.appendChild(create.ul());
    }
    const emptyList = (string) => {
        const ulTask = document.getElementById('todo-list-ul');
        ulTask.appendChild(create.emptyList(string));
    }
    return {tasksPage, emptyList};
})()

export default taskControl;