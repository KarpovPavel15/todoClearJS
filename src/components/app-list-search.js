import Main from "./main";
import {listTemplates} from "../template/templateListSearch";


export default class AppListSearch extends Main{
    constructor() {
        super(AppListSearch.getTemplates());
        this._messagesSearch = [];
        this._template=this.node;

    }

    pushForAddSearch = message => {
        this._messagesSearch = [...this._messagesSearch, message];
        message.onRemoveHandler = this.deleteHandlerSearch;
        this._template.append(message.node)
    };

    deleteHandlerSearch = id => {
        const deleteMessageSearch = this._messagesSearch.find(element => element.id === id);
        this._messagesSearch = this._messagesSearch.filter(element => element.id !== id);
        deleteMessageSearch._node.remove();
    };
    static getTemplates(){
        return listTemplates ;
    }
    get getNode() {
        return this._template;
    }
    static getArrayInclude(){
        return AppListSearch.this._messagesSearch
    }
}