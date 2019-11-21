import {getNodeFromString} from "../services/utils"
import {TODOADDMESSAGE, INPUTDATA,SAVELS} from "../constants/constants"

const templateButton = `<button class="todo-form_add-message">Add</button>`;
const templateButtonLS = `<button class="todo-form_saveLS">Save</button>`;
const templateInput = `<input type="text" placeholder="input your message..." class="todo-form_input-message"/>`;

const templateForm = `<div class="todo-form">
   ${templateInput}
   ${templateButton}
   ${templateButtonLS}
        </div>`;

export default function Form(handler=null) {
    const form = getNodeFromString(templateForm);
    const btn = form.querySelector(TODOADDMESSAGE);
    const input = form.querySelector(INPUTDATA);
    const btnSave = form.querySelector(SAVELS);

    const setHandler=(handler)=>{
        btn.addEventListener('click', () => {
            const val = input.value;
            if (val !== '') handler(val);
            input.value = ''
        });
    };

    if (handler) setHandler(handler);

    return {
        getForm: ()=>form,
        setHandler
    }
}