import './style.css';
import {APP, FORM, SAVELS} from "./constants/constants"
import AppList from "./components/app-list"
import Form from "./components/form";
import * as api from "./services/localstorageFunctional";
import {Message} from "./components/list-message";
import {saveBtn} from "./components/save-btn";

function component() {

    const nodeForm = document.querySelector(APP);
    const form = document.querySelector(FORM);

    let addHandler = (value) => {
        const message = Message(value);
        inputList.push(message);
    };
    const inputList = AppList();
    const formView = Form();
    formView.setHandler(addHandler);
    form.append(formView.getForm());
    nodeForm.append(inputList.getNode());
    const loading = () => {
        let items;
        try {
            items = api.load();
        } catch (err) {
            items = [];
        }

        items.forEach(item =>
           inputList.push(
                message({ value: item})
            )
        );
    };
    const saving = () => {
        const data = inputList.getMessages().map(element =>(element.value));
        api.save(data);
        console.log(localStorage)
    };
    saveBtn(saving);
    // formView.setHandlerLS(saving());
    loading();


    return nodeForm;
}

document.body.appendChild(component());