export function getCleanString(inputString) {
    return inputString.replace(/[^A-Za-z0-9 ]/g, '');
}