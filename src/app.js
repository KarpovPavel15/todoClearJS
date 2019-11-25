import Message from "./components/list-message";
import AppList from "./components/app-list";
import Form from "./components/form";
import * as api from "./services/localstorageFunctional";
import SaveBtn from "./components/save-btn";
import InputArea from "./components/input-area";

export default class App {
    constructor(root) {
        this._root = root;
        this._inputList = new AppList();
        this._formView = new Form();
        this._saveBtn = new SaveBtn(this._saving);
        this._includeMessages = new InputArea();

        this._lastElementForFirstLoad=14;
        this._lastElementForNextLoad=27;

        this._formView.handler = value => {
            const message = new Message({value});
            this._inputList.pushForAdd(message);
        };

        this._inputList._node.addEventListener('scroll',this._loadAndShow);
        // this._includeMessages._node.addEventListener('change',this._showInclude);

        this._loading();
        this._render();
    }

    _render() {
        this._formView.node.append(this._saveBtn.node);
        this._formView.node.append(this._includeMessages.node);
        this._root.append(this._formView.node);
        this._root.append(this._inputList.getNode);
    }

    _showInclude(){

    }

    _loading() {
        let items;
        try {
            items = api.load();
        } catch (err) {
            items = [];
        }
        if (items !== null) {
            items.slice(0, this._lastElementForFirstLoad).forEach(item =>
                this._inputList.pushForAdd(
                    new Message({value: item.value})
                )
            );


        }
    };

    _loadAndShow=(event)=> {
        let {scrollHeight, scrollTop, offsetHeight} = event.target;

        if (scrollHeight < scrollTop + offsetHeight) {
            console.log(scrollTop);
            let items;
            try {
                items = api.load();
            } catch (err) {
                items = [];
            }
            if (items !== null) {
                items.forEach((item, index) => {
                    if (index >= this._lastElementForFirstLoad && index <= this._lastElementForNextLoad && index<=items.length-1) {
                        if(index <= this._lastElementForNextLoad && index===items.length-1){
                            this._lastElementForNextLoad=index+1
                        }
                        this._inputList.pushForAdd(
                            new Message({value: item.value})
                        )
                    }
                });
                this._lastElementForFirstLoad=this._lastElementForNextLoad;
                this._lastElementForNextLoad+=13;
            }
        }
    }


    _saving = () => {
        const data = this._inputList.getMessages.map(element => ({value: element.value}));
        api.save(data);
        console.log(localStorage)
    };

}

