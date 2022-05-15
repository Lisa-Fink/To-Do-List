import { todoLists } from "./classes";
import projectControl from "./projectPage";
import { contentController} from ".";
import { sideRender } from "./side";

const makeIcon = (name) => {
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.innerText = name;
    return span;
};

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
    const deleteProject = (project) => {
        todoLists.removeProject(todoLists.getIndex(project));
        sideRender.update();
    }

    const makeEdit = (e) => {
        const projClicked = e.target.parentElement.parentElement.parentElement.parentElement.data;
        const newName = e.target.parentElement.parentElement[0].value;
        projClicked.name = newName;
        sideRender.update();
    }
    const cancelEdit = () => {
        allProjRender.update();
    }

    return {makePage, viewProject, projFunctions, makeEdit, cancelEdit};
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

        const check = makeIcon('check_circle');
        const cancel = makeIcon('cancel');
        check.addEventListener('click', allProjControl.makeEdit);
        cancel.addEventListener('click', allProjControl.cancelEdit);
        buttonDiv.appendChild(check);
        buttonDiv.appendChild(cancel);

        form.appendChild(nameInput);
        form.appendChild(buttonDiv);
        return form;
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
        const view = makeIcon('open_in_new');
        view.data = 'view'
        const rename = makeIcon('edit')
        rename.data = 'rename'
        const del = makeIcon('delete_forever')
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