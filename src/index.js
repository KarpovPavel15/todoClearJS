import './style.css';
import {APP, FORM} from "./constants/constants"
import {createMessage} from "./templates/createMessage.jsx";
import {listOfMessages} from "./templates/listOfMessages.jsx";
import {createButton} from "./templates/createButton.jsx";
import {createInput} from "./templates/createInput.jsx";

function component() {

    const nodeForm = document.querySelector(APP);
    const form = document.querySelector(FORM);

    const inputList = listOfMessages();

    const buttonView = createButton();
    const inputView = createInput();

    form.append(inputView);
    form.append(buttonView);
    nodeForm.append(inputList);

    const add = () => {
        const message = createMessage({
            content: inputView.value,
            callback: () => message.remove()
        });
        inputList.append(message);
        inputView.value="";

    };
    buttonView.addEventListener("click", add);
    return nodeForm;
}

document.body.appendChild(component());