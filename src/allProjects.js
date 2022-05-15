import { todoLists } from "./classes";
import projectControl from "./projectPage";
import { contentController } from ".";

const allProjControl = (() => {
    const makePage = () => {
        allProjRender.page();
    }
    const viewProject = (e) => {
        const projectClicked = e.target.parentElement.data;
        console.log('clicked')
        contentController.goToProjectPage(projectClicked);
    }
    return {makePage, viewProject};
})()

const allProjCreate = (() => {
    const heading = () => { 
        const head = document.createElement('h2');
        head.innerText = 'My Projects';
        return head;
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

            const projLink = document.createElement('p');
            projLink.innerText = 'View Project';
            projLink.addEventListener('click', allProjControl.viewProject);

            li.appendChild(projHead);
            li.appendChild(projItems);
            li.appendChild(projLink);
            return li;
    }
    return {projList, heading};
})()

const allProjRender = (() => {
    const page = () => {
        const contentDiv = document.getElementById('main-content');
        contentDiv.innerHTML = '';
        contentDiv.appendChild(allProjCreate.heading());
        contentDiv.appendChild(allProjCreate.projList());
    }
    const update = () => {
        page()
    }
    return {page, update};
})()

export {allProjControl, allProjRender};