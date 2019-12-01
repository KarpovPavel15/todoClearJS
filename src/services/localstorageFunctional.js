const LOCAL_STORAGE_APP = "LOCAL_STORAGE_APP";

export const load=()=> {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP))
};
export const save=(items)=> {
    localStorage.setItem(LOCAL_STORAGE_APP, JSON.stringify(items));
    console.log(items)
};