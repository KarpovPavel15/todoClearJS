import {INPUTDATA} from "../constants/constants";

export const createInput=()=>{
    const inputTemplete=`<input type="text" placeholder="input your message..." class="todo-form_input-message"/>`;
    return new DOMParser()
        .parseFromString(inputTemplete, 'text/html')
        .querySelector(INPUTDATA)
};