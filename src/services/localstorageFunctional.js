const localstorageapp="localstoragAapp";

export const load=()=> {
    return localStorage.getItem(localstorageapp)
};
export const save=(items)=> {
    localStorage.setItem(localstorageapp, JSON.stringify(items));
}