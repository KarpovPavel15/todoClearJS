import {SAVELS} from "../constants/constants";
import {getNodeFromString} from "../services/utils";

const BTN_TEMPLATE = ({ value }) =>
    `<button class="${SAVELS}">${value}</button>`;
export const saveBtn=(handler)=>{
    const btnSave = document.querySelector(SAVELS);
    const node=getNodeFromString(BTN_TEMPLATE);
    BTN_TEMPLATE({ value: "Save" });
    btnSave.addEventListener("click", handler);
}
