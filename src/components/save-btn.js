import {SAVELS} from "../constants/constants";

export const saveBtn=(handler)=>{
    const btnSave = document.querySelector(SAVELS);
    btnSave.addEventListener("click", handler);
}
