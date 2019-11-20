import {templateParse} from "../templates/template"

const template=`<div class="todo-list-of-messages"></div>`;
export default function AppList() {
    return templateParse(template)
}