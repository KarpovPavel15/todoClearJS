import {TODOADDMESSAGE} from "../constants/constants";

export const createButton=()=>{
    const buttonTemplete=`<button class="todo-form_add-message">Add</button>`;
    return new DOMParser()
        .parseFromString(buttonTemplete, 'text/html')
        .querySelector(TODOADDMESSAGE)
};