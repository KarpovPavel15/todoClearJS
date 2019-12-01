import Main from "./main";
import {templateButtonLS} from "../template/templateForm";

export default class SaveBtn extends Main{
    constructor(handler) {
        super(templateButtonLS);
        this._node.addEventListener("click", handler);
    }
}
