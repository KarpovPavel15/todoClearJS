import {templateParse} from "../templates/template"

const template=`<button class="todo-form_add-message">Add</button>`;
export default function FormButton() {
    return templateParse(template)
}