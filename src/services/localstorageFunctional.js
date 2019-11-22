const LOCAL_STORAGE_APP = "LOCAL_STORAGE_APP";

export const load=()=> {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP));
    return items
};
export const save=(items)=> {
    localStorage.setItem(LOCAL_STORAGE_APP, JSON.stringify(items));
    console.log(items)
};