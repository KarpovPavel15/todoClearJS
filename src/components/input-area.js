import Main from "./main";
import {templateInputForSearch} from "../template/templateForm";
import App from "../app";
import {APPMESSAGECONTENTFORLIST} from "../constants/constants";


export default class InputArea extends Main {
    constructor() {
        super(templateInputForSearch);
        this._listLS = App.getLocalStorageItems;
        this._lists=document.getElementsByClassName(APPMESSAGECONTENTFORLIST);
        this._node.addEventListener('keydown', this.searchInitialHandler);
    }

    searchInitialHandler = () => {
        while (this._lists.length !== 0) {
            this._lists[0].parentNode.removeChild(this._lists[0])
        }

        this._listLS.filter((element, index) => {
            console.log("hi")
        })
    };

}
