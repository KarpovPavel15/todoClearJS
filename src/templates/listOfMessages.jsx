import {APPLISTCONTENTCLASS} from "../constants/constants.js"
import {templateParse} from "./template";

export const listOfMessages = () => {
    const templateList= `<div class="todo-list-of-messages"></div>`;
    return templateParse(templateList,APPLISTCONTENTCLASS);
};