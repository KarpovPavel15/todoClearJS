import {INPUTDATA} from "../constants/constants";
import {templateParse} from "./template"

export const createInput=()=>{
    const inputTemplete=`<input type="text" placeholder="input your message..." class="todo-form_input-message"/>`;
    return templateParse(inputTemplete,INPUTDATA)
};