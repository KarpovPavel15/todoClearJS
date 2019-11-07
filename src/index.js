import './style.css';
import {getNodeForForm,getNodeList,getNodeMessage} from "./components/clone-node";

function component() {
    const appArea=document.querySelector(".todo-app");
    const nodeForm=getNodeForForm();
    const nodeList=getNodeList();
    const nodeMessage=getNodeMessage();
    appArea.append(nodeForm);
    appArea.append(nodeList);
    nodeList.append(nodeMessage);
    return appArea;
}

document.body.appendChild(component());