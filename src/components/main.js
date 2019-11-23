import {getNodeFromString} from "../services/utils"
export default class Main {
    constructor(template) {
        this._node = getNodeFromString(template);
    }
    get node() {
        return this._node;
    }
}
