export const templateParse=(template)=>{
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .body.firstChild
};