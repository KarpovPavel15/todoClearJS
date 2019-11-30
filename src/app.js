import Message from "./components/list-message";
import AppList from "./components/app-list";
import Form from "./components/form";
import * as api from "./services/localstorageFunctional";
import SaveBtn from "./components/save-btn";
import InputArea from "./components/input-area";
import AppListSearch from "./components/app-list-search";
import {APPLISTCONTENTCLASS, SEARCH_AREA} from "./constants/constants";
import {loadAndShow, loadAndShowIncludeItem, loading, loadingInclude} from "./components/loading-logic";

export default class App {
    constructor(root) {
        this._root = root;
        this._inputList = new AppList();
        this._inputListSearch = new AppListSearch(this._inputList);
        this._formView = new Form();
        this._saveBtn = new SaveBtn(this._saving);
        this._includeMessages = new InputArea(App.getLocalStorageItems);
        this.emptyArr = [];
        this._formView.handler = value => {
            const message = new Message({value});
            this._inputList.pushForAdd(message);
        };

        this._includeMessages.handler = () => {
            const array = this._includeMessages._arrayIncludes;
            this._listMessages = this._root.querySelector(APPLISTCONTENTCLASS);
            this._listMessages.classList.add("hide");
            this._searchArea = this._root.querySelector(SEARCH_AREA);
            this._searchArea.classList.add("show");
            array.forEach(value => {
                const message = new Message(value);
                this._inputListSearch.pushForAddSearch(message);
            });
            this.show();
            this.setArr();
        };

        this._inputList._node.addEventListener('scroll', (event) => loadAndShow(event, this._inputList));

        this._inputListSearch._node.addEventListener('scroll', (event) => loadAndShowIncludeItem(event, this._inputListSearch, this._includeMessages));

        loading(this._inputList);

        this._render();
    }

    setArr() {
        this._inputListSearch.clearIncludeMessages=this.emptyArr;
    }

    show() {
        loadingInclude(this._inputListSearch, this._includeMessages);
    }

    _render() {
        this._formView.node.append(this._saveBtn.node);
        this._formView.node.append(this._includeMessages.node);
        this._root.append(this._formView.node);
        this._root.append(this._inputList.getNode);
        this._root.append(this._inputListSearch.getNode);
    }


    static get getLocalStorageItems() {
        let items;
        try {
            items = api.load();
        } catch (err) {
            items = [];
        }
        return items
    }

    _saving = () => {
        const data = this._inputList.getMessages.map(element => ({value: element.value}));
        api.save(data);
        console.log(localStorage)
    };

}

