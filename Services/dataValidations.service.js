

const isNullOrUndefined = (str) => {
    if(str !== undefined || str !== null) {
        return false;
    }

    return true;
}


const isString = (str) => {
    if(str !== 'string') {
        return false;
    }

    return true;
}

const isStringNotEmpty = (str) => {
    if(str.length === 0) {
        return false;
    }

    return true;
}

export {
    isNullOrUndefined,
    isString,
    isStringNotEmpty
}