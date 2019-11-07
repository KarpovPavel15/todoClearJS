export let getNodeForForm=()=>{
    return document.querySelector("#todo-form").content.querySelector(".todo-form").cloneNode(true);
};
export let getNodeMessage=()=>{
    return document.querySelector("#todo-message").content.querySelector(".todo-element").cloneNode(true);
}
export let getNodeList=()=>{
    return document.querySelector("#todo-list-of-messages").content.querySelector(".todo-list-of-messages").cloneNode(true);
};