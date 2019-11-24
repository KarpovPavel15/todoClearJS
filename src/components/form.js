import {TODOADDMESSAGE, INPUTDATA} from "../constants/constants"
import Main from "./main";
import {templateForm} from "../template/templateForm";

export default class Form extends Main{
    constructor(){
        super(templateForm);
        this._btn = this._node.querySelector(TODOADDMESSAGE);
        this._input = this._node.querySelector(INPUTDATA);

        this._btn.addEventListener('click',this.click);
    }

    click=()=>{
            const val = this._input.value;
            if (val !== '') this._handler(val);
            this._input.value = ''
    };

    set handler(handler){
        this._handler=handler;
    }

    get node() {
        return this._node;
    }
}