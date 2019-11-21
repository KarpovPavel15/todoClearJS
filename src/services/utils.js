export function getNodeFromString(template) {
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .body.firstChild
}

export function cloneTemplateNode(selector) {
    return document
        .querySelector(selector)
        .cloneNode(true);
}
