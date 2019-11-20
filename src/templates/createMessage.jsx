import {DELETEBTN, APPMESSAGECONTENT} from "../constants/constants"
import {templateParse} from "./template";

export const createMessage = ({content,callback}) => {
    const templateMessage = `
    <div class="todo-element">
        <div class="todo-element_message">${content}</div>
        <button class="todo-element_remove-message">Remove</button>
    </div>
    `;

    const elementMessage=templateParse(templateMessage,APPMESSAGECONTENT);

    elementMessage.querySelector(DELETEBTN).addEventListener('click',callback);

    return elementMessage;
};