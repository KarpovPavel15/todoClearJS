import {DELETEBTN} from "../constants/constants.js"
import {templateParse} from "./template";

export const createMessage = ({content,callback}) => {
    const templateMessage = `
    <div class="todo-element">
        <div class="todo-element_message">${content}</div>
        <button class="todo-element_remove-message">Remove</button>
    </div>
    `;

    const elementMessage=templateParse(templateMessage);

    elementMessage.addEventListener('click',callback);

    return elementMessage;
};