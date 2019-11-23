import Message from "./components/list-message";
import AppList from "./components/app-list";
import Form from "./components/form";
import * as api from "./services/localstorageFunctional";
import SaveBtn from "./components/save-btn";

export default class App {
    constructor(root) {
        this._root=root;
        this._inputList = new AppList();
        this._formView = new Form();
        this._saveBtn = new SaveBtn(this._saving);

        this._formView.handler = value => {
            const message = new Message({value});
            this._inputList.pushForAdd(message);
        };

        this._loading();
        this._render();
    }

    _render(){
        this._formView.node.append(this._saveBtn.node);
        this._root.append(this._formView.node);
        this._root.append(this._inputList.getNode);
    }

    _loading(){
        let items;
        try {
            items = api.load();
        } catch (err) {
            items = [];
        }

        items.forEach(item =>
            this._inputList.pushForAdd(
                new Message({value: item.value})
            )
        );
    };

    _saving=()=>{
        const data = this._inputList.getMessages.map(element => ({value: element.value}));
        api.save(data);
        console.log(localStorage)
    };

}

