import { todoLists } from "./classes";
import {allProjControl} from "./allProjects";

const taskControl = (() => {
    const makeTasksPage = (taskViewType) => {
        const taskArray = getTasks(taskViewType);
        taskViewType != 'projects' ? render.tasksPage(taskArray): null;
    }
    
    
    const getTasks = (type) => {
        const taskArr = []
        if (type == 'all') {
            for (let proj of todoLists.projects) {
                for (let task of proj.todos) {
                    taskArr.push(task);
                }
            }
            return taskArr;
        } else if (type == 'projects') {
            allProjControl.makePage()
        }
    }
    

    return {makeTasksPage, getTasks};
})()


const create = (() => {
    const heading = () => { 
    const head = document.createElement('h2');
    head.innerText = 'All Tasks';
    return head;
    }
    const taskList = (tasks) => {
        const ul = document.createElement('ul');
        ul.classList.add('task-ul')
        
        if (tasks) {
            for (let task of tasks) {
                let li = document.createElement('li')
                li.innerText = task.name
                if (task.description) {
                    let description = document.createElement('div');
                    description.classList.add('description')
                    description.innerText = task.description;
                    li.appendChild(description)
                }
                ul.appendChild(li);      
            }
        }
        return ul;
    }
    
    return {heading, taskList};
})()

const render = (() => {
    const tasksPage = (tasks) => {
        const contentDiv = document.getElementById('main-content');
        contentDiv.innerHTML = ''
        contentDiv.appendChild(create.heading());
        contentDiv.appendChild(create.taskList(tasks));
    }
    return {tasksPage};
})()

export default taskControl;