import Message from "./list-message";
import App from "../app";

let lastElementForFirstLoad = 14;
let lastElementForNextLoad = 27;

export function loading(inputList) {
    let items = App.getLocalStorageItems;
    if (items !== null) {
        items.slice(0, lastElementForFirstLoad).forEach(item =>
            inputList.pushForAdd(
                new Message({value: item.value})
            )
        );
    }
}

export function loadAndShow (event,inputList) {
    let {scrollHeight, scrollTop, offsetHeight} = event.target;
    if (scrollHeight < scrollTop + offsetHeight) {
        let items = App.getLocalStorageItems;
        if (items !== null) {
            items.forEach((item, index) => {
                if (index > lastElementForFirstLoad && index <= lastElementForNextLoad && index <= items.length - 1) {
                    if (index <= lastElementForNextLoad && index === items.length - 1) {
                        lastElementForNextLoad = index + 1
                    }
                    inputList.pushForAdd(
                        new Message({value: item.value})
                    )
                }
            });
            lastElementForFirstLoad = lastElementForNextLoad;
            lastElementForNextLoad += 13;
        }
    }
}

export function loadingInclude(inputListSearch) {
    let items =inputListSearch.getIncludeMessages;
    if (items !== null) {
        items.slice(0, lastElementForFirstLoad).forEach(item =>
            inputListSearch.getNode.append(item)
        );
    }
}

export function loadAndShowIncludeItem (event,inputListSearch) {
    let {scrollHeight, scrollTop, offsetHeight} = event.target;
    if (scrollHeight < scrollTop + offsetHeight) {

        let items =inputListSearch.getSearchMessages;
        if (items !== null) {
            items.forEach((item, index) => {
                if (index >= lastElementForFirstLoad && index <= lastElementForNextLoad && index <= items.length - 1) {
                    if (index <= lastElementForNextLoad && index === items.length - 1) {
                        lastElementForNextLoad = index + 1
                    }
                    inputListSearch.getNode.append(item.node)
                }
            });
            lastElementForFirstLoad = lastElementForNextLoad;
            lastElementForNextLoad += 13;
        }
    }
}
