import {TODOADDMESSAGE, INPUTDATA, INPUTDATAFORSEARCH} from "../constants/constants"
import Main from "./main";
import {templateForm} from "../template/templateForm";

export default class Form extends Main{
    constructor(){
        super(templateForm);
        this._btn = this._node.querySelector(TODOADDMESSAGE);
        this._input = this._node.querySelector(INPUTDATA);
        // this._inputForSearch = this.node.querySelector(INPUTDATAFORSEARCH);

        this._btn.addEventListener('click',this.click);
        // this._inputForSearch.addEventListener('change',this.searchInitialHandler);
    }

    click=()=>{
            const val = this._input.value;
            if (val !== '') this._handler(val);
            this._input.value = ''
    };
    // searchInitialHandler=() => this._handler(this._id);

    set handler(handler){
        this._handler=handler;
    }

    get node() {
        return this._node;
    }
}