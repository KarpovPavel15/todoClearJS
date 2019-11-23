import {getNodeFromString} from "../services/utils"

const template = `<div class="todo-list-of-messages"></div>`;

export default class AppList {
    constructor() {
        this._node = getNodeFromString(template);
        this._messages = [];
    }

    push = message => {
        this._messages = [...this._messages, message];
        message.onRemoveHandler = this.deleteHandler;
        this._node.append(message.node)
    };

    deleteHandler = id => {
        const deleteMessage = this._messages.find(element => element.id === id);
        this._messages = this._messages.filter(element => element.id !== id);
        deleteMessage._node.remove();
    };

    get getMessages() {
        return this._messages;
    }

    get getNode() {
        return this._node;
    }
}