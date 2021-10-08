export function isUndefined(value) {
    return value === undefined;
}

export function isNull(value) {
    return value === null;
}

export function isBoolean(value) {
    return typeof value === 'boolean';
}

export function isNumber(value) {
    return typeof value === 'number';
}

export function isString(value) {
    return typeof value === 'string';
}

export function isArray(value) {
    return Array.isArray(value);
}

export function isObject(value) {
    return typeof value === 'object' && !isNull(value) && !isArray(value);
}