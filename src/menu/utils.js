const defaultValues = {
    top: false,
    bottom: false,
    center: false,
    left: false,
    right: false
};

export function getAnchorOrigin(anchorOrigin = '') {
    if (typeof anchorOrigin === 'object') {
        return Object.assign({}, defaultValues, anchorOrigin);
    }

    const keys = anchorOrigin.split(' ');

    const values = keys.reduce((result, key) => {
        result[key] = true;

        return result;
    }, {});

    return Object.assign({}, defaultValues, values);
}