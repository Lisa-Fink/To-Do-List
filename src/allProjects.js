import { todoLists } from "./classes";
import projectControl from "./projectPage";
import { contentController, makeIcon } from ".";
import { sideRender } from "./side";

const allProjControl = (() => {
    const makePage = () => {
        allProjRender.page();
    }
    const projFunctions = (e) => {
        const projectClicked = e.target.parentElement.parentElement.data;
        const funcClicked =  e.target.data;
        if (funcClicked == 'view') {
            viewProject(projectClicked);
        } else if (funcClicked == 'rename') {
            renameProject(projectClicked, e);
        } else if (funcClicked == 'delete') {
            deleteProject(projectClicked);
        }
    }
    const viewProject = (project) => {
        contentController.goToProjectPage(project);
    }
    const renameProject = (project, e) => {
        const h3 = e.target.parentElement.parentElement.firstChild
        allProjRender.changeToInput(project, h3)
    }

    const makeEdit = (e) => {
        const projClicked = e.target.parentElement.parentElement.parentElement.parentElement.data;
        const newName = e.target.parentElement.parentElement[0].value;
        projClicked.name = newName;
        sideRender.update();
    }
    const processEdit = (e) => {
        if (e.target.innerText = 'check_circle') {
            makeEdit(e)
        } else {
            allProjRender.update();
        }
    }

    return {makePage, viewProject, projFunctions, processEdit};
})()

const allProjCreate = (() => {
    const heading = () => { 
        const head = document.createElement('h2');
        head.innerText = 'My Projects';
        return head;
        }
    const inputForm = (project) => {
        const form = document.createElement('form');
        form.style.display = 'flex';
        const nameInput = document.createElement('input');
        nameInput.value = project.name;

        const buttonDiv = document.createElement('div');


        buttonDiv.appendChild(makeIcon('check_circle'))
        buttonDiv.appendChild(makeIcon('cancel'))
        buttonDiv.addEventListener('click', allProjControl.processEdit)

        form.appendChild(nameInput)
        form.appendChild(buttonDiv)
        return form
    }
    const projList = () => {
        const projectUl = document.createElement('ul');
        todoLists.projects.forEach(project => {
            projectUl.appendChild(projCard(project));
        })
        return projectUl;
    }
    const projCard = (project) => {
        let li = document.createElement('li');
            li.data = project;
            li.classList.add('proj-card');

            const projHead = document.createElement('h3');
            projHead.innerText = project.name;

            const projItems = document.createElement('p');
            projItems.innerText = `${project.todos.length} tasks`;

            const projLink = document.createElement('div');
            const view = document.createElement('p');
            view.innerText = 'view project'
            view.data = 'view'
            const rename = document.createElement('p');
            rename.innerText = 'rename'
            rename.data = 'rename'
            const del = document.createElement('p')
            del.innerText = 'delete'
            del.data = 'delete'
            
            projLink.appendChild(view)
            projLink.appendChild(rename)
            projLink.appendChild(del)
            projLink.addEventListener('click', allProjControl.projFunctions);

            li.appendChild(projHead);
            li.appendChild(projItems);
            li.appendChild(projLink);
            return li;
    }
    return {projList, heading, inputForm};
})()

const allProjRender = (() => {
    const changeToInput = (project, toBeChanged) => {
        toBeChanged.innerHTML = ''
        toBeChanged.appendChild(allProjCreate.inputForm(project));
    }
    const page = () => {
        const contentDiv = document.getElementById('main-content');
        contentDiv.innerHTML = '';
        contentDiv.appendChild(allProjCreate.heading());
        contentDiv.appendChild(allProjCreate.projList());
    }
    const update = () => {
        page()
    }
    return {page, update, changeToInput};
})()

export {allProjControl, allProjRender};