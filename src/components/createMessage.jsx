import {DELETEBTN,APPMESSAGECONTENT} from "../constants/constants"
export const createMessage = ({message,callback}) => {
    const templateMessage = `
    <div class="todo-element">
        <div class="todo-element_message">${message}</div>
        <button class="todo-element_remove-message">Remove</button>
    </div>
    `;
    const elementMessage=new DOMParser().parseFromString(templateMessage,'text/html').querySelector(APPMESSAGECONTENT);
    elementMessage.querySelector(DELETEBTN).addEventListener('click',callback)
    return elementMessage;
};