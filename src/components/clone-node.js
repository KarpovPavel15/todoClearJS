import {
    APPFORM,
    APPFORMCONTENT,
    APPMESSAGE,
    APPMESSAGECONTENT,
    APPLIST,
    APPLISTCONTENTCLASS,
    TODOELEMENTMESSAGE,
    DELETEBTN,
    COMPLETEMESSAGE
} from "../constants/constants";

export let getNodeForForm = () => {
    return document.querySelector(APPFORM).content.querySelector(APPFORMCONTENT).cloneNode(true);
};
export let getNodeMessage = () => {
    return document.querySelector(APPMESSAGE).content.querySelector(APPMESSAGECONTENT).cloneNode(true);
};
export let getNodeList = () => {
    return document.querySelector(APPLIST).content.querySelector(APPLISTCONTENTCLASS).cloneNode(true);
};
export let createMessage = (messageContent) => {
    const node = getNodeMessage();
    const deleteMessage = node.querySelector(DELETEBTN);
    deleteMessage.onclick = () => node.remove();
    node.onclick=()=>node.querySelector(TODOELEMENTMESSAGE).classList.toggle(COMPLETEMESSAGE)
    setNodeValue(node, messageContent);
    return node;

};
export let setNodeValue = (node, messageContent) => {
    node.querySelector(TODOELEMENTMESSAGE).textContent = messageContent;
};