import {getNodeFromString} from "../services/utils"
import {DELETEBTN} from "../constants/constants";

let idMessage = 0;
let getIdMessage = () => {
    return idMessage++
}
export const Message = ({value}) => {
    const templateMessage = `
    <div class="todo-element">
        <div class="todo-element_message">${value}</div>
        <button class="todo-element_remove-message">Remove</button>
    </div>
    `;
    const id = getIdMessage();
    const elementMessage = getNodeFromString(templateMessage);
    const btn = elementMessage.querySelector(DELETEBTN);
    let getValue=()=>{
        return value
    }
    let onDelete = (handler) => {
        btn.addEventListener('click', () => handler(id))
    };
    return {
        getMessage: () => elementMessage,
        getMessageId: () => id,
        onDelete,
        getValue
    }
};