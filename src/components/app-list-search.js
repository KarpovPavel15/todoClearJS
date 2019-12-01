import Main from "./main";
import {listTemplates} from "../template/templateListSearch";


export default class AppListSearch extends Main{
    constructor() {
        super(AppListSearch.getTemplates());
        this._messagesSearch = [];
        this._template=this.node;
        this.includeMessages=[];
    }

    pushForAddSearch = (message) => {
        this._messagesSearch = [...this._messagesSearch, message];
        message.onRemoveHandler = this.deleteHandlerSearch;
        this.includeMessages.push(message.node)
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
    get getIncludeMessages(){
        return this.includeMessages
    }
    get getSearchMessages(){
        return this._messagesSearch;
    }
    set clearIncludeMessages(emptyArr){
        emptyArr=[];
        this.includeMessages=emptyArr;
    }
}