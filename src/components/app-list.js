import Main from "./main";
import {listTemplates} from "../template/templateList";


export default class AppList extends Main{
    constructor() {
        super(AppList.getTemplates());
        this._messages = [];
        this._template=this.node;

    }

    pushForAdd = message => {
        this._messages = [...this._messages, message];
        message.onRemoveHandler = this.deleteHandler;
        this._template.append(message.node)
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
        return this._template;
    }
    static getTemplates(){
         return listTemplates ;
    }
}