import {APPLISTCONTENTCLASS} from "../constants/constants"

export const listOfMessages = () => {
    const templateList= `<div class="todo-list-of-messages"></div>`;
    return new DOMParser()
        .parseFromString(templateList, 'text/html')
        .querySelector(APPLISTCONTENTCLASS);
};