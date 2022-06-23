const sc = (v1, v2) => {
    if (v1 === null && v2 === null) return true;
    if (v1 === null || v2 === null) return false;

    if (!v1 && !v2) return true;
    if (!v1 || !v2) return false;

    if (typeof v1 === typeof v2) {
        if (typeof v1 === 'object') return JSON.stringify(sortAttrs(v1)) === JSON.stringify(sortAttrs(v2));
        return v1 === v2;
    }
    return false;
};

const sortAttrs = (unordered) => {
    return Object.keys(unordered).sort().reduce(
        (obj, key) => {
            obj[key] = unordered[key];
            return obj;
        }, {});
};

module.exports = sc;