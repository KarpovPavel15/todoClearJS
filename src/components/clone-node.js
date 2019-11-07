import {APPFORM,APPFORMCONTENT,APPMESSAGE,APPMESSAGECONTENT,APPLIST,APPLISTCONTENTCLASS} from "../constants/constants";

export let getNodeForForm=()=>{
    return document.querySelector(APPFORM).content.querySelector(APPFORMCONTENT).cloneNode(true);
};
export let getNodeMessage=()=>{
    return document.querySelector(APPMESSAGE).content.querySelector(APPMESSAGECONTENT).cloneNode(true);
}
export let getNodeList=()=>{
    return document.querySelector(APPLIST).content.querySelector(APPLISTCONTENTCLASS).cloneNode(true);
};