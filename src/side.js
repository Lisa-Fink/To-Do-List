import {ToDoList, Project, Todo, todoLists} from './classes';
import {contentController} from '.';
import { allProjRender } from './allProjects';

const sideFunc = (() => {
    const createProject = (name) => {
        let newProject = new Project(name);
        return newProject;
    }
    const getInputName = () => {
        const input = document.getElementById('project-name-input');
        return input.value;
    }
    const getProject = (e) => {
        return e.target.data;
    }
    const getTaskType = (e) => {
        return e.target.attributes[0].nodeValue;
    }
    
    return {createProject, getInputName, getProject, getTaskType};
})()

const sideControl = (() => {
    const makeNewProject = () => {
        const name = sideFunc.getInputName();
        let newProject = sideFunc.createProject(name);
        todoLists.addProject(newProject);
        sideRender.hideProjectInput();
        sideRender.update();
    }

    const removeProject = (project) => {
        let index = todoLists.findIndex(project);
        todoLists.removeProject(index);
        sideRender.update();
    }
    const selectTask = (e) => {
        const taskType = sideFunc.getTaskType(e);
        contentController.goToTasks(taskType);
    }
    const selectProject = (e) => {
        const projectClicked = sideFunc.getProject(e);
        contentController.goToProjectPage(projectClicked);
    }
    const cancelProjectInput = () => {
        sideRender.clearInput();
        sideRender.hideProjectInput();
    }

    return {makeNewProject, removeProject, selectProject, cancelProjectInput,
        selectTask};
})()

const sideRender = (() => {
    let projectUl = document.getElementById('projects');
    const input = document.getElementById('project-name-input');
    const update = () => {
        clear();
        sidebar();
        allProjRender.update();
    }

    const sidebar = () => {
        todoLists.projects.forEach(project => {
            let li = document.createElement('li');
            li.innerText = project.name;
            li.data = project;
            projectUl.appendChild(li);
        })
    }
    const clear = () => {
        projectUl.innerHTML = '';
        clearInput()
    }
    const clearInput = () => {
        input.value = '';
    }
    const showProjectInput = () => {
        const inputDiv = document.getElementById('add-project-input');
        inputDiv.style.display != 'block' ? inputDiv.style.display = 'block':
            null
    }
    const hideProjectInput = () => {
        const inputDiv = document.getElementById('add-project-input');
        inputDiv.style.display == 'block' ? inputDiv.style.display = 'none':
            null
    }
    return {update, showProjectInput, hideProjectInput, clearInput};
})();

const eventListeners = (() => {
    const addProject = document.getElementById('add-project');
    addProject.addEventListener('click', sideRender.showProjectInput);

    const addButton = document.getElementById('add-button');
    const cancelButton = document.getElementById('cancel-button');
    addButton.addEventListener('click', sideControl.makeNewProject);
    cancelButton.addEventListener('click', sideControl.cancelProjectInput);

    const projectSelect = document.getElementById('projects');
    projectSelect.addEventListener('click', sideControl.selectProject);

    const taskSelect = document.getElementById('task-view')
    taskSelect.addEventListener('click', sideControl.selectTask)
})();

sideRender.update()

export {sideRender, sideControl, sideFunc};