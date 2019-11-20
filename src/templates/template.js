export const templateParse=(template,selectorTemplate)=>{
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .querySelector(selectorTemplate)
};