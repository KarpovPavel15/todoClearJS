import './style.css';
import {APP, FORM} from "./constants/constants"
import {createMessage} from "./templates/createMessage.jsx";
import FormButton from "./components/form-button"
import FormInput from "./components/form-input"
import AppList from "./components/app-list"

function component() {

    const nodeForm = document.querySelector(APP);
    const form = document.querySelector(FORM);

    const inputList = AppList();

    const buttonView = FormButton();
    const inputView = FormInput();

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