import {templateParse} from "../templates/template"

const template=`<input type="text" placeholder="input your message..." class="todo-form_input-message"/>`;
export default function FormInput() {
    return templateParse(template)
}