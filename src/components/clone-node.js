import {APPFORM,APPFORMCONTENT,APPMESSAGE,APPMESSAGECONTENT,APPLIST,APPLISTCONTENTCLASS,TODOELEMENTMESSAGE} from "../constants/constants";

export let getNodeForForm=()=>{
    return document.querySelector(APPFORM).content.querySelector(APPFORMCONTENT).cloneNode(true);
};
export let getNodeMessage=()=>{
    return document.querySelector(APPMESSAGE).content.querySelector(APPMESSAGECONTENT).cloneNode(true);
};
export let getNodeList=()=>{
    return document.querySelector(APPLIST).content.querySelector(APPLISTCONTENTCLASS).cloneNode(true);
};
export let createMessage=(messageContent)=>{
    const node=getNodeMessage();
    setNodeValue(node,messageContent);
    return node;

};
export let setNodeValue=(node,messageContent)=>{
    node.querySelector(TODOELEMENTMESSAGE).textContent=messageContent;
};