import Main from "./main";
import {templateInputForSearch} from "../template/templateForm";

export default class InputArea extends Main{
    constructor(handler) {
        super(templateInputForSearch);
        this._node.addEventListener("change", handler);
    }
}
