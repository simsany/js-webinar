/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "";
    }
    return arr.reduce((a, b) => a.length >= b.length ? a > b ? b : a : b);
}

module.exports = longestString