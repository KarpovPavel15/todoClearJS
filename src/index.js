import './style.css';
import {APP, TODOADDMESSAGE, INPUTDATA} from "./constants/constants"
import {createMessage} from "./components/createMessage.jsx";
import {listOfMessages} from "./components/listOfMessages.jsx";

function component() {

    const nodeForm = document.querySelector(APP);
    const addMessageBtn = document.querySelector(TODOADDMESSAGE);
    const inputArea = document.querySelector(INPUTDATA);

    const inputList = listOfMessages();
    nodeForm.append(inputList);

    const add = () => {
        const message = createMessage({
            content: inputArea.value,
            callback: () => message.remove()
        });
        inputList.append(message);

    };
    addMessageBtn.addEventListener("click", add);
    return nodeForm;
}

document.body.appendChild(component());