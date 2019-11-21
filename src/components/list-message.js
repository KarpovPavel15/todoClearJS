import {getNodeFromString} from "../services/utils"
import {DELETEBTN} from "../constants/constants";

let idMessage = 0;
let getIdMessage = () => {
    return idMessage++
}
export const Message = (content) => {
    const templateMessage = `
    <div class="todo-element">
        <div class="todo-element_message">${content}</div>
        <button class="todo-element_remove-message">Remove</button>
    </div>
    `;
    const id = getIdMessage();
    const elementMessage = getNodeFromString(templateMessage);
    const btn = elementMessage.querySelector(DELETEBTN);

    let onDelete = (handler) => {
        btn.addEventListener('click', () => handler(id))
    };
    return {
        getMessage: () => elementMessage,
        getMessageId: () => id,
        onDelete
    }
};