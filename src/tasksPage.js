import { todoLists } from ".";

const taskControl = (() => {
    const makeTasksPage = (taskViewType) => {
        const taskArray = getTasks(taskViewType);
        render.tasksPage(taskArray);
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
        
        if (tasks) {
            for (let task of tasks) {
                let li = document.createElement('li');
                li.innerText = task.name;
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