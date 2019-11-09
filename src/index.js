import './style.css';
import {getNodeForForm,getNodeList,createMessage} from "./components/clone-node";
import {APP,TODOADDMESSAGE,INPUTDATA} from "./constants/constants"
function component() {
    const appArea=document.querySelector(APP);

    const nodeForm=getNodeForForm();
    const nodeList=getNodeList();

    const addMessageBtn=nodeForm.querySelector(TODOADDMESSAGE);
    const inputData=nodeForm.querySelector(INPUTDATA);


    addMessageBtn.onclick=()=>{
      const text=inputData.value;
      const createMessageNode=createMessage(text);
      nodeList.append(createMessageNode);
    };

    appArea.append(nodeForm);
    appArea.append(nodeList);

    return appArea;
}

document.body.appendChild(component());