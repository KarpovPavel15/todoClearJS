import './style.css';
import {getNodeForForm,getNodeList,getNodeMessage} from "./components/clone-node";
import {APP} from "./constants/constants"
function component() {
    const appArea=document.querySelector(APP);
    const nodeForm=getNodeForForm();
    const nodeList=getNodeList();
    const nodeMessage=getNodeMessage();
    appArea.append(nodeForm);
    appArea.append(nodeList);
    nodeList.append(nodeMessage);
    return appArea;
}

document.body.appendChild(component());