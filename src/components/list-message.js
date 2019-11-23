import {DELETEBTN} from "../constants/constants";
import Main from "./main";

export default class Message extends Main{
    static idMessage = 0;

    constructor({value}) {
        super(Message.getMessage({value}));
        this._id = Message.getIdMessage();
        this._value = value;
        this._btn = this.node.querySelector(DELETEBTN);

        this._btn.addEventListener('click', this.onDelete);
    }

    static getMessage({value}){
        return `<div class="todo-element">
        <div class="todo-element_message">${value}</div>
        <button class="todo-element_remove-message">Remove</button>
        </div>`
    }
    static getIdMessage = () => {
        return Message.idMessage++
    };

    onDelete = () => this._handler(this._id);

    get value() {
        return this._value;
    }

    get id() {
        return this._id;
    }

    set onRemoveHandler(handler) {
        this._handler = handler;
    }
}