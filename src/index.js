import './style.css';
import {sideRender, sideControl, sideFunc} from './side';
import {ToDoList, Project, Todo} from './classes';
import projectControl from './projectPage';

const goToProjectPage = (project) => {
    projectControl.makePage(project)
}


export default goToProjectPage