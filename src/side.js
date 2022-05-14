import {ToDoList, Project, Todo} from './classes';
import goToProjectPage from '.';


const todoLists = new ToDoList;

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
    
    return {createProject, getInputName, getProject};
})()

const sideControl = (() => {
    const makeNewProject = () => {
        const name = sideFunc.getInputName();
        let newProject = sideFunc.createProject(name);
        todoLists.addProject(newProject);
        sideRender.toggleProjectInput();
        sideRender.update();
    }

    const removeProject = (project) => {
        let index = todoLists.findIndex(project);
        todoLists.removeProject(index);
        sideRender.update();
    }

    const selectProject = (e) => {
        const projectClicked = sideFunc.getProject(e);
        goToProjectPage(projectClicked);
    }
    const cancelProjectInput = () => {
        sideRender.clearInput();
        sideRender.toggleProjectInput();
    }
    return {makeNewProject, removeProject, selectProject, cancelProjectInput};
})()

const sideRender = (() => {
    let projectUl = document.getElementById('projects');
    const input = document.getElementById('project-name-input');
    const update = () => {
        clear();
        sidebar();
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
        input.value = '';
    }
    const clearInput = () => {
        input.value = '';
    }
    const toggleProjectInput = () => {
        const inputDiv = document.getElementById('add-project-input');
        inputDiv.style.display == 'block' ? inputDiv.style.display = 'none':
            inputDiv.style.display = 'block';
    }
    return {update, toggleProjectInput, clearInput};
})();

const eventListeners = (() => {
    const addProject = document.getElementById('add-project');
    addProject.addEventListener('click', sideRender.toggleProjectInput);

    const addButton = document.getElementById('add-button');
    const cancelButton = document.getElementById('cancel-button');
    addButton.addEventListener('click', sideControl.makeNewProject);
    cancelButton.addEventListener('click', sideControl.cancelProjectInput);

    const projectSelect = document.getElementById('projects');
    projectSelect.addEventListener('click', sideControl.selectProject);
})();

export {sideRender, eventListeners, sideControl, sideFunc};