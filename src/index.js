import './style.css';
import {APP, FORM, SAVELS} from "./constants/constants"
import AppList from "./components/app-list"
import Form from "./components/form";
import * as api  from "./services/localstorageFunctional";
import {Message} from "./components/list-message";

function component() {

    const nodeForm = document.querySelector(APP);
    const form = document.querySelector(FORM);

    let addHandler=(value)=>{
        const message = Message(value);
        inputList.push(message);
    };


    const inputList = AppList();
    const formView=Form();
    formView.setHandler(addHandler);


    form.append(formView.getForm());
    nodeForm.append(inputList.getNode());

    return nodeForm;
}

document.body.appendChild(component());