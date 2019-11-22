export function getNodeFromString(template) {
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .body.firstChild
}