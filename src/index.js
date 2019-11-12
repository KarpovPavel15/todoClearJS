import './style.css';
import {APP, TODOADDMESSAGE, INPUTDATA,APPLISTCONTENTCLASS,APPLIST} from "./constants/constants"
import {createMessage} from "./components/createMessage.jsx";

function component() {
    const messageId =APPLIST;
    const messageSelector =APPLISTCONTENTCLASS;
    const nodeForm = document.querySelector(APP);
    const addMessageBtn = document.querySelector(TODOADDMESSAGE);
    const inputArea = document.querySelector(INPUTDATA);

    let getNodeTemplate = (id, selector) => {
        return document
            .querySelector(id)
            .content.querySelector(selector)
            .cloneNode(true);
    };
    const inputList = getNodeTemplate(messageId, messageSelector);
    nodeForm.append(inputList);

    const add = () => {
        const listMessages = createMessage({
            message: inputArea.value,
            callback: () => listMessages.remove()
        });
        inputList.append(listMessages)
    };
    addMessageBtn.addEventListener("click", add);
    return nodeForm;
}

document.body.appendChild(component());