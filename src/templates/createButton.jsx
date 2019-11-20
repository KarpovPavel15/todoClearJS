import {TODOADDMESSAGE} from "../constants/constants.js";
import {templateParse} from "./template";

export const createButton=()=>{
    const buttonTemplete=`<button class="todo-form_add-message">Add</button>`;
    return templateParse(buttonTemplete,TODOADDMESSAGE);
};