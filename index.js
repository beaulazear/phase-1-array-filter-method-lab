function findMatching(array, string) {
    let noCap = array.filter(driver => driver.toLowerCase() === string.toLowerCase());
    return noCap;
}

function fuzzyMatch(array, string) {
    let firstFew = array.filter(driver => driver.slice(0,2) === string);
    return firstFew;
}

function matchName(array, string) {
    let matching = array.filter(driver => driver.name === string);
    return matching;
}