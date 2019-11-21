import {getNodeFromString} from "../services/utils"

const template = `<div class="todo-list-of-messages"></div>`;
export default function AppList() {
    const node = getNodeFromString(template);

    let messages = [];

    const push = (message) => {
        messages = [...messages, message];
        message.onDelete(deleteHandler);
        node.append(message.getMessage())
    };
    const deleteHandler=id=>{
        const deleteMessage=messages.find(element=>element.getMessageId()===id);
        messages=messages.filter(element=>element.getMessageId()!==id);
        deleteMessage.getMessage().remove();
    };
    return {
        getNode: () => node,
        push,
        getMessages:()=>messages
    }
}