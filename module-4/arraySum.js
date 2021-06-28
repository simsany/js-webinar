/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(arr) {
    return !Array.isArray(arr) || !arr.flat(Infinity).length ? 0 :
        arr.flat(Infinity).filter(a => Number.isInteger(a)).reduce((a, b) => a + b);
}

module.exports = arraySum;

