import Message from "./components/list-message";
import AppList from "./components/app-list";
import Form from "./components/form";
import * as api from "./services/localstorageFunctional";
import SaveBtn from "./components/save-btn";
import InputArea from "./components/input-area";
import AppListSearch from "./components/app-list-search";
import {APPLISTCONTENTCLASS, SEARCH_AREA} from "./constants/constants";

export default class App {
    constructor(root) {
        this._root = root;
        this._inputList = new AppList();
        this._inputListSearch = new AppListSearch();
        this._formView = new Form();
        this._saveBtn = new SaveBtn(this._saving);
        this._includeMessages = new InputArea(App.getLocalStorageItems);


        this._lastElementForFirstLoad = 14;
        this._lastElementForNextLoad = 27;

        this._formView.handler = value => {
            const message = new Message({value});
            this._inputList.pushForAdd(message);
        };

        this._includeMessages.handler = () => {
            const array = this._includeMessages._arrayIncludes;
            this._listMessages=this._root.querySelector(APPLISTCONTENTCLASS);
            this._listMessages.classList.add("hide");
            this._searchArea=this._root.querySelector(SEARCH_AREA);
            this._searchArea.classList.add("show");

            array.forEach(value => {
                const message = new Message(value);
                this._inputListSearch.pushForAddSearch(message);
            });
            this._loadingInclude();

        };

        this._inputList._node.addEventListener('scroll', this._loadAndShow);
        this._inputListSearch._node.addEventListener('scroll', this._loadAndShowIncludeItem);

        this._loading();
        this._render();
    }

    _render() {
        this._formView.node.append(this._saveBtn.node);
        this._formView.node.append(this._includeMessages.node);
        this._root.append(this._formView.node);
        this._root.append(this._inputList.getNode);
        this._root.append(this._inputListSearch.getNode);
    }

    _loading() {
        let items = App.getLocalStorageItems;
        if (items !== null) {
            items.slice(0, this._lastElementForFirstLoad).forEach(item =>
                this._inputList.pushForAdd(
                    new Message({value: item.value})
                )
            );
        }
    };
    _loadingInclude() {
        let items = AppListSearch.getArrayInclude();
        if (items !== null) {
            items.slice(0, this._lastElementForFirstLoad).forEach(item =>
                this._inputListSearch.pushForAddSearch(
                    new Message({value: item.value})
                )
            );
        }
    };
    _loadAndShow = (event) => {
        let {scrollHeight, scrollTop, offsetHeight} = event.target;

        if (scrollHeight < scrollTop + offsetHeight) {
            let items = App.getLocalStorageItems;
            if (items !== null) {
                items.forEach((item, index) => {
                    if (index >= this._lastElementForFirstLoad && index <= this._lastElementForNextLoad && index <= items.length - 1) {
                        if (index <= this._lastElementForNextLoad && index === items.length - 1) {
                            this._lastElementForNextLoad = index + 1
                        }
                        this._inputList.pushForAdd(
                            new Message({value: item.value})
                        )
                    }
                });
                this._lastElementForFirstLoad = this._lastElementForNextLoad;
                this._lastElementForNextLoad += 13;
            }
        }
    };
    _loadAndShowIncludeItem = (event) => {
        let {scrollHeight, scrollTop, offsetHeight} = event.target;

        if (scrollHeight < scrollTop + offsetHeight) {
            let items =AppListSearch.getArrayInclude();
            if (items !== null) {
                items.forEach((item, index) => {
                    if (index >= this._lastElementForFirstLoad && index <= this._lastElementForNextLoad && index <= items.length - 1) {
                        if (index <= this._lastElementForNextLoad && index === items.length - 1) {
                            this._lastElementForNextLoad = index + 1
                        }
                        this._inputListSearch.pushForAddSearch(
                            new Message({value: item.value})
                        )
                    }
                });
                this._lastElementForFirstLoad = this._lastElementForNextLoad;
                this._lastElementForNextLoad += 13;
            }
        }
    };

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

