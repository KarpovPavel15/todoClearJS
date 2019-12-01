import Main from "./main";
import {templateInputForSearch} from "../template/templateForm";
import App from "../app";
import {APPLISTCONTENTCLASS, APPMESSAGECONTENTFORLIST} from "../constants/constants";


export default class InputArea extends Main {
    constructor() {
        super(templateInputForSearch);
        this._listLS = App.getLocalStorageItems;
        this._lists=document.getElementsByClassName(APPMESSAGECONTENTFORLIST);
        this._inputValue=this.node;
        this._node.addEventListener('keyup',this.searchInitialHandler);
        this._clear();
        this._arrayIncludes=[]
    }

    searchInitialHandler = () => {
        this._clear();
        this._arrayIncludes=this._listLS.filter(element => element.value.toLowerCase().includes(this._inputValue.value.toLowerCase()));
        this._handler(this._arrayIncludes)
    };

    _clear(){
        while (this._lists.length !== 0) {
            this._lists[0].parentNode.removeChild(this._lists[0])
        }

    }
    set handler(handler){
        this._handler=handler;
    }
    get includesElements(){
        return this._arrayIncludes
    }
}
